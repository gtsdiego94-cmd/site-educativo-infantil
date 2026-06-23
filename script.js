// ===== BANCO DE DADOS DE PERGUNTAS =====
const bancoPerguntas = {
    multiplicacao: [
        {
            pergunta: "Quanto é 3 × 4?",
            opcoes: ["12", "7", "10", "15"],
            resposta: "12"
        },
        {
            pergunta: "Quanto é 5 × 6?",
            opcoes: ["30", "25", "35", "40"],
            resposta: "30"
        },
        {
            pergunta: "Quanto é 7 × 8?",
            opcoes: ["56", "50", "60", "48"],
            resposta: "56"
        },
        {
            pergunta: "Quanto é 9 × 2?",
            opcoes: ["18", "15", "20", "12"],
            resposta: "18"
        },
        {
            pergunta: "Quanto é 6 × 6?",
            opcoes: ["36", "30", "40", "42"],
            resposta: "36"
        }
    ],
    divisao: [
        {
            pergunta: "Quanto é 20 ÷ 4?",
            opcoes: ["5", "6", "4", "7"],
            resposta: "5"
        },
        {
            pergunta: "Quanto é 30 ÷ 5?",
            opcoes: ["6", "5", "7", "8"],
            resposta: "6"
        },
        {
            pergunta: "Quanto é 48 ÷ 6?",
            opcoes: ["8", "7", "9", "10"],
            resposta: "8"
        },
        {
            pergunta: "Quanto é 35 ÷ 7?",
            opcoes: ["5", "6", "4", "7"],
            resposta: "5"
        },
        {
            pergunta: "Quanto é 64 ÷ 8?",
            opcoes: ["8", "7", "9", "6"],
            resposta: "8"
        }
    ],
    fracoes: [
        {
            pergunta: "1/2 é igual a quantos por cento?",
            opcoes: ["50%", "25%", "75%", "100%"],
            resposta: "50%"
        },
        {
            pergunta: "1/4 é a mesma coisa que:",
            opcoes: ["25%", "50%", "75%", "10%"],
            resposta: "25%"
        },
        {
            pergunta: "3/4 de um pizza é:",
            opcoes: ["Três pedaços de quatro", "Um pedaço de quatro", "Dois pedaços de quatro", "Toda a pizza"],
            resposta: "Três pedaços de quatro"
        },
        {
            pergunta: "Se você tem 8 maçãs e come 1/4, quantas sobram?",
            opcoes: ["6", "4", "2", "8"],
            resposta: "6"
        },
        {
            pergunta: "1/3 de 9 é:",
            opcoes: ["3", "6", "9", "1"],
            resposta: "3"
        }
    ],
    verbos: [
        {
            pergunta: "Qual é um verbo?",
            opcoes: ["correr", "feliz", "azul", "casa"],
            resposta: "correr"
        },
        {
            pergunta: "Qual alternativa tem um verbo?",
            opcoes: ["Eu sou uma criança", "A menina é alegre", "Nós somos amigos", "Todas as alternativas"],
            resposta: "Todas as alternativas"
        },
        {
            pergunta: "Qual frase tem um verbo?",
            opcoes: ["O gato pula", "Um livro grande", "A casa vermelha", "Três maçãs"],
            resposta: "O gato pula"
        },
        {
            pergunta: "O que é um verbo?",
            opcoes: ["Uma palavra que indica ação", "Uma pessoa", "Um lugar", "Um objeto"],
            resposta: "Uma palavra que indica ação"
        },
        {
            pergunta: "Qual palavra é um verbo: estudar, livro, rápido?",
            opcoes: ["estudar", "livro", "rápido", "nenhuma"],
            resposta: "estudar"
        }
    ],
    pontuacao: [
        {
            pergunta: "Qual é a função do ponto final?",
            opcoes: ["Finalizar uma frase", "Separar ideias", "Fazer uma pergunta", "Expressar surpresa"],
            resposta: "Finalizar uma frase"
        },
        {
            pergunta: "Para fazer uma pergunta, usamos:",
            opcoes: ["Ponto de interrogação", "Ponto final", "Vírgula", "Ponto de exclamação"],
            resposta: "Ponto de interrogação"
        },
        {
            pergunta: "Qual frase está pontuada corretamente?",
            opcoes: ["Como você está?", "Como você está.", "como você está?", "Como você está"],
            resposta: "Como você está?"
        },
        {
            pergunta: "A vírgula é usada para:",
            opcoes: ["Separar ideias em uma frase", "Finalizar uma frase", "Fazer perguntas", "Expressar emoções"],
            resposta: "Separar ideias em uma frase"
        },
        {
            pergunta: "Qual sinal expressa surpresa ou forte emoção?",
            opcoes: ["Ponto de exclamação", "Ponto final", "Vírgula", "Ponto de interrogação"],
            resposta: "Ponto de exclamação"
        }
    ],
    ortografia: [
        {
            pergunta: "Como se escreve corretamente?",
            opcoes: ["Brincadeira", "Bricandeira", "Brincadeira", "Brincadere"],
            resposta: "Brincadeira"
        },
        {
            pergunta: "Qual palavra está escrita corretamente?",
            opcoes: ["Receição", "Recepção", "Resepção", "Recepsão"],
            resposta: "Recepção"
        },
        {
            pergunta: "Como se escreve a cor?",
            opcoes: ["Amarelo", "Amarelo", "Amarelo", "Amarielo"],
            resposta: "Amarelo"
        },
        {
            pergunta: "Qual é a grafia correta?",
            opcoes: ["Maçã", "Maça", "Masã", "Masã"],
            resposta: "Maçã"
        },
        {
            pergunta: "Como se escreve?",
            opcoes: ["Excelente", "Ecselente", "Exelente", "Ecelente"],
            resposta: "Excelente"
        }
    ],
    solar: [
        {
            pergunta: "Qual planeta é o mais próximo do Sol?",
            opcoes: ["Mercúrio", "Vênus", "Terra", "Marte"],
            resposta: "Mercúrio"
        },
        {
            pergunta: "Quantos planetas existem em nosso Sistema Solar?",
            opcoes: ["8", "9", "7", "10"],
            resposta: "8"
        },
        {
            pergunta: "Qual é o maior planeta do Sistema Solar?",
            opcoes: ["Júpiter", "Saturno", "Terra", "Netuno"],
            resposta: "Júpiter"
        },
        {
            pergunta: "A Terra é o quantoeiro planeta do Sol?",
            opcoes: ["3º", "2º", "4º", "1º"],
            resposta: "3º"
        },
        {
            pergunta: "Qual planeta é famoso pelos seus anéis?",
            opcoes: ["Saturno", "Urano", "Marte", "Vênus"],
            resposta: "Saturno"
        }
    ],
    corpo: [
        {
            pergunta: "Quantos ossos aproximadamente tem o corpo humano?",
            opcoes: ["206", "150", "300", "100"],
            resposta: "206"
        },
        {
            pergunta: "O que o coração faz?",
            opcoes: ["Bombeia sangue", "Processa alimentos", "Controla movimentos", "Filtra água"],
            resposta: "Bombeia sangue"
        },
        {
            pergunta: "Quantas vezes o coração bate por minuto em média?",
            opcoes: ["70 vezes", "150 vezes", "20 vezes", "200 vezes"],
            resposta: "70 vezes"
        },
        {
            pergunta: "Qual órgão produz saliva?",
            opcoes: ["Glândulas salivares", "Estômago", "Fígado", "Pulmão"],
            resposta: "Glândulas salivares"
        },
        {
            pergunta: "Quantos músculos principais tem o corpo humano?",
            opcoes: ["640", "200", "100", "1000"],
            resposta: "640"
        }
    ],
    animais: [
        {
            pergunta: "Qual animal é o rei da selva?",
            opcoes: ["Leão", "Tigre", "Elefante", "Gorila"],
            resposta: "Leão"
        },
        {
            pergunta: "Qual animal é o mais rápido do mundo?",
            opcoes: ["Guepardo", "Antílope", "Cavalo", "Falcão peregrino"],
            resposta: "Guepardo"
        },
        {
            pergunta: "Quantas patas tem uma aranha?",
            opcoes: ["8", "6", "4", "10"],
            resposta: "8"
        },
        {
            pergunta: "Qual é o animal terrestre mais pesado?",
            opcoes: ["Elefante", "Rinoceronte", "Girafa", "Hipopótamo"],
            resposta: "Elefante"
        },
        {
            pergunta: "Os pinguins vivem em qual região?",
            opcoes: ["Antártida", "Ártico", "Amazonas", "Saara"],
            resposta: "Antártida"
        }
    ]
};

