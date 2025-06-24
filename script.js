
// This Load navbar to all the pages so I dont have to paste nav on every page 
// makes my code clean..
fetch('/components/navigation.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navigation').innerHTML = data;

    // This is for navbar to get mobile responsive
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
      menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
      });
    }
  });

// Load footer on all the pages
fetch('/components/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });



 
