import { establishSession } from '~~/server/utils/establishSession';
import { stackServerApp } from '../../auth/stack';

export default defineEventHandler(async (e) => {
  /*
  const response = session.data.activeUser
    ? session.data.activeUser
    : await stackServerApp.getUser();
  */
  const session = await establishSession(e);
  return { user: session.data.activeUser };
});
