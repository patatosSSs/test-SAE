let titre = Object.keys(SAE)
let table = ""
titre.forEach(function(element) 
{
    table = '<a href="pageSAE.html?sae='+element+'"><div class="card"><h3>'+element +'</h3><p>'+ SAE[element]["titre"]+'</p></div></a>   '
    document.querySelector(".grid").innerHTML += table
});


// Fonction easing (accélération/décélération)
    function easeInOutQuad(t) {
      return t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
    }

    // Animation personnalisée
    function smoothScroll(target, duration) {
      const start = window.scrollY;
      const end = target.getBoundingClientRect().top + start;
      const startTime = performance.now();

      function animateScroll(currentTime) {
        const elapsed = (currentTime - startTime) / duration;
        const progress = Math.min(elapsed, 1);
        const easedProgress = easeInOutQuad(progress);

        window.scrollTo(0, start + (end - start) * easedProgress);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      }

      requestAnimationFrame(animateScroll);
    }

    // Appliquer sur tous les liens
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        smoothScroll(target, 1000); // durée = 1000ms
      });
    });