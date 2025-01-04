import axios from "axios";
import conf from "../conf/conf";

export class AuthService {

    baseUrl = conf.serverEndpoint

    async registerUser(data) {
        try {
            // const user = await axios.post(this.baseUrl + '/register', data)
            const user = await axios({
                method: 'post',
                url: this.baseUrl + '/register',
                data: data,
            })

            if(!user) {
                console.log("failed to create user")
            }
            return user

        } catch (error) {
            console.log("registerUser error :: ", error)
        }
    }

    async loginUser(data) {
        try {
            const user = await axios.post(this.baseUrl + '/login', data)
            if(!user) {
                console.log("failed to login user")
            }
            return user
        } catch (error) {
            console.log("loginUser error :: ", error)
        }
    }

    async logoutUser() {
        try {
            await axios.post(this.baseUrl + '/logout')
        } catch (error) {
            console("logoutUser error :: ", error)
        }
    }

    async refreshToken() {
        try {
            const token = await axios.post(this.baseUrl + '/refresh-token')
            if(!token) {
                console.log("failed to refresh token")
            }
            return token
        } catch (error) {
            console.log("refreshToken error :: ", error)
        }
    }

    async changePassword(data) {
        try {  
            const user = await axios.post(this.baseUrl + '/change-password',data) 
            if (!user) {
                console.log("changing password failed")
            }
            return user
        } catch (error) {
            console.log("error in changing password")
        }
    }
}

const authService = new AuthService();
export default authService;