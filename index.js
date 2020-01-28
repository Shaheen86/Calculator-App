// declaring the variables
var n7=document.getElementById("n7");
var n8=document.getElementById("n8");
var n9=document.getElementById("n9");
var plus=document.getElementById("plus");
var n4=document.getElementById("n4");
var n5=document.getElementById("n5");
var n6=document.getElementById("n6");
var minus=document.getElementById("minus");
var n1=document.getElementById("n1");
var n2=document.getElementById("n2");
var n3=document.getElementById("n3");
var mul=document.getElementById("mul");
var clear=document.getElementById("clear");
var zero=document.getElementById("zero");
var equal=document.getElementById("equal");
var divi=document.getElementById("divi");
var input=document.getElementById("inputbox");

// displaying the values on input text field
n7.addEventListener('click',function(){
  input.value =input.value+n7.innerHTML;
});
n8.addEventListener('click',function(){
  input.value =input.value+n8.innerHTML;
});
n9.addEventListener('click',function(){
  input.value =input.value+n9.innerHTML;
});
plus.addEventListener('click',function(){
  input.value =input.value+plus.innerHTML;
});
n4.addEventListener('click',function(){
  input.value =input.value+n4.innerHTML;
});
n5.addEventListener('click',function(){
  input.value =input.value+n5.innerHTML;
});
n6.addEventListener('click',function(){
  input.value =input.value+n6.innerHTML;
});
minus.addEventListener('click',function(){
  input.value =input.value+minus.innerHTML;
});
n1.addEventListener('click',function(){
  input.value =input.value+n1.innerHTML;
});
n2.addEventListener('click',function(){
  input.value =input.value+n2.innerHTML;
});
n3.addEventListener('click',function(){
  input.value =input.value+n3.innerHTML;
});
mul.addEventListener('click',function(){
  input.value =input.value+mul.innerHTML;
});
clear.addEventListener('click',function(){
  input.value =" ";
});
zero.addEventListener('click',function(){
  input.value =input.value+zero.innerHTML;
});
equal.addEventListener('click',function(){
  input.value =eval(input.value);
});

divi.addEventListener('click',function(){
  input.value =input.value+divi.innerHTML;
});
// Evaluating the entered values
document.body.addEventListener('keyup',function(e){ 
  //   where e is the event
  var keycode = e.keyCode;
  if(keycode === 13){
    input.value = eval(input.value);
  }
  if(keycode>=65&&keycode<=90){
    alert("Please Enter the valid input.....");
  }
});