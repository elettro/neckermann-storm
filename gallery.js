const box=document.querySelector('.lightbox');
const full=box?.querySelector('img');
const close=()=>{box.classList.remove('open');full.removeAttribute('src');document.body.style.overflow=''};
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{full.src=button.dataset.image;full.alt=button.querySelector('img').alt;box.classList.add('open');document.body.style.overflow='hidden'}));
box?.querySelector('button').addEventListener('click',close);
box?.addEventListener('click',event=>{if(event.target===box)close()});
document.addEventListener('keydown',event=>{if(event.key==='Escape')close()});
