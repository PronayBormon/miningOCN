!function(){"use strict";var e,t={5686:function(e,t,n){var o=n(1236),i=n(9636);function r(){const e=16/9;let t=.7*window.innerWidth,n=t/e;n<200&&(n=200,t=n*e);const o=.8*window.innerHeight;return n>o&&(n=o,t=n*e),{width:t,height:n}}function s(e){document.querySelector(`.youtube-popup_${e}`).classList.toggle("show"),document.documentElement.classList.toggle("overflow-hidden"),document.body.classList.toggle("overflow-hidden")}function a(e,t){let n;function o(){n=new YT.Player(`playerYoutubeEmbed_${t}`,{height:r().height,width:r().width,videoId:e,modestbranding:1,playerVars:{controls:1},events:{onReady:i}})}function i(e){s(t),e.target.playVideo(),window.addEventListener("resize",(()=>{e.target.g.width=r().width,e.target.g.height=r().height}))}!function(){if(![...document.querySelectorAll("script")].some((e=>"https://www.youtube.com/iframe_api"===e.src))){const e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";const t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}}(),document.querySelectorAll(`.js-youtube-popup-close_${t}, .youtube-popup__overlay_${t}`).forEach((e=>{e.addEventListener("click",(()=>function(e){n&&(n.stopVideo(),s(e))}(t)))}));document.querySelectorAll(`.js-youtube-video-popup_${t}`).forEach((e=>{e.addEventListener("click",(()=>function(e){n?(s(e),n.playVideo()):o()}(t)))}))}(()=>{const e={init:()=>{e.sliders(),"zh"===document.documentElement.lang?e.videoWistia():a("pgvz1qxcMy4",1)}};e.sliders=()=>{const e={modules:[i.Ij],autoplay:{delay:0,disableOnInteraction:!1},slidesPerView:"auto",speed:2800,loop:!0,allowTouchMove:!1};new o.A(".swiper-companies",e);const t={modules:[i.Ij],speed:4e3,slidesPerView:"auto",allowTouchMove:!1,spaceBetween:0,autoplay:{delay:0,disableOnInteraction:!1},loop:!0};new o.A(".integration-box__logos-1",t),new o.A(".integration-box__logos-2",{...t,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:!0}});const n={modules:[i.dK,i._R],slidesPerView:1,speed:300,allowTouchMove:!1,effect:"fade",pagination:{el:".swiper-extensions__pagination",clickable:!0,hideOnClick:!1,renderBullet:(e,t)=>{let n=document.querySelector(`.swiper-extensions .swiper-slide:nth-child(${e+1})`);return n=`<div class="${t}">${n.dataset.pagination}</div>`,n}},on:{beforeTransitionStart:e=>{let t=e.slides[e.activeIndex],n=document.querySelector(".extensions__raiting");document.querySelector(".extensions__text").innerText=t.dataset.text,document.querySelector(".extensions__middle-area .btn-main span").innerText=t.dataset.btn,document.querySelector(".extensions__middle-area .btn-main").setAttribute("href",t.dataset.btnUrl),t.hasAttribute("data-r1")?n.innerHTML=`<b>${t.dataset.r1} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="none" viewBox="0 0 16 15"><path fill="#2E2151" d="m8 0 2.116 5.088 5.492.44-4.184 3.584 1.278 5.36L8 11.6l-4.702 2.872 1.278-5.36L.392 5.528l5.492-.44L8 0Z"/></svg></b><span>${t.dataset.r2}</span>`:n.innerHTML=""}}};new o.A(".swiper-extensions",n);let r=!1,s=0,a=document.querySelector(".swiper-extensions__pagination");function c(){r=!1,a.scrollLeft=s}a.addEventListener("scroll",(function(e){s=e.currentTarget.scrollLeft,function(){r||window.requestAnimationFrame(c);r=!0}()}),!1),document.querySelector(".swiper-extensions__pagination-scroll-btn").addEventListener("click",(function(){let e=a.scrollLeft;!function(e,t,n){const o=()=>{t+=.1*(n-t),e.scrollLeft=t,Math.abs(n-t)>1?window.requestAnimationFrame(o):(e.scrollLeft=n,r=!1)};r||(r=!0,window.requestAnimationFrame(o))}(a,e,e+100)}))},e.videoWistia=()=>{const e=document.querySelector("#watchDemo"),t=document.querySelector("#watchDemo video");!function(e,t,n=null){e.addEventListener("click",(function(){const e=Wistia.api(t),o=document.querySelector("#popover_preview_embed_popover_popover_close_button");n&&n instanceof HTMLVideoElement&&n.pause(),e?.play(),o.classList.add("active"),e.bind("popoverhide",(()=>{o.classList.remove("active"),n&&n instanceof HTMLVideoElement&&n.play()}))}))}(e,"zh"===document.documentElement.lang?"1ft7syglwi":"t2zsetbmsu",t)},document.addEventListener("DOMContentLoaded",(()=>e.init()))})()}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=function(t,n,i,r){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],r=e[d][2];for(var a=!0,c=0;c<n.length;c++)(!1&r||s>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(a=!1,r<s&&(s=r));if(a){e.splice(d--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,i,r]},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.j=3057,function(){var e={3057:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,r,s=n[0],a=n[1],c=n[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(c)var d=c(o)}for(t&&t(n);l<s.length;l++)r=s[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},n=self.webpackChunkclientlanding=self.webpackChunkclientlanding||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var i=o.O(void 0,[4786],(function(){return o(5686)}));i=o.O(i)}();


