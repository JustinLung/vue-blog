import axios from "axios"

const API_URL = "http://localhost:3000"

class AuthService {
    login(username, password) {
        return axios.post(`${API_URL}/auth/login`, {username, password}).then(res=>{
            if(res.data.accessToken) localStorage.setItem('user', JSON.stringify(res.data))
            return res.data
        })
    }

    logout() {
        localStorage.removeItem('user')
    }
}

export default new AuthService()