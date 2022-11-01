const service = axios.create({
  timeout: 10000,
});

service.interceptors.response.use(
  (res) => Promise.resolve(res.data),
  (error) => Promise.reject(error)
);

export default service;
