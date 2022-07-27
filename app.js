'use strict'


const a=()=>{

    let b=document.getElementById('txt').value;
    fetch(`http://www.omdbapi.com/?t=${b}&apikey=f1c18dc5`).then((obj)=>{

    return obj.json();
    }).then((mess)=>{

        document.getElementById('tit').innerHTML=mess.Title;
        document.getElementById('date').innerHTML=mess.Released
    }).catch((err)=>{
        document.getElementById('err').innerHTML="error";
    })
}

document.getElementById('clc').addEventListener('click',a);