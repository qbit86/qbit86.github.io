_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return d})),n.d(t,"default",(function(){return p}));var r=n("nKUr"),a=n("fRaF"),c=n("g4pe"),o=n.n(c),i=n("5M6V"),s=n("YFqc"),l=n.n(s),u=n("Z4Yb"),f=n.n(u),d=!0;function p(e){var t=e.allPostsData;return Object(r.jsxs)(i.a,{home:!0,children:[Object(r.jsx)(o.a,{children:Object(r.jsxs)("title",{children:[i.b," - Digital garden"]})}),Object(r.jsx)("section",{className:"".concat(f.a.headingMd," ").concat(f.a.padding1px),children:Object(r.jsx)("ul",{className:f.a.list,children:t.map((function(e){var t=e.slug,n=e.datePublished,c=e.dateUpdated,o=e.title;return Object(r.jsxs)("li",{className:f.a.listItem,children:[Object(r.jsx)(l.a,{href:"/posts/".concat(t),children:Object(r.jsx)("a",{children:o})}),Object(r.jsx)("br",{}),Object(r.jsx)("small",{className:f.a.lightText,children:Object(r.jsx)(a.a,{datePublished:n,dateUpdated:c})})]},t)}))})})]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var c=a(n("q1tI")),o=n("elyg"),i=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.pathname||"/",f=c.default.useMemo((function(){var t=(0,o.resolveHref)(a,e.href,!0),n=r(t,2),c=n[0],i=n[1];return{href:c,as:e.as?(0,o.resolveHref)(a,e.as):i||c}}),[a,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,j=e.scroll,g=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var m=c.Children.only(v),_=m&&"object"===typeof m&&m.ref,y=(0,s.useIntersection)({rootMargin:"200px"}),E=r(y,2),O=E[0],w=E[1],x=c.default.useCallback((function(e){O(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,O]);(0,c.useEffect)((function(){var e=w&&t&&(0,o.isLocalURL)(d),r="undefined"!==typeof g?g:n&&n.locale,a=l[d+"%"+p+(r?"%"+r:"")];e&&!a&&u(n,d,p,{locale:r})}),[p,d,w,g,t,n]);var M={ref:x,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,c,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:c,locale:s,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,d,p,h,b,j,g)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),u(n,d,p,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var N="undefined"!==typeof g?g:n&&n.locale,L=n&&n.isLocaleDomain&&(0,o.getDomainLocale)(p,N,n&&n.locales,n&&n.domainLocales);M.href=L||(0,o.addBasePath)((0,o.addLocale)(p,N,n&&n.defaultLocale))}return c.default.cloneElement(m,M)};t.default=f},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,s=(0,a.useRef)(),l=(0,a.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,c=r.observer,o=r.elements;return o.set(e,t),c.observe(e),function(){o.delete(e),c.unobserve(e),0===o.size&&(c.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){if(!o&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=n("q1tI"),c=n("0G5g"),o="undefined"!==typeof IntersectionObserver;var i=new Map}},[["/EDR",0,1,2,3]]]);