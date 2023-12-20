import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const AllProducts = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialisez Firebase avec votre configuration
    const firebaseConfig = {
      apiKey: "VOTRE_API_KEY",
      authDomain: "VOTRE_AUTH_DOMAIN",
      databaseURL: "VOTRE_URL_BASE_DE_DONNÉES_EN_TEMPS_RÉEL",
      projectId: "VOTRE_PROJECT_ID",
      storageBucket: "VOTRE_STORAGE_BUCKET",
      messagingSenderId: "VOTRE_SENDER_ID",
      appId: "VOTRE_APP_ID"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // Récupérer une référence à la base de données en temps réel
    const database = firebase.database();
    const productsRef = database.ref('products');

    // Écouter les changements sur la référence "products"
    productsRef.on('value', (snapshot) => {
      const products = snapshot.val(); // Récupérer les données de la base de données

      if (products) {
        // Convertir les données en un tableau pour pouvoir les utiliser dans votre composant
        const productsArray = Object.keys(products).map((key) => ({
          id: key,
          ...products[key]
        }));
        setProductsData(productsArray);
      } else {
        setProductsData([]);
      }
      setLoading(false);
    });

    // Nettoyer l'écouteur lorsque le composant est démonté
    return () => {
      productsRef.off('value');
    };
  }, []); // Assurez-vous de spécifier les dépendances vides pour exécuter ce code uniquement une fois
  const TransferData = () => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const firebaseConfig = {
        // Configurations Firebase (vous devez initialiser Firebase ici)
      };
  
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
  // Votre code JSX pour afficher les données récupérées
  // ...
  const transferToFirestore = async () => {
    const firestore = firebase.firestore();
    const productsCollection = firestore.collection('products');

};
productsData.forEach(async (product) => {
    try {
      await productsCollection.doc(product.id).set(product);
      console.log(`Produit ${product.id} transféré avec succès vers Firestore`);
    } catch (error) {
      console.error(`Erreur lors du transfert du produit ${product.id} vers Firestore : `, error);
    }
  });
  if (!loading) {
    transferToFirestore();
};

export default AllProducts;
