import classes from "./TechnologyGrades.module.scss";
import Technology from "./Technology/Technology.tsx"

const TechnologyGrades = ({techs}: { techs: string[] }) => {

  return (
    <div className={classes.container}>
      <p className={classes.title}>Technologie</p>
      <div className={classes.techs}>
        {techs.map((tech, index) => (
          <Technology tech={tech} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default TechnologyGrades;