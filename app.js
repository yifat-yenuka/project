const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.//?

users = [
    {
        id: '11',
        name: 'miri',
        age: 12,
    },
    {
        id: '12',
        name: 'sara',
        age: 30,
    },
    {
        id: '13',
        name: 'dasi',
        age: 20,
    }
]

app.use(check);

app.get('/getusers', (req, res) => {
    console.log(users)
    res.json(users);
})

app.post('/postusers', (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.json(users);
    res.status(200).send('good');
})

app.patch('/patchusers/:id', (req, res) => {
    users.forEach(user => {
        if (user.id === req.params.id) {
            user.age = req.body.age;
            res.json(users);
        }

    });
})

app.put('/putusers/:id', (req, res) => {
    for (let index = 0; index < users.length; index++) {
        if (users[index].id === req.params.id) {
            users[index] = req.body;
            res.json(users);
        }
    }
})

app.delete('/delete/:id', (req, res) => {
    for (let index = 0; index < users.length; index++) {
        if (users[index].id === req.params.id) {
            users.splice(index,1)
            res.json(users);
        }
    }
})

//פונקצית middleware
function check(req, res, next) {
    if (req.query.id)                                     // query.id בודק אם יש בקריאה 
        return next();
    else
        res.send(' error: put id ')
}

//jsonwebtoken




app.listen(2000, () => {
    console.log('listening');
})