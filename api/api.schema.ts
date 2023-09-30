import {
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
  } from "graphql";
import { Books } from "./api.datasource";

  
  const tokens_type = new GraphQLObjectType({
    name: "Tokens",
    fields: {
      position: {
        type: new GraphQLList(GraphQLInt),
      },
      value: {
        type: GraphQLString,
      },
    },
  });
  
  const pages = new GraphQLObjectType({
    name: "Pages",
    fields: {
      page_index: {
        type: GraphQLString,
        resolve: (source) => source.pageIndex,
      },
      content: {
        type: GraphQLString,
        resolve: (source) => source.content,
      },
      tokens: {
        type: new GraphQLList(tokens_type),
        resolve: (source) => source.tokens,
      },
      token: {
          type: tokens_type,
          args: {
              id: {type: GraphQLInt}
          },
        resolve: (source, args) => source.tokens[args.id],
  
      }
    },
  });
  
  const Book = new GraphQLObjectType({
    name: "book",
    fields: {
      title: {
        type: GraphQLString,
      },
      author: {
        type: GraphQLString,
      },
      book_pages: {
        type: new GraphQLList(pages),
        resolve: (source) => source.pages
      },
      book_page: {
          type: pages,
          args: {
              id: { type: GraphQLInt },
            },
          resolve: (source, args) => source.pages[args.id]
      }
    },
  });

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