(function(t){function e(e){for(var r,s,c=e[0],o=e[1],l=e[2],f=0,m=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(m.length)m.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==i[o]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"35cb":function(t,e,n){},"3fd9":function(t,e,n){"use strict";var r=n("35cb"),i=n.n(r);i.a},"437d":function(t,e,n){},"4e16":function(t,e,n){"use strict";var r=n("624a"),i=n.n(r);i.a},"4f0a":function(t,e,n){"use strict";var r=n("79bf"),i=n.n(r);i.a},"54fa":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=n("8c4f"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"site-wrapper"},[n("NavigationBar"),n("router-view",{staticClass:"site-content"}),n("Footer")],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"ui inverted pointing menu nav"},[n("router-link",{staticClass:"item",attrs:{to:"/",exact:""}},[t._v("\n    StreamerAlert\n  ")]),n("router-link",{staticClass:"item",attrs:{to:"/top-20"}},[t._v("\n    Top 20\n  ")]),t.isLoggedIn?n("div",{staticClass:"right menu"},[n("router-link",{staticClass:"ui item",attrs:{to:"/notifications"}},[t._v("Notifications")]),n("router-link",{staticClass:"ui item",attrs:{to:"/following"}},[t._v("Following")]),n("router-link",{staticClass:"ui item",attrs:{to:"/Account"}},[t._v("Account")]),n("a",{staticClass:"ui item",on:{click:t.logout}},[t._v("Logout")])],1):n("div",{staticClass:"right menu"},[n("a",{staticClass:"ui item",on:{click:t.login}},[t._v("\n        Login with Twitch\n      ")])])],1)},o=[],l=n("2f62"),u={name:"NavigationBar",methods:Object(l["b"])(["login","logout"]),computed:Object(l["c"])(["isLoggedIn"])},f=u,m=(n("59b6"),n("2877")),d=Object(m["a"])(f,c,o,!1,null,"b0b82b74",null),p=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[t._m(0),n("div",{staticClass:"footer-copyright"},[n("small",[t._v("© "+t._s(t.currentYear)+". StreamerAlert")])])])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui two column grid container footer-content"},[n("div",{staticClass:"column"},[n("h5",[t._v("Streamer Alert")]),n("p",[t._v("\n        Brings you a better way to manage your Twitch experience. An easy to use\n        ui customized for "),n("b",[t._v("You")]),t._v(", will get into the games you want faster with\n        less of a hassle.\n      ")])]),n("div",{staticClass:"column"},[n("h5",[t._v("Navigation")]),n("div",{staticClass:"ui list"},[n("div",{staticClass:"item"},[n("i",{staticClass:"users icon"}),n("div",{staticClass:"content"},[t._v("\n            Following\n          ")])]),n("div",{staticClass:"item"},[n("i",{staticClass:"marker icon"}),n("div",{staticClass:"content"},[t._v("\n            The Top 20\n          ")])]),n("div",{staticClass:"item"},[n("i",{staticClass:"settings icon"}),n("div",{staticClass:"content"},[t._v("\n            Account Settings\n          ")])]),n("div",{staticClass:"item"},[n("i",{staticClass:"info icon"}),n("div",{staticClass:"content"},[t._v("\n            Notifications\n          ")])])])])])}],g={name:"Footer",computed:{currentYear:function(){return(new Date).getFullYear()}}},_=g,b=(n("9c19"),Object(m["a"])(_,v,h,!1,null,"2be03001",null)),O=b.exports,w={name:"app",components:{NavigationBar:p,Footer:O}},y=w,S=(n("fd55"),Object(m["a"])(y,a,s,!1,null,"4423229d",null)),E=S.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui items"},[n("div",{staticClass:"item"},[n("i",{staticClass:"sync icon huge"}),n("h3",{staticClass:"ui heading"},[t._v("Authenticating Please Wait...")])])])}],P={name:"AuthHandler",methods:Object(l["b"])(["finalizeLogin"]),created:function(){this.finalizeLogin(window.location.hash)}},x=P,T=(n("ade7"),Object(m["a"])(x,C,j,!1,null,"6679a6f6",null)),k=T.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NowPlaying"),n("BoxArtScroller",{attrs:{title:"The Games of the Top 20"}}),t.streamers?n("StreamerList",{attrs:{streamers:t.streamers}}):t._e()],1)},D=[],I=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),R=n("bc3a"),A=n.n(R),U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.games?n("div",{staticClass:"box-art-scroller"},[n("div",{staticClass:"ui text container center aligned box-art__text-container"},[n("h3",{staticClass:"box-art__title text-slim"},[t._v(t._s(t.title))])]),n("div",{staticClass:"box-art__scroller"},t._l(t.games,function(e){return n("div",[n("img",{staticClass:"box-art",attrs:{src:t.boxartThumbnailUrl(e),alt:""}})])}),0)]):t._e()},V=[];n("a481");function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(n,!0).forEach(function(e){Object(I["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var $={name:"BoxArtScroller",props:["title"],methods:{boxartThumbnailUrl:function(t){if(t)return t.box_art_url.replace(/{width}/,188).replace(/{height}/,250)}},computed:N({},Object(l["c"])({games:"allGames"}))},G=$,M=(n("f68d"),Object(m["a"])(G,U,V,!1,null,"31d0e042",null)),z=M.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.streamer?n("div",{staticClass:"bg-blue-purple-gradient",attrs:{id:"nowPlaying"}},[n("div",{staticClass:"ui container two column stackable grid"},[n("div",{staticClass:"column"},[n("div",{staticClass:"video-preview"},[n("img",{staticClass:"ui fluid image",attrs:{src:t.streamThumbnailUrl}})])]),n("div",{staticClass:"column ui grid"},[n("div",{staticClass:"ten wide column"},[n("h3",{staticClass:"video-details__title"},[t._v(t._s(t.streamer.user_name))]),n("p",{staticClass:"video-details__text"},[t._v(t._s(t.streamer.title))]),n("p",[t._v("Current Viewers: "+t._s(t.streamer.viewer_count))])]),n("div",{staticClass:"six wide column"},[t.game?n("div",{staticClass:"game-details"},[n("img",{staticClass:"game__box-art ui fluid image",attrs:{src:t.boxartThumbnailUrl,alt:t.game.name}})]):t._e()]),n("button",{staticClass:"ui primary button video-details__btn",attrs:{href:"#"}},[t._v("Watch Stream")])])])]):t._e()},K=[];function W(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?W(n,!0).forEach(function(e){Object(I["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):W(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var Y={name:"NowPlaying",computed:J({},Object(l["c"])({streamer:"selectedStreamer",game:"selectedGame"}),{boxartThumbnailUrl:function(){if(this.game&&this.game.box_art_url)return this.game.box_art_url.replace(/{width}/,188).replace(/{height}/,250)},streamThumbnailUrl:function(){if(this.streamer&&this.streamer.thumbnail_url)return this.streamer.thumbnail_url.replace(/{width}/,512).replace(/{height}/,288)}}),methods:J({},Object(l["b"])(["fetchGame"])),watch:{streamer:function(t,e){null!==t&&this.fetchGame()}}},q=Y,H=(n("d903"),Object(m["a"])(q,B,K,!1,null,"2549a9c6",null)),Q=H.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"streamer-container"},[t.streamerList?n("div",{staticClass:"ui grid centered stackable streamer-list"},t._l(t.streamerList,function(e){return n("StreamerListItem",{key:e.id,attrs:{streamer:e,type:t.type}})}),1):t._e(),n("Pagination",{attrs:{items:t.streamers},on:{paginate:t.onPaginate}})],1)},Z=[],tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"eight wide tablet five wide computer column"},[t.typeIsLive?n("div",{staticClass:"streamer-card",on:{click:t.onClick}},[n("img",{staticClass:"ui fluid image",attrs:{src:t.thumbnailUrl,alt:""}}),n("h5",{staticClass:"streamer-title"},[t._v(t._s(this.streamer.title))])]):t.typeIsOffline?n("div",{staticClass:"streamer-card",on:{click:t.onClick}},[n("img",{staticClass:"ui fluid image",attrs:{src:this.streamer.offline_image_url,alt:""}}),n("h5",{staticClass:"streamer-title"},[t._v(t._s(this.streamer.display_name))])]):t._e()])},et=[];function nt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function rt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?nt(n,!0).forEach(function(e){Object(I["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):nt(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var it={name:"StreamerListItem",props:{streamer:{type:Object,default:"Live"},type:String},computed:{thumbnailUrl:function(){return this.streamer.thumbnail_url.replace(/{width}/,740).replace(/{height}/,416)},typeIsLive:function(){return"Live"===this.type},typeIsOffline:function(){return"Offline"===this.type}},methods:rt({},Object(l["b"])(["setStreamer"]),{onClick:function(){this.setStreamer(this.streamer)}})},at=it,st=(n("d485"),Object(m["a"])(at,tt,et,!1,null,"153c97fe",null)),ct=st.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui container",attrs:{id:"pagination"}},[n("div",{staticClass:"ui inverted centered pagination menu"},t._l(t.pageCount,function(e){return n("a",{key:e,staticClass:"pagination__item item",class:{active:t.isActive(e)},on:{click:function(n){t.onUpdatePage(parseInt(e))}}},[t._v(t._s(e))])}),0)])},lt=[],ut={name:"Pagination",data:function(){return{currentPage:1,itemsPerPage:6}},props:{items:{type:Array,required:!0}},computed:{pageCount:function(){return Math.ceil(this.items.length/this.itemsPerPage)}},methods:{onUpdatePage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.currentPage=t;var e=(t-1)*this.itemsPerPage,n=e+this.itemsPerPage,r=this.items.slice(e,n);return this.$emit("paginate",r)},isActive:function(t){return this.currentPage==t}},watch:{items:function(t,e){t!==e&&this.onUpdatePage()}},mounted:function(){this.onUpdatePage()}},ft=ut,mt=(n("3fd9"),Object(m["a"])(ft,ot,lt,!1,null,"3a081c3a",null)),dt=mt.exports,pt={name:"StreamerList",data:function(){return{streamerList:[]}},props:{streamers:Array,type:{type:String,default:"Live"}},methods:{onPaginate:function(t){return this.streamerList=t}},components:{StreamerListItem:ct,Pagination:dt}},vt=pt,ht=(n("4f0a"),Object(m["a"])(vt,X,Z,!1,null,"fd0ad81a",null)),gt=ht.exports;function _t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function bt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_t(n,!0).forEach(function(e){Object(I["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_t(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var Ot={name:"TopTwenty",components:{NowPlaying:Q,BoxArtScroller:z,StreamerList:gt},methods:bt({},Object(l["b"])(["setStreamer","fetchTop20","fetchGames"])),computed:bt({},Object(l["c"])({streamers:"allStreamers"})),created:function(){this.fetchTop20()},watch:{streamers:function(t,e){var n=t[Math.floor(Math.random()*t.length)];this.setStreamer(n),this.fetchGames()}}},wt=Ot,yt=Object(m["a"])(wt,L,D,!1,null,"011d1b88",null),St=yt.exports,Et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ct=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui inverted center aligned segment notifications"},[n("div",{staticClass:"ui text"},[n("h2",{staticClass:"ui inverted text-slim notification__title"},[t._v("\n      Notifications\n    ")]),n("p",[t._v("Comming Soon…")])])])}],jt={name:"Notifications"},Pt=jt,xt=(n("61cc"),Object(m["a"])(Pt,Et,Ct,!1,null,"402e01de",null)),Tt=xt.exports,kt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Lt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui inverted center aligned segment account"},[n("div",{staticClass:"ui text"},[n("h2",{staticClass:"ui inverted text-slim account__title"},[t._v("\n      Manage Account\n    ")]),n("p",[t._v("Comming Soon…")])])])}],Dt={name:"Account"},It=Dt,Rt=(n("4e16"),Object(m["a"])(It,kt,Lt,!1,null,"28eaf498",null)),At=Rt.exports,Ut=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Vt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"masthead ui inverted vertical masthead center aligned segment"},[n("div",{staticClass:"ui text container"},[n("h1",{staticClass:"ui inverted masthead"},[t._v("\n      Welcome To StreamerAlert\n    ")])])])}],Ft={},Nt=Ft,$t=Object(m["a"])(Nt,Ut,Vt,!1,null,"d13f953e",null),Gt=$t.exports,Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui inverted center aligned segment following"},[n("SideBar"),t._m(0),n("div",{staticClass:"ui item menu inverted following__menu",class:t.menuKlasses},t._l(t.menuItems,function(e){return n("a",{key:e,staticClass:"item menu__item",class:{active:t.isActive(e)},on:{click:function(e){return t.onSelect(e)}}},[t._v(t._s(e)+"\n    ")])}),0),"Live"===t.menuSelection?n("StreamerList",{attrs:{streamers:t.liveFollowers,type:t.menuSelection}}):"Offline"===t.menuSelection?n("StreamerList",{attrs:{streamers:t.offlineFollowers,type:t.menuSelection}}):"Recent VODS"===t.menuSelection?n("VideoList",{attrs:{videos:t.videos}}):t._e()],1)},zt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui text"},[n("h2",{staticClass:"ui inverted text-slim following__title"},[t._v("\n      Following\n    ")])])}],Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video-list__container"},[n("h4",[t._v("VideoList")]),t.videoList?n("div",{staticClass:"ui grid centered stackable video-list"},t._l(t.videoList,function(t){return n("VideoListItem",{key:t.id,attrs:{video:t}})}),1):t._e(),n("Pagination",{attrs:{items:t.videos},on:{paginate:t.onPaginate}})],1)},Kt=[],Wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"eight wide tablet five wide computer column"},[n("div",{staticClass:"video-card",on:{click:t.onClick}},[n("img",{staticClass:"ui fluid image",attrs:{src:t.thumbnailUrl,alt:""}}),n("h5",{staticClass:"video-title"},[t._v(t._s(this.video.title))])])])},Jt=[];function Yt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function qt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Yt(n,!0).forEach(function(e){Object(I["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Yt(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var Ht={name:"VideoListItem",props:{video:{type:Object}},computed:{thumbnailUrl:function(){var t=this.video.thumbnail_url;return""===t?this.selectedStreamer().thumbnail_url.replace(/{width}/,740).replace(/{height}/,416):t.replace(/%{width}/,740).replace(/%{height}/,416)}},methods:qt({},Object(l["c"])({selectedStreamer:"selectedStreamer"}),{},Object(l["b"])(["setVideo"]),{onClick:function(){this.setVideo(this.video)}})},Qt=Ht,Xt=(n("f341"),Object(m["a"])(Qt,Wt,Jt,!1,null,"00475a36",null)),Zt=Xt.exports,te={name:"VideoList",data:function(){return{videoList:[]}},props:{videos:Array},methods:{onPaginate:function(t){return this.videoList=t}},components:{VideoListItem:Zt,Pagination:dt}},ee=te,ne=Object(m["a"])(ee,Bt,Kt,!1,null,"97a16540",null),re=ne.exports,ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},ae=[],se={name:"SideBar"},ce=se,oe=Object(m["a"])(ce,ie,ae,!1,null,"dd7395f6",null),le=oe.exports;function ue(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function fe(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ue(n,!0).forEach(function(e){Object(I["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ue(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var me={name:"Followers",data:function(){return{menuItems:["Live","Offline","Recent VODS"],menuKlasses:["four"],menuSelection:"Live"}},components:{StreamerList:gt,VideoList:re,SideBar:le},computed:fe({},Object(l["c"])({liveFollowers:"getFollowers",offlineFollowers:"getOffline",videos:"getVideos"})),methods:fe({},Object(l["b"])(["fetchFollowed"]),{isActive:function(t){return t===this.menuSelection},onSelect:function(t){var e=t.target;this.menuSelection=e.innerText}}),created:function(){this.fetchFollowed()}},de=me,pe=(n("d60a"),Object(m["a"])(de,Mt,zt,!1,null,"c229317a",null)),ve=pe.exports,he=(n("96cf"),n("3b8d")),ge=n("4328"),_e=n.n(ge),be="zx45ozwcg1f795opjpsr0bf6pi1luy",Oe=(Object({NODE_ENV:"production",VUE_APP_SECRET:"w9lkelbkn9zm6lsuiqd9l99mvovl6x",VUE_APP_CLIENT_ID:"zx45ozwcg1f795opjpsr0bf6pi1luy",BASE_URL:"/"}).VUE_APP_CLIENT_SECRET,"https://id.twitch.tv"),we="https://api.twitch.tv/helix",ye="http://localhost:8080/oauth2/callback",Se="token",Ee="user:read:broadcast",Ce={login:function(){var t={client_id:be,redirect_uri:ye,response_type:Se,scope:Ee};window.location="".concat(Oe,"/oauth2/authorize?").concat(_e.a.stringify(t))},validate:function(t){return A.a.get("".concat(Oe,"/oauth2/validate"),{headers:{Authorization:"OAuth "+t}})},fetchGame:function(t){var e={id:t};return A.a.get("".concat(we,"/games?").concat(_e.a.stringify(e)),{headers:{"Client-ID":be}})},fetchGames:function(t){var e={id:t};return A.a.get("".concat(we,"/games?").concat(_e.a.stringify(e)),{headers:{"Client-ID":be}})},fetchStreamers:function(t){var e={user_id:t};return A.a.get("".concat(we,"/streams?").concat(_e.a.stringify(e)),{headers:{"Client-ID":be}})},fetchTop20Streamers:function(){var t={first:20};return A.a.get("".concat(we,"/streams?").concat(_e.a.stringify(t)),{headers:{"Client-ID":be}})},fetchUsers:function(t){var e={id:t};return A.a.get("".concat(we,"/users?").concat(_e.a.stringify(e)),{headers:{"Client-ID":be}})},fetchFollowed:function(t){var e={from_id:t};return A.a.get("".concat(we,"/users/follows?").concat(_e.a.stringify(e)),{headers:{"Client-ID":be}})},fetchVideos:function(t){var e={user_id:t};return A.a.get("".concat(we,"/videos?").concat(_e.a.stringify(e)),{headers:{"Client-ID":be}})}},je={token:window.localStorage.getItem("twitch_token"),currentUser:JSON.parse(window.localStorage.getItem("twitch_user"))},Pe={isLoggedIn:function(t){return!!t.token},getCurrentUser:function(t){return t.currentUser}},xe={login:function(t){t.commit;Ce.login()},validateUser:function(){var t=Object(he["a"])(regeneratorRuntime.mark(function t(e){var n,r,i,a,s,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.dispatch,i=e.state,a=i.token,t.next=4,Ce.validate(a);case 4:s=t.sent,c=JSON.stringify(s.data),n("SET_CURRENT_USER",s.data),window.localStorage.setItem("twitch_user",c),r("fetchFollowed",{root:!0});case 9:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),finalizeLogin:function(t,e){var n=t.commit,r=t.dispatch,i=_e.a.parse(e.replace("#",""));n("SET_TOKEN",i.access_token),r("validateUser",{root:!0}),window.localStorage.setItem("twitch_token",i.access_token),setTimeout(function(){Me.push("/")},3e3)},logout:function(t){var e=t.commit;e("SET_TOKEN",null),e("SET_CURRENT_USER",null),window.localStorage.removeItem("twitch_token"),window.localStorage.removeItem("twitch_user")}},Te={SET_TOKEN:function(t,e){t.token=e},SET_CURRENT_USER:function(t,e){t.currentUser=e}},ke={state:je,getters:Pe,actions:xe,mutations:Te},Le=(n("7514"),{selectedGame:null,games:[]}),De={selectedGame:function(t){return t.selectedGame},allGames:function(t){return t.games}},Ie={fetchGames:function(){var t=Object(he["a"])(regeneratorRuntime.mark(function t(e,n){var r,i,a,s,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.rootState,i=e.commit,a=r.streamer.streamers,!(a.length>0)){t.next=8;break}return s=a.map(function(t){return t.game_id}),t.next=6,Ce.fetchGames(s);case 6:c=t.sent,i("SET_GAMES",c.data.data);case 8:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),fetchGame:function(){var t=Object(he["a"])(regeneratorRuntime.mark(function t(e){var n,r,i,a,s,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.rootState,r=e.commit,i=e.state,c=n.streamer.selectedStreamer.game_id,i.games.length>0&&(a=i.games.find(function(t){return t.id===c})),void 0!==a){t.next=8;break}return t.next=6,Ce.fetchGame(c);case 6:s=t.sent,a=s.data.data[0];case 8:r("SET_SELECTED_GAME",a);case 9:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},Re={SET_SELECTED_GAME:function(t,e){t.selectedGame=e},SET_GAMES:function(t,e){t.games=e}},Ae={state:Le,getters:De,actions:Ie,mutations:Re},Ue=(n("6762"),n("2fdb"),{selectedStreamer:{},selectedVideo:{},streamers:[],followers:[],offline:[],videos:[]}),Ve={selectedStreamer:function(t){return t.selectedStreamer},selectedVideo:function(t){return t.selectedVideo},allStreamers:function(t){return t.streamers},getFollowers:function(t){return t.followers},getOffline:function(t){return t.offline},getVideos:function(t){return t.videos}},Fe={setStreamer:function(t,e){var n=t.commit,r=t.dispatch;n("SET_SELECTED_STREAMER",e),r({type:"fetchVideos",payload:{streamer:e}})},setVideo:function(t,e){var n=t.commit;n("SET_SELECTED_VIDEO",e)},fetchTop20:function(){var t=Object(he["a"])(regeneratorRuntime.mark(function t(e){var n,r,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.dispatch,t.next=3,Ce.fetchTop20Streamers();case 3:i=t.sent,n("SET_STREAMERS",i.data.data),r("fetchGames",{root:!0});case 6:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),fetchFollowed:function(){var t=Object(he["a"])(regeneratorRuntime.mark(function t(e){var n,r,i,a,s,c,o,l;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.rootState,r=e.commit,i=e.dispatch,a=n.auth.currentUser.user_id,t.next=4,Ce.fetchFollowed(a);case 4:return s=t.sent,c=s.data.data.map(function(t){return t.to_id}),t.next=8,Ce.fetchStreamers(c);case 8:o=t.sent,l=o.data.data.map(function(t){return t["user_id"]}),i({type:"fetchOffline",payload:{allIds:c,liveIds:l}}),r("SET_FOLLOWERS",o.data.data);case 12:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),fetchOffline:function(){var t=Object(he["a"])(regeneratorRuntime.mark(function t(e,n){var r,i,a,s,c,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,i=n.payload,a=i.allIds,s=i.liveIds,c=a.filter(function(t){return!s.includes(t)}),t.next=6,Ce.fetchUsers(c);case 6:o=t.sent,r("SET_OFFLINE",o.data.data);case 8:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),fetchVideos:function(){var t=Object(he["a"])(regeneratorRuntime.mark(function t(e,n){var r,i,a,s,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,e.rootState,i=n.payload,a=i.streamer,s=a.user_id?a.user_id:a.id,t.next=6,Ce.fetchVideos(s);case 6:c=t.sent,r("SET_VIDEOS",c.data.data);case 8:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}()},Ne={SET_FOLLOWERS:function(t,e){t.followers=e},SET_SELECTED_STREAMER:function(t,e){t.selectedStreamer=e},SET_SELECTED_VIDEO:function(t,e){t.selectedVideo=e},SET_STREAMERS:function(t,e){t.streamers=e},SET_OFFLINE:function(t,e){t.offline=e},SET_VIDEOS:function(t,e){t.videos=e}},$e={state:Ue,getters:Ve,actions:Fe,mutations:Ne};r["a"].use(l["a"]);var Ge=new l["a"].Store({modules:{auth:ke,game:Ae,streamer:$e}});n("a589");n.d(e,"router",function(){return Me}),r["a"].config.productionTip=!1,r["a"].config.devtools=!1,r["a"].use(i["a"]);var Me=new i["a"]({mode:"history",routes:[{path:"/oauth2/callback",component:k},{path:"/",component:Gt},{path:"/top-20",component:St},{path:"/notifications",component:Tt},{path:"/account",component:At},{path:"/following",component:ve}],linkActiveClass:"active"});new r["a"]({router:Me,store:Ge,render:function(t){return t(E)}}).$mount("#app")},"59b6":function(t,e,n){"use strict";var r=n("a548"),i=n.n(r);i.a},"5d88":function(t,e,n){},"5dd8":function(t,e,n){},"61cc":function(t,e,n){"use strict";var r=n("6ed2"),i=n.n(r);i.a},"624a":function(t,e,n){},"6ed2":function(t,e,n){},"71ec":function(t,e,n){},"79bf":function(t,e,n){},"8e70":function(t,e,n){},"9c19":function(t,e,n){"use strict";var r=n("ca0d"),i=n.n(r);i.a},a548:function(t,e,n){},a589:function(t,e,n){},ade7:function(t,e,n){"use strict";var r=n("437d"),i=n.n(r);i.a},ca0d:function(t,e,n){},d485:function(t,e,n){"use strict";var r=n("8e70"),i=n.n(r);i.a},d60a:function(t,e,n){"use strict";var r=n("71ec"),i=n.n(r);i.a},d903:function(t,e,n){"use strict";var r=n("5dd8"),i=n.n(r);i.a},e92f:function(t,e,n){},f341:function(t,e,n){"use strict";var r=n("e92f"),i=n.n(r);i.a},f68d:function(t,e,n){"use strict";var r=n("54fa"),i=n.n(r);i.a},fd55:function(t,e,n){"use strict";var r=n("5d88"),i=n.n(r);i.a}});
//# sourceMappingURL=app.06f744e9.js.map