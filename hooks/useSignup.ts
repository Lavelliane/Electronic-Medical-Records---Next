import {useState} from 'react';
import {auth} from '../lib/firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState<boolean>(false)

    const signup = async (email: string, password: string) => {
        setError(null);
        setIsPending(true);
   
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setError(null);
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
                setError(error.message)
            });       
        setIsPending(false);
    }
    return {error , isPending, signup}

}

 
