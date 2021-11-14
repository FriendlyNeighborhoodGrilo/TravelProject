


// hamburger menu =================================
const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile_nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is_active');
		mobile_menu.classList.toggle('is_active');
    });



// fadein navbar =================================

var menu = document.getElementsByTagName("header")
window.onscroll = function () { 

    
    const header = document.querySelector('.header');


    window.onscroll = function(){
        var top = window.scrollY;
        console.log(top)

        if (top >= 120) {
            header.classList.add('headerbg')
        }
      
    }

}
