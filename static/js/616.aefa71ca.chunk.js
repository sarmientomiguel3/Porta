(self.webpackChunkMiguel_Sarmiento_FullStack=self.webpackChunkMiguel_Sarmiento_FullStack||[]).push([[616,6250],{3404:function(e,t,n){"use strict";n.d(t,{Z:function(){return A}});var r=n(93433),a=n(29439),o=n(4942),i=n(87462),s=n(63366),u=n(47313),l=(n(20478),n(83061)),c=n(21921),d=n(17592),f=n(77342),h=n(61113),p=n(17551),m=n(54750),v=n(46417),g=(0,m.Z)((0,v.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Z=n(38743),x=(0,d.ZP)(Z.Z)((function(e){var t=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,p._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,p._4)(t.palette.grey[600],.12)})})})),b=(0,d.ZP)(g)({width:24,height:16});var w=function(e){var t=e;return(0,v.jsx)("li",{children:(0,v.jsx)(x,(0,i.Z)({focusRipple:!0},e,{ownerState:t,children:(0,v.jsx)(b,{ownerState:t})}))})},C=n(77430),S=n(32298);function y(e){return(0,S.Z)("MuiBreadcrumbs",e)}var k=(0,C.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),R=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],M=(0,d.ZP)(h.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,o.Z)({},"& .".concat(k.li),t.li),t.root]}})({}),B=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),N=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function j(e,t,n,r){return e.reduce((function(a,o,i){return i<e.length-1?a=a.concat(o,(0,v.jsx)(N,{"aria-hidden":!0,className:t,ownerState:r,children:n},"separator-".concat(i))):a.push(o),a}),[])}var A=u.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiBreadcrumbs"}),o=n.children,d=n.className,h=n.component,p=void 0===h?"nav":h,m=n.expandText,g=void 0===m?"Show path":m,Z=n.itemsAfterCollapse,x=void 0===Z?1:Z,b=n.itemsBeforeCollapse,C=void 0===b?1:b,S=n.maxItems,k=void 0===S?8:S,N=n.separator,A=void 0===N?"/":N,F=(0,s.Z)(n,R),P=u.useState(!1),_=(0,a.Z)(P,2),z=_[0],I=_[1],T=(0,i.Z)({},n,{component:p,expanded:z,expandText:g,itemsAfterCollapse:x,itemsBeforeCollapse:C,maxItems:k,separator:A}),X=function(e){var t=e.classes;return(0,c.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},y,t)}(T),L=u.useRef(null),q=u.Children.toArray(o).filter((function(e){return u.isValidElement(e)})).map((function(e,t){return(0,v.jsx)("li",{className:X.li,children:e},"child-".concat(t))}));return(0,v.jsx)(M,(0,i.Z)({ref:t,component:p,color:"text.secondary",className:(0,l.Z)(X.root,d),ownerState:T},F,{children:(0,v.jsx)(B,{className:X.ol,ref:L,ownerState:T,children:j(z||k&&q.length<=k?q:function(e){return C+x>=e.length?e:[].concat((0,r.Z)(e.slice(0,C)),[(0,v.jsx)(w,{"aria-label":g,onClick:function(){I(!0);var e=L.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,r.Z)(e.slice(e.length-x,e.length)))}(q),X.separator,A,T)})}))}))},73428:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(87462),a=n(63366),o=n(47313),i=n(83061),s=n(21921),u=n(17592),l=n(77342),c=n(70501),d=n(77430),f=n(32298);function h(e){return(0,f.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var p=n(46417),m=["className","raised"],v=(0,u.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),g=o.forwardRef((function(e,t){var n=(0,l.Z)({props:e,name:"MuiCard"}),o=n.className,u=n.raised,c=void 0!==u&&u,d=(0,a.Z)(n,m),f=(0,r.Z)({},n,{raised:c}),g=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},h,t)}(f);return(0,p.jsx)(v,(0,r.Z)({className:(0,i.Z)(g.root,o),elevation:c?8:void 0,ref:t,ownerState:f},d))}))},84488:function(e,t,n){"use strict";n.d(t,{Z:function(){return A}});var r=n(30168),a=n(63366),o=n(87462),i=n(47313),s=n(83061),u=n(30686),l=n(21921);function c(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function d(e){return parseFloat(e)}var f=n(17551),h=n(17592),p=n(77342),m=n(77430),v=n(32298);function g(e){return(0,v.Z)("MuiSkeleton",e)}(0,m.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var Z,x,b,w,C,S,y,k,R=n(46417),M=["animation","className","component","height","style","variant","width"],B=(0,u.F4)(C||(C=Z||(Z=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),N=(0,u.F4)(S||(S=x||(x=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),j=(0,h.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((function(e){var t=e.theme,n=e.ownerState,r=c(t.shape.borderRadius)||"px",a=d(t.shape.borderRadius);return(0,o.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,f.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(r,"/").concat(Math.round(a/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(t.vars||t).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(e){return"pulse"===e.ownerState.animation&&(0,u.iv)(y||(y=b||(b=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),B)}),(function(e){var t=e.ownerState,n=e.theme;return"wave"===t.animation&&(0,u.iv)(k||(k=w||(w=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),N,(n.vars||n).palette.action.hover)})),A=i.forwardRef((function(e,t){var n=(0,p.Z)({props:e,name:"MuiSkeleton"}),r=n.animation,i=void 0===r?"pulse":r,u=n.className,c=n.component,d=void 0===c?"span":c,f=n.height,h=n.style,m=n.variant,v=void 0===m?"text":m,Z=n.width,x=(0,a.Z)(n,M),b=(0,o.Z)({},n,{animation:i,component:d,variant:v,hasChildren:Boolean(x.children)}),w=function(e){var t=e.classes,n=e.variant,r=e.animation,a=e.hasChildren,o=e.width,i=e.height,s={root:["root",n,r,a&&"withChildren",a&&!o&&"fitContent",a&&!i&&"heightAuto"]};return(0,l.Z)(s,g,t)}(b);return(0,R.jsx)(j,(0,o.Z)({as:d,ref:t,className:(0,s.Z)(w.root,u),ownerState:b},x,{style:(0,o.Z)({width:Z,height:f},h)}))}))},59023:function(e,t,n){"use strict";n.d(t,{$:function(){return o}});var r=n(66797),a=n(26675);function o(e,t){return void 0===t&&(t={}),(0,a.B)(e,(0,r.pi)({delimiter:"."},t))}},71839:function(e,t,n){var r=n(2785),a=n(2114);e.exports=function(e,t){var n=-1,o=a(e)?Array(e.length):[];return r(e,(function(e,r,a){o[++n]=t(e,r,a)})),o}},89318:function(e,t,n){var r=n(95434),a=n(30207),o=n(81186),i=n(71839),s=n(40078),u=n(36902),l=n(49674),c=n(19908),d=n(95585);e.exports=function(e,t,n){t=t.length?r(t,(function(e){return d(e)?function(t){return a(t,1===e.length?e[0]:e)}:e})):[c];var f=-1;t=r(t,u(o));var h=i(e,(function(e,n,a){return{criteria:r(t,(function(t){return t(e)})),index:++f,value:e}}));return s(h,(function(e,t){return l(e,t,n)}))}},40078:function(e){e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},85445:function(e,t,n){var r=n(72060);e.exports=function(e,t){if(e!==t){var n=void 0!==e,a=null===e,o=e===e,i=r(e),s=void 0!==t,u=null===t,l=t===t,c=r(t);if(!u&&!c&&!i&&e>t||i&&s&&l&&!u&&!c||a&&s&&l||!n&&l||!o)return 1;if(!a&&!i&&!c&&e<t||c&&n&&o&&!a&&!i||u&&n&&o||!s&&o||!l)return-1}return 0}},49674:function(e,t,n){var r=n(85445);e.exports=function(e,t,n){for(var a=-1,o=e.criteria,i=t.criteria,s=o.length,u=n.length;++a<s;){var l=r(o[a],i[a]);if(l)return a>=u?l:l*("desc"==n[a]?-1:1)}return e.index-t.index}},68520:function(e,t,n){var r=n(89318),a=n(95585);e.exports=function(e,t,n,o){return null==e?[]:(a(t)||(t=null==t?[]:[t]),a(n=o?void 0:n)||(n=null==n?[]:[n]),r(e,t,n))}},73709:function(e,t,n){"use strict";n.d(t,{o:function(){return o}});var r=n(66797),a=n(59023);function o(e,t){return void 0===t&&(t={}),(0,a.$)(e,(0,r.pi)({delimiter:"-"},t))}},46725:function(e,t,n){"use strict";n.d(t,{G:function(){return i}});var r=n(66797),a=n(26675);function o(e,t){var n=e.toLowerCase();return 0===t?function(e){return e.charAt(0).toUpperCase()+e.substr(1)}(n):n}function i(e,t){return void 0===t&&(t={}),(0,a.B)(e,(0,r.pi)({delimiter:" ",transform:o},t))}}}]);