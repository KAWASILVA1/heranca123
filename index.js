//classe Animal
class Animal {
    constructor(nome) {
    this.nome = nome;
    }
    
    comer() {
    console.log(`${this.nome} está comendo.`);
    }
    
    dormir() {
    console.log(`${this.nome} está dormindo.`);
    }
    }
    
    //classe Cachorro que herda de Animal
    class Cachorro extends Animal {
    latir() {
    console.log(`${this.nome} está latindo.`);
    }
    }
    
    //instâncias das classes
    const animal1 = new Animal('Animal1');
    const cachorro1 = new Cachorro('Cachorro1');
    
    //métodos das classes
    animal1.comer();
    animal1.dormir();
    
    cachorro1.comer();
    cachorro1.dormir();
    cachorro1.latir();