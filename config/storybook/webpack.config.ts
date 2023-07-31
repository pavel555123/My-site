import path from 'path'
import { type RuleSetRule } from 'webpack'
import { DefinePlugin } from 'webpack'
import { type BuildPaths } from '../build/types/config'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'
import type webpack from 'webpack'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: ''
    }
    config.resolve!.modules!.push(paths.src)
    config.resolve!.extensions!.push('.ts', '.tsx')
    config.resolve!.alias = {
        ...config.resolve!.alias,
        '@': paths.src
    }

    // @ts-expect-error
    config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
        }

        return rule
    })

    config.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    })
    config.module!.rules.push(buildCssLoaders(true))

    config.plugins!.push(new DefinePlugin({
        IS_DEV: JSON.stringify(true),
        API: JSON.stringify('http://testapi.ru'),
        PROJECT: JSON.stringify('storybook')
    }))

    return config
}
