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
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    mode: 'development',
    entry: {
        main: './src/Index.tsx'
    },
    output: {
        filename: '[name].[contenthash].js', // 각 번들 파일의 이름을 설정함.
        chunkFilename: '[name].[contenthash].js', // 청크 파일의 이름을 설정함.
        path: path.resolve(__dirname, 'dist'), // 번들 파일이 생성될 경로를 설정함. 절대 경로를 사용함.
        // publicPath: '/', // 정적 파일이 제공될 경로를 설정함.
        clean: true, // 빌드(build) 이전 결과물을 제거함.
        // publicPath: '/'
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'), // 정적 파일 제공 경로
        hot: true, // HMR 기능을 활성화함.
        open: true, // 서버 시작시 브라우저 자동 열기
        port: 8080, // 서버의 포트 번호를 설정함.
        watchFiles: [
            'src/**/*.html',
            'src/**/*.js',
            'src/**/*.scss',
            'src/**/*.ts',
            'src/**/*.tsx'
        ], // 파일이 변경되었을 때 서버를 재시작할 파일을 설정함.
        historyApiFallback: true,// HTML5 API 를 사용하는 SPA
        headers: {
            'X-Content-Type-Options': 'nosniff'
        }

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
        }),
        new webpack.HotModuleReplacementPlugin(), // HMR 플러그인 추가
        // new HotModuleReplacementPlugin(), // HMR 플러그인 추가
        // new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i, // TypeScript 파일을 처리하기 위한 규칙.
                use: 'ts-loader', // ts-loader를 사용합니다.
                exclude: /node_modules/ // node_modules 폴더의 파일은 제외합니다.
            },
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(scss)$/,  // SCSS 파일을 처리하기 위한 규칙
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
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
                test: /\.(png|jpe?g|gif|svg|ico|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][hash][ext][query]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/, // 폰트 파일을 처리하기 위한 규칙
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][hash][ext][query]'
                }
            }

        ]
    },
    optimization: {
        minimize: true, // 코드 난독화를 설정함.
        minimizer: [new TerserPlugin()], // TerserPluging 을 사용하여 번들 파일을 난독화함.
        // 모든 종류의 청크를 분리하여 성능 최적화와 캐싱 효율성을 높이는데 도움이 되는 설정으로
        // 일반적으로 권장되는 설정
        // 이 설정을 통해 Webpack 은 번들파일을 더 작은 청크로 분리하여,
        // 초기 로딩 시간을 줄이고, 캐싱 효율성을 높일 수 있습니다.
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

