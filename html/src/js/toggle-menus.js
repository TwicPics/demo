const displayMenu = (menuToDisplay) => {
	menuToDisplay.classList.replace( 'hidden', 'block' );
}

const hideMenu = (menuToHide) => {
	menuToHide.classList.replace( 'block', 'hidden' );
}

const toggleMobileMenu = () => {
	const mobileMenu = document.getElementById('mobile-menu');
	if (mobileMenu.classList.contains('hidden')) {
		displayMenu(mobileMenu);
	} else if (mobileMenu.classList.contains('block')) {
		hideMenu(mobileMenu);
	}
}

const toggleWomenDesktopMenu = () => {
	const menDesktopMenu = document.getElementById('men-desktop-menu');
	if (menDesktopMenu.classList.contains('block')) {
		hideMenu(menDesktopMenu);
	}

	const womenDesktopMenu = document.getElementById('women-desktop-menu');		
	if (womenDesktopMenu.classList.contains('hidden')) {
		displayMenu(womenDesktopMenu);
	} else if (womenDesktopMenu.classList.contains('block')) {
		hideMenu(womenDesktopMenu);
	}
}

const toggleMenDesktopMenu = () => {
	const womenDesktopMenu = document.getElementById('women-desktop-menu');
	if (womenDesktopMenu.classList.contains('block')) {
		hideMenu(womenDesktopMenu);
	}

	const menDesktopMenu = document.getElementById('men-desktop-menu');
	if (menDesktopMenu.classList.contains('hidden')) {
		displayMenu(menDesktopMenu);
	} else if (menDesktopMenu.classList.contains('block')) {
		hideMenu(menDesktopMenu);
	}
}