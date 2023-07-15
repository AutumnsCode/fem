import '../sass/main.scss';

const btn = document.querySelector('#article-btn')
const share = document.querySelector('.article-share');

btn.addEventListener('click', () => {
  const visibility = share.getAttribute('data-visible');
  
  if(visibility === "true") {
    share.setAttribute("data-visible", false);
    btn.setAttribute('aria-expanded', false);
  } else {
    share.setAttribute("data-visible", true);
    btn.setAttribute('aria-expanded', true);
  }

  
})