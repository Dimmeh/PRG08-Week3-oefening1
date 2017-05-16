class Driving implements Behaviour{
    public car : Car;

    constructor(c:Car){
        this.car = c;
    }

    draw(){
        this.car.x += this.car.speed;
    }

    onKeyDown(){
        this.car.behaviour = new Jumping(this.car);
    }
}