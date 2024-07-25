function toCelsius()
{
    let fahrenheit = prompt("Fahrenheit:")
    let celsius = (parseFloat(fahrenheit) - 32) * 5 / 9
    document.getElementById("temp").innerHTML = celsius.toFixed(2) + "  °C"
}

function toFahrenheit()
{
    let celsius = prompt("Celsius:")
    let fahrenheit = (celsius * 1.8) + 32
    document.getElementById("temp").innerHTML = fahrenheit.toFixed(2) + " °F"
}
var value = prompt("Enter 1 for convert F to C or 2 for convert C to F")
if(value == 1)
{
    toCelsius()
}
else if(value == 2)
    {
        toFahrenheit()
    }