< html > < head > < meta name = "color-scheme"
content = "light dark" > < /head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4257],{99960:function(e,t){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.Doctype=t.CDATA=t.Tag=t.Style=t.Script=t.Comment=t.Directive=t.Text=t.Root=t.isTag=t.ElementType=void 0,function(e){e.Root="root",e.Text="text",e.Directive="directive",e.Comment="comment",e.Script="script",e.Style="style",e.Tag="tag",e.CDATA="cdata",e.Doctype="doctype"}(a=t.ElementType||(t.ElementType={})),t.isTag=function(e){return e.type===a.Tag||e.type===a.Script||e.type===a.Style},t.Root=a.Root,t.Text=a.Text,t.Directive=a.Directive,t.Comment=a.Comment,t.Script=a.Script,t.Style=a.Style,t.Tag=a.Tag,t.CDATA=a.CDATA,t.Doctype=a.Doctype},60885:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CASE_SENSITIVE_TAG_NAMES_MAP=t.CASE_SENSITIVE_TAG_NAMES=void 0,t.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],t.CASE_SENSITIVE_TAG_NAMES_MAP=t.CASE_SENSITIVE_TAG_NAMES.reduce((function(e,t){return e[t.toLowerCase()]=t,e}),{})},38276:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a="html",n="head",o="body",i=/ & lt;
([a - zA - Z] + [0 - 9] ? ) / , r = /&lt;head[^]*&gt;/i, u = /&lt;body[^]*&gt;/i, d = function(e, t) {
    throw new Error("This browser does not support `document.implementation.createHTMLDocument`")
}, s = function(e, t) {
    throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")
}, l = "object" === typeof window & amp; & amp;
window.DOMParser;
if ("function" === typeof l) {
    var g = new l;
    d = s = function(e, t) {
        return t & amp; & amp;
        (e = "&lt;".concat(t, "&gt;").concat(e, "&lt;/").concat(t, "&gt;")), g.parseFromString(e, "text/html")
    }
}
if ("object" === typeof document & amp; & amp; document.implementation) {
    var m = document.implementation.createHTMLDocument();
    d = function(e, t) {
        if (t) {
            var a = m.documentElement.querySelector(t);
            return a & amp; & amp;
            (a.innerHTML = e), m
        }
        return m.documentElement.innerHTML = e, m
    }
}
var p, c = "object" === typeof document & amp; & amp;
document.createElement("template");
c & amp; & amp;
c.content & amp; & amp;
(p = function(e) {
    return c.innerHTML = e, c.content.childNodes
}), t.default = function(e) {
    var t, l, g = e.match(i),
        m = g & amp; & amp;
    g[1] ? g[1].toLowerCase() : "";
    switch (m) {
        case a:
            var c = s(e);
            if (!r.test(e)) null === (t = null === (f = c.querySelector(n)) || void 0 === f ? void 0 : f.parentNode) || void 0 === t || t.removeChild(f);
            if (!u.test(e)) null === (l = null === (f = c.querySelector(o)) || void 0 === f ? void 0 : f.parentNode) || void 0 === l || l.removeChild(f);
            return c.querySelectorAll(a);
        case n:
        case o:
            var h = d(e).querySelectorAll(m);
            return u.test(e) & amp; & amp;
            r.test(e) ? h[0].parentNode.childNodes : h;
        default:
            return p ? p(e) : (f = d(e, o).querySelector(o)).childNodes;
            var f
    }
}
}, 14152: function(e, t, a) {
"use strict";
var n = this & amp; & amp;
this.__importDefault || function(e) {
return e & amp; & amp;
e.__esModule ? e : {
    default: e
}
};
Object.defineProperty(t, "__esModule", {
value: !0
});
var o = n(a(38276)),
i = a(1507),
r = /&lt;(![a-zA-Z\s]+)&gt;/;
t.default = function(e) {
if ("string" !== typeof e) throw new TypeError("First argument must be a string");
if ("" === e) return [];
var t = e.match(r),
    a = t ? t[1] : void 0;
return (0, i.formatDOM)((0, o.default)(e), null, a)
}
}, 1507: function(e, t, a) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.formatDOM = t.formatAttributes = void 0;
var n = a(44584),
o = a(60885);

function i(e) {
for (var t = {}, a = 0, n = e.length; a & lt; n; a++) {
    var o = e[a];
    t[o.name] = o.value
}
return t
}

