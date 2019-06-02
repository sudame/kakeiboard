import firebase from 'firebase';

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyAVY4yEQ1xBnXr331crmjqKt1wyR9cqwD0",
      authDomain: "sudame-kakeiboard.firebaseapp.com",
      databaseURL: "https://sudame-kakeiboard.firebaseio.com",
      projectId: "sudame-kakeiboard",
      storageBucket: "sudame-kakeiboard.appspot.com",
      messagingSenderId: "332485056696",
      appId: "1:332485056696:web:e61c1fde6da00282"
    }
  )
}

export default firebase
