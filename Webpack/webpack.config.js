import path from 'path';
import autoprefixer from 'autoprefixer';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: 'development',
    entry: {
        main: './src/components/main.ts',  // main.ts로 변경
        code: './src/components/code.ts'    // code.ts로 변경
    },
    output: {
        filename: '[name].[contenthash].js', // 각 번들 파일의 이름을 설정함. [name]은 entry의 key값을 사용함.
        chunkFilename: '[name].[contenthash].js', // 동적 임포트로 생성된 번들 파일의 이름을 설정함. 청크 파일의 이름을 설정함.
        path: path.resolve(__dirname, 'dist') // 번들 파일을 저장할 경로를 설정함. 절대 경로를 사용함. __dirname은 현재 모듈의 디렉토리 이름을 나타냄.
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'), // 정적 파일을 제공할 경로를 설정함. 절대 경로를 사용함.
        port: 8080, // 개발 서버가 사용할 포트를 설정함.
        hot: true, // 모듈의 변경 사항이 있을 때 자동으로 페이지를 새로 고침함.
        watchFiles: ['src/**/*.html', 'src/**/*.js', 'src/**/*.scss'], // 파일의 변경을 감지할 경로를 설정함.
        historyApiFallback: {
            rewrites: [
                { from: /^\/index$/, to: '/index.html' },
                { from: /^\/code$/, to: '/code.html' }
            ]
        }
    },
    resolve: {
        extensions: ['.ts', '.js'], // 탐색할 확장자를 설정함. 확장자를 명시하지 않아도 되도록 설정함.
        alias: {
            '@': path.resolve(__dirname, 'src'), // 모듈을 더 쉽게 import 하기 위해 별칭을 설정함.
            'js': path.resolve(__dirname, 'src/js') // 모듈을 더 쉽게 import 하기 위해 별칭을 설정함.
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
            chunks: ['code']
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/, // .ts 확장자를 가진 파일에 대해 아래의 로더를 사용합니다.
                use: 'ts-loader', // ts-loader를 사용합니다.
                exclude: /node_modules/ // node_modules 폴더의 파일은 제외합니다.
            },
            {
                test: /\.(scss)$/,  // .scss 확장자를 가진 파일에 대해 아래의 로더를 사용합니다.
                use: [
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        // CSS를 `<style>` 태그로 DOM에 추가합니다.
                        loader: 'style-loader'
                    },
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        // `@import`와 `url()`을 해석하여 `import/require()`처럼 동작하게 합니다
                        loader: 'css-loader'
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader', // PostCSS 를 사용하여 CSS 를 처리하는 로더를 설정함.
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer
                                ]
                            }
                        }
                    },
                    {
                        // SASS/SCSS 파일을 CSS 로 컴파일 합니다.
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                quietDeps: true
                            }
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        splitChunks: { chunks: 'all' }
    },
    performance: {
        hints: 'warning',
        maxEntrypointSize: 2048000,
        maxAssetSize: 2048000
    }
}


/*
는 로더 종류는 아래와 같다.

CSS Loader
Babel Loader
Sass Loader
File Loader
Vue Loader
TS Loader

*/
