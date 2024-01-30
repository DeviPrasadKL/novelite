var S=Object.defineProperty;var g=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var I=(o,e,t)=>e in o?S(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,z=(o,e)=>{for(var t in e||(e={}))M.call(e,t)&&I(o,t,e[t]);if(g)for(var t of g(e))R.call(e,t)&&I(o,t,e[t]);return o};import{j as a,aT as l,a1 as n,ao as E,r as u,ac as H,a2 as L}from"./index-0997c756.js";import{a as O,g as V,s as h,r as _,d as U,c as N}from"./Typography-a2df6bec.js";import{S as F}from"./SwitchBase-a439279a.js";import{c as m}from"./Grid-88ffd97c.js";const T=m(a.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),A=m(a.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),W=m(a.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function q(o){return V("MuiCheckbox",o)}const D=O("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),x=D,G=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],J=o=>{const{classes:e,indeterminate:t,color:r,size:s}=o,c={root:["root",t&&"indeterminate",`color${l(r)}`,`size${l(s)}`]},d=N(c,q,e);return n({},e,d)},K=h(F,{shouldForwardProp:o=>_(o)||o==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.indeterminate&&e.indeterminate,e[`size${l(t.size)}`],t.color!=="default"&&e[`color${l(t.color)}`]]}})(({theme:o,ownerState:e})=>n({color:(o.vars||o).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${e.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:E(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${x.checked}, &.${x.indeterminate}`]:{color:(o.vars||o).palette[e.color].main},[`&.${x.disabled}`]:{color:(o.vars||o).palette.action.disabled}})),Q=a.jsx(A,{}),X=a.jsx(T,{}),Y=a.jsx(W,{}),Z=u.forwardRef(function(e,t){var r,s;const c=H({props:e,name:"MuiCheckbox"}),{checkedIcon:d=Q,color:y="primary",icon:j=X,indeterminate:i=!1,indeterminateIcon:k=Y,inputProps:w,size:p="medium",className:B}=c,P=L(c,G),C=i?k:j,b=i?k:d,f=n({},c,{color:y,indeterminate:i,size:p}),v=J(f);return a.jsx(K,n({type:"checkbox",inputProps:n({"data-indeterminate":i},w),icon:u.cloneElement(C,{fontSize:(r=C.props.fontSize)!=null?r:p}),checkedIcon:u.cloneElement(b,{fontSize:(s=b.props.fontSize)!=null?s:p}),ownerState:f,ref:t,className:U(v.root,B)},P,{classes:v}))}),oo=Z,$=h("span")(({theme:o})=>({borderRadius:3,width:19,height:19,marginLeft:"4px",boxShadow:o.palette.mode==="dark"?`0 0 0 1px ${o.palette.grey[200]}`:`inset 0 0 0 1px ${o.palette.grey[300]}`,backgroundColor:"transparent",".Mui-focusVisible &":{outline:o.palette.mode==="dark"?`0px auto ${o.palette.grey[200]}`:`0px auto  ${o.palette.grey[300]}`,outlineOffset:2},"input:hover ~ &":{backgroundColor:(o.palette.mode==="dark",o.palette.primary)},"input:disabled ~ &":{boxShadow:"none",background:o.palette.grey[100]}})),eo=h($)({boxShadow:"none",width:19,height:19,"&:before":{display:"block",width:19,height:19,backgroundImage:`url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E")`,content:'""'}});function so(o){return a.jsx(oo,z({disableRipple:!0,color:o.color?o.color:"default",checkedIcon:a.jsx(eo,{sx:{backgroundColor:o.color?`${o.color}.main`:"primary.main"}}),icon:a.jsx($,{}),inputProps:{"aria-label":"Checkbox demo"}},o))}export{so as C,oo as a};
