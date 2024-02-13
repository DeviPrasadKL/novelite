var je=Object.defineProperty;var ie=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var ce=(e,o,n)=>o in e?je(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,ee=(e,o)=>{for(var n in o||(o={}))ke.call(o,n)&&ce(e,n,o[n]);if(ie)for(var n of ie(o))Se.call(o,n)&&ce(e,n,o[n]);return e};import{r as h,_ as p,u as K,a as G,j as t,c as D,b as Re,y as W,an as $e,ah as we,ao as Pe,ap as Ie,E as Ae,L as Be}from"./index-7beedb8e.js";import{P as Me}from"./PageContainer-beff9693.js";import{B as Le}from"./Breadcrumb-f0f04833.js";import{C as le}from"./ChildCard-4ac1dd10.js";import{B as U}from"./Box-b5a46f12.js";import{a as V,g as H,s as R,c as F,b as Q,B as me,r as be,T as u}from"./Typography-212872cb.js";import{S as M}from"./Stack-3d887df5.js";import{r as he,i as fe}from"./createSvgIcon-1cd7e241.js";import{b as Y}from"./Button-d219dec2.js";import{M as _e}from"./Modal-9dacc2fa.js";import{u as ge,f as Ne}from"./useFormControl-77288aaf.js";import{S as Fe}from"./Stack-6e2a9ae4.js";import{u as xe}from"./useControlled-92ccd080.js";import{P as Te,c as te}from"./Grid-e0639067.js";import{C as ze}from"./Collapse-1ea0e9e9.js";import{u as De}from"./useDispatch-a9326f5b.js";import"./index.esm-d9ef1124.js";import"./Box-d98c1a64.js";import"./Card-e685ffd3.js";import"./CardHeader-461005f7.js";import"./Divider-db5e0b6a.js";import"./CardContent-ee48826d.js";import"./createStack-0ca957c9.js";import"./styled-fbde418f.js";const qe=h.createContext({}),Ce=qe;function Ee(e){return H("MuiAccordion",e)}const We=V("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),Z=We,Ue=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],Oe=e=>{const{classes:o,square:n,expanded:r,disabled:a,disableGutters:s}=e;return Q({root:["root",!n&&"rounded",r&&"expanded",a&&"disabled",!s&&"gutters"],region:["region"]},Ee,o)},Ge=R(Te,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[{[`& .${Z.region}`]:o.region},o.root,!n.square&&o.rounded,!n.disableGutters&&o.gutters]}})(({theme:e})=>{const o={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],o),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],o)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${Z.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${Z.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}},({theme:e,ownerState:o})=>p({},!o.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!o.disableGutters&&{[`&.${Z.expanded}`]:{margin:"16px 0"}})),Ve=h.forwardRef(function(o,n){const r=K({props:o,name:"MuiAccordion"}),{children:a,className:s,defaultExpanded:c=!1,disabled:l=!1,disableGutters:i=!1,expanded:f,onChange:C,square:k=!1,TransitionComponent:v=ze,TransitionProps:j}=r,$=G(r,Ue),[m,d]=xe({controlled:f,default:c,name:"Accordion",state:"expanded"}),g=h.useCallback(A=>{d(!m),C&&C(A,!m)},[m,C,d]),[y,...L]=h.Children.toArray(a),T=h.useMemo(()=>({expanded:m,disabled:l,disableGutters:i,toggle:g}),[m,l,i,g]),w=p({},r,{square:k,disabled:l,disableGutters:i,expanded:m}),S=Oe(w);return t.jsxs(Ge,p({className:F(S.root,s),ref:n,ownerState:w,square:k},$,{children:[t.jsx(Ce.Provider,{value:T,children:y}),t.jsx(v,p({in:m,timeout:"auto"},j,{children:t.jsx("div",{"aria-labelledby":y.props.id,id:y.props["aria-controls"],role:"region",className:S.region,children:L})}))]}))}),He=Ve;function Qe(e){return H("MuiAccordionDetails",e)}V("MuiAccordionDetails",["root"]);const Je=["className"],Ke=e=>{const{classes:o}=e;return Q({root:["root"]},Qe,o)},Xe=R("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),Ye=h.forwardRef(function(o,n){const r=K({props:o,name:"MuiAccordionDetails"}),{className:a}=r,s=G(r,Je),c=r,l=Ke(c);return t.jsx(Xe,p({className:F(l.root,a),ref:n,ownerState:c},s))}),Ze=Ye;function eo(e){return H("MuiAccordionSummary",e)}const oo=V("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),O=oo,to=["children","className","expandIcon","focusVisibleClassName","onClick"],no=e=>{const{classes:o,expanded:n,disabled:r,disableGutters:a}=e;return Q({root:["root",n&&"expanded",r&&"disabled",!a&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!a&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]},eo,o)},ro=R(me,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e,ownerState:o})=>{const n={duration:e.transitions.duration.shortest};return p({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],n),[`&.${O.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${O.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${O.disabled})`]:{cursor:"pointer"}},!o.disableGutters&&{[`&.${O.expanded}`]:{minHeight:64}})}),so=R("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,o)=>o.content})(({theme:e,ownerState:o})=>p({display:"flex",flexGrow:1,margin:"12px 0"},!o.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${O.expanded}`]:{margin:"20px 0"}})),ao=R("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,o)=>o.expandIconWrapper})(({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${O.expanded}`]:{transform:"rotate(180deg)"}})),io=h.forwardRef(function(o,n){const r=K({props:o,name:"MuiAccordionSummary"}),{children:a,className:s,expandIcon:c,focusVisibleClassName:l,onClick:i}=r,f=G(r,to),{disabled:C=!1,disableGutters:k,expanded:v,toggle:j}=h.useContext(Ce),$=g=>{j&&j(g),i&&i(g)},m=p({},r,{expanded:v,disabled:C,disableGutters:k}),d=no(m);return t.jsxs(ro,p({focusRipple:!1,disableRipple:!0,disabled:C,component:"div","aria-expanded":v,className:F(d.root,s),focusVisibleClassName:F(d.focusVisible,l),onClick:$,ref:n,ownerState:m},f,{children:[t.jsx(so,{className:d.content,ownerState:m,children:a}),c&&t.jsx(ao,{className:d.expandIconWrapper,ownerState:m,children:c})]}))}),co=io;function lo(e){return H("PrivateSwitchBase",e)}V("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const uo=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],po=e=>{const{classes:o,checked:n,disabled:r,edge:a}=e,s={root:["root",n&&"checked",r&&"disabled",a&&`edge${D(a)}`],input:["input"]};return Q(s,lo,o)},mo=R(me)(({ownerState:e})=>p({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),bo=R("input",{shouldForwardProp:be})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ho=h.forwardRef(function(o,n){const{autoFocus:r,checked:a,checkedIcon:s,className:c,defaultChecked:l,disabled:i,disableFocusRipple:f=!1,edge:C=!1,icon:k,id:v,inputProps:j,inputRef:$,name:m,onBlur:d,onChange:g,onFocus:y,readOnly:L,required:T=!1,tabIndex:w,type:S,value:A}=o,B=G(o,uo),[_,b]=xe({controlled:a,default:!!l,name:"SwitchBase",state:"checked"}),P=ge(),q=N=>{y&&y(N),P&&P.onFocus&&P.onFocus(N)},E=N=>{d&&d(N),P&&P.onBlur&&P.onBlur(N)},X=N=>{if(N.nativeEvent.defaultPrevented)return;const ae=N.target.checked;b(ae),g&&g(N,ae)};let x=i;P&&typeof x=="undefined"&&(x=P.disabled);const I=S==="checkbox"||S==="radio",z=p({},o,{checked:_,disabled:x,disableFocusRipple:f,edge:C}),se=po(z);return t.jsxs(mo,p({component:"span",className:F(se.root,c),centerRipple:!0,focusRipple:!f,disabled:x,tabIndex:null,role:void 0,onFocus:q,onBlur:E,ownerState:z,ref:n},B,{children:[t.jsx(bo,p({autoFocus:r,checked:a,defaultChecked:l,className:se.input,disabled:x,id:I?v:void 0,name:m,onChange:X,readOnly:L,ref:$,required:T,ownerState:z,tabIndex:w,type:S},S==="checkbox"&&A===void 0?{}:{value:A},j)),_?s:k]}))}),fo=ho,go=te(t.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),xo=te(t.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Co=te(t.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function vo(e){return H("MuiCheckbox",e)}const yo=V("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),oe=yo,jo=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],ko=e=>{const{classes:o,indeterminate:n,color:r,size:a}=e,s={root:["root",n&&"indeterminate",`color${D(r)}`,`size${D(a)}`]},c=Q(s,vo,o);return p({},o,c)},So=R(fo,{shouldForwardProp:e=>be(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.indeterminate&&o.indeterminate,o[`size${D(n.size)}`],n.color!=="default"&&o[`color${D(n.color)}`]]}})(({theme:e,ownerState:o})=>p({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Re(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${oe.checked}, &.${oe.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${oe.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),Ro=t.jsx(xo,{}),$o=t.jsx(go,{}),wo=t.jsx(Co,{}),Po=h.forwardRef(function(o,n){var r,a;const s=K({props:o,name:"MuiCheckbox"}),{checkedIcon:c=Ro,color:l="primary",icon:i=$o,indeterminate:f=!1,indeterminateIcon:C=wo,inputProps:k,size:v="medium",className:j}=s,$=G(s,jo),m=f?C:i,d=f?C:c,g=p({},s,{color:l,indeterminate:f,size:v}),y=ko(g);return t.jsx(So,p({type:"checkbox",inputProps:p({"data-indeterminate":f},k),icon:h.cloneElement(m,{fontSize:(r=m.props.fontSize)!=null?r:v}),checkedIcon:h.cloneElement(d,{fontSize:(a=d.props.fontSize)!=null?a:v}),ownerState:g,ref:n,className:F(y.root,j)},$,{classes:y}))}),Io=Po;function Ao(e){return H("MuiFormControlLabel",e)}const Bo=V("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),J=Bo,Mo=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],Lo=e=>{const{classes:o,disabled:n,labelPlacement:r,error:a,required:s}=e,c={root:["root",n&&"disabled",`labelPlacement${D(r)}`,a&&"error",s&&"required"],label:["label",n&&"disabled"],asterisk:["asterisk",a&&"error"]};return Q(c,Ao,o)},_o=R("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[{[`& .${J.label}`]:o.label},o.root,o[`labelPlacement${D(n.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>p({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${J.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${J.label}`]:{[`&.${J.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),No=R("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${J.error}`]:{color:(e.vars||e).palette.error.main}})),Fo=h.forwardRef(function(o,n){var r,a;const s=K({props:o,name:"MuiFormControlLabel"}),{className:c,componentsProps:l={},control:i,disabled:f,disableTypography:C,label:k,labelPlacement:v="end",required:j,slotProps:$={}}=s,m=G(s,Mo),d=ge(),g=(r=f!=null?f:i.props.disabled)!=null?r:d==null?void 0:d.disabled,y=j!=null?j:i.props.required,L={disabled:g,required:y};["checked","name","onChange","value","inputRef"].forEach(_=>{typeof i.props[_]=="undefined"&&typeof s[_]!="undefined"&&(L[_]=s[_])});const T=Ne({props:s,muiFormControl:d,states:["error"]}),w=p({},s,{disabled:g,labelPlacement:v,required:y,error:T.error}),S=Lo(w),A=(a=$.typography)!=null?a:l.typography;let B=k;return B!=null&&B.type!==u&&!C&&(B=t.jsx(u,p({component:"span"},A,{className:F(S.label,A==null?void 0:A.className),children:B}))),t.jsxs(_o,p({className:F(S.root,c),ownerState:w,ref:n},m,{children:[h.cloneElement(i,L),y?t.jsxs(Fe,{display:"block",children:[B,t.jsxs(No,{ownerState:w,"aria-hidden":!0,className:S.asterisk,children:[" ","*"]})]}):B]}))}),To=Fo;function zo({price:e,selectedSlots:o,tittle:n}){e=e/2;const r=e*(o==null?void 0:o.length),a=r*(18/100),s=o.map(l=>l.split(","));function c(l){if(Number.isInteger(l)){let i=l.toString();return i.length>3?i.slice(0,-3)+","+i.slice(-3):i}else return new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}).format(l)}return t.jsxs(U,{p:2,children:[t.jsx(u,{variant:"h5",fontWeight:600,mb:3,children:n}),t.jsxs(M,{direction:"row",justifyContent:"space-between",mb:3,children:[t.jsx(u,{variant:"h6",fontWeight:400,children:"Number of slots"}),t.jsx(u,{variant:"h6",children:o==null?void 0:o.length})]}),t.jsxs(M,{direction:"row",justifyContent:"space-between",mb:3,children:[t.jsx(u,{variant:"h6",fontWeight:400,children:"Total hours"}),t.jsxs(u,{variant:"h6",children:[(o==null?void 0:o.length)/2," hr"]})]}),t.jsxs(M,{direction:"row",justifyContent:"space-between",mb:3,children:[t.jsx(u,{variant:"h6",fontWeight:400,children:"Slots timings"}),t.jsx(M,{justifyContent:"space-between",children:s==null?void 0:s.map((l,i)=>t.jsx(u,{variant:"h6",color:"primary",mb:.5,children:l},l+i))})]}),t.jsx("hr",{}),t.jsxs(M,{direction:"row",justifyContent:"space-between",mb:1,mt:2,children:[t.jsx(u,{variant:"h6",children:"Total"}),t.jsxs(u,{variant:"h5",color:"success",children:["₹ ",c(r)]})]}),t.jsxs(M,{direction:"row",justifyContent:"space-between",mb:1,children:[t.jsx(u,{variant:"h6",children:"GST (18%)"}),t.jsxs(u,{variant:"h5",color:"success",children:["₹ ",c(a)]})]}),t.jsxs(M,{direction:"row",justifyContent:"space-between",mb:1,children:[t.jsx(u,{variant:"h6",children:"Grand Total "}),t.jsxs(u,{variant:"h5",color:"success",children:["₹ ",c(r+a)]})]})]})}var ne={},Do=fe;Object.defineProperty(ne,"__esModule",{value:!0});var ve=ne.default=void 0,qo=Do(he()),Eo=t,Wo=(0,qo.default)((0,Eo.jsx)("path",{d:"M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"WarningAmberOutlined");ve=ne.default=Wo;var re={},Uo=fe;Object.defineProperty(re,"__esModule",{value:!0});var ye=re.default=void 0,Oo=Uo(he()),Go=t,Vo=(0,Oo.default)((0,Go.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIosSharp");ye=re.default=Vo;const Ho={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",border:"none",boxShadow:24,p:4},de=R(e=>t.jsx(He,ee({disableGutters:!0,elevation:0,square:!0},e)))(({theme:e})=>({border:`1px solid ${e.palette.divider}`,"&:not(:last-child)":{borderBottom:0},"&::before":{display:"none"}})),ue=R(e=>t.jsx(co,ee({expandIcon:t.jsx(ye,{sx:{fontSize:"0.9rem"}})},e)))(({theme:e})=>({backgroundColor:e.palette.mode==="dark"?"rgba(255, 255, 255, .05)":"rgba(0, 0, 0, .03)",flexDirection:"row-reverse","& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(90deg)"},"& .MuiAccordionSummary-content":{marginLeft:e.spacing(1)}})),pe=R(Ze)(({theme:e})=>({padding:e.spacing(2),borderTop:"1px solid rgba(0, 0, 0, .125)"}));function Ct(){let e=W(b=>b.bookingsSliceReducer.price);const o=W(b=>b.bookingsSliceReducer.date),n=W(b=>b.bookingsSliceReducer.roomName),r=W(b=>b.bookingsSliceReducer.roomCategory),a=W(b=>b.bookingsSliceReducer.bookingLocation),s=W(b=>b.bookingsSliceReducer.selectedSlots),{updateDoc:c,error:l}=$e(),[i,f]=h.useState(0),[C,k]=h.useState(!1),[v,j]=h.useState(!1),$=De(),m=[{to:"/dashboard",title:"Home"},{to:"/location",title:a},{to:"/category",title:r},{to:"/bookings",title:n},{to:"/bookingslot",title:"Booking Slots"},{to:"/payment_summary",title:"Payment Summary"}],{data:d}=we("Room Bookings",{fields:["location","booking_timings","booking_date","name"],filters:[["booking_date","=",o],["room","=",n]],limit_start:0,limit:2e3});h.useEffect(()=>{function b(x,I){if(x.size!==I.size)return!1;for(let z of x)if(!I.has(z))return!1;return!0}const P=new Set(s),q=d==null?void 0:d.find(x=>{const I=new Set(x.booking_timings.split(","));return b(I,P)});if(q){let x=q.name;$(Pe(x)),Ie.post("/api/method/novelite.api.api.create_qr_codes",{data:`id: ${x}, location:${a}, booking_date:${o}, booking_timings:${s}, room_type:${r}, room:${n}`}).then(I=>{c("Room Bookings",x,{qr_code:`data:image/png;base64,${I.data.message}`}).then(()=>{console.log("Added QR code to Doc")}).catch(z=>{console.log(z)})})}let E=localStorage.getItem("endTime");E||(E=new Date().getTime()+10*60*1e3,localStorage.setItem("endTime",E));const X=setInterval(()=>{const x=new Date().getTime(),I=E-x;I<0?(clearInterval(X),localStorage.removeItem("endTime"),f(0)):f(I)},1e3);return()=>clearInterval(X)},[d,s]);const g=Math.floor(i%(1e3*60*60)/(1e3*60)),y=Math.floor(i%(1e3*60)/1e3),[L,T]=Ae.useState("panel1"),w=b=>(P,q)=>{T(q?b:!1)},S=()=>k(!0),A=()=>{k(!1),j(!1)},B=b=>j(b.target.checked),_=()=>{console.log(v)};return t.jsxs(Me,{title:"Payment Summary - Novel Office",children:[t.jsx(Le,{title:"Payment Summary",items:m}),t.jsx(U,{bgcolor:"warning.light",textAlign:"center",children:t.jsxs(M,{justifyContent:"center",alignItems:"center",flexDirection:"row",children:[t.jsx(U,{color:"warning.main",children:t.jsx(ve,{sx:{marginRight:"0.5rem",marginBottom:"-0.4rem"}})}),t.jsxs(u,{color:"warning.main",m:1,variant:"h5",fontWeight:600,children:["Selected Slots will be blocked for ",g.toLocaleString("en-US",{minimumIntegerDigits:2}),":",y.toLocaleString("en-US",{minimumIntegerDigits:2})," mins"]})]})}),t.jsx(U,{my:3,children:t.jsx(le,{children:t.jsx(zo,{price:e,selectedSlots:s,tittle:"Payment Summary"})})}),t.jsxs(U,{children:[t.jsx(le,{children:t.jsxs(M,{children:[t.jsx(u,{variant:"h6",fontWeight:400,mb:2,children:"Payment Type"}),t.jsxs(de,{expanded:L==="panel1",onChange:w("panel1"),children:[t.jsx(ue,{"aria-controls":"panel1d-content",id:"panel1d-header",children:t.jsx(u,{children:"Add to invoice"})}),t.jsxs(pe,{children:[t.jsxs(u,{mb:2,children:["1)  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",t.jsx("br",{}),"2)  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ",t.jsx("br",{}),"3)  Suspendisse malesuada lacus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit."]}),t.jsx(Y,{variant:"contained",onClick:S,children:"Add to Invoice"})]})]}),t.jsxs(de,{expanded:L==="panel2",onChange:w("panel2"),children:[t.jsx(ue,{"aria-controls":"panel2d-content",id:"panel2d-header",children:t.jsx(u,{children:"Pay now (Coming Soon)"})}),t.jsxs(pe,{children:[t.jsx(u,{mb:2,children:"Comming Soon"}),t.jsx(Y,{variant:"contained",disabled:!0,children:"Pay Now"})]})]})]})}),t.jsx(_e,{open:C,onClose:A,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:t.jsxs(U,{sx:Ho,children:[t.jsxs(u,{mb:2,children:["1)  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",t.jsx("br",{}),"2)  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. ",t.jsx("br",{}),"3)  Suspendisse malesuada lacus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",t.jsx(To,{required:!0,control:t.jsx(Io,{onChange:b=>{B(b)}}),label:"I agree to terms and conditions"})]}),t.jsx(Y,{variant:"contained",onClick:_,disabled:!v,children:"Confirm Bookings"})]})})]}),t.jsx(M,{direction:"row",justifyContent:"space-between",mt:2,children:t.jsx(Y,{color:"secondary",variant:"contained",component:Be,to:"/bookingslot",children:"Back"})})]})}export{Ct as default};