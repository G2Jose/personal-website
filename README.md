# [http://georgejose.com](https://georgejose.com)

[![build status](http://ci.georgejose.com/api/v1/teams/main/pipelines/pipeline/jobs/deploy-web/badge)](http://ci.georgejose.com/)

Source code for my personal website at www.georgejose.com. Please remove all private information if you wish to fork this. 

## How to use

### Using Docker (Recommended)
- Install docker
- Clone repo and run `docker build -t web . && docker run -p 80:8080 -it web`

### Locally using Node
- Set up [node.js, npm](https://nodejs.org)
- Run `npm install && npm run start`
