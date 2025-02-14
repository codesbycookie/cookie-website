import React from "react";
import "./Works.css";
import WorkCard from "./components/WorkCard";
import SignaturePad from "./components/SignaturePad/SignaturePad";
import AgreementSigner from "./components/SignaturePad/SignaturePad";

export default function Works() {
  return (
    <div>
      <div className="row g-0 w-100 h-100 d-flex justify-content-center align-items-center">
        <div className="col-md-9 p-4">
          <div className="works_container">
            <h2>Our Works</h2>
            <div className="works_content mt-4">
              <p>
                At <b>Cookie</b>, we specialize in designing and developing a
                wide range of digital solutions, including web applications,
                full-stack applications, static websites, and mobile apps. Our
                expertise ensures high-performance, scalable, and user-friendly
                solutions tailored to your needs. Whether it's building dynamic
                platforms or sleek static sites, we deliver top-notch technology
                to empower businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-0 w-100 h-100 d-flex justify-content-center align-items-center p-4">
        <div className="col-10 d-flex justify-content-center align-items-center" style={{transition: 'transform 5s ease'}}>
          <div className="row g-0 d-flex justify-content-center align-items-center">
            <div className="col-md-4">
              <WorkCard
                img={"/imgs/img1.jpeg"}
                content={
                  "We are building a Recipe App that offers a wide variety of recipes with step-by-step guidance. Users can search, filter, and save their favorite dishes for easy access. A seamless way to explore and cook delicious meals!"
                }
                title={"Recipe App"}
              />
            </div>
            <div className="col-md-4">
              <WorkCard
                img={"/imgs/img1.jpeg"}
                content={
                  "We are building a Recipe App that offers a wide variety of recipes with step-by-step guidance. Users can search, filter, and save their favorite dishes for easy access.  A seamless way to explore and cook delicious meals!"
                }
                title={"Recipe App"}
              />
            </div>
            <div className="col-md-4">
              <WorkCard
                img={"/imgs/img5.jpeg"}
                content={
                  "We are building a Recipe App that offers a wide variety of recipes with step-by-step guidance. Users can search, filter, and save their favorite dishes for easy access. A seamless way to explore and cook delicious meals!"
                }
                title={"Traffic App"}
              />
            </div>
            <div className="col-md-4">
              <WorkCard
                img={"/imgs/img1.jpeg"}
                content={
                  "We are building a Recipe App that offers a wide variety of recipes with step-by-step guidance. Users can search, filter, and save their favorite dishes for easy access. A seamless way to explore and cook delicious meals!"
                }
                title={"Recipe App"}
              />
            </div>
            <div className="col-md-4">
              <WorkCard
                img={"/imgs/img1.jpeg"}
                content={
                  "We are building a Recipe App that offers a wide variety of recipes with step-by-step guidance. Users can search, filter, and save their favorite dishes for easy access.  A seamless way to explore and cook delicious meals!"
                }
                title={"Recipe App"}
              />
            </div>
            <div className="col-md-4">
              <WorkCard
                img={"/imgs/img5.jpeg"}
                content={
                  "We are building a Recipe App that offers a wide variety of recipes with step-by-step guidance. Users can search, filter, and save their favorite dishes for easy access. A seamless way to explore and cook delicious meals!"
                }
                title={"Traffic App"}
              />
            </div>
          </div>
        </div>
      </div>
      <AgreementSigner />
    </div>
  );
}
