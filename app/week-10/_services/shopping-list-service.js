import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  try {
    const ref = collection(db, "users", userId, "items");
    const q = query(ref);
    const querySnapshot = await getDocs(q);

    const items = [];

    querySnapshot.docs.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return items;
  }
  catch (error) {
    console.error(`Error reading collection: ${userId}`, error);
  }
};

export const addItem = async (userId, item) => {
  try {
    const ref = collection(db, "users", userId, "items");
    const docRef = await addDoc(ref, item);
    return docRef.id;
  }
  catch (error) {
    console.error(`Error adding item for user: ${userId}`, error);
  }
};