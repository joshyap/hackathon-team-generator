const Employee = require('./Employee');

class Backend extends Employee {
    constructor(name, id, email, phone) {
        super(name, id, email, phone);
    }

    getRole() {
        return 'Backend';
    }
}

module.exports = Backend;