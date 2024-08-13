import 'dotenv/config';

import cors from '@fastify/cors';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';

import { server } from './server';
import { appRouter } from './trpc/router';

const { FRONT_URL } = process.env;

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

server.register(cors, {
  origin: [FRONT_URL],
  credentials: true,
});

server.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: { router: appRouter },
});

server.listen({ port, host }, (error) => {
  if (error) {
    server.log.error(error);
    process.exit(1);
  }
});
