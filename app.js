'use strict'


const a=()=>{

    let b=document.getElementById('txt').value;
    fetch(`http://www.omdbapi.com/?t=${b}&apikey=f1c18dc5`).then((obj)=>{

    return obj.json();
    }).then((mess)=>{

        document.getElementById('t1').innerHTML=mess.Title;
        document.getElementById('t2').innerHTML=mess.Released;
        document.getElementById('t3').innerHTML=mess.Plot;
        document.getElementById('t4').innerHTML=mess.Director;
        const img = document.querySelector("img"); 
img.src = `${mess.Poster}`;        

    }).catch((err)=>{
        document.getElementById('err').innerHTML="error";
        console.log(err);
    })
}

document.getElementById('clc').addEventListener('click',a);