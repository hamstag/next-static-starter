import { getDefaultStore } from 'jotai';
import { atomWithStorage, RESET } from 'jotai/utils'

interface AuthModel {
    name: String;
    surename: String;
    phone: String;
    accessToken: String;
}

const authAtom = atomWithStorage<AuthModel | null>("auth", null)

const AuthStore = new class {
    store = getDefaultStore()

    onAuthChange(listener: (auth: AuthModel | null) => void) {
        return this.store.sub(authAtom, () => {
            listener(this.store.get(authAtom))
        })
    }

    get model(): AuthModel | null {
        return this.store.get(authAtom)
    }

    get isValid(): boolean {
        return !this.isTokenExpired(this.model?.accessToken ?? "")
    }


    save(auth: AuthModel) {
        this.store.set(authAtom, auth)
    }

    clear() {
        this.store.set(authAtom, RESET)
    }

    isTokenExpired(token: String): boolean {
        if (!token) return true
        try {
            // const decodedToken = jwtDecode(token)
            // const currentTime = Date.now() / 1000
            // return decodedToken.exp < currentTime
            return false
        } catch (error) {
            return true
        }
    }
}

export default AuthStore
export { authAtom }