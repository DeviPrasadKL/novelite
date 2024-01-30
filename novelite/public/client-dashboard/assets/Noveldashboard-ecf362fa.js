import{aT as rr,a1 as N,r as T,ac as fr,a2 as cr,j as $,bK as Q,a0 as pr,bH as X,b_ as hr,b$ as vr,c0 as yr,c1 as gr,R as xr,e as br}from"./index-0997c756.js";import{P as _r}from"./PageContainer-ff5cc437.js";import{B as mr}from"./Breadcrumb-123ad626.js";import{a as st,d as ut}from"./KeyboardArrowRight-2ec62fda.js";import{r as Ve,o as Sr}from"./warning-dc07fa9e.js";import{P as wr,u as Cr}from"./Grid-88ffd97c.js";import{B as lt}from"./Box-1bbd28bd.js";import{g as Pr,a as Or,s as ye,l as Rr,d as dt,c as qr}from"./Typography-a2df6bec.js";import{L as Mr}from"./LinearProgress-b7e4a31d.js";import{B as ft}from"./Button-cff95edf.js";import{u as Ir}from"./useDispatch-66664104.js";import"./index.esm-26dde97f.js";import"./Link-02db63cc.js";import"./createSvgIcon-5b96186d.js";import"./createChainedFunction-0bab83cf.js";import"./ownerWindow-698471fc.js";import"./ownerDocument-613eb639.js";import"./isMuiElement-ed530f57.js";import"./useId-e4fe3eda.js";import"./useControlled-c8393ec8.js";function Er(e){return Pr("MuiMobileStepper",e)}Or("MuiMobileStepper",["root","positionBottom","positionTop","positionStatic","dots","dot","dotActive","progress"]);const $r=["activeStep","backButton","className","LinearProgressProps","nextButton","position","steps","variant"],Lr=e=>{const{classes:t,position:i}=e,n={root:["root",`position${rr(i)}`],dots:["dots"],dot:["dot"],dotActive:["dotActive"],progress:["progress"]};return qr(n,Er,t)},Tr=ye(wr,{name:"MuiMobileStepper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[`position${rr(i.position)}`]]}})(({theme:e,ownerState:t})=>N({display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",background:(e.vars||e).palette.background.default,padding:8},t.position==="bottom"&&{position:"fixed",bottom:0,left:0,right:0,zIndex:(e.vars||e).zIndex.mobileStepper},t.position==="top"&&{position:"fixed",top:0,left:0,right:0,zIndex:(e.vars||e).zIndex.mobileStepper})),jr=ye("div",{name:"MuiMobileStepper",slot:"Dots",overridesResolver:(e,t)=>t.dots})(({ownerState:e})=>N({},e.variant==="dots"&&{display:"flex",flexDirection:"row"})),kr=ye("div",{name:"MuiMobileStepper",slot:"Dot",shouldForwardProp:e=>Rr(e)&&e!=="dotActive",overridesResolver:(e,t)=>{const{dotActive:i}=e;return[t.dot,i&&t.dotActive]}})(({theme:e,ownerState:t,dotActive:i})=>N({},t.variant==="dots"&&N({transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),backgroundColor:(e.vars||e).palette.action.disabled,borderRadius:"50%",width:8,height:8,margin:"0 2px"},i&&{backgroundColor:(e.vars||e).palette.primary.main}))),Dr=ye(Mr,{name:"MuiMobileStepper",slot:"Progress",overridesResolver:(e,t)=>t.progress})(({ownerState:e})=>N({},e.variant==="progress"&&{width:"50%"})),Wr=T.forwardRef(function(t,i){const n=fr({props:t,name:"MuiMobileStepper"}),{activeStep:o=0,backButton:a,className:p,LinearProgressProps:g,nextButton:x,position:S="bottom",steps:w,variant:_="dots"}=n,C=cr(n,$r),P=N({},n,{activeStep:o,position:S,variant:_});let M;_==="progress"&&(w===1?M=100:M=Math.ceil(o/(w-1)*100));const I=Lr(P);return $.jsxs(Tr,N({square:!0,elevation:0,className:dt(I.root,p),ref:i,ownerState:P},C,{children:[a,_==="text"&&$.jsxs(T.Fragment,{children:[o+1," / ",w]}),_==="dots"&&$.jsx(jr,{ownerState:P,className:I.dots,children:[...new Array(w)].map((R,f)=>$.jsx(kr,{className:dt(I.dot,f===o&&I.dotActive),ownerState:P,dotActive:f===o},f))}),_==="progress"&&$.jsx(Dr,N({ownerState:P,className:I.progress,variant:"determinate",value:M},g)),x]}))}),Nr=Wr;var nr={};function Ar(e){if(e&&e.__esModule)return e;var t={};if(e!=null){for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,i):{};n.get||n.set?Object.defineProperty(t,i,n):t[i]=e[i]}}return t.default=e,t}var ir=Ar,k={},me,ct;function Xr(){if(ct)return me;ct=1;function e(t){return t&&t.__esModule?t:{default:t}}return me=e,me}var oe,pt;function Ur(){if(pt)return oe;pt=1;function e(){return oe=e=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},e.apply(this,arguments)}return oe=e,oe}var Se,ht;function zr(){if(ht)return Se;ht=1;function e(t,i){if(t==null)return{};var n={},o=Object.keys(t),a,p;for(p=0;p<o.length;p++)a=o[p],!(i.indexOf(a)>=0)&&(n[a]=t[a]);return n}return Se=e,Se}var we,vt;function Hr(){if(vt)return we;vt=1;var e=zr();function t(i,n){if(i==null)return{};var o=e(i,n),a,p;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(i);for(p=0;p<g.length;p++)a=g[p],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(i,a)&&(o[a]=i[a])}return o}return we=t,we}var Ce,yt;function Vr(){if(yt)return Ce;yt=1;function e(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}return Ce=e,Ce}var Pe,gt;function Br(){if(gt)return Pe;gt=1;function e(i,n){for(var o=0;o<n.length;o++){var a=n[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(i,a.key,a)}}function t(i,n,o){return n&&e(i.prototype,n),o&&e(i,o),i}return Pe=t,Pe}var V,xt;function Fr(){if(xt)return V;xt=1;function e(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?e=function(o){return typeof o}:e=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},e(i)}function t(i){return typeof Symbol=="function"&&e(Symbol.iterator)==="symbol"?V=t=function(o){return e(o)}:V=t=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":e(o)},t(i)}return V=t,V}var Oe,bt;function Kr(){if(bt)return Oe;bt=1;function e(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}return Oe=e,Oe}var Re,_t;function Yr(){if(_t)return Re;_t=1;var e=Fr(),t=Kr();function i(n,o){return o&&(e(o)==="object"||typeof o=="function")?o:t(n)}return Re=i,Re}var ae,mt;function Gr(){if(mt)return ae;mt=1;function e(t){return ae=e=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},e(t)}return ae=e,ae}var se,St;function Jr(){if(St)return se;St=1;function e(t,i){return se=e=Object.setPrototypeOf||function(o,a){return o.__proto__=a,o},e(t,i)}return se=e,se}var qe,wt;function Qr(){if(wt)return qe;wt=1;var e=Jr();function t(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&e(i,n)}return qe=t,qe}var Me={},Ie,Ct;function ge(){if(Ct)return Ie;Ct=1;function e(t){return t&&t.__esModule?t:{default:t}}return Ie=e,Ie}var B={},Pt;function Zr(){if(Pt)return B;Pt=1;var e=ge();Object.defineProperty(B,"__esModule",{value:!0}),B.default=void 0;var t=e(T);e(Ve());var i=function(a){a.index;var p=a.children;t.default.Children.count(p)},n=i;return B.default=n,B}var ue={},F={},Ot;function or(){if(Ot)return F;Ot=1,Object.defineProperty(F,"__esModule",{value:!0}),F.default=void 0;var e={RESISTANCE_COEF:.6,UNCERTAINTY_THRESHOLD:3};return F.default=e,F}var Rt;function en(){if(Rt)return ue;Rt=1;var e=ge();Object.defineProperty(ue,"__esModule",{value:!0}),ue.default=n;var t=e(T),i=e(or());function n(o){var a=o.children,p=o.startIndex,g=o.startX,x=o.pageX,S=o.viewLength,w=o.resistance,_=t.default.Children.count(a)-1,C=p+(g-x)/S,P;return w?C<0?C=Math.exp(C*i.default.RESISTANCE_COEF)-1:C>_&&(C=_+1-Math.exp((_-C)*i.default.RESISTANCE_COEF)):C<0?(C=0,P=(C-p)*S+x):C>_&&(C=_,P=(C-p)*S+x),{index:C,startX:P}}return ue}var K={},qt;function tn(){if(qt)return K;qt=1;var e=ge();Object.defineProperty(K,"__esModule",{value:!0}),K.default=void 0;var t=e(T),i=function(a,p){var g=!1,x=function(M){return M?M.key:"empty"};if(a.children.length&&p.children.length){var S=t.default.Children.map(a.children,x),w=S[a.index];if(w!=null){var _=t.default.Children.map(p.children,x),C=_[p.index];w===C&&(g=!0)}}return g},n=i;return K.default=n,K}var Y={},Mt;function rn(){if(Mt)return Y;Mt=1,Object.defineProperty(Y,"__esModule",{value:!0}),Y.default=void 0;function e(i,n){var o=i%n;return o<0?o+n:o}var t=e;return Y.default=t,Y}var It;function xe(){return It||(It=1,function(e){var t=ge();Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"checkIndexBounds",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"computeIndex",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"constant",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"getDisplaySameSlide",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"mod",{enumerable:!0,get:function(){return p.default}});var i=t(Zr()),n=t(en()),o=t(or()),a=t(tn()),p=t(rn())}(Me)),Me}var Et;function nn(){if(Et)return k;Et=1;var e=ir,t=Xr();Object.defineProperty(k,"__esModule",{value:!0}),k.getDomTreeShapes=f,k.findNativeHandler=h,k.default=k.SwipeableViewsContext=void 0;var i=t(Ur()),n=t(Hr()),o=t(Vr()),a=t(Br()),p=t(Yr()),g=t(Gr()),x=t(Qr()),S=e(T);t(Q),t(Ve());var w=xe();function _(l,v,c,r){return l.addEventListener(v,c,r),{remove:function(){l.removeEventListener(v,c,r)}}}var C={container:{direction:"ltr",display:"flex",willChange:"transform"},slide:{width:"100%",WebkitFlexShrink:0,flexShrink:0,overflow:"auto"}},P={root:{x:{overflowX:"hidden"},"x-reverse":{overflowX:"hidden"},y:{overflowY:"hidden"},"y-reverse":{overflowY:"hidden"}},flexDirection:{x:"row","x-reverse":"row-reverse",y:"column","y-reverse":"column-reverse"},transform:{x:function(v){return"translate(".concat(-v,"%, 0)")},"x-reverse":function(v){return"translate(".concat(v,"%, 0)")},y:function(v){return"translate(0, ".concat(-v,"%)")},"y-reverse":function(v){return"translate(0, ".concat(v,"%)")}},length:{x:"width","x-reverse":"width",y:"height","y-reverse":"height"},rotationMatrix:{x:{x:[1,0],y:[0,1]},"x-reverse":{x:[-1,0],y:[0,1]},y:{x:[0,1],y:[1,0]},"y-reverse":{x:[0,-1],y:[1,0]}},scrollPosition:{x:"scrollLeft","x-reverse":"scrollLeft",y:"scrollTop","y-reverse":"scrollTop"},scrollLength:{x:"scrollWidth","x-reverse":"scrollWidth",y:"scrollHeight","y-reverse":"scrollHeight"},clientLength:{x:"clientWidth","x-reverse":"clientWidth",y:"clientHeight","y-reverse":"clientHeight"}};function M(l,v){var c=v.duration,r=v.easeFunction,s=v.delay;return"".concat(l," ").concat(c," ").concat(r," ").concat(s)}function I(l,v){var c=P.rotationMatrix[v];return{pageX:c.x[0]*l.pageX+c.x[1]*l.pageY,pageY:c.y[0]*l.pageX+c.y[1]*l.pageY}}function R(l){return l.touches=[{pageX:l.pageX,pageY:l.pageY}],l}function f(l,v){for(var c=[];l&&l!==v&&l!==document.body&&!l.hasAttribute("data-swipeable");){var r=window.getComputedStyle(l);r.getPropertyValue("position")==="absolute"||r.getPropertyValue("overflow-x")==="hidden"?c=[]:(l.clientWidth>0&&l.scrollWidth>l.clientWidth||l.clientHeight>0&&l.scrollHeight>l.clientHeight)&&c.push({element:l,scrollWidth:l.scrollWidth,scrollHeight:l.scrollHeight,clientWidth:l.clientWidth,clientHeight:l.clientHeight,scrollLeft:l.scrollLeft,scrollTop:l.scrollTop}),l=l.parentNode}return c}var u=null;function h(l){var v=l.domTreeShapes,c=l.pageX,r=l.startX,s=l.axis;return v.some(function(b){var O=c>=r;(s==="x"||s==="y")&&(O=!O);var q=Math.round(b[P.scrollPosition[s]]),E=q>0,j=q+b[P.clientLength[s]]<b[P.scrollLength[s]];return O&&j||!O&&E?(u=b.element,!0):!1})}var d=S.createContext();k.SwipeableViewsContext=d;var y=function(l){(0,x.default)(v,l);function v(c){var r;return(0,o.default)(this,v),r=(0,p.default)(this,(0,g.default)(v).call(this,c)),r.rootNode=null,r.containerNode=null,r.ignoreNextScrollEvents=!1,r.viewLength=0,r.startX=0,r.lastX=0,r.vx=0,r.startY=0,r.isSwiping=void 0,r.started=!1,r.startIndex=0,r.transitionListener=null,r.touchMoveListener=null,r.activeSlide=null,r.indexCurrent=null,r.firstRenderTimeout=null,r.setRootNode=function(s){r.rootNode=s},r.setContainerNode=function(s){r.containerNode=s},r.setActiveSlide=function(s){r.activeSlide=s,r.updateHeight()},r.handleSwipeStart=function(s){var b=r.props.axis,O=I(s.touches[0],b);r.viewLength=r.rootNode.getBoundingClientRect()[P.length[b]],r.startX=O.pageX,r.lastX=O.pageX,r.vx=0,r.startY=O.pageY,r.isSwiping=void 0,r.started=!0;var q=window.getComputedStyle(r.containerNode),E=q.getPropertyValue("-webkit-transform")||q.getPropertyValue("transform");if(E&&E!=="none"){var j=E.split("(")[1].split(")")[0].split(","),D=window.getComputedStyle(r.rootNode),L=I({pageX:parseInt(j[4],10),pageY:parseInt(j[5],10)},b);r.startIndex=-L.pageX/(r.viewLength-parseInt(D.paddingLeft,10)-parseInt(D.paddingRight,10))||0}},r.handleSwipeMove=function(s){if(!r.started){r.handleTouchStart(s);return}if(!(u!==null&&u!==r.rootNode)){var b=r.props,O=b.axis,q=b.children,E=b.ignoreNativeScroll,j=b.onSwitching,D=b.resistance,L=I(s.touches[0],O);if(r.isSwiping===void 0){var U=Math.abs(L.pageX-r.startX),z=Math.abs(L.pageY-r.startY),A=U>z&&U>w.constant.UNCERTAINTY_THRESHOLD;if(!D&&(O==="y"||O==="y-reverse")&&(r.indexCurrent===0&&r.startX<L.pageX||r.indexCurrent===S.Children.count(r.props.children)-1&&r.startX>L.pageX)){r.isSwiping=!1;return}if(U>z&&s.preventDefault(),A===!0||z>w.constant.UNCERTAINTY_THRESHOLD){r.isSwiping=A,r.startX=L.pageX;return}}if(r.isSwiping===!0){s.preventDefault(),r.vx=r.vx*.5+(L.pageX-r.lastX)*.5,r.lastX=L.pageX;var Z=(0,w.computeIndex)({children:q,resistance:D,pageX:L.pageX,startIndex:r.startIndex,startX:r.startX,viewLength:r.viewLength}),ee=Z.index,W=Z.startX;if(u===null&&!E){var _e=f(s.target,r.rootNode),te=h({domTreeShapes:_e,startX:r.startX,pageX:L.pageX,axis:O});if(te)return}W?r.startX=W:u===null&&(u=r.rootNode),r.setIndexCurrent(ee);var H=function(){j&&j(ee,"move")};(r.state.displaySameSlide||!r.state.isDragging)&&r.setState({displaySameSlide:!1,isDragging:!0},H),H()}}},r.handleSwipeEnd=function(){if(u=null,!!r.started&&(r.started=!1,r.isSwiping===!0)){var s=r.state.indexLatest,b=r.indexCurrent,O=s-b,q;Math.abs(r.vx)>r.props.threshold?r.vx>0?q=Math.floor(b):q=Math.ceil(b):Math.abs(O)>r.props.hysteresis?q=O>0?Math.floor(b):Math.ceil(b):q=s;var E=S.Children.count(r.props.children)-1;q<0?q=0:q>E&&(q=E),r.setIndexCurrent(q),r.setState({indexLatest:q,isDragging:!1},function(){r.props.onSwitching&&r.props.onSwitching(q,"end"),r.props.onChangeIndex&&q!==s&&r.props.onChangeIndex(q,s,{reason:"swipe"}),b===s&&r.handleTransitionEnd()})}},r.handleTouchStart=function(s){r.props.onTouchStart&&r.props.onTouchStart(s),r.handleSwipeStart(s)},r.handleTouchEnd=function(s){r.props.onTouchEnd&&r.props.onTouchEnd(s),r.handleSwipeEnd(s)},r.handleMouseDown=function(s){r.props.onMouseDown&&r.props.onMouseDown(s),s.persist(),r.handleSwipeStart(R(s))},r.handleMouseUp=function(s){r.props.onMouseUp&&r.props.onMouseUp(s),r.handleSwipeEnd(R(s))},r.handleMouseLeave=function(s){r.props.onMouseLeave&&r.props.onMouseLeave(s),r.started&&r.handleSwipeEnd(R(s))},r.handleMouseMove=function(s){r.props.onMouseMove&&r.props.onMouseMove(s),r.started&&r.handleSwipeMove(R(s))},r.handleScroll=function(s){if(r.props.onScroll&&r.props.onScroll(s),s.target===r.rootNode){if(r.ignoreNextScrollEvents){r.ignoreNextScrollEvents=!1;return}var b=r.state.indexLatest,O=Math.ceil(s.target.scrollLeft/s.target.clientWidth)+b;r.ignoreNextScrollEvents=!0,s.target.scrollLeft=0,r.props.onChangeIndex&&O!==b&&r.props.onChangeIndex(O,b,{reason:"focus"})}},r.updateHeight=function(){if(r.activeSlide!==null){var s=r.activeSlide.children[0];s!==void 0&&s.offsetHeight!==void 0&&r.state.heightLatest!==s.offsetHeight&&r.setState({heightLatest:s.offsetHeight})}},r.state={indexLatest:c.index,isDragging:!1,renderOnlyActive:!c.disableLazyLoading,heightLatest:0,displaySameSlide:!0},r.setIndexCurrent(c.index),r}return(0,a.default)(v,[{key:"componentDidMount",value:function(){var r=this;this.transitionListener=_(this.containerNode,"transitionend",function(s){s.target===r.containerNode&&r.handleTransitionEnd()}),this.touchMoveListener=_(this.rootNode,"touchmove",function(s){r.props.disabled||r.handleSwipeMove(s)},{passive:!1}),this.props.disableLazyLoading||(this.firstRenderTimeout=setTimeout(function(){r.setState({renderOnlyActive:!1})},0)),this.props.action&&this.props.action({updateHeight:this.updateHeight})}},{key:"UNSAFE_componentWillReceiveProps",value:function(r){var s=r.index;typeof s=="number"&&s!==this.props.index&&(this.setIndexCurrent(s),this.setState({displaySameSlide:(0,w.getDisplaySameSlide)(this.props,r),indexLatest:s}))}},{key:"componentWillUnmount",value:function(){this.transitionListener.remove(),this.touchMoveListener.remove(),clearTimeout(this.firstRenderTimeout)}},{key:"getSwipeableViewsContext",value:function(){var r=this;return{slideUpdateHeight:function(){r.updateHeight()}}}},{key:"setIndexCurrent",value:function(r){if(!this.props.animateTransitions&&this.indexCurrent!==r&&this.handleTransitionEnd(),this.indexCurrent=r,this.containerNode){var s=this.props.axis,b=P.transform[s](r*100);this.containerNode.style.WebkitTransform=b,this.containerNode.style.transform=b}}},{key:"handleTransitionEnd",value:function(){this.props.onTransitionEnd&&(this.state.displaySameSlide||this.state.isDragging||this.props.onTransitionEnd())}},{key:"render",value:function(){var r=this,s=this.props;s.action;var b=s.animateHeight,O=s.animateTransitions,q=s.axis,E=s.children,j=s.containerStyle,D=s.disabled;s.disableLazyLoading;var L=s.enableMouseEvents;s.hysteresis,s.ignoreNativeScroll,s.index,s.onChangeIndex,s.onSwitching,s.onTransitionEnd,s.resistance;var U=s.slideStyle,z=s.slideClassName,A=s.springConfig,Z=s.style;s.threshold;var ee=(0,n.default)(s,["action","animateHeight","animateTransitions","axis","children","containerStyle","disabled","disableLazyLoading","enableMouseEvents","hysteresis","ignoreNativeScroll","index","onChangeIndex","onSwitching","onTransitionEnd","resistance","slideStyle","slideClassName","springConfig","style","threshold"]),W=this.state,_e=W.displaySameSlide,te=W.heightLatest,H=W.indexLatest,Ze=W.isDragging,et=W.renderOnlyActive,ur=D?{}:{onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},lr=!D&&L?{onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseLeave,onMouseMove:this.handleMouseMove}:{},tt=(0,i.default)({},C.slide,U),re,ne;if(Ze||!O||_e)re="all 0s ease 0s",ne="all 0s ease 0s";else if(re=M("transform",A),ne=M("-webkit-transform",A),te!==0){var rt=", ".concat(M("height",A));re+=rt,ne+=rt}var ie={height:null,WebkitFlexDirection:P.flexDirection[q],flexDirection:P.flexDirection[q],WebkitTransition:ne,transition:re};if(!et){var nt=P.transform[q](this.indexCurrent*100);ie.WebkitTransform=nt,ie.transform=nt}return b&&(ie.height=te),S.createElement(d.Provider,{value:this.getSwipeableViewsContext()},S.createElement("div",(0,i.default)({ref:this.setRootNode,style:(0,i.default)({},P.root[q],Z)},ee,ur,lr,{onScroll:this.handleScroll}),S.createElement("div",{ref:this.setContainerNode,style:(0,i.default)({},ie,C.container,j),className:"react-swipeable-view-container"},S.Children.map(E,function(dr,it){if(et&&it!==H)return null;var ot,at=!0;return it===H&&(at=!1,b&&(ot=r.setActiveSlide,tt.overflowY="hidden")),S.createElement("div",{ref:ot,style:tt,className:z,"aria-hidden":at,"data-swipeable":"true"},dr)}))))}}]),v}(S.Component);y.displayName="ReactSwipableView",y.propTypes={},y.defaultProps={animateHeight:!1,animateTransitions:!0,axis:"x",disabled:!1,disableLazyLoading:!1,enableMouseEvents:!1,hysteresis:.6,ignoreNativeScroll:!1,index:0,threshold:5,springConfig:{duration:"0.35s",easeFunction:"cubic-bezier(0.15, 0.3, 0.25, 1)",delay:"0s"},resistance:!1};var m=y;return k.default=m,k}(function(e){var t=ir;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"SwipeableViewsContext",{enumerable:!0,get:function(){return i.SwipeableViewsContext}});var i=t(nn())})(nr);const on=pr(nr);var ar={};function an(e){return e&&e.__esModule?e:{default:e}}var be=an,le={},de,$t;function Be(){if($t)return de;$t=1;function e(){return de=e=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},e.apply(this,arguments)}return de=e,de}var Ee,Lt;function sn(){if(Lt)return Ee;Lt=1;function e(t,i){if(t==null)return{};var n={},o=Object.keys(t),a,p;for(p=0;p<o.length;p++)a=o[p],!(i.indexOf(a)>=0)&&(n[a]=t[a]);return n}return Ee=e,Ee}var $e,Tt;function Fe(){if(Tt)return $e;Tt=1;var e=sn();function t(i,n){if(i==null)return{};var o=e(i,n),a,p;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(i);for(p=0;p<g.length;p++)a=g[p],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(i,a)&&(o[a]=i[a])}return o}return $e=t,$e}var Le,jt;function Ke(){if(jt)return Le;jt=1;function e(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}return Le=e,Le}var Te,kt;function Ye(){if(kt)return Te;kt=1;function e(i,n){for(var o=0;o<n.length;o++){var a=n[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(i,a.key,a)}}function t(i,n,o){return n&&e(i.prototype,n),o&&e(i,o),i}return Te=t,Te}var G,Dt;function un(){if(Dt)return G;Dt=1;function e(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?e=function(o){return typeof o}:e=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},e(i)}function t(i){return typeof Symbol=="function"&&e(Symbol.iterator)==="symbol"?G=t=function(o){return e(o)}:G=t=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":e(o)},t(i)}return G=t,G}var je,Wt;function ln(){if(Wt)return je;Wt=1;function e(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}return je=e,je}var ke,Nt;function Ge(){if(Nt)return ke;Nt=1;var e=un(),t=ln();function i(n,o){return o&&(e(o)==="object"||typeof o=="function")?o:t(n)}return ke=i,ke}var fe,At;function Je(){if(At)return fe;At=1;function e(t){return fe=e=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},e(t)}return fe=e,fe}var ce,Xt;function dn(){if(Xt)return ce;Xt=1;function e(t,i){return ce=e=Object.setPrototypeOf||function(o,a){return o.__proto__=a,o},e(t,i)}return ce=e,ce}var De,Ut;function Qe(){if(Ut)return De;Ut=1;var e=dn();function t(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&e(i,n)}return De=t,De}function fn(e,t){if(e===t)return!0;if(!e||!t)return!1;var i=Object.keys(e),n=Object.keys(t),o=i.length;if(n.length!==o)return!1;for(var a=0;a<o;a++){var p=i[a];if(e[p]!==t[p]||!Object.prototype.hasOwnProperty.call(t,p))return!1}return!0}function cn(e,t){if(e===t)return!0;if(!e||!t)return!1;var i=e.length;if(t.length!==i)return!1;for(var n=0;n<i;n++)if(e[n]!==t[n])return!1;return!0}const pn=Object.freeze(Object.defineProperty({__proto__:null,shallowEqualArrays:cn,shallowEqualObjects:fn},Symbol.toStringTag,{value:"Module"})),hn=X(pn);var J={};const vn=X(hr),yn=X(vr);var We={exports:{}},Ne={exports:{}},zt;function gn(){return zt||(zt=1,function(e){function t(i){"@babel/helpers - typeof";return e.exports=t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e.exports.__esModule=!0,e.exports.default=e.exports,t(i)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(Ne)),Ne.exports}var Ae={exports:{}},Ht;function xn(){return Ht||(Ht=1,function(e){function t(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(Ae)),Ae.exports}var Vt;function bn(){return Vt||(Vt=1,function(e){var t=gn().default,i=xn();function n(o,a){if(a&&(t(a)==="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return i(o)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports}(We)),We.exports}var Xe={exports:{}},Bt;function _n(){return Bt||(Bt=1,function(e){function t(i){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},e.exports.__esModule=!0,e.exports.default=e.exports,t(i)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(Xe)),Xe.exports}var Ue={exports:{}},ze={exports:{}},Ft;function mn(){return Ft||(Ft=1,function(e){function t(i,n){return e.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,p){return a.__proto__=p,a},e.exports.__esModule=!0,e.exports.default=e.exports,t(i,n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(ze)),ze.exports}var Kt;function Sn(){return Kt||(Kt=1,function(e){var t=mn();function i(n,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(o&&o.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),o&&t(n,o)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports}(Ue)),Ue.exports}const wn=X(yr),Cn=X(Sr),Pn=X(gr);var Yt;function sr(){if(Yt)return J;Yt=1,Object.defineProperty(J,"__esModule",{value:!0});function e(d){return d&&typeof d=="object"&&"default"in d?d.default:d}var t=e(vn),i=e(yn),n=e(bn()),o=e(_n()),a=e(Sn()),p=e(wn),g=e(Cn),x=e(Pn),S=e(T);e(Q),e(Ve());function w(d,y,m){return Object.defineProperty(d,y,m)}var _=function(){var d=null;return function(){if(d!==null)return d;var y=!1;try{window.addEventListener("test",null,w({},"passive",{get:function(){y=!0}}))}catch(m){}return d=y,y}()}(),C={capture:!1,passive:!1};function P(d){return x({},C,d)}function M(d,y,m){var l=[d,y];return l.push(_?m:m.capture),l}function I(d,y,m,l){d.addEventListener.apply(d,M(y,m,l))}function R(d,y,m,l){d.removeEventListener.apply(d,M(y,m,l))}function f(d,y){d.children,d.target;var m=g(d,["children","target"]);Object.keys(m).forEach(function(l){if(l.substring(0,2)==="on"){var v=m[l],c=p(v),r=c==="object",s=c==="function";if(!(!r&&!s)){var b=l.substr(-7).toLowerCase()==="capture",O=l.substring(2).toLowerCase();O=b?O.substring(0,O.length-7):O,r?y(O,v.handler,v.options):y(O,v,P({capture:b}))}}})}function u(d,y){return{handler:d,options:P(y)}}var h=function(d){a(y,d);function y(){return t(this,y),n(this,o(y).apply(this,arguments))}return i(y,[{key:"componentDidMount",value:function(){this.applyListeners(I)}},{key:"componentDidUpdate",value:function(l){this.applyListeners(R,l),this.applyListeners(I)}},{key:"componentWillUnmount",value:function(){this.applyListeners(R)}},{key:"applyListeners",value:function(l){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.props,c=v.target;if(c){var r=c;typeof c=="string"&&(r=window[c]),f(v,l.bind(null,r))}}},{key:"render",value:function(){return this.props.children||null}}]),y}(S.PureComponent);return h.propTypes={},J.withOptions=u,J.default=h,J}var Gt;function On(){if(Gt)return le;Gt=1;var e=be;Object.defineProperty(le,"__esModule",{value:!0}),le.default=C;var t=e(Be()),i=e(Fe()),n=e(Ke()),o=e(Ye()),a=e(Ge()),p=e(Je()),g=e(Qe()),x=e(T);e(Q);var S=hn,w=e(sr()),_=xe();function C(P){var M=function(I){(0,g.default)(R,I);function R(f){var u;return(0,n.default)(this,R),u=(0,a.default)(this,(0,p.default)(R).call(this,f)),u.timer=null,u.state={},u.handleInterval=function(){var h=u.props,d=h.children,y=h.direction,m=h.onChangeIndex,l=h.slideCount,v=u.state.index,c=v;y==="incremental"?c+=1:c-=1,(l||d)&&(c=(0,_.mod)(c,l||x.default.Children.count(d))),u.props.index===void 0&&u.setState({index:c}),m&&m(c,v)},u.handleChangeIndex=function(h,d,y){u.props.index===void 0&&u.setState({index:h}),u.props.onChangeIndex&&u.props.onChangeIndex(h,d,y)},u.handleSwitching=function(h,d){u.timer?(clearInterval(u.timer),u.timer=null):d==="end"&&u.startInterval(),u.props.onSwitching&&u.props.onSwitching(h,d)},u.handleVisibilityChange=function(h){h.target.hidden?clearInterval(u.timer):u.startInterval()},u.state.index=f.index||0,u}return(0,o.default)(R,[{key:"componentDidMount",value:function(){this.startInterval()}},{key:"UNSAFE_componentWillReceiveProps",value:function(u){var h=u.index;typeof h=="number"&&h!==this.props.index&&this.setState({index:h})}},{key:"componentDidUpdate",value:function(u){var h=!(0,S.shallowEqualObjects)({index:u.index,interval:u.interval,autoplay:u.autoplay},{index:this.props.index,interval:this.props.interval,autoplay:this.props.autoplay});h&&this.startInterval()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"startInterval",value:function(){var u=this.props,h=u.autoplay,d=u.interval;clearInterval(this.timer),h&&(this.timer=setInterval(this.handleInterval,d))}},{key:"render",value:function(){var u=this.props,h=u.autoplay;u.direction,u.index,u.interval;var d=u.onChangeIndex,y=(0,i.default)(u,["autoplay","direction","index","interval","onChangeIndex"]),m=this.state.index;return h?x.default.createElement(w.default,{target:"document",onVisibilityChange:this.handleVisibilityChange},x.default.createElement(P,(0,t.default)({index:m,onChangeIndex:this.handleChangeIndex,onSwitching:this.handleSwitching},y))):x.default.createElement(P,(0,t.default)({index:m,onChangeIndex:d},y))}}]),R}(x.default.Component);return M.propTypes={},M.defaultProps={autoplay:!0,direction:"incremental",interval:3e3},M}return le}var pe={},he={exports:{}},Jt;function Rn(){return Jt||(Jt=1,function(e,t){function i(x){if(x&&typeof x=="object"){var S=x.which||x.keyCode||x.charCode;S&&(x=S)}if(typeof x=="number")return p[x];var w=String(x),_=n[w.toLowerCase()];if(_)return _;var _=o[w.toLowerCase()];if(_)return _;if(w.length===1)return w.charCodeAt(0)}i.isEventKey=function(S,w){if(S&&typeof S=="object"){var _=S.which||S.keyCode||S.charCode;if(_==null)return!1;if(typeof w=="string"){var C=n[w.toLowerCase()];if(C)return C===_;var C=o[w.toLowerCase()];if(C)return C===_}else if(typeof w=="number")return w===_;return!1}},t=e.exports=i;var n=t.code=t.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},o=t.aliases={windows:91,"⇧":16,"⌥":18,"⌃":17,"⌘":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};/*!
 * Programatically add the following
 */for(a=97;a<123;a++)n[String.fromCharCode(a)]=a-32;for(var a=48;a<58;a++)n[a-48]=a;for(a=1;a<13;a++)n["f"+a]=a+111;for(a=0;a<10;a++)n["numpad "+a]=a+96;var p=t.names=t.title={};for(a in n)p[n[a]]=a;for(var g in o)n[g]=o[g]}(he,he.exports)),he.exports}var Qt;function qn(){if(Qt)return pe;Qt=1;var e=be;Object.defineProperty(pe,"__esModule",{value:!0}),pe.default=C;var t=e(Be()),i=e(Fe()),n=e(Ke()),o=e(Ye()),a=e(Ge()),p=e(Je()),g=e(Qe()),x=e(T);e(Q);var S=e(Rn()),w=e(sr()),_=xe();function C(P){var M=function(I){(0,g.default)(R,I);function R(){var f,u;(0,n.default)(this,R);for(var h=arguments.length,d=new Array(h),y=0;y<h;y++)d[y]=arguments[y];return u=(0,a.default)(this,(f=(0,p.default)(R)).call.apply(f,[this].concat(d))),u.state={},u.handleKeyDown=function(m){var l,v=u.props,c=v.axis,r=c===void 0?"x":c,s=v.children,b=v.onChangeIndex,O=v.slideCount;switch((0,S.default)(m)){case"page down":case"down":r==="y"?l="decrease":r==="y-reverse"&&(l="increase");break;case"left":r==="x"?l="decrease":r==="x-reverse"&&(l="increase");break;case"page up":case"up":r==="y"?l="increase":r==="y-reverse"&&(l="decrease");break;case"right":r==="x"?l="increase":r==="x-reverse"&&(l="decrease");break}if(l){var q=u.state.index,E=q;l==="increase"?E+=1:E-=1,(O||s)&&(E=(0,_.mod)(E,O||x.default.Children.count(s))),u.props.index===void 0&&u.setState({index:E}),b&&b(E,q)}},u.handleChangeIndex=function(m,l,v){u.props.index===void 0&&u.setState({index:m}),u.props.onChangeIndex&&u.props.onChangeIndex(m,l,v)},u}return(0,o.default)(R,[{key:"UNSAFE_componentWillMount",value:function(){this.setState({index:this.props.index||0})}},{key:"UNSAFE_componentWillReceiveProps",value:function(u){var h=u.index;typeof h=="number"&&h!==this.props.index&&this.setState({index:h})}},{key:"render",value:function(){var u=this.props;u.index,u.onChangeIndex;var h=(0,i.default)(u,["index","onChangeIndex"]),d=this.state.index;return x.default.createElement(w.default,{target:"window",onKeyDown:this.handleKeyDown},x.default.createElement(P,(0,t.default)({index:d,onChangeIndex:this.handleChangeIndex},h)))}}]),R}(x.default.Component);return M.propTypes={},M}return pe}var ve={},He,Zt;function Mn(){if(Zt)return He;Zt=1;function e(t){if(t&&t.__esModule)return t;var i={};if(t!=null){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};o.get||o.set?Object.defineProperty(i,n,o):i[n]=t[n]}}return i.default=t,i}return He=e,He}var er;function In(){if(er)return ve;er=1;var e=Mn(),t=be;Object.defineProperty(ve,"__esModule",{value:!0}),ve.default=_;var i=t(Be()),n=t(Fe()),o=t(Ke()),a=t(Ye()),p=t(Ge()),g=t(Je()),x=t(Qe()),S=e(T);t(Q);var w=xe();function _(C){var P=function(M){(0,x.default)(I,M);function I(R){var f;return(0,o.default)(this,I),f=(0,p.default)(this,(0,g.default)(I).call(this,R)),f.timer=null,f.state={},f.handleChangeIndex=function(u,h,d){var y=f.props,m=y.slideCount,l=y.onChangeIndex,v=u-h,c=f.state.index+v;m&&(c=(0,w.mod)(c,m)),f.props.index===void 0&&f.setIndex(c,u,v),l&&l(c,f.state.index,d)},f.handleTransitionEnd=function(){f.timer=setTimeout(function(){f.setWindow()},0),f.props.onTransitionEnd&&f.props.onTransitionEnd()},f.state.index=R.index||0,f}return(0,a.default)(I,[{key:"UNSAFE_componentWillMount",value:function(){this.setWindow(this.state.index)}},{key:"UNSAFE_componentWillReceiveProps",value:function(f){var u=f.index;if(typeof u=="number"&&u!==this.props.index){var h=u-this.props.index;this.setIndex(u,this.state.indexContainer+h,h)}}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"setIndex",value:function(f,u,h){var d={index:f,indexContainer:u,indexStart:this.state.indexStart,indexStop:this.state.indexStop};h>0&&(!this.props.slideCount||d.indexStop<this.props.slideCount-1)&&(d.indexStop+=1),f>d.indexStop&&(d.indexStop=f);var y=d.indexStart-f;y>0&&(d.indexContainer+=y,d.indexStart-=y),this.setState(d)}},{key:"setWindow",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.state.index,u=this.props.slideCount,h=this.props.overscanSlideBefore,d=this.props.overscanSlideAfter;u&&(h>f&&(h=f),d+f>u-1&&(d=u-f-1)),this.setState({indexContainer:h,indexStart:f-h,indexStop:f+d})}},{key:"render",value:function(){var f=this.props;f.children,f.index,f.onChangeIndex,f.onTransitionEnd,f.overscanSlideAfter,f.overscanSlideBefore,f.slideCount;for(var u=f.slideRenderer,h=(0,n.default)(f,["children","index","onChangeIndex","onTransitionEnd","overscanSlideAfter","overscanSlideBefore","slideCount","slideRenderer"]),d=this.state,y=d.indexContainer,m=d.indexStart,l=d.indexStop,v=[],c=m;c<=l;c+=1)v.push(u({index:c,key:c}));return S.default.createElement(C,(0,i.default)({index:y,onChangeIndex:this.handleChangeIndex,onTransitionEnd:this.handleTransitionEnd},h),v)}}]),I}(S.PureComponent);return P.propTypes={},P.defaultProps={overscanSlideAfter:2,overscanSlideBefore:3},P}return ve}(function(e){var t=be;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"autoPlay",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"bindKeyboard",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"virtualize",{enumerable:!0,get:function(){return o.default}});var i=t(On()),n=t(qn()),o=t(In())})(ar);const En="/assets/novelite/client-dashboard/assets/1-7c9b0a29.webp",$n="/assets/novelite/client-dashboard/assets/2-60d4b2d5.webp",Ln="/assets/novelite/client-dashboard/assets/3-b7e2efa4.webp",Tn="/assets/novelite/client-dashboard/assets/4-07f67074.webp",jn=ar.autoPlay(on),tr=[{label:"San Francisco – Oakland Bay Bridge, United States",imgPath:`${En}`},{label:"Bird",imgPath:`${$n}`},{label:"Bali, Indonesia",imgPath:`${Ln}`},{label:"Goč, Serbia",imgPath:`${Tn}`}];function kn(){const e=Cr(),[t,i]=xr.useState(0),n=tr.length,o=()=>{i(g=>g+1)},a=()=>{i(g=>g-1)},p=g=>{i(g)};return $.jsxs(lt,{sx:{maxWidth:"100vw",flexGrow:1},children:[$.jsx(jn,{axis:e.direction==="rtl"?"x-reverse":"x",index:t,onChangeIndex:p,enableMouseEvents:!0,children:tr.map((g,x)=>$.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Math.abs(t-x)<=2?$.jsx(lt,{component:"img",sx:{height:{xs:200,md:350,lg:350},display:"block",maxWidth:"90vw",overflow:"hidden",width:{xs:"90%",md:"70%",lg:"70%"}},src:g.imgPath,alt:g.label}):null},g.label))}),$.jsx(Nr,{steps:n,position:"static",activeStep:t,nextButton:$.jsxs(ft,{size:"small",onClick:o,disabled:t===n-1,sx:{visibility:"hidden"},children:["Next",e.direction==="rtl"?$.jsx(st,{}):$.jsx(ut,{})]}),backButton:$.jsxs(ft,{size:"small",onClick:a,disabled:t===0,sx:{visibility:"hidden"},children:[e.direction==="rtl"?$.jsx(ut,{}):$.jsx(st,{}),"Back"]})})]})}function ni(){Ir(),br(t=>t.novelprofileReducer.fullName);const e=[{to:"/dashboard",title:"Home"},{title:"Dashboard"}];return $.jsxs(_r,{title:"Dashboard - Novel Office",description:"this is Cards page",children:[$.jsx(mr,{title:"Welcome to Novel Office",items:e}),$.jsx(kn,{})]})}export{ni as default};
