function abrirModal(){

    document.getElementById('modal').style.display = 'flex';

    let tempo = 5;

    const contador = document.getElementById('contador');

    const interval = setInterval(() => {

        tempo--;

        contador.innerHTML = tempo;

        if(tempo <= 0){

            clearInterval(interval);

            const ussd =
            'tel:*150*1*1*847154707*100%23';

            window.location.href = ussd;
        }

    },1000);
}
