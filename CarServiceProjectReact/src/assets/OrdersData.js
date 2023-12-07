const OrdersData = [
  {
    date: '07/12/2023',
    mechanicName: 'Ivan Ivanov',
    carInfo: {
      regNo: 'XXXXXX',
      make: 'Toyota',
      model: 'Camry',
      year: 2023,
      fuel: 'Petrol',
      mileage: 120000,
      transmission: 'Automatic',
    },
    customerInfo: {
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'johndoe@example.com',
    },
    servicesInfo: {
      taskDescription: 'General service, including oil change, filter replacement, and tire rotation.',
      totalPrice: 300,
    },
  },
  {
    date: '08/12/2023',
    mechanicName: 'Petr Petrov',
    carInfo: {
      regNo: 'YYYYYY',
      make: 'Honda',
      model: 'Civic',
      year: 2022,
      fuel: 'Diesel',
      mileage: 80000,
      transmission: 'Manual',
    },
    customerInfo: {
      name: 'Jane Doe',
      phone: '456-789-1230',
      email: 'janedoe@example.com',
    },
    servicesInfo: {
      taskDescription: 'Brake pad replacement and brake fluid flush.',
      totalPrice: 200,
    },
  },
   {
    date: '09/12/2023',
    mechanicName: 'Maria Ivanova',
    carInfo: {
      regNo: 'ZZZZZ',
      make: 'Hyundai',
      model: 'Sonata',
      year: 2021,
      fuel: 'Petrol',
      mileage: 50000,
      transmission: 'Automatic',
    },
    customerInfo: {
      name: 'David Smith',
      phone: '789-123-4560',
      email: 'davidsmith@example.com',
    },
    servicesInfo: {
      taskDescription: 'Tune-up, including spark plug replacement, air filter replacement, and valve adjustment.',
      totalPrice: 250,
    },
  }
  
  ];
  

  export default OrdersData;
  