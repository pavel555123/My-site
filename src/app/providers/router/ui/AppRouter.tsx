import { Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from '@/widgets/PageLoader'
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth'
import { routeConfig } from '@/app/providers/router/config/routeConfig'
import { AppRoutesProps } from '@/shared/types/router'

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader/>}>
                {route.element}
            </Suspense>
        )
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
            />
        )
    }, [])

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
            {/* {routes.map(({ element, path }) => ( */}
            {/*    <Route */}
            {/*        key={path} */}
            {/*        path={path} */}
            {/*        element={( */}
            {/*            <Suspense fallback={<PageLoader/>}> */}
            {/*                <div className='page-wrapper'> */}
            {/*                    {element} */}
            {/*                </div> */}
            {/*            </Suspense> */}
            {/*        )} */}
            {/*    /> */}
            {/* ))} */}
        </Routes>
    )
}
