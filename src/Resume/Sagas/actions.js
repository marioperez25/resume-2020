export const REQUEST_API_DATA = "REQUEST__API_DATA";
export const RECEIVE_API_DATA = "RECEIVE__API_DATA";

export const requestApiData = () => (
    { type: REQUEST_API_DATA }
)

export const receiveApiData = data => (
    { type: RECEIVE_API_DATA, data }
)