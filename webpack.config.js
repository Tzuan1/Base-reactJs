const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const Dotenv = require("dotenv-webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const webpack = require("webpack")

module.exports = (env, agrv) => {
    const isDevelop = agrv.mode === "development"
    return {
        entry: "./src/index.tsx",
        mode: agrv.mode,
        output: {
            charset: true,
            clean: true, // Clean the output directory before emit.
            chunkLoadTimeout: 30000, // milliseconds before chunk request expires.
            chunkFilename: "[id].js",
            environment: {
                // Tell webpack what kind of ES-features may be used in the generated runtime-code.
                arrowFunction: false,
                bigIntLiteral: false,
                const: false,
                destructuring: false,
                dynamicImport: false,
                forOf: false,
                module: false
            },
            filename: "[name].[contenthash].js", // caching file build, create new file, don't clear cache web when file change
            path: path.resolve(__dirname, "./build"),
            assetModuleFilename: "images/[hash][ext][query]",
            publicPath: "/"
        },
        resolve: {
            // Add `.ts` and `.tsx` as a resolvable extension.
            extensions: [
                ".ts",
                ".tsx",
                ".js",
                ".css",
                ".scss",
                ".json",
                ".svg",
                ".ttf"
            ],
            alias: {
                "@": path.resolve("src"),
                process: "process/browser",
                stream: "stream-browserify",
                zlib: "browserify-zlib"
            },
            plugins: [new TsconfigPathsPlugin()],
            fallback: {
                module: "empty",
                dgram: "empty",
                dns: "mock",
                fs: "empty",
                http2: "empty",
                net: "empty",
                tls: "empty",
                child_process: "empty",
                process: require.resolve("process/browser"),
                zlib: require.resolve("browserify-zlib"),
                stream: require.resolve("stream-browserify"),
                util: require.resolve("util"),
                buffer: require.resolve("buffer"),
                asset: require.resolve("assert")
            }
        },
        optimization: {
            minimize: false,
            removeAvailableModules: true,
            removeEmptyChunks: false
        },
        devServer: {
            compress: true,
            client: {
                logging: "warn"
            },
            historyApiFallback: true,
            hot: true, // Hot Module Replacement is enabled.
            liveReload: true,
            static: {
                directory: path.join(__dirname, "build")
            },
            port: 9999,
            open: true,
            allowedHosts: "all",
            watchFiles: {
                paths: ["src/**/*"],
                options: {
                    usePolling: false
                }
            }
        },
        devtool: isDevelop ? "eval-cheap-source-map" : false,
        plugins: [
            new HtmlWebpackPlugin({
                title: "Caching",
                template: "public/html/index.html",
                inject: "body",
                favicon: "public/html/logo1.png"
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                linkType: "text/css"
            }),
            new Dotenv({
                path: isDevelop ? "./.env" : "./.env.example", // Path to .env file (this is the default)
                safe: true
            }),
            new CleanWebpackPlugin({
                dangerouslyAllowCleanPatternsOutsideProject: true
            }),
            new webpack.ProgressPlugin(),
            new webpack.ProvidePlugin({
                process: "process/browser",
                Buffer: ["buffer", "Buffer"]
            })
        ],
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/i, // regex file ts
                    exclude: /node_modules/,
                    use: "ts-loader" // binding file ts use ts-loader
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.(s[ac]ss)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: isDevelop,
                                modules: {
                                    localIdentName: "[local]__[hash:base64:5]"
                                }
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: isDevelop
                            }
                        }
                    ]
                },
                {
                    test: /\.svg$/,
                    oneOf: [
                        {
                            dependency: {
                                not: ["url"]
                            },
                            use: ["@svgr/webpack", "new-url-loader"]
                        },
                        {
                            type: "asset" // Use 'asset/resource' for file-loader
                        }
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: "file-loader"
                        }
                    ]
                },
                {
                    test: /\.(json)$/,
                    type: "javascript/auto",
                    use: [
                        {
                            loader: "json-loader",
                            options: {
                                name: "[folder]/[name].[ext]",
                                outputPath: "assets/locales/"
                            }
                        }
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    use: [
                        {
                            loader: "file-loader"
                        }
                    ]
                }
            ]
        },
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000 //  Khi có 1 file build vượt quá giới hạn này (tính bằng byte) thì sẽ bị warning trên terminal.
        },
        cache: {
            type: "filesystem",
            maxMemoryGenerations: 1,
            allowCollectingMemory: true,
            memoryCacheUnaffected: true
        },
        watchOptions: {
            ignored: ["node_modules", "src/assets"]
        }
    }
}
