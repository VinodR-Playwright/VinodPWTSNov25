//Utility functions for test data generation
export class TestDataUtils {
  static generateRandomFirstName(): string {
    const firstNames = [
      "John",
      "Jane",
      "Michael",
      "Sarah",
      "Robert",
      "Emily",
      "David",
      "Jessica",
      "James",
      "Lisa"
    ];
    return firstNames[Math.floor(Math.random() * firstNames.length)];
  }

  static generateRandomLastName(): string {
    const lastNames = [
      "Smith",
      "Johnson",
      "Williams",
      "Brown",
      "Jones",
      "Garcia",
      "Miller",
      "Davis",
      "Rodriguez",
      "Martinez"
    ];
    return lastNames[Math.floor(Math.random() * lastNames.length)];
  }

  static generateRandomZipCode(): string {
    return Math.floor(10000 + Math.random() * 90000).toString();
  }

  static generateCheckoutData() {
    return {
      firstName: this.generateRandomFirstName(),
      lastName: this.generateRandomLastName(),
      zipCode: this.generateRandomZipCode()
    };
  }
}
