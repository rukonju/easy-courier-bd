import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase()


const useFirebase = () =>{
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
        
        
        .finally(() => { setIsLoading(false) });

    };
     useEffect( () =>{
         onAuthStateChanged(auth, (user) => {
            
            if (user) {
                setUser(user)
            } 
            else {
                setUser('')
            }
            setIsLoading(false);
        });
     },[auth])

     const handleLogOut = () =>{
        signOut(auth).then(() => {
            setUser('')
          }).catch((error) => {
            setError(error.message)
          });
     }
    
    return{
        user,
        isLoading,
        error,
        signInWithGoogle,
        handleLogOut
    };
};
export default useFirebase;
