import ProductCard from "./ProductCards";
import comics from "../Components/data/ComicsFilms";

export default function ProductList() {
  return (
    <section className="products">
      <div className="container">
        <button className="current">CURRENT SERIES</button>
        <div className="row-product">
          {comics.map((film) => {
            return (
              <div className="col" key={comics.id}>
                <ProductCard image={film.thumb} title={film.series} />
              </div>
            );
          })}
        </div>
        <div className="btn-container">
          <button className="load">LOAD MORE</button>
        </div>
      </div>
    </section>
  );
}
