let calculation = localStorage.getItem('calculation') || '';
      document.querySelector('.js-output').innerHTML = calculation;
      function updateCalculation(calculationValue) {
        calculation += calculationValue;
        document.querySelector('.js-output').innerHTML = calculation;
        localStorage.setItem('calculation', calculation);
        console.log(calculation);
      }