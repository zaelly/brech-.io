import { useEffect, useState } from 'react'
import '/src/assets/css/favorits.css'
import Button from 'react-bootstrap/Button'

const Favoritos = () => {

  const [favoritos, setFavoritos] = useState([]);
  const [deleteProd, setDeleteProd] = useState(
    { id: 1, name: "Shampoo", price: 15.99, img: "/src/assets/1c6ec7684014f75f0abd3c04ef5b3fe4b2660c6e2ef2fa0017ff44cdf2d52d28.png" },
    { id: 2, name: "Condicionador", price: 18.99, img: "/src/assets/2c6ec7684014f75f0abd3c04ef5b3fe4b2660c6e2ef2fa0017ff44cdf2d52d29.png" },
  );

  function deleteProduct (id){
    setDeleteProd((prevFavorites) => prevFavorites.filter((item) => item.id !== id))
  }
  

  useEffect(()=>{
    const favoritosStorage = localStorage.getItem('favoritos')
    if(favoritosStorage && JSON.parse(favoritosStorage).length > 0){
      setFavoritos(JSON.parse(favoritosStorage))
    }
  })

  return (
    <div>
      <div className="container-corpo">
        <div className="container-fav">
          <h2>Produtos Favoritados <span><i className="fa-solid fa-heart"></i></span></h2>
          <div className="container-itens-fav">
            {favoritos.map((item, index) => {
              return (
                <div key={index} className="item-fav">
                  <img src={item.imagem} alt={item.nome} />
                  <p>{item.nome}</p>
                  <span>{item.preco}</span>
                  <button>Adicionar à lista
                    <span>
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <button>Excluir 
                    <span>
                      <i className="fa-solid fa-trash"></i>
                    </span>
                  </button>
                </div>
              )
            })}
              <div id="item_1" className="item-fav">
                <div className="item-img">
                  <img src="/src/assets/1c6ec7684014f75f0abd3c04ef5b3fe4b2660c6e2ef2fa0017ff44cdf2d52d28.png" alt="" />
                </div>
                <div className="item-details">
                  <p>Shampoo</p>
                  <span>15,99</span>
                  <Button variant="link" onClick={()=>{}}>Adicionar à lista</Button>
                  <Button variant="link" onClick={deleteProduct}>Excluir</Button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Favoritos