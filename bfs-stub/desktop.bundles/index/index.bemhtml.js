(function(g) {
  var __bem_xjst = function(exports) {
     var $$mode = "", $$block = "", $$elem = "", $$elemMods = null, $$mods = null;

var __$ref = {};

function apply(ctx) {
    ctx = ctx || this;
    $$mods = ctx["mods"];
    $$elemMods = ctx["elemMods"];
    $$elem = ctx["elem"];
    $$block = ctx["block"];
    $$mode = ctx["_mode"];
    try {
        return applyc(ctx, __$ref);
    } catch (e) {
        e.xjstContext = ctx;
        throw e;
    }
}

exports.apply = apply;

function applyc(__$ctx, __$ref) {
    var __$t = $$mode;
    if (__$t === "attrs") {
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "tag") {
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "mix") {
        var __$t = $$block;
        if (__$t === "link") {
            if (!$$elem) {
                return [ {
                    elem: "control"
                } ];
            }
        } else if (__$t === "button") {
            if (!$$elem) {
                return [ {
                    elem: "control"
                } ];
            }
        }
        return undefined;
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "link") {
            if (!$$elem) {
                return true;
            }
        } else if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 1) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$5() {
                        var __$r__$6;
                        var __$l0__$7 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1;
                        __$r__$6 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$7;
                        return __$r__$6;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
                return true;
            }
        } else if (__$t === "input") {
            if (!$$elem) {
                return true;
            }
        } else if (__$t === "form") {
            if (!$$elem) {
                return "true";
            }
        }
        return undefined;
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if (typeof __$ctx.ctx.content !== "undefined") {
                    return __$ctx.ctx.content;
                }
                var __$r = __$b40(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "input") {
            var __$t = !$$elem;
            if (__$t) {
                if (typeof __$ctx.ctx.content !== "undefined") {
                    return __$ctx.ctx.content;
                }
                var __$r = __$b42(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 128) === 0) {
                return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                    tag: "meta",
                    attrs: {
                        "http-equiv": "X-UA-Compatible",
                        content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                    }
                }, function __$lb__$67() {
                    var __$r__$68;
                    var __$l0__$69 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 128;
                    __$r__$68 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$69;
                    return __$r__$68;
                }() ];
            }
            if (!$$elem && (__$ctx.__$a0 & 256) === 0) {
                return [ function __$lb__$70() {
                    var __$r__$71;
                    var __$l0__$72 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 256;
                    __$r__$71 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$72;
                    return __$r__$71;
                }(), __$ctx.ctx.scripts ];
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "default") {
        var __$r = __$g2(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "link") {
                return false;
            } else if (__$t === "js") {
                return false;
            } else if (__$t === "css") {
                return false;
            } else if (__$t === "head") {
                return false;
            } else if (__$t === "favicon") {
                return false;
            } else if (__$t === "meta") {
                return false;
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return false;
            }
        }
        return undefined;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 1024) === 0) {
            var __$r = __$b64(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b65(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b66(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b67(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b68(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    }
}

[ function(exports, context) {
    var undef, BEM_ = {}, toString = Object.prototype.toString, slice = Array.prototype.slice, isArray = Array.isArray || function(obj) {
        return toString.call(obj) === "[object Array]";
    }, SHORT_TAGS = {
        area: 1,
        base: 1,
        br: 1,
        col: 1,
        command: 1,
        embed: 1,
        hr: 1,
        img: 1,
        input: 1,
        keygen: 1,
        link: 1,
        meta: 1,
        param: 1,
        source: 1,
        wbr: 1
    };
    (function(BEM, undefined) {
        var MOD_DELIM = "_", ELEM_DELIM = "__", NAME_PATTERN = "[a-zA-Z0-9-]+";
        function buildModPostfix(modName, modVal) {
            var res = MOD_DELIM + modName;
            if (modVal !== true) res += MOD_DELIM + modVal;
            return res;
        }
        function buildBlockClass(name, modName, modVal) {
            var res = name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        function buildElemClass(block, name, modName, modVal) {
            var res = buildBlockClass(block) + ELEM_DELIM + name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        BEM.INTERNAL = {
            NAME_PATTERN: NAME_PATTERN,
            MOD_DELIM: MOD_DELIM,
            ELEM_DELIM: ELEM_DELIM,
            buildModPostfix: buildModPostfix,
            buildClass: function(block, elem, modName, modVal) {
                var typeOfModName = typeof modName;
                if (typeOfModName === "string" || typeOfModName === "boolean") {
                    var typeOfModVal = typeof modVal;
                    if (typeOfModVal !== "string" && typeOfModVal !== "boolean") {
                        modVal = modName;
                        modName = elem;
                        elem = undef;
                    }
                } else if (typeOfModName !== "undefined") {
                    modName = undef;
                } else if (elem && typeof elem !== "string") {
                    elem = undef;
                }
                if (!(elem || modName)) {
                    return block;
                }
                return elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal);
            },
            buildModsClasses: function(block, elem, mods) {
                var res = "";
                if (mods) {
                    var modName;
                    for (modName in mods) {
                        if (!mods.hasOwnProperty(modName)) continue;
                        var modVal = mods[modName];
                        if (!modVal && modVal !== 0) continue;
                        typeof modVal !== "boolean" && (modVal += "");
                        res += " " + (elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal));
                    }
                }
                return res;
            },
            buildClasses: function(block, elem, mods) {
                var res = "";
                res += elem ? buildElemClass(block, elem) : buildBlockClass(block);
                res += this.buildModsClasses(block, elem, mods);
                return res;
            }
        };
    })(BEM_);
    var ts = {
        '"': "&quot;",
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;"
    }, f = function(t) {
        return ts[t] || t;
    };
    var buildEscape = function(r) {
        r = new RegExp(r, "g");
        return function(s) {
            return ("" + s).replace(r, f);
        };
    };
    context.BEMContext = BEMContext;
    function BEMContext(context, apply_) {
        this.ctx = typeof context === "undefined" ? "" : context;
        this.apply = apply_;
        this._str = "";
        var _this = this;
        this._buf = {
            push: function() {
                var chunks = slice.call(arguments).join("");
                _this._str += chunks;
            },
            join: function() {
                return this._str;
            }
        };
        this._ = this;
        this._start = true;
        this._mode = "";
        this._listLength = 0;
        this._notNewList = false;
        this.position = 0;
        this.block = undef;
        this.elem = undef;
        this.mods = undef;
        this.elemMods = undef;
    }
    BEMContext.prototype.isArray = isArray;
    BEMContext.prototype.isSimple = function isSimple(obj) {
        if (!obj || obj === true) return true;
        var t = typeof obj;
        return t === "string" || t === "number";
    };
    BEMContext.prototype.isShortTag = function isShortTag(t) {
        return SHORT_TAGS.hasOwnProperty(t);
    };
    BEMContext.prototype.extend = function extend(o1, o2) {
        if (!o1 || !o2) return o1 || o2;
        var res = {}, n;
        for (n in o1) o1.hasOwnProperty(n) && (res[n] = o1[n]);
        for (n in o2) o2.hasOwnProperty(n) && (res[n] = o2[n]);
        return res;
    };
    var cnt = 0, id = +new Date(), expando = "__" + id, get = function() {
        return "uniq" + id + ++cnt;
    };
    BEMContext.prototype.identify = function(obj, onlyGet) {
        if (!obj) return get();
        if (onlyGet || obj[expando]) {
            return obj[expando];
        } else {
            return obj[expando] = get();
        }
    };
    BEMContext.prototype.xmlEscape = buildEscape("[&<>]");
    BEMContext.prototype.attrEscape = buildEscape('["&<>]');
    BEMContext.prototype.BEM = BEM_;
    BEMContext.prototype.isFirst = function isFirst() {
        return this.position === 1;
    };
    BEMContext.prototype.isLast = function isLast() {
        return this.position === this._listLength;
    };
    BEMContext.prototype.generateId = function generateId() {
        return this.identify(this.ctx);
    };
    var oldApply = exports.apply;
    exports.apply = BEMContext.apply = function BEMContext_apply(context) {
        var ctx = new BEMContext(context || this, oldApply);
        ctx.apply();
        return ctx._str;
    };
    BEMContext.prototype.reapply = BEMContext.apply;
} ].forEach(function(fn) {
    fn(exports, this);
}, {
    recordExtensions: function(ctx) {
        ctx["__$a0"] = 0;
        ctx["_button"] = undefined;
        ctx["_mode"] = undefined;
        ctx["ctx"] = undefined;
        ctx["_input__control"] = undefined;
        ctx["_input"] = undefined;
        ctx["_ieCommented"] = undefined;
        ctx["_str"] = undefined;
        ctx["block"] = undefined;
        ctx["elem"] = undefined;
        ctx["_notNewList"] = undefined;
        ctx["position"] = undefined;
        ctx["_listLength"] = undefined;
        ctx["_currBlock"] = undefined;
        ctx["mods"] = undefined;
        ctx["elemMods"] = undefined;
    },
    resetApplyNext: function(ctx) {
        ctx["__$a0"] = 0;
    }
});

function __$b1(__$ctx, __$ref) {
    var ctx__$0 = __$ctx.ctx;
    return {
        src: ctx__$0.url,
        width: ctx__$0.width,
        height: ctx__$0.height,
        alt: ctx__$0.alt,
        title: ctx__$0.title
    };
}

function __$b2(__$ctx, __$ref) {
    var ctx__$1 = __$ctx.ctx, attrs__$2 = {
        tabindex: ctx__$1.tabIndex
    }, url__$3 = ctx__$1.url, typeOfUrl__$4 = typeof url__$3;
    typeOfUrl__$4 !== "undefined" && (attrs__$2.href = typeOfUrl__$4 === "string" ? url__$3 : __$ctx.reapply(url__$3));
    typeof attrs__$2.href === "undefined" && typeof attrs__$2.tabindex === "undefined" && (attrs__$2.tabindex = 0);
    ctx__$1.title && (attrs__$2.title = ctx__$1.title);
    ctx__$1.target && (attrs__$2.target = ctx__$1.target);
    return attrs__$2;
}

function __$b3(__$ctx, __$ref) {
    var ctx__$10 = __$ctx.ctx, attrs__$11 = {};
    ctx__$10.tag || (attrs__$11.type = ctx__$10.type || "button");
    ctx__$10.name && (attrs__$11.name = ctx__$10.name);
    ctx__$10.val && (attrs__$11.value = ctx__$10.val);
    $$mods.disabled && (attrs__$11.disabled = "disabled");
    return __$ctx._.extend(function __$lb__$12() {
        var __$r__$13;
        var __$l0__$14 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 2;
        __$r__$13 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$14;
        return __$r__$13;
    }(), attrs__$11);
}

function __$b4(__$ctx, __$ref) {
    var ctx__$15 = __$ctx.ctx, attrs__$16 = {
        role: "button"
    };
    ctx__$15.tabIndex && (attrs__$16.tabindex = ctx__$15.tabIndex);
    return attrs__$16;
}

function __$b5(__$ctx, __$ref) {
    var input__$40 = __$ctx._input, attrs__$41 = {
        id: input__$40.id,
        name: input__$40.name,
        value: input__$40.val,
        maxlength: input__$40.maxLength,
        tabindex: input__$40.tabIndex,
        placeholder: input__$40.placeholder
    };
    input__$40.autocomplete === false && (attrs__$41.autocomplete = "off");
    $$mods.disabled && (attrs__$41.disabled = "disabled");
    return attrs__$41;
}

function __$b40(__$ctx, __$ref) {
    var ctx__$8 = __$ctx.ctx, content__$9 = [ __$ctx.ctx.icon ];
    ctx__$8.text && content__$9.push({
        elem: "text",
        content: ctx__$8.text
    });
    return content__$9;
}

function __$b42(__$ctx, __$ref) {
    var ctx__$42 = __$ctx.ctx, content__$43 = [ {
        elem: "control"
    } ];
    ctx__$42.label && content__$43.unshift({
        elem: "label",
        content: ctx__$42.label
    });
    return content__$43;
}

function __$b47(__$ctx, __$ref) {
    var mods__$17 = $$mods;
    var __$r__$19;
    var __$l0__$20 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$22;
    var __$l1__$23 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$22 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$23;
    __$r__$19 = __$r__$22;
    __$ctx._button = __$l0__$20;
    return;
}

function __$b48(__$ctx, __$ref) {
    var __$r__$25;
    var __$l0__$26 = $$mode;
    $$mode = "";
    var __$l1__$27 = __$ctx.ctx;
    __$ctx.ctx = {
        elem: "box",
        content: [ __$ctx.ctx, {
            elem: "clear"
        } ]
    };
    var __$l2__$28 = __$ctx._input__control;
    __$ctx._input__control = true;
    var __$r__$30;
    var __$l3__$31 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$30 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$31;
    __$r__$25 = __$r__$30;
    $$mode = __$l0__$26;
    __$ctx.ctx = __$l1__$27;
    __$ctx._input__control = __$l2__$28;
    return;
}

function __$b49(__$ctx, __$ref) {
    var __$r__$33;
    var __$l0__$34 = $$mode;
    $$mode = "";
    var __$l1__$35 = __$ctx.ctx;
    __$ctx.ctx = {
        elem: "box",
        content: __$ctx.ctx
    };
    var __$l2__$36 = __$ctx._input__control;
    __$ctx._input__control = true;
    var __$r__$38;
    var __$l3__$39 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$38 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$39;
    __$r__$33 = __$r__$38;
    $$mode = __$l0__$34;
    __$ctx.ctx = __$l1__$35;
    __$ctx._input__control = __$l2__$36;
    return;
}

function __$b50(__$ctx, __$ref) {
    var ctx__$44 = __$ctx.ctx;
    ctx__$44.id = ctx__$44.id || __$ctx.generateId();
    var __$r__$46;
    var __$l0__$47 = __$ctx._input;
    __$ctx._input = ctx__$44;
    var __$r__$49;
    var __$l1__$50 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$49 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$50;
    __$r__$46 = __$r__$49;
    __$ctx._input = __$l0__$47;
    return;
}

function __$b51(__$ctx, __$ref) {
    var url__$51 = __$ctx.ctx.url;
    var __$r__$53;
    var __$l0__$54 = $$mode;
    $$mode = "";
    var __$l1__$55 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$51 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$57;
    var __$l2__$58 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$57 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$58;
    __$r__$53 = __$r__$57;
    $$mode = __$l0__$54;
    __$ctx.ctx = __$l1__$55;
    return;
}

function __$b52(__$ctx, __$ref) {
    var ie__$59 = __$ctx.ctx.ie, hideRule__$60 = !ie__$59 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$59 === "!IE" ? [ ie__$59, "<!-->", "<!--" ] : [ ie__$59, "", "" ];
    var __$r__$62;
    var __$l0__$63 = $$mode;
    $$mode = "";
    var __$l3__$64 = __$ctx.ctx;
    var __$l1__$65 = __$l3__$64._ieCommented;
    __$l3__$64._ieCommented = true;
    var __$l2__$66 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$60[0] + "]>" + hideRule__$60[1], __$ctx.ctx, hideRule__$60[2] + "<![endif]-->" ];
    __$r__$62 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$63;
    __$l3__$64._ieCommented = __$l1__$65;
    __$ctx.ctx = __$l2__$66;
    return;
}

function __$b53(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$73 = __$ctx.ctx;
    var __$r__$75;
    var __$l0__$76 = $$mode;
    $$mode = "";
    var __$l1__$77 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$73.doctype || "<!DOCTYPE html>", {
        tag: "html",
        cls: "ua_js_no",
        content: [ {
            elem: "head",
            content: [ {
                tag: "meta",
                attrs: {
                    charset: "utf-8"
                }
            }, {
                tag: "title",
                content: ctx__$73.title
            }, {
                block: "ua"
            }, ctx__$73.head, ctx__$73.styles, ctx__$73.favicon ? {
                elem: "favicon",
                url: ctx__$73.favicon
            } : "" ]
        }, ctx__$73 ]
    } ];
    var __$r__$79;
    var __$l2__$80 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$79 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$80;
    __$r__$75 = __$r__$79;
    $$mode = __$l0__$76;
    __$ctx.ctx = __$l1__$77;
    __$ctx._defPageApplied = false;
    return;
}

function __$b54(__$ctx, __$ref) {
    var BEM_INTERNAL__$81 = __$ctx.BEM.INTERNAL, ctx__$82 = __$ctx.ctx, isBEM__$83, tag__$84, res__$85;
    var __$r__$87;
    var __$l0__$88 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$89 = $$block;
    var __$r__$91;
    var __$l1__$92 = $$mode;
    $$mode = "tag";
    __$r__$91 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$92;
    tag__$84 = __$r__$91;
    typeof tag__$84 !== "undefined" || (tag__$84 = ctx__$82.tag);
    typeof tag__$84 !== "undefined" || (tag__$84 = "div");
    if (tag__$84) {
        var jsParams__$93, js__$94;
        if (vBlock__$89 && ctx__$82.js !== false) {
            var __$r__$95;
            var __$l2__$96 = $$mode;
            $$mode = "js";
            __$r__$95 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$96;
            js__$94 = __$r__$95;
            js__$94 = js__$94 ? __$ctx.extend(ctx__$82.js, js__$94 === true ? {} : js__$94) : ctx__$82.js === true ? {} : ctx__$82.js;
            js__$94 && ((jsParams__$93 = {})[BEM_INTERNAL__$81.buildClass(vBlock__$89, ctx__$82.elem)] = js__$94);
        }
        __$ctx._str += "<" + tag__$84;
        var __$r__$97;
        var __$l3__$98 = $$mode;
        $$mode = "bem";
        __$r__$97 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$98;
        isBEM__$83 = __$r__$97;
        typeof isBEM__$83 !== "undefined" || (isBEM__$83 = typeof ctx__$82.bem !== "undefined" ? ctx__$82.bem : ctx__$82.block || ctx__$82.elem);
        var __$r__$100;
        var __$l4__$101 = $$mode;
        $$mode = "cls";
        __$r__$100 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$101;
        var cls__$99 = __$r__$100;
        cls__$99 || (cls__$99 = ctx__$82.cls);
        var addJSInitClass__$102 = ctx__$82.block && jsParams__$93;
        if (isBEM__$83 || cls__$99) {
            __$ctx._str += ' class="';
            if (isBEM__$83) {
                __$ctx._str += BEM_INTERNAL__$81.buildClasses(vBlock__$89, ctx__$82.elem, ctx__$82.elemMods || ctx__$82.mods);
                var __$r__$104;
                var __$l5__$105 = $$mode;
                $$mode = "mix";
                __$r__$104 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$105;
                var mix__$103 = __$r__$104;
                ctx__$82.mix && (mix__$103 = mix__$103 ? [].concat(mix__$103, ctx__$82.mix) : ctx__$82.mix);
                if (mix__$103) {
                    var visited__$106 = {}, visitedKey__$107 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$106[visitedKey__$107(vBlock__$89, $$elem)] = true;
                    __$ctx.isArray(mix__$103) || (mix__$103 = [ mix__$103 ]);
                    for (var i__$108 = 0; i__$108 < mix__$103.length; i__$108++) {
                        var mixItem__$109 = mix__$103[i__$108], hasItem__$110 = mixItem__$109.block || mixItem__$109.elem, mixBlock__$111 = mixItem__$109.block || mixItem__$109._block || $$block, mixElem__$112 = mixItem__$109.elem || mixItem__$109._elem || $$elem;
                        hasItem__$110 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$81[hasItem__$110 ? "buildClasses" : "buildModsClasses"](mixBlock__$111, mixItem__$109.elem || mixItem__$109._elem || (mixItem__$109.block ? undefined : $$elem), mixItem__$109.elemMods || mixItem__$109.mods);
                        if (mixItem__$109.js) {
                            (jsParams__$93 || (jsParams__$93 = {}))[BEM_INTERNAL__$81.buildClass(mixBlock__$111, mixItem__$109.elem)] = mixItem__$109.js === true ? {} : mixItem__$109.js;
                            addJSInitClass__$102 || (addJSInitClass__$102 = mixBlock__$111 && !mixItem__$109.elem);
                        }
                        if (hasItem__$110 && !visited__$106[visitedKey__$107(mixBlock__$111, mixElem__$112)]) {
                            visited__$106[visitedKey__$107(mixBlock__$111, mixElem__$112)] = true;
                            var __$r__$114;
                            var __$l6__$115 = $$mode;
                            $$mode = "mix";
                            var __$l7__$116 = $$block;
                            $$block = mixBlock__$111;
                            var __$l8__$117 = $$elem;
                            $$elem = mixElem__$112;
                            __$r__$114 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$115;
                            $$block = __$l7__$116;
                            $$elem = __$l8__$117;
                            var nestedMix__$113 = __$r__$114;
                            if (nestedMix__$113) {
                                for (var j__$118 = 0; j__$118 < nestedMix__$113.length; j__$118++) {
                                    var nestedItem__$119 = nestedMix__$113[j__$118];
                                    if (!nestedItem__$119.block && !nestedItem__$119.elem || !visited__$106[visitedKey__$107(nestedItem__$119.block, nestedItem__$119.elem)]) {
                                        nestedItem__$119._block = mixBlock__$111;
                                        nestedItem__$119._elem = mixElem__$112;
                                        mix__$103.splice(i__$108 + 1, 0, nestedItem__$119);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$99 && (__$ctx._str += isBEM__$83 ? " " + cls__$99 : cls__$99);
            __$ctx._str += addJSInitClass__$102 ? ' i-bem"' : '"';
        }
        if (isBEM__$83 && jsParams__$93) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$93)) + '"';
        }
        var __$r__$121;
        var __$l9__$122 = $$mode;
        $$mode = "attrs";
        __$r__$121 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$122;
        var attrs__$120 = __$r__$121;
        attrs__$120 = __$ctx.extend(attrs__$120, ctx__$82.attrs);
        if (attrs__$120) {
            var name__$123, attr__$124;
            for (name__$123 in attrs__$120) {
                attr__$124 = attrs__$120[name__$123];
                if (typeof attr__$124 === "undefined") continue;
                __$ctx._str += " " + name__$123 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$124) ? attr__$124 : __$ctx.reapply(attr__$124)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$84)) {
        __$ctx._str += "/>";
    } else {
        tag__$84 && (__$ctx._str += ">");
        var __$r__$126;
        var __$l10__$127 = $$mode;
        $$mode = "content";
        __$r__$126 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$127;
        var content__$125 = __$r__$126;
        if (content__$125 || content__$125 === 0) {
            isBEM__$83 = vBlock__$89 || $$elem;
            var __$r__$128;
            var __$l11__$129 = $$mode;
            $$mode = "";
            var __$l12__$130 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$131 = __$ctx.position;
            __$ctx.position = isBEM__$83 ? 1 : __$ctx.position;
            var __$l14__$132 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$83 ? 1 : __$ctx._listLength;
            var __$l15__$133 = __$ctx.ctx;
            __$ctx.ctx = content__$125;
            __$r__$128 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$129;
            __$ctx._notNewList = __$l12__$130;
            __$ctx.position = __$l13__$131;
            __$ctx._listLength = __$l14__$132;
            __$ctx.ctx = __$l15__$133;
        }
        tag__$84 && (__$ctx._str += "</" + tag__$84 + ">");
    }
    res__$85 = __$ctx._str;
    __$r__$87 = undefined;
    __$ctx._str = __$l0__$88;
    __$ctx._buf.push(res__$85);
    return;
}

function __$b64(__$ctx, __$ref) {
    var __$r__$135;
    var __$l0__$136 = $$mode;
    $$mode = "";
    var __$l1__$137 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$139;
    var __$l2__$140 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$139 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$140;
    __$r__$135 = __$r__$139;
    $$mode = __$l0__$136;
    __$ctx.ctx = __$l1__$137;
    return;
}

function __$b65(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$141 = __$ctx.ctx;
    if (ctx__$141 && ctx__$141 !== true || ctx__$141 === 0) {
        __$ctx._str += ctx__$141 + "";
    }
    return;
}

function __$b66(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b67(__$ctx, __$ref) {
    var ctx__$142 = __$ctx.ctx, len__$143 = ctx__$142.length, i__$144 = 0, prevPos__$145 = __$ctx.position, prevNotNewList__$146 = __$ctx._notNewList;
    if (prevNotNewList__$146) {
        __$ctx._listLength += len__$143 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$143;
    }
    __$ctx._notNewList = true;
    while (i__$144 < len__$143) (function __$lb__$147() {
        var __$r__$148;
        var __$l0__$149 = __$ctx.ctx;
        __$ctx.ctx = ctx__$142[i__$144++];
        __$r__$148 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$149;
        return __$r__$148;
    })();
    prevNotNewList__$146 || (__$ctx.position = prevPos__$145);
    return;
}

function __$b68(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$150 = __$ctx.ctx.block, vElem__$151 = __$ctx.ctx.elem, block__$152 = __$ctx._currBlock || $$block;
    var __$r__$154;
    var __$l0__$155 = $$mode;
    $$mode = "default";
    var __$l1__$156 = $$block;
    $$block = vBlock__$150 || (vElem__$151 ? block__$152 : undefined);
    var __$l2__$157 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$150 || vElem__$151 ? undefined : block__$152;
    var __$l3__$158 = $$elem;
    $$elem = vElem__$151;
    var __$l4__$159 = $$mods;
    $$mods = vBlock__$150 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$160 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$154 = undefined;
    $$mode = __$l0__$155;
    $$block = __$l1__$156;
    __$ctx._currBlock = __$l2__$157;
    $$elem = __$l3__$158;
    $$mods = __$l4__$159;
    $$elemMods = __$l5__$160;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "image") {
        if (!$$elem) {
            var __$r = __$b1(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "link") {
        if (!$$elem) {
            var __$r = __$b2(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if (!$$mods.type && (__$ctx.__$a0 & 2) === 0) {
                var __$r = __$b3(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b4(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "input") {
        if ($$elem === "control") {
            var __$r = __$b5(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "js") {
            if (__$ctx.ctx.url) {
                return {
                    src: __$ctx.ctx.url
                };
            }
        } else if (__$t === "css") {
            if (__$ctx.ctx.url) {
                return {
                    rel: "stylesheet",
                    href: __$ctx.ctx.url
                };
            }
        } else if (__$t === "favicon") {
            return {
                rel: "shortcut icon",
                href: __$ctx.ctx.url
            };
        }
    }
    return undefined;
    return __$ref;
}

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "image") {
        if (!$$elem) {
            return "img";
        }
    } else if (__$t === "link") {
        if (!$$elem) {
            return "a";
        }
    } else if (__$t === "spin") {
        if (!$$elem) {
            return "span";
        }
    } else if (__$t === "button") {
        if ($$elem === "text") {
            return "span";
        }
        if (!$$elem) {
            return __$ctx.ctx.tag || "button";
        }
    } else if (__$t === "input") {
        var __$t = $$elem;
        if (__$t === "clear") {
            return "i";
        } else if (__$t === "control") {
            return "input";
        } else if (__$t === "box") {
            return "span";
        }
        if (!$$elem) {
            return "span";
        }
    } else if (__$t === "form") {
        if (!$$elem) {
            return "form";
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "link") {
            return "link";
        } else if (__$t === "js") {
            return "script";
        } else if (__$t === "css") {
            if (__$ctx.ctx.url) {
                return "link";
            }
            return "style";
        } else if (__$t === "head") {
            return "head";
        } else if (__$t === "favicon") {
            return "link";
        } else if (__$t === "meta") {
            return "meta";
        }
        if (!$$elem) {
            return "body";
        }
    } else if (__$t === "ua") {
        if (!$$elem) {
            return "script";
        }
    }
    return undefined;
    return __$ref;
}

function __$g2(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "button") {
        if (!$$elem && (__$ctx.__$a0 & 4) === 0) {
            var __$r = __$b47(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "input") {
        var __$t = $$elem;
        if (__$t === "control") {
            var __$t = !__$ctx._input__control;
            if (__$t) {
                if ($$mods && $$mods["has-clear"] === true && (__$ctx.__$a0 & 8) === 0) {
                    var __$r = __$b48(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                if ((__$ctx.__$a0 & 16) === 0) {
                    var __$r = __$b49(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem && (__$ctx.__$a0 & 32) === 0) {
            var __$r = __$b50(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "css") {
            var __$t = !__$ctx.ctx._ieCommented;
            if (__$t) {
                var __$t = __$ctx.ctx.hasOwnProperty("ie");
                if (__$t) {
                    if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 64) === 0) {
                        var __$r = __$b51(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                    var __$r = __$b52(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 512) === 0) {
            var __$r = __$b53(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b54(__$ctx, __$ref);
    if (__$r !== __$ref) return __$r;
    return __$ref;
};
     return exports;
  }
  var defineAsGlobal = true;
  if(typeof exports === "object") {
    exports["BEMHTML"] = __bem_xjst({});
    defineAsGlobal = false;
  }
  if(typeof modules === "object") {
    modules.define("BEMHTML",
      function(provide) {
        provide(__bem_xjst({})) });
    defineAsGlobal = false;
  }
  defineAsGlobal && (g["BEMHTML"] = __bem_xjst({}));
})(this);