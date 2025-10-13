import 'dotenv/config';
import { stackServerApp } from '../../auth/stack';

export default defineEventHandler(async (e) => {
  const body = await readBody(e);
  const email = body.email as string;
  const password = body.password as string;

  const signInResult = await stackServerApp.signInWithCredential({
    email: email,
    password: password,
  });

  const activeUser = await stackServerApp.getUser();
  const error =
    signInResult.status === 'error'
      ? `Sign in failed: ${signInResult.error.humanReadableMessage}`
      : null;

  const response = {
    userEmail: activeUser ? activeUser.primaryEmail : null,
    error: error,
  };

  return response;
});
