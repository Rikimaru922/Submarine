
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actionTypes/init'
const isServer = typeof window === "undefined";
const initialState: any = {
  sidebarOpen: !isServer ? localStorage.getItem("SIDEBAR_STATUS") === "1" ? true : false : ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, sidebarOpen: true };
    case SIDEBAR_CLOSE:
      return { ...state, sidebarOpen: false };
    default:
      return state;
  }
}
