// Base a ser utilizada
const alunosDaEscola = [
    {
        nome: "Henrique",
        notas: [],
        cursos: [],
        faltas: 0
    },
    {
        nome: "Edson",
        notas: [],
        cursos: [],
        faltas: 0
    },
    {
        nome: "Bruno",
        notas: [10, 9, 8, 10],
        cursos: [{
            nomeDoCurso: "PHP",
            dataMatricula: new Date()
        }],
        faltas: 4
    },
    {
        nome: "Guilherme",
        notas: [10, 9.8, 9.6],
        cursos: [{
            nomeDoCurso: "Full Stack",
            dataMatricula: new Date()
        }],
        faltas: 0
    },
    {
        nome: "Carlos",
        notas: [],
        cursos: [],
        faltas: 0
    },
    {
        nome: "Lucca",
        notas: [10, 9.8, 10],
        cursos: [{
            nomeDoCurso: "UX",
            dataMatricula: new Date()
        }],
        faltas: 1
    }];

const adicionarAluno = nomeDoAluno => {
    alunosDaEscola.push({
        nome: nomeDoAluno,
        notas: [],
        cursos: [],
        faltas: 0
    })
    console.log(`O aluno ${nomeDoAluno} foi inserido corretamente`);
}

const listarAlunos = () => {
    for (let aluno of alunosDaEscola) {
        console.log(`
            Nome: ${aluno.nome}
            Notas: ${aluno.notas}
            Cursos: ${aluno.cursos.map(curso => {
            return `${curso.nomeDoCurso} / Data de matricula: ${curso.dataMatricula}`
        })}
            Faltas: ${aluno.faltas}
            `);
    }
}

const buscarAluno = (nomeDoAluno) => {

    let alunosEncontrados = [];

    for (let aluno of alunosDaEscola) {
        if (aluno.nome === nomeDoAluno) {
            alunosEncontrados.push(aluno);
        }
    }

    if (alunosEncontrados.length > 0) {
        console.log(`${alunosEncontrados.length} aluno foi encontrado!`);
        return alunosEncontrados;
    } else {
        console.log(`O aluno ${nomeDoAluno} não foi encontrado!`);
        return alunosEncontrados
    }

}

const matricularAluno = (aluno, curso) => {

    for (let nomeAluno of alunosDaEscola) {
        if (nomeAluno.nome === aluno.nome) {
            let estaCursando = nomeAluno.cursos.filter(elem => {
                return elem.nomeDoCurso === curso;
            })

            if (estaCursando.length > 0) {
                console.log(`${nomeAluno.nome} ja está matriculado no curso de ${curso}`);
            } else {
                let matricular = {
                    nomeDoCurso: curso,
                    dataMatricula: new Date()
                };
                nomeAluno.cursos.push(matricular);
                console.log(`${nomeAluno.nome} foi matriculado no curso de ${curso}`);
            }
            return;
        }
    }
    console.log(`${aluno.nome} não está matriculado na escola`);
}

const Cursando = aluno => {
    if (buscarAluno(aluno.nome).length > 0) {
        for (let nomeAluno of alunosDaEscola) {
            if (nomeAluno.nome === aluno.nome) {
                let estaCursando = nomeAluno.cursos.map(curso => {
                    return curso.nomeDoCurso
                })
                if (estaCursando.length > 0) {
                    return true;
                } else {
                    console.log(`${nomeAluno.nome} não está matriculado em nenhum curso`);
                    return false;
                }
            }
        }
    } return false;

}

const aplicarFalta = aluno => {
    if (Cursando(aluno)) {
        aluno.faltas++;
        console.log(`Foi adicionada uma falta para ${aluno.nome}`);
    }
}

const aplicarNota = (aluno, nota) => {
    if (Cursando(aluno)) {
        if (aluno.notas.length <= 3) {
            aluno.notas.push(nota);
            console.log(`Foi adicionada uma nota para ${aluno.nome}`);
        } else {
            console.log(`O aluno ja tem as quatros notas`);
        }
    }
}

const aprovarAluno = aluno => {

    if (Cursando(aluno)) {

        let notas = aluno.notas.reduce((acc, nota) => {
            return acc + nota
        })
        let media = notas / 4;

        if (aluno.faltas <= 3 && media >= 7) {
            console.log(`${aluno.nome} foi aprovado com media: ${media}`);
        } else if (aluno.faltas > 3) {
            console.log(`${aluno.nome} foi reprovado com ${aluno.faltas} faltas`);
        } else {
            console.log(`${aluno.nome} foi reprovado, media: ${media}`);
        }
    }
}

listarAlunos(alunosDaEscola);
adicionarAluno("João");
let alunoBuscado = buscarAluno("João");
console.log(alunoBuscado);
matricularAluno(alunosDaEscola[0], "PHP");
aplicarFalta(alunosDaEscola[0]);
aplicarNota(alunosDaEscola[0], 10);
aplicarNota(alunosDaEscola[0], 3);
aplicarNota(alunosDaEscola[0], 7);
aplicarNota(alunosDaEscola[0], 9);
aplicarNota(alunosDaEscola[2], 8);
matricularAluno(alunosDaEscola[6], "Java");
aplicarNota(alunosDaEscola[6], 3);
aplicarNota(alunosDaEscola[6], 3);
aplicarNota(alunosDaEscola[6], 3);
aplicarNota(alunosDaEscola[6], 3);
aplicarFalta(alunosDaEscola[6]);
aplicarFalta(alunosDaEscola[6]);
listarAlunos(alunosDaEscola);
aprovarAluno(alunosDaEscola[0]);
aprovarAluno(alunosDaEscola[1]);
aprovarAluno(alunosDaEscola[2]);
aprovarAluno(alunosDaEscola[3]);
aprovarAluno(alunosDaEscola[6]);





