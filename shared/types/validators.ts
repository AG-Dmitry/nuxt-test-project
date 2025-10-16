import * as z from 'zod'
import { userSchema } from '#shared/utils/validators'

export type UserSchema = z.output<typeof userSchema>