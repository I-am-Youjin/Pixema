import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkGMT2hMpfPUVRrpBHjSmw3SWT13ZHFrM",
  authDomain: "pixema-2a2c8.firebaseapp.com",
  projectId: "pixema-2a2c8",
  storageBucket: "pixema-2a2c8.appspot.com",
  messagingSenderId: "19736187209",
  appId: "1:19736187209:web:931e2842923fd4afd88a98",
};

const app = initializeApp(firebaseConfig);

export default app;
