/* Header + footer. Edit once, applies everywhere. */
(function(){
  var root=document.body.dataset.root||'',page=document.body.dataset.page||'';
  /* [name, line, login URL, sign-up URL, product page, signup label]. Replace URLs with the exact login / signup paths. */
  var P=[
   ['Studio','For EPC companies','https://epc.pvnxt.com','https://epc.pvnxt.com','studio.html','Sign up'],
   ['Go','For installers','https://installer.pvnxt.com','https://installer.pvnxt.com','go.html','Sign up'],
   ['Connect','For anyone going solar','https://consumer.pvnxt.com','https://consumer.pvnxt.com','connect.html','Sign up'],
   ['SCADA','For O&amp;M teams','https://scada.pvnxt.com','https://scada.pvnxt.com','scada.html','Sign up'],
   ['Artha','For investors \u00b7 Early access','https://artha.pvnxt.com',root+'products/artha.html#interest','artha.html','Join']];
  var chev='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
  var cur=function(k){return page===k?' class="on"':'';};
  var prodItems=P.map(function(p){return '<a class="item" href="'+root+'products/'+p[4]+'"><b>'+p[0]+'</b><span>'+p[1]+'</span></a>';}).join('');
  var loginRows=P.map(function(p){return '<div class="lrow"><div><b>'+p[0]+'</b><span>'+p[1]+'</span></div><div class="lact"><a href="'+p[2]+'" target="_blank" rel="noopener">Log in</a><a class="su" href="'+p[3]+'"'+(p[3].indexOf('http')===0?' target="_blank" rel="noopener"':'')+'>'+p[5]+'</a></div></div>';}).join('');
  var h='<header class="hdr" id="hdr"><div class="wrap hdr-in">'
   +'<a class="logo" href="'+root+'index.html"><img src="'+root+'assets/logos/terranxt.png" alt="Terranxt"></a>'
   +'<ul class="nav">'
   +'<li class="has-dd"><button type="button" aria-haspopup="true" aria-expanded="false">Products '+chev+'</button><div class="dd dd-prod"><div><h6>Base</h6><a class="item" href="'+root+'products/atlas.html"><b>Atlas</b><span>Satellite to 3D model</span></a></div><div><h6>Portals</h6>'+prodItems+'</div><div class="dd-foot"><a href="'+root+'products.html">All products</a> &nbsp;\u00b7&nbsp; <a href="'+root+'apps.html">Mobile apps</a></div></div></li>'
   +'<li><a href="'+root+'how-it-works.html"'+cur('how')+'>How it works</a></li>'
   +'<li><a href="'+root+'about.html"'+cur('about')+'>About</a></li>'
   +'<li><a href="'+root+'contact.html"'+cur('contact')+'>Contact</a></li></ul>'
   +'<div class="hdr-cta"><div class="has-dd" style="position:relative"><button type="button" class="btn sm ghost" aria-haspopup="true" aria-expanded="false" style="border-color:transparent">Log in '+chev+'</button><div class="dd dd-login"><h6>Choose your portal</h6>'+loginRows+'<div class="dd-foot">Not sure which one? <a href="'+root+'index.html#portals">Find your portal</a></div></div></div><a class="btn sm" href="'+root+'demo.html">Request a demo</a></div>'
   +'<button class="burger" id="burger" aria-label="Menu" aria-expanded="false"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button></div>'
   +'<nav class="mnav"><a href="'+root+'products.html">Products</a><div class="sub"><a href="'+root+'products/atlas.html">Atlas</a>'+P.map(function(p){return '<a href="'+root+'products/'+p[4]+'">'+p[0]+'</a>';}).join('')+'</div><a href="'+root+'how-it-works.html">How it works</a><a href="'+root+'about.html">About</a><a href="'+root+'contact.html">Contact</a><div class="mlog"><h6>Log in or sign up</h6>'+P.map(function(p){return '<div class="lrow"><div><b>'+p[0]+'</b></div><div class="lact"><a href="'+p[2]+'">Log in</a><a class="su" href="'+p[3]+'">'+p[5]+'</a></div></div>';}).join('')+'</div><a class="btn" href="'+root+'demo.html">Request a demo</a></nav></header>';
  /* previous / next between product pages */
  (function(){var m=location.pathname.match(/products\/([a-z]+)\.html$/);if(!m)return;
    var O=[['atlas','Atlas','3D roof models from satellite imagery.'],['studio','Studio','Design, BOQ and proposals in one place.'],['go','Go','Tasks, photos and progress from the roof.'],['connect','Connect','Check your roof, compare quotes, track the install.'],['scada','SCADA','Live alerts, and an owner for every one.'],['artha','Artha','Back real solar projects. Early access.']];
    var i=-1;O.forEach(function(o,k){if(o[0]===m[1])i=k;});if(i<0)return;
    var all={h:'../products.html',t:'All products',d:'Atlas and five portals on one data layer.'};
    var pv=i>0?{h:O[i-1][0]+'.html',t:O[i-1][1],d:O[i-1][2]}:all;
    var nx=i<O.length-1?{h:O[i+1][0]+'.html',t:O[i+1][1],d:O[i+1][2]}:all;
    var a='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';
    var el=document.createElement('nav');el.className='pn';el.setAttribute('aria-label','Product navigation');
    el.innerHTML='<a class="pn-p" href="'+pv.h+'"><span class="pn-l">'+a+'<path d="m15 18-6-6 6-6"/></svg>Previous</span><b>'+pv.t+'</b><span>'+pv.d+'</span></a><a class="pn-n" href="'+nx.h+'"><span class="pn-l">Next'+a+'<path d="m9 18 6-6-6-6"/></svg></span><b>'+nx.t+'</b><span>'+nx.d+'</span></a>';
    var mn=document.querySelector('main');if(mn)mn.appendChild(el);})();
  var bd=document.body.dataset,skipCloser={demo:1,legal:1,'404':1}[page]||bd.cta==='none';
  var cta={eb:bd.ctaEyebrow||'Free during beta',t:bd.ctaTitle||'Start with <em>one project.</em>',x:bd.ctaText||'Choose your portal and start today. If you would rather see it first, book a 30-minute walkthrough.',b:bd.ctaBtn||'Choose your portal',bh:bd.ctaHref||(root+'index.html#portals'),l:bd.ctaLink||'Book a demo',lh:bd.ctaLinkHref||(root+'demo.html')};
  var ext=function(u){return /^https?:/.test(u)?' target="_blank" rel="noopener"':'';};
  var closer=skipCloser?'':'<section class="closer" data-whisper="problem"><div class="wrap"><span class="eyebrow">'+cta.eb+'</span><h2>'+cta.t+'</h2><p>'+cta.x+'</p><div class="closer-acts"><a class="btn" href="'+cta.bh+'"'+ext(cta.bh)+'>'+cta.b+'</a><a class="closer-link" href="'+cta.lh+'"'+ext(cta.lh)+'>'+cta.l+'</a></div><div class="closer-micro"><span>Android and iOS apps</span><span>Support Mon\u2013Fri, 9 am\u20135 pm IST</span></div></div></section>';
  var f='<footer class="ftr">'+closer+'<div class="wrap ftr-main"><div class="ftr-cols"><div class="ftr-brand"><a class="logo" href="'+root+'index.html"><img src="'+root+'assets/logos/terranxt.png" alt="Terranxt"></a><p class="ftr-tag">Solar projects, on one platform.</p><address>12A, M3M Urbana Premium<br>Sector 67, Gurugram 122101<br><a href="mailto:support@terranxt.com">support@terranxt.com</a></address><div class="ftr-stores"><a href="#">Google Play</a><a href="#">App Store</a></div><div class="soc"><a href="#" aria-label="LinkedIn"><i data-lucide="linkedin"></i></a><a href="#" aria-label="YouTube"><i data-lucide="youtube"></i></a></div></div>'
   +'<div><h6>Products</h6><ul><li><a href="'+root+'products/atlas.html">Atlas</a></li>'+P.map(function(p){return '<li><a href="'+root+'products/'+p[4]+'">'+p[0]+'</a></li>';}).join('')+'<li><a href="'+root+'apps.html">Apps</a></li></ul></div>'
   +'<div><h6>Company</h6><ul><li><a href="'+root+'about.html">About</a></li><li><a href="'+root+'how-it-works.html">How it works</a></li><li><a href="'+root+'careers.html">Careers</a></li><li><a href="'+root+'investors.html">Investors</a></li><li><a href="https://www.astongreens.com" target="_blank" rel="noopener">Astongreens</a></li></ul></div>'
   +'<div><h6>Support</h6><ul><li><a href="'+root+'contact.html">Contact</a></li><li><a href="'+root+'contact.html#help">Help center</a></li><li><a href="'+root+'demo.html">Request a demo</a></li></ul></div>'
   +'<div><h6>Legal</h6><ul><li><a href="'+root+'privacy.html">Privacy</a></li><li><a href="'+root+'terms.html">Terms</a></li><li><a href="'+root+'cookies.html">Cookies</a></li><li><a href="'+root+'artha-risk.html">Artha risk</a></li></ul></div></div>'
   +'<div class="ftr-base"><span>\u00a9 '+new Date().getFullYear()+' Terranxt Pvt Ltd. A pvNXT company. IIT Delhi\u2013FITT incubated. Backed by Astongreens.</span><span>Artha is in early access. Investments in solar projects carry risk.</span></div></div><div class="ftr-wm" aria-hidden="true"><i class="wm-sun"></i><i class="wm-grid"></i><span class="wm-t">terranxt</span><span class="wm-l">terranxt</span></div></footer>';
  document.getElementById('site-header').outerHTML=h;
  document.getElementById('site-footer').outerHTML=f;
  var hd=document.getElementById('hdr'),b=document.getElementById('burger');
  b.addEventListener('click',function(){var o=hd.classList.toggle('open');b.setAttribute('aria-expanded',o);});
  /* dropdowns: hover (desktop), click, Esc, outside click */
  var dds=[].slice.call(document.querySelectorAll('.has-dd')),timers=new WeakMap();
  function setOpen(el,v){el.classList.toggle('open',v);var bt=el.querySelector('button');if(bt)bt.setAttribute('aria-expanded',v);}
  function closeAll(except){dds.forEach(function(d){if(d!==except)setOpen(d,false);});}
  dds.forEach(function(d){
    d.addEventListener('mouseenter',function(){if(!matchMedia('(hover:hover)').matches)return;clearTimeout(timers.get(d));closeAll(d);setOpen(d,true);});
    d.addEventListener('mouseleave',function(){timers.set(d,setTimeout(function(){setOpen(d,false);},160));});
    d.querySelector('button').addEventListener('click',function(e){e.stopPropagation();var o=!d.classList.contains('open');closeAll(d);setOpen(d,o);});
    d.addEventListener('focusout',function(e){if(!d.contains(e.relatedTarget))setOpen(d,false);});
  });
  document.addEventListener('click',function(e){if(!e.target.closest('.has-dd'))closeAll();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeAll();});
  /* pattern parallax */
  [].forEach.call(document.querySelectorAll('.page-hero,.hero,.closer,.demo-wrap,.prob,.ftr-wm'),function(s){
    s.addEventListener('mousemove',function(e){var r=s.getBoundingClientRect();s.style.setProperty('--mx',(e.clientX-r.left)+'px');s.style.setProperty('--my',(e.clientY-r.top)+'px');});
  });
  var ws=document.createElement('script');ws.src=root+'js/whispers.js';document.body.appendChild(ws);
  if(document.querySelector('[data-stop]')){var hw=document.createElement('script');hw.src=root+'js/hiw.js';document.body.appendChild(hw);}
  var wg=document.createElement('script');wg.src=root+'js/widgets.js';document.body.appendChild(wg);
  var ph=document.createElement('script');ph.src=root+'js/page-hero.js';document.body.appendChild(ph);
  var sk=document.createElement('a');sk.className='skip';sk.href='#main';sk.textContent='Skip to content';document.body.insertBefore(sk,document.body.firstChild);
  var mn=document.querySelector('main');if(mn&&!mn.id){mn.id='main';mn.tabIndex=-1;}
  function icons(){if(window.lucide)window.lucide.createIcons();}
  icons();window.addEventListener('load',icons);
})();
