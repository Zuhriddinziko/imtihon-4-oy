// masala 1
// function reverString(str){
//     let res=str.split('')
//     res.reverse();
//     return res;
// }
// let number='5694126'
// console.log(reverString(number))


// masala 2
// == va ===ni farqi ==da faqat qiymatning tengligini tekshiradi === da qiymatni tipi bilan tengligini tekshiradi
// == ga misol
// let num = 9;
// let str ='9'
// let res;
// if(num==str){
//     res='teng';
// }else{
//     res='teng emas';

// }
// console.log(res)

// === ga misol
// if(num===str){
//     res='teng';
// }else{
//     res='teng emas';

// }
// console.log(res)



// masala 3
// let a= +prompt('Raqam kiriting');
// let arr = []
// for(let i =1; i<a; i++){
// arr.push(i)
// }
// console.log(arr)


// masala 4
// function concatArr(arr){
//     let sum1=0;
//     let sum2=0;
//     let res = []
//     for (const iterator of arr) {
//         if(iterator%2==1){
//             sum1+=iterator;
//         }else {
//             sum2+=iterator

//         }
       
        
//     }
//     res.push('toq sonler yegindisi',sum1)
//     res.push('juft sonlar yegindisi',sum2)
//     return res;
// }
// let numbers = [1,2,3,4,5,6,7,8,9];
// console.log(concatArr(numbers))

// masala 5
// function stringPop(str){
//     let res=str.split();
//     let resul = []
//     let a =res.length-1;
//     for(let i=1; i<=a; i++){
//       resul = res.pop()
//     }
//     return resul.join()
// }
// let one = 'salom dostlar';
// console.log(stringPop(one))



// masala 6
// function concatArr(arr1, arr2){
//     let res = arr1.concat(arr2);
//     let sum = 0;
//     for (const iterator of res) {
//         sum+=iterator
//     }
//     return sum
// }
// let a = [1,2,3,4,5,6];
// let b = [9,8,7,6,5,4,3];
// console.log(concatArr(a,b))


// masala 7
// function stringPopShift( str){
//     let res = str.split('');
//     res.pop();
//     res.shift();
//     return res.join('')

// }
// let srtingg = 'bizda hammasi joyida';
// console.log(stringPopShift(srtingg))

// masala 8
// function reverseArr(arr){
//     let res = [];
//     for (const iterator of arr) {
//         res.unshift(iterator)
//     }
//     return res;
// }
// let arre = [12 ,'salom', 56, 'hammasi joyida'];
// console.log(reverseArr(arre))



// masala 9
// function stringpop(str){
//     let res=str.split('');
//     if(res[res.length-1]==0){
//         res.pop()
//     }
//     return res.join('');
// }
// let strings='1234567890'
// console.log(stringpop(strings))


// masala 10
// function letlleElement (arr){
//     res=arr[0];
//     for (const iterator of arr) {
//         if(iterator<res){
//             res=iterator;
//         }
        
//     }
//     return res**4;
// }
// let numbers = [2,5,6,4,7,8,9];
// console.log(letlleElement(numbers))