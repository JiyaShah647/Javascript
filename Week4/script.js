            const units = {
                length: ["Meters", "Kilometers", "Centimeters", "Feet", "Miles"],
                weight: ["Kilograms", "Grams", "Pounds"],
                temperature: ["Celsius", "Fahrenheit", "Kelvin"],
                time: ["Seconds", "Minutes", "Hours", "Days"]
            };

            function updateUnits() {
                let type = document.getElementById("type").value;
                let fromUnit = document.getElementById("fromUnit");
                let toUnit = document.getElementById("toUnit");

                fromUnit.innerHTML = "";
                toUnit.innerHTML = "";

                units[type].forEach(unit => {
                    fromUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
                    toUnit.innerHTML += `<option value="${unit}">${unit}</option>`;
                });
            }

            updateUnits(); 

            function convert() {
                let type = document.getElementById("type").value;
                let from = document.getElementById("fromUnit").value;
                let to = document.getElementById("toUnit").value;
                let value = parseFloat(document.getElementById("valueInput").value);

                if (isNaN(value)) {
                    document.getElementById("result").innerText = "Result: Invalid Input";
                    return;
                }

                let result;

                if (type === "length") {
                    let meters;

                    switch (from) {
                        case "Meters": meters = value; break;
                        case "Kilometers": meters = value * 1000; break;
                        case "Centimeters": meters = value / 100; break;
                        case "Feet": meters = value * 0.3048; break;
                        case "Miles": meters = value * 1609.34; break;
                    }

                    switch (to) {
                        case "Meters": result = meters; break;
                        case "Kilometers": result = meters / 1000; break;
                        case "Centimeters": result = meters * 100; break;
                        case "Feet": result = meters / 0.3048; break;
                        case "Miles": result = meters / 1609.34; break;
                    }
                }

                if (type === "weight") {
                    let grams;

                    switch (from) {
                        case "Kilograms": grams = value * 1000; break;
                        case "Grams": grams = value; break;
                        case "Pounds": grams = value * 453.592; break;
                    }

                    switch (to) {
                        case "Kilograms": result = grams / 1000; break;
                        case "Grams": result = grams; break;
                        case "Pounds": result = grams / 453.592; break;
                    }
                }

                if (type === "temperature") {

                    let celsius;

                    switch (from) {
                        case "Celsius": celsius = value; break;
                        case "Fahrenheit": celsius = (value - 32) * 5/9; break;
                        case "Kelvin": celsius = value - 273.15; break;
                    }

                    switch (to) {
                        case "Celsius": result = celsius; break;
                        case "Fahrenheit": result = (celsius * 9/5) + 32; break;
                        case "Kelvin": result = celsius + 273.15; break;
                    }
                }

                if (type === "time") {
                    let seconds;

                    switch (from) {
                        case "Seconds": seconds = value; break;
                        case "Minutes": seconds = value * 60; break;
                        case "Hours": seconds = value * 3600; break;
                        case "Days": seconds = value * 86400; break;
                    }

                    switch (to) {
                        case "Seconds": result = seconds; break;
                        case "Minutes": result = seconds / 60; break;
                        case "Hours": result = seconds / 3600; break;
                        case "Days": result = seconds / 86400; break;
                    }
                }

                document.getElementById("result").innerText = `Result: ${result}`;
            }
