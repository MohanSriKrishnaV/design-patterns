
class lot{

}


class vehicleCreator{
    constructor(){
    }
    create(name){
        if(name=="car"){
            return new car()
            }
            else if (name=="bike"){
                return new bike()
            }
            else if (name=="truck"){
                return new truck()
            }
    }
}


class vehicle{
    constructor(){
    }
    }
    

class car extends vehicle{
constructor(){
    super()
}
}

class bike  extends vehicle {
constructor(){
    super()

}
}

class truck  extends vehicle  {
    constructor(){
        super()

    }
}

class spot{
    #cost
constructor(name){

if(name=="big"){
this.#cost=30
}
else if (name=="small"){
    this.#cost=10

}
else if (name=="medium"){
    this.#cost=20
}
}
getCost(){
    return this.#cost
}

}

let l=new lot()
// let s1=new spot("big")
// let s2=new spot("small")
// let s3=new spot("medium")
let vehicleCreatorinst=new vehicleCreator()

let bike1= vehicleCreatorinst.create("bike")
let car1= vehicleCreatorinst.create("car")
let truck1= vehicleCreatorinst.create("truck")



console.log(bike1,"bike1");
console.log(car1,"car1");
console.log(truck1,"truck1");


// console.log(s1.getCost());
// console.log(s2.getCost());
// console.log(s3.getCost());





