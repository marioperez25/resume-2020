import { RECEIVE_API_DATA } from "../sagas/actions";

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return data;
    default:
      return state;
  }
};