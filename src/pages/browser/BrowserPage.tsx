import OfferList from "./components/OfferList/OfferList.tsx";
import Filter from "@pages/browser/components/Filter/Filter.tsx";
import { useBrowserPage } from "@pages/browser/BrowserPage.hooks.ts";
import classes from "./BrowserPage.module.scss";

const BrowserPage = () => {
  const { offers, handleOffer } = useBrowserPage();

  return (
    <>
      <Filter />
      <div className={classes.content}>
        {!offers && <div>Loading...</div>}
        {offers && <OfferList {...offers} onOfferEmit={handleOffer} />}
      </div>

    </>
  );
};

export default BrowserPage;
