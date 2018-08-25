var score=50;
if(score>60){
    console.log("OK");
} else if(score>40){
    console.log("soso");
} else{
    console.log("NG");
}

// var result=5<2?true:false;
// console.log(result)

var result;
result=2>1?true:false;
console.log(result)

var signal="blue";
switch(signal){
    case"red":
    console.log("stop");
    break;
    case"green":
    case"blue":
    console.log("go");
    break;
    case"yellow":
    console.log("slow down");
    break;
    default:
    console.log("wrong signal");
    break;
}

// var i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

for(var i=0;i<10;i++){
    if(i===5){
        // break;
        continue;
    }
    console.log(i);
}

// alert("年齢確認");
// var answer=confirm("Are you okay?");
// console.log(answer);

// var name=prompt("お名前は？","山田太郎");
// console.log(name);

// function hello(name){
//     console.log("hello "+name);
// }
// hello("Amy");
// hello("Tom");

function hello(name){
    var msg="hello"+name;
    return msg;
}
var greet=hello("mayu");
console.log(greet);

(function Hey(name){
    console.log("hey"+name);
})("TOM");

(function(math){
    var x=10,
        y=20;
    console.log(x+y+math);
})("%off");

var i=0;
function show(){
    console.log(i++);
    var tid=setTimeout(function(){
        show();
    },3000);
    if(i>5){
        clearTimeout(tid);
    }
}
show();

var score=[100,200,300];
console.log(score[1]);

score[2]=400;
console.log(score);

var user={
    email:"mayuko@gmail.com",
    score:88
};
console.log(user.email);

var s=new String("mayukoro");
console.log(s.length);

console.dir(window.outerHeight);
