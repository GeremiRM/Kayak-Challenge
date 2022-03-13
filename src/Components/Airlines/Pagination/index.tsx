import { changePage } from "../../../redux/airlines/airlinesSlice";
import { useAppDispatch } from "../../../redux/hooks";

interface PaginationProps {
  numberOfItems: number;
  itemsPerPage: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  numberOfItems,
  itemsPerPage,
}) => {
  const dispatch = useAppDispatch();

  const numberOfPages = Math.ceil(numberOfItems / itemsPerPage);

  const handleClick = (page: number) => {
    dispatch(changePage(page));
  };

  const renderPages = () => {
    return [...Array(numberOfPages)].map((_, idx) => (
      <button
        className="pager__page"
        key={idx}
        onClick={() => {
          handleClick(idx);
        }}
      >
        {idx + 1}
      </button>
    ));
  };

  return <section className="pager">{renderPages()}</section>;
};
