import { stackServerApp } from '../../auth/stack';

export default defineEventHandler(async () => {
  const response = await stackServerApp.getUser();
  return { user: response };
});