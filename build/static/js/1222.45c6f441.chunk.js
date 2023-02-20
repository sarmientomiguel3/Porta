"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[1222],{26253:function(e,t,n){n.d(t,{cU:function(){return R},i5:function(){return b},A0:function(){return u},ZP:function(){return S}});var i=n(44021),r=n(1413),o=n(17592),s=n(57829),a=n(35898),l=n(46417),c=(0,o.ZP)(s.Z,{shouldForwardProp:function(e){return"rounded"!==e}})((function(e){var t=e.rounded;return{zIndex:9,padding:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.theme.palette.primary.main,"& li":{width:18,height:18,opacity:.32,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer","&.slick-active":(0,r.Z)({opacity:1},t&&{"& span":{width:16,borderRadius:6}})}}})),d=(0,o.ZP)("span")((function(e){var t=e.theme;return{width:8,height:8,borderRadius:"50%",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.short})}}));function u(e){var t=(null===e||void 0===e?void 0:e.rounded)||!1,n=null===e||void 0===e?void 0:e.sx;return{appendDots:function(i){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(c,(0,r.Z)((0,r.Z)({component:"ul",rounded:t,sx:n},e),{},{children:i}))})},customPaging:function(){return(0,l.jsx)(a.Z,{component:"div",alignItems:"center",justifyContent:"center",sx:{width:1,height:1},children:(0,l.jsx)(d,{sx:{bgcolor:"currentColor"}})})}}}var h=n(45987),x=n(17551),p=n(19860),Z=n(47131),f=n(8730);function g(e){var t=e.icon,n=void 0===t?"eva:arrow-ios-forward-fill":t,i=e.isRTL;return(0,l.jsx)(f.Z,{icon:n,sx:(0,r.Z)({width:20,height:20,transform:" scaleX(-1)"},i&&{transform:" scaleX(1)"})})}function v(e){var t=e.icon,n=void 0===t?"eva:arrow-ios-forward-fill":t,i=e.isRTL;return(0,l.jsx)(f.Z,{icon:n,sx:(0,r.Z)({width:20,height:20},i&&{transform:" scaleX(-1)"})})}var m=["shape","filled","icon","onNext","onPrevious","children","leftButtonProps","rightButtonProps","sx"],j=(0,o.ZP)(Z.Z,{shouldForwardProp:function(e){return"filled"!==e&&"hasChildren"!==e&&"shape"!==e}})((function(e){var t=e.filled,n=e.shape,i=e.hasChildren,o=e.theme;return(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({color:"inherit",transition:o.transitions.create("all",{duration:o.transitions.duration.shorter})},"rounded"===n&&{borderRadius:1.5*Number(o.shape.borderRadius)}),!t&&{opacity:.48,"&:hover":{opacity:1}}),t&&{color:(0,x.Fq)(o.palette.common.white,.8),backgroundColor:(0,x.Fq)(o.palette.grey[900],.48),"&:hover":{color:o.palette.common.white,backgroundColor:o.palette.grey[900]}}),i&&{zIndex:9,top:"50%",position:"absolute",marginTop:o.spacing(-2.5)})}));function b(e){var t=e.shape,n=void 0===t?"circular":t,i=e.filled,o=void 0!==i&&i,s=e.icon,c=e.onNext,d=e.onPrevious,u=e.children,x=e.leftButtonProps,Z=e.rightButtonProps,f=e.sx,b=(0,h.Z)(e,m),w="rtl"===(0,p.Z)().direction;return!!u?(0,l.jsxs)(a.Z,(0,r.Z)((0,r.Z)({sx:f},b),{},{children:[(0,l.jsx)(j,(0,r.Z)((0,r.Z)({filled:o,shape:n,hasChildren:!!u,onClick:d},x),{},{sx:(0,r.Z)({left:16},null===x||void 0===x?void 0:x.sx),children:(0,l.jsx)(g,{icon:s,isRTL:w})})),u,(0,l.jsx)(j,(0,r.Z)((0,r.Z)({filled:o,shape:n,hasChildren:!!u,onClick:c},Z),{},{sx:(0,r.Z)({right:16},null===Z||void 0===Z?void 0:Z.sx),children:(0,l.jsx)(v,{icon:s,isRTL:w})}))]})):(0,l.jsxs)(a.Z,(0,r.Z)((0,r.Z)({direction:"row",alignItems:"center",display:"inline-flex",sx:f},b),{},{children:[(0,l.jsx)(j,(0,r.Z)((0,r.Z)({filled:o,shape:n,onClick:d},x),{},{children:(0,l.jsx)(g,{icon:s,isRTL:w})})),(0,l.jsx)(j,(0,r.Z)((0,r.Z)({filled:o,shape:n,onClick:c},Z),{},{children:(0,l.jsx)(v,{icon:s,isRTL:w})}))]}))}var w=n(61113),y=n(50769),C=["index","total","onNext","onPrevious","icon","sx"],k=(0,o.ZP)(s.Z)((function(e){var t=e.theme;return(0,r.Z)((0,r.Z)({},(0,y.Ls)({opacity:.48,color:t.palette.grey[900]})),{},{zIndex:9,display:"inline-flex",alignItems:"center",position:"absolute",bottom:t.spacing(2),right:t.spacing(2),padding:t.spacing(.25),color:t.palette.common.white,borderRadius:t.shape.borderRadius})})),P=(0,o.ZP)(Z.Z)({width:28,height:28,padding:0,opacity:.48,"&:hover":{opacity:1}});function R(e){var t=e.index,n=e.total,i=e.onNext,o=e.onPrevious,s=e.icon,a=e.sx,c=(0,h.Z)(e,C),d="rtl"===(0,p.Z)().direction;return(0,l.jsxs)(k,(0,r.Z)((0,r.Z)({sx:a},c),{},{children:[(0,l.jsx)(P,{color:"inherit",onClick:o,children:(0,l.jsx)(g,{icon:s,isRTL:d})}),(0,l.jsxs)(w.Z,{variant:"subtitle2",component:"span",sx:{mx:.25},children:[t+1,"/",n]}),(0,l.jsx)(P,{color:"inherit",onClick:i,children:(0,l.jsx)(v,{icon:s,isRTL:d})})]}))}var S=i.Z},49372:function(e,t,n){n.d(t,{fY:function(){return l},yM:function(){return d},hN:function(){return j}});var i=n(1413),r=n(17592),o=n(17551),s=n(24631),a=n(46417),l=(0,r.ZP)((function(e){return(0,a.jsx)(s.Z,(0,i.Z)({select:!0,SelectProps:{native:!0}},e))}))((function(e){var t=e.theme;return{"& fieldset":{display:"none"},"& select":(0,i.Z)((0,i.Z)({},t.typography.subtitle2),{},{padding:t.spacing(.5,0,.5,1),paddingRight:"28px !important"}),"& .MuiOutlinedInput-root":{borderRadius:.75*Number(t.shape.borderRadius),backgroundColor:(0,o.Fq)(t.palette.grey[500],.08)}}})),c=n(4942),d=(0,r.ZP)(s.Z,{shouldForwardProp:function(e){return"width"!==e}})((function(e){var t=e.width,n=e.theme;return{"& fieldset":{display:"none"},"& .MuiOutlinedInput-root":{width:t,border:"solid 1px ".concat((0,o.Fq)(n.palette.grey[500],.32)),transition:n.transitions.create(["box-shadow","width"],{duration:n.transitions.duration.shorter}),"&.Mui-focused":(0,i.Z)({boxShadow:n.customShadows.z20},t&&(0,c.Z)({},n.breakpoints.up("sm"),{width:t+60}))}}})),u=n(45987),h=n(75192),x=n.n(h),p=n(47313),Z=n(35898),f=n(47131),g=n(8730),v=["quantity","onIncrease","onDecrease","disabledIncrease","disabledDecrease","sx"],m=(0,p.forwardRef)((function(e,t){var n=e.quantity,r=e.onIncrease,s=e.onDecrease,l=e.disabledIncrease,c=e.disabledDecrease,d=e.sx,h=(0,u.Z)(e,v);return(0,a.jsxs)(Z.Z,(0,i.Z)((0,i.Z)({ref:t,flexShrink:0,direction:"row",alignItems:"center",justifyContent:"space-between",sx:(0,i.Z)({mb:.5,py:.5,px:.75,width:96,borderRadius:1,border:function(e){return"solid 1px ".concat((0,o.Fq)(e.palette.grey[500],.32))}},d)},h),{},{children:[(0,a.jsx)(f.Z,{size:"small",color:"inherit",onClick:s,disabled:c,sx:{color:"text.secondary"},children:(0,a.jsx)(g.Z,{icon:"eva:minus-fill",width:16})}),n,(0,a.jsx)(f.Z,{size:"small",color:"inherit",onClick:r,disabled:l,sx:{color:"text.secondary"},children:(0,a.jsx)(g.Z,{icon:"eva:plus-fill",width:16})})]}))}));m.propTypes={sx:x().object,onDecrease:x().func,onIncrease:x().func,quantity:x().number,disabledDecrease:x().bool,disabledIncrease:x().bool};var j=m},60656:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(1413),r=n(45987),o=n(35898),s=n(61113),a=n(59063),l=n(46417),c=["title","description","img","sx"];function d(e){var t=e.title,n=e.description,d=e.img,u=e.sx,h=(0,r.Z)(e,c);return(0,l.jsxs)(o.Z,(0,i.Z)((0,i.Z)({alignItems:"center",justifyContent:"center",sx:(0,i.Z)({height:1,textAlign:"center",p:function(e){return e.spacing(8,2)}},u)},h),{},{children:[(0,l.jsx)(a.Z,{disabledEffect:!0,alt:"empty content",src:d||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,l.jsx)(s.Z,{variant:"h5",gutterBottom:!0,children:t}),n&&(0,l.jsx)(s.Z,{variant:"body2",sx:{color:"text.secondary"},children:n})]}))}},54045:function(e,t,n){function i(e,t,n){return e>0?Math.max(0,(1+e)*t-n):0}function r(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function o(e,t){return"desc"===e?function(e,n){return r(e,n,t)}:function(e,n){return-r(e,n,t)}}n.d(t,{$W:function(){return m},K:function(){return k},et:function(){return x},S_:function(){return T},Z4:function(){return I},hM:function(){return v},fQ:function(){return i},sQ:function(){return o},x6:function(){return l}});var s=n(29439),a=n(47313);function l(e){var t=(0,a.useState)(!(null===e||void 0===e||!e.defaultDense)),n=(0,s.Z)(t,2),i=n[0],r=n[1],o=(0,a.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),l=(0,s.Z)(o,2),c=l[0],d=l[1],u=(0,a.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),h=(0,s.Z)(u,2),x=h[0],p=h[1],Z=(0,a.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),f=(0,s.Z)(Z,2),g=f[0],v=f[1],m=(0,a.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),j=(0,s.Z)(m,2),b=j[0],w=j[1],y=(0,a.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),C=(0,s.Z)(y,2),k=C[0],P=C[1],R=(0,a.useCallback)((function(e){""!==e&&(p(c===e&&"asc"===x?"desc":"asc"),d(e))}),[x,c]),S=(0,a.useCallback)((function(e){var t=k.indexOf(e),n=[];-1===t?n=n.concat(k,e):0===t?n=n.concat(k.slice(1)):t===k.length-1?n=n.concat(k.slice(0,-1)):t>0&&(n=n.concat(k.slice(0,t),k.slice(t+1))),P(n)}),[k]),I=(0,a.useCallback)((function(e,t){P(e?t:[])}),[]),F=(0,a.useCallback)((function(e,t){v(t)}),[]),D=(0,a.useCallback)((function(e){v(0),w(parseInt(e.target.value,10))}),[]),z=(0,a.useCallback)((function(e){r(e.target.checked)}),[]);return{dense:i,order:x,page:g,orderBy:c,rowsPerPage:b,selected:k,onSelectRow:S,onSelectAllRows:I,onSort:R,onChangePage:F,onChangeDense:z,onChangeRowsPerPage:D,setPage:v,setDense:r,setOrder:p,setOrderBy:d,setSelected:P,setRowsPerPage:w}}var c=n(24076),d=n(67478),u=n(60656),h=n(46417);function x(e){var t=e.isNotFound;return(0,h.jsx)(c.Z,{children:t?(0,h.jsx)(d.Z,{colSpan:12,children:(0,h.jsx)(u.Z,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,h.jsx)(d.Z,{colSpan:12,sx:{p:0}})})}var p=n(1413),Z=n(36459),f=n(35898),g=n(84488);function v(e){var t=Object.assign({},((0,Z.Z)(e),e));return(0,h.jsx)(c.Z,(0,p.Z)((0,p.Z)({},t),{},{children:(0,h.jsx)(d.Z,{colSpan:12,children:(0,h.jsxs)(f.Z,{spacing:3,direction:"row",alignItems:"center",children:[(0,h.jsx)(g.Z,{variant:"rectangular",width:40,height:40,sx:{borderRadius:1,flexShrink:0}}),(0,h.jsx)(g.Z,{variant:"text",width:"100%",height:20}),(0,h.jsx)(g.Z,{variant:"text",width:160,height:20}),(0,h.jsx)(g.Z,{variant:"text",width:160,height:20}),(0,h.jsx)(g.Z,{variant:"text",width:160,height:20}),(0,h.jsx)(g.Z,{variant:"text",width:160,height:20})]})})}))}function m(e){var t=e.emptyRows,n=e.height;return t?(0,h.jsx)(c.Z,{sx:(0,p.Z)({},n&&{height:n*t}),children:(0,h.jsx)(d.Z,{colSpan:9})}):null}var j=n(23477),b=n(44758),w=n(82558),y=n(57829),C={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function k(e){var t=e.order,n=e.orderBy,i=e.rowCount,r=void 0===i?0:i,o=e.headLabel,s=e.numSelected,a=void 0===s?0:s,l=e.onSort,u=e.onSelectAllRows,x=e.sx;return(0,h.jsx)(j.Z,{sx:x,children:(0,h.jsxs)(c.Z,{children:[u&&(0,h.jsx)(d.Z,{padding:"checkbox",children:(0,h.jsx)(b.Z,{indeterminate:a>0&&a<r,checked:r>0&&a===r,onChange:function(e){return u(e.target.checked)}})}),o.map((function(e){return(0,h.jsx)(d.Z,{align:e.align||"left",sortDirection:n===e.id&&t,sx:{width:e.width,minWidth:e.minWidth},children:l?(0,h.jsxs)(w.Z,{hideSortIcon:!0,active:n===e.id,direction:n===e.id?t:"asc",onClick:function(){return l(e.id)},sx:{textTransform:"capitalize"},children:[e.label,n===e.id?(0,h.jsx)(y.Z,{sx:(0,p.Z)({},C),children:"desc"===t?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)}))]})})}var P=n(45987),R=n(61113),S=["dense","action","rowCount","numSelected","onSelectAllRows","sx"];function I(e){var t=e.dense,n=e.action,i=e.rowCount,r=e.numSelected,o=e.onSelectAllRows,s=e.sx,a=(0,P.Z)(e,S);return r?(0,h.jsxs)(f.Z,(0,p.Z)((0,p.Z)({direction:"row",alignItems:"center",sx:(0,p.Z)((0,p.Z)({pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter"},t&&{height:38}),s)},a),{},{children:[(0,h.jsx)(b.Z,{indeterminate:r>0&&r<i,checked:i>0&&r===i,onChange:function(e){return o(e.target.checked)}}),(0,h.jsxs)(R.Z,{variant:"subtitle1",sx:(0,p.Z)({ml:2,flexGrow:1,color:"primary.main"},t&&{ml:3}),children:[r," selected"]}),n&&n]})):null}var F=n(41493),D=n(83929),z=n(67426),O=["dense","onChangeDense","rowsPerPageOptions","sx"];function T(e){var t=e.dense,n=e.onChangeDense,i=e.rowsPerPageOptions,r=void 0===i?[5,10,25]:i,o=e.sx,s=(0,P.Z)(e,O);return(0,h.jsxs)(y.Z,{sx:(0,p.Z)({position:"relative"},o),children:[(0,h.jsx)(F.Z,(0,p.Z)({rowsPerPageOptions:r,component:"div"},s)),n&&(0,h.jsx)(D.Z,{label:"Dense",control:(0,h.jsx)(z.Z,{checked:t,onChange:n}),sx:{pl:2,py:1.5,top:0,position:{sm:"absolute"}}})]})}},91222:function(e,t,n){n.d(t,{mu:function(){return ue},q7:function(){return ge},OP:function(){return O},H$:function(){return V},mE:function(){return ie},mb:function(){return be},wz:function(){return ae},E0:function(){return b},BB:function(){return p},xq:function(){return xe}});var i=n(1413),r=n(45987),o=n(19860),s=n(35898),a=n(57829),l=n(61113),c=n(76221),d=n(8730),u=n(47284),h=n(46417),x=["title","total","icon","color","chart","sx"];function p(e){var t=e.title,n=e.total,p=e.icon,Z=e.color,f=void 0===Z?"primary":Z,g=e.chart,v=e.sx,m=(0,r.Z)(e,x),j=(0,o.Z)(),b=g.series,w=g.options,y=(0,u.Q8)((0,i.Z)({colors:[j.palette[f].light],chart:{sparkline:{enabled:!0}},legend:{show:!1},plotOptions:{radialBar:{hollow:{size:"78%"},track:{margin:0},dataLabels:{name:{show:!1},value:{offsetY:6,color:j.palette.common.white,fontSize:j.typography.subtitle2.fontSize}}}}},w));return(0,h.jsxs)(s.Z,(0,i.Z)((0,i.Z)({direction:"row",alignItems:"center",sx:(0,i.Z)({p:3,borderRadius:2,overflow:"hidden",position:"relative",color:"common.white",bgcolor:"".concat(f,".dark")},v)},m),{},{children:[(0,h.jsx)(u.ZP,{type:"radialBar",series:[b],options:y,width:86,height:86}),(0,h.jsxs)(a.Z,{sx:{ml:3},children:[(0,h.jsxs)(l.Z,{variant:"h4",children:[" ",(0,c.FK)(n)]}),(0,h.jsx)(l.Z,{variant:"body2",sx:{opacity:.72},children:t})]}),(0,h.jsx)(d.Z,{icon:p,sx:{width:120,height:120,opacity:.12,position:"absolute",right:j.spacing(-3)}})]}))}var Z=n(4942),f=n(17592),g=n(50769),v=["title","description","action","img"],m=(0,f.ZP)("div")((function(e){var t=e.theme;return(0,Z.Z)({height:"100%",display:"flex",overflow:"hidden",position:"relative",color:t.palette.primary.darker,borderRadius:2*Number(t.shape.borderRadius),flexDirection:"column"},t.breakpoints.up("md"),{flexDirection:"row"})})),j=(0,f.ZP)("div")((function(e){var t=e.theme;return{top:0,left:0,zIndex:-1,width:"100%",height:"100%",position:"absolute",backgroundColor:t.palette.common.white,"&:before":(0,i.Z)({top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:-2,content:'""',opacity:.2},(0,g.v3)({direction:"135deg",startColor:t.palette.primary.light,endColor:t.palette.primary.main}))}}));function b(e){var t=e.title,n=e.description,o=e.action,a=e.img,c=(0,r.Z)(e,v);return(0,h.jsxs)(m,(0,i.Z)((0,i.Z)({},c),{},{children:[(0,h.jsxs)(s.Z,{flexGrow:1,justifyContent:"center",alignItems:{xs:"center",md:"flex-start"},sx:{pl:5,py:{xs:5,md:0},pr:{xs:5,md:0},textAlign:{xs:"center",md:"left"}},children:[(0,h.jsx)(l.Z,{paragraph:!0,variant:"h4",sx:{whiteSpace:"pre-line"},children:t}),(0,h.jsx)(l.Z,{variant:"body2",sx:{opacity:.8,mb:{xs:3,xl:5}},children:n}),o&&o]}),a&&a,(0,h.jsx)(j,{})]}))}var w=n(29439),y=n(89631),C=n(47313),k=n(17551),P=n(73428),R=n(90891),S=n(59063),I=n(55410),F=n(26253),D=["list"],z=(0,f.ZP)("div")((function(e){var t=e.theme;return{top:0,left:0,right:0,bottom:0,zIndex:8,position:"absolute",backgroundColor:(0,k.Fq)(t.palette.grey[900],.64)}}));function O(e){var t=e.list,n=(0,r.Z)(e,D),s=(0,o.Z)(),a=(0,C.useRef)(null),l=(0,C.useState)("rtl"===s.direction?t.length-1:0),c=(0,w.Z)(l,2),d=c[0],u=c[1],x=(0,i.Z)({speed:800,dots:!0,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===s.direction),beforeChange:function(e,t){return u(t)}},(0,F.A0)({sx:{top:20,left:20,position:"absolute"}}));return(0,h.jsxs)(P.Z,(0,i.Z)((0,i.Z)({},n),{},{children:[(0,h.jsx)(F.ZP,(0,i.Z)((0,i.Z)({ref:a},x),{},{children:t.map((function(e,t){return(0,h.jsx)(T,{item:e,isActive:t===d},e.id)}))})),(0,h.jsx)(F.i5,{onNext:function(){var e;null===(e=a.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=a.current)||void 0===e||e.slickPrev()},sx:{top:8,right:8,position:"absolute",color:"common.white"}})]}))}function T(e){var t=e.item,n=e.isActive,i=t.image,r=t.title,o=t.description;return(0,h.jsxs)(I.NM,{action:!0,animate:n,sx:{position:"relative"},children:[(0,h.jsxs)(s.Z,{spacing:1,sx:{p:3,width:1,bottom:0,zIndex:9,textAlign:"left",position:"absolute",color:"common.white"},children:[(0,h.jsx)(y.m.div,{variants:(0,I.EU)().inRight,children:(0,h.jsx)(l.Z,{variant:"overline",component:"div",sx:{opacity:.48},children:"Featured App"})}),(0,h.jsx)(y.m.div,{variants:(0,I.EU)().inRight,children:(0,h.jsx)(R.Z,{color:"inherit",underline:"none",children:(0,h.jsx)(l.Z,{variant:"h5",noWrap:!0,children:r})})}),(0,h.jsx)(y.m.div,{variants:(0,I.EU)().inRight,children:(0,h.jsx)(l.Z,{variant:"body2",noWrap:!0,children:o})})]}),(0,h.jsx)(z,{}),(0,h.jsx)(S.Z,{alt:r,src:i,sx:{height:{xs:280,xl:320}}})]})}var A=n(46725),q=n(54641),L=n(51629),N=n(66835),_=n(57861),B=n(19536),W=n(24193),E=n(24076),M=n(67478),K=n(47131),G=n(51405),Q=n(86259),U=n(53261),X=n(22608),Y=n(54045),H=["title","subheader","tableData","tableLabels"];function V(e){var t=e.title,n=e.subheader,o=e.tableData,s=e.tableLabels,l=(0,r.Z)(e,H);return(0,h.jsxs)(P.Z,(0,i.Z)((0,i.Z)({},l),{},{children:[(0,h.jsx)(q.Z,{title:t,subheader:n,sx:{mb:3}}),(0,h.jsx)(L.Z,{sx:{overflow:"unset"},children:(0,h.jsx)(U.Z,{children:(0,h.jsxs)(N.Z,{sx:{minWidth:720},children:[(0,h.jsx)(Y.K,{headLabel:s}),(0,h.jsx)(_.Z,{children:o.map((function(e){return(0,h.jsx)($,{row:e},e.id)}))})]})})}),(0,h.jsx)(B.Z,{}),(0,h.jsx)(a.Z,{sx:{p:2,textAlign:"right"},children:(0,h.jsx)(W.Z,{size:"small",color:"inherit",endIcon:(0,h.jsx)(d.Z,{icon:"eva:arrow-ios-forward-fill"}),children:"View All"})})]}))}function $(e){var t=e.row,n=(0,C.useState)(null),i=(0,w.Z)(n,2),r=i[0],o=i[1],s=function(){o(null)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(E.Z,{children:[(0,h.jsx)(M.Z,{children:"INV-".concat(t.id)}),(0,h.jsx)(M.Z,{children:t.category}),(0,h.jsx)(M.Z,{children:(0,c.e_)(t.price)}),(0,h.jsx)(M.Z,{children:(0,h.jsx)(Q.Z,{variant:"soft",color:("in_progress"===t.status?"warning":"out_of_date"===t.status&&"error")||"success",children:(0,A.G)(t.status)})}),(0,h.jsx)(M.Z,{align:"right",children:(0,h.jsx)(K.Z,{color:r?"inherit":"default",onClick:function(e){o(e.currentTarget)},children:(0,h.jsx)(d.Z,{icon:"eva:more-vertical-fill"})})})]}),(0,h.jsxs)(X.Z,{open:r,onClose:s,arrow:"right-top",sx:{width:160},children:[(0,h.jsxs)(G.Z,{onClick:function(){s(),console.log("DOWNLOAD",t.id)},children:[(0,h.jsx)(d.Z,{icon:"eva:download-fill"}),"Download"]}),(0,h.jsxs)(G.Z,{onClick:function(){s(),console.log("PRINT",t.id)},children:[(0,h.jsx)(d.Z,{icon:"eva:printer-fill"}),"Print"]}),(0,h.jsxs)(G.Z,{onClick:function(){s(),console.log("SHARE",t.id)},children:[(0,h.jsx)(d.Z,{icon:"eva:share-fill"}),"Share"]}),(0,h.jsx)(B.Z,{sx:{borderStyle:"dashed"}}),(0,h.jsxs)(G.Z,{onClick:function(){s(),console.log("DELETE",t.id)},sx:{color:"error.main"},children:[(0,h.jsx)(d.Z,{icon:"eva:trash-2-outline"}),"Delete"]})]})]})}var J=n(68520),ee=n.n(J),te=n(63585),ne=["title","subheader","list"];function ie(e){var t=e.title,n=e.subheader,o=e.list,a=(0,r.Z)(e,ne);return(0,h.jsxs)(P.Z,(0,i.Z)((0,i.Z)({},a),{},{children:[(0,h.jsx)(q.Z,{title:t,subheader:n}),(0,h.jsx)(s.Z,{spacing:3,sx:{p:3},children:ee()(o,["favourite"],["desc"]).map((function(e,t){return(0,h.jsx)(re,{author:e,index:t},e.id)}))})]}))}function re(e){var t=e.author,n=e.index;return(0,h.jsxs)(s.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,h.jsx)(te.Z,{alt:t.name,src:t.avatar}),(0,h.jsxs)(a.Z,{sx:{flexGrow:1},children:[(0,h.jsx)(l.Z,{variant:"subtitle2",children:t.name}),(0,h.jsxs)(l.Z,{variant:"caption",sx:{mt:.5,display:"flex",alignItems:"center",color:"text.secondary"},children:[(0,h.jsx)(d.Z,{icon:"eva:heart-fill",width:16,sx:{mr:.5}}),(0,c.v1)(t.favourite)]})]}),(0,h.jsx)(d.Z,{icon:"ant-design:trophy-filled",sx:(0,i.Z)((0,i.Z)({p:1,width:40,height:40,borderRadius:"50%",color:"primary.main",bgcolor:function(e){return(0,k.Fq)(e.palette.primary.main,.08)}},1===n&&{color:"info.main",bgcolor:function(e){return(0,k.Fq)(e.palette.info.main,.08)}}),2===n&&{color:"error.main",bgcolor:function(e){return(0,k.Fq)(e.palette.error.main,.08)}})})]})}var oe=n(55942),se=["title","subheader","list"];function ae(e){var t=e.title,n=e.subheader,o=e.list,a=(0,r.Z)(e,se);return(0,h.jsxs)(P.Z,(0,i.Z)((0,i.Z)({},a),{},{children:[(0,h.jsx)(q.Z,{title:t,subheader:n}),(0,h.jsx)(U.Z,{children:(0,h.jsx)(s.Z,{spacing:3,sx:{p:3,pr:0},children:o.map((function(e){return(0,h.jsx)(le,{app:e},e.id)}))})})]}))}function le(e){var t=e.app,n=t.shortcut,i=t.system,r=t.price,o=t.rating,u=t.review,x=t.name;return(0,h.jsxs)(s.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,h.jsx)(a.Z,{sx:{width:48,height:48,flexShrink:0,display:"flex",borderRadius:1.5,alignItems:"center",justifyContent:"center",bgcolor:"background.neutral"},children:(0,h.jsx)(a.Z,{component:"img",src:n,sx:{width:24,height:24}})}),(0,h.jsxs)(a.Z,{sx:{flexGrow:1,minWidth:160},children:[(0,h.jsx)(l.Z,{variant:"subtitle2",children:x}),(0,h.jsxs)(s.Z,{direction:"row",alignItems:"center",sx:{mt:.5,color:"text.secondary"},children:[(0,h.jsx)(d.Z,{width:16,icon:"Mac"===i?"ant-design:apple-filled":"ant-design:windows-filled"}),(0,h.jsx)(l.Z,{variant:"caption",sx:{ml:.5,mr:1},children:i}),(0,h.jsx)(Q.Z,{variant:"soft",color:0===r?"success":"error",children:0===r?"Free":(0,c.e_)(r)})]})]}),(0,h.jsxs)(s.Z,{alignItems:"flex-end",sx:{pr:3},children:[(0,h.jsx)(oe.Z,{readOnly:!0,size:"small",precision:.5,name:"reviews",value:o}),(0,h.jsxs)(l.Z,{variant:"caption",sx:{mt:.5,color:"text.secondary"},children:[(0,c.v1)(u)," reviews"]})]})]})}var ce=n(49372),de=["title","subheader","chart"];function ue(e){var t=e.title,n=e.subheader,o=e.chart,s=(0,r.Z)(e,de),l=o.colors,c=o.categories,d=o.series,x=o.options,p=(0,C.useState)("2019"),Z=(0,w.Z)(p,2),f=Z[0],g=Z[1],v=(0,u.Q8)((0,i.Z)({colors:l,xaxis:{categories:c}},x));return(0,h.jsxs)(P.Z,(0,i.Z)((0,i.Z)({},s),{},{children:[(0,h.jsx)(q.Z,{title:t,subheader:n,action:(0,h.jsx)(ce.fY,{value:f,onChange:function(e){return g(e.target.value)},children:d.map((function(e){return(0,h.jsx)("option",{value:e.year,children:e.year},e.year)}))})}),d.map((function(e){return(0,h.jsx)(a.Z,{sx:{mt:3,mx:3},dir:"ltr",children:e.year===f&&(0,h.jsx)(u.ZP,{type:"line",series:e.data,options:v,height:364})},e.year)}))]}))}var he=["title","percent","total","chart","sx"];function xe(e){var t=e.title,n=e.percent,o=e.total,s=e.chart,d=e.sx,x=(0,r.Z)(e,he),p=s.colors,Z=s.series,f=s.options,g=(0,i.Z)({colors:p,chart:{sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"68%",borderRadius:2}},tooltip:{x:{show:!1},y:{formatter:function(e){return(0,c.FK)(e)},title:{formatter:function(){return""}}},marker:{show:!1}}},f);return(0,h.jsxs)(P.Z,(0,i.Z)((0,i.Z)({sx:(0,i.Z)({display:"flex",alignItems:"center",p:3},d)},x),{},{children:[(0,h.jsxs)(a.Z,{sx:{flexGrow:1},children:[(0,h.jsx)(l.Z,{variant:"subtitle2",children:t}),(0,h.jsx)(pe,{percent:n}),(0,h.jsx)(l.Z,{variant:"h3",children:(0,c.FK)(o)})]}),(0,h.jsx)(u.ZP,{type:"bar",series:[{data:Z}],options:g,width:60,height:36})]}))}function pe(e){var t=e.percent;return(0,h.jsxs)(s.Z,{direction:"row",alignItems:"center",sx:{mt:2,mb:1},children:[(0,h.jsx)(d.Z,{icon:t<0?"eva:trending-down-fill":"eva:trending-up-fill",sx:(0,i.Z)({mr:1,p:.5,width:24,height:24,borderRadius:"50%",color:"success.main",bgcolor:function(e){return(0,k.Fq)(e.palette.success.main,.16)}},t<0&&{color:"error.main",bgcolor:function(e){return(0,k.Fq)(e.palette.error.main,.16)}})}),(0,h.jsxs)(l.Z,{component:"div",variant:"subtitle2",children:[t>0&&"+",(0,c.f2)(t)]})]})}var Ze=["title","subheader","chart"],fe=(0,f.ZP)("div")((function(e){var t=e.theme;return{height:400,marginTop:t.spacing(5),"& .apexcharts-canvas svg":{height:400},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(t.palette.divider),top:"calc(".concat(328,"px) !important")}}}));function ge(e){var t=e.title,n=e.subheader,s=e.chart,a=(0,r.Z)(e,Ze),l=(0,o.Z)(),d=s.colors,x=s.series,p=s.options,Z=x.map((function(e){return e.value})),f=(0,u.Q8)((0,i.Z)({chart:{sparkline:{enabled:!0}},colors:d,labels:x.map((function(e){return e.label})),stroke:{colors:[l.palette.background.paper]},legend:{floating:!0,horizontalAlign:"center"},tooltip:{fillSeriesColor:!1,y:{formatter:function(e){return(0,c.FK)(e)},title:{formatter:function(e){return"".concat(e)}}}},plotOptions:{pie:{donut:{size:"90%",labels:{value:{formatter:function(e){return(0,c.FK)(e)}},total:{formatter:function(e){var t=e.globals.seriesTotals.reduce((function(e,t){return e+t}),0);return(0,c.FK)(t)}}}}}}},p));return(0,h.jsxs)(P.Z,(0,i.Z)((0,i.Z)({},a),{},{children:[(0,h.jsx)(q.Z,{title:t,subheader:n}),(0,h.jsx)(fe,{dir:"ltr",children:(0,h.jsx)(u.ZP,{type:"donut",series:Z,options:f,height:280})})]}))}var ve=["title","subheader","list"],me=(0,f.ZP)((function(e){return(0,h.jsx)(s.Z,(0,i.Z)({direction:"row",alignItems:"center"},e))}))({minWidth:72,flex:"1 1"}),je=(0,f.ZP)(d.Z)((function(e){var t=e.theme;return{width:16,height:16,marginRight:t.spacing(.5),color:t.palette.text.disabled}}));function be(e){var t=e.title,n=e.subheader,o=e.list,a=(0,r.Z)(e,ve);return(0,h.jsxs)(P.Z,(0,i.Z)((0,i.Z)({},a),{},{children:[(0,h.jsx)(q.Z,{title:t,subheader:n}),(0,h.jsx)(U.Z,{children:(0,h.jsx)(s.Z,{spacing:3,sx:{p:3},children:o.map((function(e){return(0,h.jsx)(we,{country:e},e.id)}))})})]}))}function we(e){var t=e.country;return(0,h.jsxs)(s.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,h.jsxs)(me,{sx:{minWidth:120},children:[(0,h.jsx)(S.Z,{disabledEffect:!0,alt:t.name,src:t.flag,sx:{width:28,mr:1}}),(0,h.jsx)(l.Z,{variant:"subtitle2",children:t.name})]}),(0,h.jsxs)(me,{children:[(0,h.jsx)(je,{icon:"ant-design:android-filled"}),(0,h.jsx)(l.Z,{variant:"body2",children:(0,c.v1)(t.android)})]}),(0,h.jsxs)(me,{children:[(0,h.jsx)(je,{icon:"ant-design:windows-filled"}),(0,h.jsx)(l.Z,{variant:"body2",children:(0,c.v1)(t.windows)})]}),(0,h.jsxs)(me,{sx:{minWidth:88},children:[(0,h.jsx)(je,{icon:"ant-design:apple-filled"}),(0,h.jsx)(l.Z,{variant:"body2",children:(0,c.v1)(t.windows)})]})]})}}}]);