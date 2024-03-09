import{a as y,i as u,S as m}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();function p({webformatURL:r,largeImageURL:e,tags:s,likes:i,views:t,comments:o,downloads:a}){return`
    <li class="card">
      <a href="${e}" data-caption="${s}">
        <img class="card-image" src="${r}" alt="${s}" title="${s}"/>
        <ul class="discription-list">
          <li>
            <h3 class="disc-name">Likes</h3>
            <p class="disc-value">${i}</p>
          </li>
          <li>
            <h3 class="disc-name">Views</h3>
            <p class="disc-value">${t}</p>
          </li>
          <li>
            <h3 class="disc-name">Comments</h3>
            <p class="disc-value">${o}</p>
          </li>
          <li>
            <h3 class="disc-name">Downloads</h3>
            <p class="disc-value">${a}</p>
          </li>
        </ul>
      </a>
    </li>`}async function g(r,e,s){const i=r.split(" ").join("+"),t=y.create({baseURL:"https://pixabay.com/api/",params:{q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:e,page:s,key:"42649910-6a5238a097d86367028b0f975"}});try{const o=await t.get();if(o.status!==200)throw new Error(`${o.status}`);return o.data.hits}catch(o){throw new Error(`Failed to fetch data: ${o.message}`)}}const d=document.querySelector("form");let n;const f=document.querySelector("ul#image-list"),h=document.querySelector(".loader");window.getButtonMore=document.querySelector(".button-more");const c=15;let l=1;d.addEventListener("submit",r=>{r.preventDefault(),n=r.currentTarget.querySelector("input").value,n.trim()!==""&&(h.style.display="block",g(n,c,1).then(e=>{e.length===0?(u.show({title:"!",message:"Sorry, there are no images matching your search query. Please try again!",color:"#EF4040",messageColor:"#fff",titleColor:"#fff",position:"topRight"}),f.innerHTML="",d.reset()):(f.innerHTML=e.map(p).join(""),l=1,new m(".card a",{captionsData:"title"}).refresh(),d.reset(),getButtonMore.classList.remove("is-hidden"))}).catch(e=>{u.show({title:"!",message:`Error: ${e.message}`,color:"#EF4040",messageColor:"#fff",titleColor:"#fff",position:"topRight"})}).finally(()=>{h.style.display="none"})),getButtonMore.classList.add("is-hidden")});getButtonMore.addEventListener("click",async r=>{l++;try{const e=await g(n,c,l);f.innerHTML+=e.map(p).join("");const s=e.length,i=new m(".card a",{captionsData:"title"});L(),i.refresh(),w(s)}catch(e){console.error(`Error loading more images: ${e.message}`)}});function w(r){const e=l*c;r<c||e>=totalHits?(u.show({title:"!",message:"We're sorry, but you've reached the end of search results.",color:"#EF4040",messageColor:"#fff",titleColor:"#fff",position:"topRight"}),getButtonMore.classList.add("is-hidden")):getButtonMore.classList.remove("is-hidden")}function L(){const r=document.querySelector(".gallery .card");if(r){const s=r.getBoundingClientRect().height*2;window.scrollBy({top:s,left:0,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
