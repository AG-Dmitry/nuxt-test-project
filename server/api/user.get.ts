import 'dotenv/config';
import { stackServerApp } from '../auth/stack';

export default defineEventHandler(async (e) => {
  const query = getQuery(e);
  const name = query.name as string;
  const response = await stackServerApp.getUser();
  return { user: response };
});