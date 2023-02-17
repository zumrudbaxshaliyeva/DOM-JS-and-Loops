// 1)  SWITCH CASE ILE ASHAGIDAKI TELEBLERI ODEYEN FUNCTION YAZIN 

let SET = 'SET_DATA';
let GET = 'GET_DATA'
let DELETE = 'DELETE_DATA'

function dataHandler(type){
switch(type){
    case SET:
        console.log("Setting data ...")
        break;
    case GET:
        console.log("Getting data ...")
        break;
    case DELETE:
        console.log("Deleting data ...")
        break;
        default:
        console.log("Invalid type")
}
}




// *****************************************************************************************************************
// 2) AY-lar dan ibaret arrayi loopa salin ve her ayda nece gun oldugunu switch case ile Ayin adi + gun sayi  ni consola verin  
// Example  'December - 31 days'
// QEYD - FEVRAL OLANDA 28-29 gorunmelidir. mL arrayindan istifade edilmelidir.
let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 mL.forEach(month => {
    switch(month){
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
             console.log(`${month} has 31 days.`)   
        break;
        case 'February':
             console.log(`${month} has 28-29 days`)
        break;
        case 'April':
        case 'June' :
        case 'September':
        case 'November':
            console.log(`${month} has 30 days`)
        break;
        
    }
 });
 //3) Task 2 - deki mentiqi Date() objecti uzerinde ishledin. Hazirda oldugumuz ayi tapin ve gunlerinin sayini gosterin
let now = new Date()
let currentMonths = now.getMonth();
for(let i=0;i<mL.length;i++){
    var month2 = new Date(now.getFullYear(),i,1)
    var daysinMonth = new Date(now.getFullYear(),i+1,0).getDate()
    if(i===currentMonths){
        console.log("Hal-hazirki ay-" + mL[i] +",", "gun sayi-" + daysinMonth)
    }
}





// 2) ad ve soyadinizi yazin ve onlari ashagidaki struktura getirin
// let fullName = 'Murad Nerimanli'

// let result = [
//     ['M' , 'N']
//     ['U' , 'E']
//     ['R' , 'R']
//     ['A' , 'I']
//     ['D' , 'M']
//     ['X' , 'A']
//     ['X' , 'N']
//     ['X' , 'L']
//     ['X' , 'I']
// ]

// Gorunduyu kimi ad ve soyadinizin eyni indexli herflerini bir arraya yigib (Meselen 0ci index-de M ve N var) 
// sonra onlari umumi arraya elave etmelisiz
let fullName = 'Zumrud Baxsaliyeva'
let [firstName,lastName]=fullName.split(' ')
console.log(firstName)
console.log(lastName)
let shortName = firstName.length <= lastName.length ? firstName : lastName;
let longName =firstName.length > lastName.length ? firstName : lastName ;
console.log(shortName)
console.log(longName)
let result =longName.split('').map((char,index) => {
    return [
        char,
        shortName[index]? shortName[index] :'X'
    
    ]  
});
console.log(result)
///////////////////////////////////////////////////////////////////////////////////////////

// 3) 'Ey babeK kebaB ye!' cumlesini loop istifade ederek nida boyuk ve kicik herfler de daxil olmaqla tersine cevirin
// gozlenilen netice  '!ey Babek Kebab yE' - olmalidir

let text ="Ey babeK kebaB ye!"
let reversedText=""
for(let i= text.length-1;i>=0;i--){
reversedText=reversedText+text[i];
}
console.log(reversedText)


// let arr = [3,2,21,12,4,12,4,23,3,23,5,34,35,3,4,234,2,105,24,2,342,34,140,34,23,175,342312,1,2,1,70,21,24,23,24,23,24,2,24,34]
// 4) Looplardan istifade ederek yuxaridaki arrayda hem 5-e hem 7-e eyni zamanda bolunen reqemlerin cemini tapin

let arr = [3,2,21,12,4,12,4,23,3,23,5,34,35,3,4,234,2,105,24,2,342,34,140,34,23,175,342312,1,2,1,70,21,24,23,24,23,24,2,24,34];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 5 === 0 && arr[i] % 7 === 0) {
    sum += arr[i];
  }
}

console.log(sum);
// 5) Looplardan istifade ederek yuxaridaki arrayda en boyuk 3 reqemli cut ededi tapin (biraz cetindir tapmasaniz biryerde baxarg)
let maxThreeD = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 100 && arr[i] < 1000 && arr[i] > maxThreeD) {
    maxThreeD = arr[i];
  }
}

console.log(maxThreeD);













