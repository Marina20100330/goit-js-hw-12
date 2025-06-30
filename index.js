import{a as w,S as M,i as s}from"./assets/vendor-DxEWe7lX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const P="50349808-906d80db7093834bea09f6975",B="https://pixabay.com/api/";async function f(r,t=1){return(await w.get(B,{params:{key:P,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}const y=document.querySelector(".gallery"),h=document.querySelector(".loader"),p=document.querySelector(".load-more"),$=new M(".gallery a");function g(r){const t=r.map(({webformatURL:n,largeImageURL:l,tags:e,likes:o,views:i,comments:S,downloads:q})=>`
    <li class="gallery-item">
      <a href="${l}">
        <img class="img" src="${n}" alt="${e}" />
      </a>
    <div class="info">
  <div class="info-item">
    <p class="label">Likes:</p>
    <p class="value">${o}</p>
  </div>
  <div class="info-item">
    <p class="label">Views:</p>
    <p class="value">${i}</p>
  </div>
  <div class="info-item">
    <p class="label">Comments:</p>
    <p class="value">${S}</p>
  </div>
  <div class="info-item">
    <p class="label">Downloads:</p>
    <p class="value">${q}</p>
  </div>
</div>
</li>
  `).join("");y.insertAdjacentHTML("beforeend",t),$.refresh()}function E(){y.innerHTML=""}function v(){h.classList.remove("is-hidden")}function L(){h.classList.add("is-hidden")}function u(){p.classList.remove("hidden")}function m(){p.classList.add("hidden")}document.querySelector(".load-more-loader");const b=document.querySelector(".form"),x=document.querySelector(".load-more");let c="",a=1,d=0;b.addEventListener("submit",O);x.addEventListener("click",H);async function O(r){if(r.preventDefault(),c=r.currentTarget.elements["search-text"].value.trim(),!c){s.warning({message:"Please enter a search query."});return}a=1,E(),m(),v();try{const t=await f(c,a);if(d=t.totalHits,t.hits.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(t.hits),d<=15?s.info({message:"We're sorry, but you've reached the end of search results."}):u()}catch{s.error({message:"Error fetching data. Please try again later."})}finally{L(),b.reset()}}async function H(){a+=1,m(),v();try{const r=await f(c,a);g(r.hits),A();const t=Math.ceil(d/15);a>=t?(s.info({message:"We're sorry, but you've reached the end of search results."}),m()):u()}catch{s.error({message:"Error loading more images. Please try again later."}),a<Math.ceil(d/15)&&u()}finally{L()}}function A(){const r=document.querySelector(".gallery-item");if(r){const{height:t}=r.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
