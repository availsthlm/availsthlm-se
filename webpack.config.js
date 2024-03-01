const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => {
    const isProduction = argv.mode === "production";

    return {
        entry: "./src/script.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.[contenthash].js",
            assetModuleFilename: "[hash][ext][query]",
        },
        devServer: {
            static: "./dist",
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        isProduction
                            ? MiniCssExtractPlugin.loader
                            : "style-loader",
                        "css-loader",
                    ],
                },
                {
                    test: /\.html$/,
                    use: ["html-loader"],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif|mp4|woff|woff2|eot|ttf|otf)$/i,
                    type: "asset/resource",
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html",
            }),
            new MiniCssExtractPlugin({
                filename: "style.[contenthash].css",
            }),
            new CleanWebpackPlugin(),
        ],
        optimization: {
            minimize: isProduction,
            minimizer: [new TerserPlugin()],
        },
        mode: isProduction ? "production" : "development",
    };
};
