import { getBotDetection } from '#robots/server/composables/getBotDetection'
import { createError, defineEventHandler } from 'h3'

export default defineEventHandler(async (e) => {
  const detection = getBotDetection(e)

  // Block untrusted bots from API routes
  if (e.node.req.url?.startsWith('/api/') && detection.isBot && !detection.trusted) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Access denied'
    })
  }
})
