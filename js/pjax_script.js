var getRealPath=(t=window.location.pathname,e=!1)=>{const o=t.split("/").filter((t=>(t=t.trim()).length>0&&"/"!==t&&"index.html"!==t));return e?o[0]||"/":o[o.length-1]||"/"},scrollIntoViewAndWait=t=>new Promise((e=>{"onscrollend"in window?(document.addEventListener("scrollend",e,{once:!0}),t.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})):(t.scrollIntoView({block:"center",inline:"center"}),e())}));_$$(".article-entry h1>a, .article-entry h2>a, .article-entry h3>a, .article-entry h4>a, .article-entry h5>a, .article-entry h6>a").forEach((t=>{window.icon_font?t.innerHTML="&#xe635;":t.innerHTML="&#xf292;"})),_$$(".article-entry img").forEach((t=>{if(t.parentElement.classList.contains("friend-icon")||"A"===t.parentElement.tagName||t.classList.contains("no-lightbox"))return;const e=document.createElement("a");e.href?e.href=t.src:e.setAttribute("href",t.src),t.naturalWidth||t.naturalHeight?(e.dataset.pswpWidth=t.naturalWidth,e.dataset.pswpHeight=t.naturalHeight):(console.warn("Image naturalWidth and naturalHeight cannot be obtained right now, fallback to onload."),t.onload=()=>{e.dataset.pswpWidth=t.naturalWidth,e.dataset.pswpHeight=t.naturalHeight}),e.target="_blank",e.classList.add("article-gallery-item"),t.parentNode.insertBefore(e,t),t.parentNode.removeChild(t),e.appendChild(t)})),window.lightboxStatus="ready",window.dispatchEvent(new Event("lightbox:ready"));var isMobileNavAnim=!1;document.getElementById("main-nav-toggle").off("click").on("click",(function(){isMobileNavAnim||(isMobileNavAnim=!0,document.body.classList.toggle("mobile-nav-on"),setTimeout((()=>{isMobileNavAnim=!1}),200))})),document.getElementById("mask")?.off("click").on("click",(function(){!isMobileNavAnim&&document.body.classList.contains("mobile-nav-on")&&document.body.classList.remove("mobile-nav-on")})),_$$(".sidebar-toc-btn").forEach((t=>{t.off("click").on("click",(function(){this.classList.contains("current")||(_$$(".sidebar-toc-btn").forEach((t=>t.classList.add("current"))),_$$(".sidebar-common-btn").forEach((t=>t.classList.remove("current"))),_$$(".sidebar-toc-sidebar").forEach((t=>t.classList.remove("hidden"))),_$$(".sidebar-common-sidebar").forEach((t=>t.classList.add("hidden"))))}))})),_$$(".sidebar-common-btn").forEach((t=>{t.off("click").on("click",(function(){this.classList.contains("current")||(_$$(".sidebar-common-btn").forEach((t=>t.classList.add("current"))),_$$(".sidebar-toc-btn").forEach((t=>t.classList.remove("current"))),_$$(".sidebar-common-sidebar").forEach((t=>t.classList.remove("hidden"))),_$$(".sidebar-toc-sidebar").forEach((t=>t.classList.add("hidden"))))}))})),(()=>{const t=getRealPath(window.location.pathname);_$$(".sidebar-menu-link-wrap").forEach((e=>{let o=e.querySelector("a").getAttribute("href");o&&getRealPath(o)===t&&e.classList.add("link-active")}))})(),_$$(".article-entry img").forEach((t=>{t.classList.contains("lazyload")||(t.classList.add("lazyload"),t.setAttribute("data-src",t.src),t.setAttribute("data-sizes","auto"),t.removeAttribute("src"))}));var __sidebarTopScrollHandler,sidebarTop=_$(".sidebar-top");function tocInit(){if(!_$("#sidebar"))return;const t="block"===getComputedStyle(_$("#sidebar")).display?_$$("#sidebar .sidebar-toc-wrapper li"):_$$("#mobile-nav .sidebar-toc-wrapper li");if(!t.length)return;let e=null;const o=(t,o)=>{t.preventDefault();const i=_$(decodeURI(t.currentTarget.getAttribute("href")));e=o,scrollIntoViewAndWait(i).then((()=>{n(o),e=null}))},i=[...t].map(((t,e)=>{const i=t.querySelector("a.toc-link");i.off("click").on("click",(t=>o(t,e)));const n=_$(decodeURI(i.getAttribute("href")));if(!n)return null;const a=n.querySelector("a");return a?.off("click").on("click",(t=>o(t,e))),n})),n=e=>{const o=t[e];if(!o||o.classList.contains("current"))return;_$$(".sidebar-toc-wrapper .active").forEach((t=>{t.classList.remove("active","current")})),i.forEach((t=>{t?.classList.remove("active")})),o.classList.add("active","current"),i[e]?.classList.add("active");let n=o.parentNode;for(;!n.matches(".sidebar-toc");){if(n.matches("li")){n.classList.add("active");const t=_$(decodeURI(n.querySelector("a.toc-link").getAttribute("href")));t&&t.classList.add("active")}n=n.parentNode}if(!document.querySelector(".sidebar-toc-sidebar").classList.contains("hidden")){const t=_$(".sidebar-toc-wrapper");t.scrollTo({top:t.scrollTop+o.offsetTop-t.offsetHeight/2,behavior:"smooth"})}},a=new IntersectionObserver((t=>{const o=(t=>{let e=0,o=t[e];if(o.boundingClientRect.top>0)return e=i.indexOf(o.target),0===e?0:e-1;for(;e<t.length;e++){if(!(t[e].boundingClientRect.top<=0))return i.indexOf(o.target);o=t[e]}return i.indexOf(o.target)})(t)+(window.diffY>0?1:0);null===e&&n(o)}),{rootMargin:"0px 0px -100% 0px",threshold:0});i.forEach((t=>{t&&a.observe(t)}))}sidebarTop&&(sidebarTop.style.transition="all .3s",sidebarTop.off("click").on("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),document.documentElement.scrollTop<10&&(sidebarTop.style.opacity=0)),__sidebarTopScrollHandler&&window.off("scroll",__sidebarTopScrollHandler),__sidebarTopScrollHandler=()=>{const t=_$(".sidebar-top");document.documentElement.scrollTop<10?t.style.opacity=0:t.style.opacity=1},window.on("scroll",__sidebarTopScrollHandler),_$$(".toc li").forEach((t=>{t.off("click").on("click",(()=>{!isMobileNavAnim&&document.body.classList.contains("mobile-nav-on")&&document.body.classList.remove("mobile-nav-on")}))})),_$$(".sidebar-menu-link-dummy").forEach((t=>{t.off("click").on("click",(()=>{!isMobileNavAnim&&document.body.classList.contains("mobile-nav-on")&&setTimeout((()=>{document.body.classList.remove("mobile-nav-on")}),200)}))})),window.off("hexo-blog-decrypt").on("hexo-blog-decrypt",tocInit).on("hexo-blog-decrypt",(()=>{const t=document.createElement("script");t.src="/js/insert_highlight.js",t.setAttribute("data-pjax",!0),document.body.appendChild(t)})),tocInit(),_$(".sponsor-button-wrapper")?.off("click").on("click",(()=>{_$(".sponsor-button-wrapper")?.classList.toggle("active"),_$(".sponsor-tip")?.classList.toggle("active"),_$(".sponsor-qr")?.classList.toggle("active")}));