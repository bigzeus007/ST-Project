import React from "react";
import firebase from "firebase";
import Button from '@material-ui/core/Button';
import { auth } from "../firebase";



function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <>
        <Button variant="contained" onClick={signInWithGoogle}>Sign in with Google</Button>
        <p>Do not violate the community guidelines or you will be banned for life!</p>
      </>
    )
  
  }

  export default SignIn;