import type { EventHandlerRequest, H3Event } from 'h3';

export const establishSession = async (e: H3Event<EventHandlerRequest>) => {
  const session = await useSession(e, {
    name: 'my-session',
    password: process.env.SESSION_PASSWORD!,
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    },
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
  return session;
};
