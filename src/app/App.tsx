import { Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { getUserInited, initAuthData } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ToggleFeatures } from '@/shared/lib/features'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout'
import { PageLoader } from '@/widgets/PageLoader'
import { useAppToolbar } from './lib/useAppToolbar'
import { AppRouter } from './providers/router'

const App = () => {
    const dispatch = useAppDispatch()
    const init = useSelector(getUserInited)
    const toolbar = useAppToolbar()

    useEffect(() => {
        if (!init) {
            dispatch(initAuthData())
        }
    }, [dispatch, init])

    if (!init) {
        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <div className={classNames('app_redesigned', {}, [])}>
                        <AppLoaderLayout/>
                    </div>
                }
                off={<PageLoader/>}
            />
        )
    }

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <div className={classNames('app_redesigned', {}, [])} id='app'>
                    <Suspense fallback=''>
                        <MainLayout
                            header={<Navbar/>}
                            content={<AppRouter/>}
                            sidebar={<Sidebar/>}
                            toolbar={toolbar}
                        />
                    </Suspense>
                </div>
            }
            off={
                <div className={classNames('app', {}, [])} id='app'>
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
