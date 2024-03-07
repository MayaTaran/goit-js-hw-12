import{a as g,i as d,S as p}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function m({webformatURL:i,largeImageURL:t,tags:s,likes:o,views:e,comments:r,downloads:a}){return`
    <li class="card">
      <a href="${t}" data-caption="${s}">
        <img class="card-image" src="${i}" alt="${s}" title="${s}"/>
        <ul class="discription-list">
          <li>
            <h3 class="disc-name">Likes</h3>
            <p class="disc-value">${o}</p>
          </li>
          <li>
            <h3 class="disc-name">Views</h3>
            <p class="disc-value">${e}</p>
          </li>
          <li>
            <h3 class="disc-name">Comments</h3>
            <p class="disc-value">${r}</p>
          </li>
          <li>
            <h3 class="disc-name">Downloads</h3>
            <p class="disc-value">${a}</p>
          </li>
        </ul>
      </a>
    </li>`}async function h(i){const t=i.split(" ").join("+"),s=g.create({baseURL:"https://pixabay.com/api/",params:{q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"pageQuantity",key:"42649910-6a5238a097d86367028b0f975"}});try{const o=await s.get();if(o.status!==200)throw new Error(`${o.status}`);return o.data.hits}catch(o){throw new Error(`Failed to fetch data: ${o.message}`)}}const l=document.querySelector("form");let n;const u=document.querySelector("ul#image-list"),f=document.querySelector(".loader"),y=document.querySelector(".button-more"),b=15;let c;l.addEventListener("submit",i=>{i.preventDefault(),n=i.currentTarget.querySelector("input").value,n.trim()!==""&&(f.style.display="block",h(n).then(t=>{t.length===0?(d.show({title:"!",message:"Sorry, there are no images matching your search query. Please try again!",color:"#EF4040",messageColor:"#fff",titleColor:"#fff",position:"topRight"}),u.innerHTML="",l.reset()):(u.innerHTML=t.map(m).join(""),c=1,new p(".card a",{captionsData:"title"}).refresh(),l.reset())}).catch(t=>{d.show({title:"!",message:`Error: ${t.message}`,color:"#EF4040",messageColor:"#fff",titleColor:"#fff",position:"topRight"})}).finally(()=>{f.style.display="none"}))});y.addEventListener("click",async i=>{c=c+1;try{const t=await h(n,b,c);u.innerHTML+=t.map(m).join(""),new p(".card a",{captionsData:"title"}).refresh()}catch(t){console.error(`Error loading more images: ${t.message}`)}});
//# sourceMappingURL=commonHelpers.js.map
