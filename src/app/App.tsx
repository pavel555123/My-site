import { Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { getUserInited, initAuthData } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { AppRouter } from './providers/router'

const App = () => {
    const dispatch = useAppDispatch()
    const init = useSelector(getUserInited)

    useEffect(() => {
        dispatch(initAuthData())
    }, [dispatch])

    if (!init) {
        return <div>Loading...</div>
    }

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback=''>
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>
                    {init && <AppRouter/>}
                </div>
            </Suspense>
        </div>
    )
}

export default App
