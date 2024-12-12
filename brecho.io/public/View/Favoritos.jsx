import { useState } from "react";
import "/src/assets/css/favorits.css";
import Button from "react-bootstrap/Button";

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([
    { id: 1, name: "Shampoo", price: 15.99, img: "/src/assets/1c6ec7684014f75f0abd3c04ef5b3fe4b2660c6e2ef2fa0017ff44cdf2d52d28.png" },
    { id: 2, name: "Condicionador", price: 18.99, img: "/src/assets/b75fb1ff0cb4d6a15b1c351bee6413ba3704a0512dff98faf739638d85fe3983.png" },
  ]); // Lista inicial de produtos

  // Função para remover produto
  const deleteProduct = (id) => {
    setFavoritos((prevFavoritos) => prevFavoritos.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="container-corpo">
        <div className="container-fav">
          <h2>Produtos Favoritados</h2>
          <div className="container-itens-fav">
            {favoritos.map((item) => (
              <div key={item.id} className="item-fav">
                <div className="item-img">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="item-details">
                  <p>{item.name}</p>
                  <span>{item.price.toFixed(2)}</span>
                  <div className="btns-group">
                    <Button variant="link" className="buttonAdd">
                      Adicionar ao Carrinho
                    </Button>
                    <Button variant="link" className="buttonIconFav"  onClick={() => deleteProduct(item.id)}>
                      <i className="fa-solid fa-heart"></i>
                    </Button>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favoritos;
