var round = prompt("คุณต้องการเล่นกี่รอบ ? ")
var score = 0
for(var i = 0; i < round; i++){
    var answer = prompt("หัวหรือก้อย ? ")
    var random_answer = ""
    if(Math.floor(Math.random() * 10) <= 4 ){ //สุ่มเลข 0-9
        // น้อยกว่า 5 คือ หัว
        random_answer = "หัว"
    }
    else{
        // มากกว่า 4 คือ ก้อย
        random_answer = "ก้อย"
    }
    console.log(random_answer," : ",answer) // เช็คคำตอบ
    if(answer == random_answer){
        alert("คุณตอบถูก")
        score = score + 1
        
    }
    else{
        alert("คุณตอบผิด")
        
    }
    if(answer == random_answer){
        document.getElementById("result_list").innerHTML += "คุณตอบถูก"+"<br>"
    }
    else{
        document.getElementById("result_list").innerHTML += "คุณตอบผิด"+"<br>"
    }
}
document.getElementById("score").innerHTML = "คุณตอบถูก " + score + " ครั้ง"