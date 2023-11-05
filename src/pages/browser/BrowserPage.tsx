import { useEffect, useState } from "react";
import { TOffer } from "@api/types/offer/offer.ts";
import { TPaginator } from "@api/types/paginator/paginator.ts";
import OfferList from "./components/OfferList/OfferList.tsx";

const OFFERS_MOCK: TOffer[] = [
  {
    id: "1",
    title: "Backend developer",
    company: {
      id: "1",
      name: "Ideo",
      logoSrc: "https://picsum.photos/100/200"
    },
    salaryRange: {
      from: 1000.0,
      to: null
    },
    technologies: [".NET", "C#", "Docker"],
    workLocation: "Rzeszów"
  },
  {
    id: "2",
    title: "Help desk",
    company: {
      id: "2",
      name: "SII",
      logoSrc: "https://picsum.photos/200/100"
    },
    salaryRange: {
      from: 2000.0,
      to: 3000.0
    },
    technologies: ["MS Office", "Sieci LAN", "Windows 7"],
    workLocation: "Rzeszów"
  },
  {
    id: "3",
    title: "Frontend developer",
    company: {
      id: "3",
      name: "Delloite",
      logoSrc: "https://picsum.photos/100/150"
    },
    salaryRange: null,
    technologies: ["React JS", "Angular", "TypeScript", "SCSS"],
    workLocation: "Rzeszów"
  },
  {
    id: "4",
    title: "Backend developer",
    company: {
      id: "1",
      name: "Ideo",
      logoSrc: "https://picsum.photos/100"
    },
    salaryRange: {
      from: 3000.0,
      to: null
    },
    technologies: [".NET", "C#", "kubernetes"],
    workLocation: "Rzeszów"
  },
  {
    id: "5",
    title: "Backend developer",
    company: {
      id: "1",
      name: "Ideo",
      logoSrc: "https://picsum.photos/100"
    },
    salaryRange: {
      from: 1000.0,
      to: 2000.0
    },
    technologies: null,
    workLocation: "Rzeszów"
  }
];

const BrowserPage = () => {
  const [offers, setOffers] = useState<TPaginator<TOffer> | null>(null);

  useEffect(() => {
    const timeout = 500;

    setTimeout(() => {
      const data: TPaginator<TOffer> = {
        PageIndex: 0,
        Items: OFFERS_MOCK,
        PageSize: OFFERS_MOCK.length,
        SortDirection: "ASC",
        SortExpression: "salary"
      };

      setOffers(data);
    }, timeout);
  }, []);

  const handleOffer = (offer: TOffer) => {
    console.log(offer);
  };

  return (
    <div>
      {!offers && <div>Loading...</div>}
      {offers && <OfferList {...offers} onOfferEmit={handleOffer} />}
    </div>
  );
};

export default BrowserPage;
