(window.webpackJsonp = window.webpackJsonp || []).push([["topic"], {
    "0188": function(t, e, i) {
        "use strict";
        i("167a");
    },
    "0baa": function(t, e, i) {
        "use strict";
        i("86a3");
    },
    "0fae": function(t, e, i) {},
    "11cb": function(t, e, i) {
        "use strict";
        i("9f96");
    },
    "167a": function(t, e, i) {},
    "1bcf": function(t, e, i) {
        "use strict";
        i("5ff0");
    },
    "230c": function(t, e, i) {
        "use strict";
        i.r(e),
        i("5466"),
        i("450d");
        var s = i("ecdf")
          , a = ((s = i.n(s)),
        i("38a0"),
        i("ad41"))
          , o = ((a = i.n(a)),
        i("14d9"),
        i("7e11"))
          , n = i("fded")
          , r = i("0837")
          , l = i("1f24")
          , c = i("9d4b")
          , d = i("ba8a")
          , h = i("6b26")
          , p = {
            name: "titleicon",
            components: {},
            props: {
                topic: {
                    type: Object,
                    default: function() {
                        return {
                            is_cream: !1,
                            is_top: !1,
                            type: 1
                        };
                    },
                },
            },
            data() {
                return {
                    topicType: {
                        is_original: !1,
                        hasAudio: !1,
                        is_cream: !1,
                        is_top: !1,
                        hasPic: !1,
                        hasVideo: !1,
                        is_hot: !1,
                        type: 0,
                        allTop: !1,
                    },
                };
            },
            watch: {
                topic: function(t) {
                    this.updateData(t);
                },
            },
            created() {
                this.updateData(this.topic);
            },
            methods: {
                updateData(t) {
                    (this.topicType.is_cream = t.is_cream),
                    (this.topicType.is_top = t.is_top),
                    (this.topicType.type = t.type),
                    (this.topicType.is_hot = t.is_hot),
                    (this.topicType.is_original = t.is_original),
                    (this.topicType.allTop = t.allTop),
                    (this.topicType.hasPic = t.hasPic),
                    (this.topicType.hasAudio = t.hasAudio),
                    (this.topicType.hasVideo = t.hasVideo);
                },
            },
        }
          , u = (i("e795"),
        i("2877"))
          , m = ((p = {
            name: "mytable",
            components: {
                TitleIcon: Object(u.a)(p, function() {
                    var t = this
                      , e = t._self._c;
                    return e("div", {
                        staticClass: "title-icon",
                        attrs: {
                            data: t.topicType.allTop
                        },
                    }, [t.topicType.hasPic ? e("img", {
                        attrs: {
                            src: "/desktop/images/common/v2/image.png"
                        },
                    }) : t._e(), t.topicType.hasVideo ? e("img", {
                        attrs: {
                            src: "/desktop/images/common/v2/video.png"
                        },
                    }) : t._e(), t.topicType.hasAudio ? e("img", {
                        attrs: {
                            src: "/desktop/images/common/v2/audio.png"
                        },
                    }) : t._e(), t.topicType.is_cream ? e("img", {
                        attrs: {
                            src: "/desktop/images/common/v2/cream.png"
                        },
                    }) : t._e(), t.topicType.is_top ? e("img", {
                        attrs: {
                            src: "/desktop/images/common/v2/top.png"
                        },
                    }) : t._e(), t.topicType.is_original ? e("img", {
                        attrs: {
                            src: "/desktop/images/common/v2/yuan.png"
                        },
                    }) : t._e(), 1 == t.topicType.type ? e("img", {
                        attrs: {
                            src: "/desktop/images/common/v2/sale.png"
                        },
                    }) : 2 == t.topicType.type ? e("img", {
                        attrs: {
                            src: "/desktop/images/common/v2/reward.png"
                        },
                    }) : 3 == t.topicType.type ? e("img", {
                        attrs: {
                            src: "/desktop/images/common/v2/sub.png"
                        },
                    }) : t._e(), t.topicType.allTop ? e("span", {
                        staticClass: "alltop"
                    }, [t._v("置顶")]) : t._e(), ]);
                }, [], !1, null, "c82917a0", null).exports,
            },
            props: {
                data: {
                    type: Array
                },
                tableShowType: {
                    type: Number
                },
                keyword: {
                    type: String
                },
                searchPath: {
                    type: String
                },
                isLoad: {
                    type: Boolean
                },
            },
            methods: {
                getimages(t) {
                    let e = 0;
                    if (t)
                        for (var i of t) {
                            var {category: i, remoteUrl: s} = i;
                            s && "images" == i && e++;
                        }
                    return e;
                },
                openTopic(t) {
                    (t = window.location.origin + "/post/details?pid=" + t.topicId),
                    window.open(t, "_blank");
                },
            },
        }),
        (p = (i("e7ef"),
        Object(u.a)(p, function() {
            var t = this
              , e = t._self._c;
            return e("div", [e("table", {
                staticClass: "tab-bbs-list",
                attrs: {
                    width: "100%",
                    border: "0",
                    cellspacing: "0",
                    cellpadding: "0",
                },
            }, [t._m(0), e("tbody", t._l(t.data, function(i, s) {
                return e("tr", {
                    key: s
                }, [e("td", [e("a", {
                    staticClass: "td-title hjbox-linkline",
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function(e) {
                            return t.openTopic(i);
                        },
                    },
                }, [t._v(t._s(i.title.length < 20 ? i.title : i.title.slice(0, 20) + "...")), e("title-icon", {
                    attrs: {
                        topic: i
                    }
                }), ], 1), ]), e("td", {
                    staticStyle: {
                        "font-size": "11px"
                    }
                }, [e("router-link", {
                    staticClass: "hjbox-linkcolor",
                    attrs: {
                        target: "_blank",
                        to: {
                            name: "homepage_index",
                            params: {
                                uid: i.user.id
                            },
                        },
                    },
                }, [t._v(t._s(i.user.nickname || ""))]), ], 1), e("td", [e("span", [t._v(t._s(t._f("newshowNumber")(i.viewCount))), ]), ]), e("td", [e("span", [t._v(t._s(t._f("newshowNumber")(i.commentCount))), ]), ]), e("td", [e("span", [t._v(t._s(i.lastCommentTime.slice(5, 16))), ]), ]), ]);
            }), 0), ]), (t.data && 0 !== t.data.length) || 1 !== t.tableShowType || !t.isLoad ? t._e() : e("div", {
                staticClass: "mt-3 mb-3 text-center"
            }, [t._v("暂无该记录！"), ]), (t.data && 0 !== t.data.length) || 2 !== t.tableShowType || !t.isLoad ? t._e() : e("div", {
                staticClass: "mt-3 mb-3 text-center"
            }, [t._v(" 没有找到含“" + t._s(t.keyword) + "”" + t._s("topic" === t.searchPath ? "标题的帖子" : "的作者") + "。 "), ]), ]);
        }, [function() {
            var t = this
              , e = t._self._c;
            return e("thead", [e("tr", {
                staticStyle: {
                    "font-size": "14px"
                }
            }, [e("th", {
                staticStyle: {
                    width: "390px",
                    "padding-left": "10px",
                    "box-sizing": "border-box",
                },
                attrs: {
                    scope: "col"
                },
            }, [t._v("标题")]), e("th", {
                staticStyle: {
                    width: "114px"
                },
                attrs: {
                    scope: "col"
                },
            }, [t._v("作者")]), e("th", {
                staticStyle: {
                    width: "42px"
                },
                attrs: {
                    scope: "col",
                    width: "50px"
                },
            }, [t._v("点击")]), e("th", {
                attrs: {
                    scope: "col"
                }
            }, [t._v("回复")]), e("th", {
                staticStyle: {
                    width: "74px"
                },
                attrs: {
                    scope: "col"
                },
            }, [t._v("回复时间")]), ]), ]);
        }
        , ], !1, null, null, null).exports)),
        i("d1eb"));
        (r = {
            data() {
                return {
                    activeIndex: 0,
                    focusBool: !1,
                    tableList: {
                        results: [],
                        page: {
                            limit: 20,
                            total: 0,
                            page: 1
                        }
                    },
                    keywordTableList: [],
                    tagList: [],
                    articleTopList: [],
                    currentPlate: {},
                    topArticle: [],
                    params: {
                        page: 1,
                        nodeId: null
                    },
                    favorite: !1,
                    articleDesc: "",
                    tableTagIndex: 0,
                    keyword: "",
                    menuList: [],
                    threeCurrent: 0,
                    defaultPlate: !1,
                    searchPath: "topic",
                    tableShowType: 1,
                    rightImg: null,
                    isLoad: !1,
                    allTopList: [],
                };
            },
            mixins: [r.a],
            computed: {
                AD_DETAILS_BYSKEY() {
                    return o.b;
                },
                AD_DETAILS_BYXKEY() {
                    return o.c;
                },
                AD_DETAILS_BTKEY() {
                    return o.a;
                },
            },
            created() {
                this.isLoad = !1;
            },
            async mounted() {
                var t = this.$route.query["nodeId"];
                t && (this.params.nodeId = Number(t)),
                await this.currentCollect(),
                await this._getPlateInfo(),
                await this.getAllTop(),
                await this._getTableList();
            },
            beforeRouteUpdate(t, e, i) {
                0 < this.tagList.length && (this.tagList = []),
                (this.isLoad = !1),
                (this.tableList = {
                    results: [],
                    page: {
                        limit: 20,
                        total: 0,
                        page: 1
                    },
                }),
                (this.params = {
                    page: 1,
                    nodeId: null
                }),
                i();
            },
            methods: {
                async getAllTop() {
                    var t = await Object(l.d)();
                    t.data && 0 < t.data.length && (t.data.forEach( (t) => {
                        t.allTop = !0;
                    }
                    ),
                    (this.allTopList = t.data));
                },
                handleSearch(t) {
                    (this.searchPath = t),
                    this.searchKey();
                },
                routerData(t) {
                    (this.menuList = t),
                    this._initParams(this.$route.query.nodeId);
                },
                tableRowClassName({rowIndex: t}) {
                    if (t % 2 != 0)
                        return "even-row";
                },
                _notS(t) {
                    this.activeIndex = t;
                },
                _initParams(t) {
                    var {indexS: t, parent: e, children: i, } = Object(m.b)(this.menuList, t);
                    (this.tagList = []),
                    t && 1 === t.length ? this.tagList.push({
                        name: "全部",
                        nodeId: e.nodeId
                    }) : t && 2 === t.length && (this.tagList.push({
                        name: "全部",
                        nodeId: i.nodeId
                    }),
                    Array.isArray(i.children)) && 0 < i.children.length && i.children.forEach( (t) => this.tagList.push(t)),
                    (this.currentPlate = i);
                },
                async _getPlateInfo() {
                    try {
                        var t = await Object(l.e)({
                            nodeId: this.params.nodeId
                        });
                        this.articleDesc = t.data;
                    } catch (t) {
                        this.$message.error(t);
                    }
                },
                async _getTableList() {
                    this.isLoad = !1;
                    try {
                        var t = await Object(l.f)(Object.assign(this.params, {
                            type: this.tableTagIndex,
                            limit: 50,
                        }));
                        if (1 === this.params.page) {
                            let e = [];
                            Array.isArray(t.data.results) && 0 < t.data.results.length && t.data.results.forEach( (t) => {
                                t.is_top && e.push(t);
                            }
                            ),
                            this.defaultPlate || ((this.defaultPlate = !0),
                            (this.articleTopList = e.slice(0, 9)));
                        }
                        t.data.results && 0 < t.data.results.length ? (t.data.results = this.allTopList.concat(t.data.results)) : (t.data.results = this.allTopList),
                        (this.tableList = t.data || d.b),
                        this.$nextTick( () => {
                            this.isLoad = !0;
                        }
                        );
                    } catch (t) {
                        this.$message.error(t);
                    }
                },
                async currentCollect() {
                    try {
                        var t = await Object(l.i)({
                            entityId: this.params.nodeId,
                            entityType: "node",
                        });
                        this.favorite = t.data.favorite || !1;
                    } catch (t) {}
                },
                async switchTable(t) {
                    (this.tableTagIndex = t),
                    (this.tableList = d.b),
                    (this.params.page = 1),
                    this._getTableList();
                },
                async searchKey() {
                    if ("" === this.keyword)
                        (this.tableShowType = 1),
                        (this.keywordTableList = []);
                    else {
                        (this.tableShowType = 2),
                        (this.isLoad = !1);
                        try {
                            this.focusBool = !this.focusBool;
                            var t = this.$route.query["nodeId"]
                              , e = await c.u.call(this, this.searchPath, {
                                node_id: t,
                                key: this.keyword,
                            });
                            (this.keywordTableList = e.data.results),
                            (this.isLoad = !0);
                        } catch (t) {
                            this.$message.error(t);
                        }
                    }
                },
                pageChange(t, e) {
                    (this.params.page = t),
                    this._getTableList();
                },
                checkMenu(t, e) {
                    (this.params.page = 1),
                    (this.threeCurrent = e),
                    (this.params.nodeId = t.nodeId),
                    this._getTableList();
                },
                async addFavorite() {
                    if (h.a.isLogon())
                        try {
                            await Object(l.a)({
                                entityId: this.params.nodeId,
                                entityType: "node",
                            }),
                            (this.favorite = !this.favorite);
                        } catch (t) {
                            this.$message.error(t);
                        }
                    else
                        this.$loginWindow({
                            reload: !0
                        });
                },
                async deleteFavorite() {
                    if (h.a.isLogon())
                        try {
                            await Object(l.c)({
                                entityId: this.params.nodeId,
                                entityType: "node",
                            }),
                            (this.favorite = !this.favorite);
                        } catch (t) {
                            this.$message.error(t);
                        }
                    else
                        this.$loginWindow();
                },
                sendArticle() {
                    h.a.isLogon() ? this.$router.push({
                        path: "/addArticle",
                        query: this.$route.query,
                    }) : this.$loginWindow();
                },
            },
            filters: {
                topNo1(t) {
                    return t ? (24 < t.length ? t.substr(0, 23) + "..." : t) : "";
                },
                topNo2_9(t) {
                    return t ? (12 < t.length ? t.substr(0, 12) + "..." : t) : "";
                },
            },
            watch: {
                async $route() {
                    (this.tableList = d.b),
                    (this.keywordTableList = []),
                    (this.currentPlate = {}),
                    (this.topArticle = []),
                    (this.articleTopList = []),
                    (this.params = {
                        page: 1,
                        nodeId: null
                    });
                    var t = this.$route.query["nodeId"];
                    t && ((this.params.nodeId = Number(t)),
                    (this.threeCurrent = 0)),
                    (this.defaultPlate = !1),
                    (this.articleTopList = []),
                    await this.currentCollect(),
                    await this._getPlateInfo(),
                    await this._getTableList(),
                    this._initParams(this.$route.query.nodeId);
                },
            },
            components: {
                BaseHeaderLayout: n.a,
                ElTable: a.a,
                ElTableColumn: s.a,
                HTable: p,
            },
        }),
        i("7204"),
        (n = Object(u.a)(r, function() {
            var t = this
              , e = t._self._c;
            return e("base-header-layout", {
                on: {
                    routerData: t.routerData
                }
            }, [e("div", [e("div", {
                staticStyle: {
                    "margin-bottom": ""
                }
            }, [e("advertising", {
                attrs: {
                    limit: 1,
                    nopadding: !0,
                    showtype: 0,
                    position: t.AD_DETAILS_BTKEY,
                },
            }), ], 1), e("div", {
                staticClass: "post-card"
            }, [e("div", {
                staticClass: "plate-header"
            }, [e("div", {
                staticClass: "header-left"
            }, [e("div", {
                staticClass: "title"
            }, [t._v(t._s(t.currentPlate.name || "")), ]), t.favorite ? e("div", {
                staticClass: "attention c-pointer disabled",
                staticStyle: {
                    width: "81.56px"
                },
                on: {
                    click: t.deleteFavorite
                },
            }, [e("span", [t._v("已收藏"), e("i", {
                staticClass: "iconfont icon-gouxuan",
            }), ]), ]) : e("div", {
                staticClass: "attention c-pointer",
                on: {
                    click: t.addFavorite
                },
            }, [e("span", [t._v("收藏本版 "), e("i", {
                staticClass: "el-icon-plus"
            }), ]), ]), e("div", {}, [t._v(" 主帖数："), e("span", [t._v(t._s(t._f("showNumber")(t.articleDesc.topicCount))), ]), ]), e("div", [t._v(" 回帖数："), e("span", [t._v(t._s(t._f("newshowNumber")(t.articleDesc.commentCount))), ]), ]), ]), e("div", {
                staticClass: "header-right"
            }, [e("div", {
                staticClass: "c-pointer",
                class: 0 == t.activeIndex ? "active" : "",
                on: {
                    click: function(e) {
                        return t._notS(0);
                    },
                },
            }, [t._v("本版规则")]), e("div", {
                staticClass: "c-pointer",
                class: 1 == t.activeIndex ? "active" : "",
                on: {
                    click: function(e) {
                        t.activeIndex = 1;
                    },
                },
            }, [t._v("本版介绍")]), e("div", {
                staticClass: "c-pointer",
                class: 2 == t.activeIndex ? "active" : "",
                on: {
                    click: function(e) {
                        return t._notS(2);
                    },
                },
            }, [t._v("本版置顶")]), ]), ]), e("div", {
                staticClass: "screen-result"
            }, [0 === t.activeIndex ? e("div", {
                staticClass: "container wrap-bd clearfix"
            }, [e("div", {
                staticClass: "block-intro"
            }, [e("div", {
                domProps: {
                    innerHTML: t._s(t.articleDesc.topic_role),
                },
            }), ]), ]) : t._e(), 1 === t.activeIndex ? e("div", {
                staticClass: "container wrap-bd clearfix"
            }, [e("div", {
                staticClass: "block-intro"
            }, [e("div", {
                domProps: {
                    innerHTML: t._s(t.articleDesc.description),
                },
            }), ]), ]) : t._e(), 2 === t.activeIndex && 0 < t.articleTopList.length ? e("div", {
                staticClass: "container"
            }, [e("a", {
                attrs: {
                    href: "/post/details?pid=" + t.articleTopList[0].topicId,
                    title: t.articleTopList[0].title || "",
                },
            }, [t.articleTopList[0] && t.articleTopList[0].attachments && 0 < t.articleTopList[0].attachments.length ? e("img", {
                directives: [{
                    name: "lazyloadimg",
                    rawName: "v-lazyloadimg",
                    value: t.articleTopList[0].attachments[0],
                    expression: "articleTopList[0].attachments[0]",
                }, ],
                staticClass: "d-block",
            }) : e("img", {
                staticClass: "d-block",
                attrs: {
                    src: "/desktop/images/common/top-no1.png",
                    alt: "",
                },
            }), ]), t.articleTopList && 0 < t.articleTopList.length ? e("div", {
                staticStyle: {
                    width: "100%"
                }
            }, [e("h2", {
                staticClass: "main-title mb-0 text-center",
            }, [e("a", {
                staticClass: "font-weight-bold font-16 hjbox-linkline",
                staticStyle: {
                    "font-family": "Microsoft YaHei",
                },
                attrs: {
                    href: "/post/details?pid=" + t.articleTopList[0].topicId,
                },
            }, [t._v(t._s(t._f("topNo1")(t.articleTopList[0] && t.articleTopList[0].title))), ]), ]), e("ul", {
                staticClass: "main-list mb-0"
            }, t._l([].concat(t.articleTopList[1] || [], t.articleTopList[2] || [], t.articleTopList[3] || [], t.articleTopList[4] || [], t.articleTopList[5] || [], t.articleTopList[6] || [], t.articleTopList[7] || [], t.articleTopList[8] || [], t.articleTopList[9] || []), function(i, s) {
                return e("li", {
                    key: s
                }, [e("p", {
                    staticClass: "mb-0"
                }, [e("a", {
                    staticClass: "hjbox-linkline",
                    attrs: {
                        href: "/post/details?pid=" + i.topicId,
                    },
                }, [t._v(t._s(t._f("topNo2_9")(i.title))), ]), ]), ]);
            }), 0), ]) : t._e(), ]) : t._e(), 2 === t.activeIndex && 0 === t.articleTopList.length ? e("div", {
                staticClass: "container wrap-bd clearfix"
            }, [e("div", {
                staticClass: "block-intro text-center",
                staticStyle: {
                    width: "100%",
                    "line-height": "130px",
                },
            }, [t._v("暂无数据")]), ]) : t._e(), ]), ]), e("hj-gap", {
                staticStyle: {
                    height: "16px"
                }
            }), e("div", {
                staticClass: "post-card"
            }, [e("div", {
                staticClass: "current-fruit-title position-relative",
            }, [e("ul", {
                staticClass: "tabs-list position-relative"
            }, [e("li", {
                class: {
                    active: 0 == t.tableTagIndex,
                    "hjbox-linkline": 0 != t.tableTagIndex,
                },
                on: {
                    click: function(e) {
                        return t.switchTable(0);
                    },
                },
            }, [e("a", [t._v("默认")])]), e("li", {
                class: {
                    active: 1 === t.tableTagIndex,
                    "hjbox-linkline": 1 != t.tableTagIndex,
                },
                on: {
                    click: function(e) {
                        return t.switchTable(1);
                    },
                },
            }, [e("a", [t._v("最新")])]), e("li", {
                staticClass: "hjbox-linkline",
                class: {
                    active: 2 === t.tableTagIndex,
                    "hjbox-linkline": 2 != t.tableTagIndex,
                },
                on: {
                    click: function(e) {
                        return t.switchTable(2);
                    },
                },
            }, [e("a", [t._v("热门")])]), e("li", {
                staticClass: "hjbox-linkline",
                class: {
                    active: 3 === t.tableTagIndex,
                    "hjbox-linkline": 3 != t.tableTagIndex,
                },
                on: {
                    click: function(e) {
                        return t.switchTable(3);
                    },
                },
            }, [e("a", [t._v("精华")])]), e("li", {
                staticClass: "hjbox-linkline",
                class: {
                    active: 4 === t.tableTagIndex,
                    "hjbox-linkline": 4 != t.tableTagIndex,
                },
                on: {
                    click: function(e) {
                        return t.switchTable(4);
                    },
                },
            }, [e("a", [t._v("悬赏")])]), e("li", {
                staticClass: "hjbox-linkline",
                class: {
                    active: 5 === t.tableTagIndex,
                    "hjbox-linkline": 5 != t.tableTagIndex,
                },
                on: {
                    click: function(e) {
                        return t.switchTable(5);
                    },
                },
            }, [e("a", [t._v("出售")])]), ]), e("div", {
                staticClass: "handle-btn-box"
            }, [e("ul", {
                staticClass: "btn-list"
            }, [e("li", {
                staticClass: "input-box text-right",
                style: {
                    width: "126px"
                },
            }, [e("el-input", {
                staticClass: "text-right c-pointer article-search",
                staticStyle: {
                    width: "100%",
                    "border-radius": "0",
                },
                attrs: {
                    placeholder: "版内搜索",
                    size: "mini",
                },
                on: {
                    blur: t.searchKey
                },
                model: {
                    value: t.keyword,
                    callback: function(e) {
                        t.keyword = e;
                    },
                    expression: "keyword",
                },
            }, [e("el-button", {
                attrs: {
                    slot: "append",
                    icon: "el-icon-search",
                },
                slot: "append",
            }), ], 1), ], 1), e("li", [e("a", {
                staticClass: "btn hjbox-linkline",
                on: {
                    click: function(e) {
                        return t.$router.go(0);
                    },
                },
            }, [t._v("刷新")]), ]), e("li", [e("a", {
                staticClass: "btn hjbox-linkline",
                attrs: {
                    href: "javascript:void(0);"
                },
                on: {
                    click: t.sendArticle
                },
            }, [t._v("发帖")]), ]), ]), ]), ]), 1 === t.tableShowType ? e("div", {
                staticClass: "type-list",
                staticStyle: {
                    margin: "10px 0",
                    "padding-left": "20px",
                },
            }, t._l(t.tagList || [], function(i, s) {
                return e("a", {
                    key: s,
                    staticClass: "hjbox-linkline",
                    class: t.threeCurrent === s && "active",
                    attrs: {
                        href: "javascript:void(0)"
                    },
                    on: {
                        click: function(e) {
                            return t.checkMenu(i, s);
                        },
                    },
                }, [t._v(t._s(i.name || "") + t._s(1 < t.tagList.length ? "/" : "")), ]);
            }), 0) : t._e(), 2 === t.tableShowType ? e("div", {
                staticClass: "type-list",
                staticStyle: {
                    margin: "10px 0",
                    "padding-left": "20px",
                },
            }, [e("span", [t._v("范围：")]), e("a", {
                class: "topic" === t.searchPath && "active",
                attrs: {
                    href: "javascript:void(0)"
                },
                on: {
                    click: function(e) {
                        return t.handleSearch("topic");
                    },
                },
            }, [t._v("标题")]), ]) : t._e(), 1 === t.tableShowType ? e("h-table", {
                attrs: {
                    isLoad: t.isLoad,
                    data: t.tableList.results || [],
                    tableShowType: 1,
                },
            }) : t._e(), 2 === t.tableShowType ? e("h-table", {
                attrs: {
                    data: t.keywordTableList || [],
                    isLoad: t.isLoad,
                    tableShowType: 2,
                    keyword: t.keyword,
                    searchPath: t.searchPath,
                },
            }) : t._e(), ], 1), e("hj-gap"), e("el-pagination", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 1 === t.tableShowType,
                    expression: "tableShowType === 1",
                }, ],
                staticClass: "d-flex justify-content-end",
                attrs: {
                    size: "small",
                    background: "",
                    layout: "prev, pager, next",
                    "default-current": 1,
                    "page-size": t.tableList.page.limit,
                    total: t.tableList.page.total,
                },
                on: {
                    "current-change": t.pageChange
                },
            }), e("hj-gap", {
                attrs: {
                    height: "60"
                }
            }), ], 1), e("div", {
                staticStyle: {
                    width: "188px",
                    "margin-top": "0"
                },
                attrs: {
                    slot: "aside"
                },
                slot: "aside",
            }, [e("advertising", {
                attrs: {
                    limit: 1,
                    nopadding: !0,
                    showtype: 0,
                    position: t.AD_DETAILS_BYSKEY,
                },
            }), e("advertising", {
                attrs: {
                    limit: 1,
                    nopadding: !0,
                    showtype: 0,
                    position: t.AD_DETAILS_BYXKEY,
                },
            }), ], 1), ]);
        }, [], !1, null, null, null));
        e.default = n.exports;
    },
    "23aa": function(t, e, i) {},
    2848: function(t, e, i) {
        "use strict";
        i("97c3");
    },
    "2a90": function(t, e, i) {},
    "3f11": function(t, e, i) {},
    "4c4e": function(t, e, i) {
        "use strict";
        i.r(e),
        i("0fb7"),
        i("450d");
        var s = i("f529")
          , a = i.n(s)
          , o = ((s = (i("14d9"),
        i("fded"))),
        i("095c"))
          , n = i("1f24")
          , r = i("ba8a")
          , l = i("81b0")
          , c = i("29ad")
          , d = i("d1eb")
          , h = i("dafe")
          , p = i("2f62");
        (p = {
            name: "add",
            data() {
                return {
                    formLayout: "horizontal",
                    selectType: "",
                    textareaValue: "",
                    radio: 3,
                    input: "",
                    extraVisible: !1,
                    visible: !1,
                    form: {},
                    keyword: "",
                    oneIndex: "",
                    twoIndex: "",
                    selectList1: [],
                    selectList2: [],
                    selectList3: [],
                    selectType1: "",
                    selectType2: "",
                    selectType3: "",
                    rules: {
                        title: [{
                            required: !0,
                            message: "请输入标题",
                            trigger: "blur"
                        }],
                        content: [{
                            required: !0,
                            message: "请输入内容",
                            trigger: "blur"
                        }, ],
                    },
                    tagText: "",
                    tagPage: 1,
                    tagsList: r.d,
                    tagsCopyList: r.d,
                    tagCheckList: [],
                    crateArticleQuest: {
                        title: ""
                    },
                };
            },
            mixins: [{
                data() {
                    return {
                        articleInfo: {}
                    };
                },
                created() {
                    this._initGetArticle();
                },
                methods: {
                    ...Object(p.d)({
                        updateVideoData: "updateVideoData"
                    }),
                    _processVideo() {
                        try {
                            var e, i = document.querySelectorAll("video");
                            for (let t = 0; t < i.length; t++)
                                "" === i[t].id && (-1 != i[t].getAttribute("src").indexOf(".mp4") ? this.$message.error("视频格式错误请联系管理员") : (((e = i[t].getAttribute("class")) && -1 !== e.indexOf("video-js vjs-default-skin vjs-big-play-centered")) || (i[t].className += " video-js vjs-default-skin vjs-big-play-centered"),
                                (i[t].id = "myVideo_" + t + 1),
                                videojs(i[t].id, {
                                    bigPlayButton: !0,
                                    textTrackDisplay: !1,
                                    posterImage: !1,
                                    errorDisplay: !1,
                                    hls: {
                                        withCredentials: !0
                                    },
                                    controlBar: {
                                        fullscreenToggle: !1
                                    },
                                }).src({
                                    src: i[t].src,
                                    type: "application/x-mpegURL",
                                })));
                        } catch (t) {}
                    },
                    async _initGetArticle() {
                        try {
                            const {topic_id: e, topic_pending_id: i, source: s=1, } = this.$route.query;
                            var t = await Object(n.k)({
                                topic_id: e,
                                pending_id: i,
                                source: s,
                            });
                            (t.data.liteContent = Object(h.c)(t.data && t.data.attachments, t.data.liteContent)),
                            (this.articleInfo = t.data || {}),
                            (this.crateArticleQuest.title = this.articleInfo.title || ""),
                            (this.articleInfo.liteContent = Object(c.a)(this.articleInfo.liteContent)),
                            this._initMenu(),
                            this.$nextTick( () => {
                                0 == i && this._processVideo();
                            }
                            ),
                            this.$refs.editor._setUpdateParams(this.articleInfo),
                            (this.tagCheckList = this.articleInfo.tags || []),
                            0 < this.tagCheckList.length && (this.tagText = this.tagCheckList.map( (t) => "#" + t.tagName).join(" ")),
                            this.articleInfo.attachments && 0 < this.articleInfo.attachments.length && this.articleInfo.attachments.forEach( (t) => {
                                "video" === t.category && this.$nextTick( () => {
                                    var e = this;
                                    document.querySelector('[data-id="' + t.id + '"]').onclick = function() {
                                        e.updateVideoData({
                                            show: !0,
                                            url: t.remoteUrl,
                                            keyPath: t.keyPath || "",
                                            id: t.id,
                                            name: t.name || "视频_" + t.id,
                                        });
                                    }
                                    ;
                                }
                                );
                                let e = ("video" === t.category ? t.coverUrl : t.remoteUrl).toLowerCase();
                                (-1 == e.indexOf(".hj") && -1 == e.indexOf(".jpg.txt") && -1 == e.indexOf(".jpeg.txt") && -1 == e.indexOf(".png.txt") && -1 == e.indexOf(".gif.txt")) || this.$nextTick( () => {
                                    let i = document.querySelector('[data-id="' + t.id + '"]');
                                    i && "VIDEO" != i.nodeName && (i.src = "/desktop/images/common/project/loading.gif"),
                                    -1 != e.indexOf(".mov") ? (i.src = "/desktop/images/common/coverdefault2@2x.png") : Object(h.a)(e, t.id, (t) => {
                                        i && (i.src = t);
                                    }
                                    );
                                }
                                );
                            }
                            );
                        } catch (t) {
                            "无权限" == t ? (window.location.href = "/") : this.$message.error(t.toString());
                        }
                    },
                    async visibleTags() {
                        try {
                            var t = await Object(n.g)({
                                page: this.tagPage
                            });
                            this.tagsList = t.data || r.d;
                            let e = "";
                            try {
                                e = JSON.stringify(t.data);
                            } catch (t) {
                                e = JSON.stringify(r.d);
                            }
                            (this.tagsCopyList = JSON.parse(e)),
                            (this.visible = !this.visible);
                        } catch (t) {
                            this.$message.error(t);
                        }
                    },
                },
            }, ],
            created() {
                document.getElementById("body").classList.remove("filter-bg"),
                document.getElementById("body").classList.add("bg-color");
            },
            computed: {
                showprompt() {
                    var t = this.selectList2
                      , e = this.selectType2;
                    if (t.length && "" != e) {
                        let s = {};
                        for (var i of t)
                            if (i.nodeId == e) {
                                s = i;
                                break;
                            }
                        if (s.hasOwnProperty("vipLimit") && s.vipLimit > this.userInfo.vip)
                            return [1, s];
                    }
                    return [0];
                },
            },
            methods: {
                routerData() {
                    this._initMenu();
                },
                handlerSelectType1() {
                    (this.selectType2 = ""),
                    (this.selectType3 = "");
                    for (let e = 0; e < this.selectList1.length; e++) {
                        var t = this.selectList1[e];
                        if (t.nodeId === this.selectType1) {
                            this.selectList2 = t.children;
                            break;
                        }
                    }
                },
                handlerSelectType2() {
                    this.selectType3 = "";
                    let t = !1;
                    for (let i = 0; i < this.selectList2.length; i++) {
                        var e = this.selectList2[i];
                        if (e.nodeId === this.selectType2) {
                            Array.isArray(e.children) && e.children && (this.selectList3 = e.children),
                            (t = !0);
                            break;
                        }
                    }
                    t || (this.selectList3 = []);
                },
                goback() {
                    this.$router.back();
                },
                navigatorTo() {
                    a.a.warning("功能待开发");
                },
                remove() {
                    this.$refs.editor.clear(),
                    (this.tagsList = []),
                    (this.crateArticleQuest.title = ""),
                    (this.tagCheckList = []),
                    (this.tagsList = r.d),
                    (this.tagsCopyList = r.d),
                    (this.tagText = ""),
                    (this.tagPage = 1);
                },
                async sendArticle(e) {
                    var {topic_id: i=0, topic_pending_id: s=0} = this.$route.query;
                    try {
                        let t = this.$refs.editor.content;
                        t.split('<img src="').forEach( (e) => {
                            if (-1 != e.indexOf("data:image/")) {
                                var i = e.split('"')[0]
                                  , s = Math.ceil(i.length / 10240);
                                for (let e = 0; e < s; e++) {
                                    var a = i.slice(1024e3 * e, 1024e3 * (e + 1));
                                    a && (t = t.replace(a, ""));
                                }
                            }
                        }
                        ),
                        (t = Object(c.c)(t));
                        var o, l, d = document.querySelectorAll(".ql-editor #showaudio"), p = (d && 0 < d.length && d.forEach(function(e) {
                            var i = e.getAttribute("data-id");
                            e = e.getAttribute("src");
                            t = t.replace(`<audio src="${e}" controls="true" controlslist="nodownload" id="showaudio" data-id="${i}"></audio>`, `<audio src="haijiao.com" controls="true" controlslist="nodownload" id="showaudio" data-id="${i}"></audio>`);
                        }),
                        this.articleInfo.attachments && 0 < this.articleInfo.attachments.length && this.articleInfo.attachments.forEach( (e) => {
                            "video" == e.category && (t = Object(h.b)(t));
                        }
                        ),
                        (t = Object(h.b)(t)),
                        this.$refs.editor.fileList && 0 < this.$refs.editor.fileList.length && this.$refs.editor.fileList.forEach( (e) => {
                            e.isImage || (t = t.replace(/<div id="myVideo_(\s|\S)*<p class="vjs-control-text">End of dialog window.<\/p><\/div><\/div>/g, `<video src="${e.remoteUrl}" data-id="${e.id}" style="width:100%;height:500px;"></video>`));
                        }
                        ),
                        []), u = this.$refs.editor.sendFriendList;
                        for (let e = 0; e < u.length; e++)
                            p.push(+u[e].userId),
                            (t = t.replace(new RegExp("@" + u[e].nickname), `<span data-uid="${u[e].userId}"  class="at-box">@${u[e].nickname} </span>`));
                        let m = null;
                        (m = "" !== this.selectType3 ? this.selectType3 : "" !== this.selectType2 ? this.selectType2 : "" !== this.selectType1 ? this.selectType1 : Number(this.crateArticleQuest.node.nodeId)),
                        "drafts" == e ? (o = await Object(n.z)({
                            source: Number(this.$route.query.source) || 1,
                            topic_node_id: m,
                            title: this.crateArticleQuest.title,
                            content: t,
                            tags: this.tagCheckList.map( (t) => t.tagName),
                            topic_id: Number(i),
                            topic_pending_id: Number(s),
                            ats: p,
                            isPublisher: !1,
                        })).data ? (a.a.success("保存成功"),
                        (window.location.href = "/post/details?pid=" + o.data)) : a.a.success("保存成功") : ((l = await Object(n.z)({
                            source: Number(this.$route.query.source) || 1,
                            title: this.crateArticleQuest.title,
                            content: t,
                            tags: this.tagCheckList.map( (t) => t.tagName),
                            topic_id: Number(i),
                            topic_pending_id: Number(s),
                            ats: p,
                            isPublisher: !0,
                            topic_node_id: m,
                        })).data ? (a.a.success("发帖成功！"),
                        (window.location.href = "/post/details?pid=" + l.data)) : (a.a.success("发布成功，待审核通过后便可查看。"),
                        this.$router.push({
                            path: "/addArticle"
                        })),
                        this.$refs.editor.clear(),
                        (this.tagsList = []),
                        (this.crateArticleQuest.title = ""),
                        (this.crateArticleQuest.content = ""),
                        (this.tagCheckList = []),
                        (this.tagsList = r.d),
                        (this.tagsCopyList = r.d),
                        (this.tagText = ""),
                        (this.tagPage = 1));
                    } catch (t) {
                        a.a.error(t);
                    }
                },
                searchKeyword: Object(l.debounce)(function() {
                    let e = "";
                    try {
                        e = JSON.stringify(this.tagsList);
                    } catch (t) {
                        e = JSON.stringify(r.d);
                    }
                    (this.tagsCopyList = JSON.parse(e)),
                    "" !== this.keyword && (this.tagsCopyList.results = this.tagsCopyList.results.filter( (t) => {
                        if (-1 !== t.tagName.indexOf(this.keyword))
                            return t;
                    }
                    ));
                }, 200),
                changeTag(t, e) {
                    if (this.tagCheckList.some( (e) => {
                        if (e.tagName === t.tagName)
                            return !0;
                    }
                    )) {
                        for (var i = 0; i < this.tagCheckList.length; i++)
                            if (this.tagCheckList[i].tagName === t.tagName) {
                                this.tagCheckList.splice(i, 1);
                                break;
                            }
                        this.tagText = this.tagCheckList.map( (t) => "#" + t.tagName).join(" ");
                    } else
                        this.tagCheckList.push(t),
                        (this.tagText = this.tagCheckList.map( (t) => "#" + t.tagName).join(" "));
                },
                closeTag() {
                    (this.visible = !1),
                    (this.tagPage = 1);
                },
                async turnTags() {
                    var t = Math.ceil(this.tagsList.page.total / this.tagsList.page.limit);
                    if (this.tagPage < t) {
                        this.tagPage += 1;
                        try {
                            var e = await Object(n.g)({
                                page: this.tagPage
                            });
                            this.tagsList = e.data || r.d;
                            let i = "";
                            try {
                                i = JSON.stringify(e.data);
                            } catch (t) {
                                i = JSON.stringify(r.d);
                            }
                            this.tagsCopyList = JSON.parse(i);
                        } catch (t) {
                            this.$message.error(t);
                        }
                    } else {
                        this.tagPage = 1;
                        try {
                            var i = await Object(n.g)({
                                page: this.tagPage
                            });
                            this.tagsList = i.data || r.d;
                            let e = "";
                            try {
                                e = JSON.stringify(i.data);
                            } catch (t) {
                                e = JSON.stringify(r.d);
                            }
                            this.tagsCopyList = JSON.parse(e);
                        } catch (t) {
                            this.$message.error(t);
                        }
                    }
                },
                OkTags() {
                    this.visible = !1;
                },
                async visibleTags() {
                    try {
                        var t = await Object(n.g)({
                            page: this.tagPage
                        });
                        this.tagsList = t.data || r.d;
                        let e = "";
                        try {
                            e = JSON.stringify(t.data);
                        } catch (t) {
                            e = JSON.stringify(r.d);
                        }
                        (this.tagsCopyList = JSON.parse(e)),
                        (this.visible = !this.visible);
                    } catch (t) {
                        this.$message.error(t);
                    }
                },
                visibleAction() {
                    this.extraVisible = !0;
                },
                async _initMenu() {
                    var t, e, i, s, a, o = this.$store.state.routerMenu, n = 0;
                    let r = 0;
                    if ((n = this.articleInfo.node ? this.articleInfo.node.nodeId : n))
                        r = n;
                    else {
                        if (!o.length)
                            return !1;
                        o[0].children && o[0].children[0] && (r = o[0].children[0].nodeId);
                    }
                    const {indexS: l, parent: c} = Object(d.b)(o, r);
                    if (c && l)
                        try {
                            (this.selectList1 = o),
                            c && (c.parentId ? (this.selectType1 = c.parentId) : (this.selectType1 = c.nodeId)),
                            2 === l.length && Array.isArray(c.children) ? (([t,e] = l),
                            (this.selectList2 = c.children),
                            (this.selectType2 = c.children[e].nodeId),
                            (this.selectList3 = c.children[e].children || [])) : 3 === l.length && Array.isArray(c.children) && (([i,s,a] = l),
                            (this.selectList2 = this.selectList1[s].children),
                            this.selectList1.forEach( (t) => {
                                t.nodeId == c.parentId && (this.selectList2 = t.children || []);
                            }
                            ),
                            (this.selectType2 = c.nodeId),
                            (this.selectList3 = c.children),
                            (this.selectType3 = c.children[a].nodeId));
                        } catch (t) {
                            this.$message.error(t.toString());
                        }
                },
                handleSubmit(t) {
                    t.preventDefault(),
                    this.form.validateFields( (t, e) => {}
                    );
                },
                handleSelectChange(t) {
                    this.form.setFieldsValue({
                        note: `Hi, ${"male" === t ? "man" : "lady"}!`,
                    });
                },
            },
            components: {
                BaseHeaderLayout: s.a,
                Editor: o.a
            },
        }),
        i("cfb9"),
        (l = i("2877")),
        (s = Object(l.a)(p, function() {
            var t = this
              , e = t._self._c;
            return e("base-header-layout", {
                on: {
                    routerData: t.routerData
                }
            }, [e("div", {
                staticClass: "addArtice",
                staticStyle: {
                    "margin-top": "15px"
                },
            }, [e("el-form", {
                staticStyle: {
                    padding: "0 20px"
                },
                attrs: {
                    rules: t.rules,
                    model: t.form,
                    "status-icon": "",
                    "label-width": "80px",
                },
                on: {
                    submit: t.handleSubmit
                },
            }, [e("el-form-item", {
                staticStyle: {
                    "margin-bottom": "10px"
                },
                attrs: {
                    label: "板块："
                },
            }, [0 < t.selectList1.length ? e("el-select", {
                staticStyle: {
                    width: "103px"
                },
                attrs: {
                    size: "mini"
                },
                on: {
                    change: t.handlerSelectType1
                },
                model: {
                    value: t.selectType1,
                    callback: function(e) {
                        t.selectType1 = e;
                    },
                    expression: "selectType1",
                },
            }, t._l(t.selectList1, function(i, s) {
                return e("el-option", {
                    key: s,
                    attrs: {
                        label: i.name,
                        value: i.nodeId,
                    },
                }, [e("span", [t._v(t._s(i.name))])]);
            }), 1) : t._e(), 0 < t.selectList2.length ? e("span", {
                staticStyle: {
                    margin: "0 10px"
                }
            }, [t._v(">")]) : t._e(), 0 < t.selectList2.length ? e("el-select", {
                staticStyle: {
                    width: "103px"
                },
                attrs: {
                    size: "mini"
                },
                on: {
                    change: t.handlerSelectType2
                },
                model: {
                    value: t.selectType2,
                    callback: function(e) {
                        t.selectType2 = e;
                    },
                    expression: "selectType2",
                },
            }, t._l(t.selectList2, function(i, s) {
                return e("el-option", {
                    key: s,
                    attrs: {
                        label: i.name,
                        value: i.nodeId,
                    },
                }, [e("span", [t._v(t._s(i.name))]), i.vipLimit ? e("span", {
                    staticClass: "vipicon"
                }, [1 == i.vipLimit ? e("img", {
                    attrs: {
                        src: "/desktop/images/common/vip12x.png",
                        alt: "",
                    },
                }) : 2 == i.vipLimit ? e("img", {
                    attrs: {
                        src: "/desktop/images/common/vip22x.png",
                        alt: "",
                    },
                }) : 3 == i.vipLimit ? e("img", {
                    attrs: {
                        src: "/desktop/images/common/vip32x.png",
                        alt: "",
                    },
                }) : 4 == i.vipLimit ? e("img", {
                    attrs: {
                        src: "/desktop/images/common/vip42x.png",
                        alt: "",
                    },
                }) : t._e(), ]) : t._e(), ]);
            }), 1) : t._e(), 0 < t.selectList3.length ? e("span", {
                staticStyle: {
                    margin: "0 10px"
                }
            }, [t._v(">")]) : t._e(), 0 < t.selectList3.length ? e("el-select", {
                staticStyle: {
                    width: "103px"
                },
                attrs: {
                    size: "mini"
                },
                model: {
                    value: t.selectType3,
                    callback: function(e) {
                        t.selectType3 = e;
                    },
                    expression: "selectType3",
                },
            }, t._l(t.selectList3, function(i, s) {
                return e("el-option", {
                    key: s,
                    attrs: {
                        label: i.name,
                        value: i.nodeId,
                    },
                }, [e("span", [t._v(t._s(i.name))]), i.vipLimit ? e("span", {
                    staticClass: "vipicon"
                }, [1 == i.vipLimit ? e("img", {
                    attrs: {
                        src: "/desktop/images/common/vip12x.png",
                        alt: "",
                    },
                }) : 2 == i.vipLimit ? e("img", {
                    attrs: {
                        src: "/desktop/images/common/vip22x.png",
                        alt: "",
                    },
                }) : 3 == i.vipLimit ? e("img", {
                    attrs: {
                        src: "/desktop/images/common/vip32x.png",
                        alt: "",
                    },
                }) : 4 == i.vipLimit ? e("img", {
                    attrs: {
                        src: "/desktop/images/common/vip42x.png",
                        alt: "",
                    },
                }) : t._e(), ]) : t._e(), ]);
            }), 1) : t._e(), ], 1), e("el-form-item", {
                attrs: {
                    label: "标签：",
                    prop: ""
                }
            }, [e("div", {
                staticClass: "tags-box position-relative",
                on: {
                    click: t.visibleTags
                },
            }, [t._v(" " + t._s(t.tagText) + " "), e("i", {
                staticClass: "el-icon-circle-plus-outline position-absolute circle",
                attrs: {
                    slot: "suffix"
                },
                slot: "suffix",
            }), ]), ]), e("el-form-item", {
                attrs: {
                    label: "标题：",
                    prop: "title"
                }
            }, [e("el-input", {
                attrs: {
                    size: "mini",
                    maxlength: "36",
                    data: t.articleInfo,
                },
                model: {
                    value: t.crateArticleQuest.title,
                    callback: function(e) {
                        t.$set(t.crateArticleQuest, "title", e);
                    },
                    expression: "crateArticleQuest.title",
                },
            }), ], 1), e("el-form-item", {
                attrs: {
                    label: "内容：",
                    prop: "content"
                }
            }, [e("Editor", {
                ref: "editor",
                attrs: {
                    editorType: "update"
                },
            }), ], 1), ], 1), e("div", {
                staticClass: "d-flex justify-content-between align-items-center",
                staticStyle: {
                    "margin-right": "34px",
                    "padding-left": "70px",
                },
            }, [e("span", {
                staticStyle: {
                    "font-size": "12px",
                    color: "#ff6565",
                },
            }, [t._v("注意：悬赏贴悬赏时长为72-240整数")]), e("div", [e("button", {
                staticClass: "save-btn",
                on: {
                    click: function(e) {
                        return t.sendArticle("drafts");
                    },
                },
            }, [t._v(" 保存草稿 ")]), e("button", {
                staticClass: "save-btn",
                on: {
                    click: t.goback
                },
            }, [t._v("取消")]), e("button", {
                staticClass: "common-submitBtn",
                on: {
                    click: t.sendArticle
                },
            }, [t._v("发帖")]), ]), ]), ], 1), e("hj-gap", {
                attrs: {
                    height: "60"
                }
            }), e("HjDiyModal", {
                attrs: {
                    visible: t.visible
                }
            }, [e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.visible,
                    expression: "visible",
                }, ],
                staticClass: "position-absolute tabs-modal",
            }, [e("div", {
                staticClass: "title position-relative"
            }, [e("p", [t._v("常用标签")]), e("i", {
                staticClass: "el-icon-close position-absolute",
                staticStyle: {
                    top: "15px",
                    right: "15px",
                    "z-index": "88",
                },
                on: {
                    click: function(e) {
                        t.visible = !1;
                    },
                },
            }), ]), e("div", {
                staticClass: "content"
            }, [e("div", {
                staticClass: "search"
            }), e("div", {
                staticClass: "d-flex justify-content-between"
            }, [e("el-input", {
                staticStyle: {
                    width: "269px"
                },
                attrs: {
                    placeholder: "请输入要搜索的标签"
                },
                on: {
                    change: t.searchKeyword
                },
                model: {
                    value: t.keyword,
                    callback: function(e) {
                        t.keyword = e;
                    },
                    expression: "keyword",
                },
            }), e("el-button", {
                attrs: {
                    type: "primary",
                    size: "mini"
                },
                on: {
                    click: t.searchKeyword
                },
            }, [t._v("搜索")]), ], 1), e("div", {
                staticClass: "tab-list mt-2 mb-2"
            }, [t._l(t.tagsCopyList.results, function(i, s) {
                return e("el-tag", {
                    key: s,
                    staticClass: "t mb-1 c-pointer",
                    attrs: {
                        type: "",
                        effect: t.tagCheckList.some( (t) => t.tagName === i.tagName) ? "dark" : "plain",
                    },
                    on: {
                        click: function(e) {
                            return t.changeTag(i, s);
                        },
                    },
                }, [t._v("#" + t._s(i.tagName || "") + " ")]);
            }), t.tagsCopyList.results && 0 !== t.tagsCopyList.results.length ? t._e() : e("p", {
                staticClass: "text-center",
                staticStyle: {
                    "font-size": "12px",
                    color: "#b8b8b8",
                    "margin-top": "50px",
                },
            }, [t._v(" 没有搜索到该标签哟~ ")]), ], 2), e("div", {
                staticClass: "action d-flex justify-content-end"
            }, [e("el-button", {
                staticClass: "mr-2",
                on: {
                    click: t.turnTags
                },
            }, [t._v("换一换")]), e("el-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: t.OkTags
                },
            }, [t._v("确定")]), ], 1), ]), ]), ]), ], 1);
        }, [], !1, null, null, null));
        e.default = s.exports;
    },
    "5f76": function(t, e, i) {},
    "5ff0": function(t, e, i) {},
    "625d": function(t, e, i) {
        "use strict";
        i("aba8");
    },
    "6cea": function(t, e, i) {},
    7204: function(t, e, i) {
        "use strict";
        i("bdea");
    },
    "86a3": function(t, e, i) {},
    9709: function(t, e, i) {
        "use strict";
        i.r(e),
        (i = i("2877")),
        (i = Object(i.a)({}, function() {
            return (0,
            this._self._c)("router-view");
        }, [], !1, null, null, null)),
        (e.default = i.exports);
    },
    "97c3": function(t, e, i) {},
    "9f1d": function(t, e, i) {
        "use strict";
        i("c06a");
    },
    "9f96": function(t, e, i) {},
    a478: function(t, e, i) {},
    a7ac: function(t, e, i) {
        "use strict";
        i("23aa");
    },
    a91c: function(t, e, i) {
        "use strict";
        i.r(e),
        i("0fb7"),
        i("450d");
        var s = i("f529")
          , a = i.n(s)
          , o = ((s = (i("14d9"),
        i("6b26"),
        i("2f62"))),
        i("fded"))
          , n = i("095c")
          , r = i("1f24")
          , l = i("ba8a")
          , c = i("81b0")
          , d = i("d1eb")
          , h = i("29ad")
          , p = i("dafe")
          , u = i("1221")
          , m = i("21e4");
        let g = null
          , f = null;
        (s = {
            computed: {
                ...Object(s.c)({
                    userInfo: "userInfo"
                }),
                showprompt() {
                    var t = this.selectList2
                      , e = this.selectType2;
                    if (t.length && "" != e) {
                        let s = {};
                        for (var i of t)
                            if (i.nodeId == e) {
                                s = i;
                                break;
                            }
                        if (s.hasOwnProperty("vipLimit") && s.vipLimit > this.userInfo.vip)
                            return [1, s];
                    }
                    return [0];
                },
            },
            data() {
                return {
                    rules: {
                        title: [{
                            required: !0,
                            message: "标题不能为空",
                            trigger: "blur"
                        }, ],
                        content: [{
                            required: !0,
                            message: "内容不能为空",
                            trigger: "blur"
                        }, ],
                    },
                    formLayout: "horizontal",
                    selectType: "",
                    textareaValue: "",
                    radio: 3,
                    input: "",
                    extraVisible: !1,
                    visible: !1,
                    keyword: "",
                    oneIndex: "",
                    twoIndex: "",
                    selectList1: [],
                    selectList2: [],
                    selectList3: [],
                    selectType1: "",
                    selectType2: "",
                    selectType3: "",
                    tagText: "",
                    tagPage: 1,
                    tagsList: l.d,
                    tagsCopyList: l.d,
                    tagCheckList: [],
                    crateArticleQuest: {
                        title: "",
                        content: ""
                    },
                    menuList: [],
                    inputVisible: !1,
                    inputValue: "",
                    querySaleTopicStatus: {
                        publishDiamondSaleTopic: !1,
                        publishGoldSaleTopic: !1,
                    },
                    isShow: !1,
                    needVerify: {},
                    isPassing: !1,
                };
            },
            beforeRouteLeave(t, e, i) {
                "addArticle" !== t.name && ((this.crateArticleQuest.title && this.$store.state.isLogin) || (this.$store.state.isLogin && this.$refs.editor.request().content)) ? this.$hjConfirm("还没有发布成功，如果现在离开当前页面，可能会丢失所有未保存的内容，是否确认离开？", {
                    async onOk() {
                        i();
                    },
                }) : i();
            },
            created() {
                document.getElementById("body").classList.remove("filter-bg"),
                document.getElementById("body").classList.add("bg-color"),
                this.getQuerySaleTopicStatus(),
                (this.menuList = this.$store.state.routerMenu),
                this._initMenu();
            },
            methods: {
                ...Object(s.d)(["updateLevelUpgrade"]),
                async getQuerySaleTopicStatus() {
                    try {
                        var t = await Object(r.u)();
                        this.querySaleTopicStatus = t.data;
                    } catch (t) {}
                },
                showUpgradeVip() {
                    this.updateLevelUpgrade(1);
                },
                showInput() {
                    (this.inputVisible = !0),
                    this.$nextTick( (t) => {
                        this.$refs.saveTagInput.$refs.input.focus();
                    }
                    );
                },
                handleInputConfirm() {
                    var t = this.inputValue;
                    this.tagsCopyList.results || ((this.tagsCopyList.results = []),
                    (this.tagsList.results = [])),
                    t && (this.tagsCopyList.results.push({
                        tagId: this.tagsCopyList.results.length,
                        tagName: t,
                    }),
                    this.tagsList.results.push({
                        tagId: this.tagsCopyList.results.length,
                        tagName: t,
                    })),
                    (this.inputVisible = !1),
                    (this.inputValue = "");
                },
                async _initMenu() {
                    var t, e, i, s, a, o = this.menuList, n = this.$route.query["nodeId"];
                    let r = 0;
                    if (n)
                        r = n;
                    else {
                        if (!o.length)
                            return !1;
                        r = o[0].children[0].nodeId;
                    }
                    const {indexS: l, parent: c} = Object(d.b)(o, r);
                    try {
                        (this.selectList1 = o),
                        c && (c.parentId ? (this.selectType1 = c.parentId) : (this.selectType1 = c.nodeId)),
                        2 === l.length && Array.isArray(c.children) ? (([t,e] = l),
                        (this.selectList2 = c.children),
                        (this.selectType2 = c.children[e].nodeId),
                        (this.selectList3 = c.children[e].children || [])) : 3 === l.length && Array.isArray(c.children) && (([i,s,a] = l),
                        (this.selectList2 = this.selectList1[s].children),
                        this.selectList1.forEach( (t) => {
                            t.nodeId == c.parentId && (this.selectList2 = t.children || []);
                        }
                        ),
                        (this.selectType2 = c.nodeId),
                        (this.selectList3 = c.children),
                        (this.selectType3 = c.children[a].nodeId));
                    } catch (t) {
                        this.$message.error(t.toString());
                    }
                },
                routerData(t) {
                    (this.menuList = this.$store.state.routerMenu),
                    this._initMenu();
                },
                handlerSelectType1() {
                    (this.selectType2 = ""),
                    (this.selectType3 = "");
                    for (let e = 0; e < this.selectList1.length; e++) {
                        var t = this.selectList1[e];
                        if (t.nodeId === this.selectType1) {
                            this.selectList2 = t.children;
                            break;
                        }
                    }
                },
                handlerSelectType2() {
                    this.selectType3 = "";
                    let t = !1;
                    for (let i = 0; i < this.selectList2.length; i++) {
                        var e = this.selectList2[i];
                        if (e.nodeId === this.selectType2) {
                            Array.isArray(e.children) && e.children && (this.selectList3 = e.children),
                            (t = !0);
                            break;
                        }
                    }
                    t || (this.selectList3 = []);
                },
                navigatorTo() {
                    this.warning("功能待开发");
                },
                remove() {
                    this.$refs.editor.clear(),
                    (this.tagsList = []),
                    (this.crateArticleQuest.title = ""),
                    (this.tagCheckList = []),
                    (this.tagsList = l.d),
                    (this.tagsCopyList = l.d),
                    (this.tagText = ""),
                    (this.tagPage = 1);
                },
                async sendArticle(t) {
                    var e = this.$refs.editor.request();
                    if (this.showprompt[0])
                        return this.showUpgradeVip(),
                        !1;
                    if (1 == e.type) {
                        if (0 == e.money_type)
                            return this.$message.warning("请选择货币类型"),
                            !1;
                        if (this.$refs.editor && !this.$refs.editor.private_issell())
                            return this.showUpgradeVip(),
                            !1;
                    }
                    (this.crateArticleQuest.content = e.content),
                    this.$refs.article.validate(async (e) => {
                        if (e) {
                            (f = "" !== this.selectType3 ? this.selectType3 : "" !== this.selectType2 ? this.selectType2 : "" !== this.selectType1 ? this.selectType1 : Number(this.$route.query.nodeId)),
                            (g = this.crateArticleQuest.content),
                            (g = Object(h.c)(g)),
                            (e = document.querySelectorAll(".ql-editor #showaudio")),
                            e && 0 < e.length && e.forEach(function(t) {
                                var e = t.getAttribute("data-id");
                                t = t.getAttribute("src");
                                g = g.replace(`<audio src="${t}" controls="true" controlslist="nodownload" id="showaudio" data-id="${e}"></audio>`, `<audio src="haijiao.com" controls="true" controlslist="nodownload" id="showaudio" data-id="${e}"></audio>`);
                            }),
                            g.split('<img src="').forEach( (t) => {
                                if (-1 != t.indexOf("data:image/")) {
                                    var e = t.split('"')[0]
                                      , i = Math.ceil(e.length / 10240);
                                    for (let t = 0; t < i; t++) {
                                        var s = e.slice(1024e3 * t, 1024e3 * (t + 1));
                                        s && (g = g.replace(s, ""));
                                    }
                                }
                            }
                            ),
                            (g = Object(p.b)(g));
                            var i = this.$refs.editor.sendFriendList;
                            for (let t = 0; t < i.length; t++)
                                g = g.replace(new RegExp("@" + i[t].nickname), `<span data-uid="${i[t].userId}"  class="at-box">@${i[t].nickname} </span>`);
                            if ("drafts" == t)
                                try {
                                    (await Object(r.v)(Object.assign(this.$refs.editor.request(), {
                                        title: this.crateArticleQuest.title,
                                        content: g,
                                        node_id: f,
                                        tags: this.tagCheckList.map( (t) => t.tagName),
                                        isPublisher: !1,
                                    }))).success && (this.$message.success("保存成功！"),
                                    (this.tagsList = []),
                                    (this.crateArticleQuest.title = ""),
                                    (this.tagCheckList = []),
                                    (this.tagsList = l.d),
                                    (this.tagsCopyList = l.d),
                                    (this.tagText = ""),
                                    (this.tagPage = 1),
                                    this.$refs.editor.clear());
                                } catch (e) {
                                    s.close(),
                                    this.$message.error(e.toString());
                                }
                            else if (this.crateArticleQuest.title.trim())
                                if (((this.needVerify = await this.getCaptcha()),
                                this.needVerify.data))
                                    this.isShow = !0;
                                else {
                                    var s = a.a.warning({
                                        message: "正在发送请稍后...",
                                        duration: 0,
                                    });
                                    try {
                                        var o = await Object(r.v)(Object.assign(this.$refs.editor.request(), {
                                            title: this.crateArticleQuest.title,
                                            content: g,
                                            node_id: f,
                                            tags: this.tagCheckList.map( (t) => t.tagName),
                                            isPublisher: !0,
                                        }));
                                        s.close(),
                                        o.success && (this.$message.success("发帖成功！"),
                                        (this.tagsList = []),
                                        (this.crateArticleQuest.title = ""),
                                        (this.tagCheckList = []),
                                        (this.tagsList = l.d),
                                        (this.tagsCopyList = l.d),
                                        (this.tagText = ""),
                                        (this.tagPage = 1),
                                        this.$refs.editor.clear());
                                    } catch (e) {
                                        s.close(),
                                        this.$message.error(e.toString());
                                    }
                                }
                            else
                                this.$message.error("标题不能为空");
                        }
                    }
                    );
                },
                searchKeyword: Object(c.debounce)(function() {
                    let e = "";
                    try {
                        e = JSON.stringify(this.tagsList);
                    } catch (t) {
                        e = JSON.stringify(l.d);
                    }
                    (this.tagsCopyList = JSON.parse(e)),
                    "" !== this.keyword && (this.tagsCopyList.results = this.tagsCopyList.results.filter( (t) => {
                        if (-1 !== t.tagName.indexOf(this.keyword))
                            return t;
                    }
                    ));
                }, 200),
                changeTag(t, e) {
                    if (this.tagCheckList.some( (e) => {
                        if (e.tagName === t.tagName)
                            return !0;
                    }
                    )) {
                        for (var i = 0; i < this.tagCheckList.length; i++)
                            if (this.tagCheckList[i].tagName === t.tagName) {
                                this.tagCheckList.splice(i, 1);
                                break;
                            }
                        this.tagText = this.tagCheckList.map( (t) => "#" + t.tagName).join(" ");
                    } else
                        5 === this.tagCheckList.length ? this.$message.warning("帖子标签最多显示5个!") : (this.tagCheckList.push(t),
                        (this.tagText = this.tagCheckList.map( (t) => "#" + t.tagName).join(" ")));
                },
                closeTag() {
                    (this.visible = !1),
                    (this.tagPage = 1);
                },
                async turnTags() {
                    var t = Math.ceil(this.tagsList.page.total / this.tagsList.page.limit);
                    if (this.tagPage < t) {
                        this.tagPage += 1;
                        try {
                            var e = await Object(r.g)({
                                page: this.tagPage
                            });
                            this.tagsList = e.data || l.d;
                            let i = "";
                            try {
                                i = JSON.stringify(e.data);
                            } catch (t) {
                                i = JSON.stringify(l.d);
                            }
                            this.tagsCopyList = JSON.parse(i);
                        } catch (t) {
                            this.$message.error(t.toString());
                        }
                    } else {
                        this.tagPage = 1;
                        try {
                            var i = await Object(r.g)({
                                page: this.tagPage
                            });
                            this.tagsList = i.data || l.d;
                            let e = "";
                            try {
                                e = JSON.stringify(i.data);
                            } catch (t) {
                                e = JSON.stringify(l.d);
                            }
                            this.tagsCopyList = JSON.parse(e);
                        } catch (t) {
                            this.$message.error(t.toString());
                        }
                    }
                },
                OkTags() {
                    this.visible = !1;
                },
                async visibleTags() {
                    try {
                        var t = await Object(r.g)({
                            page: this.tagPage
                        });
                        this.tagsList = t.data || l.d;
                        let e = "";
                        try {
                            e = JSON.stringify(t.data);
                        } catch (t) {
                            e = JSON.stringify(l.d);
                        }
                        (this.tagsCopyList = JSON.parse(e)),
                        (this.visible = !this.visible);
                    } catch (t) {
                        this.$message.error(t.toString());
                    }
                },
                visibleAction() {
                    this.extraVisible = !0;
                },
                handleSubmit(t) {
                    t.preventDefault(),
                    this.form.validateFields( (t, e) => {}
                    );
                },
                handleSelectChange(t) {
                    this.form.setFieldsValue({
                        note: `Hi, ${"male" === t ? "man" : "lady"}!`,
                    });
                },
                async getCaptcha() {
                    return Object(m.e)("topicCaptcha");
                },
                async submit(t) {
                    var e = a.a.warning({
                        message: "正在发送请稍后...",
                        duration: 0
                    });
                    if (t.isPassing)
                        try {
                            var i = await Object(r.v)(Object.assign(this.$refs.editor.request(), {
                                title: this.crateArticleQuest.title,
                                content: g,
                                node_id: f,
                                tags: this.tagCheckList.map( (t) => t.tagName),
                                isPublisher: !0,
                            }));
                            e.close(),
                            i.success && (this.$message.success("发帖成功！"),
                            (this.tagsList = []),
                            (this.crateArticleQuest.title = ""),
                            (this.tagCheckList = []),
                            (this.tagsList = l.d),
                            (this.tagsCopyList = l.d),
                            (this.tagText = ""),
                            (this.tagPage = 1),
                            this.$refs.editor.clear(),
                            this.closeVerify());
                        } catch (t) {
                            e.close(),
                            this.$message.error(t.toString()),
                            this.closeVerify();
                        }
                },
                closeVerify() {
                    this.isShow = !1;
                },
            },
            components: {
                BaseHeaderLayout: o.a,
                Editor: n.a,
                Verify: u.a
            },
        }),
        i("1bcf"),
        (c = i("2877")),
        (o = Object(c.a)(s, function() {
            var t = this
              , e = t._self._c;
            return e("div", [e("base-header-layout", {
                on: {
                    routerData: t.routerData
                }
            }, [e("div", {
                staticClass: "addArtice",
                staticStyle: {
                    "margin-top": "15px"
                },
            }, [e("el-form", {
                ref: "article",
                staticStyle: {
                    "margin-right": "32px"
                },
                attrs: {
                    model: t.crateArticleQuest,
                    rules: t.rules,
                    "label-width": "80px",
                },
            }, [e("el-form-item", {
                staticStyle: {
                    "margin-bottom": "10px"
                },
                attrs: {
                    label: "板块："
                },
            }, [0 < t.selectList1.length ? e("el-select", {
                staticStyle: {
                    width: "103px"
                },
                attrs: {
                    size: "mini"
                },
                on: {
                    change: t.handlerSelectType1
                },
                model: {
                    value: t.selectType1,
                    callback: function(e) {
                        t.selectType1 = e;
                    },
                    expression: "selectType1",
                },
            }, t._l(t.selectList1, function(i, s) {
                return e("el-option", {
                    key: s,
                    attrs: {
                        label: i.name,
                        value: i.nodeId,
                    },
                }, [e("span", [t._v(t._s(i.name))])]);
            }), 1) : t._e(), 0 < t.selectList2.length ? e("span", {
                staticStyle: {
                    margin: "0 10px"
                }
            }, [t._v(">")]) : t._e(), 0 < t.selectList2.length ? e("el-select", {
                staticStyle: {
                    width: "103px"
                },
                attrs: {
                    size: "mini"
                },
                on: {
                    change: t.handlerSelectType2
                },
                model: {
                    value: t.selectType2,
                    callback: function(e) {
                        t.selectType2 = e;
                    },
                    expression: "selectType2",
                },
            }, t._l(t.selectList2, function(i, s) {
                return "橘子直播" != i.name && "草榴社区" != i.name ? e("el-option", {
                    key: s,
                    attrs: {
                        label: i.name,
                        value: i.nodeId,
                    },
                }, [e("span", [t._v(t._s(i.name))]), i.vipLimit ? e("span", {
                    staticClass: "vipicon",
                }, [1 == i.vipLimit ? e("img", {
                    attrs: {
                        src: "/desktop/images/common/vip12x.png",
                        alt: "",
                    },
                }) : 2 == i.vipLimit ? e("img", {
                    attrs: {
                        src: "/desktop/images/common/vip22x.png",
                        alt: "",
                    },
                }) : 3 == i.vipLimit ? e("img", {
                    attrs: {
                        src: "/desktop/images/common/vip32x.png",
                        alt: "",
                    },
                }) : 4 == i.vipLimit ? e("img", {
                    attrs: {
                        src: "/desktop/images/common/vip42x.png",
                        alt: "",
                    },
                }) : t._e(), ]) : t._e(), ]) : t._e();
            }), 1) : t._e(), 0 < t.selectList3.length ? e("span", {
                staticStyle: {
                    margin: "0 10px"
                }
            }, [t._v(">")]) : t._e(), 0 < t.selectList3.length ? e("el-select", {
                staticStyle: {
                    width: "103px"
                },
                attrs: {
                    size: "mini"
                },
                model: {
                    value: t.selectType3,
                    callback: function(e) {
                        t.selectType3 = e;
                    },
                    expression: "selectType3",
                },
            }, t._l(t.selectList3, function(i, s) {
                return e("el-option", {
                    key: s,
                    attrs: {
                        label: i.name,
                        value: i.nodeId,
                    },
                }, [e("span", [t._v(t._s(i.name))]), i.vipLimit ? e("span", {
                    staticClass: "vipicon"
                }, [1 == i.vipLimit ? e("img", {
                    attrs: {
                        src: "/desktop/images/common/vip12x.png",
                        alt: "",
                    },
                }) : 2 == i.vipLimit ? e("img", {
                    attrs: {
                        src: "/desktop/images/common/vip22x.png",
                        alt: "",
                    },
                }) : 3 == i.vipLimit ? e("img", {
                    attrs: {
                        src: "/desktop/images/common/vip32x.png",
                        alt: "",
                    },
                }) : 4 == i.vipLimit ? e("img", {
                    attrs: {
                        src: "/desktop/images/common/vip42x.png",
                        alt: "",
                    },
                }) : t._e(), ]) : t._e(), ]);
            }), 1) : t._e(), t.showprompt[0] ? e("div", {
                staticStyle: {
                    "font-size": "12px",
                    float: "right",
                    color: "rgb(255, 101, 101)",
                },
            }, [t._v(" 抱歉," + t._s(t.showprompt[1].name || "") + "该板块至少需要VIP" + t._s(t.showprompt[1].vipLimit) + " "), ]) : t._e(), ], 1), e("el-form-item", {
                staticStyle: {
                    "margin-bottom": "10px"
                },
                attrs: {
                    label: "标签："
                },
            }, [e("div", {
                staticClass: "tags-box position-relative",
                on: {
                    click: t.visibleTags
                },
            }, [t._v(" " + t._s(t.tagText) + " "), e("i", {
                staticClass: "el-icon-circle-plus-outline position-absolute circle",
                attrs: {
                    slot: "suffix"
                },
                slot: "suffix",
            }), ]), ]), e("el-form-item", {
                attrs: {
                    label: "标题：",
                    prop: "title"
                }
            }, [e("el-input", {
                attrs: {
                    size: "mini",
                    maxlength: "36"
                },
                model: {
                    value: t.crateArticleQuest.title,
                    callback: function(e) {
                        t.$set(t.crateArticleQuest, "title", e);
                    },
                    expression: "crateArticleQuest.title",
                },
            }), ], 1), e("el-form-item", {
                attrs: {
                    label: "内容：",
                    prop: "content"
                }
            }, [e("Editor", {
                ref: "editor",
                attrs: {
                    viplevel: t.userInfo.vip,
                    querySaleTopicStatus: t.querySaleTopicStatus,
                },
                on: {
                    upgradeVip: t.showUpgradeVip
                },
            }), ], 1), ], 1), e("div", {
                staticClass: "d-flex justify-content-between align-items-center",
                staticStyle: {
                    "margin-right": "34px",
                    "padding-left": "70px",
                },
            }, [e("span", {
                staticStyle: {
                    "font-size": "12px",
                    color: "#ff6565",
                },
            }, [t._v("注意：悬赏贴悬赏时长为72-240整数")]), e("div", [e("button", {
                staticClass: "save-btn",
                on: {
                    click: function(e) {
                        return t.sendArticle("drafts");
                    },
                },
            }, [t._v("保存草稿")]), e("button", {
                staticClass: "save-btn",
                on: {
                    click: t.remove
                },
            }, [t._v("清空")]), e("button", {
                staticClass: "common-submitBtn",
                on: {
                    click: t.sendArticle
                },
            }, [t._v("发帖")]), ]), ]), ], 1), e("hj-gap", {
                attrs: {
                    height: "60"
                }
            }), e("HjDiyModal", {
                attrs: {
                    visible: t.visible
                }
            }, [e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.visible,
                    expression: "visible",
                }, ],
                staticClass: "position-absolute tabs-modal",
            }, [e("div", {
                staticClass: "title position-relative"
            }, [e("p", [t._v("常用标签")]), e("i", {
                staticClass: "el-icon-close position-absolute",
                staticStyle: {
                    top: "15px",
                    right: "15px",
                    "z-index": "88",
                },
                on: {
                    click: function(e) {
                        t.visible = !1;
                    },
                },
            }), ]), e("div", {
                staticClass: "content"
            }, [e("div", {
                staticClass: "search"
            }), e("div", {
                staticClass: "d-flex justify-content-between"
            }, [e("el-input", {
                staticStyle: {
                    width: "269px"
                },
                attrs: {
                    placeholder: "请输入要搜索的标签"
                },
                on: {
                    change: t.searchKeyword
                },
                model: {
                    value: t.keyword,
                    callback: function(e) {
                        t.keyword = e;
                    },
                    expression: "keyword",
                },
            }), e("el-button", {
                attrs: {
                    type: "primary",
                    size: "mini"
                },
                on: {
                    click: t.searchKeyword
                },
            }, [t._v("搜索")]), ], 1), e("div", {
                staticClass: "tab-list mt-2 mb-2"
            }, [t._l(t.tagsCopyList.results, function(i, s) {
                return e("el-tag", {
                    key: s,
                    ref: "saveTagInput",
                    refInFor: !0,
                    staticClass: "t mb-1 c-pointer",
                    attrs: {
                        type: "",
                        effect: t.tagCheckList.some( (t) => t.tagName === i.tagName) ? "dark" : "plain",
                    },
                    on: {
                        click: function(e) {
                            return t.changeTag(i, s);
                        },
                    },
                }, [t._v("#" + t._s(i.tagName || "") + " ")]);
            }), t.inputVisible ? e("el-input", {
                ref: "saveTagInput",
                staticClass: "input-new-tag",
                attrs: {
                    maxlength: "10",
                    size: "small"
                },
                on: {
                    blur: t.handleInputConfirm
                },
                nativeOn: {
                    keyup: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.handleInputConfirm.apply(null, arguments);
                    },
                },
                model: {
                    value: t.inputValue,
                    callback: function(e) {
                        t.inputValue = e;
                    },
                    expression: "inputValue",
                },
            }) : e("el-button", {
                staticClass: "button-new-tag",
                staticStyle: {
                    margin: "0 5px"
                },
                attrs: {
                    size: "small"
                },
                on: {
                    click: t.showInput
                },
            }, [t._v("+ 添加自定义")]), t.tagsCopyList.results && 0 !== t.tagsCopyList.results.length ? t._e() : e("p", {
                staticClass: "text-center",
                staticStyle: {
                    "font-size": "12px",
                    color: "#b8b8b8",
                    "margin-top": "50px",
                },
            }, [t._v(" 没有搜索到该标签哟~ ")]), ], 2), e("div", {
                staticClass: "action d-flex justify-content-end",
            }, [e("el-button", {
                staticClass: "mr-2",
                on: {
                    click: t.turnTags
                },
            }, [t._v("换一换")]), e("el-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: t.OkTags
                },
            }, [t._v("确定")]), ], 1), ]), ]), ]), ], 1), t.isShow ? e("verify", {
                attrs: {
                    closeVerify: t.closeVerify,
                    isShow: t.isShow
                },
                on: {
                    submit: t.submit
                },
            }) : t._e(), ], 1);
        }, [], !1, null, null, null)),
        (e.default = o.exports);
    },
    aba8: function(t, e, i) {},
    ad56: function(t, e, i) {},
    af88: function(t, e, i) {
        "use strict";
        i("5f76");
    },
    bdea: function(t, e, i) {},
    c06a: function(t, e, i) {},
    c10a: function(t, e, i) {
        "use strict";
        i("e612"),
        i("450d");
        var s = i("dd87")
          , a = ((s = i.n(s)),
        i("075a"),
        i("72aa"))
          , o = ((a = i.n(a)),
        i("14d9"),
        i("9d4c"),
        i("e450"))
          , n = ((o = i.n(o)),
        i("672e"),
        i("101e"))
          , r = ((n = i.n(n)),
        i("4733"))
          , l = i("b5aa")
          , c = i("21e4")
          , d = i("1221");
        (n = {
            name: "giftList",
            components: {
                ElPagination: n.a,
                ElInputNumber: o.a,
                Verify: d.a
            },
            props: {
                sourceType: {
                    type: Number,
                    default: 0,
                    validator: function(t) {
                        return [0, 1, 2].includes(t);
                    },
                },
                sourceId: {
                    type: Number,
                    default: 0
                },
                userId: {
                    type: [Number, String],
                    default: 0
                },
                type: {
                    type: Number,
                    default: 1
                },
                dataList: {
                    type: Object,
                    default: {
                        list: [],
                        page: {
                            page: 1,
                            total: 0
                        }
                    },
                },
                money: {
                    type: Object,
                    default: {
                        gold: 0,
                        diamond: 0
                    }
                },
            },
            data() {
                return {
                    num: 1,
                    showList: [],
                    giftActive: 0,
                    propShowGoldbtn: !0,
                    isShow: !1,
                    needVerify: {},
                    isPassing: !1,
                    moneyType: 0,
                };
            },
            methods: {
                async getCaptcha() {
                    return Object(c.e)("preBuyCaptcha");
                },
                async submit(t) {
                    t.isPassing && (2 == this.moneyType ? window.open(window.location.origin + "/personal/wallet") : window.open(window.location.origin + "/personal/wallet?moneytype=1"),
                    (this.isShow = !1));
                },
                closeVerify() {
                    this.isShow = !1;
                },
                setActiveGift(t) {
                    1 == this.showList[t].itemType || 1 != this.type ? ((this.giftActive = t),
                    0 == this.showList[t].goldSalePrice ? (this.propShowGoldbtn = !1) : (this.propShowGoldbtn = !0)) : this.$message.error("不能赠送道具");
                },
                close() {
                    this.$emit("close");
                },
                async sendGift() {
                    try {
                        await Object(l.O)({
                            user_id: this.userId,
                            item_id: this.showList[this.giftActive].itemId,
                            quantity: this.num,
                            moneyType: this.showList[this.giftActive].moneyType,
                        }),
                        (this.showList[this.giftActive].quantity -= this.num),
                        this.$message.success("赠送成功");
                    } catch (t) {
                        this.$message.error(t);
                    }
                },
                async buyGift() {
                    try {
                        var e = this.num;
                        const t = this.showList[this.giftActive];
                        let c = 0
                          , d = null;
                        var i = this.money;
                        if (2 == t.moneyType) {
                            var s = Object(r.a)(i.diamond, 100)
                              , a = Object(r.a)(t.diamondSalePrice, 100);
                            (c = Object(r.b)(a, e)) > s && (d = "钻石");
                        } else {
                            if (1 != t.moneyType)
                                return !1;
                            var o = Object(r.a)(t.goldSalePrice, 1);
                            (c = Object(r.b)(o, e)) > i.gold && (d = "金币");
                        }
                        if (d) {
                            this.needVerify = await this.getCaptcha();
                            const e = this.needVerify.data
                              , i = this;
                            this.$hjConfirm(d + "余额不足,是否前往充值", {
                                title: "余额不足",
                                okText: "去充值",
                                async onOk() {
                                    e ? ((i.isShow = !0),
                                    (i.moneyType = t.moneyType)) : 2 == t.moneyType ? window.open(window.location.origin + "/personal/wallet") : window.open(window.location.origin + "/personal/wallet?moneytype=1");
                                },
                            });
                        } else {
                            const i = this
                              , s = {
                                itemId: t.itemId,
                                quantity: e,
                                moneyType: t.moneyType,
                                userId: this.userId,
                            };
                            var n = this.sourceId
                              , l = this.sourceType;
                            n && l && ((s.sourceId = n),
                            (s.sourceType = l)),
                            this.$hjConfirm(`赠送${s.quantity}个${t.name},需花费${c}${2 == s.moneyType ? "钻石" : "金币"},是否赠送`, {
                                okText: "确认",
                                async onOk() {
                                    i.onbuyGift(s);
                                },
                            });
                        }
                    } catch (t) {}
                },
                async onbuyGift(t) {
                    try {
                        var e = await Object(l.d)(t);
                        this.$emit("updateMoney", e.data),
                        this.$message.success("赠送成功");
                    } catch (t) {
                        this.$message.error(t);
                    }
                },
                currentPage(t) {
                    this.showList = this.dataList.list[t - 1];
                },
            },
            created() {
                if (0 < this.dataList.list.length) {
                    this.showList = this.dataList.list[0];
                    let t = !1;
                    this.showList.forEach( (e, i) => {
                        t || (1 == e.itemType && ((t = !0),
                        (this.giftActive = i)));
                    }
                    ),
                    this.showList && 0 < this.showList.length && (0 < this.showList[this.giftActive].goldSalePrice ? (this.propShowGoldbtn = !0) : (this.propShowGoldbtn = !1));
                }
            },
        }),
        i("d0a0"),
        i("af88"),
        (o = i("2877")),
        (d = Object(o.a)(n, function() {
            var t = this
              , e = t._self._c;
            return e("div", [e("div", {
                staticClass: "giftlist"
            }, [e("ul", {
                staticClass: "list-box"
            }, [t._l(t.showList, function(i, s) {
                return e("li", {
                    key: s,
                    class: {
                        "gift-active": t.giftActive == s,
                        "pack-prop": 1 == t.type && 2 == i.itemType,
                    },
                    on: {
                        click: function(e) {
                            return t.setActiveGift(s);
                        },
                    },
                }, [e("img", {
                    attrs: {
                        src: i.img,
                        alt: ""
                    }
                }), e("div", {
                    staticStyle: {
                        "font-size": "15px"
                    }
                }, [t._v(t._s(i.name)), ]), 1 == i.itemType ? e("div", {
                    staticClass: "money",
                    attrs: {
                        data: i.moneyType
                    },
                }, [t._v(" " + t._s(1 == i.moneyType ? i.goldSalePrice : t.MoneyShow(i.diamondSalePrice, 2)) + t._s(t._f("moneyType")(i.moneyType)) + " "), ]) : e("div", {
                    staticClass: "money"
                }, [0 != i.goldSalePrice ? e("span", [t._v(t._s(i.goldSalePrice) + "币/"), ]) : t._e(), t._v(t._s(t._f("diamondShow")(i.diamondSalePrice)) + "钻 "), ]), i.quantity ? e("span", {
                    staticClass: "num"
                }, [t._v("×" + t._s(i.quantity)), ]) : t._e(), 4 == t.type && 2 == i.itemType && 0 < i.goldSalePrice ? e("span", {
                    staticClass: "proprighttop"
                }, [t._v("活动"), ]) : t._e(), ]);
            }), 0 == t.showList.length ? e("div", {
                staticClass: "nohas"
            }, [t._v("什么也没有~"), ]) : t._e(), ], 2), e("div", {
                staticClass: "money-box"
            }, [e("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 2 == t.type,
                    expression: "type == 2",
                }, ],
            }, [e("img", {
                attrs: {
                    src: "/desktop/images/common/gold.png",
                    alt: ""
                },
            }), e("span", [t._v(t._s(t.money.gold))]), ]), e("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 1 == t.type,
                    expression: "type == 1",
                }, ],
            }, [e("img", {
                attrs: {
                    src: "/desktop/images/common/diamond.png",
                    alt: ""
                },
            }), e("span", [t._v(t._s(t._f("diamondShow")(t.money.diamond))), ]), ]), e("i", {
                staticClass: "el-icon-arrow-right"
            }), ]), e("div", {
                staticClass: "bottom-box"
            }, [e("div", [e("el-pagination", {
                attrs: {
                    background: "",
                    "page-size": 12,
                    "prev-text": "上一页",
                    "next-text": "下一页",
                    "current-page": t.dataList.page.page,
                    layout: "prev, pager, next",
                    total: t.dataList.page.total,
                },
                on: {
                    "current-change": t.currentPage
                },
            }), ], 1), e("div", {
                staticClass: "btn-box",
                attrs: {
                    data: t.type
                }
            }, [e("button", {
                staticClass: "close hjbox-cursor",
                staticStyle: {
                    "margin-right": "20px"
                },
                on: {
                    click: t.close
                },
            }, [t._v("取消")]), e("div", {
                staticClass: "gift-box-inum"
            }, [e("el-input-number", {
                style: 4 == t.type ? "border-right:1px solid #388DEA" : "",
                attrs: {
                    size: "mini",
                    max: 9999
                },
                model: {
                    value: t.num,
                    callback: function(e) {
                        t.num = e;
                    },
                    expression: "num",
                },
            }), e("button", {
                staticClass: "hjbox-cursor",
                on: {
                    click: t.buyGift
                },
            }, [t._v("赠送")]), ], 1), ]), ]), ]), t.isShow ? e("verify", {
                attrs: {
                    closeVerify: t.closeVerify,
                    isShow: t.isShow
                },
                on: {
                    submit: t.submit
                },
            }) : t._e(), ], 1);
        }, [], !1, null, "03f16606", null).exports),
        (n = {
            name: "giftpopup",
            components: {
                ElTabs: a.a,
                ElTabPane: s.a,
                giftList: d
            },
            props: {
                isuserId: {
                    type: Number,
                    default: 0
                },
                sourceType: {
                    type: Number,
                    default: 0,
                    validator: function(t) {
                        return [0, 1, 2].includes(t);
                    },
                },
                sourceId: {
                    type: Number,
                    default: 0
                },
                topic: {
                    type: Object,
                    default: {}
                },
            },
            data() {
                return {
                    active: "1",
                    myPack: {
                        list: [],
                        page: {
                            page: 1,
                            total: 0
                        }
                    },
                    goldList: {
                        list: [],
                        page: {
                            page: 1,
                            total: 0
                        }
                    },
                    diamondList: {
                        list: [],
                        page: {
                            page: 1,
                            total: 0
                        }
                    },
                    propList: {
                        list: [],
                        page: {
                            page: 1,
                            total: 0
                        }
                    },
                    loading: 0,
                    money: {
                        gold: 0,
                        diamond: 0
                    },
                };
            },
            computed: {},
            watch: {},
            methods: {
                updateMoney(t) {
                    this.money = t;
                },
                handleClick(t) {
                    0 == t.index && this.loading < 1 ? this.getDiamondList() : 1 == t.index && this.loading < 2 && this.getGoldList();
                },
                hideBox() {
                    this.$emit("hideBox");
                },
                async getPropList() {
                    try {
                        let e = await Object(l.y)({
                            itemType: "prop",
                            limit: 100,
                            type: "",
                        });
                        if (((this.propList.list = []),
                        e.data.results && 0 < e.data.results.length))
                            if (((this.propList.page.total = e.data.page.total),
                            e.data.results.length <= 12)) {
                                var t = e.data.results;
                                this.propList.list.push(t);
                            } else {
                                let t = [];
                                e.data.results.forEach( (i, s) => {
                                    t.push(i),
                                    (12 != t.length && s != e.data.results.length - 1) || (this.propList.list.push(t),
                                    (t = []));
                                }
                                );
                            }
                        else
                            this.$message.error("没有道具");
                        this.loading = 4;
                    } catch (t) {
                        this.$message.error(t);
                    }
                },
                async getGoldList() {
                    try {
                        let e = await Object(l.y)({
                            itemType: "gift",
                            type: "gold",
                            limit: 100,
                            page: 1,
                        });
                        if (((this.goldList.list = []),
                        e.data.results && 0 < e.data.results.length))
                            if (((this.goldList.page.total = e.data.page.total),
                            e.data.results.length <= 12)) {
                                var t = e.data.results;
                                this.goldList.list.push(t);
                            } else {
                                let t = [];
                                e.data.results.forEach( (i, s) => {
                                    t.push(i),
                                    (12 != t.length && s != e.data.results.length - 1) || (this.goldList.list.push(t),
                                    (t = []));
                                }
                                );
                            }
                        else
                            this.$message.error("没有金币礼物");
                        this.loading = 2;
                    } catch (t) {
                        this.$message.error(t);
                    }
                },
                async getDiamondList() {
                    try {
                        let e = await Object(l.y)({
                            itemType: "gift",
                            type: "diamond",
                            limit: 100,
                            page: 1,
                        });
                        if (((this.diamondList.list = []),
                        e.data.results && 0 < e.data.results.length))
                            if (((this.diamondList.page.total = e.data.page.total),
                            e.data.results.length <= 12)) {
                                var t = e.data.results;
                                this.diamondList.list.push(t);
                            } else {
                                let t = [];
                                e.data.results.forEach( (i, s) => {
                                    t.push(i),
                                    (12 != t.length && s != e.data.results.length - 1) || (this.diamondList.list.push(t),
                                    (t = []));
                                }
                                );
                            }
                        else
                            this.$message.error("没有钻石礼物");
                        this.loading = 1;
                    } catch (t) {
                        this.$message.error(t);
                    }
                },
                async getUserMoney() {
                    try {
                        var t = await Object(l.B)();
                        (this.money = t.data),
                        this.$store.commit("updateMoney", t.data);
                    } catch (t) {
                        this.$message.error(t);
                    }
                },
                async getPackList() {
                    try {
                        let t = 0;
                        1 < this.loading && ((t = this.loading),
                        (this.loading = 0));
                        const i = await Object(l.s)();
                        if (((this.myPack.list = []),
                        i.data && 0 < i.data.length))
                            if ((i.data.sort(function(t, e) {
                                return t.itemType - e.itemType;
                            }),
                            (this.myPack.page.total = i.data.length),
                            i.data.length <= 12)) {
                                var e = i.data;
                                this.myPack.list.push(e);
                            } else {
                                let t = [];
                                i.data.forEach( (e, s) => {
                                    t.push(e),
                                    (12 != t.length && s != i.data.results.length - 1) || (this.myPack.list.push(t),
                                    (t = []));
                                }
                                );
                            }
                        this.loading = t < 1 ? 1 : t;
                    } catch (t) {
                        this.$message.error(t);
                    }
                },
            },
            created() {
                this.getDiamondList(),
                this.getUserMoney();
            },
            mounted() {},
            beforeCreate() {},
            beforeMount() {},
            beforeUpdate() {},
            updated() {},
            beforeDestroy() {},
            destroyed() {},
            activated() {},
        }),
        i("9f1d"),
        i("e3eb"),
        (a = Object(o.a)(n, function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "giftpopup",
                on: {
                    click: function(t) {
                        return (t.stopPropagation(),
                        ( () => {}
                        ).apply(null, arguments));
                    },
                },
            }, [e("div", {}, [e("el-tabs", {
                attrs: {
                    type: "border-card"
                },
                on: {
                    "tab-click": t.handleClick
                },
                model: {
                    value: t.active,
                    callback: function(e) {
                        t.active = e;
                    },
                    expression: "active",
                },
            }, [e("el-tab-pane", {
                attrs: {
                    label: "钻石礼物",
                    name: "1"
                }
            }, [1 <= t.loading && 1 == t.active ? e("gift-list", {
                attrs: {
                    userId: t.isuserId,
                    dataList: t.diamondList,
                    type: 1,
                    money: t.money,
                    sourceType: t.sourceType,
                    sourceId: t.topic.user.id == t.isuserId ? t.sourceId : 0,
                },
                on: {
                    updateMoney: t.updateMoney,
                    close: t.hideBox,
                },
            }) : e("div", {
                staticClass: "gift-loading"
            }, [e("span", [t._v("加载中...")]), e("i", {
                staticClass: "el-icon-loading"
            }), ]), ], 1), e("el-tab-pane", {
                attrs: {
                    label: "金币礼物",
                    name: "2"
                }
            }, [2 <= t.loading && 2 == t.active ? e("gift-list", {
                attrs: {
                    userId: t.isuserId,
                    dataList: t.goldList,
                    type: 2,
                    money: t.money,
                    sourceType: t.sourceType,
                    sourceId: t.topic.user.id == t.isuserId ? t.sourceId : 0,
                },
                on: {
                    updateMoney: t.updateMoney,
                    close: t.hideBox,
                },
            }) : e("div", {
                staticClass: "gift-loading"
            }, [e("span", [t._v("加载中...")]), e("i", {
                staticClass: "el-icon-loading"
            }), ]), ], 1), ], 1), ], 1), ]);
        }, [], !1, null, "7f801188", null));
        e.a = a.exports;
    },
    c3a2: function(t, e, i) {},
    c4e8: function(t, e, i) {},
    cfb9: function(t, e, i) {
        "use strict";
        i("d3ae");
    },
    d0a0: function(t, e, i) {
        "use strict";
        i("e359");
    },
    d20b: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAAAXNSR0IArs4c6QAAAxlJREFUWEftmE1IVFEUx//3jdOoM+PYFKb5JrX8TKOkFhIZRLaQFoFprtKlEEGlFNQipEVBoRVE4FJbmSa0CBcZQUa4KDTKj9RS85kmNTlf6jTO3LhPnkSlvC/NF93dg/Pxe3/OOfdwCQx2iFresvvUNCgITwlQqCQGBTozef5QywkSVuIn2aoGzq8bq6CEa1SVlEYqu2tSmlT5qnFi6g4JQj+AjC3RftjN32WF8YU24PO8jdkOZfB8jhqVVSksqWvmwthm9UBuEArgY8CBUMQEolJlubmWFFSrrhRAq8qKgdWqKwFrVXkJeHedkMlx9BqlKAIQJ6soV9/ISwg6IhFy8XUNP8jSicAMlnC0CxQbV59BRQaCbzRCChi0CJx/c/wBpSiJNYWQEBNAFImoiKq/ywLlMD1nxWzYDELQ1n3OdVwE3lM/7mFlkGqbWTew0u8z6FF/PPv09lS7HBIw6wWk2936y6RDxGGfU4zSU+0i/4F1EPS3EKui8K5kG/anxSMn0YpNVrOY9GsghP6pAF6MzODNhF/1v+gKnBRnQVUhj9wk64pAvZMBNHQKmPQGFYPrBszUvHAkFTaLCd75BbT3fsHLMR+mfItQiXYL9qXYUZy7GXHRUfAHw7j+eFRUXcnRBZgpe/VYugjbNeLB3WfjmAv9eX7HmDmcOuhCQZpDhL70cFiR0roA1x7dIZYBg61/MgZxLq5w2DiqPpwiQrPyqH30XrbImoFZg10u3i6WwenmgWWV/ZWIKX2nPFssjyvtH2Q3ombgqgM8irKdaH41hdbuadlKMcPS/ASU701Ex4AbDc8FWb6agW+XZWGrw4LzbUMYdc/JSioZpTpjcKMkA588QZxpeSfLVzPwvco8RJs5nGx8i/llGm05EubH/Jkf85dzNAM3VeaB1aMWYDZRKtYK+FZpFpLjtZXExEwQZ1vXqCQM13SGG2usUQx1cTBgw13NDNpQy480Pw21Xv489KUFfmeSFc7YxQXePRtC3+Q6W+Dl3FRabTTfdFoBlPr/E8DGekgx3FOV4R4DWRMY6rlVadf+TfsfMXZQR+AeJEsAAAAASUVORK5CYII=";
    },
    d3ae: function(t, e, i) {},
    e2ca: function(t, e, i) {
        "use strict";
        i("6cea");
    },
    e359: function(t, e, i) {},
    e3eb: function(t, e, i) {
        "use strict";
        i("c4e8");
    },
    e795: function(t, e, i) {
        "use strict";
        i("a478");
    },
    e7ef: function(t, e, i) {
        "use strict";
        i("ad56");
    },
    e836: function(t, e, i) {
        "use strict";
        i.r(e),
        i("14d9"),
        i("3c65");
        var s = i("7e11")
          , a = i("9d4b")
          , o = (i("450d"),
        i("1221"))
          , n = {
            props: {
                only: {
                    type: Boolean,
                    default() {
                        return !1;
                    },
                },
            },
            mounted() {},
        }
          , r = (i("fa38"),
        i("2877"))
          , l = ((n = Object(r.a)(n, function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "_hj-tag d-inline c-pointer",
                class: t.only && "only",
            }, [t.only ? t._e() : e("i", {
                staticClass: "iconfont icon-qianbao"
            }), e("span", [t._v(t._s(t.$slots.default[0].text))]), t.only ? t._e() : e("span", [t._v("10")]), ]);
        }, [], !1, null, null, null).exports),
        i("b509"))
          , c = i("492a")
          , d = i("6b26")
          , h = i("bc3a")
          , p = i.n(h)
          , u = i("546c")
          , m = ((h = i("d044")),
        i.n(h))
          , g = i("dafe")
          , f = ((h = {
            props: {
                isvipLimit: {
                    type: Boolean,
                    default: !1
                },
                collectState: {
                    type: Number
                },
                articleInfo: {
                    type: Object
                },
            },
            data() {
                return {
                    _time: null,
                    left: "auto",
                    right: "auto",
                    visible: !1,
                    qrcodeObj: {},
                    desc: "",
                };
            },
            computed: {
                desc_f() {
                    var t;
                    return this.articleInfo && this.articleInfo.content ? (t = Object(g.m)(this.articleInfo.content)).length < 64 ? t : t.slice(0, 64) + "..." : "";
                },
            },
            mounted() {
                var t = document.body.clientWidth;
                (this.left = 1e3 + (t - 1e3) / 2 + 10 + "px"),
                (this.visible = !0);
                let e = this;
                (e._time = setTimeout( () => {
                    e.$nextTick( () => {
                        e._QRCode(),
                        document.getElementById("js-hj-unlock") && this.loginOut();
                    }
                    );
                }
                , 2200)),
                window.addEventListener("resize", function() {
                    var t;
                    1e3 < document.body.clientWidth ? ((t = (document.body.clientWidth - 1e3) / 2),
                    (e.left = 1e3 + t + 10 + "px")) : ((e.left = "auto"),
                    (e.right = "0"));
                });
            },
            destroyed() {
                this._time && clearTimeout(this._time);
            },
            methods: {
                async loginOut() {
                    try {
                        await Object(a.B)(),
                        d.a.remove(d.a.TOKEN),
                        d.a.remove(d.a.ID),
                        d.a.remove(d.a.USER),
                        d.a.set(d.a.NOTLOGIN, d.a.NOTLOGIN, 31536e3),
                        this.$store.commit("updateLogin", !1),
                        this.$router.replace("/login");
                    } catch (e) {}
                },
                _QRCode() {
                    var t = this.SpliceURL()["address"];
                    t = t + "/post/details?pid=" + window.location.href.split("topic_id=")[1];
                    try {
                        this.qrcodeObj = new m.a("qrcode",{
                            text: t,
                            width: 75,
                            height: 75,
                            colorDark: "#000000",
                            colorLight: "#fff",
                            correctLevel: m.a.CorrectLevel.H,
                        });
                    } catch (t) {}
                },
                navigateTo() {
                    this.$emit("showGift");
                },
            },
        }),
        (h = (i("ebb9"),
        Object(r.a)(h, function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "position-fixed",
                class: t.visible ? "visible" : "invisible",
                style: {
                    left: "" + t.left,
                    right: "" + t.right
                },
                attrs: {
                    id: "bbs_float_menu"
                },
            }, [t._m(0), e("div", {
                staticClass: "scroll-btn"
            }, [e("a", {
                staticClass: "s-btn-share",
                attrs: {
                    href: "javascript:void(0);",
                    title: "分享",
                },
            }, [e("i", {
                staticClass: "iconfont icon-iconfontzhizuobiaozhun20 iconShare",
            }), e("div", {
                staticClass: "share-wrap box"
            }, [e("div", {
                staticClass: "img-wap"
            }, [t.articleInfo.attachments && t.articleInfo.attachments[0] ? e("img", {
                directives: [{
                    name: "lazyloadimg",
                    rawName: "v-lazyloadimg",
                    value: t.articleInfo.attachments[0],
                    expression: "articleInfo.attachments[0]",
                }, ],
                staticClass: "d-block",
                attrs: {
                    width: "100%",
                    height: "100%"
                },
            }) : e("img", {
                staticClass: "d-block",
                attrs: {
                    width: "100%",
                    height: "100%",
                    src: "/desktop/images/common/share.png",
                },
            }), ]), e("div", {
                staticClass: "text-wap"
            }, [e("h4", [t._v(t._s(t.articleInfo.title || "")), ]), e("p", {
                domProps: {
                    innerHTML: t._s(t.desc_f)
                },
            }), ]), e("div", {
                staticClass: "wx-share-wrap d-flex"
            }, [e("div", {
                attrs: {
                    id: "qrcode"
                }
            }), e("div", {
                staticClass: "text"
            }, [e("h1", [t._v("【" + t._s(t.MainObj.name) + "社区】"), ]), e("h2", [t._v("可以聊任意话题的地方")]), ]), ]), ]), ]), t.isvipLimit ? t._e() : [e("a", {
                staticClass: "s-btn dashang-left-btn",
                attrs: {
                    href: "javascript:void(0);",
                    title: "打赏",
                },
                on: {
                    click: t.navigateTo
                },
            }, [e("i", {
                staticStyle: {
                    display: "none",
                    left: "0px",
                    top: "0px",
                },
            }), ]), e("a", {
                staticClass: "s-btn mark-btn cang",
                class: t.collectState ? "ok" : "no",
                attrs: {
                    href: "javascript:void(0);",
                    title: t.collectState ? "取消收藏" : "收藏",
                },
                on: {
                    click: function(e) {
                        t.collectState ? t.$emit("clickCollect", 2) : t.$emit("clickCollect");
                    },
                },
            }, [e("span", {
                staticClass: "box"
            }, [t._v(t._s(t.collectState ? "取消收藏" : "收藏本帖")), ]), ]), e("a", {
                staticClass: "s-btn goto-reply-btn",
                attrs: {
                    href: "#fabu_anchor",
                    title: "回复",
                },
                on: {
                    click: function(e) {
                        return t.$emit("clickToReply");
                    },
                },
            }, [e("span", {
                staticClass: "box"
            }, [t._v("搬砖回复"), ]), ]), ], t._m(1), t._m(2), ], 2), ]);
        }, [function() {
            var t = this._self._c;
            return t("div", {
                staticClass: "shang-move",
                staticStyle: {
                    display: "none",
                    right: "90px"
                },
                attrs: {
                    id: "shang-move"
                },
            }, [t("div", {
                staticClass: "shang-move-in",
                staticStyle: {
                    display: "none"
                },
            }, [t("p", [this._v("星星眼、礼物和你，"), t("br"), this._v("必须留下一个"), ]), ]), ]);
        }
        , function() {
            var t = this._self._c;
            return t("a", {
                staticClass: "s-btn scroll-top-btn",
                attrs: {
                    href: "javascript:scroll(0,0);"
                },
            }, [t("span", {
                staticClass: "box"
            }, [this._v("回到顶部")])]);
        }
        , function() {
            var t = this._self._c;
            return t("a", {
                staticClass: "s-btn scroll-top-btn",
                attrs: {
                    href: "javascript:scroll(0,0);"
                },
            }, [t("span", {
                staticClass: "box"
            }, [this._v("回到顶部")])]);
        }
        , ], !1, null, null, null).exports)),
        i("4328"))
          , v = i.n(f)
          , y = ((f = (i("06f1"),
        i("6ac9"))),
        (f = i.n(f)),
        i("560b"),
        i("dcdc"))
          , b = ((y = i.n(y)),
        i("1951"),
        i("eedf"))
          , _ = ((b = i.n(b)),
        i("a753"),
        i("8096"),
        i("14e1"),
        i("0fb7"),
        i("f529"))
          , w = i.n(_)
          , C = i("7f0b")
          , x = i("29ad")
          , k = ((_ = i("2f62")),
        i("21e4"))
          , L = {
            data() {
                return {
                    localFile: !1,
                    data: {},
                    layer_height: 0,
                    timer: null,
                    process: 0,
                    showHidden: !1,
                    loading: !1,
                    disabled: !1,
                    fileList: [],
                    atsListShow: !1,
                    getFriendList: [],
                    sendFriendList: [],
                    loadNum: 0,
                    isShow: !1,
                    needVerify: {},
                    isPassing: !1,
                    newData: {},
                };
            },
            methods: {
                ...Object(_.d)({
                    updateVideoData: "updateVideoData"
                }),
                selectEmoji(t) {
                    try {
                        var e = this.$refs.myQuillEditor.quill;
                        let i;
                        try {
                            i = e.selection.savedRange.index;
                        } catch (t) {
                            i = 0;
                        }
                        e.insertEmbed(i, "image", {
                            url: t.url,
                            id: t.id,
                            emoji: !0
                        }),
                        e.setSelection(i + 1);
                    } catch (t) {}
                },
                pickClick() {
                    d.a.isLogon() ? ((this.uploadCreated = !0),
                    this.$nextTick( () => {
                        this.$refs.myupload.dialogTableVisible = !0;
                    }
                    )) : this.$loginWindow({
                        reload: !0
                    });
                },
                async fileFollowImg(t) {
                    var e = t.target.files[0]
                      , i = t.target.files
                      , {bool: e, message: s} = Object(C.b)(e);
                    if (e) {
                        this.spinning = !0;
                        try {
                            for (var o in i) {
                                if (+i[o] == i[o])
                                    return;
                                var n = new FormData()
                                  , r = (n.append("entity_id", ""),
                                n.append("entity_type", "topic"),
                                n.append("image", i[o], i[o].name),
                                {
                                    headers: {
                                        "Content-Type": "multipart/form-data"
                                    }
                                });
                                const t = (await a.C.call(this, n, r, (t) => {
                                    this.loadNum = t;
                                }
                                ))["data"];
                                if (!t)
                                    return void (this.spinning = !1);
                                let e = new FileReader();
                                e.readAsDataURL(i[o]),
                                (e.onload = async (i) => {
                                    (t.url = e.result),
                                    await this.handleUpload(t, "img"),
                                    (this.spinning = !1);
                                }
                                );
                            }
                        } catch (t) {
                            this.spinning = !1;
                        } finally {
                            this.$refs.file.value && "" !== this.$refs.file.value && (this.$refs.file.value = "");
                        }
                    } else
                        this.$message.error(s),
                        this.$refs.file && this.$refs.file.value && "" !== this.$refs.file.value && (this.$refs.file.value = "");
                },
                async fileFollowVideo(t) {
                    var e = t.target.files[0]
                      , {bool: i, message: s} = Object(C.c)(e);
                    if (i) {
                        this.spinning = !0;
                        try {
                            var o = new FormData()
                              , n = (o.append("entity_id", ""),
                            o.append("entity_type", "topic"),
                            o.append("image", e, e.name),
                            {
                                headers: {
                                    "Content-Type": "multipart/form-data"
                                }
                            })
                              , r = (await a.C.call(this, o, n, (t) => {
                                this.loadNum = t;
                            }
                            ))["data"];
                            await this.handleUpload(r, "video"),
                            (this.spinning = !1);
                        } catch (t) {
                            this.spinning = !1;
                        } finally {
                            this.$refs.fileVideo && this.$refs.fileVideo.value && "" !== this.$refs.fileVideo.value && (this.$refs.fileVideo.value = "");
                        }
                    } else
                        this.$message.error(s),
                        this.$refs.fileVideo && this.$refs.fileVideo.value && "" !== this.$refs.fileVideo.value && (this.$refs.fileVideo.value = "");
                },
                async handleUpload(t, e) {
                    this.fileList.push(t),
                    (this.fileList[this.fileList.length - 1].id = t.id),
                    "images" === e ? this.appendChildImg(t) : "video" === e ? this.appendChildVideo(t) : "audio" === e ? this.appendAudio(t) : this.appendLink(t);
                },
                appendLink(t) {
                    var e = this.$refs.myQuillEditor.quill;
                    let i;
                    (i = (e.getSelection() && e.getSelection().index) || 0),
                    e.insertEmbed(i, "link", {
                        url: t.remoteUrl,
                        name: t.name,
                        id: t.id
                    }, "api"),
                    e.setSelection(i + 1);
                },
                appendAudio(t) {
                    var e = this.$refs.myQuillEditor.quill;
                    let i;
                    (i = (e.getSelection() && e.getSelection().index) || 0),
                    e.insertEmbed(i, "audio", {
                        url: t.remoteUrl,
                        id: t.id
                    }, "api"),
                    e.setSelection(i + 1);
                },
                appendChildImg(t) {
                    var e = this.$refs.myQuillEditor.quill;
                    let i;
                    try {
                        i = e.selection.savedRange.index;
                    } catch (t) {
                        i = 0;
                    }
                    e.insertEmbed(i, "image", {
                        url: t.url,
                        id: t.id
                    }),
                    e.setSelection(i + 1);
                },
                appendChildVideo(t) {
                    try {
                        var e = this.$refs.myQuillEditor.quill;
                        let i;
                        try {
                            i = e.selection.savedRange.index;
                        } catch (e) {
                            i = 0;
                        }
                        e.insertEmbed(i, "image", {
                            url: "/desktop/images/common/videos2x.png",
                            id: t.id,
                            video: t.remoteUrl,
                        }),
                        e.setSelection(i + 1),
                        this.$nextTick( () => {
                            var e = this;
                            document.querySelector('[data-id="' + t.id + '"]').onclick = function() {
                                e.updateVideoData({
                                    show: !0,
                                    url: t.remoteUrl,
                                    keyPath: t.keyPath || "",
                                    id: t.id,
                                    name: t.name || "视频_" + t.id,
                                });
                            }
                            ;
                        }
                        );
                    } catch (e) {}
                },
                auidoClick() {
                    document.querySelector("#audio").click();
                },
                async uploadAudio() {
                    var t = document.querySelector("#audio").files[0];
                    if (-1 == t.type.indexOf("audio/"))
                        this.$toast("请选择音频文件");
                    else {
                        var {bool: e, message: i} = Object(C.a)(t);
                        if (e) {
                            this.spinning = !0;
                            try {
                                var s = new FormData()
                                  , o = (s.append("entity_id", ""),
                                s.append("entity_type", "topic"),
                                s.append("image", t, t.name),
                                {
                                    headers: {
                                        "Content-Type": "multipart/form-data"
                                    }
                                })
                                  , n = (await a.C.call(this, s, o, (t) => {
                                    this.loadNum = t;
                                }
                                ))["data"]
                                  , r = this.$refs.myQuillEditor.quill;
                                let e;
                                (e = (r.getSelection() && r.getSelection().index) || 0),
                                r.insertEmbed(e, "audio", {
                                    url: n.remoteUrl,
                                    id: n.id
                                }, "api"),
                                r.setSelection(e + 1),
                                (this.spinning = !1);
                            } catch (e) {
                                this.spinning = !1;
                            } finally {
                                this.$refs.fileVideo && this.$refs.fileVideo.value && "" !== this.$refs.fileVideo.value && (this.$refs.fileVideo.value = "");
                            }
                        } else
                            this.$message.error(i),
                            this.$refs.file && this.$refs.file.value && "" !== this.$refs.file.value && (this.$refs.file.value = "");
                    }
                },
                videoClick() {
                    if (d.a.isLogon())
                        try {
                            document.querySelector(".uploadVideo").click();
                        } catch (e) {}
                    else
                        this.$loginWindow({
                            reload: !0
                        });
                },
                async showAts() {
                    if (d.a.get(d.a.NOTLOGIN) || !d.a.get(d.a.TOKEN))
                        this.$loginWindow({
                            reload: !0
                        });
                    else {
                        this.atsListShow = !this.atsListShow;
                        try {
                            var t = await a.k.call(this);
                            this.getFriendList = t.data || [];
                        } catch (t) {}
                    }
                },
                selectUser(t) {
                    if (d.a.isLogon()) {
                        try {
                            var i = this.$refs.myQuillEditor.quill
                              , s = (this.sendFriendList.push(t),
                            "@" == i.getText()[i.getText().length - 2] ? i.insertText(i.selection.savedRange.index, t.nickname, "", !0) : i.insertText(i.selection.savedRange.index, "@" + t.nickname, "", !0),
                            i.getSelection());
                            let e;
                            (e = s && s.index ? s.index : 0),
                            i.setSelection(e + 0, 1);
                        } catch (e) {}
                        this.atsListShow = !1;
                    } else
                        this.$loginWindow({
                            reload: !0
                        });
                },
                async sendCommentTo() {
                    if (d.a.isLogon()) {
                        if (!this.loading || !this.disabled) {
                            (this.loading = !this.loading),
                            (this.disabled = !this.disabled);
                            let r = this.content;
                            if (r && "<p></p>" != r.replace(/\s/g, "")) {
                                var t = [];
                                for (let e = 0; e < this.sendFriendList.length; e++)
                                    t.push(this.sendFriendList[e].userId),
                                    (r = r.replace(new RegExp("@" + this.sendFriendList[e].nickname), `<span data-uid="${this.sendFriendList[e].userId}"  class="at-box">@${this.sendFriendList[e].nickname} </span>`));
                                let l = [];
                                0 < this.fileList.length && this.fileList.forEach( (t, e) => {
                                    -1 != this.content.indexOf(t.url) && l.push(t.id);
                                }
                                );
                                var e = document.querySelectorAll(".ql-editor #showaudio")
                                  , i = ((e = (e && 0 < e.length && e.forEach(function(t) {
                                    var e = t.getAttribute("data-id");
                                    t = t.getAttribute("src");
                                    r = r.replace(`<audio src="${t}" controls="true" controlslist="nodownload" id="showaudio" data-id="${e}"></audio>`, `<audio src="haijiao.com" controls="true" controlslist="nodownload" id="showaudio" data-id="${e}"></audio>`);
                                }),
                                this.$route.query)["pid"]),
                                r.split('<img src="').forEach( (t) => {
                                    if (-1 != t.indexOf("data:image/")) {
                                        var e = t.split('"')[0]
                                          , i = Math.ceil(e.length / 10240);
                                        for (let t = 0; t < i; t++) {
                                            var s = e.slice(1024e3 * t, 1024e3 * (t + 1));
                                            s && (r = r.replace(s, ""));
                                        }
                                    }
                                }
                                ),
                                (r = Object(g.b)(r)),
                                Object(x.c)(r));
                                if (((this.needVerify = await this.getCaptcha()),
                                this.needVerify.data))
                                    (this.isShow = !0),
                                    (this.newData = {
                                        topic_id: Number(e),
                                        reply_id: 0,
                                        content: i,
                                        attachment_ids: l,
                                        ats: t,
                                        is_sale: this.checked,
                                        sale_price: this.checked ? 1 == this.topicDetails.sale.money_type ? +this.floorMoney : 100 * this.floorMoney : 0,
                                    });
                                else {
                                    var s = w()({
                                        type: "warning",
                                        message: "正在发送请稍后...",
                                        duration: 0,
                                    });
                                    try {
                                        var o = {
                                            topic_id: Number(e),
                                            reply_id: 0,
                                            content: i,
                                            attachment_ids: l,
                                            ats: t,
                                            is_sale: this.checked,
                                            sale_price: this.checked ? 1 == this.topicDetails.sale.money_type ? +this.floorMoney : 100 * this.floorMoney : 0,
                                        }
                                          , n = await a.x.call(this, o);
                                        s.close(),
                                        n.data && n.data.reply_id ? this.$message.success("回复成功，请稍后") : this.$message.success("回复成功，审核中！"),
                                        (this.checked = !1),
                                        (this.floorMoney = null),
                                        (this.sendFriendList = []),
                                        (this.getFriendList = []),
                                        (this.fileList = []),
                                        (this.atsListShow = !1),
                                        (this.content = "");
                                    } catch (e) {
                                        s.close(),
                                        this.$message.error(e);
                                    } finally {
                                        (this.loading = !this.loading),
                                        (this.disabled = !this.disabled);
                                    }
                                }
                            } else
                                (this.disabled = !1),
                                this.$message.error("请输入回复内容");
                        }
                    } else
                        this.$loginWindow({
                            reload: !0
                        });
                },
                async getCaptcha() {
                    return Object(k.e)("replyCaptcha");
                },
                async submit(t) {
                    if (t.isPassing) {
                        t = w()({
                            type: "warning",
                            message: "正在发送请稍后...",
                            duration: 0,
                        });
                        try {
                            var e = await a.x.call(this, this.newData);
                            t.close(),
                            e.data && e.data.reply_id ? this.$message.success("回复成功，请稍后") : this.$message.success("回复成功，审核中！"),
                            (this.checked = !1),
                            (this.floorMoney = null),
                            (this.sendFriendList = []),
                            (this.getFriendList = []),
                            (this.fileList = []),
                            (this.atsListShow = !1),
                            (this.content = "");
                        } catch (e) {
                            t.close(),
                            this.closeVerify(),
                            this.$message.error(e);
                        } finally {
                            this.closeVerify(),
                            (this.loading = !1),
                            (this.disabled = !1);
                        }
                    } else
                        (this.loading = !1),
                        (this.disabled = !1);
                },
                closeVerify() {
                    (this.isShow = !1),
                    (this.loading = !1),
                    (this.disabled = !1);
                },
            },
        }
          , I = i("9297")
          , T = i("953d")
          , S = i("decf");
        const $ = [];
        (L = {
            props: {
                topicDetails: {
                    type: Object,
                    default: null
                }
            },
            data() {
                return {
                    uploadCreated: !1,
                    spinning: !1,
                    floorMoney: null,
                    isClient: !1,
                    checked: !1,
                    content: "",
                    uid: 0,
                    showEmoji: !1,
                    editorOption: {
                        placeholder: "请输入内容",
                        modules: {
                            toolbar: {
                                container: $,
                                handlers: {
                                    image: function(t) {
                                        t && document.querySelector(".van-uploader__input").click();
                                    },
                                    video: function(t) {
                                        t && document.querySelector(".uploadVideo").click();
                                    },
                                },
                            },
                        },
                    },
                };
            },
            mixins: [L],
            mounted() {
                this.uid = d.a.get(d.a.ID);
            },
            methods: {
                addContent(t) {
                    t.forEach( (t) => {
                        -1 != this.content.indexOf("<video") && "video" === t.category ? this.$message.error("只能插入一个视频") : this.handleUpload(t, t.category);
                    }
                    );
                },
                navigatorTo() {
                    d.a.isLogon() ? this.$router.push("/post/drafts") : this.$loginWindow({
                        reload: !0
                    });
                },
                setSell() {
                    var t = this.$refs.myQuillEditor.quill.selection.savedRange.index;
                    t ? this.$refs.myQuillEditor.quill.insertText(t, "[sell] [/sell]") : (this.content += "[sell] [/sell]");
                },
                onEditorBlur(t) {},
                onEditorFocus(t) {},
                onEditorReady(t) {},
                onEditorChange({}) {},
                clear() {
                    (this.content = ""),
                    (this.amount = ""),
                    (this.reward_hours = ""),
                    (this.type = 0),
                    (this.money_type = 0);
                },
            },
            components: {
                quillEditor: T.quillEditor,
                ElButton: b.a,
                ElCheckbox: y.a,
                ElPopover: f.a,
                emoji: I.a,
                MyUpload: S.a,
                Verify: o.a,
            },
        }),
        i("625d"),
        i("0baa"),
        (T = Object(r.a)(L, function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: t.spinning,
                    expression: "spinning",
                }, ],
                staticClass: "position-relative",
                attrs: {
                    id: "editor",
                    "element-loading-text": 0 < t.loadNum ? "正在上传..." + t.loadNum + "%" : "资源上传中",
                    "element-loading-spinner": "el-icon-loading",
                    "element-loading-background": "rgba(0, 0, 0, 0.8)",
                },
            }, [e("section", {
                staticClass: "container position-relative details-edit"
            }, [e("quill-editor", {
                ref: "myQuillEditor",
                attrs: {
                    options: t.editorOption
                },
                on: {
                    blur: function(e) {
                        return t.onEditorBlur(e);
                    },
                    focus: function(e) {
                        return t.onEditorFocus(e);
                    },
                    ready: function(e) {
                        return t.onEditorReady(e);
                    },
                },
                model: {
                    value: t.content,
                    callback: function(e) {
                        t.content = e;
                    },
                    expression: "content",
                },
            }), e("div", {
                staticClass: "editorToolBar position-absolute"
            }, [e("span", {
                staticClass: "friend hjbox-linkcolor",
                attrs: {
                    title: "朋友"
                },
                on: {
                    click: t.showAts
                },
            }, [t._v("朋友")]), e("span", {
                staticClass: "photo hjbox-linkcolor",
                attrs: {
                    title: "图片"
                },
                on: {
                    click: t.pickClick
                },
            }, [t._v("插入")]), e("div", {
                staticClass: "emoji-btn"
            }, [e("el-popover", {
                attrs: {
                    placement: "right",
                    width: "360",
                    "popper-class": "emojipover",
                    trigger: "click",
                },
                model: {
                    value: t.showEmoji,
                    callback: function(e) {
                        t.showEmoji = e;
                    },
                    expression: "showEmoji",
                },
            }, [e("emoji", {
                attrs: {
                    height: "200px",
                    width: "340px"
                },
                on: {
                    close: function(e) {
                        t.showEmoji = !1;
                    },
                    selectEmoji: t.selectEmoji,
                },
            }), e("el-button", {
                staticClass: "hjbox-linkcolor",
                attrs: {
                    slot: "reference",
                    title: "表情"
                },
                slot: "reference",
            }, [t._v("表情")]), ], 1), ], 1), t.topicDetails && t.topicDetails.sale && t.uid == t.topicDetails.user.id ? e("div", {
                staticClass: "sell-floor"
            }, [e("el-checkbox", {
                model: {
                    value: t.checked,
                    callback: function(e) {
                        t.checked = e;
                    },
                    expression: "checked",
                },
            }, [t._v("出售该楼层")]), e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.checked,
                    expression: "checked",
                }, ],
                staticClass: "sell-money",
            }, [e("span", [t._v("售价:")]), e("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.floorMoney,
                    expression: "floorMoney",
                }, ],
                attrs: {
                    type: "number",
                    placeholder: "出售金额",
                },
                domProps: {
                    value: t.floorMoney
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.floorMoney = e.target.value);
                    },
                },
            }), e("span", [t._v(t._s(t.topicDetails && 1 == t.topicDetails.sale.money_type ? "金币" : "钻石")), ]), ]), e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.checked,
                    expression: "checked",
                }, ],
                staticClass: "sell-money set-sell",
                on: {
                    click: function(e) {
                        return t.setSell();
                    },
                },
            }, [t._v("添加出售内容")]), ], 1) : t._e(), e("span", {
                staticClass: "draft hjbox-linkcolor",
                attrs: {
                    title: "草稿箱"
                },
                on: {
                    click: t.navigatorTo
                },
            }, [t._v("草稿箱")]), ]), e("input", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !1,
                    expression: "false",
                }, ],
                ref: "file",
                staticClass: "van-uploader__input",
                attrs: {
                    type: "file",
                    multiple: "multiple",
                    accept: "image/png,image/jpeg,image/gif,image/jpg",
                },
                on: {
                    change: function(e) {
                        return t.fileFollowImg(e);
                    },
                },
            }), e("input", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !1,
                    expression: "false",
                }, ],
                ref: "fileVideo",
                staticClass: "uploadVideo",
                attrs: {
                    type: "file",
                    name: "video",
                    id: "video",
                    accept: "video/*",
                },
                on: {
                    change: function(e) {
                        return t.fileFollowVideo(e);
                    },
                },
            }), e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !1,
                    expression: "false",
                }, ],
                staticClass: "audiobox",
            }, [e("input", {
                staticClass: "uploadAudio",
                attrs: {
                    type: "file",
                    name: "audio",
                    id: "audio",
                    accept: "audio/*",
                },
                on: {
                    change: t.uploadAudio
                },
            }), ]), e("div", {
                staticClass: "d-flex justify-content-end",
                staticStyle: {
                    "margin-top": "20px"
                },
            }, [e("button", {
                staticClass: "common-submitBtn",
                attrs: {
                    title: "回复"
                },
                on: {
                    click: t.sendCommentTo
                },
            }, [t._v("回复")]), ]), ], 1), e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.atsListShow,
                    expression: "atsListShow",
                }, ],
                staticClass: "el-popover el-popper friend_box",
                staticStyle: {
                    width: "200px",
                    "transform-origin": "center top",
                    "z-index": "2021",
                    position: "absolute",
                    top: "30px",
                    left: "16px",
                    padding: "0 !important",
                },
                attrs: {
                    role: "tooltip",
                    "aria-hidden": "false",
                    tabindex: "0",
                    "x-placement": "bottom",
                },
            }, [t._m(0), e("div", {
                staticClass: "auto-friend-list"
            }, [e("ul", [t._l(t.getFriendList || [], function(i, s) {
                return e("li", {
                    key: s,
                    staticClass: "on c-pointer",
                    on: {
                        click: function(e) {
                            return t.selectUser(i);
                        },
                    },
                }, [e("a", {
                    attrs: {
                        href: "javascript:void(0);"
                    }
                }, [t._v(t._s(i.nickname || ""))]), ]);
            }), 0 === t.getFriendList.length ? e("div", {
                staticClass: "noData"
            }, [t._v("您还未添加好友"), ]) : t._e(), ], 2), ]), e("p", {
                staticClass: "auto-direction"
            }, [t._v("@用户名  就可以通知他"), ]), e("div", {
                staticClass: "popper__arrow",
                staticStyle: {
                    left: "20px"
                },
            }), ]), t.uploadCreated ? e("my-upload", {
                ref: "myupload",
                on: {
                    addContent: t.addContent
                },
            }) : t._e(), t.isShow ? e("verify", {
                attrs: {
                    closeVerify: t.closeVerify,
                    isShow: t.isShow
                },
                on: {
                    submit: t.submit
                },
            }) : t._e(), ], 1);
        }, [function() {
            var t = this._self._c;
            return t("div", {
                staticClass: "auto-friend-search"
            }, [t("input", {
                staticClass: "auto-search",
                attrs: {
                    type: "text",
                    value: "",
                    bindcursor: "true"
                },
            }), t("input", {
                staticClass: "auto-button",
                attrs: {
                    type: "button"
                },
            }), ]);
        }
        , ], !1, null, "756b04a8", null).exports),
        (b = i("6c74"));
        var j = i("4733");
        y = i("7d1a");
        const O = {
            value: 2,
            label: "钻石礼物榜"
        }
          , A = {
            value: 1,
            label: "金币礼物榜"
        };
        (f = {
            components: {
                dialogHeader: y.a
            },
            data() {
                return {
                    navigation: [O, A],
                    choosenavigation: O.value,
                    choose: null,
                    show: !1,
                };
            },
            props: {
                defaultchoose: {
                    type: Number,
                    default: 1
                },
                newchoose: {
                    type: Number,
                    default: O.value
                },
                diamondList: {
                    type: Array,
                    default: () => []
                },
                goldList: {
                    type: Array,
                    default: () => []
                },
            },
            computed: {
                ...Object(_.c)({
                    userInfo: "userInfo"
                }),
                showMef: function() {
                    let t = [];
                    var e, i = this.choosenavigation;
                    i == O.value ? (t = this.diamondList) : i == A.value && (t = this.goldList);
                    let s = null;
                    for (e of t)
                        e.id == this.$store.state.userInfo.id && (s = e);
                    return s;
                },
                arraylist() {
                    var t = this.choosenavigation;
                    let e = [];
                    return (t == O.value ? (e = this.diamondList) : t == A.value && (e = this.goldList),
                    e.length ? e.filter(function(t) {
                        return t.rank;
                    }) : e);
                },
                mylocation() {
                    var t = this.userInfo;
                    return t && t.hasOwnProperty("id") ? t : {};
                },
            },
            methods: {
                ...Object(_.b)(["asyncBackpackList"]),
                newscore(t=0) {
                    return t ? Object(j.a)(t, 100) : 0;
                },
                userdetails(t) {
                    this.$store.state.isLogin ? this.$router.push({
                        name: "homepage_index",
                        params: {
                            uid: t.id
                        },
                    }) : this.$confirm("您未登录，是否前往登录？", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning",
                    }).then( () => {
                        this.$router.push("/login");
                    }
                    ).catch( () => {}
                    );
                },
                onshow() {
                    this.diamondList.length || (this.navigation = [A]),
                    (this.choosenavigation = this.newchoose),
                    (this.show = !0);
                },
            },
        }),
        i("a7ac"),
        (S = Object(r.a)(f, function() {
            var t = this
              , e = t._self._c;
            return t.show ? e("el-dialog", {
                attrs: {
                    top: "10vh",
                    "show-close": !1,
                    visible: t.show,
                    "modal-append-to-body": !1,
                    width: "550px",
                    "custom-class": "hj-dialog-custom",
                },
                on: {
                    "update:visible": function(e) {
                        t.show = e;
                    },
                },
            }, [e("template", {
                slot: "title"
            }, [e("div", {
                staticClass: "rankingd-giftListHeader"
            }, [t._l(t.navigation, function(i) {
                return e("div", {
                    key: i.value,
                    staticClass: "rankingd-textBtn",
                    class: {
                        "rankingd-choose": i.value == t.choosenavigation,
                    },
                    on: {
                        click: function(e) {
                            t.choosenavigation = i.value;
                        },
                    },
                }, [t._v(" " + t._s(i.label) + " ")]);
            }), e("div", {
                staticClass: "rankingd-iconclose",
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                        (t.show = !1);
                    },
                },
            }, [e("i", {
                staticClass: "el-icon-close"
            })]), ], 2), ]), e("div", {
                staticClass: "rankingd-rowContainer"
            }, [t.arraylist.length ? [t.showMef && t.showMef.id ? e("div", {
                staticClass: "rankingd-layout rankingd-mylocation",
            }, [e("div", {
                staticClass: "rankingd-leftContainer",
            }, [e("div", [t._v("我的排名：")]), t.showMef.rank ? [1 == t.showMef.rank || 2 == t.showMef.rank || 3 == t.showMef.rank ? [e("div", {
                staticClass: "rankingd-ranking firstthree",
            }, [e("img", {
                attrs: {
                    src: "/desktop/images/common/ranking1.png",
                    alt: "",
                },
            }), ]), ] : [e("div", {
                staticClass: "ranking haslist",
            }, [t._v(t._s(t.showMef.rank)), ]), ], ] : [e("div", {
                staticClass: "ranking notlist",
            }, [t._v("未上榜")]), ], ], 2), e("div", {
                staticClass: "rankingd-middleContainer",
                on: {
                    click: function(e) {
                        return t.userdetails(t.showMef);
                    },
                },
            }, [e("user-avatar", {
                attrs: {
                    avatabg: t.showMef.title ? t.showMef.title.icon : "",
                    size: "30px",
                    id: "",
                    src: t.showMef.avatar,
                    showVip: !0,
                    vipLevel: t.showMef.vip,
                    certified: t.showMef.certified,
                    origin: t.showMef.certVideo,
                    expert: t.showMef.certProfessor,
                    showFamous: t.showMef.famous,
                },
            }), e("div", {
                staticClass: "rankingd-nickname",
            }, [t._v(t._s(t.showMef.nickname))]), ], 1), e("div", {
                staticClass: "rankingd-rightContainer",
            }, [e("div", {
                staticClass: "rankingd-myicon",
                class: {
                    gold: 1 == t.choosenavigation,
                    diamond: 2 == t.choosenavigation,
                },
            }, [2 == t.choosenavigation ? [t._v(t._s(t._f("showNumber")(t.showMef.score / 100))), ] : [t._v(t._s(t._f("showNumber")(t.showMef.score))), ], ], 2), ]), ]) : t._e(), e("div", {
                staticClass: "rankingd-layout rankingd-tableheader",
            }, [e("div", {
                staticClass: "rankingd-leftContainer"
            }, [t._v("排名")]), e("div", {
                staticClass: "rankingd-middleContainer"
            }, [t._v("姓名")]), e("div", {
                staticClass: "rankingd-rightContainer"
            }, [t._v("打赏数量")]), ]), t._l(t.arraylist, function(i, s) {
                return e("div", {
                    key: i.id,
                    staticClass: "rankingd-layout rankingd-tablelist",
                }, [e("div", {
                    staticClass: "rankingd-leftContainer"
                }, [0 == s ? [e("img", {
                    staticClass: "rankingd-place",
                    attrs: {
                        src: "/desktop/images/common/ranking1.png",
                        alt: "第一名",
                    },
                }), ] : 1 == s ? [e("img", {
                    staticClass: "rankingd-place",
                    attrs: {
                        src: "/desktop/images/common/ranking2.png",
                        alt: "第二名",
                    },
                }), ] : 2 == s ? [e("img", {
                    staticClass: "rankingd-place",
                    attrs: {
                        src: "/desktop/images/common/ranking3.png",
                        alt: "第三名",
                    },
                }), ] : [e("div", {
                    staticClass: "rankingd-xuhao",
                }, [t._v(t._s(s + 1))]), ], ], 2), e("div", {
                    staticClass: "rankingd-middleContainer",
                    on: {
                        click: function(e) {
                            return t.userdetails(i);
                        },
                    },
                }, [e("user-avatar", {
                    attrs: {
                        avatarbg: i.title ? i.title.icon : "",
                        src: i.avatar,
                        showVip: !0,
                        vipLevel: i.vip,
                        certified: i.certified,
                        origin: i.certVideo,
                        expert: i.certProfessor,
                        showFamous: i.famous,
                        size: "30px",
                    },
                }), e("div", {
                    staticClass: "rankingd-nickname"
                }, [t._v(t._s(i.nickname))]), ], 1), e("div", {
                    staticClass: "rankingd-rightContainer",
                }, [e("div", {
                    staticClass: "rankingd-myicon diamond",
                    class: {
                        gold: 1 == t.choosenavigation,
                        diamond: 2 == t.choosenavigation,
                    },
                }, [2 == t.choosenavigation ? [t._v(t._s(t._f("showNumber")(t.newscore(i.score)))), ] : [t._v(t._s(t._f("showNumber")(i.score))), ], ], 2), ]), ]);
            }), ] : [e("div", {
                staticClass: "rankingd-emptylist"
            }, [t._v("暂无可用的榜单"), ]), ], ], 2), ], 2) : t._e();
        }, [], !1, null, "41d7dc8b", null).exports);
        const N = [{
            value: 2,
            label: "钻石礼物榜"
        }, {
            value: 1,
            label: "金币礼物榜"
        }, ];
        (L = {
            components: {
                rankingListDialog: S
            },
            data() {
                return {
                    isinit: 0,
                    navigation: N,
                    choosenavigation: N[0].value,
                    diamondtotal: 0,
                    diamondlist: [],
                    goldtotal: 0,
                    goldlist: [],
                    show: !1,
                };
            },
            props: {
                topicId: {
                    type: Number,
                    default: 460
                }
            },
            computed: {
                total() {
                    var t = this.choosenavigation;
                    return t == N[0].value ? this.diamondtotal : t == N[1].value ? this.goldtotal : 0;
                },
                arraylist() {
                    var t = this.choosenavigation;
                    let e = [];
                    return (t == N[0].value ? (e = this.diamondlist) : t == N[1].value && (e = this.goldlist),
                    (e = e && e.length ? e.filter(function(t) {
                        return t.rank;
                    }) : e) || []);
                },
            },
            created() {
                this.$nextTick( () => {
                    this.oninit();
                }
                );
            },
            methods: {
                userdetails(t) {
                    this.$store.state.isLogin ? this.$router.push({
                        name: "homepage_index",
                        params: {
                            uid: t.id
                        },
                    }) : this.$confirm("您未登录，是否前往登录？", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning",
                    }).then( () => {
                        this.$router.push("/login");
                    }
                    ).catch( () => {}
                    );
                },
                async oninit() {
                    return
                    try {
                        var t = this.topicId
                          , e = await Object(a.l)({
                            moneyType: 1,
                            sourceId: t,
                            sourceType: 1,
                        })
                          , i = await Object(a.l)({
                            moneyType: 2,
                            sourceId: t,
                            sourceType: 1,
                        });
                        (e.data.total || i.data.total) && (i.data.total ? ((this.diamondtotal = i.data.total),
                        (this.diamondlist = i.data.list)) : ((this.navigation = [N[1]]),
                        (this.choosenavigation = N[1].value)),
                        e.data.total && ((this.goldtotal = e.data.total),
                        (this.goldlist = e.data.list)),
                        (this.isinit = 1));
                    } catch (t) {}
                },
            },
        }),
        i("eb38"),
        (y = Object(r.a)(L, function() {
            var t = this
              , e = t._self._c;
            return t.isinit ? e("div", {
                staticClass: "hj-rankinglist"
            }, [e("div", {
                staticClass: "hj-title"
            }, [t._v("打赏排行榜")]), e("div", {
                staticClass: "navigation"
            }, t._l(t.navigation, function(i) {
                return e("div", {
                    key: i.value,
                    staticClass: "textBtn",
                    class: {
                        choose: i.value == t.choosenavigation
                    },
                    on: {
                        click: function(e) {
                            t.choosenavigation = i.value;
                        },
                    },
                }, [t._v(" " + t._s(i.label) + " ")]);
            }), 0), e("div", {
                staticClass: "hj-bodyContainer"
            }, [t.arraylist.length ? t._l(t.arraylist, function(i, s) {
                return e("div", {
                    key: i.id,
                    staticClass: "layout",
                    on: {
                        click: function(e) {
                            return t.userdetails(i);
                        },
                    },
                }, [e("user-avatar", {
                    attrs: {
                        src: i.avatar,
                        size: "40px",
                        avatarbg: i.title ? i.title.icon : "",
                        showVip: !0,
                        vipLevel: i.vip,
                        certified: i.certified,
                        origin: i.certVideo,
                        expert: i.certProfessor,
                        showFamous: i.famous,
                    },
                }), e("div", {
                    staticClass: "nickname",
                    class: ["icon" + (s + 1)],
                }, [t._v(t._s(i.nickname))]), ], 1);
            }) : [e("div", {
                staticClass: "layout",
                on: {
                    click: function(e) {
                        return t.$emit("exceptional");
                    },
                },
            }, [e("div", {
                staticClass: "emptyuser"
            }), e("div", {
                staticClass: "nickname emptys"
            }, [t._v("打赏礼物"), ]), ]), ], ], 2), e("div", {
                staticClass: "statisticalContainer"
            }, [e("div", {
                staticClass: "statistical",
                on: {
                    click: function(e) {
                        t.$refs.rankingdialog && t.$refs.rankingdialog.onshow();
                    },
                },
            }, [t._v(" 共"), e("span", [t._v(t._s(t.total))]), t._v("人打赏礼物"), e("i", {
                staticClass: "el-icon-arrow-right"
            }), ]), ]), e("ranking-list-dialog", {
                ref: "rankingdialog",
                attrs: {
                    newchoose: t.choosenavigation,
                    diamondList: t.diamondlist,
                    goldList: t.goldlist,
                },
            }), ], 1) : t._e();
        }, [], !1, null, "2b7f3093", null).exports);
        var E = i("81ee")
          , P = ((_ = (a.c,
        a.a,
        {
            async mounted() {},
            methods: {
                async handleLink() {
                    var t = this.$route.query.pid;
                    if (t && "" !== t)
                        if (d.a.isLogon())
                            try {
                                var e = new FormData()
                                  , i = (e.append("status", "" + !this.likeState),
                                {
                                    headers: {
                                        "Content-Type": "multipart/form-data",
                                    },
                                });
                                await a.d.call(this, t, e, i),
                                (this.likeState = !this.likeState),
                                this.likeState ? this.$message.success("点赞成功！") : this.$message.success("取消点赞成功！"),
                                this.likeState ? this.articleInfo.likeCount++ : 1 <= this.articleInfo.likeCount ? this.articleInfo.likeCount-- : (this.articleInfo.likeCount = 0);
                            } catch (t) {}
                        else
                            this.$loginWindow({
                                reload: !0
                            });
                },
                async buySale(t) {
                    var e = t.articleInfo
                      , i = t.type
                      , s = t.floor;
                    const o = this;
                    if (0 == i && 1 == e.type && 0 === e.sale.is_buy)
                        try {
                            var n = new FormData()
                              , r = (n.append("topic_id", "" + e.topicId),
                            n.append("reply_id", 0),
                            n.append("discount_id", t.discount),
                            {
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                                },
                            });
                            r = null
                            await a.y.call(o, {
                                topic_id: e.topicId
                            }, r),
                            this.$message.success("购买成功！"),
                            (e.sale.is_buy = !0),
                            o.$axios.get(u.a + "/topic/" + e.topicId).then( (t) => {
                                (o.articleInfo.content = t.data.content),
                                o.$nextTick( () => {
                                    setTimeout( () => {
                                        o._processVideo();
                                    }
                                    , 300);
                                }
                                ),
                                (o.updateTopic = !1),
                                setTimeout( () => {
                                    o.updateTopic = !0;
                                }
                                , 100),
                                setTimeout( () => {
                                    window.location.reload();
                                }
                                , 100);
                            }
                            ).catch( (t) => {}
                            );
                        } catch (t) {
                            this.$message.error(t);
                        }
                    else if (1 == i && 1 == e.type)
                        try {
                            var l = new FormData()
                              , c = (l.append("topic_id", e.topicId),
                            l.append("reply_id", s.reply_id),
                            l.append("discount_id", t.discount),
                            {
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                                },
                            });
                            await a.y.call(o, l, c),
                            this.$message.success("购买成功！"),
                            o.$axios.get(u.a + `/comment/reply_list?page=1&topic_id=${e.topicId}&search_type=0`).then( (t) => {
                                var e;
                                (e = t).data && e.data.results && Array.isArray(e.data.results) && (e.data.results = e.data.results.map( (t) => ((t.comment_list = {
                                    lastPage: !1,
                                    page: 0,
                                    list: [],
                                }),
                                (t.textareaObj = {
                                    visibleTextarea: !1,
                                    quote: {},
                                    textareaContent: "",
                                    placeholder: "",
                                }),
                                t))),
                                o.$set(o, "commentList", t.data),
                                (o.updateContent = !1),
                                setTimeout( () => {
                                    (o.updateContent = !0),
                                    o.$nextTick( () => {
                                        setTimeout( () => {
                                            o._processVideo();
                                        }
                                        , 300);
                                    }
                                    );
                                }
                                , 100);
                            }
                            ).catch( (t) => {}
                            );
                        } catch (t) {
                            this.$message.error(t);
                        }
                },
                async handleBuy(t, e, i) {
                    d.a.isLogon() ? ((this.sellMoney = i ? i.price : t.sale.amount),
                    (this.isShowDisCard = !0),
                    this.$nextTick( () => {
                        (this.$refs.dicountCard.dialogVisible = !0),
                        (this.$refs.dicountCard.articleInfo = t),
                        (this.$refs.dicountCard.type = e),
                        (this.$refs.dicountCard.floor = i);
                    }
                    )) : this.$loginWindow({
                        reload: !0
                    });
                },
                async handleSubscribe(t) {
                    if (t.is_subscribe)
                        return !1;
                    var e;
                    d.a.isLogon() ? ((e = d.a.get(d.a.ID)),
                    t.user.id == e ? this.$message.error("无法订阅自己发布的贴子") : 3 == t.type && t.topicId && Object(E.d)("subscribe").then( (e) => {
                        var {freeNum: e, goodsNum: i} = e.data;
                        0 == e && 0 == i ? this._onsubscribe(!1) : this._onsubscribe(!0, {
                            topic_id: t.topicId,
                        });
                    }
                    ).catch( () => {}
                    )) : this.$loginWindow({
                        reload: !0
                    });
                },
                _onsubscribe(t=!1, e={}) {
                    const i = this;
                    t ? this.$hjConfirm("将消耗一次订阅次数，是否确定？", {
                        async onOk() {
                            try {
                                await a.z.call(i, e),
                                (i.articleInfo.is_subscribe = !0),
                                i.$message.success("订阅成功!");
                            } catch (t) {
                                i.$message.error(t);
                            }
                        },
                    }) : this.$hjConfirm("你的订阅卡数量不足，请前往商城购买", {
                        async onOk() {
                            try {
                                window.open(window.location.origin + "/mall/diamond");
                            } catch (t) {
                                this.$message.error(t);
                            }
                        },
                    });
                },
            },
        })),
        (f = {
            data() {
                return {
                    myVideo: null,
                    timer: null
                };
            },
            mounted() {},
            destroyed() {
                this.timer && clearTimeout(this.timer);
            },
            methods: {
                _processVideo() {
                    try {
                        var t, i, s = document.querySelectorAll("video");
                        for (let e = 0; e < s.length; e++)
                            "" === s[e].id && (-1 != s[e].getAttribute("src").indexOf(".mp4") ? this.$message.error("视频格式错误请联系管理员") : (((t = s[e].getAttribute("class")) && -1 !== t.indexOf("video-js vjs-default-skin vjs-big-play-centered")) || (s[e].className += " video-js vjs-default-skin vjs-big-play-centered"),
                            (s[e].id = "myVideo_" + e + 1),
                            document.querySelector("#" + s[e].id).setAttribute("style", "width:90%;margin:auto;height:500px"),
                            (i = videojs(s[e].id, {
                                bigPlayButton: !0,
                                textTrackDisplay: !1,
                                posterImage: !1,
                                errorDisplay: !1,
                                hls: {
                                    withCredentials: !0
                                },
                                controlBar: {
                                    fullscreenToggle: !0
                                },
                            })).src({
                                src: s[e].src,
                                type: "application/x-mpegURL",
                            }),
                            i.on("loadeddata", function(t) {
                                t.target.classList.remove("vjs-controls-disabled");
                            })));
                    } catch (e) {}
                },
            },
        }),
        (S = i("894b")),
        i("d1eb"));
        async function D(t) {
            return {
                commentLastPage: 1,
                data: {
                    "page": {
                        "page": 1,
                        "limit": 20,
                        "total": 0
                    },
                    "results": null
                }
            };
            let e = !1
              , i = {
                page: {
                    limit: 20,
                    page: 0,
                    total: 0
                },
                results: []
            };
            try {
                var s = await Object(a.j)(t);
                (o = s).data && o.data.results && Array.isArray(o.data.results) && (o.data.results = o.data.results.map( (t) => ((t.comment_list = {
                    lastPage: !1,
                    page: 0,
                    list: []
                }),
                (t.textareaObj = {
                    visibleTextarea: !1,
                    quote: {},
                    textareaContent: "",
                    placeholder: "",
                }),
                t))),
                s.data.results || (e = !0),
                s.data.results && 0 < s.data.results.length && s.data.results.forEach( (t) => {
                    t.content = Object(x.a)(t.content);
                }
                ),
                (i = s.data);
            } catch (t) {
                e = !0;
            }
            var o;
            return {
                commentLastPage: e,
                data: i
            };
        }
        var V = i("1f24")
          , M = ((L = {
            name: "discuntCard",
            components: {},
            props: {
                sellMoney: {
                    type: Number,
                    default: 0
                },
                moneyType: {
                    type: Number,
                    default: 1
                },
            },
            data() {
                return {
                    list: [],
                    radio: 0,
                    articleInfo: null,
                    type: 0,
                    floor: null,
                    dialogVisible: !1,
                };
            },
            filters: {
                showMoney: function(t) {
                    return 1 == t ? "金币" : 2 == t ? "钻石" : "未知";
                },
            },
            computed: {
                numMoney() {
                    return 301 == this.radio ? 1 == this.moneyType ? Math.ceil(0.9 * this.sellMoney) : (Math.ceil(0.9 * this.sellMoney) / 100).toFixed(2) : 302 == this.radio ? 1 == this.moneyType ? Math.ceil(0.8 * this.sellMoney) : (Math.ceil(0.8 * this.sellMoney) / 100).toFixed(2) : 303 == this.radio ? 1 == this.moneyType ? Math.ceil(0.7 * this.sellMoney) : (Math.ceil(0.7 * this.sellMoney) / 100).toFixed(2) : 1 == this.moneyType ? Math.ceil(this.sellMoney) : (Math.ceil(this.sellMoney) / 100).toFixed(2);
                },
            },
            watch: {},
            methods: {
                close() {
                    (this.dialogVisible = !1),
                    this.$emit("close");
                },
                okbtn() {
                    (this.dialogVisible = !1),
                    this.$emit("puySale", {
                        articleInfo: this.articleInfo,
                        type: this.type,
                        floor: this.floor,
                        discount: this.radio,
                        userMoney: this.numMoney,
                    });
                },
                select(t) {
                    0 < t.num && (this.radio = t.id);
                },
                handleClose() {},
                getList() {
                    return
                    Object(V.s)().then( (t) => {
                        (this.list[0].icon = t.data["301_img"]),
                        (this.list[1].icon = t.data["302_img"]),
                        (this.list[2].icon = t.data["303_img"]),
                        (this.list[0].num = t.data[301]),
                        (this.list[1].num = t.data[302]),
                        (this.list[2].num = t.data[303]),
                        0 != t.data[301] ? (this.radio = 301) : 0 != t.data[302] ? (this.radio = 302) : 0 != t.data[303] ? (this.radio = 303) : (this.radio = 0);
                    }
                    ).catch();
                },
            },
            created() {
                this.getList();
            },
            mounted() {},
            beforeCreate() {},
            beforeMount() {},
            beforeUpdate() {},
            updated() {},
            beforeDestroy() {},
            destroyed() {},
            activated() {},
        }),
        (L = (i("2848"),
        Object(r.a)(L, function() {
            var t = this
              , e = t._self._c;
            return e("el-dialog", {
                attrs: {
                    title: "购买提示",
                    visible: t.dialogVisible,
                    "custom-class": "discount-card",
                    "before-close": t.handleClose,
                },
                on: {
                    "update:visible": function(e) {
                        t.dialogVisible = e;
                    },
                },
            }, [e("div", {
                staticClass: "card-body"
            }, [e("div", {
                staticClass: "nowmoney"
            }, [t._v("确认支付" + t._s(t.numMoney) + t._s(t._f("showMoney")(t.moneyType))), ]), e("div", {
                staticClass: "oldmoney"
            }, [t._v("原价" + t._s(t.MoneyShow(t.sellMoney, t.moneyType)) + t._s(t._f("showMoney")(t.moneyType))), ]), e("ul", {
                staticClass: "list"
            }, [e("li", {
                class: {
                    active: 0 == t.radio
                },
                on: {
                    click: function(e) {
                        t.radio = 0;
                    },
                },
            }, [e("span", [t._v("不使用打折卡")]), e("el-radio", {
                attrs: {
                    label: 0
                },
                on: {
                    click: function(t) {
                        t.stopPropagation();
                    },
                },
                model: {
                    value: t.radio,
                    callback: function(e) {
                        t.radio = e;
                    },
                    expression: "radio",
                },
            }), ], 1), t._l(t.list, function(i, s) {
                return e("li", {
                    key: s,
                    class: {
                        disboled: 0 == i.num,
                        active: i.id == t.radio,
                    },
                    on: {
                        click: function(e) {
                            return t.select(i);
                        },
                    },
                }, [e("div", [e("img", {
                    attrs: {
                        src: i.icon,
                        alt: ""
                    }
                }), e("div", [t._v(t._s(i.name) + "卡")]), ]), e("span", [e("span", [t._v(t._s(i.name) + "优惠购买")]), e("span", {
                    staticStyle: {
                        "font-size": "12px",
                        color: "#999",
                        "margin-left": "10px",
                    },
                }, [t._v("剩余" + t._s(i.num) + "张")]), ]), e("el-radio", {
                    attrs: {
                        label: i.id
                    },
                    on: {
                        click: function(t) {
                            t.stopPropagation();
                        },
                    },
                    model: {
                        value: t.radio,
                        callback: function(e) {
                            t.radio = e;
                        },
                        expression: "radio",
                    },
                }), ], 1);
            }), ], 2), ]), e("span", {
                staticClass: "dialog-footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer",
            }, [e("el-button", {
                on: {
                    click: t.close
                }
            }, [t._v("取 消"), ]), e("el-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: t.okbtn
                },
            }, [t._v("确 定")]), ], 1), ]);
        }, [], !1, null, null, null).exports)),
        i("ba8a"))
          , q = i("c10a")
          , B = {
            props: {
                vipLimit: {
                    type: Number,
                    default: 0
                }
            },
            computed: {
                showPrompt() {
                    var t = this.vipLimit
                      , e = this.$store.state;
                    return e.isLogin ? !(t <= e.userInfo.vip || 1 == e.userInfo.role) : 0 != t;
                },
            },
            methods: {
                onOpen() {
                    this.$store.state.isLogin ? this.$router.push({
                        name: "member"
                    }) : this.$loginWindow();
                },
            },
        }
          , F = ((B = (i("11cb"),
        Object(r.a)(B, function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showPrompt,
                    expression: "showPrompt",
                }, ],
                staticClass: "pagecontainer",
            }, [e("div", {
                staticClass: "vipbtn",
                on: {
                    click: t.onOpen
                }
            }, [t._v("升级VIP" + t._s(t.vipLimit) + "查看完整内容")]), t._m(0), ]);
        }, [function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "containers"
            }, [e("div", {
                staticClass: "headertitle"
            }, [t._v("开通VIP会员，尊享10大权益"), ]), e("div", {
                staticClass: "rowlist"
            }, [e("div", {
                staticClass: "itemlist"
            }, [e("div", {
                staticClass: "circle privilege_icon1"
            }), e("div", {
                staticClass: "tiles"
            }, [t._v("更多提款次数"), ]), ]), e("div", {
                staticClass: "itemlist"
            }, [e("div", {
                staticClass: "circle privilege_icon2"
            }), e("div", {
                staticClass: "tiles"
            }, [t._v("身份标识")]), ]), e("div", {
                staticClass: "itemlist"
            }, [e("div", {
                staticClass: "circle privilege_icon3"
            }), e("div", {
                staticClass: "tiles"
            }, [t._v("更多免费私信"), ]), ]), e("div", {
                staticClass: "itemlist"
            }, [e("div", {
                staticClass: "circle privilege_icon4"
            }), e("div", {
                staticClass: "tiles"
            }, [t._v("VIP板块")]), ]), e("div", {
                staticClass: "itemlist"
            }, [e("div", {
                staticClass: "circle privilege_icon5"
            }), e("div", {
                staticClass: "tiles"
            }, [t._v("更多免费订阅"), ]), ]), e("div", {
                staticClass: "itemlist"
            }, [e("div", {
                staticClass: "circle privilege_icon6"
            }), e("div", {
                staticClass: "tiles"
            }, [t._v("VIP专属表情"), ]), ]), e("div", {
                staticClass: "itemlist"
            }, [e("div", {
                staticClass: "circle privilege_icon7"
            }), e("div", {
                staticClass: "tiles"
            }, [t._v("出售赚钻石"), ]), ]), e("div", {
                staticClass: "itemlist"
            }, [e("div", {
                staticClass: "circle privilege_icon8"
            }), e("div", {
                staticClass: "tiles"
            }, [t._v("出售赚金币"), ]), ]), e("div", {
                staticClass: "itemlist"
            }, [e("div", {
                staticClass: "circle privilege_icon9"
            }), e("div", {
                staticClass: "tiles"
            }, [t._v("充值赠送")]), ]), e("div", {
                staticClass: "itemlist"
            }, [e("div", {
                staticClass: "circle privilege_icon10"
            }), e("div", {
                staticClass: "tiles"
            }, [t._v("给好友转账"), ]), ]), ]), ]);
        }
        , ], !1, null, "ebdf6f1a", null).exports)),
        i("91ae"),
        i("2b0e"));
        const R = F.default.prototype.$isServer
          , z = (R || Number(document.documentMode),
        !R && document.addEventListener ? function(t, e, i) {
            t && e && i && t.addEventListener(e, i, !1);
        }
        : function(t, e, i) {
            t && e && i && t.attachEvent("on" + e, i);
        }
        )
          , U = !R && document.removeEventListener ? function(t, e, i) {
            t && e && t.removeEventListener(e, i, !1);
        }
        : function(t, e, i) {
            t && e && t.detachEvent("on" + e, i);
        }
        ;
        function Q(t, e) {
            if (t && e) {
                if (-1 !== e.indexOf(" "))
                    throw new Error("className should not contain space.");
                return t.classList ? t.classList.contains(e) : -1 < (" " + t.className + " ").indexOf(" " + e + " ");
            }
        }
        function K(t, e) {
            if (t) {
                for (var i = t.className, s = (e || "").split(" "), a = 0, o = s.length; a < o; a++) {
                    var n = s[a];
                    n && (t.classList ? t.classList.add(n) : Q(t, n) || (i += " " + n));
                }
                t.classList || t.setAttribute("class", i);
            }
        }
        function Y(t, e) {
            if (t && e) {
                for (var i = e.split(" "), s = " " + t.className + " ", a = 0, o = i.length; a < o; a++) {
                    var n = i[a];
                    n && (t.classList ? t.classList.remove(n) : Q(t, n) && (s = s.replace(" " + n + " ", " ")));
                }
                t.classList || t.setAttribute("class", (s || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, ""));
            }
        }
        function G(t) {
            let e = !1;
            return function(...i) {
                e || ((e = !0),
                window.requestAnimationFrame( (s) => {
                    t.apply(this, i),
                    (e = !1);
                }
                ));
            }
            ;
        }
        "object" == typeof Int8Array || F.default.prototype.$isServer || document.childNodes,
        Object.prototype.hasOwnProperty;
        let W, H = !1, J = !1;
        function X() {
            if (!F.default.prototype.$isServer) {
                let t = tt.modalDom;
                return (t ? (H = !0) : ((H = !1),
                (t = document.createElement("div")),
                (tt.modalDom = t).addEventListener("touchmove", function(t) {
                    t.preventDefault(),
                    t.stopPropagation();
                }),
                t.addEventListener("click", function() {
                    tt.doOnModalClick && tt.doOnModalClick();
                })),
                t);
            }
        }
        const Z = {}
          , tt = {
            modalFade: !0,
            getInstance: function(t) {
                return Z[t];
            },
            register: function(t, e) {
                t && e && (Z[t] = e);
            },
            deregister: function(t) {
                t && ((Z[t] = null),
                delete Z[t]);
            },
            nextZIndex: function() {
                return tt.zIndex++;
            },
            modalStack: [],
            doOnModalClick: function() {
                var t = tt.modalStack[tt.modalStack.length - 1];
                t && (t = tt.getInstance(t.id)) && t.closeOnClickModal && t.close();
            },
            openModal: function(t, e, i, s, a) {
                if (!F.default.prototype.$isServer && t && void 0 !== e) {
                    this.modalFade = a;
                    var o = this.modalStack;
                    for (let e = 0, i = o.length; e < i; e++)
                        if (o[e].id === t)
                            return;
                    const n = X();
                    K(n, "v-modal"),
                    this.modalFade && !H && K(n, "v-modal-enter"),
                    s && s.trim().split(/\s+/).forEach( (t) => K(n, t)),
                    setTimeout( () => {
                        Y(n, "v-modal-enter");
                    }
                    , 200),
                    (i && i.parentNode && 11 !== i.parentNode.nodeType ? i.parentNode : document.body).appendChild(n),
                    e && (n.style.zIndex = e),
                    (n.tabIndex = 0),
                    (n.style.display = ""),
                    this.modalStack.push({
                        id: t,
                        zIndex: e,
                        modalClass: s
                    });
                }
            },
            closeModal: function(t) {
                const e = this.modalStack
                  , i = X();
                if (0 < e.length) {
                    var s = e[e.length - 1];
                    if (s.id === t)
                        s.modalClass && s.modalClass.trim().split(/\s+/).forEach( (t) => Y(i, t)),
                        e.pop(),
                        0 < e.length && (i.style.zIndex = e[e.length - 1].zIndex);
                    else
                        for (let i = e.length - 1; 0 <= i; i--)
                            if (e[i].id === t) {
                                e.splice(i, 1);
                                break;
                            }
                }
                0 === e.length && (this.modalFade && K(i, "v-modal-leave"),
                setTimeout( () => {
                    0 === e.length && (i.parentNode && i.parentNode.removeChild(i),
                    (i.style.display = "none"),
                    (tt.modalDom = void 0)),
                    Y(i, "v-modal-leave");
                }
                , 200));
            },
        };
        Object.defineProperty(tt, "zIndex", {
            configurable: !0,
            get() {
                return (J || ((W = W || (F.default.prototype.$ELEMENT || {}).zIndex || 2e3),
                (J = !0)),
                W);
            },
            set(t) {
                W = t;
            },
        }),
        F.default.prototype.$isServer || window.addEventListener("keydown", function(t) {
            27 === t.keyCode && (t = (function() {
                if (!F.default.prototype.$isServer && 0 < tt.modalStack.length) {
                    var t = tt.modalStack[tt.modalStack.length - 1];
                    if (t)
                        return tt.getInstance(t.id);
                }
            }
            )()) && t.closeOnPressEscape && (t.handleClose ? t.handleClose() : t.handleAction ? t.handleAction("cancel") : t.close());
        });
        var et = tt;
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean;
        const it = {
            CONTAIN: {
                name: "contain",
                icon: "el-icon-full-screen"
            },
            ORIGINAL: {
                name: "original",
                icon: "el-icon-c-scale-to-original"
            },
        }
          , st = !F.default.prototype.$isServer && window.navigator.userAgent.match(/firefox/i) ? "DOMMouseScroll" : "mousewheel";
        var at = {
            name: "elImageViewer",
            props: {
                urlList: {
                    type: Array,
                    default: () => []
                },
                zIndex: {
                    type: Number,
                    default: 2e3
                },
                onSwitch: {
                    type: Function,
                    default: () => {}
                },
                onClose: {
                    type: Function,
                    default: () => {}
                },
                initialIndex: {
                    type: Number,
                    default: 0
                },
                appendToBody: {
                    type: Boolean,
                    default: !0
                },
                maskClosable: {
                    type: Boolean,
                    default: !0
                },
            },
            data() {
                return {
                    index: this.initialIndex,
                    isShow: !1,
                    infinite: !0,
                    loading: !1,
                    mode: it.CONTAIN,
                    transform: {
                        scale: 1,
                        deg: 0,
                        offsetX: 0,
                        offsetY: 0,
                        enableTransition: !1,
                    },
                };
            },
            computed: {
                isSingle() {
                    return this.urlList.length <= 1;
                },
                isFirst() {
                    return 0 === this.index;
                },
                isLast() {
                    return this.index === this.urlList.length - 1;
                },
                currentImg() {
                    return this.urlList[this.index];
                },
                imgStyle() {
                    var {scale: t, deg: e, offsetX: i, offsetY: s, enableTransition: a, } = this.transform
                      , t = {
                        transform: `scale(${t}) rotate(${e}deg)`,
                        transition: a ? "transform .3s" : "",
                        "margin-left": i + "px",
                        "margin-top": s + "px",
                    };
                    return (this.mode === it.CONTAIN && (t.maxWidth = t.maxHeight = "100%"),
                    t);
                },
                viewerZIndex() {
                    var t = et.nextZIndex();
                    return this.zIndex > t ? this.zIndex : t;
                },
            },
            watch: {
                index: {
                    handler: function(t) {
                        this.reset(),
                        this.onSwitch(t);
                    },
                },
                currentImg(t) {
                    this.$nextTick( (t) => {
                        this.$refs.img[0].complete || (this.loading = !0);
                    }
                    );
                },
            },
            methods: {
                hide() {
                    this.deviceSupportUninstall(),
                    this.onClose();
                },
                deviceSupportInstall() {
                    (this._keyDownHandler = (t) => {
                        switch ((t.stopPropagation(),
                        t.keyCode)) {
                        case 27:
                            this.hide();
                            break;
                        case 32:
                            this.toggleMode();
                            break;
                        case 37:
                            this.prev();
                            break;
                        case 38:
                            this.handleActions("zoomIn");
                            break;
                        case 39:
                            this.next();
                            break;
                        case 40:
                            this.handleActions("zoomOut");
                        }
                    }
                    ),
                    (this._mouseWheelHandler = G( (t) => {
                        0 < (t.wheelDelta || -t.detail) ? this.handleActions("zoomIn", {
                            zoomRate: 0.015,
                            enableTransition: !1,
                        }) : this.handleActions("zoomOut", {
                            zoomRate: 0.015,
                            enableTransition: !1,
                        });
                    }
                    )),
                    z(document, "keydown", this._keyDownHandler),
                    z(document, st, this._mouseWheelHandler);
                },
                deviceSupportUninstall() {
                    U(document, "keydown", this._keyDownHandler),
                    U(document, st, this._mouseWheelHandler),
                    (this._keyDownHandler = null),
                    (this._mouseWheelHandler = null);
                },
                handleImgLoad(t) {
                    this.loading = !1;
                },
                handleImgError(t) {
                    (this.loading = !1),
                    (t.target.alt = "加载失败");
                },
                handleMouseDown(t) {
                    if (!this.loading && 0 === t.button) {
                        const {offsetX: e, offsetY: i} = this.transform
                          , s = t.pageX
                          , a = t.pageY;
                        (this._dragHandler = G( (t) => {
                            (this.transform.offsetX = e + t.pageX - s),
                            (this.transform.offsetY = i + t.pageY - a);
                        }
                        )),
                        z(document, "mousemove", this._dragHandler),
                        z(document, "mouseup", (t) => {
                            U(document, "mousemove", this._dragHandler);
                        }
                        ),
                        t.preventDefault();
                    }
                },
                handleMaskClick() {
                    this.maskClosable && this.hide();
                },
                reset() {
                    this.transform = {
                        scale: 1,
                        deg: 0,
                        offsetX: 0,
                        offsetY: 0,
                        enableTransition: !1,
                    };
                },
                toggleMode() {
                    var t, e;
                    this.loading || ((t = Object.keys(it)),
                    (e = (Object.values(it).indexOf(this.mode) + 1) % t.length),
                    (this.mode = it[t[e]]),
                    this.reset());
                },
                prev() {
                    var t;
                    (this.isFirst && !this.infinite) || ((t = this.urlList.length),
                    (this.index = (this.index - 1 + t) % t));
                },
                next() {
                    var t;
                    (this.isLast && !this.infinite) || ((t = this.urlList.length),
                    (this.index = (this.index + 1) % t));
                },
                handleActions(t, e={}) {
                    if (!this.loading) {
                        var {zoomRate: i, rotateDeg: s, enableTransition: e, } = {
                            zoomRate: 0.2,
                            rotateDeg: 90,
                            enableTransition: !0,
                            ...e,
                        }
                          , a = this["transform"];
                        switch (t) {
                        case "zoomOut":
                            0.2 < a.scale && (a.scale = parseFloat((a.scale - i).toFixed(3)));
                            break;
                        case "zoomIn":
                            a.scale = parseFloat((a.scale + i).toFixed(3));
                            break;
                        case "clocelise":
                            a.deg += s;
                            break;
                        case "anticlocelise":
                            a.deg -= s;
                        }
                        a.enableTransition = e;
                    }
                },
            },
            mounted() {
                this.deviceSupportInstall(),
                this.appendToBody && document.body.appendChild(this.$el),
                this.$refs["el-image-viewer__wrapper"].focus();
            },
            destroyed() {
                this.appendToBody && this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el);
            },
        };
        (at = Object(r.a)(at, function() {
            var t = this
              , e = t._self._c;
            return e("transition", {
                attrs: {
                    name: "viewer-fade"
                }
            }, [e("div", {
                ref: "el-image-viewer__wrapper",
                staticClass: "el-image-viewer__wrapper",
                style: {
                    "z-index": t.viewerZIndex
                },
                attrs: {
                    tabindex: "-1"
                },
            }, [e("div", {
                staticClass: "el-image-viewer__mask",
                on: {
                    click: function(e) {
                        return e.target !== e.currentTarget ? null : t.handleMaskClick.apply(null, arguments);
                    },
                },
            }), e("span", {
                staticClass: "el-image-viewer__btn el-image-viewer__close",
                on: {
                    click: t.hide
                },
            }, [e("i", {
                staticClass: "el-icon-close"
            })]), t.isSingle ? t._e() : [e("span", {
                staticClass: "el-image-viewer__btn el-image-viewer__prev",
                class: {
                    "is-disabled": !t.infinite && t.isFirst
                },
                on: {
                    click: t.prev
                },
            }, [e("i", {
                staticClass: "el-icon-arrow-left"
            })]), e("span", {
                staticClass: "el-image-viewer__btn el-image-viewer__next",
                class: {
                    "is-disabled": !t.infinite && t.isLast
                },
                on: {
                    click: t.next
                },
            }, [e("i", {
                staticClass: "el-icon-arrow-right"
            })]), ], e("div", {
                staticClass: "el-image-viewer__btn el-image-viewer__actions",
            }, [e("div", {
                staticClass: "el-image-viewer__actions__inner"
            }, [e("i", {
                staticClass: "el-icon-zoom-out",
                on: {
                    click: function(e) {
                        return t.handleActions("zoomOut");
                    },
                },
            }), e("i", {
                staticClass: "el-icon-zoom-in",
                on: {
                    click: function(e) {
                        return t.handleActions("zoomIn");
                    },
                },
            }), e("i", {
                staticClass: "el-image-viewer__actions__divider",
            }), e("i", {
                class: t.mode.icon,
                on: {
                    click: t.toggleMode
                },
            }), e("i", {
                staticClass: "el-image-viewer__actions__divider",
            }), e("i", {
                staticClass: "el-icon-refresh-left",
                on: {
                    click: function(e) {
                        return t.handleActions("anticlocelise");
                    },
                },
            }), e("i", {
                staticClass: "el-icon-refresh-right",
                on: {
                    click: function(e) {
                        return t.handleActions("clocelise");
                    },
                },
            }), ]), ]), e("div", {
                staticClass: "el-image-viewer__canvas"
            }, t._l(t.urlList, function(i, s) {
                return s === t.index ? e("img", {
                    key: i,
                    ref: "img",
                    refInFor: !0,
                    staticClass: "el-image-viewer__img",
                    style: t.imgStyle,
                    attrs: {
                        src: t.currentImg,
                        referrerpolicy: "no-referrer",
                    },
                    on: {
                        load: t.handleImgLoad,
                        error: t.handleImgError,
                        mousedown: t.handleMouseDown,
                    },
                }) : t._e();
            }), 0), ], 2), ]);
        }, [], !1, null, null, null).exports),
        i("0fae"),
        (_ = {
            data() {
                return {
                    ruid: 0,
                    runame: "",
                    remarks: "",
                    reportTarget: null,
                    dialogImageUrl: "",
                    dialogVisible: !1,
                    fileList: [],
                    list: ["涉嫌广告", "未遵守板块规则", "无意义灌水", "涉嫌诈骗", "恶意骚扰", "其他", ],
                    result: [],
                    reportShow: !1,
                    keyword: "",
                    radio: !1,
                    screenW: document.body.clientWidth,
                    shows: !1,
                    firstStep: !0,
                    propsDataList: [],
                    showBig: !1,
                    showBigList: [],
                    datalist0: [],
                    isuserId: 0,
                    ishow: !1,
                    isvipLimit: !0,
                    show: !1,
                    flag: !1,
                    top: !1,
                    colorSel: "#f5f9fA",
                    loadingMore: !1,
                    updateContent: !0,
                    updateTopic: !0,
                    giftBox: !1,
                    giftBg: !1,
                    userInfo: {},
                    articleInfo: {},
                    commentList: M.b,
                    topicId: 0,
                    searchType: 0,
                    commentLastPage: !1,
                    current: 1,
                    breadcrumbResp: {},
                    collectState: !1,
                    likeState: !1,
                    floorUpdate: !1,
                    fromType: "",
                    isShowSetTopDom: !1,
                    isShowDisCard: !1,
                    sellMoney: 0,
                    dPlayer: null,
                    isShow: !1,
                    needVerify: {},
                    needVerify1: {},
                    isPassing: !1,
                    textareaContent: "",
                    comment_id: "",
                    reply_id: "",
                    quote: "",
                    textareaObj: "",
                    newresults: [],
                    newIndex: "",
                };
            },
            mixins: [_, f, S.a],
            created() {
                this.init();
            },
            watch: {
                breadcrumbResp(t) {},
                fileList(t, e) {
                    var i = document.querySelector(".plus_img").parentNode;
                    3 <= t.length ? (i.style.display = "none") : (i.style.display = "inline-block");
                },
            },
            mounted() {
                sessionStorage.getItem("bgColor") && (document.querySelector(".details-box").style.backgroundColor = sessionStorage.getItem("bgColor"));
            },
            provide() {
                return {
                    userInfo: this.userInfo
                };
            },
            computed: {
                rstr() {
                    return "帖子#" + this.articleInfo.topicId;
                },
                AD_DETAILS_LLKEY() {
                    return s.i;
                },
                AD_DETAILS_LRKEY() {
                    return s.j;
                },
                AD_DETAILS_CTKEY() {
                    return s.g;
                },
                AD_DETAILS_CCKEY() {
                    return s.e;
                },
                AD_DETAILS_CBKEY() {
                    return s.d;
                },
                AD_DETAILS_LTKEY() {
                    return s.k;
                },
                AD_DETAILS_RTKEY() {
                    return s.m;
                },
                AD_DETAILS_LBKEY() {
                    return s.h;
                },
                AD_DETAILS_RBKEY() {
                    return s.l;
                },
            },
            methods: {
                async getComCaptcha() {
                    return Object(k.e)("commentCaptcha");
                },
                sendReport() {
                    let t = ""
                      , e = (this.result.forEach( (e) => {
                        t += e + ";";
                    }
                    ),
                    "");
                    0 < this.fileList.length && this.fileList.forEach( (t, i) => {
                        0 == +i ? (e = t.id + "") : (e += "," + t.id);
                    }
                    ),
                    this.$axios.post(u.a + "/station/report", {
                        reporter_id: this.$store.state.userInfo.id,
                        reporter_nick_name: this.$store.state.userInfo.nickname,
                        reported_id: this.ruid,
                        reported_nick_name: this.runame,
                        origin: this.rstr,
                        img: e,
                        remarks: this.remarks,
                        category: t,
                        extra: "",
                    }).then( (t) => {
                        t.success ? (this.$message.success("举报成功！"),
                        this.handleClose()) : this.$message.error(t.msg);
                    }
                    ).catch( (t) => {
                        this.$message.error(t);
                    }
                    );
                },
                onSubmitReport() {
                    this.result.length <= 0 ? this.$message.warning("请选择举报类型") : this.ruid && this.runame && this.rstr ? this.sendReport() : this.$message.warning("没有举报源");
                },
                handlePictureCardPreview(t) {
                    (this.dialogImageUrl = t.url),
                    (this.dialogVisible = !0);
                },
                handleSuccess(t, e) {
                    t.success && (this.$message.success("上传成功"),
                    (e.id = t.data.id),
                    this.fileList.push(e));
                },
                getCookie(t) {
                    var e = document.cookie.split(";");
                    for (let s = 0; s < e.length; s++) {
                        var i = e[s].split("=");
                        if (t === i[0].trim())
                            return i[1];
                    }
                    return null;
                },
                handleRemove(t, e) {
                    var i = this.fileList.findIndex( (e) => e.url === t.url);
                    this.fileList.splice(i, 1);
                },
                handlePreview(t) {},
                handleExceed(t, e) {
                    this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${t.length} 个文件，共选择了 ${t.length + e.length} 个文件`);
                },
                beforeRemove(t, e) {
                    return this.$confirm(`确定移除 ${t.name}？`);
                },
                handleClose() {
                    (this.reportShow = !1),
                    (this.fileList = []),
                    (this.result = []),
                    (this.remarks = "");
                },
                handleReport(t) {
                    d.a.isLogon() ? ((this.ruid = t.user_id),
                    (this.runame = t.nickname),
                    (this.reportShow = !0)) : this.$loginWindow({
                        reload: !0
                    });
                },
                handleCollect(t) {
                    t ? this.$axios.get(u.a + "/favorite/v2/delete?entityType=topic&entityIds=" + this.articleInfo.topicId).then( (t) => {
                        this.$message.success("帖子取消收藏成功"),
                        (this.articleInfo.folderId = null),
                        this.get_posts();
                    }
                    ).catch( (t) => {
                        this.$message.error(t);
                    }
                    ) : (this.shows = !0);
                },
                transfer() {
                    this.radio ? this.$axios.get(u.a + `/favorite/v2/add?entityType=topic&folderId=${this.radio}&entityId=` + this.articleInfo.topicId).then( (t) => {
                        this.$message.success("帖子添加收藏成功"),
                        this.get_posts(),
                        (this.articleInfo.folderId = !0),
                        (this.shows = !1);
                    }
                    ).catch( (t) => {
                        this.$message.error(t);
                    }
                    ) : this.$message.error("请选择收藏夹");
                },
                addSaveHttp(t) {
                    this.$axios.get(u.a + "/favorite/v2/folderAdd?folderId=0&folderName=" + t).then( (t) => {
                        this.$message.success("收藏夹成功"),
                        (this.keyword = ""),
                        this.get_posts();
                    }
                    ).catch( (t) => {
                        this.$message.error(t);
                    }
                    );
                },
                get_posts(t=null) {
                    let e = this;
                    if (!e.$store.state.isLogin) {
                        return
                    }
                    e.datalist0 = [{
                        show: 1,
                        "id": 9999,
                        "userId": 9999,
                        "name": "默认收藏夹",
                        "createdAt": "1997-03-04T11:05:44.717+08:00",
                        "coverUrl": "",
                        "folder_type": "topic",
                        "count": 0
                    }]
                    return
                    e.$store.state.isLogin && e.$axios.get(u.a + "/favorite/v2/folderList").then( (i) => {
                        let s = [];
                        var a;
                        i && ((a = (i = i.data).filter( (t) => "默认收藏夹" === t.name)),
                        (s = i.filter( (t) => "默认收藏夹" !== t.name)),
                        a[0] && s.unshift(a[0]),
                        (s = t ? s.filter( (e) => e.id != t) : s).map( (t) => {
                            Object.assign(t, {
                                show: !1
                            });
                        }
                        ),
                        (e.datalist0 = s));
                    }
                    );
                },
                tagclick(t) {
                    t.external_url ? window.open(t.external_url) : this.$router.push({
                        path: "/article",
                        query: {
                            nodeId: t.nodeId
                        },
                    });
                },
                closeViewer() {
                    this.showBig = !1;
                },
                closeDiscountCard() {
                    this.isShowDisCard = !1;
                },
                setTopSuccess(t) {
                    (this.articleInfo.is_top = !0),
                    (this.articleInfo.topExpiresTime = t);
                },
                removeSetTopDom() {
                    this.isShowSetTopDom = !1;
                },
                showSetTop() {
                    (this.isShowSetTopDom = !0),
                    this.$nextTick( () => {
                        this.$refs.setTopDialog.show = !0;
                    }
                    );
                },
                govip() {
                    d.a.get(d.a.NOTLOGIN) ? this.$loginWindow({
                        reload: !0
                    }) : this.$router.push({
                        name: "govip"
                    });
                },
                searchTags(t) {
                    this.$router.push({
                        path: "/es",
                        query: {
                            type: 3,
                            key: t
                        }
                    });
                },
                async stopReward() {
                    try {
                        await Object(a.e)(this.articleInfo.topicId),
                        this.$message.success("操作成功"),
                        (this.articleInfo.reward.is_expire = !1),
                        (this.articleInfo.reward.reward_status = 1);
                    } catch (e) {
                        this.$message.error(e);
                    }
                },
                async setReward(t) {
                    this.articleInfo.topicId,
                    t.reply_id;
                    try {
                        p()({
                            url: u.a + "/topic/reward",
                            method: "post",
                            data: v.a.stringify({
                                topic_id: this.articleInfo.topicId,
                                reply_id: t.reply_id,
                            }),
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                            },
                            timeout: 1e4,
                        }).then( (e) => {
                            this.$message.success(`已将${t.floor + 1}楼设置为最佳答案`),
                            (this.articleInfo.reward.is_expire = !1),
                            (this.articleInfo.reward.reward_status = 2),
                            (this.articleInfo.reward.reward_reply_floor = t.floor);
                        }
                        ).catch( (t) => {
                            this.$message.error(t);
                        }
                        );
                    } catch (e) {
                        this.$message.error(e);
                    }
                },
                toUserInfo(t) {
                    this.$router.push({
                        name: "homepage_index",
                        params: {
                            uid: t
                        }
                    });
                },
                async init() {
                    (this.topicId = this.$route.query.pid),
                    (this.searchType = this.$route.query.search_type || 0);
                    var t, e = {
                        topic_id: this.$route.query.pid,
                        search_type: this.$route.query.search_type,
                    };
                    if (this.topicId && "" !== this.topicId)
                        try {
                            (t = this.topicId),
                            ((t = (await Object(a.h)(t)).data || {}).content = Object(x.a)(t.content)),
                            (t.content = t.content.replace(/id="myVideo_(\S*)"/gi, ""));
                            var i, s, o, n = await t;
                            n && ((i = n.node.vipLimit),
                            (s = this.$store.state).isLogin ? ((o = s.userInfo.vip),
                            (this.isvipLimit = !(i <= o || 1 == s.userInfo.role))) : (this.isvipLimit = 0 != i)),
                            (this.articleInfo = n);
                        } catch (t) {
                            return void this.$router.push("/error");
                        }
                    if (!d.a.get(d.a.NOTLOGIN) && "" != d.a.get(d.a.NOTLOGIN))
                        try {
                            this.userInfo = this.$store.state.userInfo || {};
                        } catch (t) {}
                    (this.ishow = 1),
                    this.isvipLimit || (this.likeState = await (async function(t) {
                        t = t.topic_id;
                        let e = !1;
                        if (t && "" !== t)
                            try {
                                var i = await Object(a.i)({
                                    entityId: t,
                                    entityType: "topic",
                                });
                                e = i.data.favorite || !1;
                            } catch (t) {}
                        return e;
                    }
                    )(e));
                    let r = 0;
                    var l = this;
                    !(async function t() {
                        var e, i;
                        l.articleInfo && 0 < Object.keys(l.articleInfo).length && (0 == l.$store.state.routerMenu.length && r < 10 ? (r++,
                        setTimeout( () => {
                            t();
                        }
                        , 500)) : (l.breadcrumbResp = ((e = l.$store.state.routerMenu),
                        (i = l.articleInfo.node),
                        await Object(P.b)(e, i.nodeId))));
                    }
                    )(),
                    this.$route.query.reward && (this.fromType = "reward"),
                    this.topicId && "" !== this.topicId && !this.isvipLimit && this.getReplyList(this.searchType),
                    this.get_posts();
                },
                showBigImg(t) {
                    (this.showBigList = [t]),
                    (this.showBig = !0);
                },
                async getReplyList(t) {
                    t != this.searchType && ((this.searchType = t),
                    (this.current = 1));
                    try {
                        var e, i = await D({
                            topic_id: this.topicId,
                            search_type: this.searchType,
                            page: this.current,
                        }), a = (i.data.page.total && ((e = await Object(s.p)(s.e)),
                        (this.propsDataList = e.data)),
                        (this.commentList = i.data),
                        (this.commentLastPage = i.commentLastPage),
                        (this.floorUpdate = !0),
                        this);
                        this.$nextTick( () => {
                            setTimeout( () => {
                                var t = document.querySelectorAll(".floor_box img");
                                t && 0 < t.length && t.forEach( (t) => {
                                    t.getAttribute("data-id") && t.setAttribute("title", "点击查看大图");
                                }
                                );
                            }
                            , 300);
                            var t = document.querySelectorAll(".floor_box");
                            0 < t.length && t.forEach( (t) => {
                                t.onclick = function(t) {
                                    if (((t = t.target),
                                    "IMG" == t.nodeName && t.getAttribute("data-id"))) {
                                        let e = -1;
                                        t.parentNode.className && -1 != t.parentNode.className.indexOf("floor_box") ? (e = t.parentNode.getAttribute("data-topicfloor")) : t.parentNode.parentNode.className && -1 != t.parentNode.parentNode.className.indexOf("floor_box") ? (e = t.parentNode.parentNode.getAttribute("data-topicfloor")) : t.parentNode.parentNode.parentNode.className && -1 != t.parentNode.parentNode.parentNode.className.indexOf("floor_box") ? (e = t.parentNode.parentNode.parentNode.getAttribute("data-topicfloor")) : t.parentNode.parentNode.parentNode.parentNode.className && -1 != t.parentNode.parentNode.parentNode.parentNode.className.indexOf("floor_box") && (e = t.parentNode.parentNode.parentNode.parentNode.getAttribute("data-topicfloor")),
                                        -1 != e ? d.a.get(d.a.NOTLOGIN) ? a.$loginWindow({
                                            reload: !0
                                        }) : "topic" == e && a.articleInfo.user.certified && a.articleInfo.user.id != a.$store.state.userInfo.id && 0 == a.$store.state.userInfo.vip ? a.$confirm2("成为VIP才能查看大图", "提示", {
                                            confirmButtonText: "成为VIP",
                                            cancelButtonText: "取消",
                                            showCancelButton: !0,
                                        }).then( () => {
                                            a.$router.push("/member");
                                        }
                                        ).catch( () => {}
                                        ) : "topic" != e && a.commentList.results[e].certified && a.commentList.results[e].user_id != a.$store.state.userInfo.id && 0 == a.$store.state.userInfo.vip ? a.$confirm2("成为VIP才能查看大图", "提示", {
                                            confirmButtonText: "成为VIP",
                                            cancelButtonText: "取消",
                                            showCancelButton: !0,
                                        }).then( () => {
                                            a.$router.push("/member");
                                        }
                                        ) : a.showBigImg(t.src) : a.showBigImg(t.src);
                                    } else {
                                        var e = t.getAttribute("data-uid")
                                          , i = t.getAttribute("data-door");
                                        t.getAttribute("data-book"),
                                        t && t.className && t.className.indexOf && -1 != t.className.indexOf("at-box") && e ? a.$router.push({
                                            name: "homepage_index",
                                            params: {
                                                uid: e
                                            },
                                        }) : (t && t.className && t.className.indexOf && -1 != t.className.indexOf("door-box") && i) || (t && t.className && t.className.indexOf && t.className.indexOf("book-box"));
                                    }
                                }
                                ;
                            }
                            );
                        }
                        );
                    } catch (t) {
                        this.$message.error(t);
                    }
                },
                showGift(t=0) {
                    d.a.isLogon() ? ((this.isuserId = 0 == t ? parseInt(this.articleInfo.user.id) : t),
                    (this.giftBox = !0),
                    (this.giftBg = !0)) : this.$loginWindow({
                        reload: !0
                    });
                },
                giftHide() {
                    (this.giftBox = !1),
                    setTimeout( () => {
                        this.giftBg = !1;
                    }
                    , 300);
                },
                contentClick(t) {
                    var e;
                    t.target && t.target.getAttribute("data-sell") && (0 == (t = t.target.getAttribute("data-sell")) ? this.handleBuy(this.articleInfo, 0, null) : ((e = (t = document.querySelector('[data-floor-index="' + t + '"]')).getAttribute("data-floor-id")),
                    (t = t.getAttribute("data-floor-money")),
                    this.handleBuy(this.articleInfo, 1, {
                        reply_id: +e,
                        price: +t,
                    })));
                },
                scrollToReply() {
                    if (d.a.isLogon())
                        try {
                            window.scrollTo(0, document.body.scrollHeight),
                            this.$refs.ed.$refs.myQuillEditor.quill.setSelection(0);
                        } catch (e) {}
                    else
                        this.$loginWindow({
                            reload: !0
                        });
                },
                changeTextarea(t, e="") {
                    d.a.isLogon() ? (t.textareaObj.visibleTextarea || (t.textareaObj.visibleTextarea = !t.textareaObj.visibleTextarea),
                    "" !== e ? ((t.textareaObj.placeholder = `评论 ${e.nickname || ""}：`),
                    this.$set(t.textareaObj, "quote", e)) : ((t.textareaObj.placeholder = ""),
                    (t.textareaObj.quote = {}))) : this.$loginWindow({
                        reload: !0
                    });
                },
                async postCommentSubmit(t, e) {
                    if (d.a.isLogon())
                        if (((this.newresults = t),
                        (this.newIndex = e),
                        (this.textareaObj = t.textareaObj),
                        (this.reply_id = t.reply_id),
                        (this.textareaContent = this.textareaObj.textareaContent),
                        (this.quote = this.textareaObj.quote),
                        (this.comment_id = this.quote && this.quote.commentId ? this.quote.commentId : 0),
                        (this.needVerify = await this.getComCaptcha()),
                        this.needVerify.data))
                            this.isShow = !0;
                        else
                            try {
                                var i = this.$route.query.pid
                                  , s = await a.f.call(this, {
                                    content: this.textareaContent,
                                    quote_id: this.comment_id,
                                    reply_id: this.reply_id,
                                    topic_id: Number(i),
                                });
                                (this.textareaObj.visibleTextarea = !1),
                                s.data && s.data.reply_id ? ((t.textareaObj.textareaContent = ""),
                                this.$message.success("提交成功，请稍后")) : ((t.textareaObj.textareaContent = ""),
                                this.$message.success(0 == this.comment_id ? "回复成功，审核中！" : "评论成功，审核中！")),
                                this.resetItemReply(e);
                            } catch (t) {
                                this.$message.error(t.toString());
                            }
                    else
                        this.$loginWindow({
                            reload: !0
                        });
                },
                async submit(t) {
                    if (t.isPassing)
                        try {
                            var e = this.$route.query.pid
                              , i = await a.f.call(this, {
                                content: this.textareaContent,
                                quote_id: this.comment_id,
                                reply_id: this.reply_id,
                                topic_id: Number(e),
                            });
                            (this.textareaObj.visibleTextarea = !1),
                            i.data && i.data.reply_id ? ((this.newresults.textareaObj.textareaContent = ""),
                            this.$message.success("提交成功，请稍后")) : ((this.newresults.textareaObj.textareaContent = ""),
                            this.$message.success(0 == this.comment_id ? "回复成功，审核中！" : "评论成功，审核中！")),
                            this.resetItemReply(this.newIndex);
                        } catch (t) {
                            this.$message.error(t.toString());
                        } finally {
                            this.isShow = !1;
                        }
                },
                closeVerify() {
                    this.isShow = !1;
                },
                async fetchItemReply(t, e, i) {
                    try {
                        var s = await a.p.call(this, {
                            replyId: t,
                            page: e + 1
                        });
                        (this.commentList.results[i].comment_list.page += 1),
                        (this.commentList.results[i].comment_list.list = this.commentList.results[i].comment_list.list.concat(s.data.results)),
                        this.commentList.results[i].comment_list.list.length === s.data.page.total && (this.commentList.results[i].comment_list.lastPage = !0);
                    } catch (t) {}
                },
                resetItemReply(t) {
                    this.commentList.results[t].comment_list = {
                        list: [],
                        page: 0,
                        lastPage: !1,
                    };
                },
                async onChangePagination(t, e) {
                    var i = this.$route.query.search_type
                      , s = this.$route.query.pid;
                    (this.current = t),
                    (this.floorUpdate = !1),
                    (t = await D.call(this, {
                        topic_id: s,
                        search_type: i || 0,
                        page: this.current,
                    }));
                    this.$set(this.commentList, "results", t.data.results),
                    this.$set(this.commentList, "page", t.data.page),
                    (this.commentLastPage = t.commentLastPage),
                    (this.floorUpdate = !0),
                    setTimeout( () => {
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                        });
                    }
                    , 20);
                },
                changeBg(t) {
                    (document.querySelector(".details-box").style.backgroundColor = t),
                    sessionStorage.setItem("bgColor", t),
                    (this.colorSel = t);
                },
                addArticle(t) {
                    d.a.isLogon() ? (window.location.href = "/addArticle?nodeId=" + t) : this.$loginWindow({
                        reload: !0
                    });
                },
            },
            components: {
                HjBreadcrumb: n,
                HjToolbar: c.a,
                Tabs: l.a,
                BbsTool: h,
                Editor: T,
                Emoji: I.a,
                giftPopup: q.a,
                vipLimit: B,
                topcardDialog: b.a,
                rankingList: y,
                discountCard: L,
                ElImageViewer: at,
                Verify: o.a,
            },
        }),
        i("e2ca"),
        i("0188"),
        (f = Object(r.a)(_, function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "details-box",
                staticStyle: {
                    "min-height": "100%",
                    "margin-top": "45px"
                },
            }, [e("el-dialog", {
                attrs: {
                    top: "10vh",
                    "show-close": !1,
                    visible: t.shows,
                    "modal-append-to-body": !1,
                    width: "420px",
                    "custom-class": "hj-dialog-saves",
                },
                on: {
                    "update:visible": function(e) {
                        t.shows = e;
                    },
                },
            }, [e("template", {
                slot: "title"
            }, [e("div", {
                staticClass: "hj-dialog-header",
                on: {
                    click: function(e) {
                        t.shows = !1;
                    },
                },
            }, [e("div", {
                staticClass: "icon-close",
                on: {
                    click: function(e) {
                        t.shows = !1;
                    },
                },
            }, [e("i", {
                staticClass: "el-icon-close"
            })]), e("div", {
                staticClass: "title"
            }, [e("span", [t._v("你正在移动1个帖子到")]), e("br"), e("span", {
                staticClass: "sub-title"
            }, [t._v("请选择"), ]), ]), ]), ]), e("div", {
                staticClass: "d-line"
            }), e("div", {
                staticClass: "hj-dialog-body"
            }, [t._l(t.datalist0, function(i, s) {
                return e("div", {
                    staticClass: "body-item"
                }, [e("el-radio", {
                    attrs: {
                        label: i.id
                    },
                    model: {
                        value: t.radio,
                        callback: function(e) {
                            t.radio = e;
                        },
                        expression: "radio",
                    },
                }, [t._v(t._s(i.name))]), e("span", [t._v(t._s(i.count))]), ], 1);
            }), e("div", {
                staticClass: "bot-line"
            }), e("div", {
                staticClass: "button",
                on: {
                    click: t.transfer
                }
            }, [t._v("确认")]), ], 2), ], 2), e("div", {
                staticClass: "left-activty"
            }, [e("advertising", {
                attrs: {
                    limit: 1,
                    nopadding: !0,
                    showtype: 0,
                    position: t.AD_DETAILS_LTKEY,
                },
            }), e("advertising", {
                attrs: {
                    limit: 1,
                    nopadding: !0,
                    showtype: 0,
                    position: t.AD_DETAILS_LBKEY,
                },
            }), ], 1), e("div", {
                staticClass: "right-activty"
            }, [e("advertising", {
                attrs: {
                    limit: 1,
                    nopadding: !0,
                    showtype: 0,
                    position: t.AD_DETAILS_RTKEY,
                },
            }), e("advertising", {
                attrs: {
                    limit: 1,
                    nopadding: !0,
                    showtype: 0,
                    position: t.AD_DETAILS_RBKEY,
                },
            }), ], 1), e("advertising", {
                attrs: {
                    showtype: 1,
                    position: t.AD_DETAILS_LLKEY
                },
            }), e("advertising", {
                attrs: {
                    showtype: 2,
                    position: t.AD_DETAILS_LRKEY
                },
            }), e("div", {
                attrs: {
                    id: "details-page"
                }
            }, [e("hj-gap", {
                attrs: {
                    height: 16
                }
            }), e("div", {
                staticClass: "details-breadcrumb"
            }, [e("div", {
                on: {
                    click: function(e) {
                        return t.$router.push("/");
                    },
                },
            }, [t._v("首页")]), t.breadcrumbResp.parent ? e("i", {
                staticClass: "el-icon-arrow-right"
            }) : t._e(), t.breadcrumbResp.parent ? e("div", {
                on: {
                    click: function(e) {
                        return t.tagclick(t.breadcrumbResp.parent);
                    },
                },
            }, [t._v(t._s(t.breadcrumbResp.parent.name))]) : t._e(), t.breadcrumbResp.children ? e("i", {
                staticClass: "el-icon-arrow-right"
            }) : t._e(), t.breadcrumbResp.children ? e("div", {
                on: {
                    click: function(e) {
                        return t.tagclick(t.breadcrumbResp.children);
                    },
                },
            }, [t._v(t._s(t.breadcrumbResp.children.name))]) : t._e(), t.articleInfo && t.articleInfo.node ? e("i", {
                staticClass: "el-icon-arrow-right"
            }) : t._e(), t.articleInfo && t.articleInfo.node ? e("div", {
                on: {
                    click1: function(e) {
                        return t.$router.push({
                            path: "/addArticle",
                            query: {
                                nodeId: t.articleInfo.node.nodeId,
                            },
                        });
                    },
                },
            }, [t._v(" [我要发帖] ")]) : t._e(), ]), e("div", {
                staticClass: "header"
            }, [e("h2", {
                staticClass: "position-relative"
            }, [e("span", [t._v(t._s(t.articleInfo.title || ""))]), 1 == t.articleInfo.type && 0 < Object.keys(t.articleInfo.sale || {}).length ? e("small", {
                staticClass: "extra font-12 currency"
            }, [t._v("本贴售价：" + t._s(t.MoneyShow(t.articleInfo.sale.amount, t.articleInfo.sale.money_type)) + t._s(1 == t.articleInfo.sale.money_type ? "金币" : "钻石")), ]) : t._e(), 2 == t.articleInfo.type && 0 < Object.keys(t.articleInfo.reward || {}).length && 0 < t.articleInfo.reward.reward_reply_floor ? e("a", {
                staticClass: "extra font-12",
                attrs: {
                    href: "javascript:void(0);"
                },
            }, [t._v(" 已结束，最佳答案为" + t._s(t.articleInfo.reward.reward_reply_floor + 1) + "楼 "), ]) : t._e(), 2 == t.articleInfo.type && 0 < Object.keys(t.articleInfo.reward || {}).length && 1 == t.articleInfo.reward.reward_status && 0 == t.articleInfo.reward.reward_reply_floor ? e("a", {
                staticClass: "extra font-12",
                attrs: {
                    href: "javascript:void(0);"
                },
            }, [t._v(" 已提前终止 ")]) : t._e(), 2 == t.articleInfo.type && 0 < Object.keys(t.articleInfo.reward || {}).length && 0 == t.articleInfo.reward.reward_status && !t.fromType ? e("small", {
                staticClass: "extra font-12 currency"
            }, [t._v("悬赏中：" + t._s(t.MoneyShow(t.articleInfo.reward.amount, t.articleInfo.reward.money_type)) + t._s(1 == t.articleInfo.reward.money_type ? "金币" : "钻石")), ]) : t._e(), 2 == t.articleInfo.type && 0 < Object.keys(t.articleInfo.reward || {}).length && 0 == t.articleInfo.reward.reward_status && "reward" == t.fromType ? e("button", {
                staticClass: "stopreward-btn",
                on: {
                    click: t.stopReward
                },
            }, [t._v(" 提前结束 ")]) : t._e(), ]), t.articleInfo.tags && Array.isArray(t.articleInfo.tags) ? e("div", {
                staticClass: "mb-3 d-flex justify-content-center",
            }, t._l(t.articleInfo.tags || [], function(i, s) {
                return e("a", {
                    key: s,
                    staticClass: "font-14",
                    staticStyle: {
                        margin: "0 15px"
                    },
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: function(e) {
                            return t.searchTags(i.tagName);
                        },
                    },
                }, [t._v("#" + t._s(i.tagName || ""))]);
            }), 0) : t._e(), e("div", {
                staticClass: "statistics"
            }, [e("div", {
                staticClass: "atl-info text-center",
                staticStyle: {
                    "font-size": "13px"
                },
            }, [e("span", [t._v("楼主："), e("a", {
                staticClass: "hjbox-linkcolor",
                attrs: {
                    href: "javascript:void(0);",
                    title: t.articleInfo && t.articleInfo.user ? t.articleInfo.user.nickname : "",
                },
                on: {
                    click: function(e) {
                        return t.toUserInfo(t.articleInfo.user.id);
                    },
                },
            }, [t._v(t._s(t.articleInfo && t.articleInfo.user ? t.articleInfo.user.nickname : "")), ]), ]), t.articleInfo && t.articleInfo.user && t.articleInfo.user.vip ? e("hj-level", {
                staticClass: "d_level ml-1 hjbox-cursor",
                on: {
                    onlevel: t.govip
                },
            }, [t._v(t._s(t.articleInfo && t.articleInfo.user && t.articleInfo.user.vip ? t.articleInfo.user.vip : 0)), ]) : t._e(), e("span", {
                staticClass: "ml-1"
            }, [t._v("时间：" + t._s(t.articleInfo && t.articleInfo.createTime ? t.articleInfo.createTime : "")), ]), e("span", {
                staticClass: "ml-1"
            }, [t._v("点击：" + t._s(t._f("newshowNumber")(t.articleInfo && t.articleInfo.viewCount))), ]), e("span", {
                staticClass: "ml-1"
            }, [t._v("回复：" + t._s(t._f("newshowNumber")(t.articleInfo && t.articleInfo.commentCount))), ]), e("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !1,
                    expression: "false",
                }, ],
                staticClass: "ml-1",
            }, [t._v("被收藏" + t._s(t.articleInfo.likeCount || 0) + "次"), ]), ], 1), e("div", {
                staticClass: "article-handle d-flex justify-content-between",
            }, [e("div", {
                staticClass: "menu"
            }, [t.isvipLimit ? t._e() : [], e("el-popover", {
                attrs: {
                    placement: "bottom",
                    width: "400",
                    trigger: "hover",
                },
            }, [e("el-button", {
                staticClass: "article-btn",
                attrs: {
                    slot: "reference"
                },
                slot: "reference",
            }, [t._v("设置")]), e("div", {
                staticClass: "font-set-view"
            }, [e("p", [e("strong", [t._v("背景：")]), e("span", {
                staticClass: "btn-color",
                class: "#f5f9fA" === t.colorSel && "btn-color-sel",
                attrs: {
                    id: "btn_color_1"
                },
                on: {
                    click: function(e) {
                        return t.changeBg("#f5f9fA");
                    },
                },
            }), e("span", {
                staticClass: "btn-color",
                class: "#f9fcf5" === t.colorSel && "btn-color-sel",
                attrs: {
                    id: "btn_color_2"
                },
                on: {
                    click: function(e) {
                        return t.changeBg("#f9fcf5");
                    },
                },
            }), e("span", {
                staticClass: "btn-color",
                class: "#fff3f7" === t.colorSel && "btn-color-sel",
                attrs: {
                    id: "btn_color_3"
                },
                on: {
                    click: function(e) {
                        return t.changeBg("#fff3f7");
                    },
                },
            }), e("span", {
                staticClass: "btn-color",
                class: "#fefbf6" === t.colorSel && "btn-color-sel",
                attrs: {
                    id: "btn_color_4"
                },
                on: {
                    click: function(e) {
                        return t.changeBg("#fefbf6");
                    },
                },
            }), e("span", {
                staticClass: "btn-color",
                class: "#f8f8f8" === t.colorSel && "btn-color-sel",
                attrs: {
                    id: "btn_color_5"
                },
                on: {
                    click: function(e) {
                        return t.changeBg("#f8f8f8");
                    },
                },
            }), ]), ]), 1 == t.articleInfo.type && 0 < Object.keys(t.articleInfo.reward || {}).length && 0 == t.articleInfo.reward.reward_status ? e("span", {
                staticClass: "currency font-12 ml-1",
            }, [t._v("距悬赏结束还有" + t._s(t._f("formatSeconds")(t.articleInfo.reward.reward_exp_time))), ]) : t._e(), ], 1), 0 < Object.keys(t.userInfo).length && t.userInfo.id === t.articleInfo.user.id ? e("a", {
                staticClass: "article-btn",
                attrs: {
                    href: `/updateArticle?topic_id=${t.$route.query.pid}&topic_pending_id=0`,
                },
            }, [t._v("编辑帖子")]) : t._e(), 0 < Object.keys(t.userInfo).length && t.userInfo.id === t.articleInfo.user.id ? e("el-button", {
                staticClass: "article-btn",
                attrs: {
                    title: "置顶"
                },
                on: {
                    click: function(e) {
                        t.$refs.topcard && t.$refs.topcard.onshow();
                    },
                },
            }, [t._v("置顶 ")]) : t._e(), 0 < Object.keys(t.userInfo).length && t.userInfo.id === t.articleInfo.user.id && t.articleInfo.is_top ? e("span", {
                staticStyle: {
                    color: "#ff712b"
                }
            }, [t._v("置顶有效期至" + t._s(t.articleInfo.topExpiresTime)), ]) : t._e(), ], 2), e("el-pagination", {
                staticClass: "newpages",
                attrs: {
                    size: "small",
                    background: "",
                    layout: "prev, pager, next,jumper,slot",
                    "current-page": t.current,
                    "page-size": t.commentList.page.limit,
                    total: t.commentList.page.total,
                    "prev-text": "上一页",
                    "next-text": "下一页",
                },
                on: {
                    "current-change": t.onChangePagination
                },
            }, [e("button", {
                staticClass: "article-btn",
                staticStyle: {
                    "margin-left": "10px",
                    "border-radius": "0",
                },
                on: {
                    click: function(e) {
                        return t.onChangePagination(t.current, 20);
                    },
                },
            }, [t._v(" 确定 ")]), ]), ], 1), ]), ]), e("hj-gap", {
                attrs: {
                    height: 22
                }
            }), t.current <= 1 ? e("div", {
                staticClass: "floor-show"
            }, [e("div", {
                staticClass: "floor_box",
                attrs: {
                    "data-topicfloor": "topic"
                },
            }, [t.updateTopic && t.articleInfo.content ? e("div", {
                directives: [{
                    name: "content",
                    rawName: "v-content",
                    value: [t.articleInfo.content, t.articleInfo.attachments, t.articleInfo.sale, this, t.articleInfo, ],
                    expression: "[articleInfo.content, articleInfo.attachments, articleInfo.sale, this, articleInfo]",
                }, ],
                staticClass: "article ql-editor",
                staticStyle: {
                    display: "flex",
                    "flex-direction": "column",
                },
                on: {
                    click: t.contentClick
                },
            }) : t._e(), t.articleInfo && t.articleInfo.node ? [t.isvipLimit ? [e("vip-limit", {
                attrs: {
                    vipLimit: t.articleInfo.node.vipLimit,
                },
            }), ] : [e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.ishow,
                    expression: "ishow",
                }, ],
                staticClass: "action-tyf d-flex justify-content-center mt-2",
            }, [e("div", {
                staticClass: "action-shang",
                on: {
                    click: function(e) {
                        return t.showGift(0);
                    },
                },
            }, [e("a", {
                staticClass: "shang",
                attrs: {
                    href: "javascript:void(0)",
                },
            }), e("p", [t._v("打赏")]), ]), e("div", {
                staticClass: "action-tyf-zan",
                on: {
                    click: t.handleLink
                },
            }, [e("a", {
                staticClass: "zan",
                class: t.likeState ? "" : "d",
                attrs: {
                    href: "javascript:void(0)",
                },
            }), e("p", [e("em", {
                staticStyle: {
                    display: "inline",
                },
            }, [e("span", [t._v(t._s(t.articleInfo.likeCount || 0)), ]), t._v("人"), ]), t._v("点赞 "), ]), ]), e("div", {
                staticClass: "action-tyf-cang",
                on: {
                    click: function(e) {
                        t.articleInfo.folderId ? t.handleCollect(2) : (t.shows = !0);
                    },
                },
            }, [e("a", {
                staticClass: "cang",
                class: t.likeState ? "" : "d",
                attrs: {
                    href: "javascript:void(0)",
                },
            }), e("p", [e("em", {
                staticStyle: {
                    display: "inline",
                },
            }, [e("span", [t._v(t._s(t.likeState ? 1 : 0)), ]), t._v("人"), ]), t._v("收藏 "), ]), ]), 1 == t.articleInfo.type ? e("div", {
                staticClass: "action-buy",
                on: {
                    click: function(e) {
                        return t.handleBuy(t.articleInfo, 0, null);
                    },
                },
            }, [e("a", {
                staticClass: "buy",
                class: t.articleInfo.sale.is_buy ? "" : "d",
                attrs: {
                    href: "javascript:void(0)",
                },
            }), e("p", [t._v(t._s(t.articleInfo.sale.is_buy ? "已购买" : "购买")), ]), ]) : t._e(), 3 == t.articleInfo.type ? e("div", {
                staticClass: "action-dy",
                on: {
                    click: function(e) {
                        return t.handleSubscribe(t.articleInfo);
                    },
                },
            }, [e("a", {
                class: {
                    dy_disable: !t.articleInfo.is_subscribe,
                    dy: t.articleInfo.is_subscribe,
                },
                attrs: {
                    href: "javascript:void(0)",
                },
            }), e("p", [t._v(t._s(t.articleInfo.is_subscribe ? "已" : "") + "订阅"), ]), ]) : t._e(), ]), e("ranking-list", {
                attrs: {
                    topicId: parseInt(t.$route.query.pid) || 0,
                },
                on: {
                    exceptional: () => {
                        t.showGift(0);
                    }
                    ,
                },
            }), t._m(0), e("div", {
                staticClass: "url-box"
            }, [e("div", {
                staticClass: "hjbox-linkline hjbox-linkcolor",
            }, [e("a", {
                attrs: {
                    href: t.$store.state.configUrl.domainAbroad,
                    target: "_blank",
                },
            }, [e("span", [t._v(t._s(t.MainObj.name) + "社区海外网址："), ]), e("span", [t._v(t._s(t.$store.state.configUrl.domainAbroad || "暂无")), ]), ]), ]), e("div", {
                staticClass: "hjbox-linkline hjbox-linkcolor",
            }, [e("a", {
                attrs: {
                    href: t.$store.state.configUrl.domain,
                    target: "_blank",
                },
            }, [e("span", [t._v(t._s(t.MainObj.name) + "社区国内网址："), ]), e("span", [t._v(t._s(t.$store.state.configUrl.domain || "暂无")), ]), ]), ]), e("div", {
                staticClass: "hjbox-linkline hjbox-cursor",
            }, [e("span", [t._v(t._s(t.MainObj.name) + "社区客服联系方式："), ]), e("span", [t._v(t._s(t.$store.state.configUrl.customerService || "暂无")), ]), ]), ]), ], ] : t._e(), ], 2), ]) : t._e(), e("advertising", {
                attrs: {
                    showtype: 0,
                    position: t.AD_DETAILS_CTKEY
                },
            }), t.isvipLimit ? t._e() : [t.floorUpdate ? [t._l(t.commentList.results || [], function(i, s) {
                return [e("div", {
                    key: "list" + s
                }, [e("div", {
                    staticClass: "author text-center",
                    staticStyle: {
                        margin: "10px 0"
                    },
                }, [e("a", {
                    attrs: {
                        href: "/homepage/" + i.user_id,
                        target: "_blank",
                    },
                }, [t._v("作者： "), e("span", {
                    staticClass: "hjbox-linkline",
                }, [t._v(t._s(i.nickname || ""))]), ]), i.vip ? e("hj-level", {
                    staticClass: "d_level ml-2 hjbox-cursor",
                    on: {
                        onlevel: t.govip
                    },
                }, [t._v(t._s(i.vip))]) : t._e(), e("span", {
                    staticClass: "ml-2"
                }, [t._v("时间：" + t._s(i.create_time)), ]), ], 1), e("div", {
                    staticClass: "floor-show hjbox-container",
                }, [e("div", {
                    staticClass: "floor_box",
                    attrs: {
                        "data-topicfloor": s,
                        "data-floor-money": i.price,
                        "data-floor-index": i.floor,
                        "data-floor-id": i.reply_id,
                    },
                }, [t.updateContent ? e("div", {
                    directives: [{
                        name: "content",
                        rawName: "v-content",
                        value: [i.content, i.attachments, {
                            money_type: t.articleInfo.sale ? t.articleInfo.sale.money_type : null,
                            amount: i.price,
                            buyCount: i.buyCount,
                        }, this, t.articleInfo, ],
                        expression: "[\n                                        result.content,\n                                        result.attachments,\n                                        {\n                                            money_type: articleInfo.sale ? articleInfo.sale.money_type : null,\n                                            amount: result.price,\n                                            buyCount: result.buyCount,\n                                        },\n                                        this,\n                                        articleInfo,\n                                    ]",
                    }, ],
                    staticClass: "article-content",
                    on: {
                        click: t.contentClick,
                    },
                }) : t._e(), e("div", {
                    staticClass: "overflow-hidden",
                }, [2 == t.articleInfo.type && 0 < Object.keys(t.articleInfo.reward || {}).length && 0 == t.articleInfo.reward.reward_status && "reward" == t.fromType ? e("div", {
                    staticClass: "atl-reply",
                }, [e("span", [t._v(t._s(i.floor + 1) + "楼"), ]), t._v(" | "), e("span", {
                    staticClass: "set-reward",
                    on: {
                        click: function(e) {
                            return t.setReward(i);
                        },
                    },
                }, [t._v("选为最佳答案"), ]), ]) : e("div", {
                    staticClass: "atl-reply",
                }, [e("span", [t._v(t._s(i.floor + 1) + "楼"), ]), t._v(" | "), i.is_sale && t.articleInfo.sale && -1 != i.content.indexOf("sell-btn") ? e("a", {
                    staticClass: "a-link-2 reply hjbox-linkline",
                    attrs: {
                        href: "javascript:void(0);",
                        title: "引用点赞",
                    },
                    on: {
                        click: function(e) {
                            return t.handleBuy(t.articleInfo, 1, i);
                        },
                    },
                }, [t._v("购买(" + t._s(t.MoneyShow(i.price, t.articleInfo.sale.money_type)) + t._s(1 == t.articleInfo.sale.money_type ? "金币" : "钻石") + ")｜"), ]) : t._e(), e("a", {
                    staticClass: "a-link-2 reply hjbox-linkline",
                    attrs: {
                        href: "javascript:void(0);",
                        title: "举报",
                    },
                    on: {
                        click: function(e) {
                            return t.handleReport(i);
                        },
                    },
                }, [t._v("举报")]), t._v(" | "), e("a", {
                    staticClass: "a-link-2 reply hjbox-linkline",
                    attrs: {
                        href: "javascript:void(0);",
                        title: "引用点赞",
                    },
                    on: {
                        click: function(e) {
                            return t.showGift(i.user_id);
                        },
                    },
                }, [t._v("打赏")]), t._v(" | "), e("a", {
                    staticClass: "a-link-2 ir-remark hjbox-linkline",
                    attrs: {
                        href: "javascript:void(0);",
                        title: "插入评论",
                    },
                    on: {
                        click: function(e) {
                            return t.changeTextarea(i, "");
                        },
                    },
                }, [t._v("评论(" + t._s(i.comment_count) + ")"), ]), ]), ]), e("div", {
                    staticClass: "item-reply-view",
                }, [e("div", {
                    staticClass: "ir-list",
                }, [e("ul", t._l(i.comment_list.list || [], function(s, a) {
                    return e("li", {
                        key: a
                    }, [e("p", [e("a", {
                        staticClass: "ir-user hjbox-linkline",
                        class: {
                            "ir-lz-user": s.user_id == t.articleInfo.user.id,
                        },
                        attrs: {
                            href: "/homepage/" + s.user_id,
                            target: "_blank",
                        },
                    }, [t._v(t._s(s.nickname || "") + "："), ]), t._m(1, !0), e("span", [t._v(t._s(s.createTime || "")), ]), t._v("  "), e("a", {
                        staticClass: "a-link2 ir-reply hjbox-linkline",
                        attrs: {
                            href: "javascript:void(0);",
                        },
                        on: {
                            click: function(e) {
                                return t.changeTextarea(i, s);
                            },
                        },
                    }, [t._v("评论"), ]), ]), s.quote && 0 < Object.keys(s.quote).length ? e("span", {
                        staticClass: "ir-content",
                    }, [t._v("评论 "), e("a", {
                        staticClass: "hjbox-linkline",
                        attrs: {
                            href: "/homepage/" + s.quote.user_id,
                        },
                    }, [t._v(t._s(s.quote.nickname || "")), ]), t._v("： "), e("span", {
                        domProps: {
                            textContent: t._s(s.content),
                        },
                    }), ]) : e("span", {
                        staticClass: "ir-content",
                        domProps: {
                            textContent: t._s(s.content),
                        },
                    }), ]);
                }), 0), ]), e("div", {
                    staticClass: "ir-action",
                }, [e("div", {
                    staticClass: "ir-action-btn",
                }, [0 < i.comment_count && !i.comment_list.lastPage ? e("span", {
                    staticClass: "a-link ir-remain",
                }, [t._v("剩余"), e("span", {
                    staticClass: "ir-count",
                }, [t._v(t._s(i.comment_count - i.comment_list.list.length)), ]), t._v("条评论"), ]) : t._e(), t._v("  "), 0 < i.comment_count && !i.comment_list.lastPage ? e("a", {
                    staticClass: "btn-more",
                    attrs: {
                        href: "javascript:void(0);",
                    },
                    on: {
                        click: function(e) {
                            return t.fetchItemReply(i.reply_id, i.comment_list.page, s);
                        },
                    },
                }, [t._v("点击查看"), ]) : t._e(), 0 < i.comment_count && i.comment_list.lastPage ? e("a", {
                    staticClass: "btn-more hjbox-linkline",
                    attrs: {
                        href: "javascript:void(0);",
                    },
                    on: {
                        click: function(e) {
                            return t.resetItemReply(s);
                        },
                    },
                }, [t._v("收起评论"), ]) : t._e(), e("span", {
                    staticClass: "ir-action-add",
                    on: {
                        click: function(e) {
                            return t.changeTextarea(i, "");
                        },
                    },
                }, [t._v("我要评论")]), ]), ]), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: i.textareaObj.visibleTextarea,
                        expression: "result.textareaObj.visibleTextarea",
                    }, ],
                    staticClass: "ir-post",
                }, [e("div", {
                    staticClass: "ir-post-arrow",
                }), e("div", {
                    staticClass: "ir-post-border clearfix",
                }, [e("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: i.textareaObj.textareaContent,
                        expression: "result.textareaObj.textareaContent",
                    }, ],
                    staticClass: "ir-post-input",
                    attrs: {
                        cols: "0",
                        placeholder: i.textareaObj.placeholder,
                    },
                    domProps: {
                        value: i.textareaObj.textareaContent,
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(i.textareaObj, "textareaContent", e.target.value);
                        },
                    },
                }), e("div", {
                    staticClass: "ir-post-long",
                }, [t._v(" 还可以输入"), e("strong", [t._v(t._s(140 - i.textareaObj.textareaContent.length)), ]), t._v("字 "), ]), ]), e("div", {
                    staticClass: "ir-post-btn",
                }, [e("input", {
                    staticClass: "ir-post-submit",
                    attrs: {
                        type: "button",
                        value: "发 表",
                    },
                    on: {
                        click: function(e) {
                            return t.postCommentSubmit(i, s);
                        },
                    },
                }), ]), ]), ]), ]), ]), ]), 9 == s ? e("div", {
                    key: "gu" + s
                }, [e("advertising", {
                    attrs: {
                        showtype: 0,
                        position: t.AD_DETAILS_CCKEY,
                    },
                }), ], 1) : t._e(), ];
            }), ] : [t._m(2)], ], e("el-pagination", {
                staticClass: "newpages",
                staticStyle: {
                    "text-align": "right",
                    "margin-top": "10px",
                },
                attrs: {
                    size: "small",
                    background: "",
                    layout: "prev, pager, next,jumper,slot",
                    "current-page": t.current,
                    "page-size": t.commentList.page.limit,
                    total: t.commentList.page.total,
                    "prev-text": "上一页",
                    "next-text": "下一页",
                },
                on: {
                    "current-change": t.onChangePagination
                },
            }, [e("button", {
                staticClass: "article-btn",
                staticStyle: {
                    "margin-left": "10px",
                    "border-radius": "0",
                },
                on: {
                    click: function(e) {
                        return t.onChangePagination(t.current, 20);
                    },
                },
            }, [t._v(" 确定 ")]), ]), !t.isvipLimit && t.floorUpdate && t.commentList.page.total ? [e("advertising", {
                attrs: {
                    showtype: 0,
                    position: t.AD_DETAILS_CBKEY,
                },
            }), ] : t._e(), t.isvipLimit ? t._e() : [e("hj-gap", {
                attrs: {
                    height: 20
                }
            }), 0 < Object.keys(t.userInfo).length ? e("div", [e("span", {
                attrs: {
                    id: "author_name_reply"
                }
            }, [t.userInfo.avatar && "" !== t.userInfo.avatar && -1 != t.userInfo.avatar.indexOf("http") ? e("img", {
                attrs: {
                    src: t.userInfo.avatar
                },
            }) : t.userInfo.avatar && "" !== t.userInfo.avatar && -1 == t.userInfo.avatar.indexOf("http") ? e("img", {
                attrs: {
                    src: `/desktop/images/common/avatar/${t.userInfo.avatar}.jpg`,
                },
            }) : e("img", {
                staticClass: "avatar c-pointer",
                attrs: {
                    src: "/desktop/images/common/avatar/0.jpg",
                    id: "dropdown_avatar",
                    alt: "",
                },
            }), t._v(" " + t._s(t.userInfo.nickname || "")), ]), e("span", [t._v("发表回复")]), ]) : t._e(), e("hj-gap", {
                attrs: {
                    height: 20
                }
            }), e("Editor", {
                ref: "ed",
                attrs: {
                    topicDetails: t.articleInfo
                },
            }), ], ], 2), e("BbsTool", {
                attrs: {
                    isvipLimit: t.isvipLimit,
                    articleInfo: t.articleInfo,
                    "collect-state": t.articleInfo.folderId ? 1 : 0,
                },
                on: {
                    showGift: () => {
                        t.showGift(0);
                    }
                    ,
                    clickCollect: t.handleCollect,
                    clickToReply: t.scrollToReply,
                },
            }), e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.giftBg,
                    expression: "giftBg",
                }, ],
                staticClass: "gift-bg",
                on: {
                    click: t.giftHide
                },
            }, [e("transition", {
                attrs: {
                    name: "el-zoom-in-top"
                }
            }, [t.giftBox ? e("gift-popup", {
                attrs: {
                    isuserId: t.isuserId,
                    topic: t.articleInfo,
                    sourceType: 1,
                    sourceId: parseInt(t.$route.query.pid),
                },
                on: {
                    hideBox: t.giftHide
                },
            }) : t._e(), ], 1), ], 1), e("topcard-dialog", {
                ref: "topcard",
                attrs: {
                    topicId: t.articleInfo.topicId
                },
                on: {
                    success: t.setTopSuccess
                },
            }), t.isShowDisCard ? e("discount-card", {
                ref: "dicountCard",
                attrs: {
                    sellMoney: t.sellMoney,
                    moneyType: t.articleInfo.sale.money_type,
                },
                on: {
                    puySale: t.buySale,
                    close: t.closeDiscountCard
                },
            }) : t._e(), t.showBig ? e("el-image-viewer", {
                attrs: {
                    "on-close": t.closeViewer,
                    "url-list": t.showBigList,
                },
            }) : t._e(), e("div", {
                staticClass: "report"
            }, [e("el-dialog", {
                attrs: {
                    top: "20vh",
                    title: "举报",
                    visible: t.reportShow,
                    width: "30%",
                    "before-close": t.handleClose,
                },
                on: {
                    "update:visible": function(e) {
                        t.reportShow = e;
                    },
                },
            }, [e("el-checkbox-group", {
                staticStyle: {
                    display: "flex",
                    "flex-direction": "column",
                },
                model: {
                    value: t.result,
                    callback: function(e) {
                        t.result = e;
                    },
                    expression: "result",
                },
            }, t._l(t.list, function(t, i) {
                return e("el-checkbox", {
                    key: i,
                    staticStyle: {
                        "margin-bottom": "10px"
                    },
                    attrs: {
                        label: t
                    },
                });
            }), 1), e("div", {
                staticStyle: {
                    "margin-top": "23px",
                    "margin-bottom": "14px",
                    color: "#333",
                },
            }, [t._v("备注：（选填）")]), e("el-input", {
                staticStyle: {
                    "margin-bottom": "16px"
                },
                attrs: {
                    type: "textarea",
                    rows: 4,
                    placeholder: "请输入备注信息",
                },
                model: {
                    value: t.remarks,
                    callback: function(e) {
                        t.remarks = e;
                    },
                    expression: "remarks",
                },
            }), e("div", {
                staticStyle: {
                    display: "flex"
                }
            }, [e("el-upload", {
                staticClass: "upload-demo",
                attrs: {
                    name: "image",
                    "list-type": "picture-card",
                    headers: {
                        "X-User-Token": t.getCookie("token"),
                        "X-User-Id": t.getCookie("uid"),
                    },
                    data: {
                        entity_type: "topic",
                        entity_id: ""
                    },
                    action: "/api/upload",
                    "on-success": t.handleSuccess,
                    "on-preview": t.handlePictureCardPreview,
                    "on-remove": t.handleRemove,
                    "before-remove": t.beforeRemove,
                    multiple: "",
                    limit: 3,
                    "file-list": t.fileList,
                },
            }, [e("img", {
                staticClass: "plus_img",
                staticStyle: {
                    width: "20px",
                    height: "20px",
                },
                attrs: {
                    src: i("d20b"),
                    alt: ""
                },
            }), ]), e("el-dialog", {
                attrs: {
                    "z-index": 999,
                    visible: t.dialogVisible,
                },
                on: {
                    "update:visible": function(e) {
                        t.dialogVisible = e;
                    },
                },
            }, [e("img", {
                attrs: {
                    width: "100%",
                    src: t.dialogImageUrl,
                    alt: "",
                },
            }), ]), e("div", {
                class: {
                    bott: 0 < t.fileList.length
                },
                staticStyle: {
                    "margin-left": "5px",
                    "align-self": "flex-end",
                    color: "#999999",
                    "font-size": "14px",
                },
            }, [t._v(" " + t._s("（" + t.fileList.length + "/3）") + " "), ]), ], 1), e("el-button", {
                staticStyle: {
                    "margin-top": "24px",
                    width: "100%",
                },
                attrs: {
                    type: "primary"
                },
                on: {
                    click: t.onSubmitReport
                },
            }, [t._v("提交")]), ], 1), ], 1), t.isShow ? e("verify", {
                attrs: {
                    closeVerify: t.closeVerify,
                    isShow: t.isShow
                },
                on: {
                    submit: t.submit
                },
            }) : t._e(), ], 1);
        }, [function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "atl-reply"
            }, [e("span", {
                staticClass: "reportme a-link",
                staticStyle: {
                    visibility: "hidden"
                },
            }, [t._v("举报")]), e("span", {
                staticStyle: {
                    visibility: "hidden"
                }
            }, [t._v("|"), ]), t._v(" "), e("span", [t._v("楼主")]), ]);
        }
        , function() {
            var t = this._self._c;
            return t("span", {
                staticClass: "ir-power",
                staticStyle: {
                    display: "none"
                }
            }, [t("a", {
                staticClass: "a-link ir-report",
                attrs: {
                    href: "javascript:void(0);"
                },
            }, [this._v("举报")]), this._v(" "), ]);
        }
        , function() {
            var t = this._self._c;
            return t("div", {
                staticStyle: {
                    "min-height": "500px",
                    "text-align": "center",
                },
            }, [t("span", {
                staticStyle: {
                    color: "#aaa"
                }
            }, [this._v("加载中..."), ]), ]);
        }
        , ], !1, null, "92dd434e", null));
        e.default = f.exports;
    },
    eb38: function(t, e, i) {
        "use strict";
        i("3f11");
    },
    ebb9: function(t, e, i) {
        "use strict";
        i("2a90");
    },
    fa38: function(t, e, i) {
        "use strict";
        i("c3a2");
    },
    fded: function(t, e, i) {
        "use strict";
        var s = i("35e7")
          , a = i("ee57")
          , o = i("894b")
          , n = i("13ff")
          , r = i("c2e5");
        (o = {
            mixins: [o.a, n.a, r.a],
            components: {
                BaseBasicLayout: s.a,
                RouterMenu: a.a
            },
            mounted() {
                this.allOffsetLeft(),
                window.addEventListener("scroll", this._scrollEvent),
                window.addEventListener("resize", this._resizeEvent);
            },
            destroyed() {
                window.removeEventListener("scroll", this._scrollEvent),
                window.removeEventListener("resize", this._resizeEvent);
            },
            methods: {
                _resizeEvent() {
                    this.allOffsetLeft();
                },
                _scrollEvent() {
                    var t = document.documentElement.scrollTop || document.body.scrollTop;
                    this.computedInfoFlowNav(t),
                    this.isNavLock(t),
                    this.isAsideLock(t);
                },
            },
            watch: {
                menuList(t) {
                    "ssr" !== this.platform && this.$emit("routerData", this.menuList);
                },
            },
        }),
        (n = i("2877")),
        (r = Object(n.a)(o, function() {
            var t = this
              , e = t._self._c;
            return e("base-basic-layout", {
                attrs: {
                    navOffsetX: t.navFixed ? 130 : 0,
                    margin: 10
                }
            }, [e("div", {
                ref: "nav",
                staticClass: "hj-nav-second",
                class: t.navFixed && "position-fixed",
                style: t.navFixed && {
                    top: "45px",
                    left: t.navLeft + "px",
                },
                attrs: {
                    slot: "layoutNav"
                },
                slot: "layoutNav",
            }, [e("router-menu", {
                attrs: {
                    "menu-list": t.$store.state.routerMenu || []
                },
            }), ], 1), e("div", {
                ref: "main",
                attrs: {
                    slot: "layoutContent"
                },
                slot: "layoutContent",
            }, [t._t("default")], 2), e("div", {
                ref: "aside",
                class: t.AsideFixed && "position-fixed",
                style: t.AsideFixed && {
                    top: Number(-t.asideTop) + 45 + "px",
                    left: t.asideLeft + "px",
                },
                attrs: {
                    slot: "layoutAside"
                },
                slot: "layoutAside",
            }, [t._t("aside")], 2), ]);
        }, [], !1, null, null, null));
        e.a = r.exports;
    },
}, ]);
