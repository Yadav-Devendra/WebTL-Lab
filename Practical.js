var dt = Date();
//console.log(dt);



function Pattern(){
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
}

Pattern();

var os = require('os');
console.log("Platform: "+os.platform());
console.log("Architecture: "+os.arch());
console.log("OS Type: "+os.type);
console.log("OS Release: "+os.release());
console.log("OS Uptime: "+os.uptime());
console.log("OS Total Memory: "+os.totalmem());
console.log("OS Free Memory: "+os.freemem());
console.log("OS CPU Count: "+os.cpus().length);
console.log("OS CPU Model: "+os.cpus()[0].model);
console.log("OS CPU Speed: "+os.cpus()[0].speed);
console.log("OS CPU Load Average: "+os.loadavg());
console.log("OS Network Interfaces: "+os.networkInterfaces());
console.log("OS EOL: "+os.EOL);
console.log("OS Endianness: "+os.endianness());
console.log("OS Hostname: "+os.hostname());
console.log("Default directory: "+os.tmpdir());
console.log("User Info: "+os.userInfo());

/*
setInterval(function A(){
    return console.log('Hello');
},500);

var si = setInterval(function A(){
    return console.log("Hello");
},500);


setTimeout(function(){
    console.log("Executed 10 times");
    clearInterval(si);
},5500);
*/

setTimeout(function A(){
    return console.log('Hello World');
},500);

console.log('Executed before');
