function toCelsius(fahrenheit)
{
    let celsius = (parseFloat(fahrenheit) - 32) * 5 / 9
    return celsius.toFixed(2) + " °C"
}

function toFahrenheit(celsius)
{
    let fahrenheit = (celsius * 1.8) + 32
    return fahrenheit.toFixed(2) + " °F"
}

function display(elementID, value)
{
    document.getElementById(elementID).innerHTML = "<u>"+value+"</u>"
}

display("temp_celsius",toCelsius(150))
display("temp_fahrenheit",toFahrenheit(65.56))

// var value = prompt("Enter 1 for convert F to C or 2 for convert C to F")
// if(value == 1)
// {
//     toCelsius()
// }
// else if(value == 2)
//     {
//         toFahrenheit()
//     }