let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("pa_forum");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "grid";
  dots[slideIndex-1].className += " active";
}

  const tabLinks = document.querySelectorAll('.tab-link');
  tabLinks.forEach((link) => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const tabId = link.getAttribute('data-tab');

      for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
      }
      const tabContentToShow = document.querySelector('.tab-' + tabId);
      tabContentToShow.style.display = 'contents';

      tabLinks.forEach((tabLink) => {
        tabLink.classList.remove('active');
      });
      link.classList.add('active');
    });
  });



var button = document.getElementById('patoggleButton');
var container = document.querySelector('.collapsingpa');

var previousState = localStorage.getItem('paContainerState');
if (previousState) {
  container.style.gridTemplateRows = previousState;
  updateButtonState();
}

button.addEventListener('click', function() {
  if (container.style.gridTemplateRows === '0fr') {
    container.style.gridTemplateRows = '1fr';
  } else {
    container.style.gridTemplateRows = '0fr';
  }
  updateButtonState();

  localStorage.setItem('paContainerState', container.style.gridTemplateRows);
});

function updateButtonState() {
  if (container.style.gridTemplateRows === '0fr') {
    button.style.color = '#1E1E1E';
    button.style.background = 'var(--neutralDarker)';
    button.textContent = "Révéler la page d'accueil";
  } else {
    button.style.color = 'var(--neutralDarker)';
    button.style.background = '#1E1E1E';
    button.textContent = "Cacher la page d'accueil";
  }
};

function isElementInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function handleScroll() {
      var gridcats = document.querySelectorAll('.gridcat');
      for (var i = 0; i < gridcats.length; i++) {
        var gridcat = gridcats[i];
        var hiddenDiv = gridcat.querySelector('.hidden');
        if (isElementInViewport(gridcat)) {
          gridcat.classList.add('fade-in');
          hiddenDiv.classList.add('fade-in');
        }
      }
    }

    window.addEventListener('scroll', handleScroll);

    window.addEventListener('DOMContentLoaded', (event) => {

      var categoryElement = document.querySelector('#c4.category');

      var guidebookElement = document.createElement('div');
      guidebookElement.className = 'guidebookcat';


      var spanElement = document.createElement('span');
      spanElement.textContent = 'guide de jeu';
      var pElement = document.createElement('p');
      pElement.textContent = 'tous les sujets nécessaires à la bonne compréhension du contexte et du système de jeu.';
      var linkContainer = document.createElement('span');
      var link1 = document.createElement('a');
      link1.textContent = 'lien 1';
      var link2 = document.createElement('a');
      link2.textContent = 'lien 2';
      var link3 = document.createElement('a');
      link3.textContent = 'lien 3';
      var link4 = document.createElement('a');
      link4.textContent = 'lien 4';
      linkContainer.appendChild(link1);
      linkContainer.appendChild(link2);
      linkContainer.appendChild(link3);
      linkContainer.appendChild(document.createElement('br'));
      linkContainer.appendChild(link4);
      guidebookElement.appendChild(spanElement);
      guidebookElement.appendChild(pElement);
      guidebookElement.appendChild(linkContainer);
      var cateTitleElement = categoryElement.querySelector('.cate_title');
      cateTitleElement.parentNode.insertBefore(guidebookElement, cateTitleElement.nextSibling);
    });


  const wombatContainer = document.getElementById("wombat");
  const lateProfile = document.getElementById("lateprofile");
  let wombatPropertiesChanged = false;

  function toggleWombatProperties() {
    if (wombatPropertiesChanged) {
      wombatContainer.style.opacity = "0";
      wombatContainer.style.visibility = "hidden";
      wombatContainer.style.marginLeft = "-1034px";
      wombatContainer.style.marginTop = "100px";
    } else {
      wombatContainer.style.opacity = "1";
      wombatContainer.style.visibility = "visible";
      wombatContainer.style.marginLeft = "734px";
      wombatContainer.style.marginTop = "100px";
    }

    wombatPropertiesChanged = !wombatPropertiesChanged;
  }

  lateProfile.addEventListener("click", toggleWombatProperties);
