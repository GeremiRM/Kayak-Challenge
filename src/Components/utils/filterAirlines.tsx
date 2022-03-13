import { Airline } from "../../types/airline";
import { AllianceType } from "../../types/alliance";

export const filterAirlines = (
  airlines: Airline[],
  filters: AllianceType[]
) => {
  return filters.length === 0
    ? airlines
    : airlines.filter(({ alliance }) => filters.includes(alliance));
};
