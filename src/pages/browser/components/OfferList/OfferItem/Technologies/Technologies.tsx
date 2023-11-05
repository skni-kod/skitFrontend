import classes from "./Technologies.module.scss";

interface ITechnologiesProps {
  technologies: string[];
}

const Technologies = (props: ITechnologiesProps) => {

  return (
    <div className={classes.technologies}>
      <span className="material-icons">code</span>
      {props.technologies.map((technology: string) => (
        <div key={technology} className={classes.technology}>
          {technology}
        </div>
      ))}
    </div>
  );
};

export default Technologies;