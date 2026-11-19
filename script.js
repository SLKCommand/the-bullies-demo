// Mobile nav
const toggle=document.querySelector('.nav-toggle'),nav=document.getElementById('nav');
toggle.addEventListener('click',()=>{const o=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',o)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
// Reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// Quiz
const ans=document.querySelector('.answer'),again=document.querySelector('.try-again');
document.querySelectorAll('.choice').forEach(b=>b.addEventListener('click',()=>{
  if(b.dataset.correct==='true'){b.classList.add('right');ans.hidden=false;again.hidden=true;}
  else{b.classList.remove('wrong');void b.offsetWidth;b.classList.add('wrong');again.hidden=false;}
}));
// Page lightbox
document.querySelectorAll('.pages img').forEach(img=>img.addEventListener('click',()=>{
  const lb=document.createElement('div');lb.className='lightbox';lb.innerHTML='<img src="'+img.src+'" alt="'+img.alt+'">';
  lb.addEventListener('click',()=>lb.remove());document.body.appendChild(lb);
}));
// Click tracking hook: buy links carry data-track names. Hook up an analytics tool here (e.g. GoatCounter or Google Analytics) for the live site.
document.querySelectorAll('.track').forEach(a=>a.addEventListener('click',()=>{
  if(window.goatcounter&&window.goatcounter.count){window.goatcounter.count({path:'click-'+a.dataset.track,event:true});}
}));
