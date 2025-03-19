import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app); 