import { useEffect, useState } from "react";
import { TOffer } from "@api/types/offer.ts";
import { TPaginator } from "@api/types/paginator.ts";
import OfferList from "./components/OfferList/OfferList.tsx";
import { WORK_LOCATION_ENUM } from "@api/enums/work-location.ts";
import { SALARY_EMPLOYMENT_ENUM } from "@api/enums/salary-employment.ts";

const OFFERS_MOCK: TOffer[] = [
  {
    id: "1",
    title: "Backend developer",
    company: {
      id: "1",
      name: "Ideo",
      logoSrc: "https://picsum.photos/100/200"
    },
    salary: {
      from: 1000.0,
      to: null,
      employmentType: SALARY_EMPLOYMENT_ENUM.B2B
    },
    cities: ["Rzeszów", "Lublin"],
    technologies: [{ name: ".NET" }, { name: "C#" }, { name: "Docker" }],
    workLocations: [WORK_LOCATION_ENUM.Remote],
  },
  {
    id: "2",
    title: "Help desk",
    company: {
      id: "2",
      name: "SII",
      logoSrc: "https://picsum.photos/200/100"
    },
    salary: {
      from: 2000.0,
      to: 3000.0
    },
    technologies: ["MS Office", "Sieci LAN", "Windows 7"],
    workLocations: "Rzeszów",
    employmentType: "stacjonarna",
  },
  {
    id: "3",
    title: "Frontend developer",
    company: {
      id: "3",
      name: "Delloite",
      logoSrc: "https://picsum.photos/100/150"
    },
    salary: null,
    technologies: ["React JS", "Angular", "TypeScript", "SCSS"],
    workLocations: "Rzeszów",
    employmentType: "hybrydowa",
  },
  {
    id: "4",
    title: "Backend developer",
    company: {
      id: "1",
      name: "Ideo",
      logoSrc: "https://picsum.photos/100"
    },
    salary: {
      from: 3000.0,
      to: null
    },
    technologies: [".NET", "C#", "kubernetes"],
    workLocations: "Rzeszów",
    employmentType: "zdalna"
  },
  {
    id: "5",
    title: "Backend developer",
    company: {
      id: "1",
      name: "Ideo",
      logoSrc: "https://picsum.photos/100"
    },
    salary: {
      from: 1000.0,
      to: 2000.0
    },
    technologies: null,
    workLocations: "Rzeszów",
    employmentType: "zdalna",
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
