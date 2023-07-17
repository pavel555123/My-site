import { useEffect } from 'react'

export function useInitialEffect (callback: () => void) {
    useEffect(() => {
        if (PROJECT !== 'storybook' && PROJECT !== 'jest') {
            callback()
        }
    }, [])
}
