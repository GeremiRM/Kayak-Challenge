import ReactPaginate from "react-paginate";

import "./styles.scss";

interface PaginationProps {
  numberOfItems: number;
  itemsPerPage: number;
  handleClick: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  numberOfItems,
  itemsPerPage,
  handleClick,
}) => {
  const pageCount = Math.ceil(numberOfItems / itemsPerPage);

  return (
    <section className="pagination">
      <ReactPaginate
        nextLabel=">"
        onPageChange={(event) => {
          handleClick(event.selected);
        }}
        pageRangeDisplayed={1}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="page"
        pageLinkClassName="page__link"
        previousClassName="page"
        previousLinkClassName="page__link"
        nextClassName="page"
        nextLinkClassName="page__link"
        breakLabel="..."
        breakClassName="page"
        breakLinkClassName="page__link"
        containerClassName="pager"
        activeLinkClassName="page__link--active"
      />
    </section>
  );
};
