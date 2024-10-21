class herois {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }   
    atacar(poder) {
        switch (this.tipo) {
            case "mago":
                poder = "magia"
                break;
            case "guerreiro":
                poder = "espada"
                break;
            case "monge":
                poder = "artes marciais"
                break;
            case "ninja":
                poder = "shuriken"
                break;    
            }
            console.log(`O ${this.tipo} atacou usando ${poder}`)
        }
}
let primeiroPersonagem = new herois("Gandalf", 67, "mago")
let segundoPersonagem = new herois("Bruce Lee", 35, "monge")

primeiroPersonagem.atacar()
segundoPersonagem.atacar()