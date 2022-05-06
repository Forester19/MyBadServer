const {buildSchema} = require('graphql');

const schema = buildSchema(`
    type User {
        id: ID
        username: String
        age: Int
        post: [Post]
    }
    type Post {
        id: ID
        title: String
        content: String
    }
    input UserInput {
        id: ID
        username: String!
        age: Int!
        post: [PostInput]
    }
    input PostInput {
        id: ID
        title: String!
        content: String!
    }
    type Query {
        getAllUsers: [User]
        getUser(id: ID): User
    }
    type Mutation {
        createUser(input: UserInput): User
        setCommonPrefixString(input: CommonPrefixStringInput): CommonPrefixString
    }
    type CommonPrefixString {
        id: ID
        str: String
    }
    input CommonPrefixStringInput {
        id: ID
        str: String!
    }
`);

module.exports = schema;