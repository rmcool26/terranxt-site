/* GA4 + Microsoft Clarity, loaded only after consent. Set IDs below. */
window.TX_ANALYTICS={ga4:'G-XXXXXXXXXX',clarity:'XXXXXXXXXX'};
(function(){
  var C=window.TX_ANALYTICS,KEY='tx_consent',q=[];
  window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
  window.txTrack=function(name,params){params=params||{};params.page=location.pathname;
    if(localStorage.getItem(KEY)==='yes'&&C.ga4.indexOf('X')<0)gtag('event',name,params);else console.info('[track]',name,params);};
  function load(){
    if(C.ga4&&C.ga4.indexOf('XXXX')<0){var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+C.ga4;document.head.appendChild(s);gtag('js',new Date());gtag('config',C.ga4,{anonymize_ip:true});}
    if(C.clarity&&C.clarity.indexOf('XXXX')<0){(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,'clarity','script',C.clarity);}
  }
  var st=localStorage.getItem(KEY);
  if(st==='yes')load();
  else if(!st){
    var b=document.createElement('div');b.className='consent';b.setAttribute('role','dialog');b.setAttribute('aria-label','Cookie consent');
    b.innerHTML='<p>We use cookies to see which pages help people, so we can improve the site. <a href="'+(document.body.dataset.root||'')+'cookies.html">Details</a></p><div><button class="btn sm ghost" data-c="no">Decline</button> <button class="btn sm" data-c="yes">Accept</button></div>';
    document.body.appendChild(b);
    b.addEventListener('click',function(e){var c=e.target.dataset&&e.target.dataset.c;if(!c)return;localStorage.setItem(KEY,c);b.remove();if(c==='yes')load();});
  }
  document.addEventListener('click',function(e){
    var a=e.target.closest('a');if(!a)return;var h=a.getAttribute('href')||'';
    if(/pvnxt\.com/.test(h)){var inLogin=a.closest('.dd-login');window.txTrack(inLogin?'portal_login_click':'cta_signup_click',{portal:h.replace('https://','').split('.')[0],section:(a.closest('section')||{}).className||'header'});}
    else if(a.classList.contains('store'))window.txTrack('app_badge_click',{label:a.textContent.trim().replace(/\s+/g,' ')});
    else if(/sample/i.test(a.textContent))window.txTrack('sample_download',{});
  });
  var map={demo:'demo_booked',careers:'resume_submit',artha:'artha_interest_submit',investor:'investor_enquiry_submit',atlas:'atlas_request_submit'};
  document.addEventListener('tx:form',function(e){window.txTrack(map[e.detail]||'form_submit',{});});
  document.addEventListener('tx:event',function(e){window.txTrack(e.detail,{});});
  if(document.body.dataset.page==='home'){var fired=false;window.addEventListener('scroll',function(){if(!fired&&(window.scrollY+innerHeight)/document.documentElement.scrollHeight>.75){fired=true;window.txTrack('scroll_75',{});}},{passive:true});}
})();
