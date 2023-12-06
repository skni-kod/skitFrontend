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
      name: "Microsoft",
      logoSrc: ""
    },
    salaries: [
      {
        salaryFrom: 1000.0,
        salaryTo: 2000.0,
        employmentType: SALARY_EMPLOYMENT_ENUM.Permanent
      }
    ],
    cities: ["Rzeszów", "Lublin"],
    technologies: [{ name: ".NET" }, { name: "C#" }, { name: "Docker" }],
    workLocations: [WORK_LOCATION_ENUM.Remote]
  },
  {
    id: "2",
    title: "Help desk",
    company: {
      id: "2",
      name: "Amazon",
      logoSrc: ""
    },
    salaries: [
      {
        salaryFrom: 1000.0,
        salaryTo: 2000.0,
        employmentType: SALARY_EMPLOYMENT_ENUM.MandateContract
      },
      {
        salaryFrom: 1500.0,
        salaryTo: 2300.0,
        employmentType: SALARY_EMPLOYMENT_ENUM.B2B
      }
    ],
    technologies: null,
    workLocations: [WORK_LOCATION_ENUM.Remote, WORK_LOCATION_ENUM.Office],
    cities: ["Rzeszów"]
  },
  {
    id: "3",
    title: "Frontend developer",
    company: {
      id: "3",
      name: "Google",
      logoSrc: ""
    },
    salaries: [
      {
        salaryFrom: 1000.0,
        salaryTo: 2000.0,
        employmentType: SALARY_EMPLOYMENT_ENUM.B2B
      }
    ],
    technologies: null,
    workLocations: [WORK_LOCATION_ENUM.Remote, WORK_LOCATION_ENUM.Office],
    cities: ["Rzeszów"]
  },
  {
    id: "4",
    title: "Backend developer",
    company: {
      id: "1",
      name: "Apple",
      logoSrc: "https://picsum.photos/100"
    },
    salaries: [
      {
        salaryFrom: 1000.0,
        salaryTo: 2000.0,
        employmentType: SALARY_EMPLOYMENT_ENUM.B2B
      }
    ],
    technologies: [{ name: "NET" }, { name: "C#" }, { name: "kubernetes" }], // ["".NET", "C#", "kubernetes"],
    workLocations: [WORK_LOCATION_ENUM.Remote, WORK_LOCATION_ENUM.Hybrid],
    cities: ["Rzeszów", "Lublin"]
  },
  {
    id: "5",
    title: "Backend developer",
    company: {
      id: "1",
      name: "Samsung",
      logoSrc: ""
    },
    salaries: [
      {
        salaryFrom: 1000.0,
        salaryTo: 2000.0,
        employmentType: SALARY_EMPLOYMENT_ENUM.MandateContract
      }
    ],
    technologies: null,
    workLocations: [WORK_LOCATION_ENUM.Remote, WORK_LOCATION_ENUM.Office],
    cities: ["Rzeszów"]
  }
];

const BrowserPage = () => {
  const [offers, setOffers] = useState<TPaginator<TOffer> | null>(null);

  useEffect(() => {
    const timeout = 500;

    // const offersMock = OFFERS_MOCK.map((offer) => {
    //   fetch(`https://api.api-ninjas.com/v1/logo?name=${offer.company.name}`, {
    //     headers: {
    //       "X-Api-Key": "7gsrCpYuBGtKrY/oyANprQ==DTrSXXN97E5hbxul"
    //     }
    //   })
    //     .then((res) => res.json())
    //     .then((data) => (offer.company.logoSrc = data[0].image));
    //
    //   return offer;
    // });

    setTimeout(async () => {
      for (const offer of OFFERS_MOCK) {
        await fetch(`https://api.api-ninjas.com/v1/logo?name=${offer.company.name}`, {
          headers: {
            "X-Api-Key": "7gsrCpYuBGtKrY/oyANprQ==DTrSXXN97E5hbxul"
          }
        })
          .then((res) => res.json())
          .then((data) => (offer.company.logoSrc = data[0]?.image));
      }
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
