import { useState } from "react"

const useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T) => void] => {
    const [state, setState] = useState(() => {
        // Initialize the state
        try {
            const value = window.localStorage.getItem(key)
            // Check if the local storage already has any values,
            // otherwise initialize it with the passed initialValue
            return value ? JSON.parse(value) as T : initialValue
        } catch (error) {
            return initialValue
        }
    })

    const setValue = (value: T) => {
        try {
            // If the passed value is a callback function,
            //  then call it with the existing state.
            const valueToStore = value instanceof Function ? value(state) : value
            window.localStorage.setItem(key, JSON.stringify(valueToStore))
            setState(value)
        } catch (error) {
            console.log(error)
        }
    }

    return [state, setValue]
}

export default useLocalStorage
