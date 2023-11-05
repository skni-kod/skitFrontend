import { TOffer } from "@api/types/offer/offer.ts";
import Card from "@components/UI/atoms/Card.tsx";
import MainInfo from "@pages/browser/components/OfferList/OfferItem/MainInfo/MainInfo.tsx";
import Technologies from "@pages/browser/components/OfferList/OfferItem/Technologies/Technologies.tsx";
import Salary from "@pages/browser/components/OfferList/OfferItem/Salary/Salary.tsx";
import classes from "./OfferItem.module.scss";

interface IOfferItemProps {
  onClick?: () => void;
  offer: TOffer;
}

const OfferItem = (props: IOfferItemProps) => {
  return (
    <Card className={classes.offer} onClick={props.onClick}>
      <div className={classes.description}>
        <img
          src={props.offer.company.logoSrc}
          alt={`logo of ${props.offer.company.name} company`}
          className={classes.logo}
        />
        <MainInfo
          title={props.offer.title}
          workLocation={props.offer.workLocation}
          companyName={props.offer.company.name}
        />
      </div>
      {props.offer.technologies && (
        <div className={classes.section}>
          <Technologies technologies={props.offer.technologies} />
        </div>
      )}
      {props.offer.salaryRange && (
        <div className={classes.section}>
          <Salary salaryRange={props.offer.salaryRange} />
        </div>
      )}
    </Card>
  );
};

export default OfferItem;
