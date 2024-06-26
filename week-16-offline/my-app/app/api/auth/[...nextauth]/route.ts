import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: {label: 'email', type: 'text', placeholder: 'Email'},
                password: {label: 'password', type: 'password', placeholder: 'Password'}
            },
            async authorize(credentials : any) {
                return {
                    id: "user1"
                }
            },
        })
    ]
})


export { handler as GET, handler as POST }