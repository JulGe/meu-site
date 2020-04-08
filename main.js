(() => {
    const percentages = [90, 50, 40, 30, 20];

    const $progressBars = document.querySelectorAll('.progress-bar > .progress');
    console.log($progressBars);

    $progressBars.forEach(($bar, index) => {
        $bar.style.setProperty('--percentage', `${percentages[index]}%`);
        console.log($bar);
    });
})();

function submit(){
    var $name = document.querySelector('#name').value;
    var $date = document.querySelector('#date').value;
    var $weight = document.querySelector('#weight').value;
    var $height = document.querySelector('#height').value;
    
    var $text = document.querySelector('#repository-text')
    var $inputs = document.querySelectorAll('.input');
    
    var currentYear = new Date().getFullYear();
    var birthYear = $date.toString().substring(0,4)
    var maioridade = (currentYear - birthYear >= 18) ? true : false;
    
    var imc = ($weight / (Math.pow($height,2))).toFixed(2);
    var imcStatus;
    
    if(maioridade){
      maioridade = "maior de idade!";
    } else {
      maioridade = "menor de idade!";
    }
    
    if(imc < 17){
      imcStatus = "Você encontra-se muito abaixo do peso de acordo com o IMC!";
    } else if (imc >= 17 && imc <= 18.49){
      imcStatus = "Você encontra-se abaixo do peso de acordo com o IMC!";
    } else if (imc >= 18.5 && imc <= 24.99){
      imcStatus = "Você encontra-se no peso normal, segundo o IMC.";
    } else if (imc >= 25 && imc <= 29.99){
      imcStatus = "Você encontra-se acima do peso, segundo o IMC.";
    } else if (imc >= 30 && imc <= 34.99){
      imcStatus = "Você encontra-se no estado de Obesidade I, segundo o IMC.";
    } else if (imc >= 35 && imc <= 39.99){
      imcStatus = "Você encontra-se no estado de Obesidade II, segundo o IMC.";
    } else {
      imcStatus = "IMC: Os valores inseridos foram inválidos!";
    }
    
    $inputs.style.display = none;
    
    $text.innerHTML = "Olá, " + $name + " seja bem vindo!" + "<br>Você atualmente é: " + maioridade + "<br>" + imcStatus;
    
    //document.write("Olá, " + $name + " seja bem vindo! <br>Você atualmente é: " + maioridade + "<br>" + imcStatus);
  }