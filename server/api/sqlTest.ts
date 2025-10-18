import 'dotenv/config';
import { stackServerApp } from '../auth/stack';
import { PostgrestClient } from '@supabase/postgrest-js';

export default defineEventHandler(async (e) => {
  const activeUser = await stackServerApp.getUser();
  if (!activeUser) return null;

  const { accessToken } = await activeUser.getAuthJson();

  const pg = new PostgrestClient(
    process.env.NEON_API_URL!,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );

  const { data, error } = await pg
    .from('posts')
    .select('id, content')
    .eq('owner_id', activeUser.id)
    .order('id', { ascending: false });

  return { data, error };
});
