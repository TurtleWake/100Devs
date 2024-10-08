///// 3,2,1...Code Section /////

// Presentation
if (document.querySelector("#showNameAndAge")){
    document.querySelector("#showNameAndAge").addEventListener("click", displayNameAndAge);

    console.log("++Presentation++")
    function myNameAndAge(){
        let age = 35;
        let name = "Sean"; 
        console.log("Name: ", name);
        console.log("Age: ", age);
    }

    myNameAndAge();

    function displayNameAndAge(){
        let myCode = document.querySelector("#presentationHidden");
        myCode.classList.toggle('hidden')
    }

    // Minimalistic Calculator
    document.querySelector("#additionButton").addEventListener("click", calculateAddition);
    document.querySelector("#subtractionButton").addEventListener("click", calculateSubtraction);
    document.querySelector("#multiplicationButton").addEventListener("click", calculateMultiplication);
    document.querySelector("#divisionButton").addEventListener("click", calculateDivision);

    function calculateAddition(){
        document.querySelector("#additionHidden").innerText = 6 + 3;
        let calcAddition = document.querySelector("#additionHidden");
        calcAddition.classList.toggle('hidden');
    }
    function calculateSubtraction(){
        document.querySelector("#subtractionHidden").innerText = 6 - 3;
        let calcSubtraction = document.querySelector("#subtractionHidden");;
        calcSubtraction.classList.toggle('hidden');
    }
    function calculateMultiplication(){
        document.querySelector("#multiplicationHidden").innerText = 6 * 3;
        let calcMultiplication = document.querySelector("#multiplicationHidden")
        calcMultiplication.classList.toggle('hidden');
    }
    function calculateDivision(){
        document.querySelector("#divisionHidden").innerText = 6 / 3;
        let calcDivision = document.querySelector("#divisionHidden");
        calcDivision.classList.toggle('hidden');
    }

    function math(n1,n2){
        let addition = n1 + n2;
        let subtracting = n1 - n2;
        let multiplication = n1 * n2;
        let division = n1 / n2;
    }

    // Values prediction
    console.log("")
    console.log("++Values Predictions++")
    console.log("console.log(4 + 5);", 4 + 5); // Number 9
    console.log('console.log("4 + 5");', "4 + 5"); //String 4 + 5
    console.log('console.log("4" + "5");', "4" + "5"); //String 45

}

///// Play with variables /////

