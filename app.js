//Inicialización y Declaración
let totalBill = 0
let totalPeople = 0
let totalDividerBill = 0
let percentageTip = 0
let tip = 0
let individualTotalPay = 0
let individualTipPay = 0

const billinput = document.querySelector("#bill")
const fiveBtn = document.querySelector("#fiveTip")
const tenBtn = document.querySelector("#tenTip")
const fifteenBtn = document.querySelector("#fifteenTip")
const twentyfiveBtn = document.querySelector("#twentyfiveTip")
const fiftyBtn = document.querySelector("#fiftyTip")
const customInput = document.querySelector("#btnCustom")
const peopleBtn = document.querySelector("#peopleBtn")

const tipPerson = document.querySelector("#tipPerPerson")
const totalPerson = document.querySelector("#totalPerPerson")
const btn = document.querySelector(".card__results-btn")

fiveBtn.addEventListener("click", ()=>{
    percentageTip = 0.05

})
tenBtn.addEventListener("click", ()=>{
    percentageTip = 0.10
})
fifteenBtn.addEventListener("click", ()=>{
    percentageTip = 0.15
})
twentyfiveBtn.addEventListener("click", ()=>{
    percentageTip = 0.25
})
fiftyBtn.addEventListener("click", ()=>{
    percentageTip = 0.50
})
customInput.addEventListener("change", (val)=>{
    let num = parseInt(val.target.value) 
    percentageTip = num/100

})
billinput.addEventListener("change", (val)=>{
    let num = parseInt(val.target.value) 
    totalBill = Math.round(num)
})
peopleBtn.addEventListener("change", (val)=>{
    let num = parseInt(val.target.value) 
    totalPeople = Math.round(num)
    calculateTip()
    calculateTotalAmount()
    calcularIndividualTip()
    calculateIndividualPay()

    tipPerson.innerText = ""
    tipPerson.innerText = `$${individualTipPay}`
    totalPerson.innerText = ""
    totalPerson.innerText = `$${individualTotalPay}`
})
btn.addEventListener("click", ()=>{
    location.reload()
})

function calculateTip() {
    tip = (totalBill * percentageTip)
    return
}
function calculateTotalAmount() {
    totalDividerBill = (totalBill / totalPeople)
    return
}
function calcularIndividualTip(){
    individualTipPay = (tip / totalPeople).toFixed(2)
    return
}
function calculateIndividualPay(){
    individualTotalPay = (totalDividerBill + parseFloat(individualTipPay)).toFixed(2)
    return
}
//.tofix() funcion para disminuir decimales pero convierte en STRING el valor