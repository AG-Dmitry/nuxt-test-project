import 'dotenv/config';
import { stackServerApp } from '../auth/stack';

export default defineEventHandler(async () => {
  //const query = getQuery(e);
  //const name = query.name as string;
  const name = 'f3cf12cd-723c-4d1f-a459-cf0e095cf115';
  const response = await stackServerApp.getUser(name);
  return { user: response };
});