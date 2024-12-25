import path from 'path';
import { fileURLToPath } from 'url';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import fs from 'fs'; // 파일 시스템 모듈
import webpack from 'webpack';
import { sourceMapsEnabled } from 'process';
import CopyWebpackPluin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { globSync } from 'glob';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const vendorModules = [
    'bootstrap',
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap/dist/js/bootstrap.bundle.min.js',
    './src/scss/styles.scss'
];

// HTML 플러그인을 생성하는 함수
const generateHtmlPlugins = () => {
    const templateFiles = globSync('./src/**/*.html');

    return templateFiles
        .filter(file => !file.includes('index.html'))
        .map(file => {
            const name = path.basename(file, '.html');
            return new HtmlWebpackPlugin({
                filename: `${name}.html`,
                template: file,
                chunks: ['vendor', name],
                inject: 'body',
                scriptLoading: 'defer',
            });
        });
};

// 엔트리 포인트를 생성하는 함수
const generateEntryPoints = () => {
    const templates = globSync('./src/**/*.html');
    const entries = {};

    templates
        .filter(file => !file.includes('index.html'))
        .forEach(file => {
            const name = path.basename(file, '.html');
            const dir = path.dirname(file).replace('./src', '');
            const entryFiles = [
                `./src${dir}/${name}.js`,
                `./src${dir}/${name}.scss`
            ].filter(f => fs.existsSync(f));

            // 빈 배열이 아닌 경우만 entry에 추가
            if (entryFiles.length > 0) {
                entries[name] = entryFiles;
            }
        });
    return entries;
};

// URL 경로를 정규식으로 변환하는 함수
const generateRewrites = () => {
    const templates = globSync('./src/**/*.html');
    return templates
        .filter(file => !file.includes('index.html'))
        .map(file => {
            const name = path.basename(file, '.html');
            return {
                from: new RegExp(`^/${name}`),
                to: `/${name}.html`
            };
        });
};

/* Config */
const config = {
    mode: 'development',
    entry: {
        vendor: vendorModules, // vender 청크
        main: ['./src/js/main.js'], // main 청크
        ...generateEntryPoints(),
        // code: ['./src/js/code.js', './src/scss/code.scss'], // code 청크
        /*
        --> 청크 (덩어리, 조각, 분할된 부분)
        청크는 웹팩이 생성하는 파일 단위를 의미합니다.
        웹팩은 여러 개의 청크를 생성할 수 있습니다.
        청크는 여러 개의 모듈을 포함할 수 있습니다.
        청크는 여러 개의 모듈을 포함할 수 있습니다.
        번들링된 코드의 분할된 단위
        */
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 52934,
        hot: true,
        open: true,
        watchFiles: ['src/**/*'],
        historyApiFallback: {
            rewrites: generateRewrites(),
            // rewrites: [
            //     { from: /^\/code/, to: '/code.html' }
            // ]
        },
    },
    plugins: [

        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['vender', 'main'],
            inject: 'body',
            scriptLoading: "defer",
        }),
        ...generateHtmlPlugins(),
        // new HtmlWebpackPlugin({
        //     template: './src/code.html',
        //     filename: 'code.html',
        //     chunks: ['vender', 'code'], // code.js 와 vender.js 만 포함합니다.
        //     inject: 'body',
        //     scriptLoading: "defer",
        // }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new webpack.HotModuleReplacementPlugin(), // HMR 플러그인 추가
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
                test: /\.(scss)$/,
                use: [
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: 'style-loader'
                    },
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: 'css-loader'
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
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
                            sourceMap: true,
                            sassOptions: {
                                quietDeps: true, // 경고 억제 옵션 추가
                                includePaths: ['./node_modules'],
                            }
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: {
        minimize: true, // 코드 난독화를 설정함.
        minimizer: [new TerserPlugin()], // TerserPluging 을 사용하여 번들 파일을 난독화함.
        splitChunks: { chunks: 'all' }
    },
    performance: {
        hints: 'warning',
        maxEntrypointSize: 10240000, //
        maxAssetSize: 10240000
    },
};


export default (env, argv) => {
    const isProduction = argv.mode === 'production';
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
