document.addEventListener('DOMContentLoaded', function () {
    const ertek = document.getElementById('rating');
    ertek.addEventListener('input', function () {
        if(ertek.value==0){
            ertekeles="Nem tetszik"
        }
        else if(ertek.value==1){
            ertekeles="Közömbös"
        }
        else{
            ertekeles="Tetszik"
        }
        ertek.value;
        document.getElementById('ertekeles').innerText=ertekeles
    });
});
