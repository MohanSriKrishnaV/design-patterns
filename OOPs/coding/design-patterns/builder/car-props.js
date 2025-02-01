class Car {
    constructor(builder) {
      this.model = builder.model;
      this.color = builder.color;
      this.gps = builder.gps;
      this.sunroof = builder.sunroof;
    }
  }
  
  class CarBuilder {
    constructor(model, color) {
      this.model = model;
      this.color = color;
    }
  
    setGPS(gps) {
      this.gps = gps;
      return this;
    }
  
    setSunroof(sunroof) {
      this.sunroof = sunroof;
      return this;
    }
  
    build() {
      return new Car(this);
    }
  }
  
  // Usage
  const car1 = new CarBuilder("Tesla Model 3", "Red")
    .setGPS(true)
    .setSunroof(true)
    .build();
  

    
  console.log(car1);
  