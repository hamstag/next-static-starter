export default class LoginService {
    constructor() { }

    async login(username: string, password: string) {
        return {
            name: "Hamstag",
            surename: "Hello",
            phone: "02077778888",
            accessToken: "1234567890",
        }
    }
}