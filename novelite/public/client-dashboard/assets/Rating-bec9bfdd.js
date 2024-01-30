import{j as i,aT as ne,a1 as l,r as L,ac as be,a2 as te}from"./index-0997c756.js";import{a as Fe,g as xe,s as D,l as Re,k as Ve,u as Ce,d as U,c as Ae}from"./Typography-a2df6bec.js";import{c as ie,u as Se}from"./Grid-88ffd97c.js";import{v as Me}from"./visuallyHidden-14c3de6e.js";import{u as se}from"./useId-e4fe3eda.js";import{u as Le}from"./useControlled-c8393ec8.js";const He=ie(i.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),je=ie(i.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function Ee(o){return xe("MuiRating",o)}const we=Fe("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),O=we,ze=["value"],Ie=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function Oe(o,e,t){return o<e?e:o>t?t:o}function Te(o){const e=o.toString().split(".")[1];return e?e.length:0}function J(o,e){if(o==null)return o;const t=Math.round(o/e)*e;return Number(t.toFixed(Te(e)))}const $e=o=>{const{classes:e,size:t,readOnly:m,disabled:H,emptyValueFocused:y,focusVisible:v}=o,b={root:["root",`size${ne(t)}`,H&&"disabled",v&&"focusVisible",m&&"readOnly"],label:["label","pristine"],labelEmptyValue:[y&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return Ae(b,Ee,e)},Ne=D("span",{name:"MuiRating",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[{[`& .${O.visuallyHidden}`]:e.visuallyHidden},e.root,e[`size${ne(t.size)}`],t.readOnly&&e.readOnly]}})(({theme:o,ownerState:e})=>l({display:"inline-flex",position:"relative",fontSize:o.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${O.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${O.focusVisible} .${O.iconActive}`]:{outline:"1px solid #999"},[`& .${O.visuallyHidden}`]:Me},e.size==="small"&&{fontSize:o.typography.pxToRem(18)},e.size==="large"&&{fontSize:o.typography.pxToRem(30)},e.readOnly&&{pointerEvents:"none"})),ae=D("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:o},e)=>[e.label,o.emptyValueFocused&&e.labelEmptyValueActive]})(({ownerState:o})=>l({cursor:"inherit"},o.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),Pe=D("span",{name:"MuiRating",slot:"Icon",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.icon,t.iconEmpty&&e.iconEmpty,t.iconFilled&&e.iconFilled,t.iconHover&&e.iconHover,t.iconFocus&&e.iconFocus,t.iconActive&&e.iconActive]}})(({theme:o,ownerState:e})=>l({display:"flex",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),pointerEvents:"none"},e.iconActive&&{transform:"scale(1.2)"},e.iconEmpty&&{color:(o.vars||o).palette.action.disabled})),Be=D("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:o=>Re(o)&&o!=="iconActive",overridesResolver:(o,e)=>{const{iconActive:t}=o;return[e.decimal,t&&e.iconActive]}})(({iconActive:o})=>l({position:"relative"},o&&{transform:"scale(1.2)"}));function ke(o){const e=te(o,ze);return i.jsx("span",l({},e))}function oe(o){const{classes:e,disabled:t,emptyIcon:m,focus:H,getLabelText:y,highlightSelectedOnly:v,hover:b,icon:T,IconContainerComponent:j,isActive:$,itemValue:c,labelProps:E,name:F,onBlur:W,onChange:x,onClick:R,onFocus:N,readOnly:P,ownerState:a,ratingValue:u,ratingValueRounded:X}=o,V=v?c===u:c<=u,B=c<=b,C=c<=H,Y=c===X,w=se(),h=i.jsx(Pe,{as:j,value:c,className:U(e.icon,V?e.iconFilled:e.iconEmpty,B&&e.iconHover,C&&e.iconFocus,$&&e.iconActive),ownerState:l({},a,{iconEmpty:!V,iconFilled:V,iconHover:B,iconFocus:C,iconActive:$}),children:m&&!V?m:T});return P?i.jsx("span",l({},E,{children:h})):i.jsxs(L.Fragment,{children:[i.jsxs(ae,l({ownerState:l({},a,{emptyValueFocused:void 0}),htmlFor:w},E,{children:[h,i.jsx("span",{className:e.visuallyHidden,children:y(c)})]})),i.jsx("input",{className:e.visuallyHidden,onFocus:N,onBlur:W,onChange:x,onClick:R,disabled:t,value:c,id:w,type:"radio",name:F,checked:Y})]})}const _e=i.jsx(He,{fontSize:"inherit"}),Ue=i.jsx(je,{fontSize:"inherit"});function De(o){return`${o} Star${o!==1?"s":""}`}const We=L.forwardRef(function(e,t){const m=be({name:"MuiRating",props:e}),{className:H,defaultValue:y=null,disabled:v=!1,emptyIcon:b=Ue,emptyLabelText:T="Empty",getLabelText:j=De,highlightSelectedOnly:$=!1,icon:c=_e,IconContainerComponent:E=ke,max:F=5,name:W,onChange:x,onChangeActive:R,onMouseLeave:N,onMouseMove:P,precision:a=1,readOnly:u=!1,size:X="medium",value:V}=m,B=te(m,Ie),C=se(W),[Y,w]=Le({controlled:V,default:y,name:"Rating"}),h=J(Y,a),le=Se(),[{hover:d,focus:k},z]=L.useState({hover:-1,focus:-1});let A=h;d!==-1&&(A=d),k!==-1&&(A=k);const{isFocusVisibleRef:K,onBlur:ce,onFocus:re,ref:ue}=Ve(),[de,q]=L.useState(!1),Q=L.useRef(),pe=Ce(ue,Q,t),me=n=>{P&&P(n);const s=Q.current,{right:r,left:_,width:S}=s.getBoundingClientRect();let M;le.direction==="rtl"?M=(r-n.clientX)/S:M=(n.clientX-_)/S;let p=J(F*M+a/2,a);p=Oe(p,a,F),z(g=>g.hover===p&&g.focus===p?g:{hover:p,focus:p}),q(!1),R&&d!==p&&R(n,p)},fe=n=>{N&&N(n);const s=-1;z({hover:s,focus:s}),R&&d!==s&&R(n,s)},Z=n=>{let s=n.target.value===""?null:parseFloat(n.target.value);d!==-1&&(s=d),w(s),x&&x(n,s)},ve=n=>{n.clientX===0&&n.clientY===0||(z({hover:-1,focus:-1}),w(null),x&&parseFloat(n.target.value)===h&&x(n,null))},he=n=>{re(n),K.current===!0&&q(!0);const s=parseFloat(n.target.value);z(r=>({hover:r.hover,focus:s}))},ge=n=>{if(d!==-1)return;ce(n),K.current===!1&&q(!1);const s=-1;z(r=>({hover:r.hover,focus:s}))},[ye,ee]=L.useState(!1),I=l({},m,{defaultValue:y,disabled:v,emptyIcon:b,emptyLabelText:T,emptyValueFocused:ye,focusVisible:de,getLabelText:j,icon:c,IconContainerComponent:E,max:F,precision:a,readOnly:u,size:X}),f=$e(I);return i.jsxs(Ne,l({ref:pe,onMouseMove:me,onMouseLeave:fe,className:U(f.root,H,u&&"MuiRating-readOnly"),ownerState:I,role:u?"img":null,"aria-label":u?j(A):null},B,{children:[Array.from(new Array(F)).map((n,s)=>{const r=s+1,_={classes:f,disabled:v,emptyIcon:b,focus:k,getLabelText:j,highlightSelectedOnly:$,hover:d,icon:c,IconContainerComponent:E,name:C,onBlur:ge,onChange:Z,onClick:ve,onFocus:he,ratingValue:A,ratingValueRounded:h,readOnly:u,ownerState:I},S=r===Math.ceil(A)&&(d!==-1||k!==-1);if(a<1){const M=Array.from(new Array(1/a));return i.jsx(Be,{className:U(f.decimal,S&&f.iconActive),ownerState:I,iconActive:S,children:M.map((p,g)=>{const G=J(r-1+(g+1)*a,a);return i.jsx(oe,l({},_,{isActive:!1,itemValue:G,labelProps:{style:M.length-1===g?{}:{width:G===A?`${(g+1)*a*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),G)})},r)}return i.jsx(oe,l({},_,{isActive:S,itemValue:r}),r)}),!u&&!v&&i.jsxs(ae,{className:U(f.label,f.labelEmptyValue),ownerState:I,children:[i.jsx("input",{className:f.visuallyHidden,value:"",id:`${C}-empty`,type:"radio",name:C,checked:h==null,onFocus:()=>ee(!0),onBlur:()=>ee(!1),onChange:Z}),i.jsx("span",{className:f.visuallyHidden,children:T})]})]}))}),Qe=We;export{Qe as R};
