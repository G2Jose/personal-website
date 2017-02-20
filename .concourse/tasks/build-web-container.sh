#!/bin/sh
dockerd&
sleep 2
docker build -t web -f resource-personal_website/web/Dockerfile
docker save web > web-docker-image/web.tar
