// let ism = prompt('Ismingizni kiriting')
// let familiya = prompt('Familiyangizni kiriting')
// let tugilganKun = prompt (`Tug'lgan kuningizni kiriting`)
// let yashashJoyi = prompt('Yashash joyingizni kiriting')

// console.log (`Salom ismim ${ism}, familiyam ${familiya}, tug'ilgan kunim ${tugilganKun}, yashash joyim ${yashashJoyi}`)

// for (let i = 0; i < 10; i++) {
//     console.log('Behruz')
// }

// for (i = 0; i < names.length; i++) {
//     let boshi = names[i].charAt().toUpperCase()
//     let davomi = names[i].slice(1).toLowerCase()
//     console.log(boshi + davomi)
// }


// const names = ["Shohrux", "azIMjon", "behRUZ", "muHAMMADjon"];

// let i = 0

// while (i < names.length) {
//     let boshi = names[i].charAt().toUpperCase()
//     let davomi = names[i].slice(1).toLowerCase()
//     console.log(boshi + davomi)
//     i++
// }

// let yosh = prompt('Aniqlash:')
// const armiyaYoshi = 18

// if (armiyaYoshi <= yosh) {
//     alert('Ha siz borasiz !')
// } else {
//     alert('Afsus siz hali yoshsiz !')
// }


// const ism = prompt('Ismingizni kiriting:')

// const boshi = ism.charAt().toUpperCase()
// const davomi = ism.slice(1).toLowerCase()
// const correctIsm = boshi + davomi

// alert(`Salom, ${correctIsm}`)

// let yozuvlar1 = prompt('Aniqlash:')
// const yozuvlarSoni = yozuvlar1.length
// const yozuvlarChegarasi = 30

// if (yozuvlarSoni <= yozuvlarChegarasi) {
//     alert(`Siz ${yozuvlarSoni}ta yozuv kiritdingiz, sizda yana ${yozuvlarChegarasi - yozuvlarSoni} ta yozuv kiritishingiz mumkin.`)
// } else {
//     alert(`Siz ${yozuvlarSoni}ta belgi kiritdiz, siz ${yozuvlarSoni - yozuvlarChegarasi} ta ko'p yozuv kiritdingiz.`)
// }

// const ism = prompt('Kim kerak ?')

// const ismlar = "Behruz, Muhammadjon, Azizbek, Shohrux, Azimjon, Muhammaddiyor, Muhammadaziz"

// const tekshirish = ismlar.includes(ism)

// if (tekshirish) {
//     alert('Bu ism bor')
// } else {
//     alert("Kechirasiz bu ism yo'q ekan")
// }

// function kerak1() {
//     console.log('1) Function decloration')
// }
// kerak1()

// const kerak2 = function() {
//     console.log('2) Function expression')
// }
// kerak2()

// const kerak3 = () => {
//     console.log('3) Arrow function')
// }
// kerak3()

// TDZ = vaqtinchalik o'lik hudud

// let ism = prompt('Ismingizni kiriting:')
// let familiya = prompt('Familyangizni kiriting:')
// let yosh = prompt('Yoshingizni kiriting:')

// let boshi = ism.charAt().toUpperCase()
// let davomi = ism.slice(1).toLowerCase()

// const ismNew = boshi + davomi

// malumot(ismNew, familiya, yosh)

// function malumot(ism, familiya, yosh) {
//     console.log(`Mening ismim ${ism}, familiyam ${familiya}, yoshim ${yosh}da.`)
// }


// const ages = [13, 16, 17, 24, 25]

// for(i = 0; i < ages.length; i++) {
//     console.log(ages[i] + 1)
// } 

// const behaArr = ['Behruz', 'Nurmuhammadov', 13, 'Fergana', "maktab o'quvchisi"]

// const behaObj = {
//     ism: 'Behruz',
//     familiya: 'Nurmuhammadov',
//     yil: 2008,
//     tugilganKun: '13 iyul',
//     yosh: 13,
//     yashashJoyi: "Farg'ona",
//     kasbim: "maktab o'quvchisi",
//     maktabdagiBaho: 4,
//     tillar: ['ingiliz', 'rus', 'uzbek'],
//     haqida: function() {
//         return `Salom mening ismim ${this.ism}, familiyam ${this.familiya}, ${this.yil}da tug'ilganman, tug'ilgan kunim ${this.tugilganKun}da, yoshim esa ${this.yosh}da, yashash joyim ${behaObj.yashashJoyi}da, man hozirda ${this.kasbim} man, maktabdagi bahoyim ${this.maktabdagiBaho}, man 3ta tillarni bilaman ${this.tillar} tillarini, e'tiboringiz uchun raxmat.`
//     }
// }

