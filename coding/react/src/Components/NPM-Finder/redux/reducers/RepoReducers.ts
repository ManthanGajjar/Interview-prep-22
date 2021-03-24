import { REDUX_CONSTANCE } from "./../../constance";
interface RepoState {
  isLoading: boolean;
  data: string[] | null;
  error: string[] | null;
}

export interface ActionTypes {
  type: string;
  payload: string[] | null;
}

const RepoReducer = (
  state: RepoState = { isLoading: false, data: [], error: null },
  action: ActionTypes
): RepoState => {
  const { ERROR, SEARCH, SUCCESS } = REDUX_CONSTANCE.ACTIONS;
  switch (action.type) {
    case SEARCH:
      console.log("Searching...");
      return { isLoading: true, data: [], error: null };
    case SUCCESS:
      console.log("Success...");
      return { isLoading: false, data: action.payload, error: null };
    case ERROR:
      console.log("Error..");
      return { isLoading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default RepoReducer;
