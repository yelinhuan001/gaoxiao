// ==UserScript==
// @name        nlm在线播放完善版
// @description 适用于 你老母的付费视频解锁脚本
// @version     0.0.7
// @author      揸你车头灯
// @match       https://www.haijiao.pro/post/details?pid=*
// @match       https://haijiao.pro/post/details?pid=*
// @grant       none
// @iconURL     https://www.haijiao.pro/favicon.ico
// @license     gplv3
// @namespace   http://tampermonkey.net/
// @run-at      document-start
// @downloadURL https://update.sleazyfork.org/scripts/500727/haijiao-pro-video-crack.user.js
// @updateURL   https://update.sleazyfork.org/scripts/500727/haijiao-pro-video-crack.meta.js
// ==/UserScript==

(() => { // webpackBootstrap
    "use strict";

    // 工具函数
    class Utils {
        // 获取当前时间戳，格式为 HH:MM:SS.sss
        static now() {
            return new Date().toISOString().slice(11, 23).replace('T', ' ').replace('Z', '');
        }

        // 记录带时间戳的日志消息
        static log(level, ...args) {
            console[level](`[${this.now()}]`, ...args);
        }

        static info(...args) {
            this.log('info', ...args);
        }

        static error(...args) {
            this.log('error', ...args);
        }

        // 断言条件，如果为 false 则抛出错误
        static assert(condition, message) {
            if (!condition) {
                throw new Error(message || 'Assertion failed');
            }
        }

        // 在可迭代对象中查找最后一个匹配谓词的元素
        static findLast(iterable, predicate) {
            for (let i = iterable.length - 1; i >= 0; i--) {
                if (predicate(iterable[i])) {
                    return iterable[i];
                }
            }
            return null;
        }

        // 获取 URL 的父路径
        static getParentPath(url) {
            return url.split("/").slice(0, -1).join("/");
        }

        // 创建视频播放器并加载 m3u8 文件
        static playM3U8(m3u8Url) {
            const videoContainer = document.createElement('div');
            videoContainer.style = `
                position: fixed;
                left: 1em;
                top: 1em;
                width: 60%;
                height: 60%;
                z-index: 9999;
                background-color: black;
                cursor: move;
            `;
            videoContainer.id = 'videoContainer';

            const video = document.createElement('video');
            video.controls = true;
            video.autoplay = true;
            video.style = `
                width: 100%;
                height: 100%;
            `;

            const closeButton = document.createElement('button');
            closeButton.textContent = '关闭';
            closeButton.style = `
                position: absolute;
                right: 1em;
                top: 1em;
                font-size: 1.5em;
                background-color: red;
                color: white;
                border: none;
                cursor: pointer;
                z-index: 10000;
            `;
            closeButton.onclick = () => document.body.removeChild(videoContainer);

            videoContainer.appendChild(video);
            videoContainer.appendChild(closeButton);
            document.body.appendChild(videoContainer);

            // 使视频容器可拖动
            videoContainer.onmousedown = function (event) {
                event.preventDefault();

                let shiftX = event.clientX - videoContainer.getBoundingClientRect().left;
                let shiftY = event.clientY - videoContainer.getBoundingClientRect().top;

                function moveAt(pageX, pageY) {
                    videoContainer.style.left = pageX - shiftX + 'px';
                    videoContainer.style.top = pageY - shiftY + 'px';
                }

                function onMouseMove(event) {
                    moveAt(event.pageX, event.pageY);
                }

                document.addEventListener('mousemove', onMouseMove);

                document.onmouseup = function () {
                    document.removeEventListener('mousemove', onMouseMove);
                    document.onmouseup = null;
                };
            };

            videoContainer.ondragstart = function () {
                return false;
            };

            if (Hls.isSupported()) {
                const hls = new Hls();
                hls.loadSource(m3u8Url);
                hls.attachMedia(video);
                hls.on(Hls.Events.MANIFEST_PARSED, () => {
                    video.play();
                });
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = m3u8Url;
                video.addEventListener('loadedmetadata', () => {
                    video.play();
                });
            } else {
                Utils.error("不支持 HLS 播放");
            }
        }

        // 添加按钮以保存 m3u8 文件并播放
        static addSaveM3U8Button(m3u8, filename) {
            const blob = new Blob([m3u8], { type: 'application/x-mpegURL' });
            const url = URL.createObjectURL(blob);
            this.info('完整 m3u8 blob url:', url);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${filename}.m3u8`;
            a.textContent = "保存 m3u8";
            a.style = `
                position: fixed;
                left: 1em;
                width: 4em;
                top: 50%;
                height: 3em;
                border-radius: 50%;
                text-align: center;
                font-size: 1.5em;
                background-color: white;
                z-index: 10000;
            `;
            document.body.insertAdjacentElement("afterbegin", a);

            // 添加按钮以播放 m3u8 文件
            const playButton = document.createElement('button');
            playButton.textContent = "播放 m3u8";
            playButton.style = `
                position: fixed;
                left: 6em;
                width: 4em;
                top: 50%;
                height: 3em;
                border-radius: 50%;
                text-align: center;
                font-size: 1.5em;
                background-color: white;
                z-index: 10000;
            `;
            playButton.addEventListener('click', () => this.playM3U8(url));
            document.body.insertAdjacentElement("afterbegin", playButton);
        }

        // 从页面获取视频标题
        static getVideoTitle() {
            const titleElement = document.querySelector("#details-page h2");
            return titleElement ? titleElement.textContent.slice(0, 6) : "video";
        }
    }

    // 核心函数
    const TS_URL_PATTERN = /_i(\d+)\.ts$/;
    const KEY_URI_PATTERN = /#EXT-X-KEY:METHOD=AES-128,URI="(.+?)",IV=/;
    const END_TAG = "#EXT-X-ENDLIST";
    const EXTINF = "#EXTINF:1.25,";

    // 检查请求是否为 m3u8 预览文件
    function isM3U8PreviewRequest(method, url) {
        if (method !== "GET") return false;
        const isPreview = url.endsWith("_i_preview.m3u8");
        if (isPreview) Utils.info("检测到预览请求:", url);
        return isPreview;
    }

    // 从 ts URL 中提取索引
    function extractIndex(tsUrl) {
        const matches = tsUrl.match(TS_URL_PATTERN);
        Utils.assert(matches != null, `无法从 ts url 中提取序号: ${tsUrl}`);
        return parseInt(matches[1]);
    }

    // 查找最大索引
    async function findMaxIndex(test, high) {
        let low = 0;
        while (high - low > 1) {
            const mid = Math.floor((low + high) / 2);
            if (await test(mid)) {
                low = mid;
            } else {
                high = mid;
            }
        }
        return low;
    }

    // 创建视频记录
    function createVideoRecord(commonPrefix, index) {
        return `${EXTINF}\n${commonPrefix}_i${index}.ts`;
    }

    // 获取完整的 key uri
    function fullKeyUri(m3u8, baseUrl) {
        const matches = m3u8.match(KEY_URI_PATTERN);
        Utils.assert(matches !== null, "无法从 m3u8 文件中提取 key uri");
        return `${baseUrl}/${matches[1]}`;
    }

    // 创建完整的 m3u8 文件
    async function createFullM3U8(createTest, m3u8, baseUrl) {
        Utils.info(`原始 m3u8 内容:\n${m3u8}`);
        const lines = m3u8.split("\n").filter(line => line && !line.includes(END_TAG));
        Utils.info("过滤后的 m3u8 内容:\n" + lines.join("\n"));

        const tsUrl = Utils.findLast(lines, line => TS_URL_PATTERN.test(line));
        Utils.assert(tsUrl != null, "无法在 m3u8 文件中找到 ts 文件的 URL");
        Utils.info("最后一个 ts 文件的 URL:", tsUrl);

        const upperLimit = 10000;
        const test = createTest(tsUrl.replace(TS_URL_PATTERN, "_i{index}.ts"));
        const end = await findMaxIndex(test, upperLimit);
        const begin = extractIndex(tsUrl) + 1;
        Utils.info("找到的最大 ts 序号:", end);

        const prefix = tsUrl.split("_i").slice(0, -1).join("_i");
        const videoRecords = Array.from({ length: end - begin + 1 }, (_, i) => createVideoRecord(prefix, begin + i));
        const fullM3U8 = [...lines, ...videoRecords, END_TAG].join("\n");

        const fullUri = fullKeyUri(m3u8, baseUrl);
        Utils.info("完整的 KEY URI:", fullUri);
        const newM3U8 = fullM3U8.replace(KEY_URI_PATTERN, `#EXT-X-KEY:METHOD=AES-128,URI="${fullUri}",IV=`);

        // 添加保存和播放按钮
        Utils.addSaveM3U8Button(newM3U8, Utils.getVideoTitle());

        return newM3U8;
    }

    // 创建测试函数
    function createTest(urlWithoutIndex) {
        return async index => {
            try {
                const url = urlWithoutIndex.replace("{index}", `${index}`);
                const response = await fetch(url, { method: "HEAD" });
                return response.ok;
            } catch {
                return false;
            }
        };
    }

    // XHR 钩子
    class XHRHook {
        static hook(isTarget, changeResult) {
            const xhrProto = XMLHttpRequest.prototype;
            const originalOpen = xhrProto.open;

            xhrProto.open = function (method, url) {
                const xhr = this;
                if (!isTarget(method, url)) {
                    return originalOpen.call(xhr, method, url, true);
                }

                const baseUrl = Utils.getParentPath(url);
                Utils.info("提取的 base_url:", baseUrl);

                xhr.addEventListener("load", async () => {
                    Utils.info("响应文本:", xhr.responseText);
                    const newM3U8 = await changeResult(xhr.responseText, baseUrl);
                    // 直接生成新的 m3u8 文件
                    Utils.addSaveM3U8Button(newM3U8, Utils.getVideoTitle());
                }, true);

                return originalOpen.call(xhr, method, url, true);
            };
        }
    }

    // 在页面加载开始时运行
    function runAtStart() {
        Utils.info("【haijiao-pro-video-crack】已启动");
        XHRHook.hook(isM3U8PreviewRequest, createFullM3U8.bind(null, createTest));
    }

    // 主函数
    function main() {
        document.addEventListener("DOMContentLoaded", () => {}, true);
        runAtStart();
    }

    main();
})();
