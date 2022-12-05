import axios from 'axios'
const _token=localStorage.getItem('user')
 const axiosinstance=axios.create({
    baseURL:"https://etshop-server.onrender.com/api",
    headers:{
        "Authorization":_token?_token:''
    }
})
export default axiosinstance;
