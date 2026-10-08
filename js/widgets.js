/* Page widgets: compare slider, layer chips. */
(function(){
  [].forEach.call(document.querySelectorAll('[data-cmp]'),function(c){
    var r=c.querySelector('.cmp-range');
    function set(v){c.style.setProperty('--pos',v+'%');r.value=v;}
    r.addEventListener('input',function(){set(r.value);});
    if(window.matchMedia&&matchMedia('(hover:hover)').matches){
      c.addEventListener('mousemove',function(e){var b=c.getBoundingClientRect();set(Math.max(4,Math.min(96,Math.round((e.clientX-b.left)/b.width*100))));});
    }
  });
  [].forEach.call(document.querySelectorAll('[data-layers]'),function(w){
    var d=document.getElementById('layer-d');
    [].forEach.call(w.querySelectorAll('.lc'),function(b){b.addEventListener('click',function(){
      [].forEach.call(w.querySelectorAll('.lc'),function(x){x.classList.remove('on');});b.classList.add('on');if(d)d.textContent=b.dataset.d;});});
  });
})();
