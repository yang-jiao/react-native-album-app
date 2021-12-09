import { create } from "apisauce";
const api = create({ baseURL: 'https://jsonplaceholder.typicode.com', timeout: 6000, })

export default api