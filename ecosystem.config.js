let config = require("./config/index")

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    // First application
    {
      name: 'blogApi',
      script: './index.js',
      watch: false,
      ignore_watch: ["node_modules","logs"],
      max_memory_restart: "200M",
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],
  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: "root",
      host: "1.116.9.161",
      port: "22",
      ssh_options: "StrictHostKeyChecking=no",
      ref: 'origin/master',
      repo: 'git@github.com:weijie9520/blog-koa2-api.git',
      path: '/weijie/blog-koa2-api',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js --env production',
      env : {
        NODE_ENV: "production"
      }
    },
  }
};