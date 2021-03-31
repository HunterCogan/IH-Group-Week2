const $ = (e) => {
    return document.querySelector(e);
};

//Transition Handler for mobile nav
const toggleNav = () => {
    let x = $('#mobile-drop');
    if (x.classList.contains('nav-transition')) {
        //x.classList.add('hidden');
        x.style.display = 'none';
        x.classList.remove('nav-transition');
        x.classList.add('mob-nav');
    } else {
        //x.classList.remove('hidden');
        x.style.display = 'flex';
        x.classList.add('nav-transition');
        x.classList.remove('mob-nav');
    }
};

//Sets current page's nav bar text to bold
const checkPage = () => document.title.toLowerCase();

const setAnchorSelected = (page) => {
    let tag = `#${page}`;
    $(tag).style.fontWeight = '600';
};
setAnchorSelected(checkPage());