import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

const typeDefs = `#graphql
    type Post {

        title: String,
        author: String,

    }

    type Query {
        posts: [Post]
    }
`

const posts = [
    {
        title: "What this all about.",
        author: "Devin Chance"
    }
]

const resolvers = {
    Query: {
        posts: () => posts,
    }
}

const server  = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { 
        port: 8080
    }
})

console.log(`Database running at http://localhost:8080`)