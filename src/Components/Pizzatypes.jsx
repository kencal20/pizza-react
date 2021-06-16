

import image2 from  '../images/ivan.jpg'
import image3 from  '../images/jonas.jpg'
import image4 from  '../images/vita.jpg'

const Pizzatypes = () => {
    return (
       
  <div className="row thumbnail-content">
  <h1 className="text-center">Pizza Types</h1>
  <div className="col-xs-6 col-md-3">
    <a href="#" className="thumbnail thumbnail-items">
      <img src={image3}alt="..."/>

      <h2>Vegetable Pizza</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ex ipsa. Asperiores commodi, dolorem
        voluptate culpa eligendi aspernatur, quaerat impedit ab quis facilis consequuntur laboriosam praesentium omnis
        quos! Ullam.</p>
    </a>
  </div>



  <div className="col-xs-6 col-md-3">
    <a href="#" className="thumbnail">
      <img src={image2} alt="..."/>
      <h2>Cheese Pizza</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At totam perspiciatis, non, dolorum accusantium
        expedita nesciunt natus molestiae deleniti voluptatum beatae ea. Deserunt asperiores autem repudiandae?
        Impedit nulla perspiciatis necessitatibus.</p>
    </a>

  </div>



  <div className="col-xs-6 col-md-3">
    <a href="#" className="thumbnail">
      <img src={image4} alt="..."/>
      <h2>Pepperoni Pizza</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro, aut autem non provident, dolor numquam
        inventore facere ab at saepe? Eligendi mollitia velit quo tempora iure! Vero, accusamus voluptatum.</p>
    </a>

  </div>


  <div className="col-xs-6 col-md-3">
    <a href="#" className="thumbnail">
      <img src={image4} alt="..."/>

      <h2>Pepperoni Special </h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus modi quidem, unde provident quos, aliquam
        ullam ut corrupti ea aliquid molestiae aperiam non! Repudiandae tempora quas fuga distinctio exercitationem
        amet!</p>
    </a>
  </div>
</div>

    );
}

export default Pizzatypes;