// console.log(behaObj.haqida())


// const kinolar = [
//     {
//         nomi: '9 rota',
//         yil: 1998,
//         mamlakat: 'Russiya',
//         reyting: 4,
//     },

//     {
//         nomi: 'Avatar',
//         yil: 2007,
//         mamlakat: 'Usa',
//         reyting: 7,
//     },

//     {
//         nomi: 'Forsaj 9',
//         yil: 2019,
//         mamlakat: 'Russiya',
//         reyting: 5,
//     },

//     {
//         nomi: 'Transformerlar',
//         yil: 2000,
//         mamlakat: 'Usa',
//         reyting: 8,
//     },

//     {
//         nomi: 'Kalmar oyini',
//         yil: 2021,
//         mamlakat: 'Korea',
//         reyting: 9,
//     }
// ]

// kinolar.forEach((kino) => {
//     console.log(kino.reyting + 1)
// })

// let result = Math.random() * 5 + 1

// console.log(Math.floor(result))

// const magazingaBor = ['Azizbek', 'Abdumalik', 'Behruz', 'Hamidjon', 'Sarvar']

// const randomNumber = Math.floor(Math.random() * magazingaBor.length)

// console.log(magazingaBor[randomNumber])

// h1.setAttribute('class', 'h1-heading')

// const h1 = document.getElementById('heading')

// h1.classList.add('h1-one')

// h1.classList.remove('h1-class')

// h1.style.fontFamily = 'cursive'
// h1.style.fontStyle = 'italic'
// h1.style.color = '#f63b2d'

// const color = prompt('Rang kiriting:')

// document.querySelector('body').style.background = color
// const h1 = document.getElementById('heading')
// h1.textContent = color

// let raqam = document.querySelector('.bosish')

// raqam.addEventListener('click', function() {
//     const h1 = document.getElementById('heading')
//     h1.textContent = 'You are Ahror'
// })

// const count = document.querySelector('.count')
// const btnPlus = document.querySelector('.btn-plus')
// const btnMinus = document.querySelector('.btn-minus')

// let countValue = 0

// btnPlus.addEventListener('click', function () {
//     countValue++
//     count.textContent = countValue
//     chageColor()
// }) 

// btnMinus.addEventListener('click', function ()  {
//     countValue--
//     count.textContent = countValue
//     chageColor()
// })

// function chageColor() {
//     if (countValue > 0) {
//         count.style.color = 'green'
//     } else if (countValue == 0) {
//         count.style.color = 'black'
//     } else {
//         count.style.color = 'red'
//     }
// }

// const list = document.querySelector('.list')

// const mahsulotlar = ['guruch', 'tuz', "yog'",'un', 'kartoshka']

// mahsulotlar.forEach((mahsulot) => {
//     const li = document.createElement('li')
//     li.classList.add('mahsulot-item')
//     li.textContent = mahsulot

//     list.appendChild(li)
// })

// document.addEventListener('click', (e) => {
//     const item = e.target.classList[0]
  

//     if (item == 'mahsulot-item') {
//         let deleteItem = e.target
//         deleteItem.remove()
//     }
// })


// <li class="todo">
//     <p class="todo-text">Cleaning Rooms
//       <button class="check-btn">
        //         <i class="fas fa-check"></i>
        //       </button>
        //       <button class="trash-btn">
        //         <i class="fas fa-trash"></i>
        //       </button>
        //     </p>
        //   </li>

        
const form = document.querySelector('.form')
const formInput = document.querySelector('.form-input') 
const list = document.querySelector('.todos-list')
        
form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const inputValue = formInput.value

    if(inputValue) {
    const li = document.createElement('li')
    li.classList.add('todo')
    
    const todoText = document.createElement('p')
    todoText.classList.add('todo-text')
    todoText.textContent = inputValue

    const buttonCheck = document.createElement('button')
    buttonCheck.classList.add('check-btn')
    buttonCheck.innerHTML = '<i class="fas fa-check"></i>'

    const buttonTrash = document.createElement('button')
    buttonTrash.classList.add('trash-btn')
    buttonTrash.innerHTML = '<i class="fas fa-trash"></i>'

    li.appendChild(todoText)
    li.appendChild(buttonCheck)
    li.appendChild(buttonTrash)
    list.appendChild(li)

    formInput.value = ''
    } else {
        alert('nimadir kiriting:')
    }
})

document.addEventListener('click', (e) => {
    if (e.target.classList[0] == 'check-btn') {
        const item = e.target.parentElement
        item.classList.toggle('done')
    }
})

document.addEventListener('click', (e) => {
    if (e.target.classList[0] == 'trash-btn') {
        const item = e.target.parentElement
        item.remove()
    }
})