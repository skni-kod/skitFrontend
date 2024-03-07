import { TOffer } from "@shared/types/domain/offers/offer.ts";
import Card from "@components/UI/atoms/Card.tsx";
import TitleAndSalarySection from "@pages/browser/components/OfferList/OfferItem/MainInfo/TitleAndSalarySection.tsx";
import DescriptionAndTechnologiesSection from "@pages/browser/components/OfferList/OfferItem/Technologies/DescriptionAndTechnologiesSection.tsx";
//TODO: Change here when backend add logoSrc to company
import COMPANY_LOGO_MOCK from "@assets/company-logo.mock.jpg";
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
        src={props.offer.companyLogoUrl || COMPANY_LOGO_MOCK}
        alt={`logo of ${props.offer.companyName} company`}
      />
      <div className={classes.description}>
        <TitleAndSalarySection
          title={props.offer.title}
          salaries={props.offer.salaries}
        />
        <DescriptionAndTechnologiesSection
          companyName={props.offer.companyName}
          workLocations={props.offer.workLocations}
          technologies={props.offer.technologies}
          cities={props.offer.cities}
        />
      </div>
    </Card>
  );
};

export default OfferItem;
