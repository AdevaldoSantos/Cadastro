function enviar(){
    const nome = document.getElementById('nome').value
    const idade = parseFloat(document.getElementById('idade').value)
    const profissao = document.getElementById('profissao').value
    const resposta = document.getElementById('resposta')
    resposta.innerText = `Seu nome é: ${nome}\nSua idade ${idade}\n Sua profissão: ${profissao}`
}