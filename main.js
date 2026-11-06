
new Swiper('.mySwiper',{loop:true,autoplay:{delay:3000,disableOnInteraction:false},pagination:{el:'.swiper-pagination',clickable:true},effect:'fade',fadeEffect:{crossFade:true},speed:800});
function openPopup(){document.getElementById('popup').style.display='block'}
function closePopup(){document.getElementById('popup').style.display='none'}
function sendVisit(){let n=document.getElementById('pName').value,p=document.getElementById('pPhone').value,l=document.getElementById('pLocation').value,t=document.getElementById('pType').value;window.open("https://wa.me/234803073941?text="+encodeURIComponent("Hello VPR & AiE, I want SITE VISIT. Name: "+n+" Phone: "+p+" Location: "+l+" Work: "+t))}
function sendQuote(){let n=document.getElementById('qName').value,p=document.getElementById('qPhone').value,l=document.getElementById('qLoc').value,t=document.getElementById('qType').value,m=document.getElementById('qMsg').value;window.open("https://wa.me/234803073941?text="+encodeURIComponent("Hello VPR & AiE, NEW QUOTE. Name: "+n+" Phone: "+p+" Location: "+l+" Type: "+t+" Details: "+m))}
// Scroll reveal
window.addEventListener('scroll',()=>{document.querySelectorAll('.reveal').forEach(el=>{if(el.getBoundingClientRect().top < window.innerHeight-100){el.classList.add('active')}})});
window.dispatchEvent(new Event('scroll'));
