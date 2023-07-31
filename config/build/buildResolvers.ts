import { type BuildOptions } from './types/config'
import type webpack from 'webpack'

export function buildResolvers ({ paths }: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            '@': paths.src
        }
    }
}
