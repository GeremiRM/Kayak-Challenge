import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchData, selectAirlines } from "../../redux/airlines/airlinesSlice";
import { useEffect } from "react";
import { Airline } from "./Airline";

import "./styles.scss";

export const Airlines: React.FC = () => {
  const { airlines, status, filters } = useAppSelector(selectAirlines);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const renderAirlines = () => {
    const filteredAirlines =
      // Are there any filters active?
      filters.length === 0
        ? airlines
        : airlines.filter(({ alliance }) => filters.includes(alliance));

    return filteredAirlines
      .slice(0, 20)
      .map((airline) => <Airline key={airline.code} airline={airline} />);
  };

  return <div className="airlines">{renderAirlines()}</div>;
};
