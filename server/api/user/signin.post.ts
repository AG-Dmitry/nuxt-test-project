import 'dotenv/config';
import { stackServerApp } from '../../auth/stack';
import { checkBotId } from 'botid/server';

export default defineEventHandler(async (e) => {
  const verification = await checkBotId();
 
  if (verification.isBot) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Access denied',
    });
  }
 
  const data = await processUserRequest(e);
 
  return data;
});
 
async function processUserRequest(e: any) {
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
}