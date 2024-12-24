import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    mode: 'production', // 'development' 또는 'production' 모드 설정
    entry: {
        main: './src/Index.tsx', // 애플리케이션의 진입점
        code: './src/code.tsx' // 추가 엔트리 포인트
    },
    output: {
        filename: '[name].[contenthash].js', // 번들 파일 이름
        chunkFilename: '[name].[contenthash].js', // 청크 파일 이름
        path: path.resolve(__dirname, 'dist'), // 번들 파일이 생성될 경로
        publicPath: '/', // 정적 파일이 제공될 경로
        clean: true // 빌드 이전 결과물을 제거
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'], // 모듈을 해석할 때 확장자 목록
        alias: {
            '@': path.resolve(__dirname, 'src'), // 경로 별칭 설정
            'comp': path.resolve(__dirname, 'src/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // TypeScript 파일을 처리하기 위한 규칙
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/, // SCSS 파일을 처리하기 위한 규칙
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/, // 이미지 파일을 처리하기 위한 규칙
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'images'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/, // 폰트 파일을 처리하기 위한 규칙
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'fonts'
                        }
                    }
                ]
            }
        ]
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
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin()
    ],
    optimization: {
        minimize: true, // 코드 압축 활성화
        minimizer: [new TerserPlugin()] // TerserPlugin을 사용한 코드 압축
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'), // 정적 파일 제공 경로
        hot: true, // 핫 모듈 교체 활성화
        open: true, // 서버 시작 시 브라우저 자동 열기
        port: 8080, // 개발 서버 포트 번호
        watchFiles: ['src/**/*.html', 'src/**/*.js', 'src/**/*.scss', 'src/**/*.ts', 'src/**/*.tsx'], // 감시할 파일 목록
        historyApiFallback: true // HTML5 History API를 사용한 SPA 라우팅 지원
    }
};

export default config;
