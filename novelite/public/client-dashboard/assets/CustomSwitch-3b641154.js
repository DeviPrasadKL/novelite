var a=Object.defineProperty;var r=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var c=(t,i,o)=>i in t?a(t,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[i]=o,u=(t,i)=>{for(var o in i||(i={}))h.call(i,o)&&c(t,o,i[o]);if(r)for(var o of r(i))p.call(i,o)&&c(t,o,i[o]);return t};import{j as e}from"./index-0997c756.js";import{s}from"./Typography-a2df6bec.js";import{S as m}from"./Switch-cc11dbbc.js";const S=s(t=>e.jsx(m,u({},t)))(({theme:t})=>({"&.MuiSwitch-root":{width:"68px",height:"49px"},"&  .MuiButtonBase-root":{top:"6px",left:"6px"},"&  .MuiButtonBase-root.Mui-checked .MuiSwitch-thumb":{backgroundColor:"primary.main"},"& .MuiSwitch-thumb":{width:"18px",height:"18px",borderRadius:"6px"},"& .MuiSwitch-track":{backgroundColor:t.palette.grey[200],opacity:1,borderRadius:"5px"},"& .MuiSwitch-switchBase":{"&.Mui-checked":{"& + .MuiSwitch-track":{backgroundColor:"primary",opacity:.18}}}}));export{S as C};
