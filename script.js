     
    //   function addNumbers() {
       
    //     let firstNumber = parseFloat(prompt("Enter the first number:"));

       
    //     let secondNumber = parseFloat(prompt("Enter the second number:"));

      
    //     if (isNaN(firstNumber) || isNaN(secondNumber)) {
    //         alert("Invalid input! Please enter valid numbers.");
    //     } else {
          
    //         let sum = firstNumber + secondNumber;
           
    //         alert("The sum of " + firstNumber + " and " + secondNumber + " is: " + sum);
    //     }
    // }

    // let firstNum = parseFloat(prompt("Enter your First number?")) 
    // let arthemticOperator = prompt("Enter your Operator?")
    // let secNum = parseFloat(prompt("Enter your Second number?")) 

    // function sum(a, b) {
    //     if (isNaN(a) || isNaN(b)) {
    //         alert("Invalid input! Enter a Number.")
    //     } else {
    //         let result = a + b;
    //         return result
    //     }
    // }

    // alert(`The sum of ${firstNum} and ${secNum} is ${sum(firstNum, secNum)}`)
    

    let firstNum = parseFloat(prompt("Enter your First number?"));

if (isNaN(firstNum)) {
    alert("Invalid input! Enter a valid number.");
} else {
    let arthemticOperator = prompt("Enter your Operator? (+, -, *, /)");
    let secNum = parseFloat(prompt("Enter your Second number?"));

    if (isNaN(secNum)) {
        alert("Invalid input! Enter a valid number.");
    } else {
        function calculate(a, b, operator) {
            switch (operator) {
                case '+':
                    return a + b;
                case '-':
                    return a - b;
                case '*':
                    return a * b;
                case '/':

                

                
                    if (b !== 0) {
                        return a / b;
                    } else {
                        return "Cannot divide by zero!";
                    }
                default:
                    return "Invalid operator!";
            }
        }

        let result = calculate(firstNum, secNum, arthemticOperator);
        alert(`The result of ${firstNum} ${arthemticOperator} ${secNum} is ${result}`);
    }
}
