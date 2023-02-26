import { type Story } from '@storybook/react'
import { type StateScheme, StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial } from '@reduxjs/toolkit'

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateScheme>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state}>
        <StoryComponent/>
    </StoreProvider>
)
