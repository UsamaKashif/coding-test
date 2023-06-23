import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { TodoModel } from "./models/todo";

export const addToFirebase = async (email: string, todosObject: TodoModel[]) => {
    try {
        await setDoc(doc(db, "todos", email), {
            todos: todosObject
        });
    } catch (error) {
        console.log(error);
    }
}

export const fetchTodos = async (email: string) => {
    try {
        const docRef = doc(db, "todos", email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data()["todos"] as TodoModel[];
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}