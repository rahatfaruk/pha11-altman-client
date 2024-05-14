import axios from "axios";

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true
})

const axiosBase = axios.create({"baseURL": 'http://localhost:5000'})

function useAxios() {
  return {axiosBase, axiosSecure};
}

export default useAxios;