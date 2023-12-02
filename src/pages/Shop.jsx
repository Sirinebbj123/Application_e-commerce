import React ,{useState}from "react";
import CommonSection from "../components/Uinterface/CommonSection"; 
import Helmet from "../components/Helmet/Helmet";
import { Container, Col, Row } from "reactstrap";
import '../Styles/shop.css';
import Productslist from "../components/Uinterface/Poductslist";
import Products from "../assets/Data/Products";

const Shop = () => {


  const [ProductsData, setProductsData] = useState(Products)

  const handleFilter = e =>{
   const filtervalue=e.target.value
   if(filtervalue==='tous'){
      const filteredProducts=Products.filter((item)=>item.category==='cuisine');
      setProductsData(filteredProducts);
   }
   if(filtervalue==='cuisine'){
      const filteredProducts=Products.filter((item)=>item.category==='cuisine');
      setProductsData(filteredProducts);
   }
   if(filtervalue==='decor'){
      const filteredProducts=Products.filter((item)=>item.category==='decor');
      setProductsData(filteredProducts);
   }
   if(filtervalue==='jeux'){
      const filteredProducts=Products.filter((item)=>item.category==='jeux');
      setProductsData(filteredProducts);
   }
   if(filtervalue==='jeux'){
      const filteredProducts=Products.filter((item)=>item.category==='jeux');
      setProductsData(filteredProducts);
   }
   
  }


    const handleSearch = e => {
        const searchTerm = e.target.value;
        const searchedProducts = Products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()));
        setProductsData(searchedProducts);
      }
      
  return (
      
      <Helmet title="Shop" >
      <CommonSection title="" />
      <section>
        <Container>
          <Row>
            <Col lg='3' md='3'>
              <div className="filter__widget">
              <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="tous">tous</option>
                  <option value="cuisine">cuisine</option>
                  <option value="decor">décor</option>
                  <option value="jeux">jeux</option>
               
                </select>
              </div>
            </Col>
     
            <Col lg='6' md='6'>
              <div className="search__box">
                <input type="text" placeholder="Search ...." onChange={handleSearch}/>
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
            <Row>
                {
                    ProductsData.length===0 ? <h1 className="text-center fs-4">No Products are found !</h1>:
                    (<Productslist data={ProductsData}/>)
                }
            </Row>
        </Container>
      </section>
      </Helmet>
    
  );
};

export default Shop;
