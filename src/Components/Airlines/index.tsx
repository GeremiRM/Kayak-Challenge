import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchData, selectAirlines } from "../../redux/airlines/airlinesSlice";
import { useEffect } from "react";

export const Airlines: React.FC = () => {
  const { airlines, status } = useAppSelector(selectAirlines);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <div></div>
    </div>
  );
};
