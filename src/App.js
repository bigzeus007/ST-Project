import React from 'react';
import './App.css';
import SignIn from './auth/SignIn';
import ChatRoom from './components/ChatRoom';
import 'firebase/firestore';
import { auth } from './firebase';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignOut from './auth/SignOut';





function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}












export default App;
