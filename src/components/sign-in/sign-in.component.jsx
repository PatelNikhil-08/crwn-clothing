import { signInWithGooglePopup } from '../../Utils/firebase/firebase.utils'; 

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup(); 
        console.log(response); 
    }
    return(
        <div>
            <h1>Hello, I am the sign in page </h1>
            <button onClick={logGoogleUser}> Sign in with Google</button>
                
        </div>
    );

};



export default SignIn; 