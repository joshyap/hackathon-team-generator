const Employee = require('./Employee');

class Frontend extends Employee {
    constructor(name, id, email, phone) {
        super(name, id, email, phone);
    }

    getRole() {
        return 'Frontend';
    }
}

module.exports = Frontend;