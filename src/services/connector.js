import axios from "axios";
import configs from "../config/config";

export default class Connector {
  get_content(code) {
    return axios
      .get(configs.urlApi + "/fetch/get-content", {
        params: {
          code,
        },
      })
      .then((response) => {
        let data = response.data;

        return data;
      });
  }
}
