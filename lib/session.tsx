import {withIronSession} from 'next-iron-session'

export const withSession = (handler: any) => {
  return withIronSession(handler, {
    password: '',
    cookieName: '',
    cookieOptions: {
      secure: false, // TODO: make this `true` once we figure out the environment variables in Amplify.
    },
  })
}
