import { useEffect, useState } from "react";
import "/src/assets/css/cart.css";
import Button from "react-bootstrap/Button";


const Cadastro = () => {

  const [cart, setCart] = useState([
    { id: 1, name: "Shampoo", price: 15.99, img: "/src/assets/1c6ec7684014f75f0abd3c04ef5b3fe4b2660c6e2ef2fa0017ff44cdf2d52d28.png" },
    { id: 2, name: "Condicionador", price: 18.99, img: "/src/assets/b75fb1ff0cb4d6a15b1c351bee6413ba3704a0512dff98faf739638d85fe3983.png" },
  ]);
  const [calcTotal, setCalcTotal] = useState(0);

  const deleteProductCart = (id) =>{
    setCart( (prevCart) => prevCart.filter(item => item.id !== id))
  }

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    setCalcTotal(total);
  },[cart]);

  return (
    <div>
    <div className="container-corpo">
      <div className="container-cart">
        <h2>Produtos Favoritados</h2>
        <div className="container-itens-cart">
          {cart.map((item) => (
            <div key={item.id} className="item-cart">
              <div className="item-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="item-details">
                <p>{item.name}</p>
                <span>{item.price.toFixed(2)}</span>
                <div className="btns-group">
                  <Button variant="link" className="buttonAdd">
                    finalizar
                  </Button>
                  <Button variant="link" className="buttonIconCart"  onClick={() => deleteProductCart(item.id)}>
                    <i className="fa-solid fa-heart"></i>
                  </Button>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="priceTotal">
      <p>
        Preço Total: <span>R${calcTotal.toFixed(2)}</span>
      </p>
    </div>
  </div>
);
}

export default Cadastro