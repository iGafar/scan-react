"use strict";(self.webpackChunkscan_react=self.webpackChunkscan_react||[]).push([[832],{5832:(e,n,t)=>{t.r(n),t.d(n,{default:()=>_e});var r=t(3244),o=t(5843),i=t(3049),a=i.U.injectEndpoints({endpoints:function(e){return{getDocuments:e.mutation({query:function(e){return{url:"documents",method:"POST",body:e}}})}}}).useGetDocumentsMutation,s=t(6105),c=t(3757);function l(e){switch(!0){case e.isTechNews:return"Технические новости";case e.isDigest:return"Сводки новостей";case e.isAnnouncement:return"Анонсы и события";default:return"Нет данных"}}var u,d,p,m,f=t(4163),g=t(1250);function b(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var h=(0,g.Ay)(f.A)(u||(u=b(["\n  width: calc(50% - 19px);\n\n  .ant-card-body {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n\n  @media (max-width: 810px) {\n    width: 100%;\n  }\n"]))),y=g.Ay.span(d||(d=b(["\n  height: 22px;\n  display: flex;\n  align-items: center;\n  padding: 0 12px;\n  width: fit-content;\n  border-radius: 5px;\n  background-color: var(--gold);\n  margin-bottom: 14px;\n"]))),x=(0,g.Ay)(c.A)(p||(p=b(["\n  height: 228px;\n  overflow: auto;\n  color: var(--gray-primary);\n  margin-top: auto;\n\n  @media (max-width: 810px) {\n    max-height: 228px;\n    height: auto;\n  }\n"]))),v=g.Ay.picture(m||(m=b(["\n  height: 158px;\n  overflow: hidden;\n  border-radius: 10px;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 20px;\n  background: url('/images/search-mock.jpg') no-repeat center center/ cover;\n\n  img {\n    width: 100%;\n  }\n"])));function j(e){return new Date(e).toLocaleDateString("ru-Ru",{day:"2-digit",month:"2-digit",year:"numeric"})}var w=t(1052),A=t(9694),S=t(4848);function O(e){var n,t=e.cardData,o=t.issueDate,i=t.source,a=t.title,s=t.attributes,u=t.content,d=t.url,p=u.markup.match(/https?:\/\/\S+"/g),m=p?p.toString().replace(/"/g,""):"/images/search-mock.jpg";return(0,S.jsxs)(h,{children:[(0,S.jsxs)(c.A,{size:"small",mb:24,children:[j(o)," ",(0,S.jsx)("a",{href:d,children:i.name})]}),(0,S.jsx)(r.A,{level:5,mb:14,children:a.text}),(0,S.jsx)(y,{children:l(s)}),(0,S.jsx)(v,{children:(0,S.jsx)("img",{src:m,alt:"news image"})}),(0,S.jsx)(x,{size:"small",mb:32,children:(n=u.markup,n.replace(/<.*?>/g,"").replace(/;.*?;/g,"").replace(/&.*?t/g,"").replace(/s.*?;/g,"").replace(/\?.*?\d/g,"").replace(/\/.*?\s/g,"").replace(/(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)/g,""))}),(0,S.jsxs)(w.A,{justify:"space-between",align:"flex-end",children:[(0,S.jsx)("a",{href:d,target:"_blank",children:(0,S.jsx)(A.Ay,{type:"primary",children:"Читать в источнике"})}),(0,S.jsxs)(c.A,{size:"small",style:{color:"var(--gray-primary)"},children:[s.wordCount.toLocaleString("ru-Ru")," слов"]})]})]})}var $=t(9029),E=t(6540),I=t(8811),k=t(6029),C=t(7852),z=t(7541),P=t(8168);const M={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"};var D=t(7064),N=function(e,n){return E.createElement(D.A,(0,P.A)({},e,{ref:n,icon:M}))};const T=E.forwardRef(N);var B=t(6942),H=t.n(B),L=t(754),R=t(2065),W=t(8719),G=t(682),V=t(2279),q=t(2187),U=t(5905),_=t(7358);const F=(e,n,t,r,o)=>({background:e,border:`${(0,q.zA)(r.lineWidth)} ${r.lineType} ${n}`,[`${o}-icon`]:{color:t}}),K=e=>{const{componentCls:n,motionDurationSlow:t,marginXS:r,marginSM:o,fontSize:i,fontSizeLG:a,lineHeight:s,borderRadiusLG:c,motionEaseInOutCirc:l,withDescriptionIconSize:u,colorText:d,colorTextHeading:p,withDescriptionPadding:m,defaultPadding:f}=e;return{[n]:Object.assign(Object.assign({},(0,U.dF)(e)),{position:"relative",display:"flex",alignItems:"center",padding:f,wordWrap:"break-word",borderRadius:c,[`&${n}-rtl`]:{direction:"rtl"},[`${n}-content`]:{flex:1,minWidth:0},[`${n}-icon`]:{marginInlineEnd:r,lineHeight:0},"&-description":{display:"none",fontSize:i,lineHeight:s},"&-message":{color:p},[`&${n}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${t} ${l}, opacity ${t} ${l},\n        padding-top ${t} ${l}, padding-bottom ${t} ${l},\n        margin-bottom ${t} ${l}`},[`&${n}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${n}-with-description`]:{alignItems:"flex-start",padding:m,[`${n}-icon`]:{marginInlineEnd:o,fontSize:u,lineHeight:0},[`${n}-message`]:{display:"block",marginBottom:r,color:p,fontSize:a},[`${n}-description`]:{display:"block",color:d}},[`${n}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},X=e=>{const{componentCls:n,colorSuccess:t,colorSuccessBorder:r,colorSuccessBg:o,colorWarning:i,colorWarningBorder:a,colorWarningBg:s,colorError:c,colorErrorBorder:l,colorErrorBg:u,colorInfo:d,colorInfoBorder:p,colorInfoBg:m}=e;return{[n]:{"&-success":F(o,r,t,e,n),"&-info":F(m,p,d,e,n),"&-warning":F(s,a,i,e,n),"&-error":Object.assign(Object.assign({},F(u,l,c,e,n)),{[`${n}-description > pre`]:{margin:0,padding:0}})}}},J=e=>{const{componentCls:n,iconCls:t,motionDurationMid:r,marginXS:o,fontSizeIcon:i,colorIcon:a,colorIconHover:s}=e;return{[n]:{"&-action":{marginInlineStart:o},[`${n}-close-icon`]:{marginInlineStart:o,padding:0,overflow:"hidden",fontSize:i,lineHeight:(0,q.zA)(i),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${t}-close`]:{color:a,transition:`color ${r}`,"&:hover":{color:s}}},"&-close-text":{color:a,transition:`color ${r}`,"&:hover":{color:s}}}}},Q=(0,_.OF)("Alert",(e=>[K(e),X(e),J(e)]),(e=>({withDescriptionIconSize:e.fontSizeHeading3,defaultPadding:`${e.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${e.paddingMD}px ${e.paddingContentHorizontalLG}px`})));var Y=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};const Z={success:I.A,info:T,error:k.A,warning:z.A},ee=e=>{const{icon:n,prefixCls:t,type:r}=e,o=Z[r]||null;return n?(0,G.fx)(n,E.createElement("span",{className:`${t}-icon`},n),(()=>({className:H()(`${t}-icon`,n.props.className)}))):E.createElement(o,{className:`${t}-icon`})},ne=e=>{const{isClosable:n,prefixCls:t,closeIcon:r,handleClose:o,ariaProps:i}=e,a=!0===r||void 0===r?E.createElement(C.A,null):r;return n?E.createElement("button",Object.assign({type:"button",onClick:o,className:`${t}-close-icon`,tabIndex:0},i),a):null},te=E.forwardRef(((e,n)=>{const{description:t,prefixCls:r,message:o,banner:i,className:a,rootClassName:s,style:c,onMouseEnter:l,onMouseLeave:u,onClick:d,afterClose:p,showIcon:m,closable:f,closeText:g,closeIcon:b,action:h,id:y}=e,x=Y(e,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action","id"]),[v,j]=E.useState(!1);const w=E.useRef(null);E.useImperativeHandle(n,(()=>({nativeElement:w.current})));const{getPrefixCls:A,direction:S,closable:O,closeIcon:$,className:I,style:k}=(0,V.TP)("alert"),C=A("alert",r),[z,P,M]=Q(C),D=n=>{var t;j(!0),null===(t=e.onClose)||void 0===t||t.call(e,n)},N=E.useMemo((()=>void 0!==e.type?e.type:i?"warning":"info"),[e.type,i]),T=E.useMemo((()=>!("object"!=typeof f||!f.closeIcon)||(!!g||("boolean"==typeof f?f:!1!==b&&null!=b||!!O))),[g,b,f,O]),B=!(!i||void 0!==m)||m,G=H()(C,`${C}-${N}`,{[`${C}-with-description`]:!!t,[`${C}-no-icon`]:!B,[`${C}-banner`]:!!i,[`${C}-rtl`]:"rtl"===S},I,a,s,M,P),q=(0,R.A)(x,{aria:!0,data:!0}),U=E.useMemo((()=>"object"==typeof f&&f.closeIcon?f.closeIcon:g||(void 0!==b?b:"object"==typeof O&&O.closeIcon?O.closeIcon:$)),[b,f,g,$]),_=E.useMemo((()=>{const e=null!=f?f:O;if("object"==typeof e){const{closeIcon:n}=e;return Y(e,["closeIcon"])}return{}}),[f,O]);return z(E.createElement(L.Ay,{visible:!v,motionName:`${C}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:e=>({maxHeight:e.offsetHeight}),onLeaveEnd:p},((n,r)=>{let{className:i,style:a}=n;return E.createElement("div",Object.assign({id:y,ref:(0,W.K4)(w,r),"data-show":!v,className:H()(G,i),style:Object.assign(Object.assign(Object.assign({},k),c),a),onMouseEnter:l,onMouseLeave:u,onClick:d,role:"alert"},q),B?E.createElement(ee,{description:t,icon:e.icon,prefixCls:C,type:N}):null,E.createElement("div",{className:`${C}-content`},o?E.createElement("div",{className:`${C}-message`},o):null,t?E.createElement("div",{className:`${C}-description`},t):null),h?E.createElement("div",{className:`${C}-action`},h):null,E.createElement(ne,{isClosable:T,prefixCls:C,closeIcon:U,handleClose:D,ariaProps:_}))})))}));const re=te;var oe=t(3029),ie=t(2901),ae=t(3954),se=t(2176),ce=t(6822);var le=t(5501);let ue=function(e){function n(){var e,t,r,o;return(0,oe.A)(this,n),t=this,r=n,o=arguments,r=(0,ae.A)(r),(e=(0,ce.A)(t,(0,se.A)()?Reflect.construct(r,o||[],(0,ae.A)(t).constructor):r.apply(t,o))).state={error:void 0,info:{componentStack:""}},e}return(0,le.A)(n,e),(0,ie.A)(n,[{key:"componentDidCatch",value:function(e,n){this.setState({error:e,info:n})}},{key:"render",value:function(){const{message:e,description:n,id:t,children:r}=this.props,{error:o,info:i}=this.state,a=(null==i?void 0:i.componentStack)||null,s=void 0===e?(o||"").toString():e,c=void 0===n?a:n;return o?E.createElement(re,{id:t,type:"error",message:s,description:E.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},c)}):r}}])}(E.Component);const de=ue,pe=re;pe.ErrorBoundary=de;const me=pe;function fe(e){return function(e){if(Array.isArray(e))return he(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||be(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ge(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,a,s=[],c=!0,l=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(l)throw o}}return s}}(e,n)||be(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function be(e,n){if(e){if("string"==typeof e)return he(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?he(e,n):void 0}}function he(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function ye(){var e=(0,o.A)().isMobile,n=ge((0,E.useState)(0),2),t=n[0],r=n[1],i=ge((0,E.useState)([]),2),c=i[0],l=i[1],u=ge((0,E.useState)([]),2),d=u[0],p=u[1],m=ge((0,s.P7)({fixedCacheKey:"ids"}),2),f=m[0],g=m[1],b=g.data,h=g.isSuccess,y=g.isError,x=ge(a(),2),v=x[0],j=x[1],I=j.data,k=j.isLoading,C=j.isSuccess,z=j.isError;return(0,E.useEffect)((function(){if(c.length){var e=c.slice(t,t+10);v({ids:e})}}),[t,c,v]),(0,E.useEffect)((function(){b||f(JSON.parse(sessionStorage.getItem("histogramsBody")||""))}),[]),(0,E.useEffect)((function(){if(h&&b){var e=b.slice(0,99).map((function(e){return e.encodedId}));l(fe(e))}}),[h]),(0,E.useEffect)((function(){C&&I&&p((function(e){return[].concat(fe(e),fe(I))}))}),[C,I]),k&&0===d.length?(0,S.jsx)(w.A,{justify:"center",children:(0,S.jsx)($.A,{})}):z||y?(0,S.jsx)(me,{type:"error",message:"Что-то пошло не так"}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(w.A,{gap:38,wrap:!0,style:{marginBottom:38},children:null==d?void 0:d.map((function(e){return(0,S.jsx)(O,{cardData:e.ok},e.ok.id)}))}),c.length!==d.length&&(0,S.jsx)(w.A,{justify:"center",children:(0,S.jsx)(A.Ay,{onClick:function(){return r((function(e){return e+10}))},style:{width:e?"100%":"auto"},children:"Показать больше"})})]})}var xe=t(6434);function ve(){var e=(0,o.A)().isTablet;return(0,S.jsx)("section",{children:(0,S.jsxs)(xe.m,{children:[(0,S.jsx)(r.A,{level:4,mb:e?58:34,children:"Список документов"}),(0,S.jsx)(ye,{})]})})}var je,we,Ae,Se,Oe=t(4074);function $e(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var Ee,Ie=g.Ay.div(je||(je=$e(["\n  padding: 0 20px;\n\n  .slick-track {\n    padding: 16px 0 !important;\n  }\n\n  .slick-prev {\n    inset-inline-start: -35px !important;\n  }\n\n  .slick-next {\n    inset-inline-end: -35px !important;\n  }\n"]))),ke=(0,g.Ay)(Oe.A)(we||(we=$e(["\n  border: 2px solid var(--green);\n  border-radius: 10px;\n  padding-left: 128px;\n\n  @media (max-width: 575px) {\n    padding-left: 0;\n    border-radius: 0 0 10px 10px;\n    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);\n  }\n"]))),Ce=(0,g.Ay)(w.A)(Ae||(Ae=$e(["\n  background-color: var(--green);\n  color: var(--white);\n  padding: 17px 27px;\n  position: absolute;\n  border-radius: 10px 0 0 10px;\n\n  @media (max-width: 575px) {\n    position: static;\n    border-radius: 10px 10px 0 0;\n    padding: 18px 20px;\n\n    p {\n      flex: 1;\n      text-align: center;\n    }\n  }\n"]))),ze=g.Ay.div(Se||(Se=$e(["\n  position: relative;\n\n  &::before {\n    content: '';\n    display: inline-block;\n    height: 124px;\n    width: 2px;\n    background-color: var(--gray-primary);\n    position: absolute;\n  }\n\n  @media (max-width: 575px) {\n    display: flex;\n    justify-content: space-between;\n\n    p {\n      flex: 1;\n    }\n\n    &::before {\n      display: none;\n    }\n  }\n"])));function Pe(e){var n=e.date,t=e.documentValue,r=e.riskValue,i=(0,o.A)().isMobile;return(0,S.jsxs)(ze,{children:[(0,S.jsx)(c.A,{size:"medium",textCenter:!0,mb:i?0:25,children:j(n)}),(0,S.jsx)(c.A,{size:"medium",textCenter:!0,mb:i?0:25,children:t}),(0,S.jsx)(c.A,{size:"medium",textCenter:!0,children:r})]},n)}function Me(e){return Me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Me(e)}function De(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Ne(e,n,t){return(n=function(e){var n=function(e,n){if("object"!=Me(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=Me(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==Me(n)?n:n+""}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Te(e){return function(e){if(Array.isArray(e))return Le(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||He(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Be(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,a,s=[],c=!0,l=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(l)throw o}}return s}}(e,n)||He(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function He(e,n){if(e){if("string"==typeof e)return Le(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Le(e,n):void 0}}function Le(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function Re(){var e=(0,o.A)(),n=e.isMobile,t=e.isPreMobile,r=e.isTablet,i=e.isLargeDesktop,a=e.isDesktop,l=Be((0,s.Wq)({fixedCacheKey:"histograms"}),2),u=l[0],d=l[1],p=d.data,m=d.isLoading,f=d.isError,g=Be((0,E.useState)([]),2),b=g[0],h=g[1];function y(){switch(!0){case i:return 8;case a:return 7;case r:return 5;case t:return 3;case n:return 1;default:return 8}}return(0,E.useEffect)((function(){p||u(JSON.parse(sessionStorage.getItem("histogramsBody")||""))}),[]),(0,E.useEffect)((function(){var e=p?p[0].data:[],n=p?p[1].data:[],t=e.map((function(e,t){return{date:e.date,documentValue:e.value,riskValue:n[t].value}}));h(Te(t))}),[p]),m?(0,S.jsx)(w.A,{justify:"center",children:(0,S.jsx)($.A,{})}):f?(0,S.jsx)(me,{type:"error",message:"Что то пошло не так"}):b?(0,S.jsxs)(Ie,{children:[(0,S.jsxs)(Ce,{vertical:t,gap:26,children:[(0,S.jsx)(c.A,{size:"large",children:"Период"}),(0,S.jsx)(c.A,{size:"large",children:"Всего"}),(0,S.jsx)(c.A,{size:"large",children:"Риски"})]}),(0,S.jsx)(ke,{arrows:!0,draggable:!0,dots:!1,slidesToShow:y()<b.length?y():b.length,infinite:!1,prevArrow:(0,S.jsx)("button",{children:(0,S.jsx)("img",{src:"/images/carousel/arrow.svg",alt:"arrow"})}),nextArrow:(0,S.jsx)("button",{children:(0,S.jsx)("img",{src:"/images/carousel/arrow.svg",alt:"arrow"})}),children:b.map((function(e){return(0,S.jsx)(Pe,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?De(Object(t),!0).forEach((function(n){Ne(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):De(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e),e.date)}))})]}):(0,S.jsx)(me,{type:"info",action:(0,S.jsx)(w.A,{justify:"center",children:(0,S.jsx)("span",{children:"Данных нет"})})})}function We(){var e=(0,o.A)().isTablet;return(0,S.jsx)("section",{children:(0,S.jsxs)(xe.m,{children:[(0,S.jsx)(r.A,{level:4,mb:e?17:10,children:"Общая сводка"}),(0,S.jsx)(c.A,{size:"medium",mb:27,style:{color:"var(--gray-primary)"},children:"Найдено 4 221 вариантов"}),(0,S.jsx)(Re,{})]})})}var Ge,Ve,qe=(0,g.Ay)(xe.m)(Ee||(Ge=["\n  background: url('/images/results_back.svg') no-repeat right center/ auto 100%;\n  padding-top: 70px;\n  padding-bottom: 145px;\n\n  @media (max-width: 1000px) {\n    padding-top: 40px;\n    padding-bottom: 85px;\n  }\n\n  @media (max-width: 768px) {\n    padding-top: 0;\n    padding-bottom: calc(100vw * 369 / 553);\n    background-position: bottom;\n    background-size: 100%;\n  }\n"],Ve||(Ve=Ge.slice(0)),Ee=Object.freeze(Object.defineProperties(Ge,{raw:{value:Object.freeze(Ve)}}))));function Ue(){var e=(0,o.A)().isTablet;return(0,S.jsx)("section",{children:(0,S.jsxs)(qe,{children:[(0,S.jsxs)(r.A,{level:2,mb:e?36:20,children:["Ищем. Скоро ",e&&(0,S.jsx)("br",{}),"будут результаты"]}),(0,S.jsxs)(c.A,{children:["Поиск может занять некоторое время, ",e&&(0,S.jsx)("br",{}),"просим сохранять терпение."]})]})})}function _e(){return(0,S.jsxs)("main",{children:[(0,S.jsx)(Ue,{}),(0,S.jsx)(We,{}),(0,S.jsx)(ve,{})]})}},6105:(e,n,t)=>{t.d(n,{P7:()=>a,Wq:()=>s});var r=t(3049),o="objectsearch",i=r.U.injectEndpoints({endpoints:function(e){return{getIds:e.mutation({query:function(e){return{url:o,method:"POST",body:e}},transformResponse:function(e){return e.items}}),getHistograms:e.mutation({query:function(e){return{url:"".concat(o,"/histograms"),method:"POST",body:e}},transformResponse:function(e){return e.data}})}}}),a=i.useGetIdsMutation,s=i.useGetHistogramsMutation}}]);