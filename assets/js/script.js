var tablinks = document.getElementsByClassName('tab-links');
    var tabcontents = document.getElementsByClassName('tab-contents');

    function opentab(tabname) {
      for(tablink of tablinks) {
        tablink.classList.remove('active-link');
      }
      for(tabcontent of tabcontents) {
        tabcontent.classList.remove('acitve-tab');
      }
      event.currentTarget.classList.add('active-link');
      document.getElementById(tabname).classList.add('acitve-tab');
    }

    
    const sideMenu = document.getElementById('sidemenu');

    function openMenu() {
      sideMenu.style.right = '0';
    }

    function closeMenu() {
      sideMenu.style.right = '-200px';
    };


   function fadeOut() {
    const body = document.body;
    const fadeOutElement = document.querySelector('.go-to-home-btn');
    body.addEventListener('mouseleave', () => {
      fadeOutElement.style.opacity = 0;
    });

    body.addEventListener('mouseenter', () => {
      fadeOutElement.style.opacity = 1
    });
   }
   fadeOut();