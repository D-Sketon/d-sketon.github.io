(()=>{const e=_$("#reimu-search-input"),t=_$("#reimu-hits"),n=_$("#reimu-pagination");let o=1;function i(e,n,o){t.innerHTML="";const i=(n-1)*o,a=i+o;e.slice(i,a).forEach((e=>{t.insertAdjacentHTML("beforeend",`<a href="${e.url}" class="reimu-hit-item-link">${e.title}</a>`)}))}e.insertAdjacentHTML("beforeend",'<form id="search-form"><input type="text" id="search-text"></form>'),fetch("/search.json").then((e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.json()})).then((e=>{document.getElementById("search-form").off("submit").on("submit",(a=>{a.preventDefault();const r=_$("#search-text").value;if(t.innerHTML="",n.innerHTML="",r){const t=e.filter((e=>e.title&&e.title.toLowerCase().includes(r.toLowerCase())||e.content&&e.content.toLowerCase().includes(r.toLowerCase()))),a=Math.ceil(t.length/10);n.insertAdjacentHTML("beforeend",'<ul class="ais-Pagination-list pagination">');for(let e=1;e<=a;e++){const t=document.createElement("li");t.className="ais-Pagination-item pagination-item ais-Pagination-item--page",t.innerHTML=`<a class="ais-Pagination-link page-number" aria-label="Page ${e}" href="#">${e}</a>`,e===o&&t.classList.add("ais-Pagination-item--selected","current"),n.querySelector("ul").appendChild(t)}_$$(".page-number").forEach((e=>{e.off("click").on("click",(n=>{n.preventDefault(),o=e.innerText,document.querySelectorAll(".ais-Pagination-item").forEach((e=>{e.classList.remove("ais-Pagination-item--selected","current")})),e.parentNode.classList.add("ais-Pagination-item--selected","current"),i(t,o,10)}))})),i(t,o,10)}}))})).catch((e=>{console.error("There has been a problem with your fetch operation:",e)})),document.querySelector(".popup-trigger").off("click").on("click",(e=>{e.stopPropagation(),document.body.insertAdjacentHTML("beforeend",'<div class="popoverlay">'),document.body.style.overflow="hidden",_$(".popup").style.display="block",_$("#search-text").focus()})),document.querySelector(".popup-btn-close").off("click").on("click",(()=>{_$(".popup").style.display="none",_$(".popoverlay").remove(),document.body.style.overflow=""}))})();