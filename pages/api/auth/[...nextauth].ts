import NextAuth, {NextAuthOptions} from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                // email: {label:"Email", type: "email", placeholder: "rajahtupas@gmail.com"},
                // password: {label: "Password", type: "password"},
            },
            authorize(credentials, req) {
                const {email, password} = credentials as {
                    email: string;
                    password: string;
                }
                //perform logic
                if(email !== 'jhury@test.com' || password !== 'admin'){
                    return null;
                }
                return {id: '1234', name: 'Jhury', role: 'admin'}
            }
        })
    ],
    pages: {
        signIn: "/auth/signin",
    }
}

export default NextAuth(authOptions)