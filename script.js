// Banco de perguntas
const quizzes = {
    multiplicacao: [
        {
            pergunta: "Quanto é 5 × 4?",
            opcoes: ["20", "15", "25", "10"],
            resposta: "20"
        },
        {
            pergunta: "Quanto é 8 × 2?",
            opcoes: ["10", "12", "16", "18"],
            resposta: "16"
        }
    ],

    divisao: [
        {
            pergunta: "Quanto é 12 ÷ 3?",
            opcoes: ["3", "4", "5", "6"],
            resposta: "4"
        },
        {
            pergunta: "Quanto é 20 ÷ 5?",
            opcoes: ["2", "4", "5", "6"],
            resposta: "4"
        }
    ],

    fracoes: [
        {
            pergunta: "Metade de uma pizza é:",
            opcoes: ["1/2", "1/4", "2/4", "3/4"],
            resposta: "1/2"
        }
    ],

    verbos: [
        {
            pergunta: "Qual destas palavras é um verbo?",
            opcoes: ["Casa", "Correr", "Azul", "Mesa"],
            resposta: "Correr"
        }
    ],

    pontuacao: [
        {
            pergunta: "Qual sinal usamos para fazer uma pergunta?",
            opcoes: ["!", ".", "?", ","],
            resposta: "?"
        }
    ],

    ortografia: [
        {
            pergunta: "Qual está correta?",
            opcoes: ["Caza", "Casa", "Kasa", "Cassa"],
            resposta: "Casa"
        }
    ],

    solar: [
        {
            pergunta: "Qual planeta é conhecido como planeta vermelho?",
            opcoes: ["Marte", "Terra", "Vênus", "Júpiter"],
            resposta: "Marte"
        }
    ],

    corpo: [
        {
            pergunta: "Qual órgão bombeia sangue?",
            opcoes: ["Pulmão", "Fígado", "Coração", "Rim"],
            resposta: "Coração"
        }
    ],

    animais: [
        {
            pergunta: "Qual destes animais é mamífero?",
            opcoes: ["Galinha", "Tubarão", "Golfinho", "Lagarto"],
            resposta: "Golfinho"
        }
    ]
};

let quizAtual = [];
let perguntaAtual = 0;
let pontuacao = 0;

// Navegação
function abrirDisciplina(id) {
    document.querySelectorAll(".pagina").forEach(pagina => {
        pagina.classList.remove("ativa");
    });

    document.getElementById(id).classList.add("ativa");
}

// Iniciar Quiz
function iniciarQuiz(tipo) {
    quizAtual = quizzes[tipo];
    perguntaAtual = 0;
    pontuacao = 0;

    document.getElementById("quiz-conteudo").style.display = "block";
    document.getElementById("quiz-resultado").style.display = "none";

    abrirDisciplina("quiz-area");
    mostrarPergunta();
}

// Mostrar Pergunta
function mostrarPergunta() {

    const pergunta = quizAtual[perguntaAtual];

    document.getElementById("pergunta-numero").textContent =
        perguntaAtual + 1;

    document.getElementById("total-perguntas").textContent =
        quizAtual.length;

    document.getElementById("pergunta-texto").textContent =
        pergunta.pergunta;

    const opcoesDiv =
        document.getElementById("opcoes-quiz");

    opcoesDiv.innerHTML = "";

    pergunta.opcoes.forEach(opcao => {

        const btn =
            document.createElement("button");

        btn.textContent = opcao;

        btn.onclick = () =>
            verificarResposta(opcao);

        opcoesDiv.appendChild(btn);
    });

    atualizarBarra();
}

// Verificar Resposta
function verificarResposta(respostaEscolhida) {

    if (
        respostaEscolhida ===
        quizAtual[perguntaAtual].resposta
    ) {
        pontuacao +=
            Math.floor(100 / quizAtual.length);
    }

    perguntaAtual++;

    if (perguntaAtual < quizAtual.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

// Resultado Final
function mostrarResultado() {

    document.getElementById("quiz-conteudo")
        .style.display = "none";

    document.getElementById("quiz-resultado")
        .style.display = "block";

    document.getElementById("pontuacao")
        .textContent = pontuacao;

    let mensagem = "";

    if (pontuacao >= 80) {
        mensagem =
            "🏆 Excelente! Você foi incrível!";
    } else if (pontuacao >= 50) {
        mensagem =
            "👏 Muito bem! Continue praticando!";
    } else {
        mensagem =
            "📚 Continue estudando. Você consegue!";
    }

    document.getElementById("resultado-texto")
        .textContent = "Fim do Quiz!";

    document.getElementById("resultado-mensagem")
        .textContent = mensagem;
}

// Barra de progresso
function atualizarBarra() {

    const porcentagem =
        ((perguntaAtual + 1) /
        quizAtual.length) * 100;

    document.getElementById("barra-preenchida")
        .style.width = porcentagem + "%";
}
