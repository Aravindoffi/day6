class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute) {
      this.baseFare = baseFare;           // Base fare for the ride
      this.costPerMile = costPerMile;     // Cost per mile
      this.costPerMinute = costPerMinute; // Cost per minute
    }
  
    calculatePrice(distanceInMiles, timeInMinutes) {
      // Calculate the price based on the provided parameters
      const price = this.baseFare + (distanceInMiles * this.costPerMile) + (timeInMinutes * this.costPerMinute);
      return price;
    }
  }
  
  // Example usage:
  const calculator = new UberPriceCalculator(2.5, 1.5, 0.3); // Example pricing rates
  
  const distance = 10;  // Distance in miles
  const time = 15;     // Time in minutes
  
  const price = calculator.calculatePrice(distance, time);
  console.log(`The Uber ride will cost RS ${price}`);
  