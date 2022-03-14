import "./styles.scss";

import { Airline as AirlineType } from "../../../types/airline";
import { Alliances } from "../../../types/alliance";

interface AirlineProps {
  airline: AirlineType;
}

const KAYAK_URL = "https://www.kayak.com/";

export const Airline: React.FC<AirlineProps> = ({ airline }) => {
  const { name, alliance, phone, logoURL, site } = airline;

  return (
    <div className="airline">
      <div className="logo">
        <img
          src={KAYAK_URL + logoURL}
          alt={`${name} logo`}
          className="logo__img"
        />
      </div>

      <div className="info">
        <p className="info__name">{name}</p>

        <div className="description">
          <p className="description__alliance">{Alliances[alliance]}</p>
          <p className="description__phone">
            {phone ? phone : "No phone available"}
          </p>
          <a
            className="description__site"
            href={site}
            target="_blank"
            rel="noreferrer"
          >
            {/* Removes https:///www. from site url*/}
            {site.replace(/^https?:\/\/www./, "")}
          </a>
        </div>
      </div>
    </div>
  );
};
