const bundleAnalyzerPlugin = require("@next/bundle-analyzer")
const { config: dotEnvConfig } = require("dotenv")

const withBundleAnalyzer = bundleAnalyzerPlugin({
    enabled: process.env.ANALYZE === "true",
})

dotEnvConfig()
const env = Object.keys(process.env)
                  .reduce((acc, current) => {
                      if (current.startsWith("NEXT_")) {
                          acc[current] = process.env[current]
                      }

                      return acc
                  }, {})

module.exports = withBundleAnalyzer({ env })
