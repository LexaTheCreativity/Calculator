
function display(val){
    //displays the value of the element of the button
    document.getElementById('display').value += val;
    
    return val;
}

function calculate(){

    // Get the input value
    let x = document.getElementById('display').value;

    // Replace operator combinations
    x = x.replace('**', '*');
    x = x.replace('//', '/');
    x = x.replace('++', '+');
    x = x.replace('+-', '-');
    x = x.replace('--', '-');

    try {
        // Evaluate the modified expression
        let y = eval(x);

        // Update the input field with the result
        document.getElementById('display').value = y;

        // Return the result if needed
        return y;
    } catch (error) {
        // Handle any evaluation errors here
        console.error('Error:', error);
        return 'Error';
    }
    
}

function clearScreen(){
    //Clears the value on the display
    document.getElementById('display').value = "";
}

function clearLastEntry(){

    let displayElement = document.getElementById('display');
    let currentValue = displayElement.value;

    if (currentValue.length > 0) {
        currentValue = currentValue.slice(0, -1);
        displayElement.value = currentValue;
    }
}
