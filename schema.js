const axios = require('axios');

const {  
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull
}= require('graphql');

// Gif information
const GifType = new GraphQLObjectType({
    name: 'Gif',
    fields: () => ({
        id: {type : new GraphQLNonNull(GraphQLString)},
        bitly_gif_url: { type: GraphQLString },
        rating: { type: GraphQLString },
        images : { type: GifImage }
    })
});

// Image specification
const GifImage = new GraphQLObjectType({
    name: 'Image',
    fields: () => ({
        original: { type: GraphQLString }
    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields: {
        id: {
            type: new GraphQLList(GifType),
            resolve(parent, args) {
                return axios
                .get(`https://api.giphy.com/v1/gifs/trending&api_key=tY3kykAKF4BORze5adGtAziQjfy0PYhz`)
                .then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
