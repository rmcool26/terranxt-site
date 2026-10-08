/* How it works: progress rail + spine fill follow the scroll. */
(function(){
  var stops=[].slice.call(document.querySelectorAll('[data-stop]')),links=[].slice.call(document.querySelectorAll('.hiw-rail a')),spine=document.getElementById('spine'),fill=document.getElementById('spine-fill');
  if(!stops.length)return;
  function upd(){
    var mid=window.innerHeight*0.45,cur=0;
    stops.forEach(function(s,i){if(s.getBoundingClientRect().top<mid)cur=i;});
    links.forEach(function(a,i){a.classList.toggle('on',i===cur);a.classList.toggle('done',i<cur);});
    stops.forEach(function(s,i){s.classList.toggle('on',i<=cur);});
    var r=spine.getBoundingClientRect(),h=Math.max(0,Math.min(r.height,mid-r.top));fill.style.height=h+'px';
  }
  window.addEventListener('scroll',upd,{passive:true});window.addEventListener('resize',upd);upd();
})();
