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

    public get model(): AuthModel | null {
        return this.store.get(authAtom)
    }

    save(auth: AuthModel) {
        this.store.set(authAtom, auth)
    }

    clear() {
        this.store.set(authAtom, RESET)
    }
}

export default AuthStore
export { authAtom }