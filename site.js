/* Navegação compartilhada do Controle Quebrado. */
(function(){
  var MENU=[["Início","index.html"],["Notícias","noticias.html"],["Vídeos","videos.html"],["Emulação","index.html#emulacao"],["Recompilados","index.html#recompilados"],["Linux","index.html#linux"],["Underground 2","underground-2-revived.html"],["Comandos","comandos.html"]];
  var FOOT=[["Sobre","sobre.html"],["Notícias","noticias.html"],["Vídeos","videos.html"],["Comandos","comandos.html"],["Contato","contato.html"],["Privacidade","privacidade.html"],["RSS","feed.xml"],["Controle Quebrado","https://www.youtube.com/@controlequebrado_tv"],["Caio Mendonça","https://www.youtube.com/@caiomendonca8509/videos"]];
  var current=location.pathname.split("/").pop()||"index.html";
  function build(items,active){return items.map(function(i){var a=document.createElement("a");a.href=i[1];a.textContent=i[0];if(active&&i[1]===current)a.setAttribute("aria-current","page");if(i[1].indexOf("http")===0){a.target="_blank";a.rel="noopener";}return a;});}
  if(document.querySelector("[data-cq-shared-nav]"))return;
  var header=document.querySelector("header");if(header&&header.hasAttribute("data-cq-shared-nav")){var nav=header.querySelector("nav");if(nav){nav.replaceChildren.apply(nav,build(MENU,true));}}
  var footer=document.querySelector("footer");if(footer&&footer.hasAttribute("data-cq-shared-nav")){var nav2=footer.querySelector("nav");if(nav2)nav2.replaceChildren.apply(nav2,build(FOOT,false));}
})();
