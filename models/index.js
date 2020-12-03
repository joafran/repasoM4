const Sequelize = require('sequelize');

const db = new Sequelize('postgres://postgres:12345@localhost:5432/repaso', {
    logging: false
})

const Task = db.define('task', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('done', 'incomplete'),
        allowNull: false
    }
}, {
    timestamps: false
});

const Project = db.define('project', {
    name: {
        type: Sequelize.STRING, //varchar(255)
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT, // texto mas grande
        allowNull: false
    }
});

Task.belongsTo(Project)
Project.hasMany(Task)

module.exports = {
    db,
    Project,
    Task
}
