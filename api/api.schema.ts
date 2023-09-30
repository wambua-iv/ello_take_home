const schema_init = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: "Query",
      fields: {
        book: {
          type: Book,
          args: { id: { type: GraphQLInt } },
          resolve: (_, args) => Books[args.id],
        },
        books: {
          type: new GraphQLList(Book),
          resolve: () => Books
        }
      },
    }),
  });
  
  export default schema_init;