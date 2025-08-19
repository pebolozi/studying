//헤더 뱃지
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// window.addEventListener('scroll', function () {
//     console.log('scroll!'); //콘솔창에서 scroll!가 뜨면 실행되고 있는거 옆에 숫자는 함수실행 횟수 많아지면 느려질수 있음
// });
//_.throttle 스크롤이벤트시 자주 사용되는 lodash 메소드


window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        //배지 숨기기
        // badgeEl.style.display = 'none'; //1번
        // gsap.to(요소, 지속시간, 옵션); //2번
        gsap.to(badgeEl, .6, {
            opacity:0,
            display: 'none'
        });
        //버튼 보이기!
        gsap.to(toTopEl, .2, {
            x: 0
        });
    } else {
        //배지 보이기
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity:1,
            display: 'block'
        });
        //버튼 숨기기!
        gsap.to(toTopElgit, .2, {
            x: 100
        });
    }
}, 300)); //300 = 0.3초
//_.throttle(함수, 시간)


toTopEl.addEventListener('click', function() {
    gsap.to(window, .7, {
        scrollTo: 0
    });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay:(index + 1) * .7, // 0.7 , 1.4, 2.1, 2.8
        opacity:1
    });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    autoplay: {
        delay: 4000
    },
    loop: true,
    speed: 700,
});

new Swiper('.promotion .swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //     delay:5000
    // },
    speed: 1000,
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자,
        clickable: true, //사용자의 페이지 번호 요소 제어,
    },
    navigation: {
        prevEl: '.promotion .swiper-button-prev',
        nextEl: '.promotion .swiper-button-next'
    }
});
//awards
new Swiper('.awards .swiper', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    speed: 1000,
    navigation: {
        prevEl:'.awards .swiper-button-prev',
        nextEl:'.awards .swiper-button-next'
    }
});



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// const iconEl = document.querySelector('.material-icons'); // 안되는 이유 이경우 document 중 첫번째 .material-icons 만 선택됨
const iconEl = promotionToggleBtn.querySelector('.material-icons'); //.toggle-promotion 내의 .material-icons 선택
let isHidePromotion = false; //밑에 !붙은것의 기본세팅

promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion //!가 붙으면 반대 즉 여기서는 false의 반대인 true
    //isHidePromotion에 반대값을 넣어라 = 즉 지금부터는 isHidePromotiondms true가 되었음
    if (isHidePromotion) {
        //숨김처리!
        promotionEl.classList.add('hide');
        iconEl.textContent = 'download';
    } else {
        //보임 처리!
        promotionEl.classList.remove('hide');
        iconEl.textContent = 'upload';
    }
});



//youtube 애니메이션

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션);
    gsap.to(
        selector, //선택자
        random(1.5, 2.5), //애니메이션 동작 시간
        { //옵션
            y: size,
            repeat: -1, //gsap 라이브러리에서 지원하는 옵션(-1 = 무한반복)
            yoyo: true, //gsap 라이브러리에서 지원하는 옵션
            ease: Power1.easeInOut,
            delay: random(0, delay)
        }
    );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


//scrollmagic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});




