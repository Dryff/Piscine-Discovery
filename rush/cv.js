
const scrollLinks = document.querySelectorAll('.scroll-link a');

// Ajoutez un écouteur d'événement de clic à chaque élément de navigation
scrollLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du clic sur le lien

    const targetId = link.getAttribute('href'); // Récupère l'ID de l'élément cible
    console.log(targetId);
    if (targetId == "#accueil") {
      window.location.href = "Accueil.html"
      return;
    }
    const targetElement = document.querySelector(targetId); // Sélectionne l'élément cible

    // Effectuez le défilement en douceur vers l'élément cible avec une animation
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

  var image1 = document.getElementById('img1');
    var image2 = document.getElementById('img2');

    var bluertxt = document.getElementById('bluer');
    var redatxt = document.getElementById('reda');

    image1.addEventListener('click', function() {
        showBlue();
    });

    image2.addEventListener('click', function() {
        showRed();
    });

    function showRed(){
      window.location.href = "cv_reda.html";
    };
    
    function showBlue() {
      window.location.href = "cv_bluer.html";
    };

