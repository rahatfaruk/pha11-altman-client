import axios from "axios";

const axiosSecure = axios.create({
  baseURL: 'https://pha11-altproduct-server.vercel.app',
  withCredentials: true
})

const axiosBase = axios.create({"baseURL": 'https://pha11-altproduct-server.vercel.app'})

function useAxios() {
  return {axiosBase, axiosSecure};
}

export default useAxios;