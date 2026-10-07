/* Header + footer. Edit once, applies everywhere. */
(function(){
  var root=document.body.dataset.root||'',page=document.body.dataset.page||'';
  var portals=[['Studio','epc.pvnxt.com','For EPC companies','studio.html'],['Go','installer.pvnxt.com','For installers','go.html'],['Connect','consumer.pvnxt.com','For homeowners','connect.html'],['SCADA','scada.pvnxt.com','For O&M teams','scada.html'],['Artha','artha.pvnxt.com','For investors \u00b7 Early access','artha.html']];
  var chev='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
  var cur=function(k){return page===k?' class="on"':'';};
  var prodItems=portals.map(function(p){return '<a class="item" href="'+root+'products/'+p[3]+'"><b>'+p[0]+'</b><span>'+p[2]+'</span></a>';}).join('');
  var loginItems=portals.map(function(p){return '<a class="item" href="https://'+p[1]+'" target="_blank" rel="noopener"><b>'+p[0]+'</b><span class="host">'+p[1]+'</span></a>';}).join('');
  var h='<header class="hdr" id="hdr"><div class="wrap hdr-in">'
   +'<a class="logo" href="'+root+'index.html"><img src="'+root+'assets/logos/terranxt.png" alt="Terranxt"></a>'
   +'<ul class="nav">'
   +'<li class="has-dd"><button type="button" aria-haspopup="true">Products '+chev+'</button><div class="dd dd-prod"><div><h6>Base</h6><a class="item" href="'+root+'products/atlas.html"><b>Atlas</b><span>Satellite to 3D model</span></a></div><div><h6>Portals</h6>'+prodItems+'</div><div class="dd-foot"><a href="'+root+'products.html">All products</a> &nbsp;\u00b7&nbsp; <a href="'+root+'apps.html">Mobile apps</a></div></div></li>'
   +'<li><a href="'+root+'how-it-works.html"'+cur('how')+'>How it works</a></li>'
   +'<li><a href="'+root+'about.html"'+cur('about')+'>About</a></li>'
   +'<li><a href="'+root+'help.html"'+cur('help')+'>Help</a></li></ul>'
   +'<div class="hdr-cta"><div class="has-dd" style="position:relative"><button type="button" class="btn sm ghost" aria-haspopup="true" style="border-color:transparent">Log in '+chev+'</button><div class="dd dd-login"><h6>Open your portal</h6>'+loginItems+'<div class="dd-foot"><a href="'+root+'products.html">New here? Sign up</a></div></div></div><a class="btn sm" href="'+root+'demo.html">Request a demo</a></div>'
   +'<button class="burger" id="burger" aria-label="Menu" aria-expanded="false"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button></div>'
   +'<nav class="mnav"><a href="'+root+'products.html">Products</a><div class="sub"><a href="'+root+'products/atlas.html">Atlas</a>'+portals.map(function(p){return '<a href="'+root+'products/'+p[3]+'">'+p[0]+'</a>';}).join('')+'</div><a href="'+root+'how-it-works.html">How it works</a><a href="'+root+'about.html">About</a><a href="'+root+'help.html">Help</a><a href="'+root+'products.html">Log in or sign up</a><a class="btn" href="'+root+'demo.html">Request a demo</a></nav></header>';
  var f='<footer class="ftr"><div class="wrap"><div class="ftr-cols"><div><a class="logo" href="'+root+'index.html"><img src="'+root+'assets/logos/terranxt.png" alt="Terranxt"></a><p style="margin-top:14px;max-width:240px">Solar projects, on one platform.</p></div>'
   +'<div><h6>Products</h6><ul><li><a href="'+root+'products/atlas.html">Atlas</a></li>'+portals.map(function(p){return '<li><a href="'+root+'products/'+p[3]+'">'+p[0]+'</a></li>';}).join('')+'<li><a href="'+root+'apps.html">Apps</a></li></ul></div>'
   +'<div><h6>Company</h6><ul><li><a href="'+root+'about.html">About</a></li><li><a href="'+root+'careers.html">Careers</a></li><li><a href="'+root+'contact.html">Contact</a></li><li><a href="https://www.astongreens.com" target="_blank" rel="noopener">Astongreens</a></li></ul></div>'
   +'<div><h6>Help</h6><ul><li><a href="'+root+'help.html">Help center</a></li><li><a href="'+root+'demo.html">Request a demo</a></li></ul></div>'
   +'<div><h6>Legal</h6><ul><li><a href="'+root+'privacy.html">Privacy</a></li><li><a href="'+root+'terms.html">Terms</a></li><li><a href="'+root+'cookies.html">Cookies</a></li><li><a href="'+root+'artha-risk.html">Artha risk</a></li></ul></div></div>'
   +'<div class="ftr-base"><span>\u00a9 '+new Date().getFullYear()+' Terranxt Pvt Ltd. A pvNXT company. IIT Delhi\u2013FITT incubated. Backed by Astongreens.</span><span>Artha is in early access. Investments in solar projects carry risk.</span></div></div></footer>';
  document.getElementById('site-header').outerHTML=h;
  document.getElementById('site-footer').outerHTML=f;
  var b=document.getElementById('burger'),hd=document.getElementById('hdr');
  b.addEventListener('click',function(){var o=hd.classList.toggle('open');b.setAttribute('aria-expanded',o);});
  function icons(){if(window.lucide)window.lucide.createIcons();}
  icons();window.addEventListener('load',icons);
})();
