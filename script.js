const container = document.querySelector('.container'),
      generate = document.getElementById('btn'),
      qrInput = document.getElementById('input-value'),
      imageQr = document.querySelector('#qr-image');

generate.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if(!qrValue){
        alert('Insira uma URL ou texto para gerar um QrCode');
        return;
    }
    generate.innerText = "Gerando um QrCode...";
    imageQr.src = `https://quickchart.io/qr?text=${qrValue}`;
    imageQr.addEventListener('load', () => {
        generate.innerText = "Gerar QrCode";
        container.classList.add('active');
    });
});

qrInput.addEventListener('keyup', () => {
    if(!qrInput.value){
        container.classList.remove('active');
    }
});
