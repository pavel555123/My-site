import { Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader/PageLoader'
import { type AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig'
import { RequireAuth } from 'app/providers/router/ui/RequireAuth'

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
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
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
