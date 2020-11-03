abstract class Cupcake {

    abstract baked(): void
}

abstract class CupcakeDecorator extends Cupcake {
    protected cupcake: Cupcake
    
    constructor(decoratedCupcake: Cupcake) {
        super()
        this.cupcake = decoratedCupcake;
    }
    
    abstract baked(): void
}

class PlainCupcake extends Cupcake {

    public baked():void {
        console.log("No topping cupcake is ready..")
    }
}

class ChocolateCupcake extends CupcakeDecorator {

    public baked():void {
        this.cupcake.baked();
        console.log("Adding chocolate frosting..")
    }
}

class SprinklesCupcake extends CupcakeDecorator {

    public baked():void {
        this.cupcake.baked();
        console.log("Adding some sprinkles..")
    }
}

class MochaCupcake extends CupcakeDecorator {

    public baked():void {
        this.cupcake.baked();
        console.log("Piping some mocha frosting..")
    }
}


const simpleCupcake = new PlainCupcake();

//No Decorator Version:
simpleCupcake.baked();

//Decorator Version - Chocolate:
const chocolateCupcake =  new ChocolateCupcake(simpleCupcake);
chocolateCupcake.baked();

//Decorator Version - Sprinkles:
const sprinklesCupcake = new SprinklesCupcake(simpleCupcake);
sprinklesCupcake.baked();

//Decorator Version - Chocolate Sprinkles:
const chocolateSprinklesCupcake = new SprinklesCupcake(chocolateCupcake);
chocolateSprinklesCupcake.baked();



