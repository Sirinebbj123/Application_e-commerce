import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { doc, deleteDoc } from 'firebase/firestore';
import { Db } from '../firebase.config';
import { toast } from "react-toastify";
import useGetData from '../Custom-hooks/usegetData';
const AllProducts = () => {
  const { data: productsData, loading } = useGetData("products");

  const deleteProduct = async (id) => {
    await deleteDoc(doc(Db, 'products', id));
    toast.success("Supprimé!!");
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Titre</th>
                  <th>Categorie</th>
                  <th>Prix</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="5" className='text-center fw-bold py-5'>
                      Téléchargement......
                    </td>
                  </tr>
                ) : productsData && productsData.length > 0 ? (
                  productsData.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.imgUrl} alt='' style={{ maxWidth: '100px', maxHeight: '100px' }} />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.category}</td>
                      <td>${item.price}</td>
                      <td>
                        <button onClick={() => deleteProduct(item.id)} className='btn btn-danger'>
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className='text-center fw-bold py-5'>
                      Aucun produits trouvé.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProducts;
