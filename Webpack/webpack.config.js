import path from 'path';
import autoprefixer from 'autoprefixer';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import loader from 'sass-loader';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { server } from 'typescript';
import { watch } from 'fs';
import { sourceMapsEnabled } from 'process';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    mode: 'development',
    entry: {
        main: './src/Index.tsx'
    },
    output: {
        filename: '[name].[contenthash].js', // 각 번들 파일의 이름을 설정함. [name]은 entry의 key값을 사용함.
        chunkFilename: '[name].[contenthash].js', // 동적 임포트로 생성된 번들 파일의 이름을 설정함. 청크 파일의 이름을 설정함.
        path: path.resolve(__dirname, 'dist'),
        clean: true, // 빌드(build) 이전 결과물을 제거함.
        // publicPath: '/'
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'), // 정적 파일을 제공할 경로를 설정함. 절대 경로를 사용함.
        hot: true, // 모듈의 변경 사항이 있을 때 자동으로 페이지를 새로 고침함.
        open: true, // 서버를 실행할 때 브라우저를 자동으로 열도록 설정함.
        port: 8080, // 서버의 포트 번호를 설정함.
        watchFiles: ['src/**/*.html', 'src/**/*.js', 'src/**/*.scss', 'src/**/*.ts', 'src/**/*.tsx'], // 파일이 변경되었을 때 서버를 재시작할 파일을 설정함.
        historyApiFallback: true

    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'], // 탐색할 확장자를 설정함. 확장자를 명시하지 않아도 되도록 설정함.
        alias: {
            '@': path.resolve(__dirname, 'src'), // 모듈을 더 쉽게 import 하기 위해 별칭을 설정함.
            'js': path.resolve(__dirname, 'src/js'), // 모듈을 더 쉽게 import 하기 위해 별칭을 설정함.
            'assets': path.resolve(__dirname, 'src/public/assets') // assets 폴더에 대한 별칭 추가
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['main'],
            favicon: path.resolve(__dirname, 'src/public/assets/favicon.ico')
        }),
        new HtmlWebpackPlugin({
            template: './src/public/code.html',
            filename: 'code.html',
            chunks: ['code'],
            favicon: path.resolve(__dirname, 'src/public/assets/favicon.ico') // favicon 설정
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/public/assets'), to: 'assets' }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i, // .ts 확장자를 가진 파일에 대해 아래의 로더를 사용합니다.
                use: 'ts-loader', // ts-loader를 사용합니다.
                exclude: /node_modules/ // node_modules 폴더의 파일은 제외합니다.
            },
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.(scss|css)$/,  // .scss 확장자를 가진 파일에 대해 아래의 로더를 사용합니다.
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        // options: {
                        //     importLoaders: 2,
                        //     modules: {
                        //         exportLocalsConvention: 'camelCase',
                        //         localIdentName: '[name]__[local]___[hash:base64:5]'
                        //     }
                        // }
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader', // PostCSS 를 사용하여 CSS 를 처리하는 로더를 설정함.
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'tailwindcss',
                                    'autoprefixer',
                                ]
                            }
                        }
                    },
                    {
                        // SASS/SCSS 파일을 CSS 로 컴파일 합니다.
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                quietDeps: true
                            }
                        }
                    }
                ]

            },
            {
                test: /\.(png|jpe?g|gif|svg|ico|mp4|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][hash][ext][query]'
                }
            }

        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
        splitChunks: { chunks: 'all' }
    },
    performance: {
        hints: 'warning',
        maxEntrypointSize: 10240000, //
        maxAssetSize: 10240000
    },
    devtool: 'source-map',
    cache: {
        type: 'filesystem',
        buildDependencies: {
            config: [__filename]
        }
    }
}

export default (env, argv) => {
    const isProduction = argv.mode === 'production';
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};

