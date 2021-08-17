(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{19:function(e,t,c){e.exports={overlay:"Drawer_overlay__1XG7r",overlayVisible:"Drawer_overlayVisible__1lfZ3",drawer:"Drawer_drawer__F1DIY",items:"Drawer_items__3E4K5"}},20:function(e,t,c){e.exports={card:"Card_card__3o4-K",plus:"Card_plus__3RVx1"}},42:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(13),s=c(34),i=c.n(s),o=(c(42),c(35)),l=c(11),d=c(12),j=c.n(d),u=c(10),b=c(18),m=c(7),x=c(2),h=c(9),f=c.n(h),O=Object(r.createContext)({}),p=c(1);var v=function(e){var t=Object(r.useContext)(O).totalPrice;return Object(p.jsx)(n.a,{basename:"/react-sneakers",children:Object(p.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(p.jsx)(n.b,{to:"/",children:Object(p.jsxs)("div",{className:"d-flex align-center",children:[Object(p.jsx)("img",{width:40,heigth:40,src:"img/logo.png",alt:"logo"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(p.jsx)("p",{className:"opacity-5",children:"Best sneakers shop"})]})]})}),Object(p.jsxs)("ul",{className:"d-flex",children:[Object(p.jsxs)("li",{onClick:e.onClickCart,className:"mr-30 cu-p",children:[Object(p.jsx)("img",{width:18,heigth:18,src:"img/cart.svg",alt:"Cart"}),t?Object(p.jsxs)("span",{children:[t," RUB"]}):"EMPTY"]}),Object(p.jsx)("li",{className:"mr-10 cu-p",children:Object(p.jsx)(n.b,{to:"/favorites",children:Object(p.jsx)("img",{width:18,heigth:18,src:"img/favorites.svg",alt:"Favorites"})})}),Object(p.jsx)("li",{children:Object(p.jsx)(n.b,{to:"/orders",children:Object(p.jsx)("img",{width:18,heigth:18,src:"img/user.svg",alt:"User"})})})]})]})})},g=function(e){var t=e.title,c=e.image,r=e.description,n=a.a.useContext(O).setCartOpened;return Object(p.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(p.jsx)("img",{className:"mb-20",width:"120px",src:c,alt:"Empty"}),Object(p.jsx)("h2",{children:t}),Object(p.jsx)("p",{className:"opacity-6 text-center",children:r}),Object(p.jsxs)("button",{onClick:function(){return n(!1)},className:"greenButton",children:[Object(p.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})},k=c(19),w=c.n(k);var C=function(e){var t=e.onCloseDrawer,c=e.items,a=void 0===c?[]:c,n=e.onRemoveItem,s=e.onAddToOrders,i=e.opened,o=Object(r.useContext)(O),l=o.setCartItems,d=o.orderId,j=o.totalPrice,u=Object(r.useState)(!1),b=Object(m.a)(u,2),x=b[0],h=b[1];return Object(p.jsx)("div",{className:"".concat(w.a.overlay," ").concat(i?w.a.overlayVisible:""),children:Object(p.jsxs)("div",{className:w.a.drawer,children:[Object(p.jsx)("h2",{className:"d-flex justify-between mb-30",children:Object(p.jsx)("img",{onClick:t,className:" cu-p",src:"img/btn-remove.svg",alt:"Close cart"})}),a.length>0?Object(p.jsxs)("div",{className:"d-flex flex-column flex",children:[Object(p.jsx)("div",{className:"items flex",children:a.map((function(e,t){return Object(p.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(p.jsx)("div",{style:{backgroundImage:"url(".concat(e.imageUrl,")")},className:"cartItemImg"}),Object(p.jsxs)("div",{className:"mr-20 flex",children:[Object(p.jsx)("p",{className:"mb-5",children:e.title}),Object(p.jsxs)("b",{children:[e.price," rub."]})]}),Object(p.jsx)("img",{onClick:function(){return n(e.id)},className:"removeBtn",src:"img/btn-remove.svg",alt:"Remove"})]},t)}))}),Object(p.jsxs)("div",{className:"cartTotalBlock",children:[Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"Total:"}),Object(p.jsx)("div",{}),Object(p.jsxs)("b",{children:[j," rub."]})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"Tax 5%:"}),Object(p.jsx)("div",{}),Object(p.jsxs)("b",{children:[Math.round(.05*j)," rub."]})]})]}),Object(p.jsxs)("button",{onClick:function(){return function(e){h(!0),l([]),s(e)}(a)},className:"greenButton",children:["Checkout ",Object(p.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"})]})]})]}):Object(p.jsx)(g,{title:x?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:x?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(d," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437.",image:x?"img/complete-order.jpg":"img/empty-cart.jpg"})]})})},N=c(37),y=c(20),I=c.n(y);var T=function(e){var t=e.itemId,c=e.title,a=e.price,n=e.imageUrl,s=e.onClickFavorite,i=e.onAddToCart,o=e.loading,l=void 0!==o&&o,d=Object(r.useContext)(O),j=d.isItemFavorite,u=d.isItemAdded;return Object(p.jsx)("div",{className:I.a.card,children:l?Object(p.jsxs)(N.a,{speed:2,width:210,height:245,viewBox:"0 0 210 235",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(p.jsx)("rect",{x:"1",y:"0",rx:"10",ry:"10",width:"165",height:"135"}),Object(p.jsx)("rect",{x:"1",y:"157",rx:"5",ry:"5",width:"165",height:"15"}),Object(p.jsx)("rect",{x:"1",y:"177",rx:"5",ry:"5",width:"100",height:"15"}),Object(p.jsx)("rect",{x:"1",y:"204",rx:"5",ry:"5",width:"80",height:"25"}),Object(p.jsx)("rect",{x:"134",y:"200",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:I.a.favorite,onClick:function(){s({itemId:t,title:c,price:a,imageUrl:n})},children:s&&Object(p.jsx)("img",{src:j(t)?"img/liked.svg":"img/unliked.svg",alt:"Unliked"})}),Object(p.jsx)("img",{width:"100%",height:135,src:n,alt:"Sneakers"}),Object(p.jsx)("h5",{children:c}),Object(p.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(p.jsxs)("div",{className:"d-flex flex-column",children:[Object(p.jsx)("span",{children:"Cost:"}),Object(p.jsxs)("b",{children:[a," rub."]})]}),i&&Object(p.jsx)("img",{className:I.a.plus,onClick:function(){i({itemId:t,title:c,price:a,imageUrl:n})},src:u(t)?"img/btn-checked.svg":"img/btn-plus.svg",alt:"Plus"})]})]})})};var _=function(e){var t=e.items,c=(e.cartItems,e.searchValue),r=e.setSearchValue,a=e.searchChange,n=e.addToCart,s=e.onAddToFavorite,i=e.isLoading;return Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsxs)("div",{className:"d-flex align-center justify-between mb-40",children:[Object(p.jsx)("h1",{children:c?'Search result for: "'.concat(c,'"'):"All sneakers"}),Object(p.jsxs)("div",{className:"search-block d-flex",children:[Object(p.jsx)("img",{src:"img/search.svg",alt:"Search"}),c&&Object(p.jsx)("img",{onClick:function(){return r("")},className:"clear cu-p",src:"img/btn-remove.svg",alt:"Clear search"}),Object(p.jsx)("input",{onChange:a,value:c,placeholder:"Search...",type:"text"})]})]}),Object(p.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));return(i?Object(u.a)(Array(8)):e).map((function(e,t){return Object(p.jsx)(T,Object(l.a)({onAddToCart:n,onClickFavorite:s,loading:i},e),t)}))}()})]})};var S=function(){var e=a.a.useContext(O),t=e.favoriteItems,c=e.onAddToFavorite,r=e.addToCart;return Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(p.jsx)("h1",{children:"My Favorites"})}),Object(p.jsx)("div",{className:"d-flex flex-wrap",children:t.map((function(e,t){return Object(p.jsx)(T,Object(l.a)({favorite:!0,onClickFavorite:c,onAddToCart:r},e),t)}))})]})};var A=function(){var e=Object(r.useContext)(O),t=e.orderItems,c=e.isLoading;return Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(p.jsx)("h1",{children:"My Orders"})}),Object(p.jsx)("div",{className:"d-flex flex-wrap",children:(c?Object(u.a)(Array(8)):t).map((function(e,t){return Object(p.jsx)(T,Object(l.a)({loading:c},e),t)}))})]})},F=function(e){return new Promise((function(t){return setTimeout(t,e)}))};var B=function(){var e=Object(r.useState)([]),t=Object(m.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)([]),s=Object(m.a)(n,2),i=s[0],d=s[1],h=Object(r.useState)(""),g=Object(m.a)(h,2),k=g[0],w=g[1],N=Object(r.useState)([]),y=Object(m.a)(N,2),I=y[0],T=y[1],B=Object(r.useState)([]),P=Object(m.a)(B,2),V=P[0],D=P[1],E=Object(r.useState)(!1),U=Object(m.a)(E,2),L=U[0],R=U[1],M=Object(r.useState)(!0),J=Object(m.a)(M,2),K=J[0],Y=J[1],G=Object(r.useState)(!0),X=Object(m.a)(G,2),Z=X[0],q=X[1];Object(r.useEffect)((function(){function e(){return(e=Object(b.a)(j.a.mark((function e(){var t,c,r,n,s,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([f.a.get("https://610ef4597f793c001741963e.mockapi.io/items"),f.a.get("https://610ef4597f793c001741963e.mockapi.io/cart"),f.a.get("https://610ef4597f793c001741963e.mockapi.io/favorites"),f.a.get("https://610ef4597f793c001741963e.mockapi.io/orders")]);case 3:t=e.sent,c=Object(m.a)(t,4),r=c[0],n=c[1],s=c[2],i=c[3],Y(!1),d(n.data),T(s.data),a(r.data),D(i.data.reduce((function(e,t){return[].concat(Object(u.a)(e),Object(u.a)(t.items))}),[])),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("Error on data loading ;("),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var z=function(){var e=Object(b.a)(j.a.mark((function e(t){var c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=i.find((function(e){return e.itemId===t.itemId})))){e.next=7;break}f.a.delete("https://610ef4597f793c001741963e.mockapi.io/cart/".concat(c.id)),d((function(e){return e.filter((function(e){return e.itemId!==t.itemId}))})),e.next=13;break;case 7:return d((function(e){return[].concat(Object(u.a)(e),[t])})),e.next=10,f.a.post("https://610ef4597f793c001741963e.mockapi.io/cart",t);case 10:r=e.sent,a=r.data,d((function(e){return e.map((function(e){return e.itemId===a.itemId?Object(l.a)(Object(l.a)({},e),{},{id:a.id}):e}))}));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),alert("Failed to add to cart");case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(b.a)(j.a.mark((function e(t){var c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=I.find((function(e){return e.itemId===t.itemId})))){e.next=7;break}f.a.delete("https://610ef4597f793c001741963e.mockapi.io/favorites/".concat(c.id)),T((function(e){return e.filter((function(e){return e.itemId!==t.itemId}))})),e.next=12;break;case 7:return e.next=9,f.a.post("https://610ef4597f793c001741963e.mockapi.io/favorites",t);case 9:r=e.sent,a=r.data,T((function(e){return[].concat(Object(u.a)(e),[a])}));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),alert("Failed to add to favorites");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(b.a)(j.a.mark((function e(t){var c,r,a,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Y(!0),e.next=4,f.a.post("https://610ef4597f793c001741963e.mockapi.io/orders",{items:i});case 4:c=e.sent,r=c.data,q(r.id),D((function(e){return[].concat(Object(u.a)(e),[r])})),d([]),a=Object(o.a)(t),e.prev=10,a.s();case 12:if((n=a.n()).done){e.next=20;break}return s=n.value,e.next=16,f.a.delete("https://610ef4597f793c001741963e.mockapi.io/cart/".concat(s.id));case 16:return e.next=18,F(1e3);case 18:e.next=12;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(10),a.e(e.t0);case 25:return e.prev=25,a.f(),e.finish(25);case 28:e.next=33;break;case 30:e.prev=30,e.t1=e.catch(0),alert("Failed to create order");case 33:Y(!1);case 34:case"end":return e.stop()}}),e,null,[[0,30],[10,22,25,28]])})));return function(t){return e.apply(this,arguments)}}(),W=i.reduce((function(e,t){return t.price+e}),0);return Object(p.jsx)(O.Provider,{value:{cartItems:i,favoriteItems:I,items:c,orderItems:V,isItemAdded:function(e){return i.some((function(t){return t.itemId===e}))},onAddToFavorite:H,addToCart:z,setCartOpened:R,setCartItems:d,orderId:Z,isItemFavorite:function(e){return I.some((function(t){return t.itemId===e}))},totalPrice:W,isLoading:K},children:Object(p.jsxs)("div",{className:"wrapper clear",children:[Object(p.jsx)(C,{items:i,onCloseDrawer:function(){return R(!1)},onRemoveItem:function(e){f.a.delete("https://610ef4597f793c001741963e.mockapi.io/cart/".concat(e)),d((function(t){return t.filter((function(t){return t.id!==e}))}))},onAddToOrders:Q,opened:L}),Object(p.jsx)(v,{onClickCart:function(){return R(!0)}}),Object(p.jsx)(x.a,{path:"/react-sneakers/",exact:!0,children:Object(p.jsx)(_,{items:c,cartItems:i,searchValue:k,setSearchValue:w,searchChange:function(e){w(e.target.value)},addToCart:z,onAddToFavorite:H,isLoading:K})}),Object(p.jsx)(x.a,{path:"/react-sneakers/favorites",exact:!0,children:Object(p.jsx)(S,{})}),Object(p.jsx)(x.a,{path:"/react-sneakers/orders",exact:!0,children:Object(p.jsx)(A,{})})]})})};c(68);i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(n.a,{children:Object(p.jsx)(B,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.4281aea2.chunk.js.map