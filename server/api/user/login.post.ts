import 'dotenv/config';
import { establishSession } from '~~/server/utils/establishSession';
import { stackServerApp } from '../../auth/stack';

export default defineEventHandler(async (e) => {
  const body = await readValidatedBody(e, (body) => userSchema.parse(body));
  // const session = await establishSession(e);
  const email = body.email;
  const password = body.password;

  const loginResult = await stackServerApp.signInWithCredential({
    email: email,
    password: password,
  });

  const activeUser = await stackServerApp.getUser();
  const error =
    loginResult.status === 'error'
      ? `Sign in failed: ${loginResult.error.humanReadableMessage}`
      : null;

  const response = {
    userEmail: activeUser
      ? activeUser.primaryEmail
      : null,
    error: error,
  };

  // await session.update(session.data);
  return response;
});
