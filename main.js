class Aluno{
    constructor(nome, nota){
        this.nome = nome
        this.nota = nota
    }
    passou(){
        if(this.nota >= 6){
            return true
        }
        return false
    }
}
const alunos = [
    new Aluno('Andre', 10),
    new Aluno('Bianca', 7),
    new Aluno('Carlos', 9),
    new Aluno('Daniela', 5),
    new Aluno('Eduardo', 8),
    new Aluno('Fernanda', 6),
    new Aluno('Gustavo', 4),
    new Aluno('Helena', 7),
    new Aluno('Igor', 3),
    new Aluno('Julia', 10),
    new Aluno('Kevin', 6),
    new Aluno('Larissa', 8),
    new Aluno('Marcos', 5),
    new Aluno('Natalia', 9),
    new Aluno('Otavio', 4),
    new Aluno('Paula', 7),
    new Aluno('Quiteria', 10),
    new Aluno('Ricardo', 3),
    new Aluno('Silvia', 9),
    new Aluno('Tiago', 6),
    new Aluno('Ulisses', 7),
    new Aluno('Valeria', 8),
    new Aluno('Wagner', 5),
    new Aluno('Xenia', 9),
    new Aluno('Yasmin', 6),
    new Aluno('Zacarias', 4),
    new Aluno('Aline', 8),
    new Aluno('Bruno', 7),
    new Aluno('Claudia', 9),
    new Aluno('Diego', 10)
];

let aprovados = []
let reprovados = []
alunos.map(function(i){
    if(i.passou() ===  true){
        aprovados.push(i)
    }
    else{
        reprovados.push(i)
    }
})

console.log('Os aprovados foram:')
console.log(aprovados)
console.log('Os reprovados foram:')
console.log(reprovados)

