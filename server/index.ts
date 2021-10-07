import 'reflect-metadata'
import * as path from 'path'
import { ApolloServer } from 'apollo-server-express'
import * as Express from 'express'
import { buildSchema } from 'type-graphql'

import { StarWarsResolver } from './resolvers/peopleResolver'

async function main() {
  const schema = await buildSchema({
    resolvers: [StarWarsResolver],
    emitSchemaFile: true,
  })

  const PORT = process.env.PORT || 3001;

  const app = Express()

  const server = new ApolloServer({
    schema,
  })

  await server.start();
  server.applyMiddleware({ app })

  // Have Node serve the files for our built React app
  app.use(Express.static(path.resolve(__dirname, '../client/build')));

  // All other GET requests not handled before will return our React app
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

  app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
  )
}

main()