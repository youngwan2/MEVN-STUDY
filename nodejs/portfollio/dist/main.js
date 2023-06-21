

let currentPage = 0;
const MAX_PAGE = 3;
const MIN_PAGE = 0;

const menu = ['#intro', '#about', '#projects', '#tech']
const menuLi = document.querySelectorAll('.header_menu >li')
const prev = document.querySelector('.prev');
const main = document.getElementById('main')
const next = document.querySelector('.next');
const sections = document.querySelectorAll('.section');



/* 이전 페이지 */
function switchPrevPage() {
  if (currentPage > MIN_PAGE) currentPage--
  location.href = `${menu[currentPage]}`

  window.scrollTo({ 'top': sections[currentPage].offsetTop, 'behavior': 'smooth' })

  menuFocusing(currentPage)
  classRemoveFunc()

  classAddFunc(currentPage)
  if (currentPage === 0) {
    prev.style.cssText = `
      opacity:0;
      visibility: hidden;
    `
  }
  if (currentPage !== MAX_PAGE) {
    next.style.cssText = `
    opacity:1;
    visibility: visible;
  `
  }
}





// 다음 페이지
function switchNextPage() {
  if (currentPage < MAX_PAGE) currentPage++
  location.href = `${menu[currentPage]}`
  window.scrollTo({ 'top': sections[currentPage].offsetTop })
  menuFocusing(currentPage)
  classRemoveFunc()
  classAddFunc(currentPage)


  if (currentPage === MAX_PAGE) {
    next.style.cssText = `
    opacity:0;
    visibility: hidden;
  `
  }
  if (currentPage !== 0) {
    prev.style.cssText = `
    opacity:1;
    visibility: visible;
  `
  }
}

// 현재 메뉴 포커스
function menuFocusing(currentPage) {
  menuLi.forEach((_, i) => {
    menuLi[i].classList.remove('focus_on')
  })
  menuLi[currentPage].classList.add('focus_on')
}

menuLi.forEach((li, i) => {
  menuFocusing(currentPage)
  li.addEventListener('click', () => {
    currentPage = i
    window.scrollTo({ 'top': sections[currentPage].offsetTop, 'behavior': 'smooth' })
    menuFocusing(currentPage)
    classRemoveFunc()
    classAddFunc(currentPage)
  })
})



function classRemoveFunc() {
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove('appear')
  }
}


sections.forEach((section, i) => {
  console.log(section.offsetTop)
})

// 페이지 애니메이션 적용
function classAddFunc(currentPage) {
  sections[currentPage].classList.add('appear')
}



// 이벤트 리스너
prev.addEventListener('click', switchPrevPage)
next.addEventListener('click', switchNextPage)



window.addEventListener('keyup', (e) => {
  console.log(e.key)

  switch (e.key) {
    case "ArrowRight":
      switchNextPage();
      break;
    case "ArrowLeft":
      switchPrevPage();
  }
})

/* 첫 페이지 로딩 시 페이지 초기화함수 */
menuFocusing(0)
classAddFunc(currentPage)

if (currentPage === 0) {
  prev.style.cssText = `
    opacity:0;
    visibility: hidden;
  `
}