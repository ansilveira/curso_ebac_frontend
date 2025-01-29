class Animal {
    constructor(nome) {
        if (this.constructor === Animal) {
            throw new Error("Não é possível instanciar uma classe abstrata diretamente.");
        }
        this.nome = nome;
        }  

        fazerSom() {
        throw new Error("Método 'fazerSom' deve ser implementado.");
        }
    }
        
    class Cachorro extends Animal {
        fazerSom() {
        console.log(`${this.nome} diz: Au Au!`);
        }
    }
        
    class Gato extends Animal {
        fazerSom() {
        console.log(`${this.nome} diz: Miau!`);
        }
    }
        
    const cachorro1 = new Cachorro("Banditi");
    const gato1 = new Gato("Cruel");
    const cachorro2 = new Cachorro("Ajudante de Papai Noel");
        
    cachorro1.fazerSom(); 
    gato1.fazerSom();     
    cachorro2.fazerSom(); 