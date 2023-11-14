import classes from './Main.module.scss';
import {BsBoxArrowUpRight, BsFillLayersFill, BsFire} from "react-icons/bs";
import {BiCommentDetail, BiSolidMapPin} from "react-icons/bi";
import {MdHomeWork} from "react-icons/md";
import {TSalaryRange} from "@api/types/offer/offer.ts";

interface IOfferMain {
  salaryRange: TSalaryRange,
  workLocation: string,
}

const Item2 = (props: IOfferMain) => {
  const {workLocation, salaryRange} = props;

  const salary = (salaryRange ? salaryRange.from + (String)(salaryRange.to ? ` - ${salaryRange.to}` : "") + "zł" : "");

  return (
    <div className={ classes.item3 }>
      <div className={ classes.top }>
        <h4>Parametry oferty</h4>
        <button className={ classes.newCard }><BsBoxArrowUpRight /></button>
        <button className={ classes.question }><BiCommentDetail /></button>
      </div>
      <div className={ classes.middle }>
        <p>{salary}</p>
        <p>kontrakt B2B (pełny etat)</p>
      </div>
      <div className={ classes.lower }>
        <p className={ classes.pgh }>
          <MdHomeWork/>
          <span>hate &#x2022; menel</span>
        </p>
        <p className={ classes.pgh }>
          <BsFillLayersFill/>
          <span>hate &#x2022; menel</span>
        </p>
        <p className={ classes.pgh }>
          <BsFire/>
          <span>praca jest jeszcze ważna 0 dni</span>
        </p>
        <p className={ classes.pgh }>
          <BiSolidMapPin/>
          <span>{workLocation}</span>
        </p>
      </div>

    </div>
  );
};

export default Item2;