/* Sun-path hero: mouse left to right moves the sun through a day. Idle = slow auto drift. */
(function(){
  var h=document.querySelector('[data-sun]');if(!h)return;
  var bump=function(v,c,w){return Math.max(0,1-Math.abs(v-c)/w);},q=function(s){return h.querySelector(s);};
  var rows=[0,1,2,3].map(function(i){return q('[data-row="'+i+'"]');});
  var steps=['Atlas \u00b7 scanning the roof','Studio \u00b7 design and BOQ','Go \u00b7 installing on site','SCADA \u00b7 monitoring the plant'];
  var t=0.45,last=0,reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  function set(k,v){h.style.setProperty(k,v);}
  function apply(t){
    var hr=4.5+t*16.5,dawn=bump(hr,6.4,1.7),day=Math.min(1,bump(hr,12.4,5.6)*1.6),dusk=bump(hr,18.6,1.7),elev=Math.sin(Math.PI*(hr-5.8)/13.6);
    set('--x',(t*100)+'%');set('--dawn',dawn.toFixed(2));set('--day',day.toFixed(2));set('--dusk',dusk.toFixed(2));
    set('--night',Math.max(0,1-Math.max(dawn,day,dusk)*1.3).toFixed(2));
    set('--sx',(10+t*80)+'%');set('--sy',(82-Math.max(elev,-0.15)*62)+'%');
    set('--sun',elev>-0.12?Math.min(1,(elev+0.12)*6).toFixed(2):0);set('--shine',Math.max(0,Math.min(1,elev*1.4)).toFixed(2));
    var m=Math.round(hr*60),hh=Math.floor(m/60)%24,mm=m%60,ap=hh>=12?'pm':'am',h12=hh%12===0?12:hh%12;
    q('[data-time]').textContent=h12+':'+(mm<10?'0':'')+mm+' '+ap;
    q('[data-phase]').textContent=hr<5.6||hr>19.6?'Night':hr<7.4?'Sunrise':hr<17?'Daytime':'Sunset';
    var a=hr<6.2?3:hr<9?0:hr<12?1:hr<16?2:3;
    rows.forEach(function(r,i){r.style.opacity=i===a?1:0.4;r.style.background=i===a?'rgba(127,216,228,.14)':'transparent';});
    var s=q('[data-stage]');if(s)s.textContent=steps[a];
  }
  apply(t);
  h.addEventListener('mousemove',function(e){var r=h.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;t=Math.min(1,Math.max(0,x/r.width));set('--mx',x+'px');set('--my',y+'px');last=performance.now();apply(t);});
  (function tick(now){if(!reduce&&now-last>2500){t=(t+0.0008)%1;apply(t);}requestAnimationFrame(tick);})(0);
})();
