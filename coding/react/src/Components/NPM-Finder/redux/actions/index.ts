import axios from "axios";
import { Dispatch } from "react";
import { ActionTypes } from "../reducers/RepoReducers";
import { REDUX_CONSTANCE } from "./../../constance";
export const searchRepo = (searchValue: string) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    try {
      dispatch({
        type: REDUX_CONSTANCE.ACTIONS.SEARCH,
        payload: null,
      });
      const { data } = await axios.get(REDUX_CONSTANCE.NPM_URL, {
        params: { text: searchValue },
      });
      const availablePackages = data?.objects?.map((packageInfo: any) => {
        const { name, links, description } = packageInfo?.package;
        return {
          name,
          url: links.npm,
          description,
        };
      });
      dispatch({
        type: REDUX_CONSTANCE.ACTIONS.SUCCESS,
        payload: availablePackages,
      });
    } catch (err) {
      console.log(`Error `, err);
      dispatch({
        type: REDUX_CONSTANCE.ACTIONS.ERROR,
        payload: err?.message,
      });
    }
  };
};
