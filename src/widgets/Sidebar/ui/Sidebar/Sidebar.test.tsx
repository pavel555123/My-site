// import { fireEvent, screen } from '@testing-library/react'
import { screen } from '@testing-library/react'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sidebar } from '../Sidebar/Sidebar'

describe('Sidebar', () => {
    test('first param', () => {
        componentRender(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    // test('test toggle', () => {
    //     componentRender(<Sidebar/>)
    //     const toggleBtn = screen.getByTestId('sidebar-toggle')
    //     expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    //     fireEvent.click(toggleBtn)
    //     expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    // })
})
