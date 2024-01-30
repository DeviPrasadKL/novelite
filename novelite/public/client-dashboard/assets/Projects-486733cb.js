import{j as e}from"./index-0997c756.js";import{_ as d}from"./react-apexcharts.min-9ed64e15.js";import{aK as x,r as g}from"./index.esm-26dde97f.js";import{D as p}from"./DashboardCard-29d61aa1.js";import{u as m,G as h}from"./Grid-88ffd97c.js";import{T as s}from"./Typography-a2df6bec.js";import{S as o}from"./Stack-433b3d80.js";import{A as l}from"./Avatar-df4a6c8a.js";const S=()=>{const t=m(),r=t.palette.primary.main,a=t.palette.primary.light,i=t.palette.success.light,n={chart:{type:"donut",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1},height:155},colors:[r,a,"#F9F9FD"],plotOptions:{pie:{startAngle:0,endAngle:360,donut:{size:"75%",background:"transparent"}}},tooltip:{enabled:!1},stroke:{show:!1},dataLabels:{enabled:!1},legend:{show:!1},responsive:[{breakpoint:991,options:{chart:{width:120}}}]},c=[38,40,25];return e.jsx(p,{title:"Yearly Breakup",children:e.jsxs(h,{container:!0,spacing:3,children:[e.jsxs(h,{item:!0,xs:7,sm:7,children:[e.jsx(s,{variant:"h3",fontWeight:"700",children:"$36,358"}),e.jsxs(o,{direction:"row",spacing:1,mt:1,alignItems:"center",children:[e.jsx(l,{sx:{bgcolor:i,width:27,height:27},children:e.jsx(x,{width:20,color:"#39B69A"})}),e.jsx(s,{variant:"subtitle2",fontWeight:"600",children:"+9%"}),e.jsx(s,{variant:"subtitle2",color:"textSecondary",children:"last year"})]}),e.jsxs(o,{spacing:3,mt:5,direction:"row",children:[e.jsxs(o,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(l,{sx:{width:9,height:9,bgcolor:r,svg:{display:"none"}}}),e.jsx(s,{variant:"subtitle2",color:"textSecondary",children:"2022"})]}),e.jsxs(o,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(l,{sx:{width:9,height:9,bgcolor:a,svg:{display:"none"}}}),e.jsx(s,{variant:"subtitle2",color:"textSecondary",children:"2023"})]})]})]}),e.jsx(h,{item:!0,xs:5,sm:5,children:e.jsx(d,{options:n,series:c,type:"donut",height:"130px"})})]})})},F=()=>{const t=m(),r=t.palette.secondary.main,a=t.palette.secondary.light,i=t.palette.error.light,n={chart:{type:"area",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1},height:80,sparkline:{enabled:!0},group:"sparklines"},stroke:{curve:"smooth",width:2},fill:{colors:[a],type:"solid",opacity:.05},markers:{size:0},tooltip:{theme:t.palette.mode==="dark"?"dark":"light",x:{show:!1}}},c=[{name:"",color:r,data:[30,25,35,20,30,40]}];return e.jsx(p,{footer:e.jsx(e.Fragment,{children:e.jsx(d,{options:n,series:c,type:"area",height:"80px"})}),children:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"subtitle2",color:"textSecondary",children:"Customers"}),e.jsx(s,{variant:"h4",children:"36,358"}),e.jsxs(o,{direction:"row",spacing:1,mt:1,alignItems:"center",children:[e.jsx(l,{sx:{bgcolor:i,width:24,height:24},children:e.jsx(g,{width:18,color:"#FA896B"})}),e.jsx(s,{variant:"subtitle2",fontWeight:"600",children:"+9%"})]})]})})},C=()=>{const t=m(),r=t.palette.primary.main,a=t.palette.success.light,i={chart:{type:"bar",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",toolbar:{show:!1},height:80,resize:!0,barColor:"#fff",sparkline:{enabled:!0}},colors:[r],grid:{show:!1},plotOptions:{bar:{horizontal:!1,startingShape:"flat",endingShape:"flat",columnWidth:"60%",barHeight:"20%",borderRadius:3}},dataLabels:{enabled:!1},stroke:{show:!0,width:2.5,colors:["rgba(0,0,0,0.01)"]},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1}},yaxis:{labels:{show:!1}},axisBorder:{show:!1},fill:{opacity:1},tooltip:{theme:t.palette.mode==="dark"?"dark":"light",x:{show:!1}}},n=[{name:"",data:[4,10,9,7,9,10,11,8,10]}];return e.jsx(p,{children:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"subtitle2",color:"textSecondary",children:"Projects"}),e.jsx(s,{variant:"h4",children:"78,298"}),e.jsxs(o,{direction:"row",spacing:1,my:1,alignItems:"center",children:[e.jsx(l,{sx:{bgcolor:a,width:24,height:24},children:e.jsx(x,{width:18,color:"#39B69A"})}),e.jsx(s,{variant:"subtitle2",fontWeight:"600",children:"+9%"})]}),e.jsx(d,{options:i,series:n,type:"bar",height:"80px"})]})})};export{F as C,C as P,S as Y};
