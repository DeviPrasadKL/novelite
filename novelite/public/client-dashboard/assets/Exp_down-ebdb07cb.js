import{R as o,d as y,j as e}from"./index-5a3f6a76.js";import{P as A}from"./PageContainer-ec8a92a5.js";import{B as I}from"./Breadcrumb-fdd77327.js";import{k as F,Q as c}from"./ReactToastify-b6ac6425.js";import{B as n}from"./Box-4fe6d763.js";import{F as r,I as m,S as d}from"./Select-306a1d3d.js";import{M as u}from"./MenuItem-e66f9b8b.js";import{T as W}from"./TextField-9d494300.js";import{B as P}from"./Button-0fcc9acd.js";import{C as _}from"./CircularProgress-3440d5f4.js";import"./index.esm-21a277c7.js";import"./Grid-40636f23.js";import"./Typography-36c6dc69.js";import"./useSlotProps-52eb16c2.js";import"./Link-71046a3e.js";import"./clsx.m-1229b3e0.js";import"./ListContext-24007cb6.js";import"./useFormControl-c4cdf3b7.js";import"./ownerWindow-46c4bc4a.js";import"./Modal-4ae20275.js";import"./useControlled-ede9ea79.js";import"./Paper-73496770.js";import"./dividerClasses-1168dda4.js";import"./listItemTextClasses-201dc23b.js";const L=[{to:"/dashboard",title:"Home"},{to:"/Expansion_Downsize",title:"Expansion-Downsize"}];function ae(){const[p,x]=o.useState("Expansion"),[h,f]=o.useState("Seats"),[a,s]=o.useState(!1);let b=["Expansion","Downsize"],j=["Seats","Aminites","Both","Other"];const g=t=>c.success(t,{toastId:"success"}),S=t=>c.error(t,{toastId:"error"}),w=t=>{x(t.target.value)},D=t=>{f(t.target.value)},{createDoc:E}=y(),v=t=>{t.preventDefault(),s(!0);let C=new FormData(t.target),l=Object.fromEntries(C.entries()),{action:z,sub_action:B,description:O}=l;z!==""&&B!==""&&O!==""&&E("Expansion and Dowsize",l).then(i=>{g("Application submitted successfully"),s(!1)}).catch(i=>{S(i),s(!1),console.log(i)})};return e.jsxs(A,{title:"Expansion/Downsize - Novel Office",children:[e.jsx(I,{title:"Expansion/Downsize",items:L}),e.jsx(e.Fragment,{children:e.jsxs(n,{sx:{display:"flex",flexDirection:"column",m:"auto",width:{xs:"90%",md:"50%",ls:"50%"}},children:[e.jsx(n,{sx:{minWidth:120},children:e.jsxs("form",{onSubmit:v,style:{minWidth:120},children:[e.jsxs(r,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Expansion / Downsize"}),e.jsx(d,{labelId:"demo-simple-select-label",name:"action",id:"demo-simple-select",value:p,label:"Expansion / Downsize",onChange:w,children:b.map(t=>e.jsx(u,{value:t,children:t},t))})]}),e.jsxs(r,{fullWidth:!0,sx:{mt:2},children:[e.jsx(m,{id:"demo-simple-select-label",children:"Sub action"}),e.jsx(d,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:h,name:"sub_action",label:"Sub action",onChange:D,children:j.map(t=>e.jsx(u,{value:t,children:t},t))})]}),e.jsx(r,{fullWidth:!0,sx:{mt:2},children:e.jsx(n,{children:e.jsx(W,{id:"outlined-multiline-static",label:"Description",multiline:!0,rows:2,style:{width:"100%"},name:"description"})})}),e.jsx(P,{type:"submit",variant:"contained",sx:{mt:2},disabled:a,children:a?e.jsx(_,{color:"inherit",size:26}):"Submit"})]})}),e.jsx(F,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})})]})}export{ae as default};