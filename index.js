console.log('hi!,everyone');
console.log("i said hi!!")
//lololololo
// let x = 10;
// let y =20;
// let z=x+y ;
// console.log(`the z is ${z} yes as u see`)
// console.log(typeof z)
//   ***************************************************************************************
// let username;
// document.getElementById("submit").onclick = function(){
// username=document.getElementById("namefield").value ;
// console.log(username)
// document.getElementById("h1").textContent = `HI! ${username}`;
// }
//***************************************************************************************** */
// let x ;
// x=window.prompt("enter x");
// console.log(`x is ${x}`);
// x=Number()
// x=x+1;
// console.log(typeof x)
//****************************************************************************************************
let num = 0;
document.getElementById("myp").textContent =num ;

document.getElementById("increaseb").onclick = function inccrease(params) {
    num+=1 ;
    document.getElementById("myp").textContent=num ;
} 

document.getElementById("decreaseb").onclick = function decrease(params) {
    num-=1 ;
    document.getElementById("myp").textContent=num ;
}

document.getElementById("resetb").onclick = function reset(params) {
    num=0 ;
    document.getElementById("myp").textContent = num ;
}