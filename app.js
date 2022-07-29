'use strict'


const a=()=>{

    let b=document.getElementById('txt').value;
    fetch(`http://www.omdbapi.com/?t=${b}&apikey=f1c18dc5`).then((obj)=>{

    return obj.json();
    }).then((mess)=>{

        // document.getElementById('s1').innerHTML=mess.Title;
        document.getElementById('s1').innerHTML=mess.Released
    }).catch((err)=>{
        // document.getElementById('err').innerHTML="error";
        console.log(err);
    })
}

document.getElementById('clc').addEventListener('click',a);