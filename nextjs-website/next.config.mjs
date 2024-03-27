/** @type {import('next').NextConfig} */
const nextConfig = {
    // webpack: (config, options) =>
    // {
    //     config.module.rules.push({
    //       test: /\.pdf$/,
    //     //   exclude: /(node_modules|bower_components)/,
    //       use: {
    //         loader: "babel-loader",
    //         options: {
    //           presets: ["@babel/preset-env"],
    //         },
    //       },
    //     });

    //     return config
    // },
    // webpack: (config, options) =>
    // {
    //     config.module.rules.push({
    //         test: /\.pdf$/i,
    //         type: 'asset/source',
    //         // use: {
    //         //     loader: "raw-loader",
    //         //     // options: {
    //         //     // esModule: false
    //         //     // }
    //         // }
    //         use: {
    //             loader: "file-loader",
    //             options: {
    //               name: "[path][name].[ext]"
    //             }
    //         }
    //     })

    //     return config
    // },
    webpack: (config, options) =>
    {
        config.module.rules.push({
            test: /\.pdf$/i,
            type: 'asset/source',
            // use: {
            //     loader: "raw-loader",
            //     // options: {
            //     // esModule: false
            //     // }
            // }
            use: {
                loader: "file-loader",
                options: {
                  name: "[path][name].[ext]"
                }
            }
        })

        return config
    },
    // output: 'export', // Outputs a Single-Page Application (SPA).
    distDir: './dist', // Changes the build output directory to `./dist/`.
};

export default nextConfig;

