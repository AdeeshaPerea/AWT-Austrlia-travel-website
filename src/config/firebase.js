// src/config/firebase.js
// Firebase Web SDK Configuration & Cloud Storage Utility

import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

/**
 * Firebase Project Configuration
 * Replace the placeholder values below with your Firebase Project credentials
 * from https://console.firebase.google.com
 */
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "awt-travel-website.firebaseapp.com",
  projectId: "awt-travel-website",
  storageBucket: "awt-travel-website.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};

// Initialize Firebase App & Storage
let app;
let storage;

try {
  // Only initialize if a valid API key is present
  if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_FIREBASE_API_KEY") {
    app = initializeApp(firebaseConfig);
    storage = getStorage(app);
  }
} catch (error) {
  console.warn("Firebase Storage initialized in fallback mode:", error);
}

/**
 * Resolves an image URL. Returns Firebase Storage URL if bucket configured,
 * or falls back to local optimized WebP asset.
 * 
 * @param {string} localPath - Relative local path e.g. "/image/partnership_handshake.webp"
 * @param {string} storagePath - Firebase storage reference path e.g. "news/partnership_handshake.webp"
 * @returns {Promise<string>}
 */
export async function getImageUrl(localPath, storagePath) {
  if (storage && storagePath) {
    try {
      const imageRef = ref(storage, storagePath);
      const url = await getDownloadURL(imageRef);
      return url;
    } catch (err) {
      console.warn(`Firebase Storage fetch failed for ${storagePath}, using local fallback:`, err);
    }
  }
  return localPath;
}

export { app, storage };
