class jwtService {

    parseJwt (token) {
        const base64Url = token.split('.')[1]
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        }).join(''))
    
        return JSON.parse(jsonPayload);
    }

    isExpired(token) {
        const decodedToken = this.parseJwt(token)
        const exp = decodedToken.exp
        return Date.now() >= exp * 1000
    }
}

export default new jwtService()