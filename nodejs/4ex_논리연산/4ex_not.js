const log = console.log
// log(!true)
// log(true && true)
// log(true || console.log('내가누구게') && false) // 우선순위 ! > && > ㅣㅣ


 // || 은 true 면 평가를 종료하지만, 거짓이면 다음으로 넘어감

/* 1 */
log(null||13||undefined) // 13
/* 2 */
log(log(7)||13||log(0)) // 7
/* 3 */
log(-1&&null&&true) // null
/* 4 */
log(null||13&&6||2) // 6
/* 5 */