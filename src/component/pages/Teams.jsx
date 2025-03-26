import React from 'react'
import Person1 from "../../images/team/1.png";
import Person2 from "../../images/team/2.png";
import Person3 from "../../images/team/3.png";
import Person4 from "../../images/team/4.png";
import Person5 from "../../images/team/5.png";
import Person6 from "../../images/team/6.png";
import Footer from '../Footer'


const Teams = () => {
  const teamPpl = [
    { img: Person1, name: "Luke Miller", job: "Salesman" },
    { img: Person2, name: "Michael Diaz", job: "Business Owner" },
    { img: Person3, name: "Briana Ross", job: "Photographer" },
    { img: Person4, name: "Lauren Rivera", job: "Car Detailist" },
    { img: Person5, name: "Martin Rizz", job: "Mechanic" },
    { img: Person6, name: "Caitlyn Hunt", job: "Menager" },
  ];

  return (
    <section className="team-page">
      <div className="container">
        <div className="team-container">
        <div className="team-container">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={ppl.img} alt="team_img" />
                </div>
                <div className="team-container__box__descr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Teams