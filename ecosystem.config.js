module.exports = {
  apps: [
    {
      name: 'front',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      "env": {
        "PORT": "5000",
      }
    }
  ]
}

