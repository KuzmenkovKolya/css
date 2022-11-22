//переменные

//const lastName ='Kuzmenkov'//string
//let age = 20
//const isdown = true //boolean

//console.log(lastName)

//2 Мутирование

 //const name = prompt('введите имя ')
 //alert(name +' '+ lastName)
 
 //3 операторы
 //let currentYear = 2022
 //const birthYear = 2001
 //const age = currentYear-birthYear
 //console.log(age)
 //const a=11
 //const b=12
 //let c=32
 //c = c + a
 //console.log(a + b)
 //console.log(a - b)
 //console.log(a * b)
 //console.log(a / b)
 //console.log(currentYear++)
 

 //4 типы данных
 //const isProgrammer = true
 //const name = 'kolya'
// const age = 20
// let x
 
 //console.log(typeof isProgrammer)
 //console.log(typeof name)
 //console.log(typeof age)
 //console.log(typeof x)
 //console.log(null)
  

 //5 Приоритет операторов
 //const fullAge = 20
 //const birthYear = 2001
 //const currentYear = 2022
 //const isFullAge = currentYear - birthYear >= fullAge
 //console.log(isFullAge)
 
 
 //6 УСЛОВНЫЕ ОПЕРАТОРЫ 
//const eduacation = 'pending'
 //if (eduacation === 'ready') {
 //   console.log('я мегамозг')

 //}
//else  if (eduacation === 'pending'){
   // console.log('я пытаюсь')
// }

 //const isReady = true
 //if (isReady === true){
  //  console.log('ВСЁ Готво!!!')
 //}
 //else(isReady ===false){
   // console.log('Всё не готово!')
 //}
 //const num1 = 42
 //const num2 = '42'
 //console.log(num1 === num2)


 //7 Булевая Лог
const name = prompt('как вас зовут?')
if ( name === 'Slava'  ) 
    alert('Спасибо что не соврал')
if ( name ==='slava') 
    alert('Спасибо что не соврал')
if (name === 'Слава') alert('Спасибо что не соврал')
if (name === 'Славик') alert('Спасибо что не соврал')
if (name === 'слава') alert('Спасибо что не соврал')
if (name === 'славик') alert('Спасибо что не соврал')
else alert('Врёшь!!!')