function add(a,b){
    return a+b;
}
console.log(process.argv);
var args=process.argv.slice(2);
console.log('Addition of two numbers: ', add(parseInt(args[0]), parseInt(args[1])));