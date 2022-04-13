class Ninja {
    constructor(name, salud, velocidad, fuerza){
        this.name = name;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName(){
        console.log(Ninja.name);
    }

    showStats(){
        console.log(Ninja.name, Ninja.salud, Ninja.velocidad, Ninja.fuerza);
    }

    drinkSake (){
        this.salud += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

console.log(ninja1);

class Sensei extends Ninja {
    constructor(name, salud, fuerza, velocidad, sabiduria){
        super(name, 200, 10, 10)
        this.name = name;
        this.salud = 200;
        this.fuerza = 10;
        this.velocidad = 10;
        this.sabiduria = 10;
        this.drinkSake();
    }
    speakWisdom(){
        return "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses";
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

console.log(superSensei);
