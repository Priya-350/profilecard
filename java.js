const check=document.getElementById("check");
const ht=document.getElementById("ht");
const ms=document.getElementById("ms");
const sh=document.getElementById("sh");
const cd1=document.getElementById("cd1");


function checked(){
    document.body.classList.toggle("ch");
    if(document.body.classList.contains("ch")){
       ht.src="images/heart.png";
       ms.src="images/message.png";
       sh.src="images/share (1).png";
    }
    else{
        ht.src="images/heart-regular-24.png";
       ms.src="images/bx-message-rounded.svg";
       sh.src="images/bx-share.svg"

    }

   
}



