module.exports = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false
            }
        },
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        'storybook-addon-themes'
    ],
    framework: '@storybook/react-vite',
    core: {
        builder: '@storybook/builder-webpack5'
    },
    staticDirs: ['../../public']
}
