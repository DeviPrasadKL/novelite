import{j as u,_ as l,r as m,x as C}from"./index-85be31c7.js";import{g as I,b as D,s as v,d as F,a as M}from"./Typography-080e93f2.js";import{c as N}from"./index-2f597789.js";import{c as z}from"./Grid-37db235f.js";import{u as U}from"./useSlot-73a71771.js";const T=z(u.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function _(r){return I("MuiAvatar",r)}D("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const E=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],L=N(),q=r=>{const{classes:o,variant:t,colorDefault:e}=r;return M({root:["root",t,e&&"colorDefault"],img:["img"],fallback:["fallback"]},_,o)},B=v("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(r,o)=>{const{ownerState:t}=r;return[o.root,o[t.variant],t.colorDefault&&o.colorDefault]}})(({theme:r})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(r.vars||r).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:l({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:l({backgroundColor:r.palette.grey[400]},r.applyStyles("dark",{backgroundColor:r.palette.grey[600]})))}]})),H=v("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(r,o)=>o.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),W=v(T,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(r,o)=>o.fallback})({width:"75%",height:"75%"});function $({crossOrigin:r,referrerPolicy:o,src:t,srcSet:e}){const[n,s]=m.useState(!1);return m.useEffect(()=>{if(!t&&!e)return;s(!1);let i=!0;const a=new Image;return a.onload=()=>{i&&s("loaded")},a.onerror=()=>{i&&s("error")},a.crossOrigin=r,a.referrerPolicy=o,a.src=t,e&&(a.srcset=e),()=>{i=!1}},[r,o,t,e]),n}const G=m.forwardRef(function(o,t){const e=L({props:o,name:"MuiAvatar"}),{alt:n,children:s,className:i,component:a="div",slots:x={},slotProps:A={},imgProps:y,sizes:P,src:p,srcSet:f,variant:k="circular"}=e,R=C(e,E);let c=null;const S=$(l({},y,{src:p,srcSet:f})),b=p||f,h=b&&S!=="error",d=l({},e,{colorDefault:!h,component:a,variant:k}),g=q(d),[w,j]=U("img",{className:g.img,elementType:H,externalForwardedProps:{slots:x,slotProps:{img:l({},y,A.img)}},additionalProps:{alt:n,src:p,srcSet:f,sizes:P},ownerState:d});return h?c=u.jsx(w,l({},j)):s||s===0?c=s:b&&n?c=n[0]:c=u.jsx(W,{ownerState:d,className:g.fallback}),u.jsx(B,l({as:a,ownerState:d,className:F(g.root,i),ref:t},R,{children:c}))}),X=G;export{X as A};