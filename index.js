/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let btn=document.getElementById("titu")
let output=document.getElementById("result")
 let p1=document.getElementById("p1")
 let p2=document.getElementById("p2")
 let p3=document.getElementById("p3")
 let ab=output.textContent
 
 btn.addEventListener("click",function(){
     let ab=output.value
     console.log(ab);
     p1.innerHTML=`${ab}  meters = ${ab*3.281} feet | ${ab} feet = ${ab*(1/3.281)} meters`
     p2.innerHTML=`${ab} liters = ${ab*0.264} gallons | ${ab} gallons = ${ab*(1/0.264)} liters`
     p3.innerHTML=`${ab} kilos = ${ab*2.204} pounds | ${ab} pounds = ${ab*(1/2.204)} kilos`
 })
