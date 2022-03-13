import { Alliances, AllianceType } from "../../types/alliance";
import { useAppDispatch } from "../../redux/hooks";
import { changeFilter } from "../../redux/airlines/airlinesSlice";

import "./styles.scss";

export const Filter: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleChange = (filter: AllianceType) => {
    dispatch(changeFilter(filter));
  };

  const renderFilters = () => {
    return Object.entries(Alliances).map((alliance) => (
      <div className="filter" key={alliance[0]}>
        <input
          type="checkbox"
          value={alliance[0]}
          id={alliance[0]}
          className="filter__input"
          onChange={() => {
            handleChange(alliance[0] as AllianceType);
          }}
        />
        <label htmlFor={alliance[0]} className="filter__label">
          {alliance[1]}
        </label>
      </div>
    ));
  };

  return (
    <section>
      <div className="title">
        <p>Filter by Alliances</p>
      </div>
      <div className="filters">{renderFilters()}</div>
    </section>
  );
};
