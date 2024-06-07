import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB4NMdh5Ol29EjdgMPlibNTpVsqwXdZSLs',
  authDomain: 'sse-world.firebaseapp.com',
  projectId: 'sse-world',
  storageBucket: 'sse-world.appspot.com',
  messagingSenderId: '862129086688',
  appId: '1:862129086688:web:026b39b5f3237a80943085',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage };
