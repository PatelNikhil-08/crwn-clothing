import { initializeApp } from 'firebase/app'; 
import {
    getAuth, 
    signInWithRedirect,
    signInWithPopup, 
    GoogleAuthProvider,
} from 'firebase/auth'; 
import {
    getFirestore, 
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyApOpvUTCoAwXZxM-NjbO86VlVFzYmAnjs",
    authDomain: "crwn-clothing-db-a941a.firebaseapp.com",
    projectId: "crwn-clothing-db-a941a",
    storageBucket: "crwn-clothing-db-a941a.appspot.com",
    messagingSenderId: "60681003165",
    appId: "1:60681003165:web:0427abfea1479d6bd0b474"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
}); 

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider); 

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.id)
    console.log(userDocRef); 
    const userSnapshot = await getDoc(userDocRef); 
    
    
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth; 
        const createdAt = new Date(); 
    


    try{
        await setDoc(userDocRef,{
            displayName,
            email,
            createdAt,
        }); 

    }catch(error){
        console.log('error creating the user', error.message); 

    }
    }

    return userDocRef; 
}