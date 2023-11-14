import classes from "./OfferTitle.module.scss";
import {AiOutlineClose} from "react-icons/ai";
// import {TOffer} from "@api/types/offer/offer.ts";

interface IOfferTitle {
  title: string,
  company: {
    id: string,
    name: string,
    logoSrc: string,
  }
}

const OfferTitle = (props: IOfferTitle) => {
  const {title, company} = props;

  return (
    <div className={ classes.item1 }>
      <img
        src={company.logoSrc}
        alt={`logo of ${company.name} company`}
        className={classes.logo}
      />

      <div className={ classes.sometext }>
        <div>
          <div>{company.name}</div>
          <div><b>{title}</b></div>
        </div>
      </div>
      <button className={ classes.okbutton }><b>Aplikuj</b></button>
      <button className={ classes.X }><AiOutlineClose /></button>
    </div>
  );
};

export default OfferTitle;