var el = document.querySelectorAll('.hamburger');
for(i=0; i<=el.length; i++) {
  el[i].addEventListener('click', function() {
    this.classList.toggle('active');
  }, false);
}