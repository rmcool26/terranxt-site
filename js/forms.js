/* Forms + demo booking. Set Odoo endpoints in TX_CONFIG. Empty = front-end only. */
window.TX_CONFIG={endpoints:{demo:'',careers:'',artha:'',investor:'', atlas:''}}; // e.g. 'https://yourodoo.com/website/form/crm.lead'
function txSend(kind,data){
  var url=window.TX_CONFIG.endpoints[kind];
  if(!url){console.info('[TX form:'+kind+']',Object.fromEntries(data.entries()));return Promise.resolve();}
  return fetch(url,{method:'POST',body:data}).then(function(r){if(!r.ok)throw new Error('Send failed');});
}
function txEv(n){document.dispatchEvent(new CustomEvent('tx:event',{detail:n}));}
document.querySelectorAll('form[data-form]').forEach(function(f){
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var fe=f.querySelector('input[type=file]');
    if(fe&&fe.files[0]&&fe.files[0].size>5*1024*1024){alert('Please upload a file under 5 MB.');return;}
    var d=new FormData(f);d.append('source_page',location.pathname);
    txSend(f.dataset.form,d).then(function(){
      document.dispatchEvent(new CustomEvent('tx:form',{detail:f.dataset.form}));
      f.style.display='none';var ok=document.getElementById(f.dataset.ok);if(ok)ok.classList.add('show');
    }).catch(function(){alert('Something went wrong. Please try again or write to support@terranxt.com.');});
  });
});
/* Booking */
(function(){
  var box=document.getElementById('booking');if(!box)return;
  var dEl=document.getElementById('days'),sEl=document.getElementById('slots'),chip=document.getElementById('picked'),form=document.getElementById('demo-form'),btn=document.getElementById('book-btn');
  var s1=document.getElementById('st1'),s2=document.getElementById('st2'),s3=document.getElementById('st3'),sel={d:null,t:null};
  var names=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],mon=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var ist=new Date(Date.now()+(330+new Date().getTimezoneOffset())*60000);
  var days=[],c=new Date(ist);c.setHours(0,0,0,0);
  while(days.length<10){var w=c.getDay();if(w>0&&w<6&&(c.toDateString()!==ist.toDateString()||ist.getHours()<16))days.push(new Date(c));c.setDate(c.getDate()+1);}
  function fmt(d){return names[d.getDay()]+', '+d.getDate()+' '+mon[d.getMonth()];}
  dEl.innerHTML=days.map(function(d,i){return '<button type="button" class="day" data-i="'+i+'"><small>'+names[d.getDay()]+'</small>'+d.getDate()+' '+mon[d.getMonth()]+'</button>';}).join('');
  function slots(d){var out=[];for(var m=9*60;m<=16*60+30;m+=30){var past=d.toDateString()===ist.toDateString()&&m<=ist.getHours()*60+ist.getMinutes()+30;var h=Math.floor(m/60),mm=m%60,ap=h>=12?'pm':'am',hh=h>12?h-12:h;out.push({l:hh+':'+(mm<10?'0':'')+mm+' '+ap,off:past});}return out;}
  function step(){s1.className='done';s2.className=sel.t?'done':'on';s3.className=sel.t?'on':'';}
  function reset(){sel.t=null;chip.className='slotchip';chip.innerHTML='<i data-lucide="calendar-clock"></i><span>Pick a time to continue</span>';btn.disabled=true;if(window.lucide)lucide.createIcons();step();}
  function pickDay(i){dEl.querySelectorAll('.day').forEach(function(x){x.classList.toggle('on',x.dataset.i==i);});sel.d=days[i];
    sEl.innerHTML=slots(sel.d).map(function(s){return '<button type="button" class="slot"'+(s.off?' disabled':'')+'>'+s.l+'</button>';}).join('');reset();}
  dEl.addEventListener('click',function(e){var b=e.target.closest('.day');if(!b)return;txEv('demo_date_selected');pickDay(b.dataset.i);});
  sEl.addEventListener('click',function(e){var b=e.target.closest('.slot');if(!b||b.disabled)return;
    sEl.querySelectorAll('.slot').forEach(function(x){x.classList.remove('on');});b.classList.add('on');sel.t=b.textContent;txEv('demo_slot_selected');
    chip.className='slotchip set';chip.innerHTML='<i data-lucide="calendar-check"></i><span>'+fmt(sel.d)+' \u00b7 '+sel.t+' IST \u00b7 30 min</span>';if(window.lucide)lucide.createIcons();
    btn.disabled=false;form.querySelector('[name=slot]').value=fmt(sel.d)+' '+sel.t+' IST';step();});
  form.addEventListener('submit',function(e){e.preventDefault();if(!sel.t)return;var d=new FormData(form);d.append('source_page',location.pathname);
    txSend('demo',d).then(function(){document.dispatchEvent(new CustomEvent('tx:form',{detail:'demo'}));document.getElementById('book-ui').style.display='none';
      document.getElementById('book-done-when').textContent=fmt(sel.d)+' at '+sel.t+' IST';document.getElementById('book-done').classList.add('show');if(window.lucide)lucide.createIcons();window.scrollTo({top:0,behavior:'smooth'});
    }).catch(function(){alert('Could not book. Please try again or write to support@terranxt.com.');});});
  pickDay(0);
})();
/* Tabs */
document.querySelectorAll('[data-tabs]').forEach(function(t){
  var bs=t.querySelectorAll('.tabs button'),ps=t.querySelectorAll('.panel');
  function go(k){bs.forEach(function(b){b.classList.toggle('on',b.dataset.k===k);});ps.forEach(function(p){p.classList.toggle('on',p.dataset.k===k);});}
  var k=location.hash.slice(1),ok=[].some.call(bs,function(b){return b.dataset.k===k;});
  bs.forEach(function(b){b.addEventListener('click',function(){go(b.dataset.k);});});
  go(ok?k:bs[0].dataset.k);
});
