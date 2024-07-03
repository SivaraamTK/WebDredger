< html > < head > < meta name = "color-scheme"
content = "light dark" > < /head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6567],{62012:function(e,n,r){"use strict";r.d(n,{i:function(){return b}});var t=r(41799),i=r(69396),s=r(85893),o=r(94184),a=r.n(o),l=(r(67294),r(62563)),c=r(59869),u=r(82327),p=r(88437),g=r(35425),f=r(21960),d=r.n(f);const b=e=&gt;{let{rating:n,variant:r,className:o,size:f="small",onClick:b}=e;const m="product"===r?(0,g.f)(n):(0,g.O)(n);return(0,s.jsxs)("div",(0,i.Z)((0,t.Z)({role:"link",tabIndex:0,className:a()(d().rating,b&amp;&amp;d().clickable,o)},(0,p.c)((()=&gt;null===b||void 0===b?void 0:b()))),{"data-rating-component":!0,children:[(0,s.jsx)(c.Z,{rating:m,size:f,variant:r}),(0,s.jsx)(u.ZT,{variant:"small"===f?"body-m":"body-l",appearance:"subtle",name:"rating",children:(0,s.jsx)(l.n$,{minDecimals:1,number:n})})]}))}},76777:function(e,n,r){"use strict";r.d(n,{d5:function(){return p},ZP:function(){return b},_T:function(){return g}});var t=r(85893),i=r(67294),s=r(9993),o=r(14111),a=r(63905),l=r(43524),c=r.n(l);const u=e=&gt;{let{children:n,onChange:r,stickynessOffset:s=0,threshold:l,className:u=""}=e;const p=(0,i.useRef)(null),g=(0,i.useRef)(null),f=(0,o.k)("smaller-than",l),{0:d,1:b}=(0,i.useState)(!1),{0:m,1:y}=(0,i.useState)("auto"),w=i.useCallback((e=&gt;{!0===e?g.current&amp;&amp;y(g.current.getBoundingClientRect().height):b(e)}),[]);return(0,i.useEffect)((()=&gt;{const e=p.current,n=new IntersectionObserver((e=&gt;{let[n]=e;const r=!f&amp;&amp;!n.isIntersecting;w(r)}),{threshold:[1],rootMargin:"".concat(s,"px 0px ").concat(s,"px 50%")});return e&amp;&amp;n.observe(e),r&amp;&amp;r(d),()=&gt;{e&amp;&amp;n.unobserve(e)}})),(0,i.useEffect)((()=&gt;{!1===d&amp;&amp;y("auto")}),[d]),(0,i.useEffect)((()=&gt;{"auto"!==m&amp;&amp;b(!0)}),[m]),(0,i.useEffect)((()=&gt;{f&amp;&amp;b(!1)}),[f]),(0,t.jsxs)("div",{ref:g,style:{height:m},children:[(0,t.jsx)("div",{className:c().dummy,ref:p}),(0,t.jsx)("div",{className:(0,a.AK)(c().wrap,d&amp;&amp;c().wrapSticky,u),children:n})]})},p=i.createContext(!1),g=()=&gt;i.useContext(p);var f=r(77391),d=r.n(f);var b=e=&gt;{let{children:n,className:r,withMobilePaginationOffset:o,withHeaderOffset:l,stickyOffsetHeightPercentage:c=0,alwaysSticky:g}=e;const[f,b]=i.useState(!1),[m,y]=i.useState(0),w=i.useCallback((e=&gt;{null===e||f||y(e.clientHeight*(c/
100))
}), [f, c]);
return (0, t.jsx)(u, {
    onChange: b,
    threshold: "tablet",
    stickynessOffset: m,
    className: (0, a.AK)(d().wrapperBase, f & amp; & amp; d().wrapperSticky, o & amp; & amp; d().withMobilePagination, l & amp; & amp; d().withHeader, r),
    children: (0, t.jsx)(p.Provider, {
        value: g || f,
        children: (0, t.jsx)(s.Xk, {
            className: (0, a.AK)(d().container),
            raised: f,
            ref: w,
            children: (0, t.jsx)("div", {
                className: d().content,
                "data-overview-section": !0,
                children: n
            })
        })
    })
})
}
}, 43358: function(e, n, r) {
"use strict";
r.d(n, {
p: function() {
    return u
}
});
var t = r(85893),
i = r(67294),
s = r(90824),
o = r(87323),
a = r(92596),
l = r(88826),
c = r.n(l);
const u = e = & gt;
{
let {
    className: n,
    tooltipText: r,
    placement: l,
    trackingProps: u
} = e;
const p = i.useContext(s.Il),
    [g, f] = i.useState(!1),
    d = () = & gt;
{
    g || (p.track("Element Viewed", u), f(!0))
};
return (0, t.jsx)("span", {
    className: n,
    onMouseOver: () = & gt;u & amp; & amp;d(),
    onFocus: () = & gt;u & amp; & amp;d(),
    children: (0, t.jsx)(o.u, {
        tooltipText: r,
        placement: l,
        children: (0, t.jsx)(a.J, {
            content: c(),
            color: "#6C6C85"
        })
    })
})
}
}, 65629: function(e, n, r) {
"use strict";
r.d(n, {
e: function() {
    return o
}
});
var t = r(33613),
i = r(78144),
s = r(81674);
const o = e = & gt;
{
const n = (0, s.hz)("consumer-site-hide-trustscore-on-guideline-breach"),
    r = (0, t.T)(),
    {
        consumerAlert: o
    } = null !== e & amp; & amp;
void 0 !== e ? e : r, a = (0, i.Wb)(null === o || void 0 === o ? void 0 : o.predefinedType);
return {
    consumerAlert: o,
    hasWarningAlert: a,
    hideTrustscore: n & amp; & amp;a
}
}
}, 88437: function(e, n, r) {
"use strict";
r.d(n, {
c: function() {
    return t
}
});
const t = function(e) {
let n = arguments.length & gt;
1 & amp; & amp;
void 0 !== arguments[1] ? arguments[1] : ["Enter"];
return {
    onClick: n = & gt;e(n),
    onKeyDown: r = & gt;
    {
        n.includes(r.key) & amp; & amp;
        (r.preventDefault(), e(r))
    }
}
}
}, 35425: function(e, n, r) {
"use strict";
r.d(n, {
O: function() {
    return t
},
f: function() {
    return i
}
});
const t = e = & gt;
e & gt;
4.7 ? 5 : e & gt;
4.2 ? 4.5 : e & gt;
3.7 ? 4 : e & gt;
3.2 ? 3.5 : e & gt;
2.7 ? 3 : e & gt;
2.2 ? 2.5 : e & gt;
1.7 ? 2 : e & gt;
1.2 ? 1.5 : e & gt;
0 ? 1 : 0, i = e = & gt;
e & gt;
4.4 ? 5 : e & gt;
3.4 ? 4 : e & gt;
2.4 ? 3 : e & gt;
1.4 ? 2 : e & gt;
0 ? 1 : 0
}, 78144: function(e, n, r) {
"use strict";
r.d(n, {
M6: function() {
    return l
},
Wb: function() {
    return s
},
jt: function() {
    return a
},
rF: function() {
    return o
}
});
const t = (e, n, r) = & gt;
{
let {
    predefinedType: t,
    content: i,
    languageVersions: s
} = r;
switch (t) {
    case "InfoIpr":
    case "WarningIpr":
        return {
            type: "business-profile-page/consumer-alert/info/ipr/type", description: "business-profile-page/consumer-alert/info/ipr/description", body: n["business-profile-page/consumer-alert/info/ipr/body"]
        };
    case "InfoRegulatoryNotification":
    case "InfoRegulatoryNotificationBadFit":
        return {
            type: "business-profile-page/consumer-alert/info/regulatory-notification/type", description: "business-profile-page/consumer-alert/info/regulatory-notification/description", body: n["business-profile-page/consumer-alert/info/regulatory-notification/body-v2"]
        };
    case "InfoMediaStorm":
        return {
            type: "business-profile-page/consumer-alert/info/media-storm/type", description: "business-profile-page/consumer-alert/info/media-storm/description", body: n["business-profile-page/consumer-alert/info/media-storm/body-v2"]
        };
    case "InfoPreInvestigation":
        return {
            description: "business-profile-page/consumer-alert/info/pre-investigation/description", type: "business-profile-page/consumer-alert/info/pre-investigation/type", body: n["business-profile-page/consumer-alert/info/pre-investigation/body"]
        };
    case "InfoHighRiskInvestment":
        return {
            type: "business-profile-page/consumer-alert/info/high-risk-investment/type", description: "business-profile-page/consumer-alert/info/high-risk-investment/description", body: n["business-profile-page/consumer-alert/info/high-risk-investment/body-v2"]
        };
    case "InfoRegulatoryActionFraud":
        return {
            type: "business-profile-page/consumer-alert/info/regulatory-action-fraud/type", description: "business-profile-page/consumer-alert/info/regulatory-action-fraud/description", body: n["business-profile-page/consumer-alert/info/regulatory-action-fraud/body-v2"]
        };
    case "WarningInStoreCollection":
        return {
            type: "business-profile-page/consumer-alert/warning/in-store-collection/type", description: "business-profile-page/consumer-alert/warning/in-store-collection/description", body: n["business-profile-page/consumer-alert/warning/in-store-collection/body-v2"]
        };
    case "WarningCherrypicking":
        return {
            type: "business-profile-page/consumer-alert/warning/cherrypicking/type", description: "business-profile-page/consumer-alert/warning/cherrypicking/description", body: n["business-profile-page/consumer-alert/warning/cherrypicking/body-v2"]
        };
    case "WarningFabricatedReviews":
        return {
            type: "business-profile-page/consumer-alert/warning/fabricated-reviews/type", description: "business-profile-page/consumer-alert/warning/fabricated-reviews/description", body: n["business-profile-page/consumer-alert/warning/fabricated-reviews/body-v2"]
        };
    case "WarningIncentivesForReviews":
        return {
            type: "business-profile-page/consumer-alert/warning/incentives-for-reviews/type", description: "business-profile-page/consumer-alert/warning/incentives-for-reviews/description", body: n["business-profile-page/consumer-alert/warning/incentives-for-reviews/body-v2"]
        };
    case "WarningMisuseOfReporting":
        return {
            type: "business-profile-page/consumer-alert/warning/misuse-of-reporting/type", description: "business-profile-page/consumer-alert/warning/misuse-of-reporting/description", body: n["business-profile-page/consumer-alert/warning/misuse-of-reporting/body-v2"]
        };
    case "WarningBiasedInvitation":
        return {
            type: "business-profile-page/consumer-alert/warning/biased-invitation/type", description: "business-profile-page/consumer-alert/warning/biased-invitation/description", body: n["business-profile-page/consumer-alert/warning/biased-invitation/body-v2"]
        };
    case "WarningThreats":
        return {
            type: "business-profile-page/consumer-alert/warning/threats/type", description: "business-profile-page/consumer-alert/warning/threats/description", body: n["business-profile-page/consumer-alert/warning/threats/body-v2"]
        };
    case "WarningMisuseOfPublicReply":
        return {
            type: "business-profile-page/consumer-alert/warning/misuse-of-reply/type", description: "business-profile-page/consumer-alert/warning/misuse-of-reply/description", body: n["business-profile-page/consumer-alert/warning/misuse-of-reply/body-v2"]
        };
    case "WarningConflictOfInterest":
        return {
            type: "business-profile-page/consumer-alert/warning/conflict-of-interest/type", description: "business-profile-page/consumer-alert/warning/conflict-of-interest/description", body: n["business-profile-page/consumer-alert/warning/conflict-of-interest/body-v2"]
        };
    case "WarningPurchasedReviews":
        return {
            type: "business-profile-page/consumer-alert/warning/purchased-reviews/type", description: "business-profile-page/consumer-alert/warning/purchased-reviews/description", body: n["business-profile-page/consumer-alert/warning/purchased-reviews/body-v2"]
        };
    case "WarningIncorrectDisplayOfTrustpilotContent":
        return {
            type: "business-profile-page/consumer-alert/warning/incorrect-display-of-tp-content/type", description: "business-profile-page/consumer-alert/warning/incorrect-display-of-tp-content/description", body: n["business-profile-page/consumer-alert/warning/incorrect-display-of-tp-content/body"]
        };
    case "WarningScammerBusiness":
        return {
            type: "business-profile-page/consumer-alert/warning/scammer-business/type", description: "business-profile-page/consumer-alert/warning/scammer-business/description", body: n["business-profile-page/consumer-alert/warning/scammer-business/body-v2"]
        };
    case "WarningLegalThreatsTowardReviewer":
        return {
            type: "business-profile-page/consumer-alert/warning/legal-threats-toward-reviewer/type", description: "business-profile-page/consumer-alert/warning/legal-threats-toward-reviewer/description", body: n["business-profile-page/consumer-alert/warning/legal-threats-toward-reviewer/body-v2"]
        };
    case "InfoCustom":
        var o, a, l, c;
        return {
            body: null !== (a = null !== (o = s & amp; & amp; s[e]) & amp; & amp; void 0 !== o ? o : i) & amp; & amp;
            void 0 !== a ? a : n["business-profile-page/alerts/default"], description: null !== (c = null !== (l = s & amp; & amp; s[e]) & amp; & amp; void 0 !== l ? l : i) & amp; & amp;
            void 0 !== c ? c : n["business-profile-page/alerts/default"], type: "business-profile-page/alerts/modal/title"
        };
    default:
        var u, p, g, f;
        return {
            description: null !== (p = null !== (u = s & amp; & amp; s[e]) & amp; & amp; void 0 !== u ? u : i) & amp; & amp;
            void 0 !== p ? p : n["business-profile-page/alerts/default"], body: null !== (f = null !== (g = s & amp; & amp; s[e]) & amp; & amp; void 0 !== g ? g : i) & amp; & amp;
            void 0 !== f ? f : n["business-profile-page/alerts/default"], type: "business-profile-page/warnings/modal/title"
        }
}
};
var i;
const s = e = & gt;
null !== (i = null === e || void 0 === e ? void 0 : e.toLowerCase().startsWith("warning")) & amp; & amp;
void 0 !== i & amp; & amp;
i, o = (e, n, r, t) = & gt;
{
const i = ((e, n, r) = & gt;
{
    if (r) return {
        linkBegin: '&lt;a href="'.concat(r, '" target="_blank" rel="nofollow noopener"&gt;'),
        linkEnd: "&lt;/a&gt;",
        trackingOptions: {
            name: "consumer-alert-banner",
            target: "Regulatory attention"
        }
    };
    switch (n) {
        case "InfoRegulatoryNotification":
        case "InfoRegulatoryNotificationBadFit":
            return {
                linkBegin: "", linkEnd: ""
            };
        case "WarningInStoreCollection":
            return {
                linkBegin: '&lt;a href="https://support.trustpilot.com/hc/articles/360013291499-Collect-reviews-on-company-premises" target="_blank" rel="nofollow noopener"&gt;', linkEnd: "&lt;/a&gt;", trackingOptions: {
                    name: "consumer-alert-banner",
                    target: "Support 360013291499"
                }
            };
        case "InfoHighRiskInvestment":
            return {
                linkBegin: '&lt;a href="https://support.trustpilot.com/hc/en-us/articles/7550994547218-What-you-should-know-about-high-risk-investments" target="_blank" rel="nofollow noopener"&gt;', linkEnd: "&lt;/a&gt;", trackingOptions: {
                    name: "consumer-alert-banner",
                    target: "Support 7550994547218"
                }
            };
        case "InfoRegulatoryActionFraud":
            return {
                linkBegin: '&lt;a href="https://www.actionfraud.police.uk/" target="_blank" rel="nofollow noopener"&gt;', linkEnd: "&lt;/a&gt;", trackingOptions: {
                    name: "consumer-alert-banner",
                    target: "Police Action Fraud"
                }
            };
        case "WarningIncorrectDisplayOfTrustpilotContent":
            return {
                linkBegin: '&lt;a href="https://legal.trustpilot.com/for-businesses/terms-of-use-and-sale-for-businesses" target="_blank" rel="nofollow noopener"&gt;', linkEnd: "&lt;/a&gt;", trackingOptions: {
                    name: "consumer-alert-banner",
                    target: "Terms of Use Page"
                }
            };
        case "WarningFabricatedReviews":
            return {
                linkBegin: '&lt;a href="https://legal.trustpilot.com/for-everyone/action-we-take"&gt;', linkEnd: "&lt;/a&gt;", trackingOptions: {
                    name: "consumer-alert-banner",
                    target: "Action We Take Page"
                }
            };
        default:
            return {
                linkBegin: '&lt;a href="/review/'.concat(e, '/transparency"&gt;'), linkEnd: "&lt;/a&gt;", trackingOptions: {
                    name: "consumer-alert-banner",
                    target: "Activity Page"
                }
            }
    }
})(e, r, t);
return n.replace(/\[LINE-BREAK]/g, "&lt;br&gt;&lt;br&gt;").replace("[LINK-BEGIN]", i.linkBegin).replace("[LINK-END]", i.linkEnd).replace("[LINK]", "https://legal.trustpilot.com/for-businesses/guidelines-for-businesses")
}, a = (e, n, r) = & gt;
{
const t = e.find((e = & gt; e.predefinedType === "".concat(n, "Custom")));
return r & amp; & amp;
t ? [t] : e.filter((e = & gt; e.predefinedType.startsWith(n)))
}, l = (e, n, r) = & gt;
e.map((e = & gt;
({
    alertContent: t(n, r, e),
    alert: e
})))
}, 21960: function(e) {
e.exports = {
rating: "styles_rating__uyC6m",
clickable: "styles_clickable__uWsnU"
}
}, 77391: function(e) {
e.exports = {
starRating: "styles_starRating__699MN",
small: "styles_small__G7Jmy",
medium: "styles_medium__vf7SK",
large: "styles_large__NyjA9",
responsive: "styles_responsive__TsmQe",
container: "styles_container__wP41_",
content: "styles_content__2pCRG",
wrapperBase: "styles_wrapperBase__O8HY_",
wrapperSticky: "styles_wrapperSticky__4H3PZ",
withMobilePagination: "styles_withMobilePagination__IdPoO",
withHeader: "styles_withHeader__ZC7W8"
}
}, 43524: function(e) {
e.exports = {
dummy: "styles_dummy__O3Cxk",
wrap: "styles_wrap__bEQ8l",
wrapSticky: "styles_wrapSticky__c_875"
}
}
}]);
//# sourceMappingURL=6567-bf32287d4e1520d7.js.map</pre></body></html>