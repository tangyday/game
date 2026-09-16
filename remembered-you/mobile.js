// Keep the full memory illustration explorable without detaching its labels.
(()=>{
 const art=document.querySelector('#memory-art');
 const image=document.querySelector('#memory-image');
 const room=document.querySelector('#room');
 function fitArt(){
  const height=art.clientHeight;
  if(!height)return;
  art.style.setProperty('--memory-art-height',height+'px');
  art.scrollLeft=Math.max(0,(art.scrollWidth-art.clientWidth)/2);
 }
 if('ResizeObserver' in window)new ResizeObserver(fitArt).observe(art);
 else window.addEventListener('resize',fitArt);
 image.addEventListener('load',fitArt);
 room.addEventListener('load',()=>{document.querySelector('.scene-viewport').scrollLeft=0;});
 fitArt();
})();
