var T=Object.defineProperty,R=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var w=(r,s,a)=>s in r?T(r,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[s]=a,y=(r,s)=>{for(var a in s||(s={}))z.call(s,a)&&w(r,a,s[a]);if(f)for(var a of f(s))G.call(s,a)&&w(r,a,s[a]);return r},v=(r,s)=>R(r,I(s));import{e as B,j as e,aU as W,L as F,f as A,h as M,r as k,R as C,l as E}from"./index-0997c756.js";import{B as $}from"./Breadcrumb-123ad626.js";import{P as H}from"./PageContainer-ff5cc437.js";import{I as L,m as q,X as O,a8 as V,a9 as _}from"./index.esm-26dde97f.js";import{s as X}from"./empty-shopping-cart-b08a75d1.js";import{B as c}from"./Box-1bbd28bd.js";import{T as Y,a as J,b as K,c as S,d as p,e as N}from"./TableRow-2de5218f.js";import{S as o}from"./Stack-433b3d80.js";import{A as Q}from"./Avatar-df4a6c8a.js";import{T as n}from"./Typography-a2df6bec.js";import{I as U}from"./IconButton-c700279b.js";import{B as Z}from"./ButtonGroup-9297571c.js";import{B as l}from"./Button-cff95edf.js";import{u as ee}from"./useDispatch-66664104.js";import{S as se,a as re,b as te}from"./Stepper-66ce9917.js";import{C as D}from"./ChildCard-c801c4ba.js";import{G as h,P as u}from"./Grid-88ffd97c.js";import{R as P}from"./Radio-a0f96a11.js";import"./Link-02db63cc.js";import"./createStack-57ef95d4.js";import"./styled-1b66e095.js";import"./Card-d9c51ed6.js";import"./CardHeader-b8bd9542.js";import"./Divider-c9bb0ca0.js";import"./dividerClasses-e55002a2.js";import"./CardContent-b3013b5d.js";import"./SwitchBase-a439279a.js";import"./useFormControl-d465193c.js";import"./useControlled-c8393ec8.js";import"./createChainedFunction-0bab83cf.js";const ie=()=>{const r=ee(),s=B(i=>i.ecommerceReducer.cart);console.log(s);const a=i=>{r(A(i))},d=i=>{r(M(i))};return e.jsx(c,{children:s.length>0?e.jsx(e.Fragment,{children:e.jsx(c,{children:e.jsx(Y,{sx:{minWidth:{sm:"350px"}},children:e.jsxs(J,{children:[e.jsx(K,{children:e.jsxs(S,{children:[e.jsx(p,{children:"Product"}),e.jsx(p,{align:"left",children:"Quantity"}),e.jsx(p,{align:"right",children:"Price"})]})}),e.jsx(N,{children:s.map(i=>e.jsxs(S,{children:[e.jsx(p,{children:e.jsxs(o,{direction:"row",alignItems:"center",gap:2,children:[e.jsx(Q,{src:i.photo,alt:i.photo,sx:{borderRadius:"10px",height:"80px",width:"90px"}}),e.jsxs(c,{children:[e.jsx(n,{variant:"h6",children:i.title})," ",e.jsx(n,{color:"textSecondary",variant:"body1",children:i.category}),e.jsx(U,{size:"small",color:"error",onClick:()=>r(W(i.id)),children:e.jsx(L,{size:"1rem"})})]})]})}),e.jsx(p,{children:e.jsxs(Z,{size:"small",color:"success","aria-label":"small button group",children:[e.jsx(l,{onClick:()=>d(i.id),disabled:i.qty<2,children:e.jsx(q,{stroke:1.5,size:"0.8rem"})}),e.jsx(l,{children:i.qty}),e.jsx(l,{onClick:()=>a(i.id),children:e.jsx(O,{stroke:1.5,size:"0.8rem"})})]})}),e.jsx(p,{align:"right",children:e.jsxs(n,{variant:"h6",children:["$",i.price*i.qty]})})]},i.id))})]})})})}):e.jsxs(c,{textAlign:"center",mb:3,children:[e.jsx("img",{src:X,alt:"cart",width:"200px"}),e.jsx(n,{variant:"h5",mb:2,children:"Cart is Empty"}),e.jsx(l,{component:F,to:"/apps/ecommerce/shop",variant:"contained",children:"Go back to Shopping"})]})})},ne=({children:r,steps:s,activeStep:a,handleReset:d,finalStep:i})=>e.jsxs(c,{sx:{width:"100%"},children:[e.jsx(se,{activeStep:a,alternativeLabel:!0,children:s.map(x=>{const t={},j={};return e.jsx(re,v(y({},t),{children:e.jsx(te,v(y({},j),{children:x}))}),x)})}),a===s.length?e.jsxs(k.Fragment,{children:[e.jsx(c,{children:i}),e.jsxs(o,{direction:{sm:"column",lg:"row"},sx:{pt:2},children:[e.jsx(l,{variant:"contained",color:"success",component:F,to:"/apps/ecommerce/shop",children:"Continue Shopping"}),e.jsx(c,{sx:{flex:"1 1 auto",mt:{xs:2,sm:0}}}),e.jsxs(o,{direction:{sm:"column",lg:"row"},spacing:2,children:[e.jsx(l,{variant:"contained",children:"Download Receipt"}),e.jsx(l,{onClick:d,children:"Reset"})]})]})]}):e.jsx(k.Fragment,{children:e.jsx(c,{sx:{mt:2,mb:1},children:r})})]}),b=({total:r,Discount:s})=>e.jsx(e.Fragment,{children:e.jsx(c,{my:3,children:e.jsx(D,{children:e.jsxs(c,{p:2,children:[e.jsx(n,{variant:"h5",fontWeight:600,mb:3,children:"Order Summary"}),e.jsxs(o,{direction:"row",justifyContent:"space-between",mb:3,children:[e.jsx(n,{variant:"h6",fontWeight:400,children:"Sub Total"}),e.jsxs(n,{variant:"h6",children:["$",r]})]}),e.jsxs(o,{direction:"row",justifyContent:"space-between",mb:3,children:[e.jsx(n,{variant:"h6",fontWeight:400,children:"Discount 5%"}),e.jsxs(n,{variant:"h6",color:"error",children:["-$",s]})]}),e.jsxs(o,{direction:"row",justifyContent:"space-between",mb:3,children:[e.jsx(n,{variant:"h6",fontWeight:400,children:"Shipping"}),e.jsx(n,{variant:"h6",children:"Free"})]}),e.jsxs(o,{direction:"row",justifyContent:"space-between",mb:1,children:[e.jsx(n,{variant:"h6",children:"Total"}),e.jsxs(n,{variant:"h5",color:"success",children:["$",r-s]})]})]})})})}),ae=[{id:1,name:"Johnathan Doe",address:"E601 Vrundavan Heights, godrej garden city - 382481",mobile:"9999501050"},{id:2,name:"ParleG Doe",address:"D201 Galexy Heights, godrej garden city - 382481",mobile:"9999501050"},{id:3,name:"Guddu Bhaiya",address:"Mumbai khao gali, Behind shukan, godrej garden city - 382481",mobile:"9999501050"}],ce=({nexStep:r})=>e.jsx(e.Fragment,{children:e.jsx(h,{container:!0,spacing:3,mb:3,mt:1,children:ae.map(s=>e.jsx(h,{item:!0,lg:4,xs:12,children:e.jsxs(u,{variant:"outlined",sx:{p:3},children:[e.jsx(n,{variant:"h6",mb:2,children:s.name}),e.jsx(n,{variant:"body2",gutterBottom:!0,children:s.address}),e.jsxs(n,{variant:"h6",my:3,alignItems:"center",display:"flex",gap:1,children:[e.jsx(V,{})," ",s.mobile]}),e.jsx(l,{variant:"outlined",onClick:r,children:"Deliver To this address"})]})},s.id))})}),le="/assets/novelite/client-dashboard/assets/paypal-e77d4954.svg",oe="/assets/novelite/client-dashboard/assets/payment-3c13ca70.svg",de="/assets/novelite/client-dashboard/assets/mastercard-31fadb4c.svg",he=[{id:1,title:"Free delivery",description:"Delivered on Firday, May 10"},{id:2,title:"Fast delivery ($2,00)",description:"Delivered on Wednesday, May 8"}],xe=[{value:"paypal",title:"Pay with Paypal",description:"You will be redirected to PayPal website to complete your purchase securely.",icons:le},{value:"credit_card",title:"Credit / Debit Card",description:"We support Mastercard, Visa, Discover and Stripe.",icons:de},{value:"cash",title:"Cash on Delivery",description:"Pay with cash when your order is delivered.",icons:""}],me=()=>{const[r,s]=C.useState("Free delivery"),a=t=>{s(t.target.value)},[d,i]=C.useState("paypal"),x=t=>{i(t.target.value)};return e.jsxs(e.Fragment,{children:[e.jsxs(u,{variant:"outlined",sx:{p:3,mt:4},children:[e.jsx(n,{variant:"h6",children:"Delivery Option"}),e.jsx(h,{container:!0,spacing:3,mt:1,children:he.map(t=>e.jsx(h,{item:!0,lg:6,xs:12,children:e.jsx(u,{variant:"outlined",sx:{p:2,borderColor:r===t.title?"primary.main":"",backgroundColor:r===t.title?"primary.light":""},children:e.jsxs(o,{direction:"row",alignItems:"center",gap:1,children:[e.jsx(P,{checked:r===t.title,onChange:a,value:t.title,name:"radio-buttons",inputProps:{"aria-label":t.title}}),e.jsxs(c,{children:[e.jsx(n,{variant:"h6",children:t.title}),e.jsx(n,{variant:"subtitle2",children:t.description})]})]})})},t.id))})]}),e.jsxs(u,{variant:"outlined",sx:{p:3,mt:4},children:[e.jsx(n,{variant:"h6",children:"Payment Option"}),e.jsxs(h,{container:!0,spacing:3,alignItems:"center",children:[e.jsx(h,{lg:8,xs:12,item:!0,children:e.jsx(h,{container:!0,spacing:3,mt:2,children:xe.map(t=>e.jsx(h,{item:!0,lg:12,xs:12,children:e.jsx(u,{variant:"outlined",sx:{p:2,borderColor:d===t.value?"primary.main":"",backgroundColor:d===t.value?"primary.light":""},children:e.jsxs(o,{direction:"row",alignItems:"center",gap:1,children:[e.jsx(P,{checked:d===t.value,onChange:x,value:t.value,name:"radio-buttons",inputProps:{"aria-label":t.title}}),e.jsxs(c,{children:[e.jsx(n,{variant:"h6",children:t.title}),e.jsx(n,{variant:"subtitle2",children:t.description})]}),e.jsx(c,{ml:"auto",children:t.icons?e.jsx("img",{src:t.icons,alt:"payment"}):""})]})})},t.value))})}),e.jsx(h,{lg:4,xs:12,item:!0,children:e.jsx(c,{sx:{width:{xs:"200px",sm:"auto"}},children:e.jsx("img",{src:oe,alt:"payment"})})})]})]})]})},je="/assets/novelite/client-dashboard/assets/payment-complete-61546c47.gif",pe=()=>e.jsx(e.Fragment,{children:e.jsx(c,{my:3,children:e.jsxs(c,{textAlign:"center",p:3,children:[e.jsx(n,{variant:"h5",children:"Thank you for your purchase!"}),e.jsx(n,{variant:"h6",mt:1,mb:4,color:"primary",children:"Your order id: 3fa7-69e1-79b4-dbe0d35f5f5d"}),e.jsx(c,{children:e.jsx("img",{src:je,alt:"payment"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(n,{variant:"body2",children:["We will send you a notification ",e.jsx("br",{}),"within 2 days when it ships."]})]})})}),ue=()=>{const r=B(m=>m.ecommerceReducer.cart),s=["Cart","Billing & address","Payment"],[a,d]=C.useState(0),i=()=>{d(m=>m+1)},x=()=>{d(m=>m-1)},t=()=>{d(0)},j=E.sum(r.map(m=>m.price*m.qty)),g=Math.round(j*(5/100));return e.jsx(c,{children:e.jsx(ne,{steps:s,handleReset:t,activeStep:a,finalStep:e.jsx(pe,{}),children:a===0?e.jsxs(e.Fragment,{children:[e.jsx(c,{my:3,children:e.jsx(ie,{})}),r.length>0?e.jsxs(e.Fragment,{children:[e.jsx(b,{total:j,Discount:g}),e.jsxs(o,{direction:"row",justifyContent:"space-between",children:[e.jsx(l,{color:"secondary",variant:"contained",disabled:a===0,onClick:x,children:"Back"}),e.jsx(l,{variant:"contained",onClick:i,children:"Checkout"})]})]}):""]}):a===1?e.jsxs(e.Fragment,{children:[e.jsx(ce,{nexStep:i}),e.jsx(b,{total:j,Discount:g}),e.jsxs(o,{direction:"row",justifyContent:"space-between",children:[e.jsx(l,{color:"inherit",disabled:a!==1,onClick:x,children:"Back"}),e.jsx(l,{color:"inherit",variant:"outlined",children:"Select Address to go next"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(me,{}),e.jsx(b,{total:j,Discount:g}),e.jsxs(o,{direction:"row",justifyContent:"space-between",children:[e.jsxs(l,{color:"inherit",disabled:a===0,onClick:x,children:[e.jsx(_,{})," Back"]}),e.jsx(l,{onClick:i,size:"large",variant:"contained",children:"Complete an Order"})]})]})})})},ge=[{to:"/",title:"Home"},{title:"Checkout"}],Ke=()=>e.jsxs(H,{title:"Checkout",description:"this is Shop List page",children:[e.jsx($,{title:"Checkout",items:ge}),e.jsx(D,{children:e.jsx(c,{sx:{p:{xs:"0",sm:"24px"}},flexGrow:1,children:e.jsx(ue,{})})})]});export{Ke as default};
