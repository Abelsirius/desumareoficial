

      const activeHeader = () =>{
        
         let header = document.querySelector('header');
         let pageY  = window.scrollY;

         if( pageY >  0){

          header.classList.add('active');
            
         }
         else{
          header.classList.remove('active');
             
         }

      }

      window.addEventListener('scroll',activeHeader)
      
      
      
      let btnMenu = document.querySelector('.nav_menu_icon');
      let iconMenu = document.querySelector('.ri-menu-line')

      
      const toggleMenu = () =>{
         
        let navMenu = document.querySelector('.nav_menu');

         navMenu.classList.toggle('active');
         
         if(navMenu.classList.contains('active')){
          iconMenu.className ="ri-close-line";
         }else{
          iconMenu.className ="ri-menu-line";

         }
      }

      btnMenu.addEventListener('click',toggleMenu)
      
      
      
      
      
      
      var swiper = new Swiper(".container_swiper",{
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop:true,
        spaceBetween:40,
        coverflowEffect: {
          rotate: 0,
        },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });

      var swiper = new Swiper('.content_about', {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop:true,
        spaceBetween:32,
        coverflowEffect: {
          rotate: 0,
        },
      });
  

          var swiper = new Swiper('.contenedor_view_restaurant', {
      cssMode: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination'
      },
      mousewheel: true,
      keyboard: true,
    });




    /* ----------- Cambiar Page Dark ----------- */


    let iconoTheme = document.querySelector('.ri-moon-line');

    
    const changeTheme = () =>{

      if(iconoTheme.classList.contains('ri-moon-line')){
        iconoTheme.className = 'ri-sun-line';
        document.querySelector('body').classList.add('dark-theme')
      }else{
        iconoTheme.className = 'ri-moon-line';
        document.querySelector('body').classList.remove('dark-theme')
      }
    }


    iconoTheme.addEventListener('click',changeTheme)




    /* ---------------- Scroll Ravel ------------------*/


    const sr = ScrollReveal({
      distance:"50px",
      duration:2500,
      reset:true
  })
  
  sr.reveal(".inicio_data_subtitulo, .titulo_inicio , .contenedor_btn, .about_data, .img_platillos, .contenedor_titulo , .container_swiper, .contenedor_subtitulo , .card_service, .contenedor_view_restaurant,.item-social-media,.inputs-form,.fooster-content-item,.content-terminos-privacidad",{
      origin: "top",
      interval: 100,
  })
  
  
  sr.reveal(".contenedor_redes_sociales, .subscribe__description",{
      origin:"left",
  
  })
  sr.reveal(".about__img-overlay, .video__content, .subscribe__form",{
      origin:"right",
      interval:100,
  
  })


  /* ------------ CloseNav ------------- */ 


  let arrLinks = document.querySelectorAll('.nav_menu li a');
  let arrLinksa = document.querySelectorAll('.nav_menu li a');


  
  const closeNav = (e) =>{
   
     let nav_menu = document.querySelector('.nav_menu');
     nav_menu.classList.remove('active');
   
     let contIcon_menu = document.querySelector('.nav_menu_icon')
     let iconMenu = document.querySelector('.ri-close-line');

     if(window.getComputedStyle(contIcon_menu).display == 'block'){
        iconMenu.className = "ri-menu-line";
     }


  }  


  arrLinks.forEach(link => link.addEventListener('click',(e)=>closeNav(e)))




/* ----------------- Scroll Nav link --------------*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);