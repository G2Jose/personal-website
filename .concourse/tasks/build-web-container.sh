#!/bin/sh
docker daemon&
docker build -t web -f resource-personal_website/web/Dockerfile
docker save web > web-docker-image/web.tar
