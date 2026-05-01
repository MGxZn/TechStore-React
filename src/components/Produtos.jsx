import CardProduto from "./CardProduto";

function Produtos() {
  const lista = [
    { nome: "RTX 4060", imagem: "https://m.media-amazon.com/images/I/61lUuZAsyxL._AC_SY300_SX300_QL70_ML2_.jpg", preco: "2500" },
    { nome: "Ryzen 5", imagem: "https://m.media-amazon.com/images/I/51So7GoGvxL._AC_SX522_.jpg", preco: "1200" },
    { nome: "RAM 16GB", imagem: "https://m.media-amazon.com/images/I/61uXihcspuL._AC_SY300_SX300_QL70_ML2_.jpg", preco: "350" },
    { nome: "SSD 1TB", imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_973048-MLB93130143836_092025-F.webp", preco: "500" },
    { nome: "Monitor 144Hz", imagem: "https://m.media-amazon.com/images/I/61aIuJu0M0L._AC_SY300_SX300_QL70_ML2_.jpg", preco: "900" },
    { nome: "Teclado Mecânico", imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_726026-MLA99386007212_112025-F.webp", preco: "250" },
  ];

  return (
    <section className="produtos">
      <h2>Produtos</h2>
      <div className="grid">
        {lista.map((produto, index) => (
          <CardProduto key={index} {...produto} />
        ))}
      </div>
    </section>
  );
}

export default Produtos;
