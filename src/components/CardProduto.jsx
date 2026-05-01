function CardProduto({ nome, imagem, preco }) {
  return (
    <div className="card">
      <img src={imagem} alt={nome} />
      <h3>{nome}</h3>
      <p>R$ {preco}</p>
      <button>Comprar</button>
    </div>
  );
}

export default CardProduto;
