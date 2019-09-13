module.exports = {
    apps: [{
      name: 'GPSService',
      script: './bin/www'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-54-185-61-74.us-west-2.compute.amazonaws.com',
        key: '~/.ssh/GPS_AWS_SSH.pem',
        ref: 'origin/master',
        repo: 'git@github.com:AvikalSolution/GPSService.git',
        path: '/home/ubuntu/GPSService',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }