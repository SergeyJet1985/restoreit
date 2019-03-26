module.exports = {
  runtimeCompiler: true,
  chainWebpack: config => {
    config.resolve
        .symlinks(true)
    return config
  }
}