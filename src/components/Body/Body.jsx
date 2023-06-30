import React from 'react'
import './body.css'

const Body = () => {

//console.log("this isssss")

  return (
    <div>
        <section className="mainContainer">
      <div className="box box1">
        <div className="box-size box-text">
          <h2>More sips, more trips</h2>
          <p>
            Join Starbucks® Rewards and link your Delta SkyMiles® account by
            3/31 to earn 200 Stars,500 miles—or both!*
          </p>

          <button className="b1 b">Join + Link</button>
        </div>
        <div className="box-size box-img">
          <img src="images/img1.jpg" alt="" />
        </div>
      </div>

      <div className="box box2">
        <div className="box-size box-img">
          <img src="images/box2img.jpg" alt="" />
        </div>
        <div className="box-text box-size">
          <h1>Brighten your day</h1>
          <h2>
           Enjoy a cheery Pink Drink, Paradise Drink or Dragon Drink® Starbucks
            Refreshers® beverage. 
          </h2>
          <button className="b2 b buttonBorder">Order now</button>
        </div>
      </div>

      <div className="box box3">
        <div className="box-text box-size">
          <h1>Uplifting anytime</h1>
          <h2>
            Recharge with a lively Brown Sugar Oatmilk or Toasted Vanilla
            Oatmilk Shaken Espresso—140 calories or less in a grande.
          </h2>
          <button className="b3 b buttonBorder fw">Order now</button>
        </div>
        <div className="box-size box-img">
          <img src="images/box3img.jpg" alt="" />
        </div>
      </div>

      <div className="box box4">
        <div className="box-size box-img">
          <img src="images/box4img.jpg" alt="" />
        </div>
        <div className="box-text box-size">
          <h1>Hearty on the go</h1>
          <h2>
            Grab a deliciously filling Double-Smoked Bacon, Cheddar & Egg
            Sandwich or Bacon & Gruyère Egg Bites.
          </h2>
          <button className="b4 b buttonBorder">Order now</button>
        </div>
      </div>
      <div className="box box5">
        <div className="box-text box-size">
          <h3>Delivery from our place to yours</h3>
          <p>
            Keep doing you, we’re on the way. Place your Starbucks order for
            delivery—now on DoorDash. See the DoorDash app for availability and
            restrictions.
          </p>
          <button className="b5 b buttonBorder">Order now</button>
        </div>
        <div className="box-size box-img">
          <img src="images/img5.jpg" alt="" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Body
