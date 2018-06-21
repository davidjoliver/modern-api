const graphql = require('graphql');
const PaintingType = require('./PaintingType');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLScema
  }= graphql;

  const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      painting: {
        type: PaintingType,
        args: { id: { type: GraphQLString } },
        resolve(parent, args) {
        }
      }
    }
  });
