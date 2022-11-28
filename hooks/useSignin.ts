import {useState} from 'react';
import {auth} from '../lib/firebase'
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";

export const useSignin = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState<boolean>(false)

    const signin = async (email: string, password: string) => {
        setError(null);
        setIsPending(true);
   
        await signInWithEmailAndPassword(auth, email, password)
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
    return {error , isPending, signin}

}

 
