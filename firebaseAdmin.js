import admin from "firebase-admin";

if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
  throw new Error("FIREBASE_SERVICE_ACCOUNT env variable not set");
}

// ✅ Parse FIRST
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

// ✅ Fix escaped newlines in private key
serviceAccount.private_key =
  serviceAccount.private_key.replace(/\\n/g, "\n");

// ✅ Initialize Firebase Admin ONCE
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin;
