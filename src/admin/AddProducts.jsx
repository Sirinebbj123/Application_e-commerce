import React, { useState } from 'react';
import { Container, Row, Col, FormGroup, Form } from 'reactstrap';
import { toast } from 'react-toastify';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import "../Styles/addProduct.css";
import { Db, storage } from '../firebase.config';

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState('');
  const [enterShortDesc, setEnterShortDesc] = useState('');
  const [enterDescription, setEnterDescription] = useState('');
  const [enterCategory, setEnterCategory] = useState('');
  const [enterPrice, setEnterPrice] = useState('');
  const [enterProductImg, setEnterProductImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const AddProduct = async (e) => {
    e.preventDefault();

  
    if (!enterTitle || !enterShortDesc || !enterDescription || !enterCategory || !enterPrice || !enterProductImg) {
      toast.error('Please fill in all fields');
      return;
    }

    const storageRef = ref(storage, `product-images/${enterProductImg.name}`);
    const uploadTask = uploadBytesResumable(storageRef, enterProductImg);

    setLoading(true);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error('Error uploading image:', error);
        toast.error('Error uploading image');
        setLoading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            productName: enterTitle,
            shortDesc: enterShortDesc,
            description: enterDescription,
            category: enterCategory,
            price: enterPrice,
            imgUrl: downloadURL,
          };

          addDoc(collection(Db, 'products'), product)
            .then(() => {
              setLoading(false);
              toast.success("product successfully added!");
              navigate("/dashboard/all-products");
            })
            .catch((error) => {
              console.error('Error adding product to Firestore:', error);
              toast.error('Error adding product');
              setLoading(false);
            });
        });
      }
    );
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {loading ? (
              <h4 className='py-5'>Loading..........</h4>
            ) : (
              <>
                <h4 className='mb-5'>Add Product</h4>
                <Form onSubmit={AddProduct}>
                  <FormGroup className='form__group'>
                    <span>Product title</span>
                    <input type='text' placeholder='Double sofa' value={enterTitle} onChange={(e) => setEnterTitle(e.target.value)} required />
                  </FormGroup>

                  <FormGroup className='form__group'>
                    <span>Short Description</span>
                    <input type='text' placeholder='lorem.....' value={enterShortDesc} onChange={(e) => setEnterShortDesc(e.target.value)} required />
                  </FormGroup>

                  <FormGroup className='form__group'>
                    <span>Description</span>
                    <input type='text' placeholder='Description.....' value={enterDescription} onChange={(e) => setEnterDescription(e.target.value)} required />
                  </FormGroup>

                  <div className='d-flex align-items-center justify-content-between gap-5'>
                    <FormGroup className='form__group w-50 '>
                      <span>Price</span>
                      <input type='number' placeholder='100DNT' value={enterPrice} onChange={(e) => setEnterPrice(e.target.value)} required />
                    </FormGroup>

                    <FormGroup className='form__group w-50 catego'>
                      <span>Category</span>
                      <select className='w-50 p-2' value={enterCategory} onChange={(e) => setEnterCategory(e.target.value)}>
                      <option >Select Category</option>
                        <option value="chair">Chair</option>
                        <option value="sofa">Sofa</option>
                        <option value="mobile">Mobile</option>
                        <option value="watch">Watch</option>
                      </select>
                    </FormGroup>
                  </div>

                  <div>
                    <FormGroup className='form__group'>
                      <span>Product image</span>
                      <input type='file' onChange={(e) => setEnterProductImg(e.target.files[0])} required />
                    </FormGroup>
                  </div>

                  <button className='buy__btn' type='submit'>
                    Add product
                  </button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;
