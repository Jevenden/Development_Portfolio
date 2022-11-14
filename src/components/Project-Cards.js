import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/card.css";
import "animate.css";

export default function ProjectCards(props) {
  return (
    <div className="card animate__animated animate__zoomIn">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <p className="text-primary p-title">{props.name}</p>
        <p className="desc">{props.desc}</p>
        <p className="icons">
          <a href={props.github}>
            <img
              className="icon"
              src="https://img.icons8.com/fluent/48/000000/github.png"
              alt="GitHub Repo"
            />
          </a>
          <a href={props.deploy}>
            <img
              className="icon"
              src="https://img.icons8.com/fluent/48/000000/internet.png"
              alt="Deployed Application"
            />
          </a>
        </p>
        <p className="desc">Github &nbsp;&nbsp;&nbsp;&nbsp; Deploy</p>
        <p className="topics">{props.topics}</p>
      </div>
    </div>
  );
}
