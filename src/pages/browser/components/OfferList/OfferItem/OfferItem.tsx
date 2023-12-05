import { TOffer } from "@api/types/offer.ts";
import Card from "@components/UI/atoms/Card.tsx";
import TitleAndSalarySection from "@pages/browser/components/OfferList/OfferItem/MainInfo/TitleAndSalarySection.tsx";
import DescriptionAndTechnologiesSection from "@pages/browser/components/OfferList/OfferItem/Technologies/DescriptionAndTechnologiesSection.tsx";
import classes from "./OfferItem.module.scss";

interface IOfferItemProps {
  onClick?: () => void;
  offer: TOffer;
}

const OfferItem = (props: IOfferItemProps) => {
  return (
    <Card className={classes.offer} onClick={props.onClick}>
      <img
        className={classes.logo}
        src={props.offer.company.logoSrc}
        alt={`logo of ${props.offer.company.name} company`}
      />
      <div className={classes.description}>
        <TitleAndSalarySection
          title={props.offer.title}
          salaries={props.offer.salaries}
        />
        <DescriptionAndTechnologiesSection
          companyName={props.offer.company.name}
          workLocations={props.offer.workLocations}
          technologies={props.offer.technologies}
        />
      </div>
    </Card>
  );
};

export default OfferItem;
