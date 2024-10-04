//Write your pseduo code first! 

// How would I write pseudo code for a temperature convertor? 

// Step 1: What are we converting?
    // We're converting a users input to their desired conversion. 
    // We have 4 temperature scales we want to use. Fahrenheit, Celsius, Kelvin, and Rankine

// Step 2: What are the conversion rates?
    // Fahrenheit > Celsius (°F − 32) × 5/9 = °C
    // Fahrenheit > Kelvin (°F − 32) × 5/9 + 273.15 = K
    // Fahrenheit > Rankine °F + 459.67 = °R
    // Celsius > Fahrenheit (°C × 9/5) + 32 = °F
    // Celsius > Kelvin °C + 273.15 = K
    // Celsius > Rankine °C × 9/5 + 491.67 = °R
    // Kelvin > Fahrenheit (K − 273.15) × 9/5 + 32 = °F
    // Kelvin > Celsius K − 273.15 = °C
    // Kelvin > Rankine °C × 9/5 + 491.67 = °R
    // Rankine > Fahrenheit °R − 459.67 = °F
    // Rankine > Celsius (°R − 491.67) × 5/9 = °C
    // Rankine > Kelvin °R × 5/9 = K
    document.querySelector('#inputOne').addEventListener('input', performConversion);
    document.querySelectorAll('input[name="group1"]').forEach((radio) => {
      radio.addEventListener('change', performConversion);
    });
    document.querySelectorAll('input[name="group2"]').forEach((radio) => {
      radio.addEventListener('change', performConversion);
    });
    
    function performConversion() {
      const inputOneValue = parseFloat(document.querySelector('#inputOne').value);
      const unitFrom = document.querySelector('input[name="group1"]:checked');
      const unitTo = document.querySelector('input[name="group2"]:checked');
      
      // Check if both a unit is selected and inputOne has a valid number
      if (!unitFrom || !unitTo || isNaN(inputOneValue)) {
        document.querySelector('#inputTwo').value = 'Invalid input';
        return;
      }
    
      let convertedValue = 0;
    
      // Conversion based on selection
      if (unitFrom.value === 'Fahrenheit' && unitTo.value === 'Celsius') {
        convertedValue = (inputOneValue - 32) * 5 / 9;
      } else if (unitFrom.value === 'Fahrenheit' && unitTo.value === 'Kelvin') {
        convertedValue = (inputOneValue - 32) * 5 / 9 + 273.15;
      } else if (unitFrom.value === 'Fahrenheit' && unitTo.value === 'Rankine') {
        convertedValue = inputOneValue + 459.67;
      } else if (unitFrom.value === 'Celsius' && unitTo.value === 'Fahrenheit') {
        convertedValue = (inputOneValue * 9 / 5) + 32;
      } else if (unitFrom.value === 'Celsius' && unitTo.value === 'Kelvin') {
        convertedValue = inputOneValue + 273.15;
      } else if (unitFrom.value === 'Celsius' && unitTo.value === 'Rankine') {
        convertedValue = (inputOneValue * 9 / 5) + 491.67;
      } else if (unitFrom.value === 'Kelvin' && unitTo.value === 'Fahrenheit') {
        convertedValue = (inputOneValue - 273.15) * 9 / 5 + 32;
      } else if (unitFrom.value === 'Kelvin' && unitTo.value === 'Celsius') {
        convertedValue = inputOneValue - 273.15;
      } else if (unitFrom.value === 'Kelvin' && unitTo.value === 'Rankine') {
        convertedValue = inputOneValue * 9 / 5;
      } else if (unitFrom.value === 'Rankine' && unitTo.value === 'Fahrenheit') {
        convertedValue = inputOneValue - 459.67;
      } else if (unitFrom.value === 'Rankine' && unitTo.value === 'Celsius') {
        convertedValue = (inputOneValue - 491.67) * 5 / 9;
      } else if (unitFrom.value === 'Rankine' && unitTo.value === 'Kelvin') {
        convertedValue = inputOneValue * 5 / 9;
      } else {
        convertedValue = inputOneValue;
      }
    
      // Display the result in the second input field
      document.querySelector('#inputTwo').value = convertedValue.toFixed(2);
    }
    
