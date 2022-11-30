let num = 13; 
let count=0; 

for(let i=1; i<=num; i++ ){
    if(num%1==0){
        count++;
    }
}

if(count==2){
    console.log(num+"-"+"is Prime Number");
} else {
    console.log(num+"-"+"is Not a Prime Number")
}