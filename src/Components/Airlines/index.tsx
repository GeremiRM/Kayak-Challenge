import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  changePage,
  fetchData,
  selectAirlines,
} from "../../redux/airlines/airlinesSlice";

import { Filter } from "./Filter";
import { Airline } from "./Airline";
import { Pagination } from "./Pagination";

import { filterAirlines } from "../../utils/filterAirlines";

import "./styles.scss";

const ITEMS_PER_PAGE = 20;

export const Airlines: React.FC = () => {
  const { airlines, filters, currentPage } = useAppSelector(selectAirlines);

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
      <h1 className="airlines__title">Airlines</h1>

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
