import { initializeApp } from 'firebase/app'; 
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth"; 


import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyApOpvUTCoAwXZxM-NjbO86VlVFzYmAnjs",
    authDomain: "crwn-clothing-db-a941a.firebaseapp.com",
    projectId: "crwn-clothing-db-a941a",
    storageBucket: "crwn-clothing-db-a941a.appspot.com",
    messagingSenderId: "60681003165",
    appId: "1:60681003165:web:619701d4888c0cded0b474"
};


const firebaseApp = initializeApp(firebaseConfig); 

const googleProvider = new GoogleAuthProvider(); 

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth(); 
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider); 

export const db = getFirestore(); 

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) =>{
    const userDocRef = doc(db, 'users', userAuth.uid); 

    const userSnapshot = await getDoc(userDocRef); 
    
    
    if(!userSnapshot.exists()){
        const {displayName, email } = userAuth; 
        const createdAt = new Date(); 

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,

            });
        } catch (error){
            console.log('error creating the user', error.message); 

        }
    }

    return userDocRef; 
    





};






export const createAuthUserWithEmailAndPassword = async (email, password) => {

    if(!email || !password) return; 


    return await createUserWithEmailAndPassword(auth, email, password); 

};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {

    if(!email || !password) return; 


    return await signInWithEmailAndPassword(auth, email, password); 

};

