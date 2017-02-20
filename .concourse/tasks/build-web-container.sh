#!/bin/sh
dockerd&
sleep 2
docker build -t web resource-personal_website/web/
docker save web > web-docker-image/web.tar
