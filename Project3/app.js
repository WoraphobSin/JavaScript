let qrt = prompt("จำนวนสินค้า : ")
var total = 0 
for(let i = 1; i <= qrt; i++){
    let item_price = prompt("ราคาสินค้าชิ้นที่ "+ i)
    total = total + parseInt(item_price)
    document.getElementById("price_list").innerHTML += "รายการสินค้าชิ้นที่ "+ i + " : "+ item_price + " บาท<br>"
}
document.getElementById("price").innerHTML = "ราคารวม " + total + " บาท"