// ===== VARIÁVEIS GLOBAIS =====
let quizAtual = null;
let perguntaAtual = 0;
let pontuacaoAtual = 0;
let respostasUsuario = [];

// ===== FUNÇÕES DE NAVEGAÇÃO =====
function abrirDisciplina(disciplina) {
    // Ocultar todas as páginas
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(pagina => pagina.classList.remove('ativa'));

    // Mostrar a página selecionada
    const pagina = document.getElementById(disciplina);
    if (pagina) {
        pagina.classList.add('ativa');
    }

    // Scroll para o topo
    window.scrollTo(0, 0);
}

// ===== FUNÇÕES DE QUIZ =====
function iniciarQuiz(tema) {
    quizAtual = tema;
    perguntaAtual = 0;
    pontuacaoAtual = 0;
    respostasUsuario = [];

    // Mostrar área de quiz
    abrirDisciplina('quiz-area');

    // Atualizar informações do quiz
    document.getElementById('total-perguntas').textContent = bancoPerguntas[tema].length;
    document.getElementById('quiz-resultado').style.display = 'none';
    document.getElementById('quiz-conteudo').style.display = 'block';

    // Mostrar primeira pergunta
    mostrarPergunta();
}

function mostrarPergunta() {
    const tema = quizAtual;
    const perguntas = bancoPerguntas[tema];
    const pergunta = perguntas[perguntaAtual];

    // Atualizar número da pergunta
    document.getElementById('pergunta-numero').textContent = perguntaAtual + 1;

    // Atualizar barra de progresso
    const progresso = ((perguntaAtual) / perguntas.length) * 100;
    document.getElementById('barra-preenchida').style.width = progresso + '%';

    // Atualizar texto da pergunta
    document.getElementById('pergunta-texto').textContent = pergunta.pergunta;

    // Gerar opcoes de resposta
    const containerOpcoes = document.getElementById('opcoes-quiz');
    containerOpcoes.innerHTML = '';

    // Embaralhar opções
    const opcoesEmbaralhadas = embaralharArray([...pergunta.opcoes]);

    opcoesEmbaralhadas.forEach(opcao => {
        const botao = document.createElement('button');
        botao.className = 'opcao-resposta';
        botao.textContent = opcao;
        botao.onclick = () => responderPergunta(opcao, pergunta.resposta);
        containerOpcoes.appendChild(botao);
    });
}

