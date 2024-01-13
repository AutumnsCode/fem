document.addEventListener('DOMContentLoaded', () => {
  (function(){
    let star = document.querySelectorAll('.my-star');
    let i = 0;
    while(i < star.length) {
      star[i].addEventListener('click', function(){
        let currentStar = parseInt(this.getAttribute('data-star'));
        document.querySelector('#output').value = currentStar;

        let previousStar = currentStar; 
        while(1 <= previousStar) {
          if(!document.querySelector('.star-'+previousStar).classList.contains('.is-active')){
            document.querySelector('.star-'+previousStar).classList.add('is-active');
          }
          --previousStar;
        }

        let succ = currentStar+1;
        while(5 >= succ) {
          if(document.querySelector('.star-'+succ).classList.contains('is-active')){
            document.querySelector('.star-'+succ).classList.remove('is-active');
          }
          ++succ
        }
      })
      i++;
    }
  })();
})