// Improved hello
if (document.querySelector("#fullNameEnter")){
    document.querySelector("#fullNameEnter").addEventListener("click", fullNameAndNextProblem);

    function removePreviousInfo(){
            document.querySelector("h2").innerText = "";
            document.querySelector("#p1").innerText = "";
            document.querySelector("#p2").innerText = "";
            document.querySelector("#p3").innerText = "";
            document.querySelector("#d1").innerText = "";
    }

    function fullNameAndNextProblem(){
        let firstName = document.querySelector("#firstName").value;
        let lastName = document.querySelector("#lastName").value;
        removePreviousInfo();

        if(firstName && lastName){
            document.querySelector("#firstName").remove();
            document.querySelector("#lastName").remove();
            document.querySelector("#fullNameEnter").remove();

            document.querySelector("#p1").innerHTML = `Thanks, ${firstName} ${lastName}! Now click this <i id="skull" class='bx bxs-skull' id="skull"></i> if you want to live, I mean....see my answers for "Final values".`;
            
            document.querySelector("#skull").addEventListener("click", takeToFinalAnswers);
        } else{
            alert("Please provide full name!");
        };
    };



    // Final values    
    function takeToFinalAnswers(){
        document.querySelector("h2").innerText = "Final values";
        document.querySelector("#p1").innerText = "Observe the following program and try to predict the final values of its variables. (Hover over the code to see my predictions!)";
        let hiddenFinalValue = document.querySelector("#finalValueHidden");
        hiddenFinalValue.classList.toggle('hidden');
        document.querySelector("#finalValueCode").innerHTML = `
            let a = 2;
            a -= 1;
            a++;
            let b = 8;
            b += 2;
            const c = a + b * b;
            const d = a * b + b;
            const e = a * (b + b);
            const f = a * b / a;
            const g = b / a * a;
            console.log(a, b, c, d, e, f, g);
        `


        if (document.querySelector("h2") && document.querySelector("h2").innerText === "Final values") {
            let a = 2; // 2
            a -= 1; // 1 
            a++; //2
            let b = 8; //8
            b += 2; // 10
            const c = a + b * b; // 102 
            const d = a * b + b; // 30
            const e = a * (b + b); // 40
            const f = a * b / a; // 10
            const g = b / a * a; // 10
            console.log(
                "A =", a,
                "B =", b,
                "C =", c,
                "D =", d,
                "E =", e,
                "F =", f,
                "G =", g
            );  
        }

        const originalContent = document.querySelector("#finalValueCode").innerHTML;

        document.querySelector("#finalValueHidden").addEventListener("mouseover", () => {
            document.querySelector("#finalValueCode").innerHTML = `
            let a = 2; // 2
            a -= 1; // 1 
            a++; // 2
            let b = 8; // 8
            b += 2; // 10
            const c = a + b * b; // 102 
            const d = a * b + b; // 30
            const e = a * (b + b); // 40
            const f = a * b / a; // 10
            const g = b / a * a; // 10
            console.log(a, b, c, d, e, f, g);
            `;
        });

        document.querySelector("#p3").innerHTML = `Now click this <i id="vat" class='bx bxs-color' ></i> to move onto VAT calculation!`;
        document.querySelector("#vat").addEventListener("click", takeToVatCalculation);


        document.querySelector("#finalValueHidden").addEventListener("mouseout", () => {
            document.querySelector("#finalValueCode").innerHTML = originalContent;
        });

        
        function takeToVatCalculation(){
            console.clear();
            removePreviousInfo();
            document.querySelector("#finalValueHidden").remove();

            document.querySelector("h2").innerText = "VAT calculation";
            document.querySelector("#p1").innerText = "Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%."

            document.querySelector("#d1").innerHTML = 
            `
            <div id='vatAlignment'>
                <input id='vatInput' placeholder='Value...'></input>
                <button id='vatEqual'>=</button>
                <div id='calculatedValue'></div>
            </div>
            `
            document.querySelector("#vatEqual").addEventListener("click", doVATCalulation);
        }

        // VAT calculations
        function doVATCalulation(){
            let vatNumber = parseFloat(document.querySelector("#vatInput").value);
            const vatRate = 0.206;
            
            

            if (!isNaN(vatNumber)) {
                const finalPrice = vatNumber * (1 + vatRate);
                
                document.querySelector("#calculatedValue").innerText = `${finalPrice.toFixed(3)}`;
                document.querySelector("#p3").innerHTML = 
                `
                <p>Awesome, now click the thermonater to move onto the Celsius to Fahrenheit conversion problem!</p> 
                <i id='wayToTemperatureConversion' class='bx bxs-thermometer'></i> 
                `
                document.querySelector('#wayToTemperatureConversion').addEventListener("click", temperatureConversionProblem)

                } else {
                    alert("Please enter a valid number.");
                }
        }

        function temperatureConversionProblem(){
            removePreviousInfo();

            document.querySelector('h2').innerText = "From Celsius to Fahrenheit degrees";
            document.querySelector('#p1').innerText = "Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.";

            document.querySelector('#d1').innerHTML = 
                `
                <div id="thermometerAlignment">
                    <div id="thermometerSettings">
                        <h3>Settings</h3>
                        <div id="userTemperatureToConvert">
                            <span>Your value: </span>
                            <input id="userTemperatureValue">
                        </div>
                        <p>What are you converting from?</p>
                        <div class="temperatureType">
                            <div>
                                <input type="radio" id="ceclsiusValue" name="convertingTemperature" value="celsius">
                                <label for="ceclsiusValue">Celsius</label>
                            </div>
                            <div>
                                <input type="radio" id="kelvinValue" name="convertingTemperature" value="kelvin">
                                <label for="kelvinValue">Kelvin</label>
                            </div>
                            <div>
                                <input type="radio" id="fahrenheitValue" name="convertingTemperature" value="fahrenheit">
                                <label for="fahrenheitValue">Fahrenheit</label>
                            </div>
                        </div>
                        <p>What do you want to convert to?</p> 
                        <div class="temperatureType">
                            <div>
                                <input type="radio" id="newCelsiusValue" name="newTemperature" value="celsius" default>
                                <label for="newCelsiusValue">Celsius</label>
                            </div>
                            <div>
                                <input type="radio"  id="newKelvinValue" name="newTemperature" value="kelvin">
                                <label for="newKelvinValue">Kelvin</label>
                            </div>
                            <div>
                                <input type="radio"  id="newFahrenheitValue" name="newTemperature" value="fahrenheit">
                                <label for="newFahrenheitValue">Fahrenheit</label>
                            </div>
                        </div>
                        <button id="convertUserValueToNewValue">Convert</button>    
                    </div>
                    <div id="thermometerObject">
                        <div id="thermometerObjectAlignment">
                            <div id="temperatureNumbersAndNotches">
                                <div class="notchAlignment">               
                                    <span class="temperatureNumber">
                                        0<div class="temperatureNotch"></div>
                                    </span>
                                </div>    
                                <div class="notchAlignment">
                                    <span class="temperatureNumber">
                                        20<div class="temperatureNotch"></div>
                                    </span>
                                </div>
                                <div class="notchAlignment">
                                    <span class="temperatureNumber">
                                        40<div class="temperatureNotch"></div>
                                    </span>
                                </div>
                                <div class="notchAlignment">    
                                    <span class="temperatureNumber">
                                        60<div class="temperatureNotch"></div>
                                    </span>
                                </div>
                                <div class="notchAlignment">
                                    <span class="temperatureNumber">
                                        80<div class="temperatureNotch"></div>
                                    </span>
                                </div>
                                <div class="notchAlignment">
                                    <span class="temperatureNumber">
                                        100<div class="temperatureNotch"></div>
                                    </span>
                                </div>
                                <div class="notchAlignment">
                                    <span class="temperatureNumber">
                                        120<div class="temperatureNotch"></div>
                                    </span>
                                </div>
                                <div class="notchAlignment">
                                    <span class="temperatureNumber">
                                        140<div class="temperatureNotch"></div>
                                    </span>
                                </div>
                                <div class="notchAlignment">
                                    <span class="temperatureNumber">
                                        160<div class="temperatureNotch"></div>
                                    </span>
                                </div>
                                <div class="notchAlignment">
                                    <span class="temperatureNumber">
                                        180<div class="temperatureNotch"></div>
                                    </span>
                                </div>
                                <div class="notchAlignment">
                                    <span class="temperatureNumber">
                                        200<div class="temperatureNotch"></div>
                                    </span>
                                </div>
                                <div class="notchAlignment">
                                    <span class="temperatureNumber">
                                        220<div class="temperatureNotch"></div>
                                    </span>
                                </div>
                                <div class="notchAlignment">
                                    <span class="temperatureNumber">
                                        240<div class="temperatureNotch"></div>
                                    </span>
                                </div>
                                <div class="notchAlignment">
                                    <span class="temperatureNumber">
                                        260<div class="temperatureNotch"></div>
                                    </span>
                                </div>
                                <div class="notchAlignment">
                                    <span class="temperatureNumber">
                                        280<div class="temperatureNotch"></div>
                                    </span>
                                </div>
                                <div class="notchAlignment">
                                    <span class="temperatureNumber">
                                        300<div class="temperatureNotch"></div>
                                    </span>
                                </div>
                            </div>
                            <div id="temperatureMeter"></div>
                        </div>
                        <span id="convertedValue"></span>
                    </div>
                </div>
                `
            document.querySelector("#convertUserValueToNewValue").addEventListener("click", convertUserValueToNewValue);
            
            function convertUserValueToNewValue() {
                const userTemperatureValue = parseFloat(document.querySelector('#userTemperatureValue').value);
                const convertingTemperature = document.querySelector('input[name="convertingTemperature"]:checked').value;
                const newTemperature = document.querySelector('input[name="newTemperature"]:checked').value;
                let convertedValue = document.querySelector("#convertedValue");
            
                // Define conversion functions
                const conversionFormulas = {
                    "celsius": {
                        "kelvin": (temp) => temp + 273.15,
                        "fahrenheit": (temp) => temp * (9 / 5) + 32,
                    },
                    "kelvin": {
                        "celsius": (temp) => temp - 273.15,
                        "fahrenheit": (temp) => (temp - 273.15) * (9 / 5) + 32,
                    },
                    "fahrenheit": {
                        "celsius": (temp) => (temp - 32) * (5 / 9),
                        "kelvin": (temp) => (temp - 32) * (5 / 9) + 273.15,
                    },
                };
            
                // Perform conversion
                if (conversionFormulas[convertingTemperature] && conversionFormulas[convertingTemperature][newTemperature]) {
                    const convertedTemp = conversionFormulas[convertingTemperature][newTemperature](userTemperatureValue);
                    convertedValue.innerText = convertedTemp.toFixed(2);
            
                    // Set the size of the temperature meter
                    updateTemperatureMeter(convertedTemp, newTemperature);
                }
            }
            
            function updateTemperatureMeter(temp, scale) {
                const temperatureMeter = document.querySelector("#temperatureMeter");
            
                // Define the ranges for temperature and pixel width
                const maxTemp = 300; // maximum temperature (300 degrees)
                const minTemp = 0;   // minimum temperature (0 degrees)
                const maxWidth = 550; // max width of the meter in pixels
            
                // Calculate the pixel width per degree
                const tempRange = maxTemp - minTemp;
                const pixelPerDegree = maxWidth / tempRange;
            
                // Calculate the width of the meter based on the converted temperature
                let width = Math.max(0, Math.min((temp) * pixelPerDegree, maxWidth)); // Ensure width stays within 0 and maxWidth
            
                // Set the width of the temperature meter dynamically
                temperatureMeter.style.width = `${width}px`;
            
                // Get the temperature category and apply corresponding style
                const category = categorizeTemperature(temp, scale);
                temperatureMeter.className = ''; // Reset previous classes
                if (category === "Freezing") {
                    temperatureMeter.classList.add('freezing');
                } else if (category === "Very Cold") {
                    temperatureMeter.classList.add('very-cold');
                } else if (category === "Cold") {
                    temperatureMeter.classList.add('cold');
                } else if (category === "Warm") {
                    temperatureMeter.classList.add('warm');
                } else if (category === "Hot") {
                    temperatureMeter.classList.add('hot');
                } else if (category === "Very Hot") {
                    temperatureMeter.classList.add('very-hot');
                } else if (category === "Extremely Hot") {
                    temperatureMeter.classList.add('extremely-hot');
                }
            }            
            
            
            function categorizeTemperature(temp, scale) {
                if (scale === "celsius") {
                    if (temp <= 0) return "Freezing";
                    if (temp <= 10) return "Very Cold";
                    if (temp <= 25) return "Cold";
                    if (temp <= 40) return "Warm";
                    if (temp <= 60) return "Hot";
                    if (temp <= 100) return "Very Hot";
                    return "Extremely Hot";  // For anything above 100°C
                } else if (scale === "kelvin") {
                    if (temp <= 273.15) return "Freezing";
                    if (temp <= 283.15) return "Very Cold";
                    if (temp <= 298.15) return "Cold";
                    if (temp <= 313.15) return "Warm";
                    if (temp <= 333.15) return "Hot";
                    if (temp <= 373.15) return "Very Hot";
                    return "Extremely Hot";  // For anything above 373.15K (boiling point in K)
                } else if (scale === "fahrenheit") {
                    if (temp <= 32) return "Freezing";
                    if (temp <= 50) return "Very Cold";
                    if (temp <= 77) return "Cold";
                    if (temp <= 104) return "Warm";
                    if (temp <= 140) return "Hot";
                    if (temp <= 212) return "Very Hot";
                    return "Extremely Hot";  // For anything above 212°F (boiling point in °F)
                }
                return "Unknown scale";
            }
            
            
            function getColorForCategory(category) {
                switch (category) {
                    case "Freezing":
                        return "lightblue";
                    case "Cold":
                        return "blue";
                    case "Warm":
                        return "orange";
                    case "Hot":
                        return "red";
                    default:
                        return "gray";
                }
            }      
        }
    
    }
}
