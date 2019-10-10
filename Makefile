NAME=nomran-lab/nodejs-services
VERSION=$(shell git rev-parse --short HEAD)
FULL_NAME=normanlab/${NAME}:$(VERSION)

lint:
	node_modules/.bin/eslint --fix src/ test/

docker-build:
	docker build -t ${FULL_NAME} -f docker/Dockerfile .

docker-run: docker-build
	docker run --rm -it -p 80:80 $(NAME)

docker-push:
	docker-build
	docker push ${FULL_NAME}