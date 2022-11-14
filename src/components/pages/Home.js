import "animate.css";
import "../../styles/home.css";
import pic from "../../docs/Edited.jpg";

export default function Home() {
  return (
    <div className="container home">
      <div className="row about">
        <h2 className="animate__animated animate__bounceInRight title">
          &nbsp;&nbsp;&nbsp;&nbsp;ABOUT ME
        </h2>
        <div className="col-5">
          <div className="aboutPicContainer">
            <img className="selfie" src={pic} alt="John Evenden" />
          </div>
        </div>
        <div className="col-7 info">
          <p>
            After retiring from professional kickboxing in 2001 and graduating
            with a BA in Theater and Psychology from Emory University in 2006, I
            spent more than 15 years working as a professional stunt man, stunt
            coordinator, and fight director for stage and screen across the
            country, including LA, New York, Las Vegas, and Atlanta, where I
            currently reside.
          </p>
          <br></br>
          <p>
            2012 I recieved my personal trainer certification through the
            national academy of sports medicine and began working as a coach and
            personal trainer, working with clients of all ages on every aspect
            of fitness; from something as mundane as weight loss to cornering
            professional fighters in the ring.
          </p>
          <br></br>
          <p>
            At the start of the COVID-19 pandemic I was working as head
            instructor and manager of a martial arts school in atlanta. It was
            then that I realized that I was desperate for a career change, so I
            began a years-long process of learning and absorbing everything
            related to coding and web design. This culminated in my graduation
            from the GA Tech coding bootcamp in mid October.
          </p>
        </div>
      </div>
    </div>
  );
}
