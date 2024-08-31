// Função para editar/excluir os perfis (CRUD);
function mostraPerfisBabas() {
    
    let perfisBabas = JSON.parse(localStorage.getItem('Cuidadores Cadastrados'));
    const containerPerfil = document.getElementById('perfisBabas');
    containerPerfil.innerHTML = '';

    perfisBabas.forEach(perfil => {
        const divPerfil = document.createElement('div');
        divPerfil.className = 'divPerfil';
        divPerfil.innerHTML = `
            <img src="${perfil.imagem_de_perfil}">
            <h2>${perfil.nome}</h2>
            <h3>${perfil.idade}</h3>
            <h3>Preferência(s):</h3>
            <h4>${perfil.preferencias}</h4>
            <h3>Email:</h3>
            <h3>${perfil.email}</h3>
        `;
        divPerfil.addEventListener('click', () => mostrarDetalhesPerfilBaba(perfil));
        containerPerfil.appendChild(divPerfil);
    });
}

// Função para editar/excluir os perfis (CRUD);
function mostraPerfisPais() {
    
    let perfisPais = JSON.parse(localStorage.getItem('Responsáveis Cadastrados'));
    const containerPerfil = document.getElementById('perfisPais');
    containerPerfil.innerHTML = '';

    perfisPais.forEach(perfil => {
        const divPerfil = document.createElement('div');
        divPerfil.className = 'divPerfil';
        divPerfil.innerHTML = `
            <img src=${perfil.imagem_de_perfil}>
            <h2>${perfil.nome}</h2>
            <h3>${perfil.idade}</h3>
            <h3>Email para contato:</h3>
            <h3>${perfil.email}</h3>
        `;
        divPerfil.addEventListener('click', () => mostrarDetalhesPerfilPais(perfil));
        containerPerfil.appendChild(divPerfil);
    });
}

function mostrarDetalhesPerfilPais(perfil) {
    const detalhesPerfil = document.getElementById('detalhesPerfilPais');
    detalhesPerfil.className = 'detalhesPerfil';
    detalhesPerfil.innerHTML = `

    <label>Insira o novo nome:</label><br>
    <input id="nomeUser" value="${perfil.nome}"><br><br>
    <label>Insira a nova idade:</label><br>
    <input id="idadeUser" value="${perfil.idade}"><br><br>
    <h3>Email para contato:</h3><br>
    <label>Insira o novo email:</label><br>
    <input id="emailUser" value="${perfil.email}"><br><br>
    <button onclick="excluirPerfilPais()">Excluir</button>
    <button onclick="editarPerfilPais()">Editar</button>
    `;

    let email = perfil.email;

    email = JSON.stringify(email);
    localStorage.setItem('Email Responsável', email);
}

// Função para mostrar os detalhes do perfil clicado;
function mostrarDetalhesPerfilBaba(perfil) {
    const detalhesPerfil = document.getElementById('detalhesPerfilBabas');
    detalhesPerfil.className = 'detalhesPerfil';
    detalhesPerfil.innerHTML = `

    <label>Insira o novo nome:</label><br>
    <input id="nomeUserBaba" value="${perfil.nome}"><br><br>
    <label>Insira a nova idade:</label><br>
    <input id="idadeUserBaba" value="${perfil.idade}"><br><br>
    <label>Insira o novo email:</label><br>
    <input id="emailUserBaba" value="${perfil.email}"><br><br>
    <button onclick="excluirPerfilBaba()">Excluir</button>
    <button onclick="editarPerfilBaba()">Editar</button>
    `;

    let email = perfil.email;

    email = JSON.stringify(email);
    localStorage.setItem('Email Cuidador', email);
}

