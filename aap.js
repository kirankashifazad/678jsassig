aasingment no 6

var a =10
 document.write ("the value of a is =",a,"<br>","<br>")

 document.write("the value of ++a is",++a,"<br>","now the value of a is",a,"<br>","<br>" )

 document.write("the value of ++a is",a++ ,"<br>","now the value of a is",a,"<br>","<br>" )

document.write("the value of --a is", --a ,"<br>","now the value of a is",a,"<br>","<br>" )

document.write("the value of a-- is", a-- ,"<br>","now the value of a is",a,"<br>","<br>" )



var a =2
var b =1
// var result = --a - --b + ++b + b--;
document.write("a=",--a,"<br>")
document.write ("b value =",--b + ++b + b--,"<br>")
document.write("the result is =",--a - --b + ++b + b--,"<br>")

var userName = prompt ("enter yuor name")
document.write(userName)



var num = +prompt("enter your num")

for(var i=1; i<= 10; 1++){
    document.write(num+ "*" +i+ "=" , num*i, "<br>")
}


var eng = 54
document.write( "eng total mark = 100 ","obtained mark =" ,eng ," percentage",eng/100*100,"%","<br>")
var urdu =54
document.write( "urdu total mark =100 ","obatained mark",urdu ," percentage ",urdu/100*100,"%","<br>")
var math =48
document.write( "math total mark=100 "," obtained mark",math, " percentage ",math/100*100,"<br>")
var ttmarks = 300
document.write (eng + urdu + math)/ttmarks*100




   assigment no 7 





var city = prompt("enter city name")
if (city == "karachi"){
document.write("wellcome to city of light")
}
var gender = prompt("enter your  gender")
if (gender == "male"){
document.write("good morning sir")
}
else if(gender == "female"){
 document.write("good morning mam")
}



var light = prompt("enter light")
if (light == "yellow"){
document.write("ready to move")
}
else if(light == "red"){
 document.write("must stop")
}

else if(light == "green"){
    document.write("move now")
   }


   var fuel = prompt("enter fuel")
if (fuel <= "0.25"){
document.write("please refill the fuel in you rcar")
}


 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}



 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}


 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}


 if("car" < "cat"){
alert("car is smaller than cat")}




var percentage = prompt("enter your percentage")
    if (percentage > 80 && percentage < 101){
      document.write("your grade is A Exellent")
    }
    else if (percentage > 70 && percentage < 80){
      document.write("your grade is B Good")
    }
    else if (percentage > 60 && percentage < 70){
      document.write("your grade is c Good effers")
    }

    else if (percentage > 50 && percentage < 60 ){
      document.write("your grade is very low")
    }
    else {
      document.write ("fail")
    }


    var subject1Marks = +prompt("eng number")
    var subject2Marks = +prompt("urdu number")
    var subject3Marks = +prompt("math number")

    var totalObtainedMarks = (subject1Marks + subject2Marks + subject3Marks);
    var percentage = (totalObtainedMarks / 300) * 100;
       if(percentage > 80 && percentage < 90  ){

      document.write("total marks = ", totalMarks, "<br>", "obtainmarks =", totalObtainedMarks, "<br>", "percentage =",Percentage + percentage.toFixed(2) + "%")
       }





var checkweather = +prompt ("enter your num")
if(weather%3 === 0){
    document .write("the number devivded by 3")
}



var odd = +prompt ("enter your num")
if (odd%2 === 0){
    document.write ("the number is odd")
}
else {
    document.write("this is even num")
}




var temprature = +prompt ("enter your num")
if (temprature > 40 && temprature < 50 ){
    document.write ("it is to hot out side ")
}
else if (temprature > 30 && temprature < 40 ){
    document.write ("it is hot out side ")
}

else if (temprature > 20 && temprature < 30 ){
    document.write ("it is normal ")
}
else if (temprature > 10 && temprature < 20 ){
    document.write (" aj bht thand h ")
}



var guess_num = +prompt ("enter your num")
if (guess_num < 10 && guess_num === 4 ){
     document.write ("bingo u are correct ")
 }
else if(guess_num < 10 && guess_num === 5 ){
 document.write ("close enough to correct answer ")
 }




   assig no 8     /////////////////

var x = +prompt("enter number or charector")
if (x >=65 && x <= 90 ){
    alert ("uper case")
}
else if (x >=97 && x <=122) {
    alert ("lower case")
}
else if (x >=48 && x <=57) {
    alert ("number")
}



var first = +prompt("enter th first num") 
var last = +prompt("enter th last num") 
if (first > last ){
    document.write("first number greter then last number ")
}
else if (last > first){
    document.write("last number greter then first number ")
}

else if (last == first){
    document.write("both numbers are equal ")
}




var putNUm = +prompt("enter th  num") 

if (putNUm > 0 ){
    document.write("positive ")
}
else if (putNUm == 0){
    document.write("Zero ")
}

else if(putNUm < 0){
    document.write("negative ")
}







var vovels = +prompt("enter your vowel") 

if(vovels == "a" || "e" || "i" || "o" || "u" || "A" || "E" || "I" || "O" || "U"){
    document.write("True")

}
else{
   document.write("false")
}


 var password = 123456
 var userPW = +prompt("enter your pssword")
 if (userPW == "" ){
    document.write("please enter your password")
 }
 else if( password == userPW){
    document.write("your pass word is correct ")
 }
 else if( password != userPW){
    document.write("your pass word is incorrect ")
 }


var greeting
var hour = 13;
if (hour < 18) {
    greeting= "Good day";}
else{
    greeting = "Good evening";
}




var time = +prompt ("what time it is now")

if (time>= 0000 && < 1200) {
    alert("good morning")
}
 else if (time>= 1200 && < 1700) {
    alert("good afternoon")
}
 else if (time>= 1700 && < 2100) {
    alert("good evenung")
}
  else if (time>= 2100 && < 2300) {
    alert("good night")
}
