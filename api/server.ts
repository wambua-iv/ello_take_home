import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import schema_init from './schema.api';
import cors from 'cors'


const app = express();

app.use(cors())
app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema_init,
        graphiql: true,
    })
)

app.listen(3090, () => console.log('graphql server up and running'))