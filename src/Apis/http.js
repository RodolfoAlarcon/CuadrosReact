import db from "../Firebase/Firebase";
import { doc, collection, getDocs, getDoc } from "firebase/firestore";


export const FirebaseApi = {


    //Consultar solamente ista de producto//
    consultaProducto: async () => {

        const querySnapshot = await getDocs(collection(db, "Producto"));

        let arrayProductos = new Array

        querySnapshot.forEach((doc) => {
            arrayProductos.push(
                {
                    id: doc.id,
                    data: doc.data()
                }
            );
        })

        return arrayProductos
    },

    consultaGenero: async () => {

        const docRef = doc(db, "Genero", "AmhYnSuhAb5gqV3p94C1");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data().categoria
        }

    },

    consultaMedidas: async () => {

        const docRef = doc(db, "Medidas", "PobwbCo7flcyUnNIAhJD");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data().categoria
        }

    },


    consultaPintoresFamosos: async () => {

        const docRef = doc(db, "PintoresFamosos", "vLbezfh8QrFsnC0wkAHo");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data().categoria
        }

    },

    consultaTemas: async () => {

        const docRef = doc(db, "Temas", "Yn5cHS03MH3Cs9GxQDaK");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data().categoria
        }

    },

    consultaEstilos: async () => {

        const docRef = doc(db, "Estilos", "jdUE6dJdfPtkzfUagjsA");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data().categoria
        }

    },

    consultaProductoFinal: async (data) => {

        const docRef = doc(db, "Producto", `${data}`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data()
        }

    }

}