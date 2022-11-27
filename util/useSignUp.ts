import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

interface UserCredentials {
    email: string ;
    password: string ;
}

export default function UserSignUp({email, password} : UserCredentials) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
}
