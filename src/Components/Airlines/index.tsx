import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchData, selectAirlines } from "../../redux/airlines/airlinesSlice";
import { useEffect } from "react";
import { Airline } from "./Airline";

import "./styles.scss";

export const Airlines: React.FC = () => {
  const { airlines, status } = useAppSelector(selectAirlines);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const renderAirlines = () => {
    return airlines
      .slice(0, 20)
      .map((airline) => <Airline airline={airline} key={airline.code} />);
  };

  return <div className="airlines">{renderAirlines()}</div>;
};
