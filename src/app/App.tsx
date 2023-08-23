import { Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { getUserInited, initAuthData } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ToggleFeatures } from '@/shared/lib/features'
import { MainLayout } from '@/shared/layouts/MainLayout'
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
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <div className={classNames('app_redesigned', {}, [])}>
                    <Suspense fallback=''>
                        <MainLayout
                            header={<Navbar/>}
                            content={<AppRouter/>}
                            sidebar={<Sidebar/>}
                        />
                    </Suspense>
                </div>
            }
            off={
                <div className={classNames('app', {}, [])}>
                    <Suspense fallback=''>
                        <Navbar/>
                        <div className='content-page'>
                            <Sidebar/>
                            <AppRouter/>
                        </div>
                    </Suspense>
                </div>
            }
        />
    )
}

export default App
