(function(){
  var d=document;d.documentElement.classList.remove('no-js');
  var nav=d.getElementById('nav'),sticky=d.getElementById('sticky'),hero=d.querySelector('.hero');
  function onScroll(){
    var y=window.scrollY||0;
    nav.classList.toggle('is-scrolled',y>30);
    var h=hero?hero.offsetHeight*0.6:400;
    var nearEnd=(window.innerHeight+y)>=(d.documentElement.scrollHeight-260);
    sticky.classList.toggle('is-on',y>h&&!nearEnd);
  }
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  // tabs
  var tabs=d.querySelectorAll('.tab');
  tabs.forEach(function(t){t.addEventListener('click',function(){
    tabs.forEach(function(x){x.classList.remove('is-active');x.setAttribute('aria-selected','false')});
    d.querySelectorAll('.panel').forEach(function(p){p.classList.remove('is-active')});
    t.classList.add('is-active');t.setAttribute('aria-selected','true');
    d.getElementById(t.dataset.tab).classList.add('is-active');
  })});
  // reveal
  var els=d.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('is-in')});return}
  var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px',threshold:.08});
  els.forEach(function(e,i){e.style.transitionDelay=(i%4)*70+'ms';io.observe(e)});
})();
