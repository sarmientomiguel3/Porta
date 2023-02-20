"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[9433],{58772:function(e,n,t){t.d(n,{Z:function(){return h}});var o=t(1413),i=t(45987),r=t(94469),l=t(33604),s=t(96467),c=t(4117),a=t(24193),d=t(46417),u=["title","content","action","open","onClose"];function h(e){var n=e.title,t=e.content,h=e.action,x=e.open,f=e.onClose,Z=(0,i.Z)(e,u);return(0,d.jsxs)(r.Z,(0,o.Z)((0,o.Z)({fullWidth:!0,maxWidth:"xs",open:x,onClose:f},Z),{},{children:[(0,d.jsx)(l.Z,{sx:{pb:2},children:n}),t&&(0,d.jsxs)(s.Z,{sx:{typography:"body2"},children:[" ",t," "]}),(0,d.jsxs)(c.Z,{children:[h,(0,d.jsx)(a.Z,{variant:"outlined",color:"inherit",onClick:f,children:"Cancel"})]})]}))}},60656:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(1413),i=t(45987),r=t(35898),l=t(61113),s=t(59063),c=t(46417),a=["title","description","img","sx"];function d(e){var n=e.title,t=e.description,d=e.img,u=e.sx,h=(0,i.Z)(e,a);return(0,c.jsxs)(r.Z,(0,o.Z)((0,o.Z)({alignItems:"center",justifyContent:"center",sx:(0,o.Z)({height:1,textAlign:"center",p:function(e){return e.spacing(8,2)}},u)},h),{},{children:[(0,c.jsx)(s.Z,{disabledEffect:!0,alt:"empty content",src:d||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,c.jsx)(l.Z,{variant:"h5",gutterBottom:!0,children:n}),t&&(0,c.jsx)(l.Z,{variant:"body2",sx:{color:"text.secondary"},children:t})]}))}},54045:function(e,n,t){function o(e,n,t){return e>0?Math.max(0,(1+e)*n-t):0}function i(e,n,t){return n[t]<e[t]?-1:n[t]>e[t]?1:0}function r(e,n){return"desc"===e?function(e,t){return i(e,t,n)}:function(e,t){return-i(e,t,n)}}t.d(n,{$W:function(){return v},K:function(){return S},et:function(){return x},S_:function(){return L},Z4:function(){return D},hM:function(){return j},fQ:function(){return o},sQ:function(){return r},x6:function(){return c}});var l=t(29439),s=t(47313);function c(e){var n=(0,s.useState)(!(null===e||void 0===e||!e.defaultDense)),t=(0,l.Z)(n,2),o=t[0],i=t[1],r=(0,s.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),c=(0,l.Z)(r,2),a=c[0],d=c[1],u=(0,s.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),h=(0,l.Z)(u,2),x=h[0],f=h[1],Z=(0,s.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),p=(0,l.Z)(Z,2),g=p[0],j=p[1],v=(0,s.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),m=(0,l.Z)(v,2),C=m[0],b=m[1],w=(0,s.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),k=(0,l.Z)(w,2),S=k[0],y=k[1],I=(0,s.useCallback)((function(e){""!==e&&(f(a===e&&"asc"===x?"desc":"asc"),d(e))}),[x,a]),R=(0,s.useCallback)((function(e){var n=S.indexOf(e),t=[];-1===n?t=t.concat(S,e):0===n?t=t.concat(S.slice(1)):n===S.length-1?t=t.concat(S.slice(0,-1)):n>0&&(t=t.concat(S.slice(0,n),S.slice(n+1))),y(t)}),[S]),D=(0,s.useCallback)((function(e,n){y(e?n:[])}),[]),P=(0,s.useCallback)((function(e,n){j(n)}),[]),T=(0,s.useCallback)((function(e){j(0),b(parseInt(e.target.value,10))}),[]),F=(0,s.useCallback)((function(e){i(e.target.checked)}),[]);return{dense:o,order:x,page:g,orderBy:a,rowsPerPage:C,selected:S,onSelectRow:R,onSelectAllRows:D,onSort:I,onChangePage:P,onChangeDense:F,onChangeRowsPerPage:T,setPage:j,setDense:i,setOrder:f,setOrderBy:d,setSelected:y,setRowsPerPage:b}}var a=t(24076),d=t(67478),u=t(60656),h=t(46417);function x(e){var n=e.isNotFound;return(0,h.jsx)(a.Z,{children:n?(0,h.jsx)(d.Z,{colSpan:12,children:(0,h.jsx)(u.Z,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,h.jsx)(d.Z,{colSpan:12,sx:{p:0}})})}var f=t(1413),Z=t(36459),p=t(35898),g=t(84488);function j(e){var n=Object.assign({},((0,Z.Z)(e),e));return(0,h.jsx)(a.Z,(0,f.Z)((0,f.Z)({},n),{},{children:(0,h.jsx)(d.Z,{colSpan:12,children:(0,h.jsxs)(p.Z,{spacing:3,direction:"row",alignItems:"center",children:[(0,h.jsx)(g.Z,{variant:"rectangular",width:40,height:40,sx:{borderRadius:1,flexShrink:0}}),(0,h.jsx)(g.Z,{variant:"text",width:"100%",height:20}),(0,h.jsx)(g.Z,{variant:"text",width:160,height:20}),(0,h.jsx)(g.Z,{variant:"text",width:160,height:20}),(0,h.jsx)(g.Z,{variant:"text",width:160,height:20}),(0,h.jsx)(g.Z,{variant:"text",width:160,height:20})]})})}))}function v(e){var n=e.emptyRows,t=e.height;return n?(0,h.jsx)(a.Z,{sx:(0,f.Z)({},t&&{height:t*n}),children:(0,h.jsx)(d.Z,{colSpan:9})}):null}var m=t(23477),C=t(44758),b=t(82558),w=t(57829),k={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function S(e){var n=e.order,t=e.orderBy,o=e.rowCount,i=void 0===o?0:o,r=e.headLabel,l=e.numSelected,s=void 0===l?0:l,c=e.onSort,u=e.onSelectAllRows,x=e.sx;return(0,h.jsx)(m.Z,{sx:x,children:(0,h.jsxs)(a.Z,{children:[u&&(0,h.jsx)(d.Z,{padding:"checkbox",children:(0,h.jsx)(C.Z,{indeterminate:s>0&&s<i,checked:i>0&&s===i,onChange:function(e){return u(e.target.checked)}})}),r.map((function(e){return(0,h.jsx)(d.Z,{align:e.align||"left",sortDirection:t===e.id&&n,sx:{width:e.width,minWidth:e.minWidth},children:c?(0,h.jsxs)(b.Z,{hideSortIcon:!0,active:t===e.id,direction:t===e.id?n:"asc",onClick:function(){return c(e.id)},sx:{textTransform:"capitalize"},children:[e.label,t===e.id?(0,h.jsx)(w.Z,{sx:(0,f.Z)({},k),children:"desc"===n?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)}))]})})}var y=t(45987),I=t(61113),R=["dense","action","rowCount","numSelected","onSelectAllRows","sx"];function D(e){var n=e.dense,t=e.action,o=e.rowCount,i=e.numSelected,r=e.onSelectAllRows,l=e.sx,s=(0,y.Z)(e,R);return i?(0,h.jsxs)(p.Z,(0,f.Z)((0,f.Z)({direction:"row",alignItems:"center",sx:(0,f.Z)((0,f.Z)({pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter"},n&&{height:38}),l)},s),{},{children:[(0,h.jsx)(C.Z,{indeterminate:i>0&&i<o,checked:o>0&&i===o,onChange:function(e){return r(e.target.checked)}}),(0,h.jsxs)(I.Z,{variant:"subtitle1",sx:(0,f.Z)({ml:2,flexGrow:1,color:"primary.main"},n&&{ml:3}),children:[i," selected"]}),t&&t]})):null}var P=t(41493),T=t(83929),F=t(67426),z=["dense","onChangeDense","rowsPerPageOptions","sx"];function L(e){var n=e.dense,t=e.onChangeDense,o=e.rowsPerPageOptions,i=void 0===o?[5,10,25]:o,r=e.sx,l=(0,y.Z)(e,z);return(0,h.jsxs)(w.Z,{sx:(0,f.Z)({position:"relative"},r),children:[(0,h.jsx)(P.Z,(0,f.Z)({rowsPerPageOptions:i,component:"div"},l)),t&&(0,h.jsx)(T.Z,{label:"Dense",control:(0,h.jsx)(F.Z,{checked:n,onChange:t}),sx:{pl:2,py:1.5,top:0,position:{sm:"absolute"}}})]})}},49317:function(e,n,t){t.d(n,{Z:function(){return f},t:function(){return l}});var o=t(19860),i=t(66281),r=t(69043);function l(e){var n=(0,o.Z)(),t=(0,i.z)(),l=n.breakpoints.up("xl"===t?"lg":t),s=("h1"===e||"h2"===e||"h3"===e||"h4"===e||"h5"===e||"h6"===e)&&n.typography[e][l]?n.typography[e][l]:n.typography[e],c=(0,r.cv)(s.fontSize),a=Number(n.typography[e].lineHeight)*c,d=n.typography[e];return{fontSize:c,lineHeight:a,fontWeight:d.fontWeight,letterSpacing:d.letterSpacing}}var s=t(1413),c=t(45987),a=t(47313),d=t(90891),u=t(61113),h=t(46417),x=["asLink","variant","line","persistent","children","sx"],f=(0,a.forwardRef)((function(e,n){var t=e.asLink,o=e.variant,i=void 0===o?"body1":o,r=e.line,a=void 0===r?2:r,f=e.persistent,Z=void 0!==f&&f,p=e.children,g=e.sx,j=(0,c.Z)(e,x),v=l(i).lineHeight,m=(0,s.Z)((0,s.Z)({overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:a,WebkitBoxOrient:"vertical"},Z&&{height:v*a}),g);return t?(0,h.jsx)(d.Z,(0,s.Z)((0,s.Z)({color:"inherit",ref:n,variant:i,sx:(0,s.Z)({},m)},j),{},{children:p})):(0,h.jsx)(u.Z,(0,s.Z)((0,s.Z)({ref:n,variant:i,sx:(0,s.Z)({},m)},j),{},{children:p}))}))},41530:function(e,n,t){var o=t(74165),i=t(15861),r=t(29439),l=t(47313);n.Z=function(){var e=(0,l.useState)(null),n=(0,r.Z)(e,2),t=n[0],s=n[1],c=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(n){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=navigator)&&void 0!==t&&t.clipboard){e.next=3;break}return console.warn("Clipboard not supported"),e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,navigator.clipboard.writeText(n);case 6:return s(n),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(3),console.warn("Copy failed",e.t0),s(null),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(n){return e.apply(this,arguments)}}();return{copiedText:t,copy:c}}},58120:function(e,n,t){t.d(n,{Z:function(){return i}});var o=t(47313);function i(e){var n=e.click,t=e.doubleClick,i=e.timeout,r=void 0===i?250:i,l=(0,o.useRef)();return(0,o.useCallback)((function(e){l&&(clearTimeout(l.current),l.current=null),n&&1===e.detail&&(l.current=setTimeout((function(){n(e)}),r)),e.detail%2===0&&t(e)}),[n,t,r])}},29433:function(e,n,t){t.d(n,{KS:function(){return We},m$:function(){return K},v1:function(){return fe},Q9:function(){return ae},Mo:function(){return Ze},Fe:function(){return se},Yj:function(){return Te},qt:function(){return ye},UC:function(){return re},WO:function(){return Pe},c0:function(){return A}});var o=t(1413),i=t(29439),r=t(45987),l=t(47313),s=t(73428),c=t(44758),a=t(35898),d=t(57829),u=t(47131),h=t(51405),x=t(19536),f=t(24193),Z=t(41530),p=t(14322),g=t(76221),j=t(8730),v=t(22608),m=t(41034),C=t(49317),b=t(34345),w=t(58772),k=t(94469),S=t(33604),y=t(96467),I=t(24631),R=t(48310),D=t(4117),P=t(53261),T=t(60194),F=t(32600),z=t(63585),L=t(83213),W=t(61689),O=t(46417);function M(e){var n=e.person,t=(0,l.useState)(n.permission),r=(0,i.Z)(t,2),s=r[0],c=r[1],a=(0,l.useState)(null),d=(0,i.Z)(a,2),u=d[0],Z=d[1],p=function(){Z(null)},g=function(e){c(e)};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(T.ZP,{disableGutters:!0,children:[(0,O.jsx)(F.Z,{children:(0,O.jsx)(z.Z,{alt:n.name,src:n.avatar})}),(0,O.jsx)(L.Z,{primary:n.name,secondary:(0,O.jsx)(W.Z,{title:n.email,children:(0,O.jsx)("span",{children:n.email})}),primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{noWrap:!0},sx:{flexGrow:1,pr:1}}),(0,O.jsxs)(f.Z,{size:"small",color:"inherit",endIcon:(0,O.jsx)(j.Z,{icon:u?"eva:chevron-up-fill":"eva:chevron-down-fill"}),onClick:function(e){Z(e.currentTarget)},sx:(0,o.Z)({flexShrink:0,textTransform:"unset",fontWeight:"fontWeightMedium","& .MuiButton-endIcon":{ml:0}},u&&{bgcolor:"action.selected"}),children:["Can ",s]})]}),(0,O.jsx)(v.Z,{open:u,onClose:p,sx:{width:160},children:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(h.Z,{onClick:function(){p(),g("view")},sx:(0,o.Z)({},"view"===s&&{bgcolor:"action.selected"}),children:[(0,O.jsx)(j.Z,{icon:"eva:eye-fill"}),"Can view"]}),(0,O.jsxs)(h.Z,{onClick:function(){p(),g("edit")},sx:(0,o.Z)({},"edit"===s&&{bgcolor:"action.selected"}),children:[(0,O.jsx)(j.Z,{icon:"eva:edit-fill"}),"Can edit"]}),(0,O.jsx)(x.Z,{sx:{borderStyle:"dashed"}}),(0,O.jsxs)(h.Z,{onClick:function(){p()},sx:{color:"error.main"},children:[(0,O.jsx)(j.Z,{icon:"eva:trash-2-outline"}),"Remove"]})]})})]})}var E=["shared","inviteEmail","onCopyLink","onChangeInvite","open","onClose"];function A(e){var n=e.shared,t=e.inviteEmail,i=e.onCopyLink,l=e.onChangeInvite,s=e.open,c=e.onClose,d=(0,r.Z)(e,E),u=n&&!!n.length;return(0,O.jsxs)(k.Z,(0,o.Z)((0,o.Z)({fullWidth:!0,maxWidth:"xs",open:s,onClose:c},d),{},{children:[(0,O.jsx)(S.Z,{children:" Invite "}),(0,O.jsxs)(y.Z,{sx:{overflow:"unset"},children:[l&&(0,O.jsxs)(a.Z,{direction:"row",spacing:1,sx:{mb:3},children:[(0,O.jsx)(I.Z,{fullWidth:!0,size:"small",value:t,placeholder:"Email",onChange:l}),(0,O.jsx)(f.Z,{disabled:!t,variant:"contained",sx:{flexShrink:0},children:"Send Invite"})]}),u&&(0,O.jsx)(P.Z,{sx:{maxHeight:360},children:(0,O.jsx)(R.Z,{disablePadding:!0,children:n.map((function(e){return(0,O.jsx)(M,{person:e},e.id)}))})})]}),(0,O.jsxs)(D.Z,{sx:{justifyContent:"space-between"},children:[i&&(0,O.jsx)(f.Z,{startIcon:(0,O.jsx)(j.Z,{icon:"eva:link-2-fill"}),onClick:i,children:"Copy link"}),c&&(0,O.jsx)(f.Z,{variant:"outlined",color:"inherit",onClick:c,children:"Close"})]})]}))}var N=t(93433),B=t(46923),U=t(61113),_=t(19065),G=t(66212),q=["item","open","favorited","onFavorite","onCopyLink","onClose","onDelete"],H=["label","toggle","onToggle"];function K(e){var n=e.item,t=e.open,s=e.favorited,h=e.onFavorite,Z=e.onCopyLink,v=e.onClose,m=e.onDelete,C=(0,r.Z)(e,q),w=n.name,k=n.size,S=n.url,y=n.type,D=n.shared,T=n.dateModified,F=D&&!!D.length,z=(0,l.useState)(!1),L=(0,i.Z)(z,2),W=L[0],E=L[1],H=(0,l.useState)(!0),K=(0,i.Z)(H,2),V=K[0],Y=K[1],J=(0,l.useState)(""),X=(0,i.Z)(J,2),ee=X[0],ne=X[1],te=(0,l.useState)(n.tags.slice(0,3)),oe=(0,i.Z)(te,2),ie=oe[0],re=oe[1],le=(0,l.useState)(!0),se=(0,i.Z)(le,2),ce=se[0],ae=se[1];return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(B.ZP,(0,o.Z)((0,o.Z)({open:t,onClose:v,anchor:"right",BackdropProps:{invisible:!0},PaperProps:{sx:{width:320}}},C),{},{children:[(0,O.jsxs)(P.Z,{sx:{height:1},children:[(0,O.jsxs)(a.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:2.5},children:[(0,O.jsx)(U.Z,{variant:"h6",children:" Info "}),(0,O.jsx)(c.Z,{color:"warning",icon:(0,O.jsx)(j.Z,{icon:"eva:star-outline"}),checkedIcon:(0,O.jsx)(j.Z,{icon:"eva:star-fill"}),checked:s,onChange:h,sx:{p:.75}})]}),(0,O.jsxs)(a.Z,{spacing:2.5,justifyContent:"center",sx:{p:2.5,bgcolor:"background.neutral"},children:[(0,O.jsx)(b.ZP,{imageView:!0,file:"folder"===y?y:S,sx:{width:64,height:64},imgSx:{borderRadius:1}}),(0,O.jsx)(U.Z,{variant:"h6",sx:{wordBreak:"break-all"},children:w}),(0,O.jsx)(x.Z,{sx:{borderStyle:"dashed"}}),(0,O.jsxs)(a.Z,{spacing:1,children:[(0,O.jsx)(Q,{label:"Tags",toggle:V,onToggle:function(){Y(!V)}}),V&&(0,O.jsx)(_.Z,{multiple:!0,freeSolo:!0,limitTags:2,options:n.tags.map((function(e){return e})),value:ie,onChange:function(e,n){re([].concat((0,N.Z)(ie),(0,N.Z)(n.filter((function(e){return-1===ie.indexOf(e)})))))},renderTags:function(e,n){return e.map((function(e,t){return(0,l.createElement)(G.Z,(0,o.Z)((0,o.Z)({},n({index:t})),{},{size:"small",variant:"soft",label:e,key:e}))}))},renderInput:function(e){return(0,O.jsx)(I.Z,(0,o.Z)((0,o.Z)({},e),{},{placeholder:"#Add a tags"}))}})]}),(0,O.jsxs)(a.Z,{spacing:1.5,children:[(0,O.jsx)(Q,{label:"Properties",toggle:ce,onToggle:function(){ae(!ce)}}),ce&&(0,O.jsxs)(a.Z,{spacing:1.5,children:[(0,O.jsx)($,{label:"Size",value:(0,g.oe)(k)}),(0,O.jsx)($,{label:"Modified",value:(0,p.zM)(T)}),(0,O.jsx)($,{label:"Type",value:(0,b.fH)(y)})]})]})]}),(0,O.jsxs)(a.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:2.5},children:[(0,O.jsx)(U.Z,{variant:"subtitle2",children:" File Share With "}),(0,O.jsx)(u.Z,{size:"small",color:"success",onClick:function(){E(!0)},sx:{p:0,width:24,height:24,color:"common.white",bgcolor:"success.main","&:hover":{bgcolor:"success.main"}},children:(0,O.jsx)(j.Z,{icon:"eva:plus-fill"})})]}),F&&(0,O.jsx)(R.Z,{disablePadding:!0,sx:{pl:2.5,pr:1},children:D.map((function(e){return(0,O.jsx)(M,{person:e},e.id)}))})]}),(0,O.jsx)(d.Z,{sx:{p:2.5},children:(0,O.jsx)(f.Z,{fullWidth:!0,variant:"soft",color:"error",size:"large",startIcon:(0,O.jsx)(j.Z,{icon:"eva:trash-2-outline"}),onClick:m,children:"Delete"})})]})),(0,O.jsx)(A,{open:W,shared:D,inviteEmail:ee,onChangeInvite:function(e){ne(e.target.value)},onCopyLink:Z,onClose:function(){E(!1),ne("")}})]})}function Q(e){var n=e.label,t=e.toggle,i=e.onToggle,l=(0,r.Z)(e,H);return(0,O.jsxs)(a.Z,(0,o.Z)((0,o.Z)({direction:"row",alignItems:"center",justifyContent:"space-between"},l),{},{children:[(0,O.jsxs)(U.Z,{variant:"subtitle2",children:[" ",n," "]}),(0,O.jsx)(u.Z,{size:"small",onClick:i,children:(0,O.jsx)(j.Z,{icon:t?"eva:chevron-up-fill":"eva:chevron-down-fill"})})]}))}function $(e){var n=e.label,t=e.value,o=void 0===t?"":t;return(0,O.jsxs)(a.Z,{direction:"row",sx:{typography:"caption",textTransform:"capitalize"},children:[(0,O.jsx)(d.Z,{component:"span",sx:{width:80,color:"text.secondary",mr:2},children:n}),o]})}var V=["file","selected","onSelect","onDelete","sx"];function Y(e){var n=e.file,t=e.selected,k=e.onSelect,S=e.onDelete,y=e.sx,I=(0,r.Z)(e,V),R=(0,m.Ds)().enqueueSnackbar,D=(0,Z.Z)().copy,P=(0,l.useState)(""),T=(0,i.Z)(P,2),F=T[0],z=T[1],L=(0,l.useState)(!1),W=(0,i.Z)(L,2),M=W[0],E=W[1],N=(0,l.useState)(!1),B=(0,i.Z)(N,2),U=B[0],_=B[1],G=(0,l.useState)(!1),q=(0,i.Z)(G,2),H=q[0],Q=q[1],$=(0,l.useState)(!1),Y=(0,i.Z)($,2),J=Y[0],X=Y[1],ee=(0,l.useState)(n.isFavorited),ne=(0,i.Z)(ee,2),te=ne[0],oe=ne[1],ie=(0,l.useState)(null),re=(0,i.Z)(ie,2),le=re[0],se=re[1],ce=function(){oe(!te)},ae=function(){X(!1)},de=function(){se(null)},ue=function(){R("Copied!"),D(n.url)};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(s.Z,(0,o.Z)((0,o.Z)({onMouseEnter:function(){E(!0)},onMouseLeave:function(){E(!1)},sx:(0,o.Z)((0,o.Z)({p:2.5,width:1,maxWidth:222,boxShadow:0,bgcolor:"background.default",border:function(e){return"solid 1px ".concat(e.palette.divider)}},(M||t)&&{borderColor:"transparent",bgcolor:"background.paper",boxShadow:function(e){return e.customShadows.z20}}),y)},I),{},{children:[(M||t)&&k?(0,O.jsx)(c.Z,{checked:t,onClick:k,icon:(0,O.jsx)(j.Z,{icon:"eva:radio-button-off-fill"}),checkedIcon:(0,O.jsx)(j.Z,{icon:"eva:checkmark-circle-2-fill"})}):(0,O.jsx)(b.ZP,{file:n.type,sx:{width:40,height:40}}),(0,O.jsx)(C.Z,{variant:"subtitle2",persistent:!0,onClick:function(){X(!0)},sx:{mt:2,mb:.5},children:n.name}),(0,O.jsxs)(a.Z,{spacing:.75,direction:"row",alignItems:"center",sx:{typography:"caption",color:"text.disabled",mt:.5},children:[(0,O.jsxs)(d.Z,{children:[" ",(0,g.oe)(n.size)," "]}),(0,O.jsx)(d.Z,{sx:{width:2,height:2,borderRadius:"50%",bgcolor:"currentColor"}}),(0,O.jsxs)(d.Z,{children:[" ",(0,p.zM)(n.dateModified)," "]})]}),(0,O.jsxs)(a.Z,{direction:"row",alignItems:"center",sx:{top:8,right:8,position:"absolute"},children:[(0,O.jsx)(c.Z,{color:"warning",icon:(0,O.jsx)(j.Z,{icon:"eva:star-outline"}),checkedIcon:(0,O.jsx)(j.Z,{icon:"eva:star-fill"}),checked:te,onChange:ce,sx:{p:.75}}),(0,O.jsx)(u.Z,{color:le?"inherit":"default",onClick:function(e){se(e.currentTarget)},children:(0,O.jsx)(j.Z,{icon:"eva:more-vertical-fill"})})]})]})),(0,O.jsxs)(v.Z,{open:le,onClose:de,arrow:"right-top",sx:{width:160},children:[(0,O.jsxs)(h.Z,{onClick:function(){de(),ue()},children:[(0,O.jsx)(j.Z,{icon:"eva:link-2-fill"}),"Copy Link"]}),(0,O.jsxs)(h.Z,{onClick:function(){de(),_(!0)},children:[(0,O.jsx)(j.Z,{icon:"eva:share-fill"}),"Share"]}),(0,O.jsx)(x.Z,{sx:{borderStyle:"dashed"}}),(0,O.jsxs)(h.Z,{onClick:function(){Q(!0),de()},sx:{color:"error.main"},children:[(0,O.jsx)(j.Z,{icon:"eva:trash-2-outline"}),"Delete"]})]}),(0,O.jsx)(K,{item:n,favorited:te,onFavorite:ce,onCopyLink:ue,open:J,onClose:ae,onDelete:function(){ae(),S()}}),(0,O.jsx)(A,{open:U,shared:n.shared,inviteEmail:F,onChangeInvite:function(e){z(e.target.value)},onCopyLink:ue,onClose:function(){_(!1),z("")}}),(0,O.jsx)(w.Z,{open:H,onClose:function(){Q(!1)},title:"Delete",content:"Are you sure want to delete?",action:(0,O.jsx)(f.Z,{variant:"contained",color:"error",onClick:S,children:"Delete"})})]})}var J=t(24076),X=t(67478),ee=t(76017),ne=t(58120);function te(e){var n=e.row,t=e.selected,r=e.onSelectRow,s=e.onDeleteRow,d=n.name,C=n.size,k=n.type,S=n.dateModified,y=n.shared,I=n.isFavorited,R=(0,m.Ds)().enqueueSnackbar,D=(0,Z.Z)().copy,P=(0,l.useState)(""),T=(0,i.Z)(P,2),F=T[0],L=T[1],W=(0,l.useState)(!1),M=(0,i.Z)(W,2),E=M[0],N=M[1],B=(0,l.useState)(!1),_=(0,i.Z)(B,2),G=_[0],q=_[1],H=(0,l.useState)(!1),Q=(0,i.Z)(H,2),$=Q[0],V=Q[1],Y=(0,l.useState)(I),te=(0,i.Z)(Y,2),oe=te[0],ie=te[1],re=(0,l.useState)(null),le=(0,i.Z)(re,2),se=le[0],ce=le[1],ae=function(){ie(!oe)},de=function(){ce(null)},ue=(0,ne.Z)({click:function(){q(!0)},doubleClick:function(){return console.log("DOUBLE CLICK")}}),he=function(){R("Copied!"),D(n.url)};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(J.Z,{sx:(0,o.Z)({borderRadius:1,"& .MuiTableCell-root":{bgcolor:"background.default"}},G&&{"& .MuiTableCell-root":{color:"text.primary",typography:"subtitle2",bgcolor:"background.default"}}),children:[(0,O.jsx)(X.Z,{padding:"checkbox",sx:{borderTopLeftRadius:8,borderBottomLeftRadius:8},children:(0,O.jsx)(c.Z,{checked:t,onDoubleClick:function(){return console.log("ON DOUBLE CLICK")},onClick:r})}),(0,O.jsx)(X.Z,{onClick:ue,children:(0,O.jsxs)(a.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,O.jsx)(b.ZP,{file:k}),(0,O.jsx)(U.Z,{noWrap:!0,variant:"inherit",sx:{maxWidth:360,cursor:"pointer"},children:d})]})}),(0,O.jsx)(X.Z,{align:"left",onClick:ue,sx:{color:"text.secondary",whiteSpace:"nowrap"},children:(0,g.oe)(C)}),(0,O.jsx)(X.Z,{align:"center",onClick:ue,sx:{color:"text.secondary",whiteSpace:"nowrap"},children:k}),(0,O.jsx)(X.Z,{align:"left",onClick:ue,sx:{color:"text.secondary",whiteSpace:"nowrap"},children:(0,p.Mu)(S)}),(0,O.jsx)(X.Z,{align:"right",onClick:ue,children:(0,O.jsx)(ee.Z,{max:4,sx:{"& .MuiAvatarGroup-avatar":{width:24,height:24,"&:first-of-type":{fontSize:12}}},children:y&&y.map((function(e){return(0,O.jsx)(z.Z,{alt:e.name,src:e.avatar},e.id)}))})}),(0,O.jsxs)(X.Z,{align:"right",sx:{whiteSpace:"nowrap",borderTopRightRadius:8,borderBottomRightRadius:8},children:[(0,O.jsx)(c.Z,{color:"warning",icon:(0,O.jsx)(j.Z,{icon:"eva:star-outline"}),checkedIcon:(0,O.jsx)(j.Z,{icon:"eva:star-fill"}),checked:oe,onChange:ae,sx:{p:.75}}),(0,O.jsx)(u.Z,{color:se?"inherit":"default",onClick:function(e){ce(e.currentTarget)},children:(0,O.jsx)(j.Z,{icon:"eva:more-vertical-fill"})})]})]}),(0,O.jsxs)(v.Z,{open:se,onClose:de,arrow:"right-top",sx:{width:160},children:[(0,O.jsxs)(h.Z,{onClick:function(){de(),he()},children:[(0,O.jsx)(j.Z,{icon:"eva:link-2-fill"}),"Copy Link"]}),(0,O.jsxs)(h.Z,{onClick:function(){de(),N(!0)},children:[(0,O.jsx)(j.Z,{icon:"eva:share-fill"}),"Share"]}),(0,O.jsx)(x.Z,{sx:{borderStyle:"dashed"}}),(0,O.jsxs)(h.Z,{onClick:function(){V(!0),de()},sx:{color:"error.main"},children:[(0,O.jsx)(j.Z,{icon:"eva:trash-2-outline"}),"Delete"]})]}),(0,O.jsx)(K,{item:n,favorited:oe,onFavorite:ae,onCopyLink:he,open:G,onClose:function(){q(!1)},onDelete:s}),(0,O.jsx)(A,{open:E,shared:y,inviteEmail:F,onChangeInvite:function(e){L(e.target.value)},onCopyLink:he,onClose:function(){N(!1),L("")}}),(0,O.jsx)(w.Z,{open:$,onClose:function(){V(!1)},title:"Delete",content:"Are you sure want to delete?",action:(0,O.jsx)(f.Z,{variant:"contained",color:"error",onClick:s,children:"Delete"})})]})}var oe=t(38789),ie=["title","open","onClose","onCreate","onUpdate","folderName","onChangeFolderName"];function re(e){var n=e.title,t=void 0===n?"Upload Files":n,s=e.open,c=e.onClose,d=e.onCreate,u=e.onUpdate,h=e.folderName,x=e.onChangeFolderName,Z=(0,r.Z)(e,ie),p=(0,l.useState)([]),g=(0,i.Z)(p,2),v=g[0],m=g[1];(0,l.useEffect)((function(){s||m([])}),[s]);var C=(0,l.useCallback)((function(e){var n=e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}));m([].concat((0,N.Z)(v),(0,N.Z)(n)))}),[v]);return(0,O.jsxs)(k.Z,(0,o.Z)((0,o.Z)({fullWidth:!0,maxWidth:"sm",open:s,onClose:c},Z),{},{children:[(0,O.jsxs)(S.Z,{sx:{p:function(e){return e.spacing(3,3,2,3)}},children:[" ",t," "]}),(0,O.jsxs)(y.Z,{dividers:!0,sx:{pt:1,pb:0,border:"none"},children:[(d||u)&&(0,O.jsx)(I.Z,{fullWidth:!0,label:"Folder name",value:h,onChange:x,sx:{mb:3}}),(0,O.jsx)(oe.gq,{multiple:!0,files:v,onDrop:C,onRemove:function(e){var n=v.filter((function(n){return n!==e}));m(n)}})]}),(0,O.jsxs)(D.Z,{children:[(0,O.jsx)(f.Z,{variant:"contained",startIcon:(0,O.jsx)(j.Z,{icon:"eva:cloud-upload-fill"}),onClick:function(){c(),console.log("ON UPLOAD")},children:"Upload"}),!!v.length&&(0,O.jsx)(f.Z,{variant:"outlined",color:"inherit",onClick:function(){m([])},children:"Remove all"}),(d||u)&&(0,O.jsx)(a.Z,{direction:"row",justifyContent:"flex-end",flexGrow:1,children:(0,O.jsx)(f.Z,{variant:"soft",onClick:d||u,children:u?"Save":"Create"})})]})]}))}var le=["folder","selected","onSelect","onDelete","sx"];function se(e){var n=e.folder,t=e.selected,p=e.onSelect,b=e.onDelete,k=e.sx,S=(0,r.Z)(e,le),y=(0,m.Ds)().enqueueSnackbar,I=(0,Z.Z)().copy,R=(0,l.useState)(""),D=(0,i.Z)(R,2),P=D[0],T=D[1],F=(0,l.useState)(!1),z=(0,i.Z)(F,2),L=z[0],W=z[1],M=(0,l.useState)(!1),E=(0,i.Z)(M,2),N=E[0],B=E[1],U=(0,l.useState)(!1),_=(0,i.Z)(U,2),G=_[0],q=_[1],H=(0,l.useState)(!1),Q=(0,i.Z)(H,2),$=Q[0],V=Q[1],Y=(0,l.useState)(n.name),J=(0,i.Z)(Y,2),X=J[0],ee=J[1],ne=(0,l.useState)(!1),te=(0,i.Z)(ne,2),oe=te[0],ie=te[1],se=(0,l.useState)(null),ce=(0,i.Z)(se,2),ae=ce[0],de=ce[1],ue=(0,l.useState)(n.isFavorited),he=(0,i.Z)(ue,2),xe=he[0],fe=he[1],Ze=function(){fe(!xe)},pe=function(){V(!1)},ge=function(){ie(!1)},je=function(){de(null)},ve=function(){y("Copied!"),I(n.url)};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(s.Z,(0,o.Z)((0,o.Z)({onMouseEnter:function(){W(!0)},onMouseLeave:function(){W(!1)},sx:(0,o.Z)((0,o.Z)({p:2.5,width:1,maxWidth:222,boxShadow:0,bgcolor:"background.default",border:function(e){return"solid 1px ".concat(e.palette.divider)}},(L||t)&&{borderColor:"transparent",bgcolor:"background.paper",boxShadow:function(e){return e.customShadows.z20}}),k)},S),{},{children:[(0,O.jsxs)(a.Z,{direction:"row",alignItems:"center",sx:{top:8,right:8,position:"absolute"},children:[(0,O.jsx)(c.Z,{color:"warning",icon:(0,O.jsx)(j.Z,{icon:"eva:star-outline"}),checkedIcon:(0,O.jsx)(j.Z,{icon:"eva:star-fill"}),checked:xe,onChange:Ze,sx:{p:.75}}),(0,O.jsx)(u.Z,{color:ae?"inherit":"default",onClick:function(e){de(e.currentTarget)},children:(0,O.jsx)(j.Z,{icon:"eva:more-vertical-fill"})})]}),(L||t)&&p?(0,O.jsx)(c.Z,{checked:t,onClick:p,icon:(0,O.jsx)(j.Z,{icon:"eva:radio-button-off-fill"}),checkedIcon:(0,O.jsx)(j.Z,{icon:"eva:checkmark-circle-2-fill"})}):(0,O.jsx)(d.Z,{component:"img",src:"/assets/icons/files/ic_folder.svg",sx:{width:40,height:40}}),(0,O.jsx)(C.Z,{variant:"h6",onClick:function(){V(!0)},sx:{mt:1,mb:.5},children:n.name}),(0,O.jsxs)(a.Z,{direction:"row",alignItems:"center",spacing:.75,sx:{typography:"caption",color:"text.disabled"},children:[(0,O.jsxs)(d.Z,{children:[" ",(0,g.oe)(n.size)," "]}),(0,O.jsx)(d.Z,{sx:{width:2,height:2,borderRadius:"50%",bgcolor:"currentColor"}}),(0,O.jsxs)(d.Z,{children:[" ",n.totalFiles," files "]})]})]})),(0,O.jsxs)(v.Z,{open:ae,onClose:je,arrow:"right-top",sx:{width:160},children:[(0,O.jsxs)(h.Z,{onClick:function(){je(),ve()},children:[(0,O.jsx)(j.Z,{icon:"eva:link-2-fill"}),"Copy Link"]}),(0,O.jsxs)(h.Z,{onClick:function(){je(),B(!0)},children:[(0,O.jsx)(j.Z,{icon:"eva:share-fill"}),"Share"]}),(0,O.jsxs)(h.Z,{onClick:function(){je(),ie(!0)},children:[(0,O.jsx)(j.Z,{icon:"eva:edit-fill"}),"Edit"]}),(0,O.jsx)(x.Z,{sx:{borderStyle:"dashed"}}),(0,O.jsxs)(h.Z,{onClick:function(){q(!0),je()},sx:{color:"error.main"},children:[(0,O.jsx)(j.Z,{icon:"eva:trash-2-outline"}),"Delete"]})]}),(0,O.jsx)(K,{item:n,favorited:xe,onFavorite:Ze,onCopyLink:ve,open:$,onClose:pe,onDelete:function(){pe(),b()}}),(0,O.jsx)(A,{open:N,shared:n.shared,inviteEmail:P,onChangeInvite:function(e){T(e.target.value)},onCopyLink:ve,onClose:function(){B(!1),T("")}}),(0,O.jsx)(re,{open:oe,onClose:ge,title:"Edit Folder",onUpdate:function(){ge(),ee(X),console.log("UPDATE FOLDER",X)},folderName:X,onChangeFolderName:function(e){return ee(e.target.value)}}),(0,O.jsx)(w.Z,{open:G,onClose:function(){q(!1)},title:"Delete",content:"Are you sure want to delete?",action:(0,O.jsx)(f.Z,{variant:"contained",color:"error",onClick:b,children:"Delete"})})]})}var ce=t(41727);function ae(e){var n=e.filterName,t=e.onFilterName;return(0,O.jsx)(I.Z,{size:"small",value:n,onChange:t,placeholder:"Search...",InputProps:{startAdornment:(0,O.jsx)(ce.Z,{position:"start",children:(0,O.jsx)(j.Z,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}var de=t(17551),ue=t(44183),he=t(86259),xe=["children","isSelected"];function fe(e){var n=e.children,t=e.isSelected,i=(0,r.Z)(e,xe);return(0,O.jsxs)(f.Z,(0,o.Z)((0,o.Z)({variant:"soft",color:"inherit",sx:(0,o.Z)({textTransform:"unset",color:"text.secondary",width:{xs:1,md:"auto"},justifyContent:"flex-start",fontWeight:"fontWeightMedium"},t&&{color:"text.primary"})},i),{},{children:[n,(0,O.jsx)(d.Z,{sx:{flexGrow:1}})]}))}function Ze(e){var n=e.optionsType,t=e.filterType,r=e.onFilterType,s=e.onReset,c=(0,l.useState)(null),u=(0,i.Z)(c,2),h=u[0],x=u[1],Z=function(){x(null)},p=!!t.length,g=t.length?t.slice(0,2).join(","):"All type";return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(fe,{isSelected:p,endIcon:(0,O.jsx)(j.Z,{icon:h?"eva:chevron-up-fill":"eva:chevron-down-fill"}),onClick:function(e){x(e.currentTarget)},children:[g,t.length>2&&(0,O.jsxs)(he.Z,{color:"info",sx:{ml:1},children:["+",t.length-2]})]}),(0,O.jsx)(v.Z,{open:h,onClose:Z,sx:{p:2.5},children:(0,O.jsxs)(a.Z,{spacing:2.5,children:[(0,O.jsx)(d.Z,{display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(4, 1fr)"},gap:1,children:n.map((function(e){var n=t.includes(e);return(0,O.jsx)(ue.Z,{onClick:function(){return r(e)},sx:(0,o.Z)({p:1,borderRadius:1,cursor:"pointer",color:"text.secondary",border:function(e){return"solid 1px ".concat((0,de.Fq)(e.palette.grey[500],.12))}},n&&{color:"text.primary",bgcolor:"action.selected"}),children:(0,O.jsxs)(a.Z,{spacing:.5,direction:"row",alignItems:"center",children:[(0,O.jsx)(b.ZP,{file:e}),(0,O.jsx)(U.Z,{variant:"body2",children:e})]})},e)}))}),(0,O.jsxs)(a.Z,{spacing:1,direction:"row",alignItems:"center",justifyContent:"flex-end",children:[(0,O.jsx)(f.Z,{variant:"outlined",color:"inherit",onClick:s,children:"Clear"}),(0,O.jsx)(f.Z,{variant:"contained",onClick:Z,children:"Apply"})]})]})})]})}var pe=t(17592),ge=t(12871),je=["action","selected","rowCount","numSelected","onSelectAllItems","sx"],ve=(0,pe.ZP)("div")((function(e){var n=e.theme;return{right:24,zIndex:9,bottom:40,display:"flex",position:"fixed",alignItems:"center",boxShadow:n.customShadows.z20,padding:n.spacing(1.5,1,1.5,2),borderRadius:n.shape.borderRadius,backgroundColor:n.palette.text.primary}}));function me(e){var n=e.action,t=e.selected,i=e.rowCount,l=e.numSelected,s=e.onSelectAllItems,a=e.sx,u=(0,r.Z)(e,je);return(0,O.jsx)(ge.Z,{children:(0,O.jsxs)(ve,(0,o.Z)((0,o.Z)({sx:a},u),{},{children:[(0,O.jsx)(c.Z,{indeterminate:l>0&&l<i,checked:i>0&&l===i,onChange:function(e){return s(e.target.checked)},icon:(0,O.jsx)(j.Z,{icon:"eva:radio-button-off-fill"}),checkedIcon:(0,O.jsx)(j.Z,{icon:"eva:checkmark-circle-2-fill"}),indeterminateIcon:(0,O.jsx)(j.Z,{icon:"eva:minus-circle-fill"})}),t&&(0,O.jsxs)(U.Z,{variant:"subtitle2",sx:{mr:2,color:function(e){return"light"===e.palette.mode?"common.white":"grey.800"}},children:[t.length,(0,O.jsx)(d.Z,{component:"span",sx:{ml:.5},children:"items selected"})]}),n&&n]}))})}var Ce=t(51629),be=t(66835),we=t(57861),ke=t(54045),Se=[{id:"name",label:"Name",align:"left"},{id:"size",label:"Size",align:"left",width:120},{id:"type",label:"Type",align:"center",width:120},{id:"dateModified",label:"Modified",align:"left",width:160},{id:"shared",label:"Shared",align:"right",width:100},{id:""}];function ye(e){var n=e.table,t=e.tableData,o=e.isNotFound,i=e.onDeleteRow,r=e.dataFiltered,l=e.onOpenConfirm,s=n.dense,c=n.page,a=n.order,h=n.orderBy,x=n.rowsPerPage,f=n.selected,Z=n.onSelectRow,p=n.onSelectAllRows,g=n.onSort,v=n.onChangeDense,m=n.onChangePage,C=n.onChangeRowsPerPage,b=s?52:72;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(d.Z,{sx:{px:1,position:"relative",borderRadius:1.5,bgcolor:"background.neutral"},children:[(0,O.jsx)(ke.Z4,{dense:s,numSelected:f.length,rowCount:t.length,onSelectAllRows:function(e){return p(e,t.map((function(e){return e.id})))},action:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(W.Z,{title:"Share",children:(0,O.jsx)(u.Z,{color:"primary",children:(0,O.jsx)(j.Z,{icon:"eva:share-fill"})})}),(0,O.jsx)(W.Z,{title:"Delete",children:(0,O.jsx)(u.Z,{color:"primary",onClick:l,children:(0,O.jsx)(j.Z,{icon:"eva:trash-2-outline"})})})]}),sx:{pl:1,pr:2,top:8,left:8,right:8,width:"auto",borderRadius:1}}),(0,O.jsx)(Ce.Z,{children:(0,O.jsxs)(be.Z,{size:s?"small":"medium",sx:{minWidth:960,borderCollapse:"separate",borderSpacing:"0 8px","& .MuiTableCell-head":{boxShadow:"none !important"}},children:[(0,O.jsx)(ke.K,{order:a,orderBy:h,headLabel:Se,rowCount:t.length,numSelected:f.length,onSort:g,onSelectAllRows:function(e){return p(e,t.map((function(e){return e.id})))},sx:{"& .MuiTableCell-head":{bgcolor:"transparent"}}}),(0,O.jsxs)(we.Z,{children:[r.slice(c*x,c*x+x).map((function(e){return(0,O.jsx)(te,{row:e,selected:f.includes(e.id),onSelectRow:function(){return Z(e.id)},onDeleteRow:function(){return i(e.id)}},e.id)})),(0,O.jsx)(ke.$W,{height:b,emptyRows:(0,ke.fQ)(c,x,t.length)}),(0,O.jsx)(ke.et,{isNotFound:o})]})]})})]}),(0,O.jsx)(ke.S_,{count:r.length,page:c,rowsPerPage:x,onPageChange:m,onRowsPerPageChange:C,dense:s,onChangeDense:v,sx:{"& .MuiTablePagination-root":{borderTop:"none"},"& .MuiFormControlLabel-root":{px:0}}})]})}var Ie=t(65033),Re=t(2135),De=["title","subTitle","link","onOpen","collapse","onCollapse","sx"];function Pe(e){var n=e.title,t=e.subTitle,i=e.link,l=e.onOpen,s=e.collapse,c=e.onCollapse,d=e.sx,h=(0,r.Z)(e,De);return(0,O.jsxs)(a.Z,(0,o.Z)((0,o.Z)({direction:"row",alignItems:"center",sx:(0,o.Z)({mb:3},d)},h),{},{children:[(0,O.jsxs)(a.Z,{flexGrow:1,children:[(0,O.jsxs)(a.Z,{direction:"row",alignItems:"center",spacing:1,flexGrow:1,children:[(0,O.jsxs)(U.Z,{variant:"h6",children:[" ",n," "]}),(0,O.jsx)(u.Z,{size:"small",color:"success",onClick:l,sx:{p:0,width:24,height:24,color:"common.white",bgcolor:"success.main","&:hover":{bgcolor:"success.main"}},children:(0,O.jsx)(j.Z,{icon:"eva:plus-fill"})})]}),(0,O.jsx)(U.Z,{variant:"body2",sx:{color:"text.disabled",mt:.5},children:t})]}),i&&(0,O.jsx)(f.Z,{component:Re.rU,to:i,size:"small",color:"inherit",endIcon:(0,O.jsx)(j.Z,{icon:"eva:chevron-right-fill"}),children:"View All"}),c&&(0,O.jsx)(u.Z,{onClick:c,children:(0,O.jsx)(j.Z,{icon:s?"eva:chevron-down-fill":"eva:chevron-up-fill"})})]}))}function Te(e){var n=e.table,t=e.data,o=e.dataFiltered,r=e.onDeleteItem,s=e.onOpenConfirm,c=n.selected,a=n.onSelectRow,u=n.onSelectAllRows,h=(0,l.useRef)(null),Z=(0,l.useState)(""),p=(0,i.Z)(Z,2),g=p[0],v=p[1],m=(0,l.useState)(""),C=(0,i.Z)(m,2),b=C[0],w=C[1],k=(0,l.useState)(!1),S=(0,i.Z)(k,2),y=S[0],I=S[1],R=(0,l.useState)(!1),D=(0,i.Z)(R,2),P=D[0],T=D[1],F=(0,l.useState)(!1),z=(0,i.Z)(F,2),L=z[0],W=z[1],M=(0,l.useState)(!1),E=(0,i.Z)(M,2),N=E[0],B=E[1],U=(0,l.useState)(!1),_=(0,i.Z)(U,2),G=_[0],q=_[1],H=function(){W(!1)};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(d.Z,{ref:h,children:[(0,O.jsx)(Pe,{title:"Folders",subTitle:"".concat(t.filter((function(e){return"folder"===e.type})).length," folders"),onOpen:function(){W(!0)},collapse:G,onCollapse:function(){return q(!G)}}),(0,O.jsx)(Ie.Z,{in:!G,unmountOnExit:!0,children:(0,O.jsx)(d.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"},children:o.filter((function(e){return"folder"===e.type})).map((function(e){return(0,O.jsx)(se,{folder:e,selected:c.includes(e.id),onSelect:function(){return a(e.id)},onDelete:function(){return r(e.id)},sx:{maxWidth:"auto"}},e.id)}))})}),(0,O.jsx)(x.Z,{sx:{my:5,borderStyle:"dashed"}}),(0,O.jsx)(Pe,{title:"Files",subTitle:"".concat(t.filter((function(e){return"folder"!==e.type})).length," files"),onOpen:function(){B(!0)},collapse:P,onCollapse:function(){return T(!P)}}),(0,O.jsx)(Ie.Z,{in:!P,unmountOnExit:!0,children:(0,O.jsx)(d.Z,{display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"},gap:3,children:o.filter((function(e){return"folder"!==e.type})).map((function(e){return(0,O.jsx)(Y,{file:e,selected:c.includes(e.id),onSelect:function(){return a(e.id)},onDelete:function(){return r(e.id)},sx:{maxWidth:"auto"}},e.id)}))})}),!(null===c||void 0===c||!c.length)&&(0,O.jsx)(me,{numSelected:c.length,rowCount:t.length,selected:c,onSelectAllItems:function(e){return u(e,t.map((function(e){return e.id})))},action:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(f.Z,{size:"small",color:"error",variant:"contained",startIcon:(0,O.jsx)(j.Z,{icon:"eva:trash-2-outline"}),onClick:s,sx:{mr:1},children:"Delete"}),(0,O.jsx)(f.Z,{color:"inherit",size:"small",variant:"contained",startIcon:(0,O.jsx)(j.Z,{icon:"eva:share-fill"}),onClick:function(){I(!0)},sx:{color:function(e){return"light"===e.palette.mode?"grey.800":"common.white"},bgcolor:function(e){return"light"===e.palette.mode?"common.white":"grey.800"},"&:hover":{color:function(e){return"light"===e.palette.mode?"grey.800":"common.white"},bgcolor:function(e){return"light"===e.palette.mode?"common.white":"grey.800"}}},children:"Share"})]})})]}),(0,O.jsx)(A,{open:y,inviteEmail:b,onChangeInvite:function(e){w(e.target.value)},onClose:function(){I(!1),w("")}}),(0,O.jsx)(re,{open:N,onClose:function(){B(!1)}}),(0,O.jsx)(re,{open:L,onClose:H,title:"New Folder",onCreate:function(){H(),v(""),console.log("CREATE NEW FOLDER",g)},folderName:g,onChangeFolderName:function(e){return v(e.target.value)}})]})}var Fe=t(78770),ze=t(3789),Le=["value","onChange"];function We(e){var n=e.value,t=e.onChange,i=(0,r.Z)(e,Le);return(0,O.jsxs)(Fe.Z,(0,o.Z)((0,o.Z)({size:"small",color:"primary",value:n,exclusive:!0,onChange:t},i),{},{children:[(0,O.jsx)(ze.Z,{value:"list",children:(0,O.jsx)(j.Z,{icon:"eva:list-fill"})}),(0,O.jsx)(ze.Z,{value:"grid",children:(0,O.jsx)(j.Z,{icon:"eva:grid-fill"})})]}))}}}]);