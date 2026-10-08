/* Global page-hero reveal. Add to any <section class="page-hero">:
   data-reveal="panels|mesh|icons|whispers"   (omit = logo arrows)
   data-whispers="Word one|Word two|..."      (only for whispers)
   data-icons="satellite,building-2,..."      (only for icons; lucide names)
   Content (eyebrow, h1, lead) stays plain HTML. */
(function(){
  var seed=5;function rnd(){seed=(seed*16807)%2147483647;return seed/2147483647;}
  var ICONS='satellite,building-2,hard-hat,house,activity,trending-up,sun,map-pin,file-text,gauge'.split(',');
  var MESH="url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='90' height='78'><g fill='none' stroke='%23069fb1' stroke-width='1'><path d='M0 0L45 39L90 0M0 78L45 39L90 78M45 39V0M0 0V78M90 0V78'/></g></svg>\")";
  function layer(s,type){
    var l=document.createElement('div');l.className='phr phr-'+type;l.setAttribute('aria-hidden','true');
    if(type==='whispers'){
      var w=(s.dataset.whispers||'').split('|').filter(Boolean);
      l.innerHTML=w.map(function(t,i){var left=62+(i%2)*18+rnd()*4,top=10+Math.floor(i/2)*26+rnd()*8;return '<span style="left:'+left+'%;top:'+top+'%">'+t+'</span>';}).join('');
    }
    if(type==='icons'){
      var ic=(s.dataset.icons||'').split(',').filter(Boolean);if(!ic.length)ic=ICONS;
      var h='';for(var r=0;r<7;r++)for(var c=0;c<24;c++)h+='<i data-lucide="'+ic[(r*5+c*3)%ic.length]+'"></i>';
      l.innerHTML=h;
    }
    if(type==='mesh')l.style.backgroundImage=MESH;
    s.insertBefore(l,s.firstChild);
  }
  [].forEach.call(document.querySelectorAll('.page-hero[data-reveal]'),function(s){
    var t=s.dataset.reveal;s.classList.add('has-reveal');layer(s,t);
    if(t==='icons'&&window.lucide)window.lucide.createIcons();
  });
})();
