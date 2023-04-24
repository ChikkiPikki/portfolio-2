import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,

    }),
  ],
  session: {
    strategy: 'jwt'
  },
  secret: "afd78e95bf4dc0df3ae44be0b5820f91f2a64d3f0326840"
}

export default NextAuth(authOptions)