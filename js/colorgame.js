var num=6;
var colors=pickrandomcolors(num);
var pickedcolor=pickcolor();
var coldisplay=document.getElementById("colordisplay");
var message=document.getElementById("messagedisplay");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#newcolor");
var easybutton=document.querySelector("#easy");
var hardbutton=document.querySelector("#hard");
var square=document.querySelectorAll(".square");
resetbutton.addEventListener('click',function(){
    colors=pickrandomcolors(num);
    pickedcolor=pickcolor();
    coldisplay.textContent=pickedcolor;
    for(var i=0;i<colors.length;i++){
        square[i].style.backgroundColor=colors[i];
    }
    this.textContent="New Colors";
    message.textContent="";
    h1.style.backgroundColor="steelblue";
});
easybutton.addEventListener('click',function(){
    easybutton.classList.add("selected");
    hardbutton.classList.remove("selected");
    num=3;
    colors=pickrandomcolors(num);
    pickedcolor=pickcolor();
    coldisplay.textContent=pickedcolor;
    for(var i=0;i<3;i++){
        square[i].style.backgroundColor=colors[i];
    }
  
    for(var i=3;i<6;i++){
        square[i].style.display="none";
    }
    message.textContent="";
    h1.style.backgroundColor="steelblue";
  
})
hardbutton.addEventListener('click',function(){
    hardbutton.classList.add("selected");
    easybutton.classList.remove("selected");
    num=6;
    colors=pickrandomcolors(num);
    pickedcolor=pickcolor();
    coldisplay.textContent=pickedcolor;
    for(var i=0;i<colors.length;i++){
        square[i].style.backgroundColor=colors[i];
        square[i].style.display="block";
    }
    message.textContent="";
    h1.style.backgroundColor="steelblue";
})
coldisplay.textContent=pickedcolor;
for(var i=0;i<square.length;i++){
    square[i].style.backgroundColor=colors[i];
    square[i].addEventListener('click',function(){
        
        if(this.style.backgroundColor===pickedcolor){
            //alert("you win!");
            message.textContent="Correct!";
            changecolors(pickedcolor);
            h1.style.backgroundColor=pickedcolor;
            resetbutton.textContent="Play Again?";
        }
        else{
            //alert("try again!");
            this.style.backgroundColor="darkslategrey";
            message.textContent="Try Again!";
        }
    }
    );
}
function changecolors(color){
    for(var i=0;i<square.length;i++){
        square[i].style.backgroundColor=color;
    }
}
function pickcolor(){
    var i=Math.floor(Math.random()*colors.length);
    return colors[i];
}
function pickrandomcolors(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(randomcolor());
    }
    return arr;
}
function randomcolor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}
