import{j as t}from"./index-8bfed645.js";function a({Component:e}){let n={heading:"Bookings feature upcoming",content:"You'll soon be able to conveniently reserve meeting and conference rooms directly within the app. Stay tuned for this exciting feature update!"},i={heading:"Gate Pass feature upcoming",content:"The gate pass feature will soon be seamlessly integrated into our web app, offering enhanced convenience for all users. Stay tuned for this exciting addition to manage your access with ease!"};return window.location.href.split("/")[4]==="location"?t.jsx(e,{tittle:"Bookings",bookings:n}):window.location.href.split("/")[4]==="gatepass"?t.jsx(e,{tittle:"Gate Pass",bookings:i}):t.jsx(e,{tittle:"Tittle"})}export{a as default};