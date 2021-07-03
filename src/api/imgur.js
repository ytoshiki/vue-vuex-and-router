// import axios from "axios";
import qs from "qs";
const CLIENT_ID = "da1ba64a659b928";
// const CLIENT_SECRET = "cc99176ecbd4a5e0aad517e8dfc68021fed73998";
const ROOT_URL = "https://api.imgur.com";

const clientString = {
  client_id: CLIENT_ID,
  response_type: "token",
};

export default {
  login () {
   window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(clientString)}`;
  }
}