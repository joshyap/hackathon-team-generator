const Employee = require('./Employee');

class ProjectManager extends Employee {
    constructor(name, id, email, phone) {
        super(name, id, email, phone);
    }

    getRole() {
        return 'Project Manager';
    }
}

module.exports = ProjectManager;