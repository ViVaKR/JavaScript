feather.replace();

const nextEl = document.querySelector("#next");
const previousEl = document.querySelector("#previous");
const sliderEl = document.querySelector("#slider");
const sliderImgs = sliderEl.querySelectorAll("img");
const totalImgs = sliderImgs.length;
let imgWidth;

// ==================  RESPONSIVE SLIDER  ==================
function handleResize() {
    imgWidth = sliderEl.offsetWidth;
}
handleResize();
window.addEventListener("resize", handleResize);

// const loopAutoNext = time => {
//     setInterval(() => {
//         onNextClick();
//     }, time);
// };

// loopAutoNext(9000);

//Defining which ball is active
const toggleBullet = prev => {
    const bullets = document.querySelectorAll(".bullet");
    let nextSlide;

    if (prev) {
        nextSlide = Math.round(sliderEl.scrollLeft) - imgWidth;
    } else {
        nextSlide = Math.round(sliderEl.scrollLeft) + imgWidth;
    }

    let activeBullet = nextSlide / imgWidth;
    bullets.forEach(element => element.classList.remove("active"));
    if (
        Math.round(activeBullet) !== totalImgs &&
        Math.round(activeBullet) !== -1) {
        bullets[Math.round(activeBullet)].classList.add("active");
    } else {
        bullets[0].classList.add("active");
    }
};

const createBullets = index => {
    const btnBullet = document.createElement("button");
    btnBullet.classList.add("bullet");
    btnBullet.setAttribute("onclick", `bulletSlider(${index})`);
    document.querySelector(".bullets-container").appendChild(btnBullet);
};

//Create bullets
if (totalImgs > 0) {
    sliderImgs.forEach((_, index) => createBullets(index));
    document.querySelectorAll(".bullet")[0].classList.add("active");
}

//Click bullet
const bulletSlider = index => {
    const bullets = document.querySelectorAll(".bullet");
    bullets.forEach(element => element.classList.remove("active"));
    sliderEl.scrollLeft = imgWidth * index;
    bullets[index].classList.add("active");
};

//Next Slide ---------------
nextEl.addEventListener("click", onNextClick);
previousEl.addEventListener("click", onPreviousClick);

function onNextClick() {
    sliderEl.scrollLeft += imgWidth;
    //return to beginning
    const sliderFullWidth = sliderEl.scrollWidth;
    const lastSlide = sliderFullWidth - imgWidth;

    toggleBullet(false);

    if (lastSlide == Math.round(sliderEl.scrollLeft)) {
        sliderEl.scrollLeft = 0;
    }
}
//Previous Slide -----------
function onPreviousClick() {
    const imgWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft -= imgWidth;

    toggleBullet(true);
}

// ==================  TOUCH EVENTS  ==================
let startX; // 터치 시작 시의 X 좌표를 저장할 변수
let isDown = false; // 터치가 시작되었는지 여부를 저장할 변수
let originalX = 0; // 터치 시작 시의 원래 X 좌표를 저장할 변수
// 슬라이더의 스크롤 동작을 부드럽게 설정
sliderEl.style.scrollBehavior = 'smooth';

// 터치 시작 이벤트 리스너
sliderEl.addEventListener('touchstart', (e) => {
    sliderEl.classList.add('active'); // 슬라이더에 'active' 클래스를 추가
    isDown = true; // 터치가 시작되었음을 표시
    originalX = e.touches[0].clientX; // 터치 시작 시의 X 좌표를 저장
    startX = e.touches[0].clientX; // 드래그 이동용으로 터치 시작 시의 X 좌표를 저장

});

// 터치 이동 이벤트 리스너
sliderEl.addEventListener('touchmove', (e) => {
    if (!isDown) return; // 터치가 시작되지 않았다면 함수 종료
    e.preventDefault(); // 기본 터치 동작을 방지
    const currentX = e.touches[0].clientX; // 현재 터치 위치의 X 좌표를 가져옴
    const walk = (startX - currentX) * 0.2; // 이동 거리에 비율을 적용하여 계산
    sliderEl.scrollLeft += walk; // 슬라이더를 이동 거리만큼 스크롤
    startX = currentX; // 현재 터치 위치를 새로운 시작 위치로 업데이트
});

// 터치 종료 이벤트 리스너
sliderEl.addEventListener('touchend', (e) => {
    isDown = false; // 터치가 종료되었음을 표시

    const endX = e.changedTouches[0].clientX; // 터치 종료 시의 X 좌표를 가져옴
    const diff = endX - originalX; // 터치 시작과 종료 사이의 X 좌표 차이를 계산
    if (diff > 50) { // 차이가 50보다 크면
        onPreviousClick(); // 이전 슬라이드로 이동
    } else if (diff < -50) { // 차이가 -50보다 작으면
        onNextClick(); // 다음 슬라이드로 이동
    }
    sliderEl.classList.remove('active'); // 슬라이더에서 'active' 클래스를 제거
});
