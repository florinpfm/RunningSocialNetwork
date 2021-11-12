import axios from "axios";

const setTokenHeaderInfo = (token) => {
  // local storage token exists => add to header
  if(token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    // clear token from header request
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setTokenHeaderInfo;