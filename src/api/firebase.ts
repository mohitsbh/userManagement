interface User {
    username: string;
    password: string;
  }import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";
  
  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB149LE3QAix-5jIJh6DwjFVsG3v12HNhQ",
    authDomain: "user-management-f8a13.firebaseapp.com",
    projectId: "user-management-f8a13",
    storageBucket: "user-management-f8a13.firebasestorage.app",
    messagingSenderId: "272752169396",
    appId: "1:272752169396:web:0fe09231cba92a541ee2e1",
    measurementId: "G-YLGYHJFELJ",
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);  // Firestore database
  const auth = getAuth(app);    // Firebase Authentication
  
  export { auth, db };
  
  
  const mockUsers: User[] = [
    { username: 'admin', password: 'password' },
  ];
  
  export const mockLogin = (username: string, password: string): boolean => {
    return mockUsers.some(user => user.username === username && user.password === password);
  };
  
  export const mockSignup = (username: string, password: string): boolean => {
    const userExists = mockUsers.some(user => user.username === username);
    if (!userExists) {
      mockUsers.push({ username, password });
      return true;
    }
    return false; // User already exists
  };
  