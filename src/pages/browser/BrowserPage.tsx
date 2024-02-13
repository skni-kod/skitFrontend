import OfferList from "./components/OfferList/OfferList.tsx";
import DetailsView from "@pages/browser/components/DetailsView/DetailsView.tsx";
import SortCategories from "@pages/browser/components/SortCategories.tsx";
import { useBrowserPage } from "@pages/browser/BrowserPage.hooks.ts";
import classes from "./BrowserPage.module.scss";

const BrowserPage = () => {
  const { offer, offers, handleOffer, handleSortCategory } = useBrowserPage();

  return (
    <>
      <SortCategories onClick={handleSortCategory}/>
      {/* TODO: Add filters when its finished on backend*/}
      <div className={classes.content}>
        {!offers && <div>Loading...</div>}
        {offers && <OfferList {...offers} onOfferEmit={handleOffer} />}
        {!offer && <div></div>}
        {offer && <DetailsView {...offer} />}
      </div>

    </>
  );
};

export default BrowserPage;
