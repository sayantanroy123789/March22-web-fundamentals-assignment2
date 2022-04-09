const x=10;
const y=20;
const z=30;
let largest;
if(x>=y && x>=z){
    largest=x;
}
else if(y>=x && y>=z){
    largest=y;
}

else{
    largest=z;
}
console.log(largest)