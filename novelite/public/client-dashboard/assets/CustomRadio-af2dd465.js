var l=Object.defineProperty;var t=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var n=(a,o,r)=>o in a?l(a,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[o]=r,d=(a,o)=>{for(var r in o||(o={}))s.call(o,r)&&n(a,r,o[r]);if(t)for(var r of t(o))c.call(o,r)&&n(a,r,o[r]);return a};import{j as e}from"./index-0997c756.js";import{s as i}from"./Typography-a2df6bec.js";import{R as u}from"./Radio-a0f96a11.js";const p=i("span")(({theme:a})=>({borderRadius:"50%",width:21,height:21,boxShadow:a.palette.mode==="dark"?`0 0 0 1px ${a.palette.grey[200]}`:`inset 0 0 0 1px ${a.palette.grey[300]}`,backgroundColor:"transparent",".Mui-focusVisible &":{outline:a.palette.mode==="dark"?`0px auto ${a.palette.grey[200]}`:`0px auto  ${a.palette.grey[300]}`,outlineOffset:2},"input:hover ~ &":{backgroundColor:a.palette.primary},"input:disabled ~ &":{boxShadow:"none",background:a.palette.grey[100]}})),b=i(p)(({theme:a})=>({boxShadow:"none","&:before":{display:"block",width:21,height:21,backgroundImage:a.palette.mode==="dark"?`radial-gradient(${a.palette.background.paper},${a.palette.background.paper} 28%,transparent 32%)`:"radial-gradient(#fff,#fff 28%,transparent 32%)",content:'""'}}));function y(a){return e.jsx(u,d({disableRipple:!0,color:"default",checkedIcon:e.jsx(b,{sx:{backgroundColor:a.color?`${a.color}.main`:"primary.main"}}),icon:e.jsx(p,{}),inputProps:{"aria-label":"Checkbox demo"}},a))}export{y as C};
