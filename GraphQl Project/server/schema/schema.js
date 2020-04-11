const graphql = require('graphql');
const_=require('lodash');

const {GraphQLObjectType, GraphQLString, GraphQLScema} = graphql;

//dummy data

var books = [
    {name: 'Name of the Wind',genre:"Fantasy", id: '1'},
     {name: 'Name of the Empire',genre:"Commedy", id: '2'},
      {name: 'Name of the Wind des',genre:"Fantasy", id: '3'},
];

const BookType = new GraphQLObjectType({
name: 'Book',
fields:()=>({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    genre: {type: GraphQLString}

})

});

const RootQuery = new GraphQLObjectType({
name: 'RootQueryType',
    fields: {
        book: {
        type: BookType,
        args: {id: {type:GraphQLString}},
            resolve(parent,args){
            //code to get data from db
            return _.find(books, {id:args.id});
            }
        }
    }

 });



 module.exports = new GraphQLScema({
    query: RootQuery

 });