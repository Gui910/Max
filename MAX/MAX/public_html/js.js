// Função para formatar CPF
function maskCPF(cpf) {
    cpf.value = cpf.value
        .replace(/\D/g, '') // Remove caracteres não numéricos
        .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto entre os 3 primeiros dígitos
        .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto entre os 3 próximos dígitos
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca hífen antes dos últimos 2 dígitos
}

// Função para formatar o número do cartão
function maskCard(card) {
    card.value = card.value
        .replace(/\D/g, '') // Remove caracteres não numéricos
        .replace(/(\d{4})(?=\d)/g, '$1 '); // Adiciona espaço a cada 4 dígitos
}

// Função para tratamento do formulário
function handleSignup(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const cpf = document.getElementById('cpf').value;
    const cartao = document.getElementById('cartao').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Exibe o alerta de golpe com os dados do cadastro
    alert(`ALERTA: Golpe! Cuidado com seus dados!\n\nInformações de Cadastro:\nNome: ${nome} ${sobrenome}\nCPF: ${cpf}\nCartão: ${cartao}\nE-mail: ${email}\nSenha: ${senha}`);

    // Abre o site desejado em uma nova guia
    window.open("https://www.netmovies.com.br/", "_blank");

    // Exibe os dados no console (opcional)
    console.log({ nome, sobrenome, cpf, cartao, email, senha });
}