function r(e) {
var t = function(e) {
    return o.CASE_SENSITIVE_TAG_NAMES_MAP[e]
}(e = e.toLowerCase());
return t || e
}
t.formatAttributes = i, t.formatDOM = function e(t, a, o) {
void 0 === a & amp; & amp;
(a = null);
for (var u, d = [], s = 0, l = t.length; s & lt; l; s++) {
    var g = t[s];
    switch (g.nodeType) {
        case 1:
            var m = r(g.nodeName);
            (u = new n.Element(m, i(g.attributes))).children = e("template" === m ? g.content.childNodes : g.childNodes, u);
            break;
        case 3:
            u = new n.Text(g.nodeValue);
            break;
        case 8:
            u = new n.Comment(g.nodeValue);
            break;
        default:
            continue
    }
    var p = d[s - 1] || null;
    p & amp; & amp;
    (p.next = u), u.parent = a, u.prev = p, u.next = null, d.push(u)
}
return o & amp; & amp;
((u = new n.ProcessingInstruction(o.substring(0, o.indexOf(" ")).toLowerCase(), o)).next = d[0] || null, u.parent = a, d.unshift(u), d[1] & amp; & amp;
    (d[1].prev = d[0])), d
}
}, 44584: function(e, t, a) {
"use strict";
var n = this & amp; & amp;
this.__createBinding || (Object.create ? function(e, t, a, n) {
void 0 === n & amp; & amp;
(n = a);
var o = Object.getOwnPropertyDescriptor(t, a);
o & amp; & amp;
!("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
    enumerable: !0,
    get: function() {
        return t[a]
    }
}), Object.defineProperty(e, n, o)
} : function(e, t, a, n) {
void 0 === n & amp; & amp;
(n = a), e[n] = t[a]
}), o = this & amp; & amp;
this.__exportStar || function(e, t) {
for (var a in e) "default" === a || Object.prototype.hasOwnProperty.call(t, a) || n(t, e, a)
};
Object.defineProperty(t, "__esModule", {
value: !0
}), t.DomHandler = void 0;
var i = a(99960),
r = a(21642);
o(a(21642), t);
var u = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
},
d = function() {
    function e(e, t, a) {
        this.dom = [], this.root = new r.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, "function" === typeof t & amp; & amp;
        (a = t, t = u), "object" === typeof e & amp; & amp;
        (t = e, e = void 0), this.callback = null !== e & amp; & amp;
        void 0 !== e ? e : null, this.options = null !== t & amp; & amp;
        void 0 !== t ? t : u, this.elementCB = null !== a & amp; & amp;
        void 0 !== a ? a : null
    }
    return e.prototype.onparserinit = function(e) {
        this.parser = e
    }, e.prototype.onreset = function() {
        this.dom = [], this.root = new r.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null
    }, e.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null))
    }, e.prototype.onerror = function(e) {
        this.handleCallback(e)
    }, e.prototype.onclosetag = function() {
        this.lastNode = null;
        var e = this.tagStack.pop();
        this.options.withEndIndices & amp; & amp;
        (e.endIndex = this.parser.endIndex), this.elementCB & amp; & amp;
        this.elementCB(e)
    }, e.prototype.onopentag = function(e, t) {
        var a = this.options.xmlMode ? i.ElementType.Tag : void 0,
            n = new r.Element(e, t, void 0, a);
        this.addNode(n), this.tagStack.push(n)
    }, e.prototype.ontext = function(e) {
        var t = this.lastNode;
        if (t & amp; & amp; t.type === i.ElementType.Text) t.data += e, this.options.withEndIndices & amp; & amp;
        (t.endIndex = this.parser.endIndex);
        else {
            var a = new r.Text(e);
            this.addNode(a), this.lastNode = a
        }
    }, e.prototype.oncomment = function(e) {
        if (this.lastNode & amp; & amp; this.lastNode.type === i.ElementType.Comment) this.lastNode.data += e;
        else {
            var t = new r.Comment(e);
            this.addNode(t), this.lastNode = t
        }
    }, e.prototype.oncommentend = function() {
        this.lastNode = null
    }, e.prototype.oncdatastart = function() {
        var e = new r.Text(""),
            t = new r.CDATA([e]);
        this.addNode(t), e.parent = t, this.lastNode = e
    }, e.prototype.oncdataend = function() {
        this.lastNode = null
    }, e.prototype.onprocessinginstruction = function(e, t) {
        var a = new r.ProcessingInstruction(e, t);
        this.addNode(a)
    }, e.prototype.handleCallback = function(e) {
        if ("function" === typeof this.callback) this.callback(e, this.dom);
        else if (e) throw e
    }, e.prototype.addNode = function(e) {
        var t = this.tagStack[this.tagStack.length - 1],
            a = t.children[t.children.length - 1];
        this.options.withStartIndices & amp; & amp;
        (e.startIndex = this.parser.startIndex), this.options.withEndIndices & amp; & amp;
        (e.endIndex = this.parser.endIndex), t.children.push(e), a & amp; & amp;
        (e.prev = a, a.next = e), e.parent = t, this.lastNode = null
    }, e
}();
t.DomHandler = d, t.default = d
}, 21642: function(e, t, a) {
"use strict";
var n = this & amp; & amp;
this.__extends || function() {
var e = function(t, a) {
    return e = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array & amp; & amp;

    function(e, t) {
        e.__proto__ = t
    } || function(e, t) {
        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) & amp; & amp;
        (e[a] = t[a])
    }, e(t, a)
};
return function(t, a) {
    if ("function" !== typeof a & amp; & amp; null !== a) throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");

    function n() {
        this.constructor = t
    }
    e(t, a), t.prototype = null === a ? Object.create(a) : (n.prototype = a.prototype, new n)
}
}(), o = this & amp; & amp;
this.__assign || function() {
return o = Object.assign || function(e) {
    for (var t, a = 1, n = arguments.length; a & lt; n; a++)
        for (var o in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, o) & amp; & amp;
    (e[o] = t[o]);
    return e
}, o.apply(this, arguments)
};
Object.defineProperty(t, "__esModule", {
value: !0
}), t.cloneNode = t.hasChildren = t.isDocument = t.isDirective = t.isComment = t.isText = t.isCDATA = t.isTag = t.Element = t.Document = t.CDATA = t.NodeWithChildren = t.ProcessingInstruction = t.Comment = t.Text = t.DataNode = t.Node = void 0;
var i = a(99960),
r = function() {
    function e() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null
    }
    return Object.defineProperty(e.prototype, "parentNode", {
        get: function() {
            return this.parent
        },
        set: function(e) {
            this.parent = e
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "previousSibling", {
        get: function() {
            return this.prev
        },
        set: function(e) {
            this.prev = e
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "nextSibling", {
        get: function() {
            return this.next
        },
        set: function(e) {
            this.next = e
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.cloneNode = function(e) {
        return void 0 === e & amp; & amp;
        (e = !1), N(this, e)
    }, e
}();
t.Node = r;
var u = function(e) {
function t(t) {
    var a = e.call(this) || this;
    return a.data = t, a
}
return n(t, e), Object.defineProperty(t.prototype, "nodeValue", {
    get: function() {
        return this.data
    },
    set: function(e) {
        this.data = e
    },
    enumerable: !1,
    configurable: !0
}), t
}(r);
t.DataNode = u;
var d = function(e) {
function t() {
    var t = null !== e & amp; & amp;
    e.apply(this, arguments) || this;
    return t.type = i.ElementType.Text, t
}
return n(t, e), Object.defineProperty(t.prototype, "nodeType", {
    get: function() {
        return 3
    },
    enumerable: !1,
    configurable: !0
}), t
}(u);
t.Text = d;
var s = function(e) {
function t() {
    var t = null !== e & amp; & amp;
    e.apply(this, arguments) || this;
    return t.type = i.ElementType.Comment, t
}
return n(t, e), Object.defineProperty(t.prototype, "nodeType", {
    get: function() {
        return 8
    },
    enumerable: !1,
    configurable: !0
}), t
}(u);
t.Comment = s;
var l = function(e) {
function t(t, a) {
    var n = e.call(this, a) || this;
    return n.name = t, n.type = i.ElementType.Directive, n
}
return n(t, e), Object.defineProperty(t.prototype, "nodeType", {
    get: function() {
        return 1
    },
    enumerable: !1,
    configurable: !0
}), t
}(u);
t.ProcessingInstruction = l;
var g = function(e) {
function t(t) {
    var a = e.call(this) || this;
    return a.children = t, a
}
return n(t, e), Object.defineProperty(t.prototype, "firstChild", {
    get: function() {
        var e;
        return null !== (e = this.children[0]) & amp; & amp;
        void 0 !== e ? e : null
    },
    enumerable: !1,
    configurable: !0
}), Object.defineProperty(t.prototype, "lastChild", {
    get: function() {
        return this.children.length & gt;
        0 ? this.children[this.children.length - 1] : null
    },
    enumerable: !1,
    configurable: !0
}), Object.defineProperty(t.prototype, "childNodes", {
    get: function() {
        return this.children
    },
    set: function(e) {
        this.children = e
    },
    enumerable: !1,
    configurable: !0
}), t
}(r);
t.NodeWithChildren = g;
var m = function(e) {
function t() {
    var t = null !== e & amp; & amp;
    e.apply(this, arguments) || this;
    return t.type = i.ElementType.CDATA, t
}
return n(t, e), Object.defineProperty(t.prototype, "nodeType", {
    get: function() {
        return 4
    },
    enumerable: !1,
    configurable: !0
}), t
}(g);
t.CDATA = m;
var p = function(e) {
function t() {
    var t = null !== e & amp; & amp;
    e.apply(this, arguments) || this;
    return t.type = i.ElementType.Root, t
}
return n(t, e), Object.defineProperty(t.prototype, "nodeType", {
    get: function() {
        return 9
    },
    enumerable: !1,
    configurable: !0
}), t
}(g);
t.Document = p;
var c = function(e) {
function t(t, a, n, o) {
    void 0 === n & amp; & amp;
    (n = []), void 0 === o & amp; & amp;
    (o = "script" === t ? i.ElementType.Script : "style" === t ? i.ElementType.Style : i.ElementType.Tag);
    var r = e.call(this, n) || this;
    return r.name = t, r.attribs = a, r.type = o, r
}
return n(t, e), Object.defineProperty(t.prototype, "nodeType", {
    get: function() {
        return 1
    },
    enumerable: !1,
    configurable: !0
}), Object.defineProperty(t.prototype, "tagName", {
    get: function() {
        return this.name
    },
    set: function(e) {
        this.name = e
    },
    enumerable: !1,
    configurable: !0
}), Object.defineProperty(t.prototype, "attributes", {
    get: function() {
        var e = this;
        return Object.keys(this.attribs).map((function(t) {
            var a, n;
            return {
                name: t,
                value: e.attribs[t],
                namespace: null === (a = e["x-attribsNamespace"]) || void 0 === a ? void 0 : a[t],
                prefix: null === (n = e["x-attribsPrefix"]) || void 0 === n ? void 0 : n[t]
            }
        }))
    },
    enumerable: !1,
    configurable: !0
}), t
}(g);

function h(e) {
return (0, i.isTag)(e)
}

function f(e) {
return e.type === i.ElementType.CDATA
}

function y(e) {
return e.type === i.ElementType.Text
}

function b(e) {
return e.type === i.ElementType.Comment
}

function E(e) {
return e.type === i.ElementType.Directive
}

function v(e) {
return e.type === i.ElementType.Root
}

function N(e, t) {
var a;
if (void 0 === t & amp; & amp;
    (t = !1), y(e)) a = new d(e.data);
else if (b(e)) a = new s(e.data);
else if (h(e)) {
    var n = t ? M(e.children) : [],
        i = new c(e.name, o({}, e.attribs), n);
    n.forEach((function(e) {
        return e.parent = i
    })), null != e.namespace & amp; & amp;
    (i.namespace = e.namespace), e["x-attribsNamespace"] & amp; & amp;
    (i["x-attribsNamespace"] = o({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] & amp; & amp;
    (i["x-attribsPrefix"] = o({}, e["x-attribsPrefix"])), a = i
} else if (f(e)) {
    n = t ? M(e.children) : [];
    var r = new m(n);
    n.forEach((function(e) {
        return e.parent = r
    })), a = r
} else if (v(e)) {
    n = t ? M(e.children) : [];
    var u = new p(n);
    n.forEach((function(e) {
        return e.parent = u
    })), e["x-mode"] & amp; & amp;
    (u["x-mode"] = e["x-mode"]), a = u
} else {
    if (!E(e)) throw new Error("Not implemented yet: ".concat(e.type));
    var g = new l(e.name, e.data);
    null != e["x-name"] & amp; & amp;
    (g["x-name"] = e["x-name"], g["x-publicId"] = e["x-publicId"], g["x-systemId"] = e["x-systemId"]), a = g
}
return a.startIndex = e.startIndex, a.endIndex = e.endIndex, null != e.sourceCodeLocation & amp; & amp;
(a.sourceCodeLocation = e.sourceCodeLocation), a
}

function M(e) {
for (var t = e.map((function(e) {
        return N(e, !0)
    })), a = 1; a & lt; t.length; a++) t[a].prev = t[a - 1], t[a - 1].next = t[a];
return t
}
t.Element = c, t.isTag = h, t.isCDATA = f, t.isText = y, t.isComment = b, t.isDirective = E, t.isDocument = v, t.hasChildren = function(e) {
return Object.prototype.hasOwnProperty.call(e, "children")
}, t.cloneNode = N
}, 30488: function(e, t, a) {
var n = a(87384),
o = a(14152).default,
i = a(50484),
r = a(53670);
o = "function" === typeof o.default ? o.default : o;
var u = {
lowerCaseAttributeNames: !1
};

function d(e, t) {
if ("string" !== typeof e) throw new TypeError("First argument must be a string");
return "" === e ? [] : r(o(e, (t = t || {}).htmlparser2 || u), t)
}
d.domToReact = r, d.htmlToDOM = o, d.attributesToProps = i, d.Comment = n.Comment, d.Element = n.Element, d.ProcessingInstruction = n.ProcessingInstruction, d.Text = n.Text, e.exports = d, d.default = d
}, 50484: function(e, t, a) {
var n = a(25726),
o = a(74606),
i = ["checked", "value"],
r = ["input", "select", "textarea"],
u = {
    reset: !0,
    submit: !0
};

function d(e) {
return n.possibleStandardNames[e]
}
e.exports = function(e, t) {
var a, s, l, g, m, p = {},
    c = (e = e || {}).type & amp; & amp;
u[e.type];
for (a in e)
    if (l = e[a], n.isCustomAttribute(a)) p[a] = l;
    else if (g = d(s = a.toLowerCase())) switch (m = n.getPropertyInfo(g), -1 === i.indexOf(g) || -1 === r.indexOf(t) || c || (g = d("default" + s)), p[g] = l, m & amp; & amp; m.type) {
    case n.BOOLEAN:
        p[g] = !0;
        break;
    case n.OVERLOADED_BOOLEAN:
        "" === l & amp; & amp;
        (p[g] = !0)
} else o.PRESERVE_CUSTOM_ATTRIBUTES & amp; & amp;
(p[a] = l);
return o.setStyleProp(e.style, p), p
}
}, 53670: function(e, t, a) {
var n = a(67294),
o = a(50484),
i = a(74606),
r = i.setStyleProp,
u = i.canTextBeChildOfNode;

function d(e) {
return i.PRESERVE_CUSTOM_ATTRIBUTES & amp; & amp;
"tag" === e.type & amp; & amp;
i.isCustomComponent(e.name, e.attribs)
}
e.exports = function e(t, a) {
for (var s, l, g, m, p, c = (a = a || {}).library || n, h = c.cloneElement, f = c.createElement, y = c.isValidElement, b = [], E = "function" === typeof a.replace, v = a.transform || i.returnFirstArg, N = a.trim, M = 0, R = t.length; M & lt; R; M++)
    if (s = t[M], E & amp; & amp; y(g = a.replace(s))) R & gt;
1 & amp; & amp;
(g = h(g, {
    key: g.key || M
})), b.push(v(g, s, M));
else if ("text" !== s.type) {
    switch (m = s.attribs, d(s) ? r(m.style, m) : m & amp; & amp;
        (m = o(m, s.name)), p = null, s.type) {
        case "script":
        case "style":
            s.children[0] & amp; & amp;
            (m.dangerouslySetInnerHTML = {
                __html: s.children[0].data
            });
            break;
        case "tag":
            "textarea" === s.name & amp; & amp;
            s.children[0] ? m.defaultValue = s.children[0].data : s.children & amp; & amp;
            s.children.length & amp; & amp;
            (p = e(s.children, a));
            break;
        default:
            continue
    }
    R & gt;
    1 & amp; & amp;
    (m.key = M), b.push(v(f(s.name, m, p), s, M))
} else {
    if ((l = !s.data.trim().length) & amp; & amp; s.parent & amp; & amp; !u(s.parent)) continue;
    if (N & amp; & amp; l) continue;
    b.push(v(s.data, s, M))
}
return 1 === b.length ? b[0] : b
}
}, 74606: function(e, t, a) {
var n = a(67294),
o = a(41476).default,
i = new Set(["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"]);
var r = {
reactCompat: !0
};
var u = n.version.split(".")[0] & gt; = 16, d = new Set(["tr", "tbody", "thead", "tfoot", "colgroup", "table", "head", "html", "frameset"]);
e.exports = {
PRESERVE_CUSTOM_ATTRIBUTES: u,
ELEMENTS_WITH_NO_TEXT_CHILDREN: d,
isCustomComponent: function(e, t) {
    return -1 === e.indexOf("-") ? t & amp; & amp;
    "string" === typeof t.is: !i.has(e)
},
setStyleProp: function(e, t) {
    if (null !== e & amp; & amp; void 0 !== e) try {
        t.style = o(e, r)
    } catch (a) {
        t.style = {}
    }
},
canTextBeChildOfNode: function(e) {
    return !d.has(e.name)
},
returnFirstArg: function(e) {
    return e
}
}
}, 87384: function(e, t, a) {
"use strict";
var n = this & amp; & amp;
this.__createBinding || (Object.create ? function(e, t, a, n) {
void 0 === n & amp; & amp;
(n = a);
var o = Object.getOwnPropertyDescriptor(t, a);
o & amp; & amp;
!("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
    enumerable: !0,
    get: function() {
        return t[a]
    }
}), Object.defineProperty(e, n, o)
} : function(e, t, a, n) {
void 0 === n & amp; & amp;
(n = a), e[n] = t[a]
}), o = this & amp; & amp;
this.__exportStar || function(e, t) {
for (var a in e) "default" === a || Object.prototype.hasOwnProperty.call(t, a) || n(t, e, a)
};
Object.defineProperty(t, "__esModule", {
value: !0
}), t.DomHandler = void 0;
var i = a(99960),
r = a(5079);
o(a(5079), t);
var u = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
},
d = function() {
    function e(e, t, a) {
        this.dom = [], this.root = new r.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, "function" === typeof t & amp; & amp;
        (a = t, t = u), "object" === typeof e & amp; & amp;
        (t = e, e = void 0), this.callback = null !== e & amp; & amp;
        void 0 !== e ? e : null, this.options = null !== t & amp; & amp;
        void 0 !== t ? t : u, this.elementCB = null !== a & amp; & amp;
        void 0 !== a ? a : null
    }
    return e.prototype.onparserinit = function(e) {
        this.parser = e
    }, e.prototype.onreset = function() {
        this.dom = [], this.root = new r.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null
    }, e.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null))
    }, e.prototype.onerror = function(e) {
        this.handleCallback(e)
    }, e.prototype.onclosetag = function() {
        this.lastNode = null;
        var e = this.tagStack.pop();
        this.options.withEndIndices & amp; & amp;
        (e.endIndex = this.parser.endIndex), this.elementCB & amp; & amp;
        this.elementCB(e)
    }, e.prototype.onopentag = function(e, t) {
        var a = this.options.xmlMode ? i.ElementType.Tag : void 0,
            n = new r.Element(e, t, void 0, a);
        this.addNode(n), this.tagStack.push(n)
    }, e.prototype.ontext = function(e) {
        var t = this.lastNode;
        if (t & amp; & amp; t.type === i.ElementType.Text) t.data += e, this.options.withEndIndices & amp; & amp;
        (t.endIndex = this.parser.endIndex);
        else {
            var a = new r.Text(e);
            this.addNode(a), this.lastNode = a
        }
    }, e.prototype.oncomment = function(e) {
        if (this.lastNode & amp; & amp; this.lastNode.type === i.ElementType.Comment) this.lastNode.data += e;
        else {
            var t = new r.Comment(e);
            this.addNode(t), this.lastNode = t
        }
    }, e.prototype.oncommentend = function() {
        this.lastNode = null
    }, e.prototype.oncdatastart = function() {
        var e = new r.Text(""),
            t = new r.CDATA([e]);
        this.addNode(t), e.parent = t, this.lastNode = e
    }, e.prototype.oncdataend = function() {
        this.lastNode = null
    }, e.prototype.onprocessinginstruction = function(e, t) {
        var a = new r.ProcessingInstruction(e, t);
        this.addNode(a)
    }, e.prototype.handleCallback = function(e) {
        if ("function" === typeof this.callback) this.callback(e, this.dom);
        else if (e) throw e
    }, e.prototype.addNode = function(e) {
        var t = this.tagStack[this.tagStack.length - 1],
            a = t.children[t.children.length - 1];
        this.options.withStartIndices & amp; & amp;
        (e.startIndex = this.parser.startIndex), this.options.withEndIndices & amp; & amp;
        (e.endIndex = this.parser.endIndex), t.children.push(e), a & amp; & amp;
        (e.prev = a, a.next = e), e.parent = t, this.lastNode = null
    }, e
}();
t.DomHandler = d, t.default = d
}, 5079: function(e, t, a) {
"use strict";
var n = this & amp; & amp;
this.__extends || function() {
var e = function(t, a) {
    return e = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array & amp; & amp;

    function(e, t) {
        e.__proto__ = t
    } || function(e, t) {
        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) & amp; & amp;
        (e[a] = t[a])
    }, e(t, a)
};
return function(t, a) {
    if ("function" !== typeof a & amp; & amp; null !== a) throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");

    function n() {
        this.constructor = t
    }
    e(t, a), t.prototype = null === a ? Object.create(a) : (n.prototype = a.prototype, new n)
}
}(), o = this & amp; & amp;
this.__assign || function() {
return o = Object.assign || function(e) {
    for (var t, a = 1, n = arguments.length; a & lt; n; a++)
        for (var o in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, o) & amp; & amp;
    (e[o] = t[o]);
    return e
}, o.apply(this, arguments)
};
Object.defineProperty(t, "__esModule", {
value: !0
}), t.cloneNode = t.hasChildren = t.isDocument = t.isDirective = t.isComment = t.isText = t.isCDATA = t.isTag = t.Element = t.Document = t.CDATA = t.NodeWithChildren = t.ProcessingInstruction = t.Comment = t.Text = t.DataNode = t.Node = void 0;
var i = a(99960),
r = function() {
    function e() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null
    }
    return Object.defineProperty(e.prototype, "parentNode", {
        get: function() {
            return this.parent
        },
        set: function(e) {
            this.parent = e
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "previousSibling", {
        get: function() {
            return this.prev
        },
        set: function(e) {
            this.prev = e
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "nextSibling", {
        get: function() {
            return this.next
        },
        set: function(e) {
            this.next = e
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.cloneNode = function(e) {
        return void 0 === e & amp; & amp;
        (e = !1), N(this, e)
    }, e
}();
t.Node = r;
var u = function(e) {
function t(t) {
    var a = e.call(this) || this;
    return a.data = t, a
}
return n(t, e), Object.defineProperty(t.prototype, "nodeValue", {
    get: function() {
        return this.data
    },
    set: function(e) {
        this.data = e
    },
    enumerable: !1,
    configurable: !0
}), t
}(r);
t.DataNode = u;
var d = function(e) {
function t() {
    var t = null !== e & amp; & amp;
    e.apply(this, arguments) || this;
    return t.type = i.ElementType.Text, t
}
return n(t, e), Object.defineProperty(t.prototype, "nodeType", {
    get: function() {
        return 3
    },
    enumerable: !1,
    configurable: !0
}), t
}(u);
t.Text = d;
var s = function(e) {
function t() {
    var t = null !== e & amp; & amp;
    e.apply(this, arguments) || this;
    return t.type = i.ElementType.Comment, t
}
return n(t, e), Object.defineProperty(t.prototype, "nodeType", {
    get: function() {
        return 8
    },
    enumerable: !1,
    configurable: !0
}), t
}(u);
t.Comment = s;
var l = function(e) {
function t(t, a) {
    var n = e.call(this, a) || this;
    return n.name = t, n.type = i.ElementType.Directive, n
}
return n(t, e), Object.defineProperty(t.prototype, "nodeType", {
    get: function() {
        return 1
    },
    enumerable: !1,
    configurable: !0
}), t
}(u);
t.ProcessingInstruction = l;
var g = function(e) {
function t(t) {
    var a = e.call(this) || this;
    return a.children = t, a
}
return n(t, e), Object.defineProperty(t.prototype, "firstChild", {
    get: function() {
        var e;
        return null !== (e = this.children[0]) & amp; & amp;
        void 0 !== e ? e : null
    },
    enumerable: !1,
    configurable: !0
}), Object.defineProperty(t.prototype, "lastChild", {
    get: function() {
        return this.children.length & gt;
        0 ? this.children[this.children.length - 1] : null
    },
    enumerable: !1,
    configurable: !0
}), Object.defineProperty(t.prototype, "childNodes", {
    get: function() {
        return this.children
    },
    set: function(e) {
        this.children = e
    },
    enumerable: !1,
    configurable: !0
}), t
}(r);
t.NodeWithChildren = g;
var m = function(e) {
function t() {
    var t = null !== e & amp; & amp;
    e.apply(this, arguments) || this;
    return t.type = i.ElementType.CDATA, t
}
return n(t, e), Object.defineProperty(t.prototype, "nodeType", {
    get: function() {
        return 4
    },
    enumerable: !1,
    configurable: !0
}), t
}(g);
t.CDATA = m;
var p = function(e) {
function t() {
    var t = null !== e & amp; & amp;
    e.apply(this, arguments) || this;
    return t.type = i.ElementType.Root, t
}
return n(t, e), Object.defineProperty(t.prototype, "nodeType", {
    get: function() {
        return 9
    },
    enumerable: !1,
    configurable: !0
}), t
}(g);
t.Document = p;
var c = function(e) {
function t(t, a, n, o) {
    void 0 === n & amp; & amp;
    (n = []), void 0 === o & amp; & amp;
    (o = "script" === t ? i.ElementType.Script : "style" === t ? i.ElementType.Style : i.ElementType.Tag);
    var r = e.call(this, n) || this;
    return r.name = t, r.attribs = a, r.type = o, r
}
return n(t, e), Object.defineProperty(t.prototype, "nodeType", {
    get: function() {
        return 1
    },
    enumerable: !1,
    configurable: !0
}), Object.defineProperty(t.prototype, "tagName", {
    get: function() {
        return this.name
    },
    set: function(e) {
        this.name = e
    },
    enumerable: !1,
    configurable: !0
}), Object.defineProperty(t.prototype, "attributes", {
    get: function() {
        var e = this;
        return Object.keys(this.attribs).map((function(t) {
            var a, n;
            return {
                name: t,
                value: e.attribs[t],
                namespace: null === (a = e["x-attribsNamespace"]) || void 0 === a ? void 0 : a[t],
                prefix: null === (n = e["x-attribsPrefix"]) || void 0 === n ? void 0 : n[t]
            }
        }))
    },
    enumerable: !1,
    configurable: !0
}), t
}(g);

function h(e) {
return (0, i.isTag)(e)
}

function f(e) {
return e.type === i.ElementType.CDATA
}

function y(e) {
return e.type === i.ElementType.Text
}

function b(e) {
return e.type === i.ElementType.Comment
}

function E(e) {
return e.type === i.ElementType.Directive
}

function v(e) {
return e.type === i.ElementType.Root
}

function N(e, t) {
var a;
if (void 0 === t & amp; & amp;
    (t = !1), y(e)) a = new d(e.data);
else if (b(e)) a = new s(e.data);
else if (h(e)) {
    var n = t ? M(e.children) : [],
        i = new c(e.name, o({}, e.attribs), n);
    n.forEach((function(e) {
        return e.parent = i
    })), null != e.namespace & amp; & amp;
    (i.namespace = e.namespace), e["x-attribsNamespace"] & amp; & amp;
    (i["x-attribsNamespace"] = o({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] & amp; & amp;
    (i["x-attribsPrefix"] = o({}, e["x-attribsPrefix"])), a = i
} else if (f(e)) {
    n = t ? M(e.children) : [];
    var r = new m(n);
    n.forEach((function(e) {
        return e.parent = r
    })), a = r
} else if (v(e)) {
    n = t ? M(e.children) : [];
    var u = new p(n);
    n.forEach((function(e) {
        return e.parent = u
    })), e["x-mode"] & amp; & amp;
    (u["x-mode"] = e["x-mode"]), a = u
} else {
    if (!E(e)) throw new Error("Not implemented yet: ".concat(e.type));
    var g = new l(e.name, e.data);
    null != e["x-name"] & amp; & amp;
    (g["x-name"] = e["x-name"], g["x-publicId"] = e["x-publicId"], g["x-systemId"] = e["x-systemId"]), a = g
}
return a.startIndex = e.startIndex, a.endIndex = e.endIndex, null != e.sourceCodeLocation & amp; & amp;
(a.sourceCodeLocation = e.sourceCodeLocation), a
}

function M(e) {
for (var t = e.map((function(e) {
        return N(e, !0)
    })), a = 1; a & lt; t.length; a++) t[a].prev = t[a - 1], t[a - 1].next = t[a];
return t
}
t.Element = c, t.isTag = h, t.isCDATA = f, t.isText = y, t.isComment = b, t.isDirective = E, t.isDocument = v, t.hasChildren = function(e) {
return Object.prototype.hasOwnProperty.call(e, "children")
}, t.cloneNode = N
}, 18139: function(e) {
var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
a = /\n/g,
n = /^\s*/,
o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
i = /^:\s*/,
r = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
u = /^[;\s]*/,
d = /^\s+|\s+$/g,
s = "";

function l(e) {
return e ? e.replace(d, s) : s
}
e.exports = function(e, d) {
if ("string" !== typeof e) throw new TypeError("First argument must be a string");
if (!e) return [];
d = d || {};
var g = 1,
    m = 1;

function p(e) {
    var t = e.match(a);
    t & amp; & amp;
    (g += t.length);
    var n = e.lastIndexOf("\n");
    m = ~n ? e.length - n : m + e.length
}

function c() {
    var e = {
        line: g,
        column: m
    };
    return function(t) {
        return t.position = new h(e), E(), t
    }
}

function h(e) {
    this.start = e, this.end = {
        line: g,
        column: m
    }, this.source = d.source
}
h.prototype.content = e;
var f = [];

function y(t) {
    var a = new Error(d.source + ":" + g + ":" + m + ": " + t);
    if (a.reason = t, a.filename = d.source, a.line = g, a.column = m, a.source = e, !d.silent) throw a;
    f.push(a)
}

function b(t) {
    var a = t.exec(e);
    if (a) {
        var n = a[0];
        return p(n), e = e.slice(n.length), a
    }
}

function E() {
    b(n)
}

function v(e) {
    var t;
    for (e = e || []; t = N();) !1 !== t & amp; & amp;
    e.push(t);
    return e
}

function N() {
    var t = c();
    if ("/" == e.charAt(0) & amp; & amp;
        "*" == e.charAt(1)) {
        for (var a = 2; s != e.charAt(a) & amp; & amp;
            ("*" != e.charAt(a) || "/" != e.charAt(a + 1));) ++a;
        if (a += 2, s === e.charAt(a - 1)) return y("End of comment missing");
        var n = e.slice(2, a - 2);
        return m += 2, p(n), e = e.slice(a), m += 2, t({
            type: "comment",
            comment: n
        })
    }
}

function M() {
    var e = c(),
        a = b(o);
    if (a) {
        if (N(), !b(i)) return y("property missing ':'");
        var n = b(r),
            d = e({
                type: "declaration",
                property: l(a[0].replace(t, s)),
                value: n ? l(n[0].replace(t, s)) : s
            });
        return b(u), d
    }
}
return E(),
    function() {
        var e, t = [];
        for (v(t); e = M();) !1 !== e & amp; & amp;
        (t.push(e), v(t));
        return t
    }()
}
}, 90638: function(e, t, a) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.default = function(e, t) {
let a = i.default,
    o = (null == t ? void 0 : t.suspense) ? {} : {
        loading: e = & gt;
        {
            let {
                error: t,
                isLoading: a,
                pastDelay: n
            } = e;
            return null
        }
    };
e instanceof Promise ? o.loader = () = & gt;
e: "function" === typeof e ? o.loader = e : "object" === typeof e & amp; & amp;
(o = n({}, o, e));
o = n({}, o, t), !1;
o.suspense & amp; & amp;
(delete o.ssr, delete o.loading);
o.loadableGenerated & amp; & amp;
(o = n({}, o, o.loadableGenerated), delete o.loadableGenerated);
if ("boolean" === typeof o.ssr & amp; & amp; !o.suspense) {
    if (!o.ssr) return delete o.ssr, r(a, o);
    delete o.ssr
}
return a(o)
}, t.noSSR = r;
var n = a(6495).Z,
o = a(92648).Z,
i = (o(a(67294)), o(a(14302)));

function r(e, t) {
return delete t.webpack, delete t.modules, e(t)
}("function" === typeof t.default || "object" === typeof t.default & amp; & amp; null !== t.default) & amp; & amp;
"undefined" === typeof t.default.__esModule & amp; & amp;
(Object.defineProperty(t.default, "__esModule", {
value: !0
}), Object.assign(t.default, t), e.exports = t.default)
}, 16319: function(e, t, a) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.LoadableContext = void 0;
const n = (0, a(92648).Z)(a(67294)).default.createContext(null);
t.LoadableContext = n
}, 14302: function(e, t, a) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.default = void 0;
var n = a(6495).Z,
o = (0, a(92648).Z)(a(67294)),
i = a(16319);
const {
useSyncExternalStore: r
} = a(67294), u = [], d = [];
let s = !1;

function l(e) {
let t = e(),
    a = {
        loading: !0,
        loaded: null,
        error: null
    };
return a.promise = t.then((e = & gt;
    (a.loading = !1, a.loaded = e, e))).catch((e = & gt;
{
    throw a.loading = !1, a.error = e, e
})), a
}
class g {
promise() {
    return this._res.promise
}
retry() {
    this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
        pastDelay: !1,
        timedOut: !1
    };
    const {
        _res: e,
        _opts: t
    } = this;
    e.loading & amp; & amp;
    ("number" === typeof t.delay & amp; & amp;
        (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout((() = & gt;
        {
            this._update({
                pastDelay: !0
            })
        }), t.delay)), "number" === typeof t.timeout & amp; & amp;
        (this._timeout = setTimeout((() = & gt;
        {
            this._update({
                timedOut: !0
            })
        }), t.timeout))), this._res.promise.then((() = & gt;
    {
        this._update({}), this._clearTimeouts()
    })).catch((e = & gt;
    {
        this._update({}), this._clearTimeouts()
    })), this._update({})
}
_update(e) {
    this._state = n({}, this._state, {
        error: this._res.error,
        loaded: this._res.loaded,
        loading: this._res.loading
    }, e), this._callbacks.forEach((e = & gt; e()))
}
_clearTimeouts() {
    clearTimeout(this._delay), clearTimeout(this._timeout)
}
getCurrentValue() {
    return this._state
}
subscribe(e) {
    return this._callbacks.add(e), () = & gt;
    {
        this._callbacks.delete(e)
    }
}
constructor(e, t) {
    this._loadFn = e, this._opts = t, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
}
}

function m(e) {
return function(e, t) {
    let a = Object.assign({
        loader: null,
        loading: null,
        delay: 200,
        timeout: null,
        webpack: null,
        modules: null,
        suspense: !1
    }, t);
    a.suspense & amp; & amp;
    (a.lazy = o.default.lazy(a.loader));
    let u = null;

    function l() {
        if (!u) {
            const t = new g(e, a);
            u = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t)
            }
        }
        return u.promise()
    }
    if (!s) {
        const e = a.webpack ? a.webpack() : a.modules;
        e & amp; & amp;
        d.push((t = & gt;
        {
            for (const a of e)
                if (-1 !== t.indexOf(a)) return l()
        }))
    }

    function m() {
        l();
        const e = o.default.useContext(i.LoadableContext);
        e & amp; & amp;
        Array.isArray(a.modules) & amp; & amp;
        a.modules.forEach((t = & gt;
        {
            e(t)
        }))
    }
    const p = a.suspense ? function(e, t) {
        return m(), o.default.createElement(a.lazy, n({}, e, {
            ref: t
        }))
    } : function(e, t) {
        m();
        const n = r(u.subscribe, u.getCurrentValue, u.getCurrentValue);
        return o.default.useImperativeHandle(t, (() = & gt;
            ({
                retry: u.retry
            })), []), o.default.useMemo((() = & gt;
        {
            return n.loading || n.error ? o.default.createElement(a.loading, {
                isLoading: n.loading,
                pastDelay: n.pastDelay,
                timedOut: n.timedOut,
                error: n.error,
                retry: u.retry
            }) : n.loaded ? o.default.createElement((t = n.loaded) & amp; & amp; t.__esModule ? t.default : t, e) : null;
            var t
        }), [e, n])
    };
    return p.preload = () = & gt;
    l(), p.displayName = "LoadableComponent", o.default.forwardRef(p)
}(l, e)
}

function p(e, t) {
let a = [];
for (; e.length;) {
    let n = e.pop();
    a.push(n(t))
}
return Promise.all(a).then((() = & gt;
{
    if (e.length) return p(e, t)
}))
}
m.preloadAll = () = & gt;
new Promise(((e, t) = & gt;
{
p(u).then(e, t)
})), m.preloadReady = function() {
let e = arguments.length & gt;
0 & amp; & amp;
void 0 !== arguments[0] ? arguments[0] : [];
return new Promise((t = & gt;
{
    const a = () = & gt;
    (s = !0, t());
    p(d, e).then(a, a)
}))
}, window.__NEXT_PRELOADREADY = m.preloadReady;
var c = m;
t.default = c
}, 10268: function(e, t, a) {
"use strict";
a.d(t, {
$: function() {
    return d
}
});
var n = a(67294),
o = a(94184),
i = a.n(o),
r = a(47578),
u = a.n(r);
const d = e = & gt;
{
const {
    appearance: t,
    color: a,
    size: o = 16
} = e, r = !t & amp; & amp;
!a;
return n.createElement("svg", {
    width: "".concat(o, "px"),
    height: "".concat(o, "px"),
    viewBox: "0 0 150 150",
    className: u().wrapper
}, n.createElement("circle", {
    r: "60",
    cx: "75",
    cy: "75",
    fill: "none",
    strokeWidth: 12,
    strokeDasharray: 300,
    strokeDashoffset: 600,
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    stroke: t ? "inherit" : a,
    className: i()(u().line, {
        [u()["appearance-default"]]: r,
        [u()["appearance-".concat(t)]]: t
    })
}))
}
}, 12401: function(e, t, a) {
"use strict";
a.d(t, {
b: function() {
    return _
}
});
var n = {};
a.r(n), a.d(n, {
daDK: function() {
    return i
},
deAT: function() {
    return r
},
deCH: function() {
    return u
},
deDE: function() {
    return d
},
enCA: function() {
    return s
},
enGB: function() {
    return l
},
enIE: function() {
    return g
},
enNZ: function() {
    return m
},
enUS: function() {
    return p
},
esES: function() {
    return c
},
fiFI: function() {
    return h
},
frBE: function() {
    return f
},
frFR: function() {
    return f
},
itIT: function() {
    return y
},
jaJP: function() {
    return b
},
nbNO: function() {
    return E
},
nlBE: function() {
    return v
},
nlNL: function() {
    return N
},
plPL: function() {
    return M
},
ptBR: function() {
    return R
},
ptPT: function() {
    return U
},
ruRU: function() {
    return w
},
svSE: function() {
    return T
}
});
var o = a(67294),
i = JSON.parse('{"time-ago/date":"[DATE]","time-ago/days/one":"For 1 dag siden","time-ago/days/many":"For [NUMBER] dage siden","time-ago/hours/one":"For 1 time siden","time-ago/hours/many":"For [NUMBER] timer siden","time-ago/minutes/one":"For 1 minut siden","time-ago/minutes/many":"For [NUMBER] minutter siden","time-ago/just-now":"Lige nu","time-ago/published/date":"Offentliggjort den [DATE]","time-ago/published/days/one":"Offentliggjort for 1 dag siden","time-ago/published/days/many":"Offentliggjort for [NUMBER] dage siden","time-ago/published/hours/one":"Offentliggjort for 1 time siden","time-ago/published/hours/many":"Offentliggjort for [NUMBER] timer siden","time-ago/published/minutes/one":"Offentliggjort for 1 minut siden","time-ago/published/minutes/many":"Offentliggjort for [NUMBER] minutter siden","time-ago/published/just-now":"Offentliggjort lige nu","time-ago/flagged/date":"Rapporteret den [DATE]","time-ago/flagged/days/one":"Rapporteret for 1 dag siden","time-ago/flagged/days/many":"Rapporteret for [NUMBER] dage siden","time-ago/flagged/hours/one":"Rapporteret for 1 time siden","time-ago/flagged/hours/many":"Rapporteret for [NUMBER] timer siden","time-ago/flagged/minutes/one":"Rapporteret for 1 minut siden","time-ago/flagged/minutes/many":"Rapporteret for [NUMBER] minutter siden","time-ago/flagged/just-now":"Rapporteret lige nu","time-ago/updated/date":"Opdateret den [DATE]","time-ago/updated/days/one":"Opdateret for 1 dag siden","time-ago/updated/days/many":"Opdateret for [NUMBER] dage siden","time-ago/updated/hours/one":"Opdateret for 1 time siden","time-ago/updated/hours/many":"Opdateret for [NUMBER] timer siden","time-ago/updated/minutes/one":"Opdateret for 1 minut siden","time-ago/updated/minutes/many":"Opdateret for [NUMBER] minutter siden","time-ago/updated/just-now":"Opdateret lige nu"}'),
r = JSON.parse('{"time-ago/date":"[DATE]","time-ago/days/one":"Vor 1 Tag","time-ago/days/many":"Vor [NUMBER] Tagen","time-ago/hours/one":"Vor 1 Stunde","time-ago/hours/many":"Vor [NUMBER] Stunden","time-ago/minutes/one":"Vor 1 Minute","time-ago/minutes/many":"Vor [NUMBER] Minuten","time-ago/just-now":"Gerade eben","time-ago/published/date":"Ver\xf6ffentlicht am [DATE]","time-ago/published/days/one":"Ver\xf6ffentlicht vor 1 Tag","time-ago/published/days/many":"Ver\xf6ffentlicht vor [NUMBER] Tagen","time-ago/published/hours/one":"Ver\xf6ffentlicht vor 1 Stunde","time-ago/published/hours/many":"Ver\xf6ffentlicht vor [NUMBER] Stunden","time-ago/published/minutes/one":"Ver\xf6ffentlicht vor 1 Minute","time-ago/published/minutes/many":"Ver\xf6ffentlicht vor [NUMBER] Minuten","time-ago/published/just-now":"Gerade eben ver\xf6ffentlicht","time-ago/flagged/date":"Gemeldet am [DATE]","time-ago/flagged/days/one":"Gemeldet vor 1 Tag","time-ago/flagged/days/many":"Gemeldet vor [NUMBER] Tagen","time-ago/flagged/hours/one":"Gemeldet vor 1 Stunde","time-ago/flagged/hours/many":"Gemeldet vor [NUMBER] Stunden","time-ago/flagged/minutes/one":"Gemeldet vor 1 Minute","time-ago/flagged/minutes/many":"Gemeldet vor [NUMBER] Minuten","time-ago/flagged/just-now":"Gerade eben gemeldet","time-ago/updated/date":"Aktualisiert am [DATE]","time-ago/updated/days/one":"Aktualisiert vor 1 Tag","time-ago/updated/days/many":"Aktualisiert vor [NUMBER] Tagen","time-ago/updated/hours/one":"Aktualisiert vor 1 Stunde","time-ago/updated/hours/many":"Aktualisiert vor [NUMBER] Stunden","time-ago/updated/minutes/one":"Aktualisiert vor 1 Minute","time-ago/updated/minutes/many":"Aktualisiert vor [NUMBER] Minuten","time-ago/updated/just-now":"Gerade eben aktualisiert"}'),
u = JSON.parse('{"time-ago/date":"[DATE]","time-ago/days/one":"Vor 1 Tag","time-ago/days/many":"Vor [NUMBER] Tagen","time-ago/hours/one":"Vor 1 Stunde","time-ago/hours/many":"Vor [NUMBER] Stunden","time-ago/minutes/one":"Vor 1 Minute","time-ago/minutes/many":"Vor [NUMBER] Minuten","time-ago/just-now":"Gerade eben","time-ago/published/date":"Ver\xf6ffentlicht am [DATE]","time-ago/published/days/one":"Ver\xf6ffentlicht vor 1 Tag","time-ago/published/days/many":"Ver\xf6ffentlicht vor [NUMBER] Tagen","time-ago/published/hours/one":"Ver\xf6ffentlicht vor 1 Stunde","time-ago/published/hours/many":"Ver\xf6ffentlicht vor [NUMBER] Stunden","time-ago/published/minutes/one":"Ver\xf6ffentlicht vor 1 Minute","time-ago/published/minutes/many":"Ver\xf6ffentlicht vor [NUMBER] Minuten","time-ago/published/just-now":"Gerade eben ver\xf6ffentlicht","time-ago/flagged/date":"Gemeldet am [DATE]","time-ago/flagged/days/one":"Gemeldet vor 1 Tag","time-ago/flagged/days/many":"Gemeldet vor [NUMBER] Tagen","time-ago/flagged/hours/one":"Gemeldet vor 1 Stunde","time-ago/flagged/hours/many":"Gemeldet vor [NUMBER] Stunden","time-ago/flagged/minutes/one":"Gemeldet vor 1 Minute","time-ago/flagged/minutes/many":"Gemeldet vor [NUMBER] Minuten","time-ago/flagged/just-now":"Gerade eben gemeldet","time-ago/updated/date":"Aktualisiert am [DATE]","time-ago/updated/days/one":"Aktualisiert vor 1 Tag","time-ago/updated/days/many":"Aktualisiert vor [NUMBER] Tagen","time-ago/updated/hours/one":"Aktualisiert vor 1 Stunde","time-ago/updated/hours/many":"Aktualisiert vor [NUMBER] Stunden","time-ago/updated/minutes/one":"Aktualisiert vor 1 Minute","time-ago/updated/minutes/many":"Aktualisiert vor [NUMBER] Minuten","time-ago/updated/just-now":"Gerade eben aktualisiert"}'),
d = JSON.parse('{"time-ago/date":"[DATE]","time-ago/days/one":"Vor 1 Tag","time-ago/days/many":"Vor [NUMBER] Tagen","time-ago/hours/one":"Vor 1 Stunde","time-ago/hours/many":"Vor [NUMBER] Stunden","time-ago/minutes/one":"Vor 1 Minute","time-ago/minutes/many":"Vor [NUMBER] Minuten","time-ago/just-now":"Gerade eben","time-ago/published/date":"Ver\xf6ffentlicht am [DATE]","time-ago/published/days/one":"Ver\xf6ffentlicht vor 1 Tag","time-ago/published/days/many":"Ver\xf6ffentlicht vor [NUMBER] Tagen","time-ago/published/hours/one":"Ver\xf6ffentlicht vor 1 Stunde","time-ago/published/hours/many":"Ver\xf6ffentlicht vor [NUMBER] Stunden","time-ago/published/minutes/one":"Ver\xf6ffentlicht vor 1 Minute","time-ago/published/minutes/many":"Ver\xf6ffentlicht vor [NUMBER] Minuten","time-ago/published/just-now":"Gerade eben ver\xf6ffentlicht","time-ago/flagged/date":"Gemeldet am [DATE]","time-ago/flagged/days/one":"Gemeldet vor 1 Tag","time-ago/flagged/days/many":"Gemeldet vor [NUMBER] Tagen","time-ago/flagged/hours/one":"Gemeldet vor 1 Stunde","time-ago/flagged/hours/many":"Gemeldet vor [NUMBER] Stunden","time-ago/flagged/minutes/one":"Gemeldet vor 1 Minute","time-ago/flagged/minutes/many":"Gemeldet vor [NUMBER] Minuten","time-ago/flagged/just-now":"Gerade eben gemeldet","time-ago/updated/date":"Aktualisiert am [DATE]","time-ago/updated/days/one":"Aktualisiert vor 1 Tag","time-ago/updated/days/many":"Aktualisiert vor [NUMBER] Tagen","time-ago/updated/hours/one":"Aktualisiert vor 1 Stunde","time-ago/updated/hours/many":"Aktualisiert vor [NUMBER] Stunden","time-ago/updated/minutes/one":"Aktualisiert vor 1 Minute","time-ago/updated/minutes/many":"Aktualisiert vor [NUMBER] Minuten","time-ago/updated/just-now":"Gerade eben aktualisiert"}'),
s = JSON.parse('{"time-ago/date":"[DATE]","time-ago/days/one":"A day ago","time-ago/days/many":"[NUMBER] days ago","time-ago/hours/one":"An hour ago","time-ago/hours/many":"[NUMBER] hours ago","time-ago/minutes/one":"A minute ago","time-ago/minutes/many":"[NUMBER] minutes ago","time-ago/just-now":"Just now","time-ago/published/date":"Published [DATE]","time-ago/published/days/one":"Published a day ago","time-ago/published/days/many":"Published [NUMBER] days ago","time-ago/published/hours/one":"Published an hour ago","time-ago/published/hours/many":"Published [NUMBER] hours ago","time-ago/published/minutes/one":"Published a minute ago","time-ago/published/minutes/many":"Published [NUMBER] minutes ago","time-ago/published/just-now":"Published just now","time-ago/flagged/date":"Flagged [DATE]","time-ago/flagged/days/one":"Flagged a day ago","time-ago/flagged/days/many":"Flagged [NUMBER] days ago","time-ago/flagged/hours/one":"Flagged an hour ago","time-ago/flagged/hours/many":"Flagged [NUMBER] hours ago","time-ago/flagged/minutes/one":"Flagged a minute ago","time-ago/flagged/minutes/many":"Flagged [NUMBER] minutes ago","time-ago/flagged/just-now":"Flagged just now","time-ago/updated/date":"Updated [DATE]","time-ago/updated/days/one":"Updated a day ago","time-ago/updated/days/many":"Updated [NUMBER] days ago","time-ago/updated/hours/one":"Updated an hour ago","time-ago/updated/hours/many":"Updated [NUMBER] hours ago","time-ago/updated/minutes/one":"Updated a minute ago","time-ago/updated/minutes/many":"Updated [NUMBER] minutes ago","time-ago/updated/just-now":"Updated just now"}'),
l = JSON.parse('{"time-ago/date":"[DATE]","time-ago/days/one":"A day ago","time-ago/days/many":"[NUMBER] days ago","time-ago/hours/one":"An hour ago","time-ago/hours/many":"[NUMBER] hours ago","time-ago/minutes/one":"A minute ago","time-ago/minutes/many":"[NUMBER] minutes ago","time-ago/just-now":"Just now","time-ago/published/date":"Published [DATE]","time-ago/published/days/one":"Published a day ago","time-ago/published/days/many":"Published [NUMBER] days ago","time-ago/published/hours/one":"Published an hour ago","time-ago/published/hours/many":"Published [NUMBER] hours ago","time-ago/published/minutes/one":"Published a minute ago","time-ago/published/minutes/many":"Published [NUMBER] minutes ago","time-ago/published/just-now":"Published just now","time-ago/flagged/date":"Flagged [DATE]","time-ago/flagged/days/one":"Flagged a day ago","time-ago/flagged/days/many":"Flagged [NUMBER] days ago","time-ago/flagged/hours/one":"Flagged an hour ago","time-ago/flagged/hours/many":"Flagged [NUMBER] hours ago","time-ago/flagged/minutes/one":"Flagged a minute ago","time-ago/flagged/minutes/many":"Flagged [NUMBER] minutes ago","time-ago/flagged/just-now":"Flagged just now","time-ago/updated/date":"Updated [DATE]","time-ago/updated/days/one":"Updated a day ago","time-ago/updated/days/many":"Updated [NUMBER] days ago","time-ago/updated/hours/one":"Updated an hour ago","time-ago/updated/hours/many":"Updated [NUMBER] hours ago","time-ago/updated/minutes/one":"Updated a minute ago","time-ago/updated/minutes/many":"Updated [NUMBER] minutes ago","time-ago/updated/just-now":"Updated just now"}'),
g = JSON.parse('{"time-ago/date":"[DATE]","time-ago/days/one":"A day ago","time-ago/days/many":"[NUMBER] days ago","time-ago/hours/one":"An hour ago","time-ago/hours/many":"[NUMBER] hours ago","time-ago/minutes/one":"A minute ago","time-ago/minutes/many":"[NUMBER] minutes ago","time-ago/just-now":"Just now","time-ago/published/date":"Published [DATE]","time-ago/published/days/one":"Published a day ago","time-ago/published/days/many":"Published [NUMBER] days ago","time-ago/published/hours/one":"Published an hour ago","time-ago/published/hours/many":"Published [NUMBER] hours ago","time-ago/published/minutes/one":"Published a minute ago","time-ago/published/minutes/many":"Published [NUMBER] minutes ago","time-ago/published/just-now":"Published just now","time-ago/flagged/date":"Flagged [DATE]","time-ago/flagged/days/one":"Flagged a day ago","time-ago/flagged/days/many":"Flagged [NUMBER] days ago","time-ago/flagged/hours/one":"Flagged an hour ago","time-ago/flagged/hours/many":"Flagged [NUMBER] hours ago","time-ago/flagged/minutes/one":"Flagged a minute ago","time-ago/flagged/minutes/many":"Flagged [NUMBER] minutes ago","time-ago/flagged/just-now":"Flagged just now","time-ago/updated/date":"Updated [DATE]","time-ago/updated/days/one":"Updated a day ago","time-ago/updated/days/many":"Updated [NUMBER] days ago","time-ago/updated/hours/one":"Updated an hour ago","time-ago/updated/hours/many":"Updated [NUMBER] hours ago","time-ago/updated/minutes/one":"Updated a minute ago","time-ago/updated/minutes/many":"Updated [NUMBER] minutes ago","time-ago/updated/just-now":"Updated just now"}'),
m = JSON.parse('{"time-ago/date":"[DATE]","time-ago/days/one":"A day ago","time-ago/days/many":"[NUMBER] days ago","time-ago/hours/one":"An hour ago","time-ago/hours/many":"[NUMBER] hours ago","time-ago/minutes/one":"A minute ago","time-ago/minutes/many":"[NUMBER] minutes ago","time-ago/just-now":"Just now","time-ago/published/date":"Published [DATE]","time-ago/published/days/one":"Published a day ago","time-ago/published/days/many":"Published [NUMBER] days ago","time-ago/published/hours/one":"Published an hour ago","time-ago/published/hours/many":"Published [NUMBER] hours ago","time-ago/published/minutes/one":"Published a minute ago","time-ago/published/minutes/many":"Published [NUMBER] minutes ago","time-ago/published/just-now":"Published just now","time-ago/flagged/date":"Flagged [DATE]","time-ago/flagged/days/one":"Flagged a day ago","time-ago/flagged/days/many":"Flagged [NUMBER] days ago","time-ago/flagged/hours/one":"Flagged an hour ago","time-ago/flagged/hours/many":"Flagged [NUMBER] hours ago","time-ago/flagged/minutes/one":"Flagged a minute ago","time-ago/flagged/minutes/many":"Flagged [NUMBER] minutes ago","time-ago/flagged/just-now":"Flagged just now","time-ago/updated/date":"Updated [DATE]","time-ago/updated/days/one":"Updated a day ago","time-ago/updated/days/many":"Updated [NUMBER] days ago","time-ago/updated/hours/one":"Updated an hour ago","time-ago/updated/hours/many":"Updated [NUMBER] hours ago","time-ago/updated/minutes/one":"Updated a minute ago","time-ago/updated/minutes/many":"Updated [NUMBER] minutes ago","time-ago/updated/just-now":"Updated just now"}'),
p = JSON.parse('{"time-ago/date":"[DATE]","time-ago/days/one":"A day ago","time-ago/days/many":"[NUMBER] days ago","time-ago/hours/one":"An hour ago","time-ago/hours/many":"[NUMBER] hours ago","time-ago/minutes/one":"A minute ago","time-ago/minutes/many":"[NUMBER] minutes ago","time-ago/just-now":"Just now","time-ago/published/date":"Published [DATE]","time-ago/published/days/one":"Published a day ago","time-ago/published/days/many":"Published [NUMBER] days ago","time-ago/published/hours/one":"Published an hour ago","time-ago/published/hours/many":"Published [NUMBER] hours ago","time-ago/published/minutes/one":"Published a minute ago","time-ago/published/minutes/many":"Published [NUMBER] minutes ago","time-ago/published/just-now":"Published just now","time-ago/flagged/date":"Flagged [DATE]","time-ago/flagged/days/one":"Flagged a day ago","time-ago/flagged/days/many":"Flagged [NUMBER] days ago","time-ago/flagged/hours/one":"Flagged an hour ago","time-ago/flagged/hours/many":"Flagged [NUMBER] hours ago","time-ago/flagged/minutes/one":"Flagged a minute ago","time-ago/flagged/minutes/many":"Flagged [NUMBER] minutes ago","time-ago/flagged/just-now":"Flagged just now","time-ago/updated/date":"Updated [DATE]","time-ago/updated/days/one":"Updated a day ago","time-ago/updated/days/many":"Updated [NUMBER] days ago","time-ago/updated/hours/one":"Updated an hour ago","time-ago/updated/hours/many":"Updated [NUMBER] hours ago","time-ago/updated/minutes/one":"Updated a minute ago","time-ago/updated/minutes/many":"Updated [NUMBER] minutes ago","time-ago/updated/just-now":"Updated just now"}'),
c = JSON.parse('{"time-ago/date":"[DATE]","time-ago/days/one":"Hace un d\xeda","time-ago/days/many":"Hace [NUMBER] d\xedas","time-ago/hours/one":"Hace una hora","time-ago/hours/many":"Hace [NUMBER] horas","time-ago/minutes/one":"Hace un minuto","time-ago/minutes/many":"Hace [NUMBER] minutos","time-ago/just-now":"Ahora mismo","time-ago/published/date":"Publicada el [DATE]","time-ago/published/days/one":"Publicada hace un d\xeda","time-ago/published/days/many":"Publicada hace [NUMBER] d\xedas","time-ago/published/hours/one":"Publicada hace una hora","time-ago/published/hours/many":"Publicada hace [NUMBER] horas","time-ago/published/minutes/one":"Publicada hace un minuto","time-ago/published/minutes/many":"Publicada hace [NUMBER] minutos","time-ago/published/just-now":"Acaba de ser publicada","time-ago/flagged/date":"Fecha de la denuncia: [DATE]","time-ago/flagged/days/one":"Denunciada hace 1 d\xeda","time-ago/flagged/days/many":"Denunciada hace [NUMBER] d\xedas","time-ago/flagged/hours/one":"Denunciada hace 1 hora","time-ago/flagged/hours/many":"Denunciada hace [NUMBER] horas","time-ago/flagged/minutes/one":"Denunciada hace 1 minuto","time-ago/flagged/minutes/many":"Denunciada hace [NUMBER] minutos","time-ago/flagged/just-now":"Acaba de ser denunciada","time-ago/updated/date":"Actualizada el [DATE]","time-ago/updated/days/one":"Actualizada hace un d\xeda","time-ago/updated/days/many":"Actualizada hace [NUMBER] d\xedas","time-ago/updated/hours/one":"Actualizada hace una hora","time-ago/updated/hours/many":"Actualizada hace [NUMBER] horas","time-ago/updated/minutes/one":"Actualizada hace un minuto","time-ago/updated/minutes/many":"Actualizada hace [NUMBER] minutos","time-ago/updated/just-now":"Acaba de ser actualizada"}'),
h = JSON.parse('{"time-ago/date":"[DATE]","time-ago/days/one":"1 p\xe4iv\xe4 sitten","time-ago/days/many":"[NUMBER] p\xe4iv\xe4\xe4 sitten","time-ago/hours/one":"Tunti sitten","time-ago/hours/many":"[NUMBER] tuntia sitten","time-ago/minutes/one":"Minuutti sitten","time-ago/minutes/many":"[NUMBER] minuuttia sitten","time-ago/just-now":"Hetki sitten","time-ago/published/date":"Julkaistu [DATE]","time-ago/published/days/one":"Julkaistu 1 p\xe4iv\xe4 sitten","time-ago/published/days/many":"Julkaistu [NUMBER] p\xe4iv\xe4\xe4 sitten","time-ago/published/hours/one":"Julkaistu tunti sitten","time-ago/published/hours/many":"Julkaistu [NUMBER] tuntia sitten","time-ago/published/minutes/one":"Julkaistu 1 minuutti sitten","time-ago/published/minutes/many":"Julkaistu [NUMBER] minuuttia sitten","time-ago/published/just-now":"Julkaistu hetki sitten","time-ago/flagged/date":"Ilmiannettu [DATE]","time-ago/flagged/days/one":"Ilmiannettu 1 p\xe4iv\xe4 sitten","time-ago/flagged/days/many":"Ilmiannettu [NUMBER] p\xe4iv\xe4\xe4 sitten","time-ago/flagged/hours/one":"Ilmiannettu tunti sitten","time-ago/flagged/hours/many":"Ilmiannettu [NUMBER] tuntia sitten","time-ago/flagged/minutes/one":"Ilmiannettu minuutti sitten","time-ago/flagged/minutes/many":"Ilmiannettu [NUMBER] minuuttia sitten","time-ago/flagged/just-now":"Ilmiannettu hetki sitten","time-ago/updated/date":"P\xe4ivitetty [DATE]","time-ago/updated/days/one":"P\xe4ivitetty 1 p\xe4iv\xe4 sitten","time-ago/updated/days/many":"P\xe4ivitetty [NUMBER] p\xe4iv\xe4\xe4 sitten","time-ago/updated/hours/one":"P\xe4ivitetty tunti sitten","time-ago/updated/hours/many":"P\xe4ivitetty [NUMBER] tuntia sitten","time-ago/updated/minutes/one":"P\xe4ivitetty 1 minuutti sitten","time-ago/updated/minutes/many":"P\xe4ivitetty [NUMBER] minuuttia sitten","time-ago/updated/just-now":"P\xe4ivitetty hetki sitten"}'),
f = JSON.parse('{"time-ago/date":"[DATE]","time-ago/days/one":"Il y a un jour","time-ago/days/many":"ll y a [NUMBER] jours","time-ago/hours/one":"Il y a une heure","time-ago/hours/many":"Il y a [NUMBER] heures","time-ago/minutes/one":"Il y a une minute","time-ago/minutes/many":"Il y a [NUMBER] minutes","time-ago/just-now":"\xc0 l\'instant","time-ago/published/date":"Publi\xe9 le [DATE]","time-ago/published/days/one":"Publi\xe9 il y a un jour","time-ago/published/days/many":"Publi\xe9 il y a [NUMBER] jours","time-ago/published/hours/one":"Publi\xe9 il y a une heure","time-ago/published/hours/many":"Publi\xe9 il y a [NUMBER] heures","time-ago/published/minutes/one":"Publi\xe9 il y a une minute","time-ago/published/minutes/many":"Publi\xe9 il y a [NUMBER] minutes","time-ago/published/just-now":"Publi\xe9 \xe0 l\'instant","time-ago/flagged/date":"Signal\xe9 le [DATE]","time-ago/flagged/days/one":"Signal\xe9 il y a 1 jour","time-ago/flagged/days/many":"Signal\xe9 il y a [NUMBER] jours","time-ago/flagged/hours/one":"Signal\xe9 il y a 1 heure","time-ago/flagged/hours/many":"Signal\xe9 il y a [NUMBER] heures","time-ago/flagged/minutes/one":"Signal\xe9 il y a 1 minute","time-ago/flagged/minutes/many":"Signal\xe9 il y a [NUMBER] minutes","time-ago/flagged/just-now":"Signal\xe9 \xe0 l\'instant","time-ago/updated/date":"Actualis\xe9 le [DATE]","time-ago/updated/days/one":"Actualis\xe9 il y a un jour","time-ago/updated/days/many":"Actualis\xe9 il y a [NUMBER] jours","time-ago/updated/hours/one":"Actualis\xe9 il y a une heure","time-ago/updated/hours/many":"Actualis\xe9 il y a [NUMBER] heures","time-ago/updated/minutes/one":"Actualis\xe9 il y a une minute","time-ago/updated/minutes/many":"Actualis\xe9 il y a [NUMBER] minutes","time-ago/updated/just-now":"Actualis\xe9 \xe0 l\'instant"}'),
y = JSON.parse('{"time-ago/date":"[DATE]","time-ago/days/one":"Un giorno fa","time-ago/days/many":"[NUMBER] giorni fa","time-ago/hours/one":"Un\'ora fa","time-ago/hours/many":"[NUMBER] ore fa","time-ago/minutes/one":"Un minuto fa","time-ago/minutes/many":"[NUMBER] minuti fa","time-ago/just-now":"Qualche istante fa","time-ago/published/date":"Pubblicata il [DATE]","time-ago/published/days/one":"Pubblicata un giorno fa","time-ago/published/days/many":"Pubblicata [NUMBER] giorni fa","time-ago/published/hours/one":"Pubblicata un\'ora fa","time-ago/published/hours/many":"Pubblicata [NUMBER] ore fa","time-ago/published/minutes/one":"Pubblicata un minuto fa","time-ago/published/minutes/many":"Pubblicata [NUMBER] minuti fa","time-ago/published/just-now":"Pubblicata qualche istante fa","time-ago/flagged/date":"Segnalata il [DATE]","time-ago/flagged/days/one":"Segnalata un giorno fa","time-ago/flagged/days/many":"Segnalata [NUMBER] giorni fa","time-ago/flagged/hours/one":"Segnalata un\'ora fa","time-ago/flagged/hours/many":"Segnalata [NUMBER] ore fa","time-ago/flagged/minutes/one":"Segnalata un minuto fa","time-ago/flagged/minutes/many":"Segnalata [NUMBER] minuti fa","time-ago/flagged/just-now":"Segnalata qualche istante fa","time-ago/updated/date":"Aggiornata il [DATE]","time-ago/updated/days/one":"Aggiornata un giorno fa","time-ago/updated/days/many":"Aggiornata [NUMBER] giorni fa","time-ago/updated/hours/one":"Aggiornata un\'ora fa","time-ago/updated/hours/many":"Aggiornata [NUMBER] ore fa","time-ago/updated/minutes/one":"Aggiornata un minuto fa","time-ago/updated/minutes/many":"Aggiornata [NUMBER] minuti fa","time-ago/updated/just-now":"Aggiornata qualche istante fa"}'),
b = JSON.parse('{"time-ago/date":"[DATE]","time-ago/days/one":"1\u65e5\u524d","time-ago/days/many":"[NUMBER]\u65e5\u524d","time-ago/hours/one":"1\u6642\u9593\u524d","time-ago/hours/many":"[NUMBER]\u6642\u9593\u524d","time-ago/minutes/one":"1\u5206\u524d","time-ago/minutes/many":"[NUMBER]\u5206\u524d","time-ago/just-now":"\u305f\u3063\u305f\u4eca","time-ago/published/date":"[DATE] \u306b\u516c\u958b","time-ago/published/days/one":"1\u65e5\u524d\u306b\u516c\u958b","time-ago/published/days/many":"[NUMBER]\u65e5\u524d\u306b\u516c\u958b","time-ago/published/hours/one":"1\u6642\u9593\u524d\u306b\u516c\u958b","time-ago/published/hours/many":"[NUMBER]\u6642\u9593\u524d\u306b\u516c\u958b","time-ago/published/minutes/one":"1\u5206\u524d\u306b\u516c\u958b","time-ago/published/minutes/many":"[NUMBER]\u5206\u524d\u306b\u516c\u958b","time-ago/published/just-now":"\u305f\u3063\u305f\u4eca \u516c\u958b","time-ago/flagged/date":"[DATE] \u306b\u30d5\u30e9\u30b0\u7acb\u3066","time-ago/flagged/days/one":"1\u65e5\u524d\u306b\u30d5\u30e9\u30b0\u7acb\u3066","time-ago/flagged/days/many":"[NUMBER]\u65e5\u524d\u306b\u30d5\u30e9\u30b0\u7acb\u3066","time-ago/flagged/hours/one":"1\u6642\u9593\u524d\u306b\u30d5\u30e9\u30b0\u7acb\u3066","time-ago/flagged/hours/many":"[NUMBER]\u6642\u9593\u524d\u306b\u30d5\u30e9\u30b0\u7acb\u3066","time-ago/flagged/minutes/one":"1\u5206\u524d\u306b\u30d5\u30e9\u30b0\u7acb\u3066","time-ago/flagged/minutes/many":"[NUMBER]\u5206\u524d\u306b\u30d5\u30e9\u30b0\u7acb\u3066","time-ago/flagged/just-now":"\u305f\u3063\u305f\u4eca \u30d5\u30e9\u30b0\u7acb\u3066","time-ago/updated/date":"[DATE] \u306b\u66f4\u65b0","time-ago/updated/days/one":"1\u65e5\u524d\u306b\u66f4\u65b0","time-ago/updated/days/many":"[NUMBER]\u65e5\u524d\u306b\u66f4\u65b0","time-ago/updated/hours/one":"1\u6642\u9593\u524d\u306b\u66f4\u65b0","time-ago/updated/hours/many":"[NUMBER]\u6642\u9593\u524d\u306b\u66f4\u65b0","time-ago/updated/minutes/one":"1\u5206\u524d\u306b\u66f4\u65b0","time-ago/updated/minutes/many":"[NUMBER]\u5206\u524d\u306b\u66f4\u65b0","time-ago/updated/just-now":"\u305f\u3063\u305f\u4eca \u66f4\u65b0"}'),
E = JSON.parse('{"time-ago/date":"[DATE]","time-ago/days/one":"For 1 dag siden","time-ago/days/many":"For [NUMBER] dager siden","time-ago/hours/one":"For 1 time siden","time-ago/hours/many":"For [NUMBER] timer siden","time-ago/minutes/one":"For 1 minutt siden","time-ago/minutes/many":"For [NUMBER] minutter siden","time-ago/just-now":"Akkurat n\xe5","time-ago/published/date":"Lagt ut: [DATE]","time-ago/published/days/one":"Lagt ut for 1 dag siden","time-ago/published/days/many":"Lagt ut for [NUMBER] dager siden","time-ago/published/hours/one":"Lagt ut for 1 time siden","time-ago/published/hours/many":"Lagt ut for [NUMBER] timer siden","time-ago/published/minutes/one":"Lagt ut for 1 minutt siden","time-ago/published/minutes/many":"Lagt ut for [NUMBER] minutter siden","time-ago/published/just-now":"Lagt ut akkurat n\xe5","time-ago/flagged/date":"Rapportert: [DATE]","time-ago/flagged/days/one":"Rapportert for 1 dag siden","time-ago/flagged/days/many":"Rapportert for [NUMBER] dager siden","time-ago/flagged/hours/one":"Rapportert for 1 time siden","time-ago/flagged/hours/many":"Rapportert for [NUMBER] timer siden","time-ago/flagged/minutes/one":"Rapportert for 1 minutt siden","time-ago/flagged/minutes/many":"Rapportert for [NUMBER] minutter siden","time-ago/flagged/just-now":"Rapportert akkurat n\xe5","time-ago/updated/date":"Oppdatert: [DATE]","time-ago/updated/days/one":"Oppdatert for 1 dag siden","time-ago/updated/days/many":"Oppdatert for [NUMBER] dager siden","time-ago/updated/hours/one":"Oppdatert for 1 time siden","time-ago/updated/hours/many":"Oppdatert for [NUMBER] timer siden","time-ago/updated/minutes/one":"Oppdatert for 1 minutt siden","time-ago/updated/minutes/many":"Oppdatert for [NUMBER] minutter siden","time-ago/updated/just-now":"Oppdatert akkurat n\xe5"}'),
v = JSON.parse('{"time-ago/date":"[DATE]","time-ago/days/one":"Een dag geleden","time-ago/days/many":"[NUMBER] dagen geleden","time-ago/hours/one":"Een uur geleden","time-ago/hours/many":"[NUMBER] uur geleden","time-ago/minutes/one":"Een minuut geleden","time-ago/minutes/many":"[NUMBER] minuten geleden","time-ago/just-now":"Zojuist","time-ago/published/date":"Gepubliceerd op [DATE]","time-ago/published/days/one":"Een dag geleden gepubliceerd","time-ago/published/days/many":"[NUMBER] dagen geleden gepubliceerd","time-ago/published/hours/one":"Een uur geleden gepubliceerd","time-ago/published/hours/many":"[NUMBER] uur geleden gepubliceerd","time-ago/published/minutes/one":"Een minuut geleden gepubliceerd","time-ago/published/minutes/many":"[NUMBER] minuten geleden gepubliceerd","time-ago/published/just-now":"Zojuist gepubliceerd","time-ago/flagged/date":"Gerapporteerd op [DATE]","time-ago/flagged/days/one":"1 dag geleden gerapporteerd","time-ago/flagged/days/many":"[NUMBER] dagen geleden gerapporteerd","time-ago/flagged/hours/one":"1 uur geleden gerapporteerd","time-ago/flagged/hours/many":"[NUMBER] uur geleden gerapporteerd","time-ago/flagged/minutes/one":"1 minuut geleden gerapporteerd","time-ago/flagged/minutes/many":"[NUMBER] minuten geleden gerapporteerd","time-ago/flagged/just-now":"Zojuist gerapporteerd","time-ago/updated/date":"Ge\xfcpdatet op [DATE]","time-ago/updated/days/one":"Een dag geleden ge\xfcpdatet","time-ago/updated/days/many":"[NUMBER] dagen geleden ge\xfcpdatet","time-ago/updated/hours/one":"Een uur geleden ge\xfcpdatet","time-ago/updated/hours/many":"[NUMBER] uur geleden ge\xfcpdatet","time-ago/updated/minutes/one":"Een minuut geleden ge\xfcpdatet","time-ago/updated/minutes/many":"[NUMBER] minuten geleden ge\xfcpdatet","time-ago/updated/just-now":"Zojuist ge\xfcpdatet"}'),
N = JSON.parse('{"time-ago/date":"[DATE]","time-ago/days/one":"Een dag geleden","time-ago/days/many":"[NUMBER] dagen geleden","time-ago/hours/one":"Een uur geleden","time-ago/hours/many":"[NUMBER] uur geleden","time-ago/minutes/one":"Een minuut geleden","time-ago/minutes/many":"[NUMBER] minuten geleden","time-ago/just-now":"Zojuist","time-ago/published/date":"Gepubliceerd op [DATE]","time-ago/published/days/one":"Een dag geleden gepubliceerd","time-ago/published/days/many":"[NUMBER] dagen geleden gepubliceerd","time-ago/published/hours/one":"Een uur geleden gepubliceerd","time-ago/published/hours/many":"[NUMBER] uur geleden gepubliceerd","time-ago/published/minutes/one":"Een minuut geleden gepubliceerd","time-ago/published/minutes/many":"[NUMBER] minuten geleden gepubliceerd","time-ago/published/just-now":"Zojuist gepubliceerd","time-ago/flagged/date":"Gerapporteerd op [DATE]","time-ago/flagged/days/one":"1 dag geleden gerapporteerd","time-ago/flagged/days/many":"[NUMBER] dagen geleden gerapporteerd","time-ago/flagged/hours/one":"1 uur geleden gerapporteerd","time-ago/flagged/hours/many":"[NUMBER] uur geleden gerapporteerd","time-ago/flagged/minutes/one":"1 minuut geleden gerapporteerd","time-ago/flagged/minutes/many":"[NUMBER] minuten geleden gerapporteerd","time-ago/flagged/just-now":"Zojuist gerapporteerd","time-ago/updated/date":"Ge\xfcpdatet op [DATE]","time-ago/updated/days/one":"Een dag geleden ge\xfcpdatet","time-ago/updated/days/many":"[NUMBER] dagen geleden ge\xfcpdatet","time-ago/updated/hours/one":"Een uur geleden ge\xfcpdatet","time-ago/updated/hours/many":"[NUMBER] uur geleden ge\xfcpdatet","time-ago/updated/minutes/one":"Een minuut geleden ge\xfcpdatet","time-ago/updated/minutes/many":"[NUMBER] minuten geleden ge\xfcpdatet","time-ago/updated/just-now":"Zojuist ge\xfcpdatet"}'),
M = JSON.parse('{"time-ago/date":"[DATE]","time-ago/days/one":"Wczoraj","time-ago/days/many":"[NUMBER] dni temu","time-ago/hours/one":"Godzin\u0119 temu","time-ago/hours/many":"[NUMBER] godzin temu","time-ago/minutes/one":"Przed minut\u0105","time-ago/minutes/many":"[NUMBER] minut temu","time-ago/just-now":"Teraz","time-ago/published/date":"Opublikowano [DATE]","time-ago/published/days/one":"Opublikowano wczoraj","time-ago/published/days/many":"Opublikowano [NUMBER] dni temu","time-ago/published/hours/one":"Opublikowano przed godzin\u0105","time-ago/published/hours/many":"Opublikowano [NUMBER] godzin temu","time-ago/published/minutes/one":"Opublikowano przed minut\u0105","time-ago/published/minutes/many":"Opublikowano [NUMBER] minut temu","time-ago/published/just-now":"Opublikowano teraz","time-ago/flagged/date":"Flagged [DATE]","time-ago/flagged/days/one":"Flagged a day ago","time-ago/flagged/days/many":"Flagged [NUMBER] days ago","time-ago/flagged/hours/one":"Flagged an hour ago","time-ago/flagged/hours/many":"Flagged [NUMBER] hours ago","time-ago/flagged/minutes/one":"Flagged a minute ago","time-ago/flagged/minutes/many":"Flagged [NUMBER] minutes ago","time-ago/flagged/just-now":"Flagged just now","time-ago/updated/date":"Zaktualizowano [DATE]","time-ago/updated/days/one":"Zaktualizowano wczoraj","time-ago/updated/days/many":"Zaktualizowano [NUMBER] dni temu","time-ago/updated/hours/one":"Zaktualizowano przed godzin\u0105","time-ago/updated/hours/many":"Zaktualizowano [NUMBER] godzin temu","time-ago/updated/minutes/one":"Zaktualizowano przed minut\u0105","time-ago/updated/minutes/many":"Zaktualizowano [NUMBER] minut temu","time-ago/updated/just-now":"Zaktualizowano teraz"}'),
R = JSON.parse('{"time-ago/date":"[DATE]","time-ago/days/one":"H\xe1 1 dia","time-ago/days/many":"H\xe1 [NUMBER] dias","time-ago/hours/one":"H\xe1 1 hora","time-ago/hours/many":"H\xe1 [NUMBER] horas","time-ago/minutes/one":"H\xe1 1 minuto","time-ago/minutes/many":"H\xe1 [NUMBER] minutos","time-ago/just-now":"Agora","time-ago/published/date":"Publicado em [DATE]","time-ago/published/days/one":"Publicado h\xe1 1 dia","time-ago/published/days/many":"Publicado h\xe1 [NUMBER] dias","time-ago/published/hours/one":"Publicado h\xe1 1 hora","time-ago/published/hours/many":"Publicado h\xe1 [NUMBER] horas","time-ago/published/minutes/one":"Publicado h\xe1 1 minuto","time-ago/published/minutes/many":"Publicado h\xe1 [NUMBER] minutos","time-ago/published/just-now":"Publicado h\xe1 pouco","time-ago/flagged/date":"Sinalizada em [DATE]","time-ago/flagged/days/one":"Sinalizada h\xe1 um dia","time-ago/flagged/days/many":"Sinalizada h\xe1 [NUMBER] dias","time-ago/flagged/hours/one":"Sinalizada h\xe1 1 hora","time-ago/flagged/hours/many":"Sinalizada h\xe1 [NUMBER] horas","time-ago/flagged/minutes/one":"Sinalizada h\xe1 1 minuto","time-ago/flagged/minutes/many":"Sinalizada h\xe1 [NUMBER] minutos","time-ago/flagged/just-now":"Acaba de ser sinalizada","time-ago/updated/date":"Atualizado em [DATE]","time-ago/updated/days/one":"Atualizado h\xe1 1 dia","time-ago/updated/days/many":"Atualizado h\xe1 [NUMBER] dias","time-ago/updated/hours/one":"Atualizado h\xe1 1 hora","time-ago/updated/hours/many":"Atualizado h\xe1 [NUMBER] horas","time-ago/updated/minutes/one":"Atualizado h\xe1 1 minuto","time-ago/updated/minutes/many":"Atualizado h\xe1 [NUMBER] minutos","time-ago/updated/just-now":"Atualizado h\xe1 pouco"}'),
U = JSON.parse('{"time-ago/date":"[DATE]","time-ago/days/one":"H\xe1 1 dia","time-ago/days/many":"H\xe1 [NUMBER] dias","time-ago/hours/one":"H\xe1 1 hora","time-ago/hours/many":"H\xe1 [NUMBER] horas","time-ago/minutes/one":"H\xe1 1 minuto","time-ago/minutes/many":"H\xe1 [NUMBER] minutos","time-ago/just-now":"Agora mesmo","time-ago/published/date":"Publicada a [DATE]","time-ago/published/days/one":"Publicada h\xe1 1 dia","time-ago/published/days/many":"Publicada h\xe1 [NUMBER] dias","time-ago/published/hours/one":"Publicada h\xe1 1 hora","time-ago/published/hours/many":"Publicada h\xe1 [NUMBER] horas","time-ago/published/minutes/one":"Publicada h\xe1 1 minuto","time-ago/published/minutes/many":"Publicada h\xe1 [NUMBER] minutos","time-ago/published/just-now":"Publicada h\xe1 pouco","time-ago/flagged/date":"Sinalizada a [DATE]","time-ago/flagged/days/one":"Sinalizada h\xe1 1 dia","time-ago/flagged/days/many":"Sinalizada h\xe1 [NUMBER] dias","time-ago/flagged/hours/one":"Sinalizada h\xe1 1 hora","time-ago/flagged/hours/many":"Sinalizada h\xe1 [NUMBER] horas","time-ago/flagged/minutes/one":"Sinalizada h\xe1 1 minuto","time-ago/flagged/minutes/many":"Sinalizada h\xe1 [NUMBER] minutos","time-ago/flagged/just-now":"Sinalizada h\xe1 pouco","time-ago/updated/date":"Actualizada a [DATE]","time-ago/updated/days/one":"Actualizada h\xe1 1 dia","time-ago/updated/days/many":"Actualizada h\xe1 [NUMBER] dias","time-ago/updated/hours/one":"Actualizada h\xe1 1 hora","time-ago/updated/hours/many":"Actualizada h\xe1 [NUMBER] horas","time-ago/updated/minutes/one":"Actualizada h\xe1 1 minuto","time-ago/updated/minutes/many":"Actualizada h\xe1 [NUMBER] minutos","time-ago/updated/just-now":"Actualizada h\xe1 pouco"}'),
w = JSON.parse('{"time-ago/date":"[DATE]","time-ago/days/one":"\u041e\u0434\u0438\u043d \u0434\u0435\u043d\u044c \u043d\u0430\u0437\u0430\u0434","time-ago/days/many":"[NUMBER] \u0434\u043d\u0435\u0439 \u043d\u0430\u0437\u0430\u0434","time-ago/hours/one":"\u0427\u0430\u0441 \u043d\u0430\u0437\u0430\u0434","time-ago/hours/many":"[NUMBER] \u0447\u0430\u0441\u043e\u0432 \u043d\u0430\u0437\u0430\u0434","time-ago/minutes/one":"\u041c\u0438\u043d\u0443\u0442\u0443 \u043d\u0430\u0437\u0430\u0434","time-ago/minutes/many":"[NUMBER] \u043c\u0438\u043d\u0443\u0442 \u043d\u0430\u0437\u0430\u0434","time-ago/just-now":"\u0422\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e","time-ago/published/date":"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e [DATE]","time-ago/published/days/one":"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e \u0434\u0435\u043d\u044c \u043d\u0430\u0437\u0430\u0434","time-ago/published/days/many":"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e [NUMBER] \u0434\u043d\u0435\u0439 \u043d\u0430\u0437\u0430\u0434","time-ago/published/hours/one":"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e \u0447\u0430\u0441 \u043d\u0430\u0437\u0430\u0434","time-ago/published/hours/many":"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e [NUMBER] \u0447\u0430\u0441\u043e\u0432 \u043d\u0430\u0437\u0430\u0434","time-ago/published/minutes/one":"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e \u043c\u0438\u043d\u0443\u0442\u0443 \u043d\u0430\u0437\u0430\u0434","time-ago/published/minutes/many":"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e [NUMBER] \u043c\u0438\u043d\u0443\u0442 \u043d\u0430\u0437\u0430\u0434","time-ago/published/just-now":"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e","time-ago/flagged/date":"\u041e\u0442\u043c\u0435\u0447\u0435\u043d\u043e [DATE]","time-ago/flagged/days/one":"\u041e\u0442\u043c\u0435\u0447\u0435\u043d\u043e \u0434\u0435\u043d\u044c \u043d\u0430\u0437\u0430\u0434","time-ago/flagged/days/many":"\u041e\u0442\u043c\u0435\u0447\u0435\u043d\u043e [NUMBER] \u0434\u043d\u0435\u0439 \u043d\u0430\u0437\u0430\u0434","time-ago/flagged/hours/one":"\u041e\u0442\u043c\u0435\u0447\u0435\u043d\u043e \u0447\u0430\u0441 \u043d\u0430\u0437\u0430\u0434","time-ago/flagged/hours/many":"\u041e\u0442\u043c\u0435\u0447\u0435\u043d\u043e [NUMBER] \u0447\u0430\u0441\u043e\u0432 \u043d\u0430\u0437\u0430\u0434","time-ago/flagged/minutes/one":"\u041e\u0442\u043c\u0435\u0447\u0435\u043d\u043e \u043c\u0438\u043d\u0443\u0442\u0443 \u043d\u0430\u0437\u0430\u0434","time-ago/flagged/minutes/many":"\u041e\u0442\u043c\u0435\u0447\u0435\u043d\u043e [NUMBER] \u043c\u0438\u043d\u0443\u0442 \u043d\u0430\u0437\u0430\u0434","time-ago/flagged/just-now":"\u041e\u0442\u043c\u0435\u0447\u0435\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e","time-ago/updated/date":"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e [DATE]","time-ago/updated/days/one":"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u0434\u0435\u043d\u044c \u043d\u0430\u0437\u0430\u0434","time-ago/updated/days/many":"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e [NUMBER] \u0434\u043d\u0435\u0439 \u043d\u0430\u0437\u0430\u0434","time-ago/updated/hours/one":"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u0447\u0430\u0441 \u043d\u0430\u0437\u0430\u0434","time-ago/updated/hours/many":"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e [NUMBER] \u0447\u0430\u0441\u043e\u0432 \u043d\u0430\u0437\u0430\u0434","time-ago/updated/minutes/one":"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043c\u0438\u043d\u0443\u0442\u0443 \u043d\u0430\u0437\u0430\u0434","time-ago/updated/minutes/many":"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e [NUMBER] \u043c\u0438\u043d\u0443\u0442 \u043d\u0430\u0437\u0430\u0434","time-ago/updated/just-now":"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e"}'),
T = JSON.parse('{"time-ago/date":"[DATE]","time-ago/days/one":"En dag sedan","time-ago/days/many":"[NUMBER] dagar sedan","time-ago/hours/one":"En timme sedan","time-ago/hours/many":"[NUMBER] timmar sedan","time-ago/minutes/one":"En minut sedan","time-ago/minutes/many":"[NUMBER] minuter sedan","time-ago/just-now":"Just nu","time-ago/published/date":"Publicerad [DATE]","time-ago/published/days/one":"Publicerad en dag sedan","time-ago/published/days/many":"Publicerad [NUMBER] dagar sedan","time-ago/published/hours/one":"Publicerad en timme sedan","time-ago/published/hours/many":"Publicerad [NUMBER] timmar sedan","time-ago/published/minutes/one":"Publicerad en minut sedan","time-ago/published/minutes/many":"Publicerad [NUMBER] minuter sedan","time-ago/published/just-now":"Publicerad just nu","time-ago/flagged/date":"Rapporterad [DATE]","time-ago/flagged/days/one":"Rapporterad en dag sedan","time-ago/flagged/days/many":"Rapporterad [NUMBER] dagar sedan","time-ago/flagged/hours/one":"Rapporterad en timme sedan","time-ago/flagged/hours/many":"Rapporterad [NUMBER] timmar sedan","time-ago/flagged/minutes/one":"Rapporterad en minut sedan","time-ago/flagged/minutes/many":"Rapporterad [NUMBER] minuter sedan","time-ago/flagged/just-now":"Rapporterad just nu","time-ago/updated/date":"Uppdaterad [DATE]","time-ago/updated/days/one":"Uppdaterad en dag sedan","time-ago/updated/days/many":"Uppdaterad [NUMBER] dagar sedan","time-ago/updated/hours/one":"Uppdaterad en timme sedan","time-ago/updated/hours/many":"Uppdaterad [NUMBER] timmar sedan","time-ago/updated/minutes/one":"Uppdaterad en minut sedan","time-ago/updated/minutes/many":"Uppdaterad [NUMBER] minuter sedan","time-ago/updated/just-now":"Uppdaterad just nu"}'),
B = a(48),
A = a(57692),
x = a(63276);
const k = e = & gt;
1e3 * e, S = e = & gt;
e * k(60), P = e = & gt;
e * S(60), j = e = & gt;
(e = & gt; e / 1e3)(e) / 60, O = e = & gt;
j(e) / 60, D = (e, t) = & gt;
{
const [a = {}, n] = (0, B.T)(), [i, r] = o.useState();
o.useEffect((() = & gt;
{
    r((e = & gt;
    {
        try {
            return e.toLocaleString(n, {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            })
        } catch (t) {
            return e.toLocaleString()
        }
    })(e))
}), [e, n]);
const u = e = & gt;
{
    const n = ["time-ago", t, e].filter((e = & gt; !!e)).join("/");
    return a[n] || ""
};
return {
    timeAgo: (e = & gt;
    {
        const t = e.getTime(),
            a = Date.now();
        if (t & gt; = a || t + (e = & gt; e * P(24))(7) & lt; a) return u("date").replace("[DATE]", e.toLocaleString(n, {
            year: "numeric",
            month: "short",
            day: "numeric"
        })).toString();
        if (t + P(35) & lt; a) {
            const e = Math.round((o = a - t, O(o) / 24)).toString();
            return u("days/many").replace("[NUMBER]", e).toString()
        }
        var o;
        if (t + P(21) & lt; a) return u("days/one").toString();
        if (t + S(89) & lt; a) {
            const e = Math.round(O(a - t)).toString();
            return u("hours/many").replace("[NUMBER]", e).toString()
        }
        if (t + S(44) & lt; a) return u("hours/one").toString();
        if (t + k(89) & lt; a) {
            const e = Math.round(j(a - t)).toString();
            return u("minutes/many").replace("[NUMBER]", e).toString()
        }
        return t + k(45) & lt;
        a ? u("minutes/one").toString() : u("just-now").toString()
    })(e),
    dateTooltip: i,
    dateTime: e.toISOString()
}
}, _ = (0, A.Z)((e = & gt;
{
let {
    date: t,
    actionPerformed: a,
    className: n = "",
    name: i
} = e;
const r = new Date(t.toString()),
    {
        timeAgo: u,
        dateTooltip: d,
        dateTime: s
    } = D(r, a);
return o.createElement("time", Object.assign({
    title: d,
    dateTime: s,
    className: n,
    suppressHydrationWarning: !0
}, (0, x.Z)("time-ago", i)), u)
}), n)
}, 47578: function(e) {
e.exports = {
wrapper: "spinner_wrapper__KBKtG",
rotate: "spinner_rotate__hH3jD",
line: "spinner_line__VgdeZ",
dash: "spinner_dash__u9NqE",
"appearance-default": "spinner_appearance-default__OO7xn",
"appearance-subtle": "spinner_appearance-subtle__5xcNC",
"appearance-disabled": "spinner_appearance-disabled__KvkzI",
"appearance-action": "spinner_appearance-action__2btfN",
"appearance-critical": "spinner_appearance-critical__gCOFH",
"appearance-positive": "spinner_appearance-positive__0NVcK"
}
}, 5152: function(e, t, a) {
e.exports = a(90638)
}, 25726: function(e, t, a) {
"use strict";

function n(e, t, a, n, o, i, r) {
this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = r
}
const o = {};
["children", "dangerouslySetInnerHTML", "defaultValue", "defaultChecked", "innerHTML", "suppressContentEditableWarning", "suppressHydrationWarning", "style"].forEach((e = & gt;
{
o[e] = new n(e, 0, !1, e, null, !1, !1)
})), [
["acceptCharset", "accept-charset"],
["className", "class"],
["htmlFor", "for"],
["httpEquiv", "http-equiv"]
].forEach((([e, t]) = & gt;
{
o[e] = new n(e, 1, !1, t, null, !1, !1)
})), ["contentEditable", "draggable", "spellCheck", "value"].forEach((e = & gt;
{
o[e] = new n(e, 2, !1, e.toLowerCase(), null, !1, !1)
})), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((e = & gt;
{
o[e] = new n(e, 2, !1, e, null, !1, !1)
})), ["allowFullScreen", "async", "autoFocus", "autoPlay", "controls", "default", "defer", "disabled", "disablePictureInPicture", "disableRemotePlayback", "formNoValidate", "hidden", "loop", "noModule", "noValidate", "open", "playsInline", "readOnly", "required", "reversed", "scoped", "seamless", "itemScope"].forEach((e = & gt;
{
o[e] = new n(e, 3, !1, e.toLowerCase(), null, !1, !1)
})), ["checked", "multiple", "muted", "selected"].forEach((e = & gt;
{
o[e] = new n(e, 3, !0, e, null, !1, !1)
})), ["capture", "download"].forEach((e = & gt;
{
o[e] = new n(e, 4, !1, e, null, !1, !1)
})), ["cols", "rows", "size", "span"].forEach((e = & gt;
{
o[e] = new n(e, 6, !1, e, null, !1, !1)
})), ["rowSpan", "start"].forEach((e = & gt;
{
o[e] = new n(e, 5, !1, e.toLowerCase(), null, !1, !1)
}));
const i = /[\-\:]([a-z])/g,
r = e = & gt;
e[1].toUpperCase();
["accent-height", "alignment-baseline", "arabic-form", "baseline-shift", "cap-height", "clip-path", "clip-rule", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "dominant-baseline", "enable-background", "fill-opacity", "fill-rule", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "horiz-adv-x", "horiz-origin-x", "image-rendering", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "overline-position", "overline-thickness", "paint-order", "panose-1", "pointer-events", "rendering-intent", "shape-rendering", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "text-decoration", "text-rendering", "underline-position", "underline-thickness", "unicode-bidi", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "vector-effect", "vert-adv-y", "vert-origin-x", "vert-origin-y", "word-spacing", "writing-mode", "xmlns:xlink", "x-height"].forEach((e = & gt;
{
const t = e.replace(i, r);
o[t] = new n(t, 1, !1, e, null, !1, !1)
})), ["xlink:actuate", "xlink:arcrole", "xlink:role", "xlink:show", "xlink:title", "xlink:type"].forEach((e = & gt;
{
const t = e.replace(i, r);
o[t] = new n(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
})), ["xml:base", "xml:lang", "xml:space"].forEach((e = & gt;
{
const t = e.replace(i, r);
o[t] = new n(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
})), ["tabIndex", "crossOrigin"].forEach((e = & gt;
{
o[e] = new n(e, 1, !1, e.toLowerCase(), null, !1, !1)
}));
o.xlinkHref = new n("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((e = & gt;
{
o[e] = new n(e, 1, !1, e.toLowerCase(), null, !0, !0)
}));
const {
CAMELCASE: u,
SAME: d,
possibleStandardNames: s
} = a(78229), l = RegExp.prototype.test.bind(new RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")), g = Object.keys(s).reduce(((e, t) = & gt;
{
const a = s[t];
return a === d ? e[t] = t : a === u ? e[t.toLowerCase()] = t : e[t] = a, e
}), {});
t.BOOLEAN = 3, t.BOOLEANISH_STRING = 2, t.NUMERIC = 5, t.OVERLOADED_BOOLEAN = 4, t.POSITIVE_NUMERIC = 6, t.RESERVED = 0, t.STRING = 1, t.getPropertyInfo = function(e) {
return o.hasOwnProperty(e) ? o[e] : null
}, t.isCustomAttribute = l, t.possibleStandardNames = g
}, 78229: function(e, t) {
t.SAME = 0;
t.CAMELCASE = 1, t.possibleStandardNames = {
accept: 0,
acceptCharset: 1,
"accept-charset": "acceptCharset",
accessKey: 1,
action: 0,
allowFullScreen: 1,
alt: 0,
as: 0,
async: 0,
autoCapitalize: 1,
autoComplete: 1,
autoCorrect: 1,
autoFocus: 1,
autoPlay: 1,
autoSave: 1,
capture: 0,
cellPadding: 1,
cellSpacing: 1,
challenge: 0,
charSet: 1,
checked: 0,
children: 0,
cite: 0,
class: "className",
classID: 1,
className: 1,
cols: 0,
colSpan: 1,
content: 0,
contentEditable: 1,
contextMenu: 1,
controls: 0,
controlsList: 1,
coords: 0,
crossOrigin: 1,
dangerouslySetInnerHTML: 1,
data: 0,
dateTime: 1,
default: 0,
defaultChecked: 1,
defaultValue: 1,
defer: 0,
dir: 0,
disabled: 0,
disablePictureInPicture: 1,
disableRemotePlayback: 1,
download: 0,
draggable: 0,
encType: 1,
enterKeyHint: 1,
for: "htmlFor",
form: 0,
formMethod: 1,
formAction: 1,
formEncType: 1,
formNoValidate: 1,
formTarget: 1,
frameBorder: 1,
headers: 0,
height: 0,
hidden: 0,
high: 0,
href: 0,
hrefLang: 1,
htmlFor: 1,
httpEquiv: 1,
"http-equiv": "httpEquiv",
icon: 0,
id: 0,
innerHTML: 1,
inputMode: 1,
integrity: 0,
is: 0,
itemID: 1,
itemProp: 1,
itemRef: 1,
itemScope: 1,
itemType: 1,
keyParams: 1,
keyType: 1,
kind: 0,
label: 0,
lang: 0,
list: 0,
loop: 0,
low: 0,
manifest: 0,
marginWidth: 1,
marginHeight: 1,
max: 0,
maxLength: 1,
media: 0,
mediaGroup: 1,
method: 0,
min: 0,
minLength: 1,
multiple: 0,
muted: 0,
name: 0,
noModule: 1,
nonce: 0,
noValidate: 1,
open: 0,
optimum: 0,
pattern: 0,
placeholder: 0,
playsInline: 1,
poster: 0,
preload: 0,
profile: 0,
radioGroup: 1,
readOnly: 1,
referrerPolicy: 1,
rel: 0,
required: 0,
reversed: 0,
role: 0,
rows: 0,
rowSpan: 1,
sandbox: 0,
scope: 0,
scoped: 0,
scrolling: 0,
seamless: 0,
selected: 0,
shape: 0,
size: 0,
sizes: 0,
span: 0,
spellCheck: 1,
src: 0,
srcDoc: 1,
srcLang: 1,
srcSet: 1,
start: 0,
step: 0,
style: 0,
summary: 0,
tabIndex: 1,
target: 0,
title: 0,
type: 0,
useMap: 1,
value: 0,
width: 0,
wmode: 0,
wrap: 0,
about: 0,
accentHeight: 1,
"accent-height": "accentHeight",
accumulate: 0,
additive: 0,
alignmentBaseline: 1,
"alignment-baseline": "alignmentBaseline",
allowReorder: 1,
alphabetic: 0,
amplitude: 0,
arabicForm: 1,
"arabic-form": "arabicForm",
ascent: 0,
attributeName: 1,
attributeType: 1,
autoReverse: 1,
azimuth: 0,
baseFrequency: 1,
baselineShift: 1,
"baseline-shift": "baselineShift",
baseProfile: 1,
bbox: 0,
begin: 0,
bias: 0,
by: 0,
calcMode: 1,
capHeight: 1,
"cap-height": "capHeight",
clip: 0,
clipPath: 1,
"clip-path": "clipPath",
clipPathUnits: 1,
clipRule: 1,
"clip-rule": "clipRule",
color: 0,
colorInterpolation: 1,
"color-interpolation": "colorInterpolation",
colorInterpolationFilters: 1,
"color-interpolation-filters": "colorInterpolationFilters",
colorProfile: 1,
"color-profile": "colorProfile",
colorRendering: 1,
"color-rendering": "colorRendering",
contentScriptType: 1,
contentStyleType: 1,
cursor: 0,
cx: 0,
cy: 0,
d: 0,
datatype: 0,
decelerate: 0,
descent: 0,
diffuseConstant: 1,
direction: 0,
display: 0,
divisor: 0,
dominantBaseline: 1,
"dominant-baseline": "dominantBaseline",
dur: 0,
dx: 0,
dy: 0,
edgeMode: 1,
elevation: 0,
enableBackground: 1,
"enable-background": "enableBackground",
end: 0,
exponent: 0,
externalResourcesRequired: 1,
fill: 0,
fillOpacity: 1,
"fill-opacity": "fillOpacity",
fillRule: 1,
"fill-rule": "fillRule",
filter: 0,
filterRes: 1,
filterUnits: 1,
floodOpacity: 1,
"flood-opacity": "floodOpacity",
floodColor: 1,
"flood-color": "floodColor",
focusable: 0,
fontFamily: 1,
"font-family": "fontFamily",
fontSize: 1,
"font-size": "fontSize",
fontSizeAdjust: 1,
"font-size-adjust": "fontSizeAdjust",
fontStretch: 1,
"font-stretch": "fontStretch",
fontStyle: 1,
"font-style": "fontStyle",
fontVariant: 1,
"font-variant": "fontVariant",
fontWeight: 1,
"font-weight": "fontWeight",
format: 0,
from: 0,
fx: 0,
fy: 0,
g1: 0,
g2: 0,
glyphName: 1,
"glyph-name": "glyphName",
glyphOrientationHorizontal: 1,
"glyph-orientation-horizontal": "glyphOrientationHorizontal",
glyphOrientationVertical: 1,
"glyph-orientation-vertical": "glyphOrientationVertical",
glyphRef: 1,
gradientTransform: 1,
gradientUnits: 1,
hanging: 0,
horizAdvX: 1,
"horiz-adv-x": "horizAdvX",
horizOriginX: 1,
"horiz-origin-x": "horizOriginX",
ideographic: 0,
imageRendering: 1,
"image-rendering": "imageRendering",
in2: 0,
in: 0,
inlist: 0,
intercept: 0,
k1: 0,
k2: 0,
k3: 0,
k4: 0,
k: 0,
kernelMatrix: 1,
kernelUnitLength: 1,
kerning: 0,
keyPoints: 1,
keySplines: 1,
keyTimes: 1,
lengthAdjust: 1,
letterSpacing: 1,
"letter-spacing": "letterSpacing",
lightingColor: 1,
"lighting-color": "lightingColor",
limitingConeAngle: 1,
local: 0,
markerEnd: 1,
"marker-end": "markerEnd",
markerHeight: 1,
markerMid: 1,
"marker-mid": "markerMid",
markerStart: 1,
"marker-start": "markerStart",
markerUnits: 1,
markerWidth: 1,
mask: 0,
maskContentUnits: 1,
maskUnits: 1,
mathematical: 0,
mode: 0,
numOctaves: 1,
offset: 0,
opacity: 0,
operator: 0,
order: 0,
orient: 0,
orientation: 0,
origin: 0,
overflow: 0,
overlinePosition: 1,
"overline-position": "overlinePosition",
overlineThickness: 1,
"overline-thickness": "overlineThickness",
paintOrder: 1,
"paint-order": "paintOrder",
panose1: 0,
"panose-1": "panose1",
pathLength: 1,
patternContentUnits: 1,
patternTransform: 1,
patternUnits: 1,
pointerEvents: 1,
"pointer-events": "pointerEvents",
points: 0,
pointsAtX: 1,
pointsAtY: 1,
pointsAtZ: 1,
prefix: 0,
preserveAlpha: 1,
preserveAspectRatio: 1,
primitiveUnits: 1,
property: 0,
r: 0,
radius: 0,
refX: 1,
refY: 1,
renderingIntent: 1,
"rendering-intent": "renderingIntent",
repeatCount: 1,
repeatDur: 1,
requiredExtensions: 1,
requiredFeatures: 1,
resource: 0,
restart: 0,
result: 0,
results: 0,
rotate: 0,
rx: 0,
ry: 0,
scale: 0,
security: 0,
seed: 0,
shapeRendering: 1,
"shape-rendering": "shapeRendering",
slope: 0,
spacing: 0,
specularConstant: 1,
specularExponent: 1,
speed: 0,
spreadMethod: 1,
startOffset: 1,
stdDeviation: 1,
stemh: 0,
stemv: 0,
stitchTiles: 1,
stopColor: 1,
"stop-color": "stopColor",
stopOpacity: 1,
"stop-opacity": "stopOpacity",
strikethroughPosition: 1,
"strikethrough-position": "strikethroughPosition",
strikethroughThickness: 1,
"strikethrough-thickness": "strikethroughThickness",
string: 0,
stroke: 0,
strokeDasharray: 1,
"stroke-dasharray": "strokeDasharray",
strokeDashoffset: 1,
"stroke-dashoffset": "strokeDashoffset",
strokeLinecap: 1,
"stroke-linecap": "strokeLinecap",
strokeLinejoin: 1,
"stroke-linejoin": "strokeLinejoin",
strokeMiterlimit: 1,
"stroke-miterlimit": "strokeMiterlimit",
strokeWidth: 1,
"stroke-width": "strokeWidth",
strokeOpacity: 1,
"stroke-opacity": "strokeOpacity",
suppressContentEditableWarning: 1,
suppressHydrationWarning: 1,
surfaceScale: 1,
systemLanguage: 1,
tableValues: 1,
targetX: 1,
targetY: 1,
textAnchor: 1,
"text-anchor": "textAnchor",
textDecoration: 1,
"text-decoration": "textDecoration",
textLength: 1,
textRendering: 1,
"text-rendering": "textRendering",
to: 0,
transform: 0,
typeof: 0,
u1: 0,
u2: 0,
underlinePosition: 1,
"underline-position": "underlinePosition",
underlineThickness: 1,
"underline-thickness": "underlineThickness",
unicode: 0,
unicodeBidi: 1,
"unicode-bidi": "unicodeBidi",
unicodeRange: 1,
"unicode-range": "unicodeRange",
unitsPerEm: 1,
"units-per-em": "unitsPerEm",
unselectable: 0,
vAlphabetic: 1,
"v-alphabetic": "vAlphabetic",
values: 0,
vectorEffect: 1,
"vector-effect": "vectorEffect",
version: 0,
vertAdvY: 1,
"vert-adv-y": "vertAdvY",
vertOriginX: 1,
"vert-origin-x": "vertOriginX",
vertOriginY: 1,
"vert-origin-y": "vertOriginY",
vHanging: 1,
"v-hanging": "vHanging",
vIdeographic: 1,
"v-ideographic": "vIdeographic",
viewBox: 1,
viewTarget: 1,
visibility: 0,
vMathematical: 1,
"v-mathematical": "vMathematical",
vocab: 0,
widths: 0,
wordSpacing: 1,
"word-spacing": "wordSpacing",
writingMode: 1,
"writing-mode": "writingMode",
x1: 0,
x2: 0,
x: 0,
xChannelSelector: 1,
xHeight: 1,
"x-height": "xHeight",
xlinkActuate: 1,
"xlink:actuate": "xlinkActuate",
xlinkArcrole: 1,
"xlink:arcrole": "xlinkArcrole",
xlinkHref: 1,
"xlink:href": "xlinkHref",
xlinkRole: 1,
"xlink:role": "xlinkRole",
xlinkShow: 1,
"xlink:show": "xlinkShow",
xlinkTitle: 1,
"xlink:title": "xlinkTitle",
xlinkType: 1,
"xlink:type": "xlinkType",
xmlBase: 1,
"xml:base": "xmlBase",
xmlLang: 1,
"xml:lang": "xmlLang",
xmlns: 0,
"xml:space": "xmlSpace",
xmlnsXlink: 1,
"xmlns:xlink": "xmlnsXlink",
xmlSpace: 1,
y1: 0,
y2: 0,
y: 0,
yChannelSelector: 1,
z: 0,
zoomAndPan: 1
}
}, 67358: function(e) {
e.exports = '&lt;svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="trustpilot-icon"&gt;&lt;path fill-rule="evenodd" clip-rule="evenodd" d="M16 2.713 13.288 0l-1.567 1.567-9.564 9.56L0 15.996l4.934-2.223 9.145-9.14L16 2.714Zm-2.274.86.86-.86-1.298-1.3-.86.86 1.298 1.3ZM1.962 14.034l1.75-.776-.974-.975-.776 1.751Zm2.62-1.32-1.3-1.3 8.438-8.433L13.02 4.28 4.58 12.714Z"/&gt;&lt;/svg&gt;'
}, 11944: function(e) {
e.exports = '&lt;svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="trustpilot-icon"&gt;&lt;path d="M5 5.5V13h1V5.5H5ZM7.5 5.5V13h1V5.5h-1ZM10 5.5V13h1V5.5h-1Z"/&gt;&lt;path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 0h-7v2.5H1v1h1V16h12V3.5h1v-1h-3.5V0Zm-1 2.5h-5V1h5v1.5ZM3 15V3.5h10V15H3Z"/&gt;&lt;/svg&gt;'
}, 41476: function(e, t, a) {
"use strict";
var n = this & amp; & amp;
this.__importDefault || function(e) {
return e & amp; & amp;
e.__esModule ? e : {
    default: e
}
};
Object.defineProperty(t, "__esModule", {
value: !0
});
var o = n(a(5174)),
i = a(26678);
t.default = function(e, t) {
var a = {};
return e & amp; & amp;
"string" === typeof e ? ((0, o.default)(e, (function(e, n) {
    e & amp; & amp;
    n & amp; & amp;
    (a[(0, i.camelCase)(e, t)] = n)
})), a) : a
}
}, 26678: function(e, t) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.camelCase = void 0;
var a = /^--[a-zA-Z0-9-]+$/,
n = /-([a-z])/g,
o = /^[^-]+$/,
i = /^-(webkit|moz|ms|o|khtml)-/,
r = /^-(ms)-/,
u = function(e, t) {
    return t.toUpperCase()
},
d = function(e, t) {
    return "".concat(t, "-")
};
t.camelCase = function(e, t) {
return void 0 === t & amp; & amp;
(t = {}),
function(e) {
    return !e || o.test(e) || a.test(e)
}(e) ? e: (e = e.toLowerCase(), (e = t.reactCompat ? e.replace(r, d) : e.replace(i, d)).replace(n, u))
}
}, 5174: function(e, t, a) {
"use strict";
var n = this & amp; & amp;
this.__importDefault || function(e) {
return e & amp; & amp;
e.__esModule ? e : {
    default: e
}
};
Object.defineProperty(t, "__esModule", {
value: !0
});
var o = n(a(18139));
t.default = function(e, t) {
var a = null;
if (!e || "string" !== typeof e) return a;
var n = (0, o.default)(e),
    i = "function" === typeof t;
return n.forEach((function(e) {
    if ("declaration" === e.type) {
        var n = e.property,
            o = e.value;
        i ? t(n, o, e) : o & amp; & amp;
        ((a = a || {})[n] = o)
    }
})), a
}
}, 25935: function(e, t, a) {
"use strict";
var n = a(30488);
n.domToReact, n.htmlToDOM, n.attributesToProps, n.Comment, n.Element, n.ProcessingInstruction, n.Text;
t.ZP = n
}
}]);
//# sourceMappingURL=4257-311801d27ab41b14.js.map</pre></body></html>