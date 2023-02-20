"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[5684],{38875:function(e,r,t){t.d(r,{Z:function(){return m}});var n=t(1413),a=t(45987),o=t(57829),i=t(35898),s=t(61113),l=t(3404),c=t(90891),d=t(2135),u=t(46417);function p(e){var r=e.link,t=e.activeLast,a=e.disabled,i=r.name,s=r.href,l=r.icon,p=(0,n.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},a&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),h=(0,u.jsxs)(u.Fragment,{children:[l&&(0,u.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),i]});return s?(0,u.jsx)(c.Z,{component:d.rU,to:s,sx:p,children:h}):(0,u.jsxs)(o.Z,{sx:p,children:[" ",h," "]})}var h=["links","action","heading","moreLink","activeLast","sx"];function m(e){var r=e.links,t=e.action,d=e.heading,m=e.moreLink,g=e.activeLast,f=e.sx,Z=(0,a.Z)(e,h),v=r[r.length-1].name;return(0,u.jsxs)(o.Z,{sx:(0,n.Z)({mb:5},f),children:[(0,u.jsxs)(i.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(o.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:d}),!!r.length&&(0,u.jsx)(l.Z,(0,n.Z)((0,n.Z)({separator:(0,u.jsx)(x,{})},Z),{},{children:r.map((function(e){return(0,u.jsx)(p,{link:e,activeLast:g,disabled:e.name===v},e.name||"")}))}))]}),t&&(0,u.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!m&&(0,u.jsx)(o.Z,{sx:{mt:2},children:m.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function x(){return(0,u.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},15684:function(e,r,t){t.r(r),t.d(r,{default:function(){return C}});var n=t(29439),a=t(47313),o=t(65964),i=t(17592),s=t(19860),l=t(70501),c=t(57829),d=t(70178),u=t(35898),p=t(61113),h=t(9019),m=t(54299),x=t(83929),g=t(33827),f=t(48175),Z=t(38875),v=t(16769),b=t(46417),j=["1col","2col","3col","4col","6col","12col"],y=(0,i.ZP)(l.Z)((function(e){var r=e.theme;return{padding:r.spacing(5),border:"solid 1px ".concat(r.palette.divider),borderRadius:1.5*Number(r.shape.borderRadius),backgroundColor:r.palette.grey["light"===r.palette.mode?100:800]}}));function C(){var e=(0,s.Z)(),r=(0,a.useState)(2),t=(0,n.Z)(r,2),i=t[0],C=t[1],S=(0,a.useState)(3),w=(0,n.Z)(S,2),k=w[0],R=w[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o.ql,{children:(0,b.jsx)("title",{children:" Foundations: Grid | Minimal UI"})}),(0,b.jsx)(c.Z,{sx:{pt:6,pb:1,bgcolor:"light"===e.palette.mode?"grey.200":"grey.800"},children:(0,b.jsx)(d.Z,{children:(0,b.jsx)(Z.Z,{heading:"Grid",links:[{name:"Components",href:f.ko.components},{name:"Grid"}]})})}),(0,b.jsx)(d.Z,{sx:{my:10},children:(0,b.jsxs)(u.Z,{spacing:5,children:[(0,b.jsx)(v.g,{title:"Spacing",children:(0,b.jsxs)(y,{variant:"outlined",children:[(0,b.jsxs)(p.Z,{variant:"body2",sx:{mb:3,textAlign:"center"},children:["Spacing: ",(0,b.jsx)("strong",{children:e.spacing(Number(i))})]}),(0,b.jsx)(h.ZP,{container:!0,spacing:i,children:[0,1,2,3,4,5,6,7,8,9,10,11].map((function(r){return(0,b.jsx)(h.ZP,{item:!0,xs:1,children:(0,b.jsx)(l.Z,{sx:{height:80,boxShadow:e.customShadows.z8}})},r)}))}),(0,b.jsx)(m.Z,{row:!0,name:"spacing",value:i.toString(),onChange:function(e){C(Number(e.target.value))},sx:{mt:3,display:"flex",justifyContent:"center"},children:[0,1,2,3,4,5,6,7,8,9,10].map((function(e){return(0,b.jsx)(x.Z,{value:e.toString(),label:e.toString(),control:(0,b.jsx)(g.Z,{})},e)}))})]})}),(0,b.jsx)(v.g,{title:"Column",children:(0,b.jsxs)(y,{variant:"outlined",children:[(0,b.jsx)(h.ZP,{container:!0,spacing:3,children:[0,1,2,3,4,5,6,7,8,9,10,11].map((function(r){return(0,b.jsx)(h.ZP,{item:!0,xs:k,children:(0,b.jsxs)(l.Z,{sx:{py:3,textAlign:"center",boxShadow:e.customShadows.z8},children:["xs = ",k]})},r)}))}),(0,b.jsx)(m.Z,{row:!0,name:"column",value:k.toString(),onChange:function(e){R(Number(e.target.value))},sx:{mt:3,display:"flex",justifyContent:"center"},children:[12,6,4,3,2,1].map((function(e,r){return(0,b.jsx)(x.Z,{value:e.toString(),label:j[r],control:(0,b.jsx)(g.Z,{})},e)}))})]})})]})})]})}},16769:function(e,r,t){t.d(r,{_:function(){return u},g:function(){return d}});var n=t(1413),a=t(17551),o=t(70501),i=t(54641),s=t(57829),l=t(61113),c=t(46417);function d(e){var r=e.title,t=e.sx,l=e.children;return(0,c.jsxs)(o.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,a.Fq)(e.palette.grey[500],.04)}},children:[r&&(0,c.jsx)(i.Z,{title:r}),(0,c.jsx)(s.Z,{sx:(0,n.Z)({p:5,minHeight:180},t),children:l})]})}function u(e){var r=e.title;return(0,c.jsx)(l.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:r})}},3404:function(e,r,t){t.d(r,{Z:function(){return B}});var n=t(93433),a=t(29439),o=t(4942),i=t(87462),s=t(63366),l=t(47313),c=(t(96214),t(83061)),d=t(21921),u=t(17592),p=t(77342),h=t(61113),m=t(17551),x=t(54750),g=t(46417),f=(0,x.Z)((0,g.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Z=t(38743),v=(0,u.ZP)(Z.Z)((function(e){var r=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,m._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,m._4)(r.palette.grey[600],.12)})})})),b=(0,u.ZP)(f)({width:24,height:16});var j=function(e){var r=e;return(0,g.jsx)("li",{children:(0,g.jsx)(v,(0,i.Z)({focusRipple:!0},e,{ownerState:r,children:(0,g.jsx)(b,{ownerState:r})}))})},y=t(77430),C=t(32298);function S(e){return(0,C.Z)("MuiBreadcrumbs",e)}var w=(0,y.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),k=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],R=(0,u.ZP)(h.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,o.Z)({},"& .".concat(w.li),r.li),r.root]}})({}),N=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),P=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function M(e,r,t,n){return e.reduce((function(a,o,i){return i<e.length-1?a=a.concat(o,(0,g.jsx)(P,{"aria-hidden":!0,className:r,ownerState:n,children:t},"separator-".concat(i))):a.push(o),a}),[])}var B=l.forwardRef((function(e,r){var t=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),o=t.children,u=t.className,h=t.component,m=void 0===h?"nav":h,x=t.expandText,f=void 0===x?"Show path":x,Z=t.itemsAfterCollapse,v=void 0===Z?1:Z,b=t.itemsBeforeCollapse,y=void 0===b?1:b,C=t.maxItems,w=void 0===C?8:C,P=t.separator,B=void 0===P?"/":P,_=(0,s.Z)(t,k),T=l.useState(!1),H=(0,a.Z)(T,2),A=H[0],I=H[1],L=(0,i.Z)({},t,{component:m,expanded:A,expandText:f,itemsAfterCollapse:v,itemsBeforeCollapse:y,maxItems:w,separator:B}),z=function(e){var r=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},S,r)}(L),F=l.useRef(null),G=l.Children.toArray(o).filter((function(e){return l.isValidElement(e)})).map((function(e,r){return(0,g.jsx)("li",{className:z.li,children:e},"child-".concat(r))}));return(0,g.jsx)(R,(0,i.Z)({ref:r,component:m,color:"text.secondary",className:(0,c.Z)(z.root,u),ownerState:L},_,{children:(0,g.jsx)(N,{className:z.ol,ref:F,ownerState:L,children:M(A||w&&G.length<=w?G:function(e){return y+v>=e.length?e:[].concat((0,n.Z)(e.slice(0,y)),[(0,g.jsx)(j,{"aria-label":f,onClick:function(){I(!0);var e=F.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,n.Z)(e.slice(e.length-v,e.length)))}(G),z.separator,B,L)})}))}))},54641:function(e,r,t){t.d(r,{Z:function(){return y}});var n=t(4942),a=t(63366),o=t(87462),i=t(47313),s=t(83061),l=t(21921),c=t(61113),d=t(77342),u=t(17592),p=t(77430),h=t(32298);function m(e){return(0,h.Z)("MuiCardHeader",e)}var x=(0,p.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),g=t(46417),f=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],Z=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,r){var t;return(0,o.Z)((t={},(0,n.Z)(t,"& .".concat(x.title),r.title),(0,n.Z)(t,"& .".concat(x.subheader),r.subheader),t),r.root)}})({display:"flex",alignItems:"center",padding:16}),v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,r){return r.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,r){return r.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,r){return r.content}})({flex:"1 1 auto"}),y=i.forwardRef((function(e,r){var t=(0,d.Z)({props:e,name:"MuiCardHeader"}),n=t.action,i=t.avatar,u=t.className,p=t.component,h=void 0===p?"div":p,x=t.disableTypography,y=void 0!==x&&x,C=t.subheader,S=t.subheaderTypographyProps,w=t.title,k=t.titleTypographyProps,R=(0,a.Z)(t,f),N=(0,o.Z)({},t,{component:h,disableTypography:y}),P=function(e){var r=e.classes;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},m,r)}(N),M=w;null==M||M.type===c.Z||y||(M=(0,g.jsx)(c.Z,(0,o.Z)({variant:i?"body2":"h5",className:P.title,component:"span",display:"block"},k,{children:M})));var B=C;return null==B||B.type===c.Z||y||(B=(0,g.jsx)(c.Z,(0,o.Z)({variant:i?"body2":"body1",className:P.subheader,color:"text.secondary",component:"span",display:"block"},S,{children:B}))),(0,g.jsxs)(Z,(0,o.Z)({className:(0,s.Z)(P.root,u),as:h,ref:r,ownerState:N},R,{children:[i&&(0,g.jsx)(v,{className:P.avatar,ownerState:N,children:i}),(0,g.jsxs)(j,{className:P.content,ownerState:N,children:[M,B]}),n&&(0,g.jsx)(b,{className:P.action,ownerState:N,children:n})]}))}))}}]);