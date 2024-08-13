import { inferAsyncReturnType } from '@trpc/server';
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';

import { prisma } from '../database';
import { server } from '../server';

export function createContext({ req, res }: CreateFastifyContextOptions) {
  const log = req.log || server.log;

  return { req, res, log, db: prisma };
}

export type Context = inferAsyncReturnType<typeof createContext>;
