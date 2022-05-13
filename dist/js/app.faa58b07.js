(function(){"use strict";var e={356:function(e,o,t){var r=t(963),n=t(252),s=t(577);const i={class:"flex-wrap"},a={class:"good-content"},c={class:"good-content__menu"},l=(0,n._)("h1",{class:"good-content__title"},"Добавление товара",-1),d={class:"good-content__sort"},u={class:"good-content__main"};function m(e,o,t,r,m,g){const p=(0,n.up)("Fade"),f=(0,n.up)("MobileMenu"),h=(0,n.up)("SelectBy"),v=(0,n.up)("GoodGrid"),_=(0,n.up)("AddForm");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(p,{fadeDegree:5,hideFade:g.showMenu,hideFadeArg:!1,fadeIsVisible:m.showMobileMenu},null,8,["hideFade","fadeIsVisible"]),(0,n._)("div",i,[(0,n._)("main",{class:(0,s.C_)([{menuOpened:m.showMobileMenu},"good"])},[(0,n._)("div",a,[(0,n._)("header",c,[l,(0,n.Wm)(f,{onClick:g.showMenu},null,8,["onClick"]),(0,n._)("div",d,[(0,n.Wm)(h)])]),(0,n._)("div",u,[(0,n.Wm)(v,{mobileMenuIsActive:m.showMobileMenu},null,8,["mobileMenuIsActive"]),(0,n.Wm)(_,{closeMobileMenu:g.showMenu,showMobileMenu:m.showMobileMenu},null,8,["closeMobileMenu","showMobileMenu"])])])],2)])],64)}function g(e,o,t,i,a,c){return(0,n.wg)(),(0,n.j4)(r.uT,{name:"fade-anim"},{default:(0,n.w5)((()=>[t.fadeIsVisible?((0,n.wg)(),(0,n.iD)("div",{key:0,style:(0,s.j5)({"z-index":t.fadeDegree}),onClick:o[0]||(o[0]=e=>t.hideFade(t.hideFadeArg)),class:"fade"},null,4)):(0,n.kq)("",!0)])),_:1})}var p={name:"Fade",props:{fadeIsVisible:{type:Boolean,default:!0},hideFade:{type:Function,default:e=>e},hideFadeArg:{type:Boolean,default:!1},fadeDegree:{type:Number,default:3}}},f=t(744);const h=(0,f.Z)(p,[["render",g],["__scopeId","data-v-704d0e3e"]]);var v=h;const _=e=>((0,n.dD)("data-v-001199a6"),e=e(),(0,n.Cn)(),e),w={class:"wrapper"},b={class:"input-field"},M=_((()=>(0,n._)("label",{must:"",class:"form-good__name",for:"gname"},"Наименование товара",-1))),k={class:"input-field"},A=_((()=>(0,n._)("label",{class:"form-good__descr",for:"gdescr"},"Описание товара",-1))),I={class:"input-field"},C=_((()=>(0,n._)("label",{must:"",class:"form-good__link",for:"glink"},"Ссылка на изображение товара",-1))),y={class:"input-field input-field__"},D=_((()=>(0,n._)("label",{must:"",class:"form-good__price",for:"gprice"},"Цена товара",-1)));function B(e,o,t,i,a,c){return(0,n.wg)(),(0,n.iD)("form",{onSubmit:o[9]||(o[9]=(0,r.iM)((()=>{}),["prevent"])),action:"",class:(0,s.C_)(["form-good",[e.form-e.good,{opened:t.showMobileMenu}]])},[(0,n._)("div",w,[(0,n._)("p",b,[M,(0,n.wy)((0,n._)("input",{onFocusOnce:o[0]||(o[0]=(...e)=>c.startValidate&&c.startValidate(...e)),class:(0,s.C_)([{input_error:i.v$.name.$errors.length},"input"]),"onUpdate:modelValue":o[1]||(o[1]=e=>i.state.name=e),type:"text",id:"name",name:"name",placeholder:"Наименование товара"},null,34),[[r.nr,i.state.name]]),i.v$.name.$error?((0,n.wg)(),(0,n.iD)("span",{key:0,class:(0,s.C_)({error:i.v$.name.$errors.length})},(0,s.zw)(i.v$.name.$errors[0].$message),3)):(0,n.kq)("",!0)]),(0,n._)("p",k,[A,(0,n.wy)((0,n._)("textarea",{rows:"10",cols:"20",wrap:"hard","onUpdate:modelValue":o[2]||(o[2]=e=>i.state.descr=e),type:"text",id:"gdescr",name:"gdescr",placeholder:"Введите описание товара"},null,512),[[r.nr,i.state.descr]])]),(0,n._)("p",I,[C,(0,n.wy)((0,n._)("input",{onFocusOnce:o[3]||(o[3]=(...e)=>c.startValidate&&c.startValidate(...e)),class:(0,s.C_)({input_error:i.v$.imgLink.$errors.length}),"onUpdate:modelValue":o[4]||(o[4]=e=>i.state.imgLink=e),type:"text",id:"imgLink",name:"imgLink",placeholder:"Введите ссылку"},null,34),[[r.nr,i.state.imgLink]]),i.v$.imgLink.$error?((0,n.wg)(),(0,n.iD)("span",{key:0,class:(0,s.C_)({error:i.v$.imgLink.$errors.length})},(0,s.zw)(i.v$.imgLink.$errors[0].$message),3)):(0,n.kq)("",!0)]),(0,n._)("p",y,[D,(0,n.wy)((0,n._)("input",{onFocusOnce:o[5]||(o[5]=(...e)=>c.startValidate&&c.startValidate(...e)),class:(0,s.C_)([{input_error:i.v$.price.$errors.length},"input"]),"onUpdate:modelValue":o[6]||(o[6]=e=>i.state.price=e),id:"price",name:"price",placeholder:"Введите цену"},null,34),[[r.nr,i.state.price]]),i.v$.price.$error?((0,n.wg)(),(0,n.iD)("span",{key:0,class:(0,s.C_)({error:i.v$.price.$errors.length})},(0,s.zw)(i.v$.price.$errors[0].$message),3)):(0,n.kq)("",!0)]),(0,n._)("button",{onClickOnce:o[7]||(o[7]=(...e)=>c.startValidate&&c.startValidate(...e)),onClick:o[8]||(o[8]=(...e)=>i.addGood&&i.addGood(...e)),class:(0,s.C_)([{correct:i.formIsCorrect},"form-good__add"]),type:"button"}," Добавить товар ",34)])],34)}var S=t(262),L=t(416),$=t(587),x=t(637),V={setup({closeMobileMenu:e}){let o=(0,S.iH)(!1);const t=()=>({name:"",descr:"",imgLink:"",price:""}),r=(0,x.oR)(),s=(0,S.iH)(t()),i=()=>()=>/(?=\w)([\w\/]+(?:.png|.jpg|.jpeg|.gif))|([.\~\-\:\w\/]+(?:.png|.jpg|.jpeg‌​|.gif))/.test(s.value.imgLink),a=(0,n.Fl)((()=>({name:{required:$.BM.withMessage("Поле является обязательным!",$.C1),minLength:$.BM.withMessage("Название должно быть более 2 символов!",(0,$.Ei)(2)),maxLength:$.BM.withMessage("Название должно быть не более 40 символов",(0,$.BS)(40))},imgLink:{required:$.BM.withMessage("Поле является обязательным!",$.C1),correctImgLink:$.BM.withMessage("Это не похоже на ссылку!",i(""))},price:{required:$.BM.withMessage("Поле является обязательным!",$.C1),numeric:$.BM.withMessage("Цена должна содержать только цифры!",$.uR),minLength:$.BM.withMessage("Цена должна быть более 2 символов!",(0,$.Ei)(2))}}))),c=(0,L.ZP)(a,s),l=()=>{s.value={...t()},c.value.$reset()},d=()=>{o.value&&(e(!1),r.dispatch("addProductToCart",s.value),r.dispatch("sortProducts"),l())};return(0,n.ic)((()=>{o.value=Boolean(!c.value.$errors.length)&&Object.values(s.value).every(((e,o)=>1===o||e))})),{state:s,formIsCorrect:o,v$:c,addGood:d}},props:["showMobileMenu","closeMobileMenu"],methods:{startValidate({target:{id:e}}){e?this.v$[e].$validate():this.v$.$validate()}}};const j=(0,f.Z)(V,[["render",B],["__scopeId","data-v-001199a6"]]);var G=j;function F(e,o,t,s,i,a){const c=(0,n.up)("GoodBlock");return(0,n.wg)(),(0,n.j4)(r.W3,{key:s.cartSize,tag:"ul",name:"list",class:"grid"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.products,((e,o)=>((0,n.wg)(),(0,n.j4)(c,{key:e.imgLink,mobileMenuIsActive:t.mobileMenuIsActive,goodIndex:o,goodName:e.name,goodImgLink:e.imgLink,goodDescr:e.descr,goodPrice:s.splitPrice(e.price)},null,8,["mobileMenuIsActive","goodIndex","goodName","goodImgLink","goodDescr","goodPrice"])))),128))])),_:1})}var O=t(727);const P={class:"good__img"},z={src:O,alt:""},T=["src","alt"],U={class:"good__info"},H={class:"good__title"},W={class:"good__descr"},R={class:"good__price"};function E(e,o,t,i,a,c){const l=(0,n.up)("GoodDelete"),d=(0,n.up)("GoodDeleteConfirm"),u=(0,n.up)("Fade");return(0,n.wg)(),(0,n.iD)("div",{onMouseenter:o[1]||(o[1]=(...e)=>c.onHoverBlock&&c.onHoverBlock(...e)),onMouseleave:o[2]||(o[2]=(...e)=>c.onHoverBlock&&c.onHoverBlock(...e)),class:"good"},[(0,n._)("div",P,[(0,n.wy)((0,n._)("img",z,null,512),[[r.F8,!a.imageSource]]),(0,n.wy)((0,n._)("img",{src:t.goodImgLink,onLoad:o[0]||(o[0]=(...e)=>c.load&&c.load(...e)),lazy:"",alt:t.goodName},null,40,T),[[r.F8,a.imageSource]])]),(0,n._)("div",U,[(0,n._)("h3",H,(0,s.zw)(t.goodName),1),(0,n._)("p",W,(0,s.zw)(t.goodDescr),1),(0,n._)("p",R,(0,s.zw)(t.goodPrice)+" руб.",1)]),(0,n.Wm)(l,{toogleConfirm:c.toogleComfirmMenu(),indexDelete:t.goodIndex,showDelete:c.deleteBtnIsVisible},null,8,["toogleConfirm","indexDelete","showDelete"]),(0,n.Wm)(d,{deleteIndex:t.goodIndex,closeConfirmMenu:c.toogleComfirmMenu(!1,!0),confirmMenuIsVisible:c.confirmIsVisible},null,8,["deleteIndex","closeConfirmMenu","confirmMenuIsVisible"]),(0,n.Wm)(u,{hideFade:c.hideConfirmMenu(),fadeIsVisible:c.confirmIsVisible},null,8,["hideFade","fadeIsVisible"])],32)}var Z=t(916);const N=e=>((0,n.dD)("data-v-4e691c7d"),e=e(),(0,n.Cn)(),e),q=N((()=>(0,n._)("img",{src:Z,alt:"Delete"},null,-1))),Y=[q];function Q(e,o,t,s,i,a){return(0,n.wg)(),(0,n.j4)(r.uT,{name:"fade"},{default:(0,n.w5)((()=>[t.showDelete?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:o[0]||(o[0]=(...e)=>t.toogleConfirm&&t.toogleConfirm(...e)),class:"delete",type:"button"},Y)):(0,n.kq)("",!0)])),_:1})}var X={name:"GoodDelete",props:["indexDelete","showDelete","toogleConfirm"]};const J=(0,f.Z)(X,[["render",Q],["__scopeId","data-v-4e691c7d"]]);var K=J;const ee={class:"confirm"},oe=(0,n._)("div",{class:"confirm-wrap"},[(0,n._)("header",{class:"confirm-header"},[(0,n._)("h3",{class:"confirm-header__title"}," Удаление товара ")])],-1),te=(0,n._)("div",{class:"confirm__text"},"Вы уверены, что хотите удалить товар?",-1),re={class:"confirm-btns"};function ne(e,o,t,s,i,a){return(0,n.wg)(),(0,n.j4)(r.uT,{name:"show-confirm"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("div",ee,[oe,te,(0,n._)("div",re,[(0,n._)("button",{onClick:o[0]||(o[0]=(...e)=>t.closeConfirmMenu&&t.closeConfirmMenu(...e)),class:"confirm-btns__abort"},"Отмена"),(0,n._)("button",{onClick:o[1]||(o[1]=e=>s.deleteGood(t.deleteIndex)),class:"confirm-btns__delete"},"Удалить")])],512),[[r.F8,t.confirmMenuIsVisible]])])),_:1})}var se={setup({closeConfirmMenu:e}){const o=(0,x.oR)(),t=t=>{console.log(t),o.dispatch("deleteProduct",t),e()};return{deleteGood:t}},name:"GoodDeleteConfirm",props:["confirmMenuIsVisible","closeConfirmMenu","deleteIndex"]};const ie=(0,f.Z)(se,[["render",ne]]);var ae=ie,ce={name:"GoodBlock",components:{GoodDelete:K,GoodDeleteConfirm:ae,Fade:v},data(){return{showDelete:!1,imgIsLoaded:!1,confirmDeleteIsActive:!1,imageSource:""}},computed:{confirmIsVisible(){return this.confirmDeleteIsActive&&!this.mobileMenuIsActive},isMobileMode(){return window.innerWidth<=680},deleteBtnIsVisible(){return!this.mobileMenuIsActive&&(this.isMobileMode&&!this.confirmDeleteIsActive||this.showDelete)}},created(){this.loadImage(this.goodImgLink)},props:{goodName:{},goodDescr:{},goodPrice:{},goodIndex:{},mobileMenuIsActive:{type:Boolean},goodImgLink:{type:String,default:null}},methods:{loadImage(e){const o=document.createElement("img");o.onload=()=>{this.imageSource=e},o.src=e},onHoverBlock(){this.confirmDeleteIsActive?this.showDelete=!1:this.showDelete=!this.showDelete},toogleComfirmMenu(e=!0,o=!1){return()=>{this.confirmDeleteIsActive=e,this.showDelete=o}},hideConfirmMenu(){return()=>{this.confirmDeleteIsActive=!1}},load(){this.imgIsLoaded=!0}}};const le=(0,f.Z)(ce,[["render",E],["__scopeId","data-v-3001065d"]]);var de=le,ue={props:["mobileMenuIsActive"],setup(){const e=(0,x.oR)(),o=(0,n.Fl)((()=>e.getters.cartProducts));(0,n.YP)((()=>e.getters.cartSize),((e,o)=>{console.log(o,e)}));const t=(0,n.Fl)((()=>e.getters.cartSize)),r=e=>String(e).split(/(?=(?:...)*$)/).join(" ");return(0,n.YP)((()=>e.getters.sortType),(()=>e.dispatch("sortProducts"))),{products:o,splitPrice:r,cartSize:t}},name:"GoodGrid",components:{GoodBlock:de}};const me=(0,f.Z)(ue,[["render",F],["__scopeId","data-v-7e000848"]]);var ge=me,pe=t(542);const fe=e=>((0,n.dD)("data-v-0af1d098"),e=e(),(0,n.Cn)(),e),he={class:"select-by"},ve=fe((()=>(0,n._)("option",{value:"name"},"По умолчанию",-1))),_e=fe((()=>(0,n._)("option",{value:"asc"},"Возрастание цены",-1))),we=fe((()=>(0,n._)("option",{value:"desc"},"Убывание цены",-1))),be=fe((()=>(0,n._)("option",{value:"shuffle"},"Перемешать",-1))),Me=[ve,_e,we,be],ke=fe((()=>(0,n._)("img",{class:"arrow",src:pe,alt:""},null,-1)));function Ae(e,o,t,s,i,a){return(0,n.wg)(),(0,n.iD)("div",he,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":o[0]||(o[0]=e=>i.sort=e),id:"choose",name:""},Me,512),[[r.bM,i.sort]]),ke])}var Ie={data(){return{sort:"name"}},name:"SelectBy",updated(){this.$store.commit("changeSortBy",this.sort)}};const Ce=(0,f.Z)(Ie,[["render",Ae],["__scopeId","data-v-0af1d098"]]);var ye=Ce;const De=e=>((0,n.dD)("data-v-6397054a"),e=e(),(0,n.Cn)(),e),Be={class:"open",type:"button"},Se=De((()=>(0,n._)("div",{class:"open__line"},null,-1))),Le=[Se];function $e(e,o,t,r,s,i){return(0,n.wg)(),(0,n.iD)("div",Be,Le)}var xe={name:"MobileMenu"};const Ve=(0,f.Z)(xe,[["render",$e],["__scopeId","data-v-6397054a"]]);var je=Ve,Ge={name:"App",components:{GoodGrid:ge,AddForm:G,SelectBy:ye,MobileMenu:je,Fade:v},data(){return{showMobileMenu:!1}},methods:{showMenu(e){const o=document.querySelector("body").classList;e?o.add("prevent-scroll"):o.remove("prevent-scroll"),this.showMobileMenu=e}},beforeCreate(){window.addEventListener("beforeunload",(()=>{const e=JSON.stringify(this.$store.state);localStorage.setItem("products",e)})),localStorage&&localStorage.products&&this.$store.dispatch("setLocalStorageState",JSON.parse(localStorage.products))}};const Fe=(0,f.Z)(Ge,[["render",m]]);var Oe=Fe;const Pe={addProductToCart({commit:e},o){e("pushProductToCart",o)},changeSortOrder({commit:e},o){e("changeSortBy",o)},deleteProduct({commit:e},o){e("deleteProductItem",o)},sortProducts({commit:e}){e("changeProductsOrder")},setLocalStorageState({commit:e},o){localStorage&&localStorage.products&&e("setLocalStorageState",o)}},ze={cartProducts:({items:e})=>e,sortType:({sortBy:e})=>e,cartSize:({items:{length:e}})=>e},Te=[{name:"Гусь Валера",descr:"Потрясающий Гусь Валера - душа компания. Отличный слушатель и собеседник, при понижении градуса ему даже не становится плохо! АлкоГусь - вот его второе имя!",imgLink:"https://cdn.pixabay.com/photo/2015/10/12/21/07/goose-985178_1280.jpg",price:"5000"},{name:"Собака Тузик",descr:"Потрясающая собака по кличе Тузик, которая защитит ваш дом от грабителей и мелких воришек. Надежность - вот ее второе имя!",imgLink:"https://s1.1zoom.ru/big7/52/Dogs_Retriever_Grass_391667.jpg",price:"1000"},{name:"Собака Жучка",descr:"Потрясающая собака по кличе Жучка, нежная и веселая, она непременно понравится вашим детям. Доброта - вот ее второе имя!",imgLink:"https://w-dog.ru/wallpapers/1/34/344104695685989/bigl-sobaka-drug-shhenok.jpg",price:"2000"},{name:"Кот Барсик",descr:"Потрясающий кот по кличе Барсик, ленивый и толстый, он непременно съест всю провизию в вашем доме. Обжора - вот ее второе имя!",imgLink:"https://funart.pro/uploads/posts/2021-07/thumbs/1626717141_21-funart-pro-p-kaliforniiskaya-siyayushchaya-koshka-zhivo-25.jpg",price:"3000"},{name:"Кошечка Полина",descr:"Потрясающая кошечка по кличе Полина, чуткая и ласковая, она встретит вас после работы, запрыгнет на живот, и будет тихо мурчать. Красавица - вот ее второе имя!",imgLink:"https://mobimg.b-cdn.net/v3/fetch/99/99e03e4337067ca6fb585121a55c66ea.jpeg",price:"4000"},{name:"Фотоаппарат Snapshot-787VGH",descr:"Потрясающий аппарат точно понравится вашим питомцам: Тузику, Жучке, Барсику и кошечке Полине!",imgLink:"https://www.yarkiy.ru/uploads/ckeditor/pictures/8525/content_1.jpg",price:"30000"}];var Ue=t(486),He=t.n(Ue);const We={changeProductsOrder(e){const o=He().shuffle(e.items);switch(e.sortBy){case"name":e.items=o.sort(((e,o)=>e.name.localeCompare(o.name)));break;case"asc":e.items=o.sort(((e,o)=>e.price-o.price));break;case"desc":e.items=o.sort(((e,o)=>o.price-e.price));break;case"shuffle":e.items=o;default:return}},setLocalStorageState(e,o){console.log("МУТИРУЕМ СТЕЙТ!"),Object.assign(e,o)},pushProductToCart(e,o){e.items.push({...o})},changeSortBy(e,o){e.sortBy=o},deleteProductItem(e,o){e.items.splice(o,1)}};var Re=(0,x.MT)({state:{items:[...Te],sortBy:"name"},actions:Pe,mutations:We,getters:ze});const Ee=(0,r.ri)(Oe);Ee.use(Re),Ee.mount("#app")},916:function(e,o,t){e.exports=t.p+"img/trash.6e147a4d.svg"},542:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABvSURBVHgBdU7LDYAgDKWGARjBEVzBMxeZQDfRFRzBCWpCOLuCI7gHBHyXJkrCuzTt6/soBTCzUQ1QCGHIOXNKaXTOPULgvpZSTGetvbEfWusLTr2QEC0xxp1E4b3fMGYiOqGcxJG+efJUx/1QF34B93g3r57lf1cAAAAASUVORK5CYII="},727:function(e,o,t){e.exports=t.p+"img/spin.f7a45e9f.gif"}},o={};function t(r){var n=o[r];if(void 0!==n)return n.exports;var s=o[r]={id:r,loaded:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}t.m=e,function(){var e=[];t.O=function(o,r,n,s){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],s=e[d][2];for(var a=!0,c=0;c<r.length;c++)(!1&s||i>=s)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,s<i&&(i=s));if(a){e.splice(d--,1);var l=n();void 0!==l&&(o=l)}}return o}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,n,s]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/IDAproject/"}(),function(){var e={143:0};t.O.j=function(o){return 0===e[o]};var o=function(o,r){var n,s,i=r[0],a=r[1],c=r[2],l=0;if(i.some((function(o){return 0!==e[o]}))){for(n in a)t.o(a,n)&&(t.m[n]=a[n]);if(c)var d=c(t)}for(o&&o(r);l<i.length;l++)s=i[l],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(d)},r=self["webpackChunkidaproject"]=self["webpackChunkidaproject"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(356)}));r=t.O(r)})();
//# sourceMappingURL=app.faa58b07.js.map