import{j as t}from"./index-0997c756.js";import{_ as i}from"./react-apexcharts.min-9ed64e15.js";import{P as m}from"./PageContainer-ff5cc437.js";import{B as l}from"./Breadcrumb-123ad626.js";import{P as p}from"./ParentCard-b1462bca.js";import{u as n}from"./Grid-88ffd97c.js";import"./index.esm-26dde97f.js";import"./Typography-a2df6bec.js";import"./Link-02db63cc.js";import"./Box-1bbd28bd.js";import"./Card-d9c51ed6.js";import"./CardHeader-b8bd9542.js";import"./Divider-c9bb0ca0.js";import"./dividerClasses-e55002a2.js";import"./CardContent-b3013b5d.js";const h=[{to:"/",title:"Home"},{title:"Area Chart"}],k=()=>{const e=n(),r=e.palette.primary.main,a=e.palette.secondary.main,o={chart:{id:"area-chart",fontFamily:"'Plus Jakarta Sans', sans-serif",foreColor:"#adb0bb",zoom:{enabled:!0},toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{width:"3",curve:"smooth"},colors:[r,a],xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"]},yaxis:{opposite:!1,labels:{show:!0}},legend:{show:!0,position:"bottom",width:"50px"},grid:{show:!1},tooltip:{theme:"dark",fillSeriesColor:!1}},s=[{name:"Sales Summery 1",data:[31,40,28,51,42,109,100]},{name:"Sales Summery 2",data:[11,32,45,32,34,52,41]}];return t.jsxs(m,{title:"Area Chart",description:"this is innerpage",children:[t.jsx(l,{title:"Area Chart",items:h}),t.jsx(p,{title:"Area Chart",children:t.jsx(i,{options:o,series:s,type:"area",height:"300px"})})]})};export{k as default};
