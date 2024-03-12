(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f=(s,t)=>`.${s} {
        filter: grayscale(${t}%);
        -webkit-filter: grayscale(${t}%);
        -moz-filter: grayscale(${t}%);
        -ms-filter: grayscale(${t}%);
        -o-filter: grayscale(${t}%);
        filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
        filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=.${t});
        -webkit-filter: grayscale(.${t})
    }
`,d=(s,t)=>{const o=document.createElement("style");o.innerHTML=f(s,t),document.head.append(o)},l=(s,t)=>{const o=document.querySelector(s);if(!o)throw new Error(`selector: "${s}" does not exist`);t(o)},m=(s="html",t=99,o={})=>{const{className:i="grays",expire:e,immediate:r=!0}=o;d(i,t);const c=()=>{l(s,n=>n.classList.add(i))},a=()=>{l(s,n=>n.classList.remove(i))};return r&&(!e||Date.now()<=e)&&c(),{apply:c,cancel:a}},{cancel:u,apply:y}=m("html",90);window.__cancel=u;window.__apply=y;
