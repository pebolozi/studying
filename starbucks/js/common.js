
//헤더 input 검색
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
//이렇게 하면 searchEl 안에서 input을 찾음

searchEl.addEventListener('click', function () {
    
    //로직
    searchInputEl.focus();

});
searchInputEl.addEventListener('focus', function () {
   searchEl.classList.add('focused');
   searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
   searchEl.classList.remove('focused');
   searchInputEl.setAttribute('placeholder', '');
});


//footer
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //올해년도