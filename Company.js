const { faker } = require ('@faker-js/faker');

class Company {
    constructor(){
        this._id = faker.string.uuid();
        this.name = faker.company.name();
        this.address = {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
}
module.exports = Company;