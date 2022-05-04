const express = require('express');
const cors = require('cors');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema');

//TODO need to add database.
const users = [{id: 1, username: 'Vito', age: 10}];

const root = {
    getAllUsers: () => {
        return users
    },
    getUser: ({id}) => {
        return users.find(user => user.id === id)
    },
    createUser: ({input}) => {
        const id = Date.now();
        const user = {id , ...input};
        users.push(user);
        return user;
    }
}

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

app.listen(5000, () => console.log("Listen port 5000."));