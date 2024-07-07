function getMarkerPopup(t){var e=t.name?'<h4 class="my-0"><a href="'+t.link+'">'+t.name+"</a></h4>":"",o=t.description?'<p class="text-muted mt-1 mb-2 font-size-14">'+t.description+"</p>":"",a=t.image?'<img src="'+t.image+'" alt="" class="card-img-top">':"",i=t.address?'<p class="my-0 font-size-14"><i data-feather="map-pin" class="icon icon-xxs icon-dual mr-1"></i>'+t.address+"</p>":"",n="";if(t.rating){for(var n="<span>",r=1;r<=5;r++)r<=t.rating?n+='<i data-feather="star" class="icon icon-xs icon-fill-warning text-warning"></i>':n+='<i data-feather="star" class="icon icon-xs text-warning"></i>';n+="</span>"}a='<div class="card m-0 p-0 overflow-hidden">'+a+'<div class="card-body"> <div class="">'+e+o+"</div>";return a+('<div class="pt-2"><div class="row align-items-center"> <div class="col-auto"> '+i+"</div>")+('<div class="col text-right">'+n+"</div></div></div></div></div>")}!function(c){"use strict";function t(){}t.prototype.createMarker=function(t,e,o,a,i){var n=null,n=t.useTextIcon?L.marker(o,{icon:a,riseOnHover:!0,opacity:0,id:e.id}).bindTooltip('<div id="custom-map-marker-'+e.id+'">'+e.label+"</div>",{direction:"top",permanent:!0,opacity:1,interactive:!0,className:"custom-map-marker"}).on("mouseover",function(t){console.log(c("#custom-map-marker-"+t.target.options.id)),c("#custom-map-marker-"+t.target.options.id).parent().addClass("active")}).on("mouseout",function(t){c("#custom-map-marker-"+t.target.options.id).parent().removeClass("active")}):L.marker(o,{icon:a,riseOnHover:!0,id:e.id}).on("mouseover",function(t){t.target.setIcon(i)}).on("mouseout",function(t){t.target.setIcon(a)});return t.interactive&&n.bindPopup(getMarkerPopup(e),{minwidth:120,maxWidth:320,className:"custom-map-marker-popup"}).on("popupopen",function(t){feather.replace()}),n},t.prototype.init=function(){var l=this;L&&c('[data-toggle="map"]').each(function(){try{var o=c.extend({markerIconPath:"/assets/images/icons/map-marker.svg",markerIconPathHover:"/assets/images/icons/map-marker-filled.svg",useTextIcon:!1,zoom:12,scrollWheelZoom:!1,mapCenter:[39.74739,-105],tileLayer:{tiles:"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoiY29kZXJ0aGVtZXMiLCJhIjoiY2s3dmgwbmFrMTkxdTNlbXJ2a3Z3eGEwcSJ9.wZqyynPHmm1EkNjjiH8lUw",subdomains:"listing",attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox/streets-v11"}},c(this).data("map")),t=!1,e=!1,a=(700<c(window).width()&&(e=t=!0),L.map(c(this).attr("id"),{zoom:o.zoom,scrollWheelZoom:o.scrollWheelZoom,dragging:t,tap:e}).setView(o.mapCenter,o.zoom)),i=(a.once("focus",function(){a.scrollWheelZoom.enable()}),L.tileLayer(o.tileLayer.tiles,{id:o.tileLayer.id,attribution:o.tileLayer.attribution,maxZoom:18,tileSize:512,zoomOffset:-1}).addTo(a),L.icon({iconUrl:o.markerIconPath,iconSize:[36,64]})),n=L.icon({iconUrl:o.markerIconPathHover,iconSize:[36,64]});if(o.geojson)c.getJSON(o.geojson).done(function(t){L.geoJSON(t,{pointToLayer:function(t,e){return l.createMarker(o,t.properties,e,i,n)}}).addTo(a)}).fail(function(t,e,o){console.log(o)});else if(o.markers&&o.markers.length)for(var r in o.markers){var s=o.markers[r];l.createMarker(o,s,s.location,i,n).addTo(a)}}catch(t){}})},c.Maps=new t,c.Maps.Constructor=t}(window.jQuery),function(s){"use strict";function t(){this.$body=s("body"),this.$window=s(window)}t.prototype.initComponents=function(){s(document).ready(function(){s('[data-toggle="popover"]').popover(),s('[data-toggle="tooltip"]').tooltip(),s(".dropdown.hovered").hover(function(){s(".dropdown-toggle",this).trigger("click")}),s(".sticky-el").length&&new Sticky(".sticky-el"),s('[data-toggle="smooth-scroll"]').on("click",function(t){if(""!==this.hash)return t.preventDefault(),t=this.hash,s("html, body").animate({scrollTop:s(t).offset().top-120},800,function(){}),!1}),s.fn.magnificPopup&&s('[data-toggle="image-gallery"]').each(function(t,e){var o=s.extend({preloader:!0,mainClass:"mfp-with-zoom",zoom:{enabled:!0,duration:300,easing:"ease-in-out",opener:function(t){return t.is("img")?t:t.find("img")}},closeMarkup:'<button title="%title%" type="button" class="mfp-close"></button>',image:{titleSrc:function(t){return s(t.el).data("title")}}},s(e).data());o.enableGallery&&(o.gallery={enabled:!0,navigateByImgClick:!0,preload:[1,1]}),s(e).magnificPopup(o)}),Swiper&&s('[data-toggle="swiper"]').each(function(){var t=JSON.parse(s(this).attr("data-swiper")?s(this).attr("data-swiper"):"{}"),t=("string"==typeof t&&(t=JSON.parse(t)),s.extend({init:!0,loop:!0},t));new Swiper(s(this)[0],t)}),s('[data-toggle="item-filter"]').each(function(t,e){var o=s(this).data("targetContainer"),a=s(s(this).data("menuItem"));a.on("click",function(t){a.removeClass("active"),s(this).addClass("active");var e=s(this).attr("data-rel");s(o+" .filter-item").not("."+e).fadeOut(100).removeClass(""),s("."+e).fadeIn(500).addClass("")})}),s.Maps.init(),feather.replace();var t=s(".btn-back-to-top"),e=s('[data-toggle="sticky"]');s(window).scroll(function(){50<s(this).scrollTop()?t.addClass("show"):t.removeClass("show"),240<s(this).scrollTop()?e.addClass("navbar-sticky"):e.removeClass("navbar-sticky")}),t.on("click",function(t){return s("html,body").animate({scrollTop:0},"slow"),!1}),AOS.init({}),s('[data-toggle="counter"]').each(function(t,e){var o=s(this).data(),a=o.from||null,i=o.to||null,n=o.decimals||null,r=o.duration||null,o=o.options||null,a=(o.startVal=a,o.decimals=n,o.duration=r,new countUp.CountUp(e,i,o));a.error||(a.start(),s(this).addClass("counted"))}),s('[data-toggle="typed"]').each(function(t,e){var o=s(this).data();new Typed(e,{strings:o.strings||[],typeSpeed:60,backSpeed:60,backDelay:1e3,loop:!0})})})},t.prototype.initMasonry=function(){document.querySelector(".masonry")&&new masonry({parent:document.querySelector(".masonry")})},t.prototype.init=function(){this.initComponents(),this.initMasonry()},s.App=new t,s.App.Constructor=t}(window.jQuery),function(){"use strict";window.jQuery.App.init()}();var popoverTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')),popoverList=popoverTriggerList.map(function(t){return new bootstrap.Popover(t)}),tooltipTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')),tooltipList=tooltipTriggerList.map(function(t){return new bootstrap.Tooltip(t)}),dropdownTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="dropdown"]')),dropdownList=dropdownTriggerList.map(function(t){return new bootstrap.Dropdown(t)});document.querySelectorAll(".navbar a").forEach(function(e){var t=window.location.href.split(/[?#]/)[0];if(e.href==t||!t.includes("html")&&e.href.includes("index")&&!e.href.includes("docs")){e.classList.add("active");for(var o=e.getAttribute("aria-labelledby");null!=o;)var a=document.getElementById(o),o=null!=a?(a.classList.add("active"),a.getAttribute("aria-labelledby")):null}e.addEventListener("click",function(t){"navbarPages"===e.getAttribute("aria-labelledby")&&e.classList.contains("dropdown-toggle")&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation()),console.log(e)})});