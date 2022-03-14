import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  changePage,
  fetchData,
  selectAirlines,
} from "../../redux/airlines/airlinesSlice";
import { useEffect } from "react";

import { Filter } from "./Filter";
import { Airline } from "./Airline";

import "./styles.scss";
import { Pagination } from "./Pagination";
import { filterAirlines } from "../utils/filterAirlines";
import { useMemo } from "react";

const ITEMS_PER_PAGE = 20;

export const Airlines: React.FC = () => {
  const { airlines, status, filters, currentPage } =
    useAppSelector(selectAirlines);

  const dispatch = useAppDispatch();

  const filteredAirlines = filterAirlines(airlines, filters);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const renderAirlines = useMemo(() => {
    return (
      filteredAirlines
        // (0 * 20 = 0, 0 * 20 + 20 = 20 -> from 0 to 20)
        .slice(
          currentPage * ITEMS_PER_PAGE,
          currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        )
        .map((airline) => <Airline key={airline.code} airline={airline} />)
    );
  }, [currentPage, filteredAirlines]);

  // Page number click
  const handlePageClick = (page: number) => {
    console.log(page);
    dispatch(changePage(page));
  };

  return (
    <main className="airlines">
      <div className="title">
        <h1>Airlines</h1>
      </div>
      <Filter />
      <section className="tiles">{renderAirlines}</section>
      <Pagination
        numberOfItems={filteredAirlines.length}
        itemsPerPage={ITEMS_PER_PAGE}
        handleClick={handlePageClick}
      />
    </main>
  );
};
