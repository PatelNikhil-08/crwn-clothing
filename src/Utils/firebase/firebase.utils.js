import { initializeApp } from 'firebase/app'; 
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider, 
} from "firebase/auth"; 

const firebaseConfig = {
    apiKey: "AIzaSyApOpvUTCoAwXZxM-NjbO86VlVFzYmAnjs",
    authDomain: "crwn-clothing-db-a941a.firebaseapp.com",
    projectId: "crwn-clothing-db-a941a",
    storageBucket: "crwn-clothing-db-a941a.appspot.com",
    messagingSenderId: "60681003165",
    appId: "1:60681003165:web:619701d4888c0cded0b474"
};


const firebase = initializeApp(firebaseConfig); 

const provider = new GoogleAuthProvider(); 

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth(); 
export const signInWithGooglePopup = () => signInWithGooglePopup(auth, provider);
