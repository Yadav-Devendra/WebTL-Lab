function add(a,b){
    var result = a+b;
    console.log("Sum = "+result);
}
add(10,10);


function mul(a,b){
    var result = a*b;
    console.log("Product = "+result);
}
mul(10,10);

var dt = Date();
console.log(dt);

var string = "";
var i,j;
for(i=1;i<6;i++){
    for(j=1;j<7-i;j++){
        //process.stdout.write(j+" ");
        string += (j + " ");
    }
    //console.log("");
    string += "\n";
}
console.log(string);