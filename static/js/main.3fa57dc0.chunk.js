(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,a){e.exports={imageGallery:"imageGallery_imageGallery__2dlv7"}},13:function(e,t,a){e.exports={button:"button_button__1DYH1"}},15:function(e,t,a){e.exports={overlay:"loder_overlay__36xl0"}},4:function(e,t,a){e.exports={searchbar:"searchbar_searchbar__xttx3",searchForm:"searchbar_searchForm__1KUz1",searchFormButton:"searchbar_searchFormButton__3l0HT",searchFormButtonLabel:"searchbar_searchFormButtonLabel__3owLQ",searchFormInput:"searchbar_searchFormInput__1K7-K"}},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),o=a.n(r),s=a(3),i=a(10),l=a(8),u=a.n(l),m=a(1);function b(e){var t=e.openModal,a=e.bigImageURL,n=e.url;return Object(m.jsx)("li",{className:u.a.imageGalleryItem,children:Object(m.jsx)("img",{src:n,alt:"",className:u.a.imageGalleryItemImage,onClick:function(){t(a)}})})}var j=a(12),h=a.n(j);function d(e){var t=e.onSelect,a=e.imageName,c=e.page,r=e.statusOff,o=e.status,l=Object(n.useState)([]),u=Object(s.a)(l,2),j=u[0],d=u[1];return Object(n.useEffect)((function(){j!==[]&&d([])}),[a]),Object(n.useEffect)((function(){"load"===o&&function(e,t){return fetch("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("22673335-b99cca5659da707c56ab45ca0","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()}))}(a,c).then((function(e){0!==e.hits.length||1!==c?d((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e.hits))})):r("idle")})),r("idle")}),[a,c,o,r]),Object(m.jsx)("ul",{className:h.a.imageGallery,children:j.map((function(e){return Object(m.jsx)(b,{url:e.webformatURL,openModal:function(){return t(e.largeImageURL)},bigImgUrl:e.largeImageURL},e.webformatURL)}))})}var f=a(4),g=a.n(f);function O(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(s.a)(a,2),r=c[0],o=c[1];return Object(m.jsx)("header",{className:g.a.searchbar,children:Object(m.jsxs)("form",{className:g.a.searchForm,onSubmit:function(e){e.preventDefault(),""!==r.trim()&&(t(r),o(""))},children:[Object(m.jsx)("button",{type:"submit",className:g.a.searchFormButton,children:Object(m.jsx)("span",{className:g.a.searchFormButtonLabel,children:"Search"})}),Object(m.jsx)("input",{className:g.a.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,value:r,onChange:function(e){o(e.currentTarget.value.toLowerCase())},placeholder:"Search images and photos"})]})})}var p=a(9),_=a.n(p);function x(e){var t=e.bigImg,a=e.onClose;Object(n.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}}));var c=Object(n.useCallback)((function(e){"Escape"===e.code&&a()}),[a]);return Object(m.jsx)("div",{className:_.a.overlay,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(m.jsx)("div",{className:_.a.modal,children:Object(m.jsx)("img",{src:t,alt:"",width:"800"})})})}var v=a(13),y=a.n(v);function I(e){var t=e.onClickAdd;return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),Object(m.jsx)("button",{className:y.a.button,type:"button",onClick:t,children:Object(m.jsx)("span",{children:"Load More"})})}var w=a(14),F=a.n(w),S=a(15),N=a.n(S),k=function(){return Object(m.jsx)("div",{className:N.a.overlay,children:Object(m.jsx)(F.a,{type:"Grid",color:"#00BFFF",height:100,width:100})})};function C(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),o=Object(s.a)(r,2),i=o[0],l=o[1],u=Object(n.useState)(null),b=Object(s.a)(u,2),j=b[0],h=b[1],f=Object(n.useState)(1),g=Object(s.a)(f,2),p=g[0],_=g[1],v=Object(n.useState)(!1),y=Object(s.a)(v,2),w=y[0],F=y[1],S=Object(n.useState)("idle"),N=Object(s.a)(S,2),C=N[0],G=N[1],L=function(){l((function(e){return!e}))};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O,{onSubmit:function(e){c(e),F(!0),G("load")}}),Object(m.jsx)(d,{imageName:a,onOpen:L,bigImg:j,page:p,onSelect:function(e){h(e),L()},statusOff:function(e){setTimeout((function(e){return G(e)}),500)},status:C}),w&&Object(m.jsx)(I,{onClickAdd:function(){_((function(e){return e+1})),G("load")}}),"load"===C&&Object(m.jsx)(k,{}),i&&Object(m.jsx)(x,{onClose:L,bigImg:j})]})}o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={imageGalleryItem:"imageGalleryItem_imageGalleryItem__203dK",imageGalleryItemImage:"imageGalleryItem_imageGalleryItemImage__323Zl"}},9:function(e,t,a){e.exports={overlay:"modal_overlay__7CoW8",modal:"modal_modal__2v3aC"}}},[[41,1,2]]]);
//# sourceMappingURL=main.3fa57dc0.chunk.js.map