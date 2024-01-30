import{R as C,j as e,i as f,D as k,E as A,U as T,G as E,L as R,r as y}from"./index-0997c756.js";import{T as B}from"./TopCards-812d8949.js";import{_ as b}from"./react-apexcharts.min-9ed64e15.js";import{o as F,p as I,r as z,u as D}from"./index.esm-26dde97f.js";import{D as u}from"./DashboardCard-29d61aa1.js";import{C as W}from"./CustomSelect-b2aed0aa.js";import{u as j,G as a,P as v}from"./Grid-88ffd97c.js";import{M as x}from"./MenuItem-83b52a09.js";import{B as n}from"./Box-1bbd28bd.js";import{S as c}from"./Stack-433b3d80.js";import{T as s}from"./Typography-a2df6bec.js";import{A as h}from"./Avatar-df4a6c8a.js";import{B as L}from"./Button-cff95edf.js";import{Y as $,C as H,P as J}from"./Projects-486733cb.js";import{F as O}from"./Fab-d949d97c.js";import{D as U}from"./DashboardWidgetCard-a78128f0.js";import{A as G}from"./AvatarGroup-15e3c75e.js";import{C as V}from"./CardContent-b3013b5d.js";import{C as M}from"./Chip-6a130307.js";import{L as Y}from"./LinearProgress-b7e4a31d.js";import{W as _}from"./WeeklyStats-e5771d0d.js";import{T as K,a as N,b as X,c as w,d as m,e as q}from"./TableRow-2de5218f.js";import{S as Q}from"./Snackbar-103f9e3d.js";import{A as Z}from"./Alert-324bf0d7.js";import{A as ee}from"./AlertTitle-5aaafa91.js";import"./Card-d9c51ed6.js";import"./Select-9ac3337b.js";import"./Popover-0a85144e.js";import"./Modal-b2861165.js";import"./Fade-841735be.js";import"./utils-498db255.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-698471fc.js";import"./createChainedFunction-0bab83cf.js";import"./Portal-51ee1592.js";import"./Grow-1a033e11.js";import"./List-c5bd1a47.js";import"./ListContext-c7ccd71e.js";import"./utils-5ebfb48b.js";import"./useControlled-c8393ec8.js";import"./useId-e4fe3eda.js";import"./formControlState-02eb4045.js";import"./useFormControl-d465193c.js";import"./InputBase-5410fef4.js";import"./listItemIconClasses-58bb7378.js";import"./dividerClasses-e55002a2.js";import"./listItemTextClasses-e73dd702.js";import"./createStack-57ef95d4.js";import"./styled-1b66e095.js";import"./Close-69d47113.js";import"./IconButton-c700279b.js";const te=()=>{const[i,l]=C.useState("1"),o=P=>{l(P.target.value)},t=j(),r=t.palette.primary.main,p=t.palette.secondary.main,d={chart:{type:"bar",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!0},height:370,stacked:!0},colors:[r,p],plotOptions:{bar:{horizontal:!1,barHeight:"60%",columnWidth:"20%",borderRadius:[6],borderRadiusApplication:"end",borderRadiusWhenStacked:"all"}},stroke:{show:!1},dataLabels:{enabled:!1},legend:{show:!1},grid:{borderColor:"rgba(0,0,0,0.1)",strokeDashArray:3,xaxis:{lines:{show:!1}}},yaxis:{min:-5,max:5,tickAmount:4},xaxis:{categories:["16/08","17/08","18/08","19/08","20/08","21/08","22/08"],axisBorder:{show:!1}},tooltip:{theme:t.palette.mode==="dark"?"dark":"light",fillSeriesColor:!1}},g=[{name:"Eanings this month",data:[1.5,2.7,2.2,3.6,1.5,1]},{name:"Expense this month",data:[-1.8,-1.1,-2.5,-1.5,-.6,-1.8]}];return e.jsx(u,{title:"Revenue Updates",subtitle:"Overview of Profit",action:e.jsxs(W,{labelId:"month-dd",id:"month-dd",value:i,size:"small",onChange:o,children:[e.jsx(x,{value:1,children:"March 2023"}),e.jsx(x,{value:2,children:"Feb 2023"}),e.jsx(x,{value:3,children:"Jan 2023"})]}),children:e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,xs:12,sm:8,children:e.jsx(n,{className:"rounded-bars",children:e.jsx(b,{options:d,series:g,type:"bar",height:"370px"})})}),e.jsxs(a,{item:!0,xs:12,sm:4,children:[e.jsx(c,{spacing:3,mt:3,children:e.jsxs(c,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(n,{width:40,height:40,bgcolor:"primary.light",display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(s,{color:"primary",variant:"h6",display:"flex",children:e.jsx(F,{width:21})})}),e.jsxs(n,{children:[e.jsx(s,{variant:"h3",fontWeight:"700",children:"$63,489.50"}),e.jsx(s,{variant:"subtitle2",color:"textSecondary",children:"Total Earnings"})]})]})}),e.jsxs(c,{spacing:3,my:5,children:[e.jsxs(c,{direction:"row",spacing:2,children:[e.jsx(h,{sx:{width:9,mt:1,height:9,bgcolor:r,svg:{display:"none"}}}),e.jsxs(n,{children:[e.jsx(s,{variant:"subtitle1",color:"textSecondary",children:"Earnings this month"}),e.jsx(s,{variant:"h5",children:"$48,820"})]})]}),e.jsxs(c,{direction:"row",spacing:2,children:[e.jsx(h,{sx:{width:9,mt:1,height:9,bgcolor:p,svg:{display:"none"}}}),e.jsxs(n,{children:[e.jsx(s,{variant:"subtitle1",color:"textSecondary",children:"Expense this month"}),e.jsx(s,{variant:"h5",children:"$26,498"})]})]})]}),e.jsx(L,{color:"primary",variant:"contained",fullWidth:!0,children:"View Full Report"})]})]})})},re=()=>{const i=j(),l=i.palette.secondary.main,o=i.palette.secondary.light,t=i.palette.error.light,r={chart:{type:"area",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1},height:60,sparkline:{enabled:!0},group:"sparklines"},stroke:{curve:"smooth",width:2},fill:{colors:[o],type:"solid",opacity:.05},markers:{size:0},tooltip:{theme:i.palette.mode==="dark"?"dark":"light",x:{show:!1}}},p=[{name:"",color:l,data:[25,66,20,40,12,58,20]}];return e.jsx(u,{title:"Monthly Earnings",action:e.jsx(O,{color:"secondary",size:"medium",children:e.jsx(I,{width:24})}),footer:e.jsx(b,{options:r,series:p,type:"area",height:"60px"}),children:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"h3",fontWeight:"700",mt:"-20px",children:"$6,820"}),e.jsxs(c,{direction:"row",spacing:1,my:1,alignItems:"center",children:[e.jsx(h,{sx:{bgcolor:t,width:27,height:27},children:e.jsx(z,{width:20,color:"#FA896B"})}),e.jsx(s,{variant:"subtitle2",fontWeight:"600",children:"+9%"}),e.jsx(s,{variant:"subtitle2",color:"textSecondary",children:"last year"})]})]})})},se=()=>{const i=j(),l=i.palette.primary.main,o=i.palette.grey[100],t={chart:{type:"bar",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1},height:280},colors:[o,o,l,o,o,o],plotOptions:{bar:{borderRadius:4,columnWidth:"45%",distributed:!0,endingShape:"rounded"}},dataLabels:{enabled:!1},legend:{show:!1},grid:{yaxis:{lines:{show:!1}}},xaxis:{categories:[["Apr"],["May"],["June"],["July"],["Aug"],["Sept"]],axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{theme:i.palette.mode==="dark"?"dark":"light"}},r=[{name:"",data:[20,15,30,25,10,15]}];return e.jsx(U,{title:"Employee Salary",subtitle:"Every month",dataLabel1:"Salary",dataItem1:"$36,358",dataLabel2:"Profit",dataItem2:"$5,296",children:e.jsx(e.Fragment,{children:e.jsx(b,{options:t,series:r,type:"bar",height:"280px"})})})},ie=()=>e.jsx(u,{children:e.jsxs(e.Fragment,{children:[e.jsxs(c,{direction:"row",spacing:2,children:[e.jsx(h,{src:f,alt:f,sx:{borderRadius:"8px",width:70,height:70}}),e.jsxs(n,{children:[e.jsx(s,{variant:"h5",children:"Super awesome, Vue coming soon!"}),e.jsx(s,{variant:"subtitle2",color:"textSecondary",children:"22 March, 2022"})]})]}),e.jsxs(c,{direction:"row",justifyContent:"space-between",mt:5,children:[e.jsxs(G,{max:4,children:[e.jsx(h,{alt:"Remy Sharp",src:k}),e.jsx(h,{alt:"Travis Howard",src:A}),e.jsx(h,{alt:"Cindy Baker",src:T}),e.jsx(h,{alt:"Agnes Walker",src:E})]}),e.jsx(R,{to:"/",children:e.jsx(n,{width:"40px",height:"40px",bgcolor:"primary.light",display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(s,{color:"primary.main",display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(D,{width:22})})})})]})]})}),S="/assets/novelite/client-dashboard/assets/piggy-84077fef.png",ae=[{product:"MaterialPro",price:"23,568",percent:55,color:"primary"},{product:"Flexy Admin",price:"23,568",percent:20,color:"secondary"}],oe=()=>{const i=j(),l=i.palette.secondary.light,o=i.palette.primary.light,t=i.palette.secondary.main,r=i.palette.primary.main,p=i.palette.grey[100];return e.jsxs(v,{sx:{bgcolor:"primary.main",border:`1px solid ${p}`},variant:"outlined",children:[e.jsxs(V,{children:[e.jsx(s,{variant:"h5",color:"white",children:"Best selling products"}),e.jsx(s,{variant:"subtitle1",color:"white",mb:4,children:"Overview 2023"}),e.jsx(n,{textAlign:"center",mt:2,mb:"-90px",children:e.jsx("img",{src:S,alt:S,width:"300px"})})]}),e.jsx(v,{sx:{overflow:"hidden",zIndex:"1",position:"relative",margin:"10px"},children:e.jsx(n,{p:3,children:e.jsx(c,{spacing:3,children:ae.map((d,g)=>e.jsxs(n,{children:[e.jsxs(c,{direction:"row",spacing:2,mb:1,justifyContent:"space-between",alignItems:"center",children:[e.jsxs(n,{children:[e.jsx(s,{variant:"h6",children:d.product}),e.jsxs(s,{variant:"subtitle2",color:"textSecondary",children:["$",d.price]})]}),e.jsx(M,{sx:{backgroundColor:d.color==="primary"?o:l,color:d.color==="primary"?r:t,borderRadius:"4px",width:55,height:24},label:d.percent+"%"})]}),e.jsx(Y,{value:d.percent,variant:"determinate",color:d.color})]},g))})})})]})},ne=[{id:"1",imgsrc:f,name:"Sunil Joshi",post:"Web Designer",pname:"Elite Admin",status:"Low",budget:"3.9"},{id:"2",imgsrc:k,name:"John Deo",post:"Web Developer",pname:"Flexy Admin",status:"Medium",budget:"24.5"},{id:"3",imgsrc:A,name:"Mathew Anderson",post:"Web Manager",pname:"Material Pro",status:"High",budget:"12.8"},{id:"4",imgsrc:T,name:"Yuvraj Sheth",post:"Project Manager",pname:"Xtreme Admin",status:"Very High",budget:"2.4"}],le=ne,ce=()=>{const[i,l]=C.useState("1"),o=t=>{l(t.target.value)};return e.jsx(u,{title:"Top Projects",subtitle:"Best Products",action:e.jsxs(W,{labelId:"month-dd",id:"month-dd",size:"small",value:i,onChange:o,children:[e.jsx(x,{value:1,children:"March 2022"}),e.jsx(x,{value:2,children:"April 2022"}),e.jsx(x,{value:3,children:"May 2022"})]}),children:e.jsx(K,{children:e.jsxs(N,{"aria-label":"simple table",sx:{whiteSpace:"nowrap"},children:[e.jsx(X,{children:e.jsxs(w,{children:[e.jsx(m,{children:e.jsx(s,{variant:"subtitle2",fontWeight:600,children:"Assigned"})}),e.jsx(m,{children:e.jsx(s,{variant:"subtitle2",fontWeight:600,children:"Project"})}),e.jsx(m,{children:e.jsx(s,{variant:"subtitle2",fontWeight:600,children:"Priority"})}),e.jsx(m,{children:e.jsx(s,{variant:"subtitle2",fontWeight:600,children:"Budget"})})]})}),e.jsx(q,{children:le.map(t=>e.jsxs(w,{children:[e.jsx(m,{children:e.jsxs(c,{direction:"row",spacing:2,children:[e.jsx(h,{src:t.imgsrc,alt:t.imgsrc,sx:{width:40,height:40}}),e.jsxs(n,{children:[e.jsx(s,{variant:"subtitle2",fontWeight:600,children:t.name}),e.jsx(s,{color:"textSecondary",fontSize:"12px",variant:"subtitle2",children:t.post})]})]})}),e.jsx(m,{children:e.jsx(s,{color:"textSecondary",variant:"subtitle2",fontWeight:400,children:t.pname})}),e.jsx(m,{children:e.jsx(M,{sx:{bgcolor:t.status==="High"?r=>r.palette.error.light:t.status==="Medium"?r=>r.palette.warning.light:t.status==="Low"?r=>r.palette.success.light:r=>r.palette.secondary.light,color:t.status==="High"?r=>r.palette.error.main:t.status==="Medium"?r=>r.palette.warning.main:t.status==="Low"?r=>r.palette.success.main:r=>r.palette.secondary.main,borderRadius:"8px"},size:"small",label:t.status})}),e.jsx(m,{children:e.jsxs(s,{variant:"subtitle2",children:["$",t.budget,"k"]})})]},t.id))})]})})})},de=()=>{const[i,l]=y.useState(!1),o=()=>{l(!0)},t=r=>{r!=="clickaway"&&l(!1)};return y.useEffect(()=>{const r=setTimeout(()=>{o()},1500);return()=>clearTimeout(r)},[]),e.jsx(y.Fragment,{children:e.jsx(Q,{open:i,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:6e3,onClose:t,children:e.jsxs(Z,{onClose:t,severity:"info",variant:"filled",sx:{width:"100%",color:"white"},children:[e.jsx(ee,{children:"Welcome To Modernize"}),"Easy to customize the Template!!!"]})})})},lt=()=>e.jsxs(n,{children:[e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,sm:12,lg:12,children:e.jsx(B,{})}),e.jsx(a,{item:!0,xs:12,lg:8,children:e.jsx(te,{})}),e.jsx(a,{item:!0,xs:12,lg:4,children:e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,xs:12,sm:6,lg:12,children:e.jsx($,{})}),e.jsx(a,{item:!0,xs:12,sm:6,lg:12,children:e.jsx(re,{})})]})}),e.jsx(a,{item:!0,xs:12,lg:4,children:e.jsx(se,{})}),e.jsx(a,{item:!0,xs:12,lg:4,children:e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(H,{})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(J,{})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(ie,{})})]})}),e.jsx(a,{item:!0,xs:12,lg:4,children:e.jsx(oe,{})}),e.jsx(a,{item:!0,xs:12,lg:4,children:e.jsx(_,{})}),e.jsx(a,{item:!0,xs:12,lg:8,children:e.jsx(ce,{})})]}),e.jsx(de,{})]});export{lt as default};
