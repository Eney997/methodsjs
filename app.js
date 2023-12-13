//1) //shekreba for of loopit
// const numbers = [1,2,3,4,5]

// let sum = 0
// for(const gela of numbers){         
//     sum+=gela
// }
 
// console.log(sum)





//2)push methodi masivi
// let animals = ['gela','zaza','vashli']

// let newAnimals = animals.push('mze')   //daemateba elementi boloshi
// console.log(animals)





//3)pop methodi masivi
// let animals = ['gela','zaza','vashli']

// let newAnimals = animals.pop('')   //amovardeba bolo elementi
// console.log(animals)





//4)unshift methodi masivi
// let animals = ['gela','zaza','vashli']

// let newAnimals = animals.unshift('mze')  //daamatebs elements tavshi
// console.log(animals)





//5)shift methodi masivi
// let animals = ['gela','zaza','vashli']

// let newAnimals = animals.shift()   //amoagdebs elements tavidan
// console.log(animals)





//6)map methodi
// const numbers = [1,2,3,4,5]

// const newNumbers = numbers.map(numbers => numbers+1)    // yvela elements daemateba +1

// console.log(newNumbers)





//7)for loop
// let xili = ['vashli','msxali','atami','banani']

// for (let i=0;i<xili.length;i++){   //for lopp principi
//     console.log(xili[i])
// }





//7)while loop
// let xili = ['vashli','msxali','atami','banani']

// let i =0
// while (i<xili.length){             //while loop principi da sintaqsi
//     console.log(xili[i])
//     i++
// }



//8)forEach loop
// let sum = 0;
// const numbers = [1,2,3,4,5];
// numbers.forEach(myFunction);

// function myFunction(item,index,arr) {  //sheikribeba yvela
//   arr[index]= item *10;
// }
// console.log(sum)


// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)

// function myFunction(item, index, arr) {    // gamravleba yvela wevri 10ze
//   arr[index] = item * 10;
// }
// console.log(sumnumbers)



//9)for in loop
// const car = {
//     model:'ferari',
//     brand:'la ferari',
//     color:'red',
//     price:100000,
//     year:2012
// }
// for (const prop in car) {
//     console.log(prop)       //dailogeba key wordebi
// }

// for(const prop in car){
//     console.log(car[prop])   //dailogeba valuebi
// }

// for (const prop in (car)){
//     console.log(`tviseba${prop};mnishvneloba${car[prop]}`) yvelaferi ertad dailogeba
// }





// 10)slice method
// let bikes = ['kawasaki','supermoto','ninja']

// let newBikes = bikes.splice (1,0,'veno') 
// console.log(bikes)






// 11) splice method
// let bikes = ['kawasaki','supermoto','ninja']
// let newBikes = bikes.slice(0,1)
// console.log(newBikes)





// 12) fillter method 
// const numbers = [1,23,4321,3211,32,14,56743,432]

// const newNumbers = numbers.filter(ricxvebi =>{
//     return ricxvebi > 21
// })
// console.log(newNumbers)




// 13) reduce method 
// const numbers = [1,2,3,4,5]
// const newNumbers = numbers.reduce((previous,current)=> previous+current,0)  shekrebs esec
// console.log(newNumbers)




// 14)spread operatori
// masivebis da objebis gaertianeba
//masivebze
// const num1 = [1,2,3,4,5]
// const num2 = [6,7,8,9,0]

// const allNum = [...num1,...num2]

// console.log(allNum)
// obieqtebze
// const cars = {
//     saxeli:'ferari',
//     country:'Italy',
// }
// const features = {
//     color:'red',
//     type:'hyper car',
// }
// const everythingTogether = {
//     ...cars,
//     ...features          //ert objshi dailogeba yvela
// }
// console.log(everythingTogether)





//15) js PROMISE asonqronuli funqciebi
// const promise = new Promise((resolve,reject) => {
//     if(1<2){
//         resolve ('succses')
//         return
//     }                           //then da catch icheren ra dzmebs resolves da rejects
//     reject ('error')
// })
// promise.then(result=>console.log(result))
// .catch(error=> console.log(error))





//16) js async await working with promise only
// let promise = new Promise((resolve,reject)=>{
//     const users = ['gela','zaza','sandri']
//     if (false){
//         resolve ('succsess')
//         return 
//     }
//     reject ('ashibka suka')
// })                              //asinc await qvevit imito viyenebt
                                   //try catchs ro eroric davichirot
                                     
// const PrintUser = async()=>{
//     try {
//         const result= await promise
//         console.log(result)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
// PrintUser()




// append in html from js

// function generateDiv(){
//     setInterval(() => {
//        let div = document.createElement('div')
//        div.style.width = '50px'        
//        div.style.height = '50px'        
//        div.style.background = 'purple'        
       
//        document.body.prepend(div)
//     }, 3000);
// }
// generateDiv()






