import Swiper from 'swiper';
// import 'swiper/swiper.css';
import 'swiper/css';
import { supporters } from './support-fonds';

const swiperOptions = {
  direction: 'vertical',
  navigation: {
    nextEl: '.swiper-button-next',
  },
  rewind: true,
  allowTouchMove: false,
  spaceBetween: 20,
  slidesPerView: 'auto',
  slidesPerGroup: 4,
  breakpoints: {
    768: {
      slidesPerGroup: 6,
    },
  },
};

const swiper = new Swiper('.swiper', swiperOptions);

const refs = {
  nextBtn: document.querySelector('.swiper-button-next'),
  list: document.querySelector('.swiper-wrapper'),
  btn: document.querySelector('.supporters__btn'),
};

const markup = supporters
  .map(
    (el, index) =>
      `<div class ="supporters__item swiper-slide">
      <span class="supporters__number">
      ${(index + 1).toString().padStart(2, '0')}
        </span>
        <a href = "${el.url}" title = "${
        el.title
      }" target='_blank' rel="noopener noreferrer nofollow" aria-label="Link to support fond">
      <img src = "${el.img}" class="supporters__img" srcset="${el.img} 1x, ${
        el.imgRetinaTwo
      } 2x, ${el.imgRetinaThree} 3x" alt = "${el.title} logo"/>
      </a>
      </div>`
  )
  .join('');

refs.list.innerHTML = markup;

toggleBtn();

addEventListener('resize', toggleBtn);

function onBtnClick() {
  swiper.slideNext();
  if (swiper.isBeginning || swiper.isEnd) {
    rotateBtn();
  }
}
function toggleBtn() {
  const isHidden = refs.btn.classList.contains('hidden');
  if (supporters.length > swiper.params.slidesPerGroup) {
    if (isHidden) {
      refs.btn.classList.remove('hidden');
    }
    refs.nextBtn.addEventListener('click', onBtnClick);
  } else {
    if (!isHidden) {
      refs.btn.classList.add('hidden');
    }
  }
}

function rotateBtn() {
  refs.btn.classList.toggle('supporters__btn--up');
}