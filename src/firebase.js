import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCFQAh9pxOmw85YGysdD4DEUkPlz5byv0A",
    authDomain: "chattos-6b1f4.firebaseapp.com",
    databaseURL: "https://chattos-6b1f4.firebaseio.com",
    projectId: "chattos-6b1f4",
    storageBucket: "chattos-6b1f4.appspot.com",
    messagingSenderId: "359540951963"
};
firebase.initializeApp(config);

export default firebase;