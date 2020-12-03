const express = require('express');
const app = express();
const { db, Project, Task } = require('./models/index');
//router
const indexRouter = require('./routes/indexRouter');
const projectsRouter = require('./routes/projectsRouter');
const tasksRouter = require('./routes/tasksRouter');

//middlewares
app.use(express.json()) //peticiones JSON que me lleguen por body, las va a parsear

//routes
app.use('/', indexRouter);
app.use('/projects', projectsRouter);
app.use('/tasks', tasksRouter);

db.sync({ force: true })
    .then(() => {
        app.listen(4000, () => {
            console.log('Escuchando en el puerto 4000')
        })

        const Project1 = Project.create({
            name: 'Checkpoint M4',
            description: 'Integrador'
        })

        const Project2 = Project.create({
            name: 'Descanso de repaso M4',
            description: 'Integrador'
        })

        const Task1 = Task.create({
            name: 'Hacer Backend',
            status: 'incomplete',
            projectId: 1
        })

        const Task2 = Task.create({
            name: 'Hacer Frontend',
            status: 'incomplete',
            projectId: 1
        })

        const Task3 = Task.create({
            name: 'Cafesito y a dormir',
            status: 'incomplete',
            projectId: 2
        })
    })
