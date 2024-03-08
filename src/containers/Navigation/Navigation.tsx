import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import Input from "@components/UI/molecules/Input.tsx";
import Button from "@components/UI/molecules/Button.tsx";
import logo from "@assets/logo.svg";
import classes from "./Navigation.module.scss";

const Navigation = () => {
  const [searchParams, setSearchParams] = useSearchParams({search: ""});
  const search = searchParams.get("search");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ search: e.target.value });
  };

  return (
    <nav className={classes.navigation}>
      <div className={classes["left-side"]}>
        <NavLink to={"browser"} style={{ display: "flex" }}>
          <img className={classes.logo} src={logo} alt="logo" />
        </NavLink>
        <Input
          iconBefore={"Search"}
          label={"Szukaj pracy w IT"}
          type={"text"}
          name={"search"}
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className={classes["right-side"]}>
        <Button iconBefore={"Plus"}>Dodaj ogłoszenie</Button>
      </div>
    </nav>
  );
};

export default Navigation;
