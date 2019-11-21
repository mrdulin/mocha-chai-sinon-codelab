import * as service from "./service";
import { handleResponse, addNotification } from "./appActions";

export function fetchList(id) {
  return dispatch => {
    return service.getList(id).then(
      response => {
        handleResponse(response);
      },
      error => {
        addNotification(error);
      }
    );
  };
}
