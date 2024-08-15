import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDvqiHsOGYeUSu46Et_XhXDdLB-IE9PyWU",
    authDomain: "vcode-01.firebaseapp.com",
    projectId: "vcode-01",
    storageBucket: "vcode-01.appspot.com",
    messagingSenderId: "1055866201293",
    appId: "1:1055866201293:web:49f8a5e3f38740cd9f7584"
};

const app = initializeApp(firebaseConfig);
export const DB = getFirestore()