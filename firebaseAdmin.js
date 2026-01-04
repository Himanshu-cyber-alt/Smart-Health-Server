// // server/firebaseAdmin.js
// import admin from "firebase-admin";
// import { readFileSync } from "fs";
// import path from "path";
// import { fileURLToPath } from "url";

// // required for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // read JSON file
// const serviceAccountPath = path.join(
//   __dirname,
//   "config",
//   "serviceAccountKey.json"
// );

// const serviceAccount = JSON.parse(
//   readFileSync(serviceAccountPath, "utf8")
// );

// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//   });
// }

// export default admin;



import admin from "firebase-admin";

if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
  throw new Error("FIREBASE_SERVICE_ACCOUNT env variable not set");
}



serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, "\n");


const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT
);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin;