function responderPergunta(resposta, respostaCorreta) {
    const tema = quizAtual;
    const perguntas = bancoPerguntas[tema];

    // Marcar resposta do usuário
    respostasUsuario.push({
        pergunta: perguntas[perguntaAtual].pergunta,
        resposta: resposta,
        correta: resposta === respostaCorreta
    });

    // Calcular pontuação
    if (resposta === respostaCorreta) {
        pontuacaoAtual += Math.round(100 / perguntas.length);
    }

    // Desabilitar botões
    const botoes = document.querySelectorAll('.opcao-resposta');
    botoes.forEach(botao => {
        botao.style.pointerEvents = 'none';
        if (botao.textContent === respostaCorreta) {
            botao.classList.add('correta');
        } else if (botao.textContent === resposta && resposta !== respostaCorreta) {
            botao.classList.add('incorreta');
        }
    });

    // Atualizar pontuação
    document.getElementById('pontuacao').textContent = pontuacaoAtual;

    // Próxima pergunta após 2 segundos
    setTimeout(() => {
        perguntaAtual++;
        if (perguntaAtual < perguntas.length) {
            mostrarPergunta();
        } else {
            finalizarQuiz();
        }
    }, 2000);
}

function finalizarQuiz() {
    // Mostrar resultado
    document.getElementById('quiz-conteudo').style.display = 'none';
    document.getElementById('quiz-resultado').style.display = 'block';

    const percentual = pontuacaoAtual;
    const mensagens = {
        excelente: "Parabéns! Você foi excelente! 🌟",
        bom: "Muito bom! Continue assim! 🎉",
        regular: "Bom trabalho! Continue praticando! 💪",
        precisa: "Tente novamente! Você consegue! 🚀"
    };

    let categoria;
    if (percentual === 100) categoria = 'excelente';
    else if (percentual >= 80) categoria = 'bom';
    else if (percentual >= 50) categoria = 'regular';
    else categoria = 'precisa';

    document.getElementById('resultado-texto').textContent = mensagens[categoria];
    document.getElementById('resultado-mensagem').textContent = `Você acertou ${pontuacaoAtual}% das questões!`;

    // Atualizar barra de progresso
    document.getElementById('barra-preenchida').style.width = '100%';
}

// ===== FUNÇÃO AUXILIAR =====
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    // Mostrar página inicial ao carregar
    abrirDisciplina('inicio');
});