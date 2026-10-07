/* Five doors: hover (desktop), focus, click, arrow keys. Links inside closed doors are not tabbable. */
(function(){
  var doors=[].slice.call(document.querySelectorAll('[data-door]'));if(!doors.length)return;
  var cur=0,hover=window.matchMedia&&matchMedia('(hover:hover) and (min-width:961px)').matches;
  function go(n,focus){cur=n;doors.forEach(function(d,i){var on=i===n;d.classList.toggle('open',on);var b=d.querySelector('.door-hd');b.setAttribute('aria-expanded',on);[].forEach.call(d.querySelectorAll('[data-lk]'),function(l){l.tabIndex=on?0:-1;});if(on&&focus)b.focus();});}
  doors.forEach(function(d,i){
    var b=d.querySelector('.door-hd');
    if(hover)b.addEventListener('mouseenter',function(){go(i);});
    b.addEventListener('focus',function(){go(i);});
    b.addEventListener('click',function(){go(i);});
    b.addEventListener('keydown',function(e){var k=e.key;
      if(k==='ArrowRight'||k==='ArrowDown'){e.preventDefault();go((cur+1)%doors.length,true);}
      if(k==='ArrowLeft'||k==='ArrowUp'){e.preventDefault();go((cur+doors.length-1)%doors.length,true);}});
  });
  go(0);
})();
