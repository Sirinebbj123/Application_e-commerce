import { useEffect, useState } from 'react';
import { collection as firestoreCollection, getDocs } from 'firebase/firestore';
import { Db } from '../firebase.config';

const useGetData = (collectionName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const collectionRef = firestoreCollection(Db, collectionName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collectionRef);
        const fetchedData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [collectionRef, collectionName]);

  // Return data and loading state using an object
  return { data, loading };
};

export default useGetData;
