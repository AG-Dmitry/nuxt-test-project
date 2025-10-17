import { establishSession } from '~~/server/utils/establishSession';
import { stackServerApp } from '../../auth/stack';

export default defineEventHandler(async (e) => {
  const response = await stackServerApp.getUser()
  // const session = await establishSession(e);
  return { user: response };
});
