document.addEventListener('DOMContentLoaded', function () {
    const ertek = document.getElementById('rating');
    ertek.addEventListener('input', function () {
        if(ertek.value==1){
            ertekeles="Nagyon nem tetszik"
        }
        else if(ertek.value==2){
            ertekeles="Nem tetszik"
        }
        else if(ertek.value==3){
            ertekeles="Közömbös"
        }
        else if(ertek.value==4){
            ertekeles="Tetszik"
        }
        else if(ertek.value==5){
            ertekeles="Nagyon tetszik"
        }
        ertek.value;
        document.getElementById('ertekeles').innerText=ertekeles
    });
});
