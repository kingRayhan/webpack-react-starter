const path = require('path')
const CleanUp = require('webpack-cleanup-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const ExtractCSS = require('extract-text-webpack-plugin')
module.exports = (env, options) => {

    const { mode } = options

    return {
        entry: {
            app: './src/index.js'
        },
        output: {
            filename: '[name].[hash].js',
            path: path.resolve(__dirname, 'build')
        },
        devServer: {
            historyApiFallback: true,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: mode == 'development' ? ['style-loader', 'css-loader'] : ExtractCSS.extract({
                        use: ['css-loader']
                    })
                },
                {
                    test: /\.scss$/,
                    use: mode == 'development' ? ['style-loader', 'css-loader', 'sass-loader'] : ExtractCSS.extract({
                        use: ['css-loader', 'sass-loader']
                    })
                },
                {
                    test: /\.sass$/,
                    use: mode == 'development' ? ['style-loader', 'css-loader', 'sass-loader'] : ExtractCSS.extract({
                        use: ['css-loader', 'sass-loader']
                    })
                },
                {
                    exclude: [
                        /\.(js|jsx|mjs)$/,
                        /\.html$/,
                        /\.json$/,
                        /\.css$/,
                        /\.scss$/,
                        /\.sass/
                    ],
                    use: {
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'assets/[name].[hash:base64:8].[ext]'
                        }
                    }
                }
            ]
        },
        plugins: [
            new CleanUp('build'),
            new DashboardPlugin(),
            new ExtractCSS('app.[hash].css'),
            new HtmlWebpackPlugin({
                template: './public/index.html'
            })
        ]
    }
}