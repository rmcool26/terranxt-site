/* Flashlight whispers: short messages revealed under the cursor in dark sections. Edit the text sets here. */
(function(){
  var SETS={
    problem:{cls:'prob-w',msgs:['Which design is final?','Send the BOQ again','Site photos? Anyone?','quote_v7_final.xlsx','Who owns this alert?','roof_v3_FINAL.dwg','Is this the latest?','Waiting for the proposal']},
    closer:{cls:'cta-w',msgs:['Design approved','BOQ ready','Proposal sent','Installation started','Photos uploaded','Plant online','Alert assigned','One record']}
  };
  var seed=11;function rnd(){seed=(seed*16807)%2147483647;return seed/2147483647;}
  function build(el,key){
    var s=SETS[key];if(!s||el.querySelector('.wsp'))return;
    var l=document.createElement('div');l.className='wsp '+s.cls;l.setAttribute('aria-hidden','true');
    l.innerHTML=s.msgs.map(function(m,i){
      var left=4+(i%3)*31+rnd()*8,top=8+Math.floor(i/3)*32+rnd()*10,rot=key==='problem'?(rnd()*8-4):0;
      return '<span style="left:'+left+'%;top:'+top+'%;transform:rotate('+rot+'deg)">'+m+'</span>';}).join('');
    el.insertBefore(l,el.firstChild);
  }
  [].forEach.call(document.querySelectorAll('[data-whisper]'),function(el){build(el,el.dataset.whisper);});
})();
