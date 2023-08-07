 function feetToInch(a){
    const c  = a*12;
    const r =(c.toFixed(2));
    return r;

}
const pr = feetToInch(100);
console.log("Total inch is  :",pr);


 // Centemeter to meter

 

  function centimeterToMeter(a){
    const pp = a /100;
    const rs = pp.toFixed(2);
    return rs;
}
const vs = centimeterToMeter(1);
console.log("Total Meter is  :",vs);


 

 

 
function paperRequirMents(b1,b2,b3){
    var a = b1 *100;
    var b = b2*200;
    var c = b3*300;
    var d = a + b+c;
    return d;
}
const p = paperRequirMents(50,10,3);
console.log("Total paper required is :",p , "page");


 
 //rearrange the string

 const arrayes = ['rajob','kobir','josimuddinkhanemulla','khalada','rashadulislam'];
function bestFriend (a){
    const p = arrayes.sort((a,b)=>b.length-a.length);
    var r = p[0];
    return r;
}
const dd = bestFriend(arrayes);
console.log("The largest element is  :",dd); 


// break condition 
 
const arraye = [15,20,45,-85,0,40,-52,10];

function onlyPositive(p){
    for(i=0;i<p.length;i++){
        const r = (p[i]);
        if(r<0){
            break;
        }else{
        
            console.log(r);
         
        }
    }
}
onlyPositive(arraye); 

//while loop 



const array = [5,2,10,40,-50];

function onlyPositive(a){
    let i = 0;
    while(i<a.length){
        const pr = a[i];
        if(pr<0){
            break;
        }else{
            console.log(pr);
           

        }
        
        i++;
    }
}onlyPositive(array); 