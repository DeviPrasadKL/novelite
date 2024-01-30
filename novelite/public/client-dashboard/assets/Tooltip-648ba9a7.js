import{a1 as r,aT as Wo,ao as jo,r as n,ac as fe,a2 as he,j as T}from"./index-0997c756.js";import{a as Te,g as ge,s as J,b as be,k as Pe,u as ve,d as F,c as ye}from"./Typography-a2df6bec.js";import{u as we,b as N}from"./Grid-88ffd97c.js";import{M as Uo}from"./Popper-642afce1.js";import{u as xe}from"./useControlled-c8393ec8.js";import{u as Re}from"./useId-e4fe3eda.js";import{G as So}from"./Grow-1a033e11.js";function Ce(t){return ge("MuiTooltip",t)}const Me=Te("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),c=Me,Oe=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function $e(t){return Math.round(t*1e5)/1e5}const _e=t=>{const{classes:e,disableInteractive:s,arrow:g,touch:R,placement:C}=t,M={popper:["popper",!s&&"popperInteractive",g&&"popperArrow"],tooltip:["tooltip",g&&"tooltipArrow",R&&"touch",`tooltipPlacement${Wo(C.split("-")[0])}`],arrow:["arrow"]};return ye(M,Ce,e)},Le=J(Uo,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.popper,!s.disableInteractive&&e.popperInteractive,s.arrow&&e.popperArrow,!s.open&&e.popperClose]}})(({theme:t,ownerState:e,open:s})=>r({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none"},!e.disableInteractive&&{pointerEvents:"auto"},!s&&{pointerEvents:"none"},e.arrow&&{[`&[data-popper-placement*="bottom"] .${c.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${c.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${c.arrow}`]:r({},e.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${c.arrow}`]:r({},e.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Ee=J("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.tooltip,s.touch&&e.touch,s.arrow&&e.tooltipArrow,e[`tooltipPlacement${Wo(s.placement.split("-")[0])}`]]}})(({theme:t,ownerState:e})=>r({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:jo(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium},e.arrow&&{position:"relative",margin:0},e.touch&&{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${$e(16/14)}em`,fontWeight:t.typography.fontWeightRegular},{[`.${c.popper}[data-popper-placement*="left"] &`]:r({transformOrigin:"right center"},e.isRtl?r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"}):r({marginRight:"14px"},e.touch&&{marginRight:"24px"})),[`.${c.popper}[data-popper-placement*="right"] &`]:r({transformOrigin:"left center"},e.isRtl?r({marginRight:"14px"},e.touch&&{marginRight:"24px"}):r({marginLeft:"14px"},e.touch&&{marginLeft:"24px"})),[`.${c.popper}[data-popper-placement*="top"] &`]:r({transformOrigin:"center bottom",marginBottom:"14px"},e.touch&&{marginBottom:"24px"}),[`.${c.popper}[data-popper-placement*="bottom"] &`]:r({transformOrigin:"center top",marginTop:"14px"},e.touch&&{marginTop:"24px"})})),Ie=J("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(t,e)=>e.arrow})(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:jo(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let A=!1,q=null,x={x:0,y:0};function B(t,e){return s=>{e&&e(s),t(s)}}const ke=n.forwardRef(function(e,s){var g,R,C,M,Q,Z,oo,eo,to,ro,no,so,io,po,lo,ao,co,uo,mo;const D=fe({props:e,name:"MuiTooltip"}),{arrow:fo=!1,children:S,components:O={},componentsProps:u={},describeChild:Vo=!1,disableFocusListener:zo=!1,disableHoverListener:ho=!1,disableInteractive:Ho=!1,disableTouchListener:Go=!1,enterDelay:To=100,enterNextDelay:go=0,enterTouchDelay:Ko=700,followCursor:W=!1,id:Xo,leaveDelay:bo=0,leaveTouchDelay:Yo=1500,onClose:Po,onOpen:vo,open:qo,placement:yo="bottom",PopperComponent:j,PopperProps:m={},slotProps:d={},slots:$={},title:h,TransitionComponent:Jo=So,TransitionProps:Qo}=D,wo=he(D,Oe),a=n.isValidElement(S)?S:T.jsx("span",{children:S}),U=we(),Zo=U.direction==="rtl",[b,xo]=n.useState(),[V,oe]=n.useState(null),_=n.useRef(!1),z=Ho||W,L=n.useRef(),E=n.useRef(),f=n.useRef(),Ro=n.useRef(),[ee,Co]=xe({controlled:qo,default:!1,name:"Tooltip",state:"open"});let l=ee;const H=Re(Xo),P=n.useRef(),I=n.useCallback(()=>{P.current!==void 0&&(document.body.style.WebkitUserSelect=P.current,P.current=void 0),clearTimeout(Ro.current)},[]);n.useEffect(()=>()=>{clearTimeout(L.current),clearTimeout(E.current),clearTimeout(f.current),I()},[I]);const Mo=o=>{clearTimeout(q),A=!0,Co(!0),vo&&!l&&vo(o)},k=be(o=>{clearTimeout(q),q=setTimeout(()=>{A=!1},800+bo),Co(!1),Po&&l&&Po(o),clearTimeout(L.current),L.current=setTimeout(()=>{_.current=!1},U.transitions.duration.shortest)}),G=o=>{_.current&&o.type!=="touchstart"||(b&&b.removeAttribute("title"),clearTimeout(E.current),clearTimeout(f.current),To||A&&go?E.current=setTimeout(()=>{Mo(o)},A?go:To):Mo(o))},Oo=o=>{clearTimeout(E.current),clearTimeout(f.current),f.current=setTimeout(()=>{k(o)},bo)},{isFocusVisibleRef:$o,onBlur:te,onFocus:re,ref:ne}=Pe(),[,_o]=n.useState(!1),Lo=o=>{te(o),$o.current===!1&&(_o(!1),Oo(o))},Eo=o=>{b||xo(o.currentTarget),re(o),$o.current===!0&&(_o(!0),G(o))},Io=o=>{_.current=!0;const i=a.props;i.onTouchStart&&i.onTouchStart(o)},ko=G,Fo=Oo,se=o=>{Io(o),clearTimeout(f.current),clearTimeout(L.current),I(),P.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Ro.current=setTimeout(()=>{document.body.style.WebkitUserSelect=P.current,G(o)},Ko)},ie=o=>{a.props.onTouchEnd&&a.props.onTouchEnd(o),I(),clearTimeout(f.current),f.current=setTimeout(()=>{k(o)},Yo)};n.useEffect(()=>{if(!l)return;function o(i){(i.key==="Escape"||i.key==="Esc")&&k(i)}return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[k,l]);const pe=ve(a.ref,ne,xo,s);!h&&h!==0&&(l=!1);const K=n.useRef(),le=o=>{const i=a.props;i.onMouseMove&&i.onMouseMove(o),x={x:o.clientX,y:o.clientY},K.current&&K.current.update()},v={},X=typeof h=="string";Vo?(v.title=!l&&X&&!ho?h:null,v["aria-describedby"]=l?H:null):(v["aria-label"]=X?h:null,v["aria-labelledby"]=l&&!X?H:null);const p=r({},v,wo,a.props,{className:F(wo.className,a.props.className),onTouchStart:Io,ref:pe},W?{onMouseMove:le}:{}),y={};Go||(p.onTouchStart=se,p.onTouchEnd=ie),ho||(p.onMouseOver=B(ko,p.onMouseOver),p.onMouseLeave=B(Fo,p.onMouseLeave),z||(y.onMouseOver=ko,y.onMouseLeave=Fo)),zo||(p.onFocus=B(Eo,p.onFocus),p.onBlur=B(Lo,p.onBlur),z||(y.onFocus=Eo,y.onBlur=Lo));const ae=n.useMemo(()=>{var o;let i=[{name:"arrow",enabled:!!V,options:{element:V,padding:4}}];return(o=m.popperOptions)!=null&&o.modifiers&&(i=i.concat(m.popperOptions.modifiers)),r({},m.popperOptions,{modifiers:i})},[V,m]),w=r({},D,{isRtl:Zo,arrow:fo,disableInteractive:z,placement:yo,PopperComponentProp:j,touch:_.current}),Y=_e(w),No=(g=(R=$.popper)!=null?R:O.Popper)!=null?g:Le,Ao=(C=(M=(Q=$.transition)!=null?Q:O.Transition)!=null?M:Jo)!=null?C:So,Bo=(Z=(oo=$.tooltip)!=null?oo:O.Tooltip)!=null?Z:Ee,Do=(eo=(to=$.arrow)!=null?to:O.Arrow)!=null?eo:Ie,ce=N(No,r({},m,(ro=d.popper)!=null?ro:u.popper,{className:F(Y.popper,m==null?void 0:m.className,(no=(so=d.popper)!=null?so:u.popper)==null?void 0:no.className)}),w),ue=N(Ao,r({},Qo,(io=d.transition)!=null?io:u.transition),w),me=N(Bo,r({},(po=d.tooltip)!=null?po:u.tooltip,{className:F(Y.tooltip,(lo=(ao=d.tooltip)!=null?ao:u.tooltip)==null?void 0:lo.className)}),w),de=N(Do,r({},(co=d.arrow)!=null?co:u.arrow,{className:F(Y.arrow,(uo=(mo=d.arrow)!=null?mo:u.arrow)==null?void 0:uo.className)}),w);return T.jsxs(n.Fragment,{children:[n.cloneElement(a,p),T.jsx(No,r({as:j!=null?j:Uo,placement:yo,anchorEl:W?{getBoundingClientRect:()=>({top:x.y,left:x.x,right:x.x,bottom:x.y,width:0,height:0})}:b,popperRef:K,open:b?l:!1,id:H,transition:!0},y,ce,{popperOptions:ae,children:({TransitionProps:o})=>T.jsx(Ao,r({timeout:U.transitions.duration.shorter},o,ue,{children:T.jsxs(Bo,r({},me,{children:[h,fo?T.jsx(Do,r({},de,{ref:oe})):null]}))}))}))]})}),je=ke;export{je as T,c as t};
