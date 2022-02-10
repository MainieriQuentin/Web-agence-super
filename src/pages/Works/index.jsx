import workItems from "data/Worksdata";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div className="container">
      <h1 className="container-title">Projets</h1>
      <div className="card">
        <div className="card-content">
          Au fil des années, nous avons pu recruter plusieurs héros dans notre
          agence afin de former ce qu'on appelera par la suite, "Les 7".
          <h1>Nos Héros</h1>
        </div>
      </div>

      <div className="works-list">
        {workItems.map((client, i) => {
          return (
            <Link to={`${client.name.toLowerCase()}-study-case`} key={i}>
              {" "}
              {client.name}{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Works;
