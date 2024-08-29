import './japfood.css';
import JapFoodMenu from './JapFoodMenu';

function JapFood(){
    return (
      <div>
        <JapFoodMenu home = "Home Page" about = "About Us" menu = "Our Menu" contact = "Contact Us"/>

        <section id="hero">
          <div id="cta">
            <a href="#">
              Make a Booking
            </a>
          </div>
        </section>

        <section id="about-us">
          <div class="content">
            <h1>Japanese so fresh, any fresher you have to fly to Japan</h1>
          </div>
        </section>

      </div>
    )
}

export default JapFood;