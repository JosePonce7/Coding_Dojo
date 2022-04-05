class Ninja {
    constructor(name, salud){
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