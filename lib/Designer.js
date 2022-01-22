const Employee = require('./Employee');

class Designer extends Employee {
    constructor(name, id, email, phone) {
        super(name, id, email, phone);
    }

    getRole() {
        return 'Designer';
    }
}

module.exports = Designer;