(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[9,10],{455:function(e,t,c){"use strict";var n=c(456),a=c.n(n),s=c(19),r=c(458).a(),i=c(29),o=c(267),l=a.a.create({baseURL:s.a,timeout:6e4}),d="/auth/login";l.interceptors.request.use((function(e){var t=localStorage.getItem(i.b);return t&&(e.headers.authorization=t),t||e.headers["public-request"]||(r.push(d),window.location.reload()),e}),(function(e){o.a.error({message:"Error"}),Promise.reject(e)})),l.interceptors.response.use((function(e){return e.data}),(function(e){var t={message:""};return 400!==e.response.status&&403!==e.response.status||(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(i.b),r.push(d),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),o.a.error(t),Promise.reject(e)}));var j=l,u={login:function(e){return j({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return j({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};t.a=u},460:function(e,t,c){"use strict";var n=c(2),a=c(0),s=c.n(a),r=c(38),i=c(4),o=c(3),l=c(6),d=c.n(l),j=c(69),u=function(e,t){var c={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(c[n[a]]=e[n[a]])}return c},h=function(e){return a.createElement(j.a,null,(function(t){var c,n=t.getPrefixCls,s=t.direction,r=e.prefixCls,l=e.type,j=void 0===l?"horizontal":l,h=e.orientation,m=void 0===h?"center":h,b=e.className,g=e.children,p=e.dashed,x=e.plain,f=u(e,["prefixCls","type","orientation","className","children","dashed","plain"]),O=n("divider",r),v=m.length>0?"-".concat(m):m,w=!!g,y=d()(O,"".concat(O,"-").concat(j),(c={},Object(o.a)(c,"".concat(O,"-with-text"),w),Object(o.a)(c,"".concat(O,"-with-text").concat(v),w),Object(o.a)(c,"".concat(O,"-dashed"),!!p),Object(o.a)(c,"".concat(O,"-plain"),!!x),Object(o.a)(c,"".concat(O,"-rtl"),"rtl"===s),c),b);return a.createElement("div",Object(i.a)({className:y},f,{role:"separator"}),g&&a.createElement("span",{className:"".concat(O,"-inner-text")},g))}))},m=c(105),b=c(516),g=c(514),p=c(430),x=c(444),f=c(517),O=function(){return Object(n.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(n.jsxs)("g",{children:[Object(n.jsx)("path",{fill:"#59C36A",d:"M827.301,875.968c-84.521,71.388-194.169,116.693-313.528,116.693c-177.609,0-333.52-97.848-418.041-240.62\r l31.646-145.858l140.255-26.039c32.553,105.078,130.779,182.178,246.141,182.178c55.964,0,107.937-17.703,150.767-49.112\r l134.777,20.558L827.301,875.968z"}),Object(n.jsx)("path",{fill:"#00A66C",d:"M827.301,875.968l-27.984-142.201l-134.777-20.558c-42.83,31.409-94.803,49.112-150.767,49.112v230.34\r C633.132,992.661,742.779,947.355,827.301,875.968z"}),Object(n.jsx)("g",{id:"Connected_Home_1_",children:Object(n.jsx)("g",{children:Object(n.jsx)("g",{children:Object(n.jsx)("g",{children:Object(n.jsx)("path",{fill:"#FFDA2D",d:"M256.781,505.331c0,26.267,3.998,51.396,10.851,74.813l-171.9,171.897\r c-42.83-71.957-69.29-156.48-69.29-246.71c0-90.233,26.46-174.754,69.29-246.711l137.965,23.743l33.936,148.154\r C260.779,453.932,256.781,479.06,256.781,505.331L256.781,505.331z"})})})})}),Object(n.jsx)("path",{fill:"#4086F4",d:"M1001.103,505.331c0,148.48-68.719,281.547-173.802,370.637L664.539,713.209\r c33.121-23.988,61.107-55.971,79.384-93.66h-230.15c-15.993,0-28.556-12.567-28.556-28.554V419.666\r c0-15.99,12.563-28.554,28.556-28.554h450.78c13.707,0,25.698,9.708,27.983,23.412\r C998.247,444.225,1001.103,475.063,1001.103,505.331L1001.103,505.331z"}),Object(n.jsx)("path",{fill:"#4175DF",d:"M743.924,619.549c-18.275,37.689-46.264,69.672-79.382,93.66l162.759,162.759\r c105.083-89.09,173.802-222.153,173.802-370.637c0-30.269-2.855-61.106-8.567-90.807c-2.284-13.704-14.278-23.412-27.984-23.412\r H513.772v228.437H743.924z"}),Object(n.jsx)("path",{fill:"#FF641A",d:"M835.297,154.107c0.571,7.996-2.855,15.422-7.996,21.131L705.086,296.881\r c-9.704,10.278-25.694,11.421-37.118,2.855c-45.119-33.693-98.231-51.396-154.195-51.396\r c-115.361,0-213.588,77.095-246.141,182.178L95.731,258.62C180.253,115.848,336.163,18,513.772,18\r c113.647,0,224.439,41.88,311.244,114.978C831.298,138.119,834.723,146.112,835.297,154.107L835.297,154.107z"}),Object(n.jsx)("path",{fill:"#F03800",d:"M667.966,299.736c11.422,8.567,27.411,7.423,37.119-2.855l122.214-121.643\r c5.143-5.709,8.569-13.133,7.996-21.131c-0.575-7.997-3.999-15.988-10.279-21.13C738.212,59.88,627.42,18,513.772,18v230.34\r C569.736,248.34,622.849,266.043,667.966,299.736z"})]})})},v=function(){return Object(n.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(n.jsxs)("g",{children:[Object(n.jsx)("path",{fill:"#4A7AFF",d:"M1015.363,506.525c0,279.749-226.775,506.524-506.525,506.524c-279.749,0-506.524-226.775-506.524-506.524\r C2.313,226.775,229.089,0,508.838,0C788.588,0,1015.363,226.775,1015.363,506.525z"}),Object(n.jsx)("path",{fill:"#FFFFFF",d:"M663.688,149.015v114.697c0,0-131.686-19.113-131.686,65.843v84.957h118.941L636.08,544.072H532.002v337.709\r H400.316V544.072l-112.572-2.126V414.512H398.19V316.81c0,0-7.288-145.343,135.938-172.038\r C593.602,133.68,663.688,149.015,663.688,149.015z"}),Object(n.jsx)("path",{fill:"#DCE1EB",d:"M663.688,263.712V149.015c0,0-70.086-15.335-129.56-4.243c-9.291,1.73-17.932,3.973-25.993,6.623v730.387\r h23.867V544.072h104.07l14.871-129.561H532.002c0,0,0,0,0-84.957C532.002,244.599,663.688,263.712,663.688,263.712z"})]})})},w=c(5),y=c(21),C=c(63),F=a.forwardRef((function(e,t){var c=e.className,n=e.component,s=e.viewBox,r=e.spin,i=e.rotate,o=e.tabIndex,l=e.onClick,j=e.children,u=Object(y.a)(e,["className","component","viewBox","spin","rotate","tabIndex","onClick","children"]);Object(C.g)(Boolean(n||j),"Should have `component` prop or `children`."),Object(C.f)();var h=d()("anticon",c),m=d()({"anticon-spin":!!r}),b=i?{msTransform:"rotate(".concat(i,"deg)"),transform:"rotate(".concat(i,"deg)")}:void 0,g=Object(w.a)(Object(w.a)({},C.e),{},{className:m,style:b,viewBox:s});s||delete g.viewBox;var p=o;return void 0===p&&l&&(p=-1),a.createElement("span",Object.assign({role:"img"},u,{ref:t,tabIndex:p,onClick:l,className:h}),n?a.createElement(n,Object.assign({},g),j):j?(Object(C.g)(Boolean(s)||1===a.Children.count(j)&&a.isValidElement(j)&&"use"===a.Children.only(j).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),a.createElement("svg",Object.assign({},g,{viewBox:s}),j)):null)}));F.displayName="AntdIcon";var N=F,k=s.a.forwardRef((function(e,t){return Object(n.jsx)(N,{component:e.svg,className:e.className})})),M=c(52),P=c(455),I=c(42),z=c(461),E=function(e){var t=Object(I.useHistory)(),c=e.otherSignIn,s=e.showForgetPassword,r=e.hideAuthMessage,i=e.onForgetPasswordClick,o=e.showLoading,l=e.extra,d=e.loading,j=e.showMessage,u=e.message,w=e.authenticated,y=e.showAuthMessage,C=e.token,F=e.redirect,N=e.allowRedirect;Object(a.useEffect)((function(){null!==C&&N&&t.push(F),j&&setTimeout((function(){r()}),3e3)}));var M=Object(n.jsxs)("div",{children:[Object(n.jsx)(h,{children:Object(n.jsx)("span",{className:"text-muted font-size-base font-weight-normal",children:"or connect with"})}),Object(n.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(n.jsx)(m.a,{onClick:function(){o()},className:"mr-2",disabled:d,icon:Object(n.jsx)(k,{svg:O}),children:"Google"}),Object(n.jsx)(m.a,{onClick:function(){o()},icon:Object(n.jsx)(k,{svg:v}),disabled:d,children:"Facebook"})]})]});return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(z.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:j?1:0,marginBottom:j?20:0},children:Object(n.jsx)(b.a,{type:"error",showIcon:!0,message:u})}),Object(n.jsxs)(g.a,{layout:"vertical",name:"login-form",onFinish:function(e){o();P.a.login(e).then((function(e){w("fakeToken")})).then((function(e){y(e)}))},children:[Object(n.jsx)(g.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input your email"},{type:"email",message:"Please enter a validate email!"}],children:Object(n.jsx)(p.a,{prefix:Object(n.jsx)(x.a,{className:"text-primary"})})}),Object(n.jsx)(g.a.Item,{name:"password",label:Object(n.jsxs)("div",{className:"".concat(s?"d-flex justify-content-between w-100 align-items-center":""),children:[Object(n.jsx)("span",{children:"Password"}),s&&Object(n.jsx)("span",{onClick:function(){return i},className:"cursor-pointer font-size-sm font-weight-normal text-muted",children:"Forget Password?"})]}),rules:[{required:!0,message:"Please input your password"}],children:Object(n.jsx)(p.a.Password,{prefix:Object(n.jsx)(f.a,{className:"text-primary"})})}),Object(n.jsx)(g.a.Item,{children:Object(n.jsx)(m.a,{type:"primary",htmlType:"submit",block:!0,loading:d,children:"Sign In"})}),c?M:null,l]})]})};E.defaultProps={otherSignIn:!0,showForgetPassword:!1};var B={showAuthMessage:M.c,showLoading:M.d,hideAuthMessage:M.b,authenticated:M.a};t.a=Object(r.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),B)(E)},465:function(e,t,c){"use strict";c.r(t);var n=c(17),a=c(2),s=(c(0),c(460)),r=c(475),i=c(476),o=c(513),l=c(38),d={backgroundImage:"url(/img/others/img-17.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=function(e){var t=Object(l.c)((function(e){return e.theme.currentTheme}));return Object(a.jsx)("div",{className:"h-100",style:d,children:Object(a.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(a.jsx)(r.a,{justify:"center",children:Object(a.jsx)(i.a,{xs:20,sm:20,md:20,lg:7,children:Object(a.jsx)(o.a,{children:Object(a.jsxs)("div",{className:"my-4",children:[Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===t?"logo.png":"logo-white.png"),alt:""}),Object(a.jsxs)("p",{children:["Don't have an account yet? ",Object(a.jsx)("a",{href:"/auth/register-1",children:"Sign Up"})]})]}),Object(a.jsx)(r.a,{justify:"center",children:Object(a.jsx)(i.a,{xs:24,sm:24,md:20,lg:20,children:Object(a.jsx)(s.a,Object(n.a)({},e))})})]})})})})})})}},504:function(e,t,c){"use strict";c.r(t);var n=c(2),a=(c(0),c(465));t.default=function(){return Object(n.jsx)(a.default,{allowRedirect:!0})}}}]);
//# sourceMappingURL=9.826d549d.chunk.js.map