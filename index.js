const fs = require("fs");
const { makeExecutableSchema } = require("graphql-tools");
const express = require("express");
const graphql = require("express-graphql");
const sofa = require("sofa-api").default;
var bodyParser = require('body-parser');

const typeDefs = fs.readFileSync("./schema.gql", "utf8");
const resolvers = require("./resolvers");

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = express();
server.use(bodyParser.json());
server.use("/graphql", graphql({ schema, graphiql: true }));
server.use("/rest", sofa({ schema }));

server.listen("9999");
