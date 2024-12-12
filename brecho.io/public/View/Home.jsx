// import { useEffect, useState } from 'react';
import '/src/assets/css/Home.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from '/src/components/Search';
import Form from 'react-bootstrap/Form';
// import { getProduct } from '/src/data/data.jsx'

const Home = () => {
  // const [product, setProducts] = useState([]); 
  
  //   useEffect(() => {
  //     const fetchProducts = async () => {  
  //       const products = await getProduct();
  //       setProducts(products);
  //     };
  
  //     fetchProducts(); 
  // },[]);

  return (
    <div style={{"margin": "2rem"}}>
    <div className='container-corpo'>
      <Form inline className='container-search'>
        <Row>
          <Col>
            <Search />
          </Col>
        </Row>
      </Form>
      <div className='container-categorias'>
        {/* Categorias */}
        <div className="categorias">
          <h2>Categorias</h2>
          <Row className="w-100">
            <Col className="col" lg={3}><a href="">Acessórios de Moda</a></Col>
            <Col className="col" lg={3}><a href="">Roupas Femininas</a></Col>
            <Col className="col" lg={3}><a href="">Sapatos Masculinos</a></Col>
            <Col className="col" lg={3}><a href="">Roupas Masculinas</a></Col>
            <Col className="col" lg={3}><a href="">Sapatos Femininos</a></Col>
            <Col className="col" lg={3}><a href="">Moda Infantil</a></Col>
            <Col className="col" lg={3}><a href="">Mãe e Bebê</a></Col>
            <Col className="col" lg={3}><a href="">Bolsas Femininas</a></Col>
          </Row>
        </div>
      </div>
      <div className="container-menu">
        <h3>Você vai amar</h3>
        <div className="container-products">
          {/* {product.map((item) => (
            <div key={item.id} className="product">
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <h4>{item.price}</h4>
            </div>
           ))} */}
        </div>
      </div>
    </div>
  </div>
);
};

export default Home