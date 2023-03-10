const isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
/*let body=document.querySelector('body');
        if(isMobile.any()){
            body.classList.add('touch');
            let arrow=document.querySelectorAll('.arrow');
            for(i=0; i<arrow.length; i++){
                let thisLink=arrow[i].previousElementSibling;
			    let thisArrow=arrow[i];
                let subMenu=arrow[i].nextElementSibling;

                thisLink.classList.add('parent');
                arrow[i].addEventListener('click',function(){
                    thisArrow.classList.toggle('active');
                    subMenu.classList.toggle('open');
                })
            }
        }else{
            body.classList.add('mouse');
        }
*/
/*--------------Для Тачпада----------------------*/
if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
} else {
    document.body.classList.add('_pc');
}

//-------Меню Бургер---------//
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}



//---------Прокрутка при клике---------//
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenulinkClick);
    });

    function onMenulinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
/*--document.querySelector('header').offsetHeight--Шапка---*/

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top:gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}






const icontoggle = document.querySelector('.toggle');
if (icontoggle) {
    icontoggle.addEventListener("click", function(e) {
        document.body.classList.toggle('_activetoggle');
        icontoggle.classList.toggle('_activetoggle');
    });
}
  