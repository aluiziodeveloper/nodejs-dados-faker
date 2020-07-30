const faker = require('faker');
faker.locale = 'pt_BR';

const data = {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    city: faker.address.city(),
    country: faker.address.country(),
    zipcode: faker.address.zipCode()
};

console.log('Primeiro nome: ' + faker.name.firstName());

console.log('Frase: ' + faker.lorem.sentence());

console.log('Parágrafo: ' + faker.lorem.paragraph());

console.log('Mac-address: ' + faker.internet.mac());

console.log('IP: ' + faker.internet.ip());

console.log(data);
