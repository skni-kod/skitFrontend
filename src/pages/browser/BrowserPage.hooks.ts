import { useEffect, useState } from "react";
import { TPaginator } from "@shared/types/pagination/paginator.ts";
import { TOffer } from "@shared/types/domain/offers/offer.ts";
import { getPublicOffer, getPublicOffers } from "@api/offers";

export function useBrowserPage() {
  //TODO: make usePagination hook
  const [offers, setOffers] = useState<TPaginator<TOffer>>(null);
  const [offer, setOffer] = useState<TOffer>(null);

  useEffect(() => {
    getPublicOffers({
      pageNumber: 1,
      pageSize: 10,
    }).then((res) => setOffers(res));
  }, []);

  const handleOffer = (offer: TOffer) => {
    getPublicOffer(offer.id).then((res) => setOffer(res));
  };

  const handleSortCategory = (category: string) => {
    console.log(category);
  };

  return {
    offer,
    offers,
    handleOffer,
    handleSortCategory
  };
}
