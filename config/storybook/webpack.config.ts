import { type RuleSetRule } from 'webpack'
import type webpack from 'webpack'
import { DefinePlugin } from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve!.modules!.push(paths.src)
    config.resolve!.extensions!.push('.ts', '.tsx')

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
        API: JSON.stringify(''),
        PROJECT: JSON.stringify('storybook')
    }))

    return config
}
