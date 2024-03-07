import classes from "./TechnologyGrades.module.scss";
import Technology from "./Technology/Technology.tsx";
import { TTechnology } from "@shared/types/domain/technologies/technology.ts";

const TechnologyGrades = ({techs}: { techs: TTechnology[] }) => {

  return (
    <div className={classes.container}>
      <p className={classes.title}>Technologie</p>
      <div className={classes.techs}>
        {techs.map((tech) => (
          <Technology key={tech.id} tech={tech.name}/>
        ))}
      </div>
    </div>
  );
};

export default TechnologyGrades;