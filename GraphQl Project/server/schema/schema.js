const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString} = graphql;

const BookType = new GraphQLObjectType({
name: 'Book',
field: ()=>({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    genre: {type: GraphQLString}

})

});

const RootQuery = new GraphQLObjectType({
name: 'RootQueryType',
field: {
    book: {
    type: BookType,
    args: {id: {type:GraphQLString}}
    }
    }
    
 })