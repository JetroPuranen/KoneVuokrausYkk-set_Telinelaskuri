let renkaat = 0;
let Paaty = 0;
let TukiJalka = 0;
let Punainen = 0;
let Sininen = 0;
let TasoKiintea = 0;
let TasoAvattava = 0;
let Porras = 0;
let KaidePaaty=0;
//Checkboxit
const kaksiM = document.getElementById("2m")
const neljaM = document.getElementById("4m")
const kuusiM = document.getElementById("6m")
const kahdeksanM = document.getElementById("8m")

function checkbox(clickedCheckboxId){

    
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    
        checkboxes.forEach((checkbox) => {
            if (checkbox.id !== clickedCheckboxId) {
              checkbox.checked = false;
            }
          });
    
   
}




function LaskeOsat(){
    if (!kaksiM.checked && !neljaM.checked && !kuusiM.checked && !kahdeksanM.checked ){
        alert("Et valinnut korkeutta")
    }
   
    if(kaksiM.checked){
        let maara = document.getElementById("number").value;
        renkaat = 4 * maara;
        Paaty = 2 * maara;
        TukiJalka = 4 * maara;
        Punainen = 4 * maara;
        Sininen = 6 * maara;
        TasoKiintea = 1 * maara;
        TasoAvattava = 1 * maara;
        Porras = 1 * maara;
        KaidePaaty = 2 * maara;
        
        document.getElementById("pyorat").innerHTML = renkaat.toString();
        document.getElementById("paaty").innerHTML = Paaty.toString();
        document.getElementById("tukijalat").innerHTML = TukiJalka.toString();
        document.getElementById("vinotuki").innerHTML = Punainen.toString();
        document.getElementById("vaakatuki").innerHTML = Sininen.toString();
        document.getElementById("tasokiintea").innerHTML = TasoKiintea.toString();
        document.getElementById("tasoavattava").innerHTML = TasoAvattava.toString();
        document.getElementById("tikkaat").innerHTML = Porras.toString();
        document.getElementById("kaidepaaty").innerHTML = KaidePaaty.toString();
    }
    else if(neljaM.checked){
        let maara = document.getElementById("number").value;
        renkaat = 4 * maara; 
        Paaty = 4 * maara;
        TukiJalka = 4 * maara;
        Porras = 2 * maara;
        TasoAvattava = 2 * maara;
        TasoKiintea = 2 * maara;
        Punainen = 8 * maara ;
        Sininen = 10 * maara;
        KaidePaaty = 2 * maara;

        document.getElementById("pyorat").innerHTML = renkaat.toString();
        document.getElementById("paaty").innerHTML = Paaty.toString();
        document.getElementById("tukijalat").innerHTML = TukiJalka.toString();
        document.getElementById("vinotuki").innerHTML = Punainen.toString();
        document.getElementById("vaakatuki").innerHTML = Sininen.toString();
        document.getElementById("tasokiintea").innerHTML = TasoKiintea.toString();
        document.getElementById("tasoavattava").innerHTML = TasoAvattava.toString();
        document.getElementById("tikkaat").innerHTML = Porras.toString();
        document.getElementById("kaidepaaty").innerHTML = KaidePaaty.toString();
    }
    else if (kuusiM.checked){
        let maara = document.getElementById("number").value;
        renkaat = 4 * maara;
        Paaty = 6 * maara;
        TukiJalka = 4 * maara;  
        Porras = 3 * maara; 
        TasoAvattava = 3 * maara;
        TasoKiintea = 3 * maara;  
        Punainen = 12 * maara;
        Sininen = 14 * maara;
        KaidePaaty = 2 * maara;
        document.getElementById("pyorat").innerHTML = renkaat.toString();
        document.getElementById("paaty").innerHTML = Paaty.toString();
        document.getElementById("tukijalat").innerHTML = TukiJalka.toString();
        document.getElementById("vinotuki").innerHTML = Punainen.toString();
        document.getElementById("vaakatuki").innerHTML = Sininen.toString();
        document.getElementById("tasokiintea").innerHTML = TasoKiintea.toString();
        document.getElementById("tasoavattava").innerHTML = TasoAvattava.toString();
        document.getElementById("tikkaat").innerHTML = Porras.toString();
        document.getElementById("kaidepaaty").innerHTML = KaidePaaty.toString();
    }
    else if (kahdeksanM.checked){
        let maara = document.getElementById("number").value;
        renkaat = 4 * maara;
        Paaty = 8 * maara;
        TukiJalka = 4 * maara;  
        Porras = 4 * maara; 
        TasoAvattava = 4 * maara;
        TasoKiintea = 4 * maara;  
        Punainen = 16 * maara;
        Sininen = 18 * maara;
        KaidePaaty = 2 * maara;
        document.getElementById("pyorat").innerHTML = renkaat.toString();
        document.getElementById("paaty").innerHTML = Paaty.toString();
        document.getElementById("tukijalat").innerHTML = TukiJalka.toString();
        document.getElementById("vinotuki").innerHTML = Punainen.toString();
        document.getElementById("vaakatuki").innerHTML = Sininen.toString();
        document.getElementById("tasokiintea").innerHTML = TasoKiintea.toString();
        document.getElementById("tasoavattava").innerHTML = TasoAvattava.toString();
        document.getElementById("tikkaat").innerHTML = Porras.toString();
        document.getElementById("kaidepaaty").innerHTML = KaidePaaty.toString();
    }
    
}