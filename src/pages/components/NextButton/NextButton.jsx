import "./NextButton.css";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
export default function NextButton({ page = "" }) {
  return (
    <div className="row g-0 p-4 d-flex">
        <div className="next_icon d-flex justify-content-center align-items-center">
      <Link to={`/${page}`}>
        {" "}
        <GrLinkNext />
      </Link>
    </div> 
    </div>
  );
}
