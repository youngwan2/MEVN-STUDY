// const face = Math.random() < 0.7

// const watch = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('이상형 발견!! (❁´◡`❁)')
//         }, 1000)
//     })
// }

// const talk = (num) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // face 가 상위 70 프로 이상 이라면 참, 아니면 거짓
//             if (face) {
//                 resolve(num + '=> 연락처, 내놔🥵')
//             } else {
//                 reject(new Error(num + ' => 으.. 싫다. 😜'))
//             }
//         }, 1000)
//     })
// }

// const take = (seeu) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             setTimeout(() => {
//                 resolve(seeu + '=> 반가웠고, 다시보지 말자. 🙃')
//             })
//         }, 1000)
//     })
// }


// watch()
//     .then((result) => {
//         console.log("탐색:", result)
//     })
//     .catch(take("ㅎ.."))
//     .then(talk('010666'))
//     .then((result) => {
//         console.log("사냥:", result)
//     })


// // watch().then(talk).catch((me) => {
// //     return me + '😥'
// // })
// //     .then(take)
// //     .catch(console.error)


const face = Math.random() < 0.7 // true 가 70% 확률이 됨
      const watch = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve('이상형 발견!!😍😍'), 1500)
        })
      }
      const talk = (num) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (face) {
              resolve(num + '=> 연럭처💌 좀 주세요.💦💟')
            } else {
              reject(new Error(num + '=>.... 바로 철벽!! ❌✋'))
            }
          }, 1500)
        })
      }
      const take = (seeu) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(seeu + '=> 또 만나요!!🙋‍♂️🙋‍♀️'), 1500)
        })
      }
      watch()
        .then(talk)
        .catch((me) => {
          return me + '혼자있고 싶어요.ㅜㅜ'
        })
        .then(take)
        .then(console.log)
        .catch(console.log)