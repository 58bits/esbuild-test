const path = require('path')
const { sassPlugin } = require('esbuild-sass-plugin');

require('esbuild').build({
  entryPoints: ['./src/index.js'],
  outdir: "build/",
  bundle: true,
  plugins: [sassPlugin({
    type: "style", 
    includePaths: [
      path.resolve(__dirname, "@material/theme"),
      path.resolve(__dirname, "@material/button"),
      path.resolve(__dirname, "@material/checkbox"),
      path.resolve(__dirname, "@material/form-field"),
      path.resolve(__dirname, "@material/list"),
      path.resolve(__dirname, "@material/menu-surface"),
      path.resolve(__dirname, "@material/menu"),
      path.resolve(__dirname, "@material/select"),
    ] 
  })],
  sourcemap: true,
  //this stops esbuild from trying to resolve these things in css, may need to add more types
  external: ["*.svg", "*.woff", "*.css", "*.jpg", "*.png"],
  watch: {
    onRebuild(error, result) {
      if (error) console.error('watch build failed:', error)
      else console.log('watch build succeeded:', result)
    },
  },
}).then(result => {
  // Call "stop" on the result when you're done
  result.stop()
})