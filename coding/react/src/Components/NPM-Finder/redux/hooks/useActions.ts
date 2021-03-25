import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { searchRepo } from "../actions";

// TODO: learn this concept again
export const UseActions = () => {
  const dispatch = useDispatch();
  bindActionCreators(searchRepo, dispatch);
};
