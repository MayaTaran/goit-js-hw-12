import{a as y,i as u,S as m}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function p({webformatURL:s,largeImageURL:e,tags:r,likes:i,views:t,comments:o,downloads:a}){return`
    <li class="card">
      <a href="${e}" data-caption="${r}">
        <img class="card-image" src="${s}" alt="${r}" title="${r}"/>
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
    </li>`}async function g(s,e,r){const i=s.split(" ").join("+"),t=y.create({baseURL:"https://pixabay.com/api/",params:{q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:e,page:r,key:"42649910-6a5238a097d86367028b0f975"}});try{const o=await t.get();if(o.status!==200)throw new Error(`${o.status}`);return o.data.hits}catch(o){throw new Error(`Failed to fetch data: ${o.message}`)}}const d=document.querySelector("form");let l;const f=document.querySelector("ul#image-list"),h=document.querySelector(".loader");window.getButtonMore=document.querySelector(".button-more");const n=15;let c=1,L;d.addEventListener("submit",s=>{s.preventDefault(),l=s.currentTarget.querySelector("input").value,l.trim()!==""&&(h.style.display="block",g(l,n,1).then(e=>{e.length===0?(u.show({title:"!",message:"Sorry, there are no images matching your search query. Please try again!",color:"#EF4040",messageColor:"#fff",titleColor:"#fff",position:"topRight"}),f.innerHTML="",d.reset()):(f.innerHTML=e.map(p).join(""),c=1,new m(".card a",{captionsData:"title"}).refresh(),d.reset(),getButtonMore.classList.remove("is-hidden")),e.length<n?getButtonMore.classList.add("is-hidden"):getButtonMore.classList.remove("is-hidden")}).catch(e=>{u.show({title:"!",message:`Error: ${e.message}`,color:"#EF4040",messageColor:"#fff",titleColor:"#fff",position:"topRight"})}).finally(()=>{h.style.display="none"}))});getButtonMore.addEventListener("click",async s=>{c++;try{const e=await g(l,n,c);f.innerHTML+=e.map(p).join("");const r=e.length,i=new m(".card a",{captionsData:"title"});b(),i.refresh(),w(r)}catch(e){console.error(`Error loading more images: ${e.message}`)}});function w(s){const e=c*n;s<n||e>=L?(u.show({title:"!",message:"We're sorry, but you've reached the end of search results.",color:"#EF4040",messageColor:"#fff",titleColor:"#fff",position:"topRight"}),getButtonMore.classList.add("is-hidden")):getButtonMore.classList.remove("is-hidden")}function b(){const s=document.querySelector(".gallery .card");if(s){const r=s.getBoundingClientRect().height*2;window.scrollBy({top:r,left:0,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
