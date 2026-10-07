/* Forms + demo booking. Set ODOO endpoints in TX_CONFIG. Empty = front-end only. */
window.TX_CONFIG={
  endpoints:{ demo:'', careers:'', artha:'' } // e.g. 'https://yourodoo.com/website/form/crm.lead'
};
function txSend(kind,data){
  var url=window.TX_CONFIG.endpoints[kind];
  if(!url){console.info('[TX form:'+kind+']',Object.fromEntries(data.entries?data.entries():[]));return Promise.resolve();}
  return fetch(url,{method:'POST',body:data}).then(function(r){if(!r.ok)throw new Error('Send failed');});
}
document.querySelectorAll('form[data-form]').forEach(function(f){
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var fileEl=f.querySelector('input[type=file]');
    if(fileEl&&fileEl.files[0]&&fileEl.files[0].size>5*1024*1024){alert('Please upload a file under 5 MB.');return;}
    var d=new FormData(f);d.append('source_page',location.pathname);
    txSend(f.dataset.form,d).then(function(){
      f.style.display='none';var ok=document.getElementById(f.dataset.ok);if(ok)ok.classList.add('show');
    }).catch(function(){alert('Something went wrong. Please try again or write to support@terranxt.com.');});
  });
});
/* Booking */
(function(){
  var box=document.getElementById('booking');if(!box)return;
  var dEl=document.getElementById('days'),sEl=document.getElementById('slots'),pick=document.getElementById('picked'),form=document.getElementById('demo-form'),sel={d:null,t:null};
  var names=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],mon=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  // IST now
  var ist=new Date(Date.now()+ (330+new Date().getTimezoneOffset())*60000);
  var days=[],c=new Date(ist);c.setHours(0,0,0,0);
  while(days.length<10){var w=c.getDay();if(w>0&&w<6&&(c.toDateString()!==ist.toDateString()||ist.getHours()<16))days.push(new Date(c));c.setDate(c.getDate()+1);}
  days=days.slice(0,10);
  function fmt(d){return names[d.getDay()]+', '+d.getDate()+' '+mon[d.getMonth()];}
  dEl.innerHTML=days.map(function(d,i){return '<button type="button" class="day" data-i="'+i+'"><small>'+names[d.getDay()]+'</small>'+d.getDate()+' '+mon[d.getMonth()]+'</button>';}).join('');
  function slots(d){
    var out=[];for(var m=9*60;m<=16*60+30;m+=30){
      var past=false;if(d.toDateString()===ist.toDateString())past=m<=ist.getHours()*60+ist.getMinutes()+30;
      var h=Math.floor(m/60),mm=m%60,ap=h>=12?'pm':'am',hh=h>12?h-12:h;
      out.push({l:hh+':'+(mm<10?'0':'')+mm+' '+ap,off:past});}
    return out;}
  dEl.addEventListener('click',function(e){var b=e.target.closest('.day');if(!b)return;
    dEl.querySelectorAll('.day').forEach(function(x){x.classList.remove('on');});b.classList.add('on');
    sel.d=days[b.dataset.i];sel.t=null;form.style.display='none';pick.style.display='none';
    sEl.innerHTML=slots(sel.d).map(function(s){return '<button type="button" class="slot"'+(s.off?' disabled':'')+'>'+s.l+'</button>';}).join('');});
  sEl.addEventListener('click',function(e){var b=e.target.closest('.slot');if(!b||b.disabled)return;
    sEl.querySelectorAll('.slot').forEach(function(x){x.classList.remove('on');});b.classList.add('on');sel.t=b.textContent;var hn=document.getElementById('book-hint');if(hn)hn.style.display='none';
    pick.textContent=fmt(sel.d)+' \u00b7 '+sel.t+' IST \u00b7 30 min';pick.style.display='block';form.style.display='flex';
    form.querySelector('[name=slot]').value=fmt(sel.d)+' '+sel.t+' IST';});
  form.style.display='none';pick.style.display='none';
  form.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(form);d.append('source_page',location.pathname);
    txSend('demo',d).then(function(){document.getElementById('book-ui').style.display='none';
      document.getElementById('book-done-when').textContent=fmt(sel.d)+' at '+sel.t+' IST';document.getElementById('book-done').classList.add('show');
    }).catch(function(){alert('Could not book. Please try again or write to support@terranxt.com.');});});
})();
/* Tabs */
document.querySelectorAll('[data-tabs]').forEach(function(t){
  var bs=t.querySelectorAll('.tabs button'),ps=t.querySelectorAll('.panel');
  function go(k){bs.forEach(function(b){b.classList.toggle('on',b.dataset.k===k);});ps.forEach(function(p){p.classList.toggle('on',p.dataset.k===k);});}
  bs.forEach(function(b){b.addEventListener('click',function(){go(b.dataset.k);});});
  go(location.hash.slice(1)||bs[0].dataset.k);
});
