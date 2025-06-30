import{a as w,S,i as a}from"./assets/vendor-DxEWe7lX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const M="50349808-906d80db7093834bea09f6975",q="https://pixabay.com/api/";async function u(r,t=1){return(await w.get(q,{params:{key:M,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}const m=document.querySelector(".gallery"),f=document.querySelector(".loader"),p=document.querySelector(".load-more"),B=new S(".gallery a");function h(r){const t=r.map(({webformatURL:n,largeImageURL:c,tags:e,likes:o,views:s,comments:v,downloads:b})=>`
    <li class="gallery-item">
      <a href="${c}">
        <img class="img" src="${n}" alt="${e}" />
      </a>
    <div class="info">
  <div class="info-item">
    <p class="label">Likes:</p>
    <p class="value">${o}</p>
  </div>
  <div class="info-item">
    <p class="label">Views:</p>
    <p class="value">${s}</p>
  </div>
  <div class="info-item">
    <p class="label">Comments:</p>
    <p class="value">${v}</p>
  </div>
  <div class="info-item">
    <p class="label">Downloads:</p>
    <p class="value">${b}</p>
  </div>
</div>
</li>
  `).join("");m.insertAdjacentHTML("beforeend",t),B.refresh()}function $(){m.innerHTML=""}function E(){f.classList.remove("is-hidden")}function P(){f.classList.add("is-hidden")}function y(){p.classList.remove("hidden")}function g(){p.classList.add("hidden")}const L=document.querySelector(".load-more-loader");function x(){L.classList.remove("is-hidden")}function O(){L.classList.add("is-hidden")}const H=document.querySelector(".form"),T=document.querySelector(".load-more");let l="",i=1,d=0;H.addEventListener("submit",A);T.addEventListener("click",N);async function A(r){if(r.preventDefault(),l=r.currentTarget.elements["search-text"].value.trim(),!l){a.warning({message:"Please enter a search query."});return}i=1,$(),g(),E();try{const t=await u(l,i);if(d=t.totalHits,t.hits.length===0){a.error({message:"No images found. Try again!"});return}h(t.hits),d>15&&y()}catch{a.error({message:"Error fetching data"})}finally{P()}}async function N(){i+=1,g(),x();try{const r=await u(l,i);h(r.hits),_();const t=Math.ceil(d/15);i>=t?a.info({message:"We're sorry, but you've reached the end of search results."}):y()}catch{a.error({message:"Error loading more images"})}finally{O()}}function _(){const{height:r}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
