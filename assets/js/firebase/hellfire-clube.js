import app from "../firebase/app.js";
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'

export async function subscribeToHellFireClub(subscription) {
    const db = getFirestore(app);
    const hellfireClubCollection = collection(db, "hellfire-clube")
    const docRef = await addDoc(hellfireClubCollection, subscription);
    return docRef.id;
}