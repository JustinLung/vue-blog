import axios from "axios"

const API_URL = process.env.VUE_APP_API_URL

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

    register(username, password, image) {
        const formData = new FormData()
        formData.append("image", image)
        formData.append("username", username)
        formData.append("password", password)
        return axios.post(`${API_URL}/auth/register`, formData).then(res=>{
            return res.data
        })
    }
}

export default new AuthService()