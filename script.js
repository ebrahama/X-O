// color tog
// for p1 page
const x = document.getElementById('v');
const o = document.getElementById('u');
const s = document.getElementById('smo');

x.addEventListener('click' , ()=>{

    if( x.style.background = "#1a2a33" ){
       x.style.background = "#a8bfc9" 
        x.style.color = "#1a2a33" 
        o.style.background = "#1a2a33" 
        o.style.color = "#a8bfc9"    
        s.textContent = "x"
    }
    else if( x.style.background = "#a8bfc9"){
        x.style.background = "#1a2a33" 
        x.style.color = "#a8bfc9" 
        o.style.background = "#a8bfc9" 
        o.style.color = "#1a2a33" 
        s.textContent = "o"
    }
});
o.addEventListener('click' , ()=>{

    if( o.style.background = "#1a2a33" ){
       o.style.background = "#a8bfc9" 
        o.style.color = "#1a2a33" 
        x.style.background = "#1a2a33" 
        x.style.color = "#a8bfc9" 
        s.textContent = "o"
    }
    else if( o.style.background = "#a8bfc9"){
        o.style.background = "#1a2a33" 
        o.style.color = "#a8bfc9" 
        x.style.background = "#a8bfc9" 
        x.style.color = "#1a2a33" 
        s.textContent = "x"
    }

});


// st gam

//btn newgame vs player
const ngp = document.getElementById('b');
//sta page 1
const p1 = document.querySelector('.sta');
//ingam page 2
const p2 = document.querySelector('.pla');

ngp.addEventListener('click' , ()=>{

   p1.style.display = "none"
   p2.style.display = "block"

});


//pop mes + res

const re = document.getElementById('resta');

const pop = document.querySelector('.pop');


const no = document.getElementById('nc');
const yes = document.getElementById('yr');


re.addEventListener('click' , ()=>{

    pop.style.display = "block"
 
 });



 no.addEventListener('click' , ()=>{
    pop.style.display = "none"
 });












