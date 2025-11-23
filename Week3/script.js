        console.log("Hello Javascript")
        var n=Math.floor(Math.random()*10)+1
        var count=0
        var userInput=document.getElementById("user-input")
        var display=document.getElementById("display")
        function boxPrint()
        {
            console.log(userInput.value)
            count++
            if(userInput.value<n)
            {
                display.innerText="Result: Too Small"
            }
            if(userInput.value>n)
            {
                display.innerText="Result: Too Big"
            }
            if(userInput.value==n-1 || userInput.value==n+1)
            {
                display.innerText="Result: You are too near to the number."
            }
            if(userInput.value==n)
            {
                display.innerText="Result: You guessed correctly in " + count + " turns!!"
            }
            if(userInput.value<0 || userInput.value>10)
            {
                display.innerText="Invalid Input"
            }
            if(isNaN(userInput.value))
            {
                display.innerText="Invalid Input"
            }
        }
        function newGame() 
        {
            n = Math.floor(Math.random()*10) + 1;
            count = 0;
            display.innerText = "Result:";
            userInput.value = "";
        }
