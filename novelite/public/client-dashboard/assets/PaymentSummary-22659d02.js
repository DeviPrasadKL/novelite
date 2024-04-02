var ve=Object.defineProperty;var ie=Object.getOwnPropertySymbols;var ye=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable;var ce=(e,o,n)=>o in e?ve(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,te=(e,o)=>{for(var n in o||(o={}))ye.call(o,n)&&ce(e,n,o[n]);if(ie)for(var n of ie(o))je.call(o,n)&&ce(e,n,o[n]);return e};import{r as f,_ as p,u as J,v as U,j as t,c as _,E as ke,e as z,ab as Se,a4 as Re,a3 as $e,ac as we,ad as Pe,R as Ie,L as Ae}from"./index-2a4889a1.js";import{P as Be}from"./PageContainer-84a931e9.js";import{B as Me}from"./Breadcrumb-f59f9361.js";import{C as le}from"./ChildCard-40927bc8.js";import{B as q}from"./Box-923e2e4e.js";import{f as W,g as G,s as w,h as D,a as O,B as me,r as be,T as u}from"./Typography-9ad2347d.js";import{S as L}from"./Stack-c08b3c4d.js";import{d as Le}from"./WarningAmberOutlined-7be71143.js";import{r as Ne,i as Fe}from"./createSvgIcon-eb37b36d.js";import{B as Z}from"./Button-eb00a1f6.js";import{u as he,f as Te,M as De}from"./Modal-a4f036fa.js";import{S as _e}from"./Stack-063537b5.js";import{a as fe}from"./useControlled-272d4521.js";import{c as re}from"./Grid-865287b0.js";import{P as ze}from"./Paper-43d8a966.js";import{C as qe}from"./Collapse-43accb47.js";import{u as Ee}from"./useDispatch-17196d9c.js";import"./index.esm-c5c4bea7.js";import"./useSlotProps-bf0108ad.js";import"./Link-8b49f837.js";import"./Box-dab06ac1.js";import"./Card-4081bccc.js";import"./CardHeader-20fdb637.js";import"./Divider-970fe638.js";import"./CardContent-7066f862.js";import"./createStack-513076ca.js";import"./styled-3182547d.js";const Ue=f.createContext({}),ge=Ue;function We(e){return G("MuiAccordion",e)}const Ge=W("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),ee=Ge,Oe=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],Ve=e=>{const{classes:o,square:n,expanded:r,disabled:a,disableGutters:s}=e;return O({root:["root",!n&&"rounded",r&&"expanded",a&&"disabled",!s&&"gutters"],region:["region"]},We,o)},He=w(ze,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[{[`& .${ee.region}`]:o.region},o.root,!n.square&&o.rounded,!n.disableGutters&&o.gutters]}})(({theme:e})=>{const o={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],o),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],o)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${ee.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${ee.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}},({theme:e,ownerState:o})=>p({},!o.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!o.disableGutters&&{[`&.${ee.expanded}`]:{margin:"16px 0"}})),Qe=f.forwardRef(function(o,n){const r=J({props:o,name:"MuiAccordion"}),{children:a,className:s,defaultExpanded:l=!1,disabled:c=!1,disableGutters:d=!1,expanded:g,onChange:C,square:R=!1,TransitionComponent:v=qe,TransitionProps:$}=r,P=U(r,Oe),[m,b]=fe({controlled:g,default:l,name:"Accordion",state:"expanded"}),y=f.useCallback(A=>{b(!m),C&&C(A,!m)},[m,C,b]),[j,...F]=f.Children.toArray(a),T=f.useMemo(()=>({expanded:m,disabled:c,disableGutters:d,toggle:y}),[m,c,d,y]),I=p({},r,{square:R,disabled:c,disableGutters:d,expanded:m}),S=Ve(I);return t.jsxs(He,p({className:D(S.root,s),ref:n,ownerState:I,square:R},P,{children:[t.jsx(ge.Provider,{value:T,children:j}),t.jsx(v,p({in:m,timeout:"auto"},$,{children:t.jsx("div",{"aria-labelledby":j.props.id,id:j.props["aria-controls"],role:"region",className:S.region,children:F})}))]}))}),Je=Qe;function Ke(e){return G("MuiAccordionDetails",e)}W("MuiAccordionDetails",["root"]);const Xe=["className"],Ye=e=>{const{classes:o}=e;return O({root:["root"]},Ke,o)},Ze=w("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),eo=f.forwardRef(function(o,n){const r=J({props:o,name:"MuiAccordionDetails"}),{className:a}=r,s=U(r,Xe),l=r,c=Ye(l);return t.jsx(Ze,p({className:D(c.root,a),ref:n,ownerState:l},s))}),oo=eo;function to(e){return G("MuiAccordionSummary",e)}const no=W("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),E=no,ro=["children","className","expandIcon","focusVisibleClassName","onClick"],so=e=>{const{classes:o,expanded:n,disabled:r,disableGutters:a}=e;return O({root:["root",n&&"expanded",r&&"disabled",!a&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!a&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]},to,o)},ao=w(me,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e,ownerState:o})=>{const n={duration:e.transitions.duration.shortest};return p({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],n),[`&.${E.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${E.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${E.disabled})`]:{cursor:"pointer"}},!o.disableGutters&&{[`&.${E.expanded}`]:{minHeight:64}})}),io=w("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,o)=>o.content})(({theme:e,ownerState:o})=>p({display:"flex",flexGrow:1,margin:"12px 0"},!o.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${E.expanded}`]:{margin:"20px 0"}})),co=w("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,o)=>o.expandIconWrapper})(({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${E.expanded}`]:{transform:"rotate(180deg)"}})),lo=f.forwardRef(function(o,n){const r=J({props:o,name:"MuiAccordionSummary"}),{children:a,className:s,expandIcon:l,focusVisibleClassName:c,onClick:d}=r,g=U(r,ro),{disabled:C=!1,disableGutters:R,expanded:v,toggle:$}=f.useContext(ge),P=y=>{$&&$(y),d&&d(y)},m=p({},r,{expanded:v,disabled:C,disableGutters:R}),b=so(m);return t.jsxs(ao,p({focusRipple:!1,disableRipple:!0,disabled:C,component:"div","aria-expanded":v,className:D(b.root,s),focusVisibleClassName:D(b.focusVisible,c),onClick:P,ref:n,ownerState:m},g,{children:[t.jsx(io,{className:b.content,ownerState:m,children:a}),l&&t.jsx(co,{className:b.expandIconWrapper,ownerState:m,children:l})]}))}),uo=lo;function po(e){return G("PrivateSwitchBase",e)}W("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const mo=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],bo=e=>{const{classes:o,checked:n,disabled:r,edge:a}=e,s={root:["root",n&&"checked",r&&"disabled",a&&`edge${_(a)}`],input:["input"]};return O(s,po,o)},ho=w(me)(({ownerState:e})=>p({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),fo=w("input",{shouldForwardProp:be})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),go=f.forwardRef(function(o,n){const{autoFocus:r,checked:a,checkedIcon:s,className:l,defaultChecked:c,disabled:d,disableFocusRipple:g=!1,edge:C=!1,icon:R,id:v,inputProps:$,inputRef:P,name:m,onBlur:b,onChange:y,onFocus:j,readOnly:F,required:T=!1,tabIndex:I,type:S,value:A}=o,B=U(o,mo),[N,oe]=fe({controlled:a,default:!!c,name:"SwitchBase",state:"checked"}),i=he(),K=k=>{j&&j(k),i&&i.onFocus&&i.onFocus(k)},V=k=>{b&&b(k),i&&i.onBlur&&i.onBlur(k)},X=k=>{if(k.nativeEvent.defaultPrevented)return;const H=k.target.checked;oe(H),y&&y(k,H)};let M=d;i&&typeof M=="undefined"&&(M=i.disabled);const Y=S==="checkbox"||S==="radio",h=p({},o,{checked:N,disabled:M,disableFocusRipple:g,edge:C}),x=bo(h);return t.jsxs(ho,p({component:"span",className:D(x.root,l),centerRipple:!0,focusRipple:!g,disabled:M,tabIndex:null,role:void 0,onFocus:K,onBlur:V,ownerState:h,ref:n},B,{children:[t.jsx(fo,p({autoFocus:r,checked:a,defaultChecked:c,className:x.input,disabled:M,id:Y?v:void 0,name:m,onChange:X,readOnly:F,ref:P,required:T,ownerState:h,tabIndex:I,type:S},S==="checkbox"&&A===void 0?{}:{value:A},$)),N?s:R]}))}),xo=go,Co=re(t.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),vo=re(t.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),yo=re(t.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function jo(e){return G("MuiCheckbox",e)}const ko=W("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),ne=ko,So=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Ro=e=>{const{classes:o,indeterminate:n,color:r,size:a}=e,s={root:["root",n&&"indeterminate",`color${_(r)}`,`size${_(a)}`]},l=O(s,jo,o);return p({},o,l)},$o=w(xo,{shouldForwardProp:e=>be(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.indeterminate&&o.indeterminate,o[`size${_(n.size)}`],n.color!=="default"&&o[`color${_(n.color)}`]]}})(({theme:e,ownerState:o})=>p({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:ke(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${ne.checked}, &.${ne.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${ne.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),wo=t.jsx(vo,{}),Po=t.jsx(Co,{}),Io=t.jsx(yo,{}),Ao=f.forwardRef(function(o,n){var r,a;const s=J({props:o,name:"MuiCheckbox"}),{checkedIcon:l=wo,color:c="primary",icon:d=Po,indeterminate:g=!1,indeterminateIcon:C=Io,inputProps:R,size:v="medium",className:$}=s,P=U(s,So),m=g?C:d,b=g?C:l,y=p({},s,{color:c,indeterminate:g,size:v}),j=Ro(y);return t.jsx($o,p({type:"checkbox",inputProps:p({"data-indeterminate":g},R),icon:f.cloneElement(m,{fontSize:(r=m.props.fontSize)!=null?r:v}),checkedIcon:f.cloneElement(b,{fontSize:(a=b.props.fontSize)!=null?a:v}),ownerState:y,ref:n,className:D(j.root,$)},P,{classes:j}))}),Bo=Ao;function Mo(e){return G("MuiFormControlLabel",e)}const Lo=W("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),Q=Lo,No=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],Fo=e=>{const{classes:o,disabled:n,labelPlacement:r,error:a,required:s}=e,l={root:["root",n&&"disabled",`labelPlacement${_(r)}`,a&&"error",s&&"required"],label:["label",n&&"disabled"],asterisk:["asterisk",a&&"error"]};return O(l,Mo,o)},To=w("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[{[`& .${Q.label}`]:o.label},o.root,o[`labelPlacement${_(n.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>p({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${Q.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${Q.label}`]:{[`&.${Q.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),Do=w("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${Q.error}`]:{color:(e.vars||e).palette.error.main}})),_o=f.forwardRef(function(o,n){var r,a;const s=J({props:o,name:"MuiFormControlLabel"}),{className:l,componentsProps:c={},control:d,disabled:g,disableTypography:C,label:R,labelPlacement:v="end",required:$,slotProps:P={}}=s,m=U(s,No),b=he(),y=(r=g!=null?g:d.props.disabled)!=null?r:b==null?void 0:b.disabled,j=$!=null?$:d.props.required,F={disabled:y,required:j};["checked","name","onChange","value","inputRef"].forEach(N=>{typeof d.props[N]=="undefined"&&typeof s[N]!="undefined"&&(F[N]=s[N])});const T=Te({props:s,muiFormControl:b,states:["error"]}),I=p({},s,{disabled:y,labelPlacement:v,required:j,error:T.error}),S=Fo(I),A=(a=P.typography)!=null?a:c.typography;let B=R;return B!=null&&B.type!==u&&!C&&(B=t.jsx(u,p({component:"span"},A,{className:D(S.label,A==null?void 0:A.className),children:B}))),t.jsxs(To,p({className:D(S.root,l),ownerState:I,ref:n},m,{children:[f.cloneElement(d,F),j?t.jsxs(_e,{display:"block",children:[B,t.jsxs(Do,{ownerState:I,"aria-hidden":!0,className:S.asterisk,children:[" ","*"]})]}):B]}))}),zo=_o;function qo({price:e,selectedSlots:o,tittle:n}){e=e/2;const r=e*(o==null?void 0:o.length),a=r*(18/100),s=o.map(c=>c.split(","));function l(c){if(Number.isInteger(c)){let d=c.toString();return d.length>3?d.slice(0,-3)+","+d.slice(-3):d}else return new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}).format(c)}return t.jsxs(q,{p:2,children:[t.jsx(u,{variant:"h5",fontWeight:600,mb:3,children:n}),t.jsxs(L,{direction:"row",justifyContent:"space-between",mb:3,children:[t.jsx(u,{variant:"h6",fontWeight:400,children:"Number of slots"}),t.jsx(u,{variant:"h6",children:o==null?void 0:o.length})]}),t.jsxs(L,{direction:"row",justifyContent:"space-between",mb:3,children:[t.jsx(u,{variant:"h6",fontWeight:400,children:"Total hours"}),t.jsxs(u,{variant:"h6",children:[(o==null?void 0:o.length)/2," hr"]})]}),t.jsxs(L,{direction:"row",justifyContent:"space-between",mb:3,children:[t.jsx(u,{variant:"h6",fontWeight:400,children:"Slots timings"}),t.jsx(L,{justifyContent:"space-between",children:s==null?void 0:s.map((c,d)=>t.jsx(u,{variant:"h6",color:"primary",mb:.5,children:c},c+d))})]}),t.jsx("hr",{}),t.jsxs(L,{direction:"row",justifyContent:"space-between",mb:1,mt:2,children:[t.jsx(u,{variant:"h6",children:"Total"}),t.jsxs(u,{variant:"h5",color:"success",children:["₹ ",l(r)]})]}),t.jsxs(L,{direction:"row",justifyContent:"space-between",mb:1,children:[t.jsx(u,{variant:"h6",children:"GST (18%)"}),t.jsxs(u,{variant:"h5",color:"success",children:["₹ ",l(a)]})]}),t.jsxs(L,{direction:"row",justifyContent:"space-between",mb:1,children:[t.jsx(u,{variant:"h6",children:"Grand Total "}),t.jsxs(u,{variant:"h5",color:"success",children:["₹ ",l(r+a)]})]})]})}var se={},Eo=Fe;Object.defineProperty(se,"__esModule",{value:!0});var xe=se.default=void 0,Uo=Eo(Ne()),Wo=t;xe=se.default=(0,Uo.default)((0,Wo.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIosSharp");const Go={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",border:"none",boxShadow:24,p:4},de=w(e=>t.jsx(Je,te({disableGutters:!0,elevation:0,square:!0},e)))(({theme:e})=>({border:`1px solid ${e.palette.divider}`,"&:not(:last-child)":{borderBottom:0},"&::before":{display:"none"}})),ue=w(e=>t.jsx(uo,te({expandIcon:t.jsx(xe,{sx:{fontSize:"0.9rem"}})},e)))(({theme:e})=>({backgroundColor:e.palette.mode==="dark"?"rgba(255, 255, 255, .05)":"rgba(0, 0, 0, .03)",flexDirection:"row-reverse","& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(90deg)"},"& .MuiAccordionSummary-content":{marginLeft:e.spacing(1)}})),pe=w(oo)(({theme:e})=>({padding:e.spacing(2),borderTop:"1px solid rgba(0, 0, 0, .125)"}));function Ct(){let e=z(i=>i.bookingsSliceReducer.price);const o=z(i=>i.bookingsSliceReducer.date),n=z(i=>i.bookingsSliceReducer.roomName),r=z(i=>i.bookingsSliceReducer.roomCategory),a=z(i=>i.bookingsSliceReducer.bookingLocation),s=z(i=>i.bookingsSliceReducer.selectedSlots),[l,c]=f.useState(!1),d=Ee(),[g,C]=f.useState(0),[R,v]=f.useState(!1),{updateDoc:$,error:P}=Se();Re();const m=[{to:"/dashboard",title:"Home"},{to:"/location",title:a},{to:"/category",title:r},{to:"/bookings",title:n},{to:"/bookingslot",title:"Booking Slots"},{to:"/payment_summary",title:"Payment Summary"}],{data:b,isLoading:y}=$e("/novelite.api.api.getAllData");f.useEffect(()=>{let i;b&&(i=Object.values(b.message.reduce((h,{name:x,room:k,from_time:H,to_time:ae,booking_date:Ce})=>(h[x]?h[x].booking_timings+=`,${H} - ${ae}`:h[x]={name:x,room:k,booking_timings:`${H} - ${ae}`,booking_date:Ce},h),{})));function K(h,x){if(h.size!==x.size)return!1;for(let k of h)if(!x.has(k))return!1;return!0}const V=new Set(s),X=i==null?void 0:i.find(h=>{const x=new Set(h.booking_timings.split(","));return K(x,V)});if(X){let h=X.name;d(we(h)),Pe.post("/api/method/novelite.api.api.create_qr_codes",{data:`{"id":"${h}", "location":"${a}", "booking_date":"${o}", "booking_timings":"${s}", "room_type":"${r}", "room":"${n}"}`}).then(x=>{$("Room Bookings",h,{qr_code:`data:image/png;base64,${x.data.message}`}).then(()=>{console.log("Added QR code to Doc")}).catch(k=>{console.log(k)})})}let M=localStorage.getItem("endTime");M||(M=new Date().getTime()+10*60*1e3,localStorage.setItem("endTime",M));const Y=setInterval(()=>{const h=new Date().getTime(),x=M-h;x<0?(clearInterval(Y),localStorage.removeItem("endTime"),C(0)):C(x)},1e3);return()=>clearInterval(Y)},[b,s]);const j=Math.floor(g%(1e3*60*60)/(1e3*60)),F=Math.floor(g%(1e3*60)/1e3),[T,I]=Ie.useState("panel1"),S=i=>(K,V)=>{I(V?i:!1)},A=()=>c(!0),B=()=>{c(!1),v(!1)},N=i=>v(i.target.checked),oe=()=>{console.log(R)};return t.jsxs(Be,{title:"Payment Summary - Novel Office",children:[t.jsx(Me,{title:"Payment Summary",items:m}),t.jsx(q,{bgcolor:"warning.light",textAlign:"center",children:t.jsxs(L,{justifyContent:"center",alignItems:"center",flexDirection:"row",children:[t.jsx(q,{color:"warning.main",children:t.jsx(Le,{sx:{marginRight:"0.5rem",marginBottom:"-0.4rem"}})}),t.jsxs(u,{color:"warning.main",m:1,variant:"h5",fontWeight:600,children:["Selected Slots will be blocked for ",j.toLocaleString("en-US",{minimumIntegerDigits:2}),":",F.toLocaleString("en-US",{minimumIntegerDigits:2})," mins"]})]})}),t.jsx(q,{my:3,children:t.jsx(le,{children:t.jsx(qo,{price:e,selectedSlots:s,tittle:"Payment Summary"})})}),t.jsxs(q,{children:[t.jsx(le,{children:t.jsxs(L,{children:[t.jsx(u,{variant:"h6",fontWeight:400,mb:2,children:"Payment Type"}),t.jsxs(de,{expanded:T==="panel1",onChange:S("panel1"),children:[t.jsx(ue,{"aria-controls":"panel1d-content",id:"panel1d-header",children:t.jsx(u,{children:"Add to invoice"})}),t.jsxs(pe,{children:[t.jsxs(u,{mb:2,children:["1)  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",t.jsx("br",{}),"2)  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ",t.jsx("br",{}),"3)  Suspendisse malesuada lacus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit."]}),t.jsx(Z,{variant:"contained",onClick:A,children:"Add to Invoice"})]})]}),t.jsxs(de,{expanded:T==="panel2",onChange:S("panel2"),children:[t.jsx(ue,{"aria-controls":"panel2d-content",id:"panel2d-header",children:t.jsx(u,{children:"Pay now (Coming Soon)"})}),t.jsxs(pe,{children:[t.jsx(u,{mb:2,children:"Comming Soon"}),t.jsx(Z,{variant:"contained",disabled:!0,children:"Pay Now"})]})]})]})}),t.jsx(De,{open:l,onClose:B,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:t.jsxs(q,{sx:Go,children:[t.jsxs(u,{mb:2,children:["1)  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",t.jsx("br",{}),"2)  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ",t.jsx("br",{}),"3)  Suspendisse malesuada lacus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",t.jsx(zo,{required:!0,control:t.jsx(Bo,{onChange:i=>{N(i)}}),label:"I agree to terms and conditions"})]}),t.jsx(Z,{variant:"contained",onClick:oe,disabled:!R,children:"Confirm Bookings"})]})})]}),t.jsx(L,{direction:"row",justifyContent:"space-between",mt:2,children:t.jsx(Z,{color:"secondary",variant:"contained",component:Ae,to:"/bookingslot",children:"Back"})})]})}export{Ct as default};
