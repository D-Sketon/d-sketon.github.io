var getRealPath=(e=window.location.pathname,t=!1)=>{const o=e.split("/").filter((e=>(e=e.trim()).length>0&&"/"!==e&&"index.html"!==e));return t?o[0]||"/":o[o.length-1]||"/"},scrollIntoViewAndWait=e=>new Promise((t=>{"onscrollend"in window?(document.addEventListener("scrollend",t,{once:!0}),e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})):(e.scrollIntoView({block:"center",inline:"center"}),t())}));_$$(".article-entry h1>a, .article-entry h2>a, .article-entry h3>a, .article-entry h4>a, .article-entry h5>a, .article-entry h6>a").forEach((e=>{window.icon_font?e.innerHTML="&#xe635;":e.innerHTML="&#xf292;"})),_$$(".article-entry img").forEach((e=>{if(e.parentElement.classList.contains("friend-icon")||"A"===e.parentElement.tagName||e.classList.contains("no-lightbox"))return;const t=document.createElement("a");t.href?t.href=e.src:t.setAttribute("href",e.src),t.dataset.pswpWidth=e.naturalWidth,t.dataset.pswpHeight=e.naturalHeight,t.target="_blank",t.classList.add("article-gallery-item"),e.parentNode.insertBefore(t,e),e.parentNode.removeChild(e),t.appendChild(e)})),_$$(".article-gallery a.article-gallery-img").forEach((e=>{e.dataset.pswpWidth=e.children[0].naturalWidth,e.dataset.pswpHeight=e.children[0].naturalHeight})),window.lightboxStatus="ready",window.dispatchEvent(new Event("lightbox:ready"));var isMobileNavAnim=!1;document.getElementById("main-nav-toggle").off("click").on("click",(function(){isMobileNavAnim||(isMobileNavAnim=!0,document.body.classList.toggle("mobile-nav-on"),setTimeout((()=>{isMobileNavAnim=!1}),200))})),document.getElementById("mask").off("click").on("click",(function(){!isMobileNavAnim&&document.body.classList.contains("mobile-nav-on")&&document.body.classList.remove("mobile-nav-on")})),_$$(".sidebar-toc-btn").forEach((e=>{e.off("click").on("click",(function(){this.classList.contains("current")||(_$$(".sidebar-toc-btn").forEach((e=>e.classList.add("current"))),_$$(".sidebar-common-btn").forEach((e=>e.classList.remove("current"))),_$$(".sidebar-toc-sidebar").forEach((e=>e.classList.remove("hidden"))),_$$(".sidebar-common-sidebar").forEach((e=>e.classList.add("hidden"))))}))})),_$$(".sidebar-common-btn").forEach((e=>{e.off("click").on("click",(function(){this.classList.contains("current")||(_$$(".sidebar-common-btn").forEach((e=>e.classList.add("current"))),_$$(".sidebar-toc-btn").forEach((e=>e.classList.remove("current"))),_$$(".sidebar-common-sidebar").forEach((e=>e.classList.remove("hidden"))),_$$(".sidebar-toc-sidebar").forEach((e=>e.classList.add("hidden"))))}))})),(()=>{const e=getRealPath(window.location.pathname);_$$(".sidebar-menu-link-wrap").forEach((t=>{let o=t.querySelector("a").getAttribute("href");o&&getRealPath(o)===e&&t.classList.add("link-active")}))})(),_$$(".article-entry img").forEach((e=>{e.classList.contains("lazyload")||(e.classList.add("lazyload"),e.setAttribute("data-src",e.src),e.setAttribute("data-sizes","auto"),e.removeAttribute("src"))}));var sidebarTop=_$(".sidebar-top");function tocInit(){const e="block"===getComputedStyle(_$("#sidebar")).display?_$$("#sidebar .sidebar-toc-wrapper li"):_$$("#mobile-nav .sidebar-toc-wrapper li");if(!e.length)return;let t=null;const o=(e,o)=>{e.preventDefault();const i=_$(decodeURI(e.currentTarget.getAttribute("href")));t=o,scrollIntoViewAndWait(i).then((()=>{n(o),t=null}))},i=[...e].map(((e,t)=>{const i=e.querySelector("a.toc-link");i.off("click").on("click",(e=>o(e,t)));const n=_$(decodeURI(i.getAttribute("href")));if(!n)return null;const a=n.querySelector("a");return a?.off("click").on("click",(e=>o(e,t))),n})),n=t=>{const o=e[t];if(!o||o.classList.contains("current"))return;_$$(".sidebar-toc-wrapper .active").forEach((e=>{e.classList.remove("active","current")})),i.forEach((e=>{e?.classList.remove("active")})),o.classList.add("active","current"),i[t]?.classList.add("active");let n=o.parentNode;for(;!n.matches(".sidebar-toc");){if(n.matches("li")){n.classList.add("active");const e=_$(decodeURI(n.querySelector("a.toc-link").getAttribute("href")));e&&e.classList.add("active")}n=n.parentNode}if(!document.querySelector(".sidebar-toc-sidebar").classList.contains("hidden")){const e=_$(".sidebar-toc-wrapper");e.scrollTo({top:e.scrollTop+o.offsetTop-e.offsetHeight/2,behavior:"smooth"})}},a=new IntersectionObserver((e=>{const o=(e=>{let t=0,o=e[t];if(o.boundingClientRect.top>0)return t=i.indexOf(o.target),0===t?0:t-1;for(;t<e.length;t++){if(!(e[t].boundingClientRect.top<=0))return i.indexOf(o.target);o=e[t]}return i.indexOf(o.target)})(e)+(window.diffY>0?1:0);null===t&&n(o)}),{rootMargin:"0px 0px -100% 0px",threshold:0});i.forEach((e=>{e&&a.observe(e)}))}sidebarTop.style.transition="opacity 1s",sidebarTop.off("click").on("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),document.documentElement.scrollTop<10&&(sidebarTop.style.opacity=0),window.off("scroll").on("scroll",(()=>{const e=_$(".sidebar-top");document.documentElement.scrollTop<10?e.style.opacity=0:e.style.opacity=1})),_$$(".toc a").forEach((e=>{e.off("click").on("click",(()=>{!isMobileNavAnim&&document.body.classList.contains("mobile-nav-on")&&document.body.classList.remove("mobile-nav-on")}))})),_$$(".sidebar-menu-link-dummy").forEach((e=>{e.off("click").on("click",(()=>{!isMobileNavAnim&&document.body.classList.contains("mobile-nav-on")&&setTimeout((()=>{document.body.classList.remove("mobile-nav-on")}),200)}))})),window.off("hexo-blog-decrypt").on("hexo-blog-decrypt",tocInit).on("hexo-blog-decrypt",(()=>{const e=document.createElement("script");e.src="/js/insert_highlight.js",e.setAttribute("data-pjax",!0),document.body.appendChild(e)})),tocInit();