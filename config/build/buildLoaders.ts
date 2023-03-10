import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoaders } from './loaders/buildCssLoaders'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }

    const babelLoader = buildBabelLoader(isDev)

    const cssLoader = buildCssLoaders(isDev)

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader
    ]
}