// função para o administrador excluir os perfis (CRUD);
function excluirPerfilBaba(){

    let babasCadastradas = JSON.parse(localStorage.getItem('Cuidadores Cadastrados'));
    let email = JSON.parse(localStorage.getItem('Email Cuidador'));
    let posicaoUser;

    for (i=0; i<babasCadastradas.length; i++){

        if (babasCadastradas[i].email==email){

            posicaoUser = i;
            break;
        }
    }

    babasCadastradas.splice(posicaoUser, 1);
    babasCadastradas = JSON.stringify(babasCadastradas);
    localStorage.setItem('Cuidadores Cadastrados', babasCadastradas);
    window.onload();
}

// função para o administrador excluir os perfis (CRUD);
function excluirPerfilPais(){

    let paisCadastrados = JSON.parse(localStorage.getItem('Responsáveis Cadastrados'));
    let email = JSON.parse(localStorage.getItem('Email Responsável'));
    let posicaoUser;

    for (i=0; i<paisCadastrados.length; i++){

        if (paisCadastrados[i].email==email){

            posicaoUser = i;
            break;
        }
    }

    paisCadastrados.splice(posicaoUser, 1);
    paisCadastrados = JSON.stringify(paisCadastrados);
    localStorage.setItem('Responsáveis Cadastrados', paisCadastrados);
    window.onload();
}

// função para o administrador editar os perfis (CRUD);
function editarPerfilBaba(){

    let babasCadastradas = JSON.parse(localStorage.getItem('Cuidadores Cadastrados'));
    let email = JSON.parse(localStorage.getItem('Email Cuidador'));
    let posicaoUser;

        for (i=0; i<babasCadastradas.length; i++){

            if (babasCadastradas[i].email==email){

                posicaoUser = i;
                break;
            }
        }

        let newUser = {

            nome: document.getElementById('nomeUserBaba').value,
            idade: document.getElementById('idadeUserBaba').value,
            email: document.getElementById('emailUserBaba').value,
            senha: babasCadastradas[i].senha,
            preferencias: babasCadastradas[i].preferencias,
            descricao_de_perfil: babasCadastradas[i].descricao_de_perfil,
            whatsapp_url: babasCadastradas[i].whatsapp_url,
            instagram_url: babasCadastradas[i].instagram_url,
            facebook_url: babasCadastradas[i].facebook_url,
            imagem_de_perfil: babasCadastradas[i].imagem_de_perfil
        };

        babasCadastradas.splice(posicaoUser, 1, newUser);
        babasCadastradas = JSON.stringify(babasCadastradas);
        localStorage.setItem('Cuidadores Cadastrados', babasCadastradas);
        emailUser = newUser.email;
        emailUser = JSON.stringify(emailUser);
        localStorage.setItem('Email Cuidador', emailUser);
        window.onload();
}

function editarPerfilPais(){

    let paisCadastrados = JSON.parse(localStorage.getItem('Responsáveis Cadastrados'));
    let email = JSON.parse(localStorage.getItem('Email Responsável'));
    let posicaoUser;

    for(i=0; i<paisCadastrados.length; i++){

        if (paisCadastrados[i].email==email){

            posicaoUser = i;
            break;
        }
    }

    let newUser = {

        nome: document.getElementById('nomeUser').value,
        idade: document.getElementById('idadeUser').value,
        email: document.getElementById('emailUser').value,
        senha: paisCadastrados[i].senha,
        descricao_de_perfil: paisCadastrados[i].descricao_de_perfil,
        whatsapp_url: paisCadastrados[i].whatsapp_url,
        instagram_url: paisCadastrados[i].instagram_url,
        facebook_url: paisCadastrados[i].facebook_url,
        imagem_de_perfil: paisCadastrados[i].imagem_de_perfil
    };

    paisCadastrados.splice(posicaoUser, 1, newUser);
    paisCadastrados = JSON.stringify(paisCadastrados);
    localStorage.setItem('Responsáveis Cadastrados', paisCadastrados);
    emailUser = newUser.email;
    emailUser = JSON.stringify(emailUser);
    localStorage.setItem('Email Responsável', emailUser);
    window.onload();
}