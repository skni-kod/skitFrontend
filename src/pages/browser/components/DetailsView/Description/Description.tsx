import classes from './Description.module.scss';
import Technologies from "@pages/browser/components/OfferList/OfferItem/Technologies/Technologies.tsx";

const strLength = 123;
const str:any = (n: number) => {
  if (n === 0) return "";

  return "Description " + str(n - 1);
};

interface IOfferDscr{
  technologies: string[],
}

const Description = (props: IOfferDscr) => {
  return (
    <div className={classes.container}>
      {props.technologies &&
      <div className={classes.technologies}>
        <Technologies technologies={props.technologies} />
      </div>}
      <div className={ classes.description }>
        { str(strLength) }
      </div>
    </div>
  );
};

export default Description;

