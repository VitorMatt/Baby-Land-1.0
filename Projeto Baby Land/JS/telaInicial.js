// função para o usuário escolher se é cuidador ou responsável;
function ecolhaResponsavelOuBaba() {

    const divPerfil = document.getElementById('divEscolhaPerfil');
    divPerfil.className = 'divEscolhaPerfil';
    divPerfil.innerHTML = `
        
        <div class="containertres">
            
         <div class="sair">
             <a href="../html/TelaInicial.html" class="saida">X</a>
         </div>

         <div class="titulo">
             <p><strong>Você é cuidador (a)<br> ou responsável?</strong></p>
         </div>

        </div>

        <div class="containerDois">

        <!--CUIDADOR-->
         <a href="../html/cadastroBabá.html" class="cuidador">
             <p><strong>Sou cuidador(a)</strong></p>
             <img src="../fotos/iconCuidador.png" alt="iconCuidador">
         </a>

        <!--RESPONSÀVEL-->
         <a href="../html/cadastroPais.html" class="responsável">
             <p><strong>Sou responsável</strong></p>
             <img src="../fotos/iconResponsavel.webp" alt="iconResponsavel">
         </a>

        </div>
    `;
}

function mostraBabas() {

    const cuidadores = JSON.parse(localStorage.getItem('Cuidadores Cadastrados'));
    const divBaba = document.getElementById('perfisBabas');
    divBaba.innerHTML='';
    
    cuidadores.forEach(perfil =>{
            const divBabaDois = document.createElement('div');
            divBabaDois.className='divPerfil';

            divBabaDois.innerHTML = `
            <a href="../HTML/servicos.html">
            <img src=${perfil.imagem_de_perfil}>
            <h2>${perfil.nome}</h2>
            <h3>${perfil.idade}</h3>
            <h3>Preferência(s):</h3>
            <h4>${perfil.preferencias}</h4>
            </a>
            `;
        divBaba.appendChild(divBabaDois);
    });
}

const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img img');

let contador = 0;

// função para o funcionamento do carrossel//
function carrossel(){
    contador++

    if(contador > img.length - 1){
        contador = 0;
    }

    imgs.style.transform = `translateX(${-contador * 1280}px)`;
}

setInterval(carrossel, 3800);