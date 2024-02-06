import classes from "./Technology.module.scss";
const Technology = ({tech} : {tech: string}) => {

  return (
    <div className={classes.container}>
      <div className={`${classes.name} ${classes.center}`} >{tech}</div>
      <div className={`${classes.stars} ${classes.center}`}>
        {[...Array(5)].map((index) => {
          return <span className="material-icons" key={index}>star</span>;
        })}
      </div>
      <div className={`${classes.seniority} ${classes.center}`} >senior</div>
    </div>
  );
};

export default Technology;