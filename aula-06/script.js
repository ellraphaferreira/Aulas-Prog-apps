function somar (){
    let numero1 = Number(document.getElementById("n1").value)
    let numero2 = Number(document.getElementById("n2").value)

    let resposta = document.getElementById("resposta")
    // console.log(numero1 + numero2)
    let soma = numero1 + numero2
    resposta.innerHTML = soma
}
function altimg (){
    let imagem = document.getElementById("imga")

    imagem.setAttribute("src","https://clicr.com.br/wp-content/uploads/2023/01/linguicinha-pet-1.jpg")
}