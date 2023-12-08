import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TPaginator } from "@api/types/paginator.ts";
import { TOffer } from "@api/types/offer.ts";
import { SALARY_EMPLOYMENT_ENUM } from "@api/enums/salary-employment.ts";
import { WORK_LOCATION_ENUM } from "@api/enums/work-location.ts";

export function useBrowserPage() {
  const [params] = useSearchParams();
  const [offers, setOffers] = useState<TPaginator<TOffer> | null>(null);

  const search = params.get("search");

  useEffect(() => {
    const timeout = 300;
    const timerId = setTimeout(() => {
      setOffers((prevOffers: TPaginator<TOffer>): TPaginator<TOffer> => {
        if (!prevOffers) return prevOffers;
        const filteredOffers: TOffer[] = OFFERS_MOCK.filter(
          (offer: TOffer) => {
            if (!search) return true;

            return offer.title
              .toLowerCase()
              .includes(search.toLowerCase());
          }
        );

        console.log(filteredOffers);
        const newState: TPaginator<TOffer> = {
          items: filteredOffers,
          totalCount: OFFERS_MOCK.length,
          totalPages: Math.ceil(OFFERS_MOCK.length / 10),
          pageIndex: 0
        };

        return newState;
      });
    }, timeout);

    return () => {
      clearTimeout(timerId);
    };
  }, [search]);

  useEffect(() => {
    const timeout = 500;

    setTimeout(async () => {
      for (const offer of OFFERS_MOCK) {
        await fetch(
          `https://api.api-ninjas.com/v1/logo?name=${ offer.company.name }`,
          {
            headers: {
              "X-Api-Key": "7gsrCpYuBGtKrY/oyANprQ==DTrSXXN97E5hbxul"
            }
          }
        )
          .then((res) => res.json())
          .then((data) => (offer.company.logoSrc = data[0]?.image));
      }
      const data: TPaginator<TOffer> = {
        pageIndex: 0,
        totalPages: Math.ceil(OFFERS_MOCK.length / 10),
        totalCount: OFFERS_MOCK.length,
        items: OFFERS_MOCK,
      };

      console.log(data);
      setOffers(data);
    }, timeout);
  }, []);

  const handleOffer = (offer: TOffer) => {
    console.log(offer);
  };

  return {
    offers,
    handleOffer
  };
}

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
