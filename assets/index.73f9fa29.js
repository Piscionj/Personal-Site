import{j as r,a as e,C as k,r as O,S as R,P as z,W,O as H,T as v,M as u,b as p,c as m,d as P,A as B,F as E,N as A,e as _,f as c,g as S,h as q,i as G,R as D,k as K}from"./vendor.e1820656.js";const X=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function i(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerpolicy&&(t.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?t.credentials="include":n.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(n){if(n.ep)return;n.ep=!0;const t=i(n);fetch(n.href,t)}};X();const Z=()=>r("section",{id:"portfolio",children:[e("h1",{children:"Projects \u{1F4BB}"}),e(k,{interval:5e3,children:r(k.Item,{children:[e("div",{children:e("a",{href:"https://devpost.com/software/proteam-transportation-08",target:"_blank",children:e("img",{src:"commuteindy.jpg",alt:"First slide"})})}),r(k.Caption,{children:[e("h5",{children:"CommuteIndy"}),e("p",{children:'An Android app that organizes local transportation options into one convenient place, allowing users to easily create a "community" through public transportation.'})]})]})})]}),$=()=>(O.exports.useEffect(()=>{const a=new R,o=new z(75,window.innerWidth/window.innerHeight,.1,1e3),i=new W({canvas:document.querySelector("#bg")});i.setPixelRatio(window.devicePixelRatio),i.setSize(window.innerWidth*.75,window.innerHeight),i.render(a,o),o.position.setZ(20),o.position.setX(-3);const d=new H(o,i.domElement),n=new v,t=n.load("saturn.jpg"),s=n.load("react-logo.png"),C=n.load("html-logo.png"),M=n.load("css-logo.png"),N=new v().load("normal.jpg"),w=new u(new p(3,32,32),new m({map:t,normalMap:N})),f=new P,l=new P;w.add(f,l);const h=new u(new p(2,32,32),new m({map:s}));h.rotation.y=30,h.position.set(15,0,0);const g=new u(new p(2,32,32),new m({map:C}));g.position.set(-7,0,-10);const b=new u(new p(2,32,32),new m({map:M}));b.position.set(-5,3,9),a.add(w),f.add(h,g),l.add(b);const T=new B(16777215);a.add(T);const F=new v().load("background-gradient.jpg");a.background=F,window.addEventListener("resize",I,!1);function I(){o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),i.setSize(window.innerWidth*.75,window.innerHeight)}const x=[h,g,b];function L(){requestAnimationFrame(L),w.rotation.y+=.01,f.rotation.y+=.005,l.rotation.y+=.005,l.rotation.z+=.01;let j=x.length;for(;j--;){const y=x[j];y.rotation.x+=.01,y.rotation.y+=.005,y.rotation.z+=.01}d.update(),i.render(a,o)}L()}),e("canvas",{id:"bg"})),J=()=>r("section",{id:"about",children:[r("div",{children:[e("h1",{children:"Hey there \u{1F44B}"}),e("p",{children:"I'm Nick, a computer science and software engineering double major graduate from Rose-Hulman Institute of Technology "}),e("p",{children:"I have professional experience working fullstack on different web apps, but personally enjoy all things software."}),r("p",{children:["Contact me at npisciotta16@gmail.com or through my ",e("a",{href:"https://www.linkedin.com/in/nick-pisciotta-793609182/",target:"_blank",children:"Linkedin"})]})]}),e($,{})]});function Q(){return r(E,{children:[e(A,{bg:"dark",variant:"dark",sticky:"top",children:r(_,{children:[e(A.Brand,{href:"#about",children:"Nick Pisciotta"}),r(c,{className:"me-auto",children:[e(c.Link,{href:"#about",children:"About"}),e(c.Link,{href:"#portfolio",children:"Projects"}),r(c.Link,{href:"https://github.com/Piscionj",target:"_blank",children:[" ",e(S,{icon:q})]}),r(c.Link,{href:"https://www.linkedin.com/in/nick-pisciotta-793609182/",target:"_blank",children:[" ",e(S,{icon:G})]})]})]})}),e(J,{}),e(Z,{})]})}D.render(e(K.StrictMode,{children:e(Q,{})}),document.getElementById("root"));