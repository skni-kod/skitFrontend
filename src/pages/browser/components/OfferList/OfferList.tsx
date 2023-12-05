import { TPaginator } from "@api/types/paginator.ts";
import { TOffer } from "@api/types/offer.ts";
import OfferItem from "@pages/browser/components/OfferList/OfferItem/OfferItem.tsx";
import classes from "./OfferList.module.scss";

interface IOfferList extends TPaginator<TOffer> {
  onOfferEmit: (offer: TOffer) => void;
}

const OfferList = (props: IOfferList) => {
  const offers: TOffer[] = props.Items;

  return (
    <div className={classes.offers}>
      {offers?.map((offer: TOffer) => (
        <OfferItem
          key={offer.id}
          onClick={() => props.onOfferEmit(offer)}
          offer={offer}
        />
      ))}
    </div>
  );
};

export default OfferList;
