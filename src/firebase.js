import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Importação correta para autenticação

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD3I2GTLtZCpLjeqjG16EZbYidzIhffBqY",
  authDomain: "habit-tracker-a10fd.firebaseapp.com",
  projectId: "habit-tracker-a10fd",
  storageBucket: "habit-tracker-a10fd.appspot.com",
  messagingSenderId: "730431038558",
  appId: "1:730431038558:web:f65138046f5d61d65f80cf",
  measurementId: "G-1WV7G9MGGW" // measurementId é opcional para Analytics
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Configuração correta para autenticação
export default app;
