//Event driven programming
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

function toCelsiusProgram(value)
{
    alert(toCelsius(value))
}

function toFahrenheitProgram(value)
{
    alert(toFahrenheit(value))
}

function display(elementID, value)
{
    document.getElementById(elementID).innerHTML = "<u>"+value+"</u>"
}