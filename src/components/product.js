import one from "../img/one.jpg"
import two from "../img/two.jpg"
import three from "../img/three.jpg"


function Product() {
  return (
    <div class="products">
      <div class="box">
        <img src={one} alt="hero" />
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>
      <div class="box">
        <img src={two} alt="villain" />
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>
      <div class="box">
        <img src={three} alt="Designs Club" />
        <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
      </div>
    </div>
  )
}

export default Product