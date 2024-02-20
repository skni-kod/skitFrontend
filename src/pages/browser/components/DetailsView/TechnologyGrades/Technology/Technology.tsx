import classes from "./Technology.module.scss";
const Technology = ({tech} : {tech: string}) => {

  const numOfStars = 5;
  const stars = [...Array(numOfStars)];

  return (
    <div className={classes.container}>
      <div className={`${classes.name} ${classes.center}`} >{tech}</div>
      <div className={`${classes.stars} ${classes.center}`}>
        {stars.map((index) => {
          return <span className="material-icons" key={index}>star</span>;
        })}
      </div>
      <div className={`${classes.seniority} ${classes.center}`} >senior</div>
    </div>
  );
};

export default Technology;