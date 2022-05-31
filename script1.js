// color tog
// for p1 page
const x = document.getElementById('v');
const o = document.getElementById('u');
const s = document.getElementById('smo');
const sg = document.querySelector('.ot');

x.addEventListener('click' , ()=>{

    if( x.style.background = "#1a2a33" ){
       x.style.background = "#a8bfc9" 
        x.style.color = "#1a2a33" 
        o.style.background = "#1a2a33" 
        o.style.color = "#a8bfc9"    
        s.textContent = "X"
    }
    else if( x.style.background = "#a8bfc9"){
        x.style.background = "#1a2a33" 
        x.style.color = "#a8bfc9" 
        o.style.background = "#a8bfc9" 
        o.style.color = "#1a2a33" 
        s.textContent = "O"
    }

     sg.textContent = s.textContent;
});
o.addEventListener('click' , ()=>{

    if( o.style.background = "#1a2a33" ){
       o.style.background = "#a8bfc9" 
        o.style.color = "#1a2a33" 
        x.style.background = "#1a2a33" 
        x.style.color = "#a8bfc9" 
        s.textContent = "O"
    }
    else if( o.style.background = "#a8bfc9"){
        o.style.background = "#1a2a33" 
        o.style.color = "#a8bfc9" 
        x.style.background = "#a8bfc9" 
        x.style.color = "#1a2a33" 
        s.textContent = "X"
    }

     sg.textContent = s.textContent;
});


// st gam

//btn newgame vs player
const ngp = document.getElementById('b');
//sta page 1
const p1 = document.querySelector('.sta');
//ingam page 2
const p2 = document.querySelector('.pla');

let turn;

ngp.addEventListener('click' , ()=>{

   p1.style.display = "none"
   p2.style.display = "block"

   turn = sg.textContent;

});



//add game x o

const con = document.querySelectorAll('.md');

const blo = document.querySelectorAll('.lo');

  turn = sg.textContent;

blo.forEach( e => {

    e.addEventListener('click', ()=>{

        e.textContent = turn;

         if( turn === "X" ){  

            e.style.color = "#31c3bd"
            turn = "O"
            sg.textContent = "O"

        }else if( turn === "O"){

            e.style.color = " #f2b137"
            turn = "X"
            sg.textContent = "X"
        }

        gaov()
    });

});


//pop mes + res

const re = document.getElementById('resta');

const pop = document.querySelector('.pop');

const tak = document.getElementById('takro');

const no = document.getElementById('nc');
const yes = document.getElementById('yr');


re.addEventListener('click' , ()=>{

    pop.style.display = "block"
 
 });
 no.addEventListener('click',()=>{
    pop.style.display = "none"
 });
 yes.addEventListener('click',()=>{
   window.location.reload();
});



// endgame res fuc


function gaov(){

let b1 = document.getElementById('1').textContent;
let b2 = document.getElementById('2').textContent;
let b3 = document.getElementById('3').textContent;

let b4 = document.getElementById('4').textContent;
let b5 = document.getElementById('5').textContent;
let b6 = document.getElementById('6').textContent;

let b7 = document.getElementById('7').textContent;
let b8 = document.getElementById('8').textContent;
let b9 = document.getElementById('9').textContent;

   function bs(){
    pop.style.display = "block"
    tak.textContent = `${b1||b2||b3||b4||b5||b6||b7||b8||b9} `+ "WIN THE ROUND"
    no.textContent = "QUIT"
    yes.textContent = "NEXT ROUND"
    no.addEventListener('click',()=>{
        window.location.reload();
     });

   };

  if(b1==b2 && b2==b3 && b1 != ''){
     bs();
  }else if(b4==b5 && b5==b6 && b4 != ''){

    bs();
  }else if(b7==b8 && b8==b9 && b7 != ''){

    bs();
  }else if(b1==b4 && b4==b7 && b1 != ''){

    bs();
  }else if(b2==b5 && b5==b8 && b2 != ''){

    bs();
  }else if(b3==b6 && b6==b9 && b3 != ''){

    bs();
  }else if(b1==b5 && b5==b9 && b1 != ''){
    bs();
  }else if(b3==b5 && b5==b7 && b3 != ''){
    bs();
  }
}
