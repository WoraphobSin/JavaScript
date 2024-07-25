function sayHello(userName, userLastName)
{
    return "Hello " + userName + " " + userLastName
}

function getAge()
{
    return 28
}

let name = prompt("Enter your name: ")
let lastName = prompt("Enter your lastname: ")
alert(sayHello(name,lastName))
alert(getAge())
