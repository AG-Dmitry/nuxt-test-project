import { stackServerApp } from '../auth/stack';

export default defineEventHandler(async () => {
  const name = 'f3cf12cd-723c-4d1f-a459-cf0e095cf115';
  const response = await stackServerApp.getUser(name);
  return { user: response, signal: 'pong' };
});