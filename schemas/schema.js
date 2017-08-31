import {
    makeExecutableSchema
} from 'graphql-tools';

import Cat from './cat-entity';
import Dog from './dog-entity';
import Resolvers from '../resolvers/resolver';

const Query = `
    type Query {
        allCats:[Cat!]!,
        allDogs:[Dog!]!
    }
`;

const Mutation = `
    type Mutation {
        createCat(name: String!): Cat!,
        createDog(name: String!): Dog!
    }

`;

const SchemaDefinition = `
    schema {
        query: Query,
        mutation: Mutation
    }
`;

export default makeExecutableSchema({
    typeDefs: [
        SchemaDefinition, Query, Mutation,
        // as typeDefs only accepts an array of strings or functions
        Cat,
        Dog
    ],
    // we could also concatenate arrays
    // typeDefs: [SchemaDefinition, RootQuery].concat(Post)
    resolvers: Resolvers,
});