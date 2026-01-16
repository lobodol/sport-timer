#-----------------------------------------
# Variables
#-----------------------------------------
MKFILE_PATH := $(abspath $(lastword ${MAKEFILE_LIST}))
PROJECT_PATH := $(dir ${MKFILE_PATH})
PROJECT_NAME := sport-timer
export PROJECT_NAME
PROJECT_URL=sport-timer.docker.localhost
export PROJECT_URL
UID=$(shell id -u)
export UID
GID=$(shell id -g)
export GID

# command name that are also directories
.PHONY:

#-----------------------------------------
# Allow passing arguments to make
#-----------------------------------------
SUPPORTED_COMMANDS := test.unit
SUPPORTS_MAKE_ARGS := $(findstring $(firstword $(MAKECMDGOALS)), $(SUPPORTED_COMMANDS))
ifneq "$(SUPPORTS_MAKE_ARGS)" ""
  COMMAND_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(COMMAND_ARGS):;@:)
endif

#-----------------------------------------
# Help commands
#-----------------------------------------
.DEFAULT_GOAL := help

help: ## Prints this help
	@grep -E '^[a-zA-Z_\-\0.0-9]+:.*?## .*$$' ${MAKEFILE_LIST} | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

#-----------------------------------------
# Commands
#-----------------------------------------
clean: ## Cleans up environnement
	@mkdir -p ./dist/docs && rm -rf ./dist/docs/*
	@mkdir -p ${HOME}/.cache/yarn
	@mkdir -p ${HOME}/.coverage
	@docker-compose down --remove-orphans

install: ## yarn install all project
	@docker-compose run --rm --label "traefik.enable=false" app yarn
	@cd ./tests/e2e && docker-compose run --rm --entrypoint=/usr/local/bin/yarn cypress

docker.pull: ## Retrieves latest images
	@docker-compose pull

docker.build:
	@docker-compose build --pull

dev.up:
	@docker-compose up -d --force-recreate
	@echo "App running at https://${PROJECT_URL}/sport-timer/"

dev: clean docker.pull docker.build dev.up ## Starts dev stack

sh: ## Runs command inside container
	@docker-compose run --rm --label "traefik.enable=false" app bash

#-----------------------------------------
# Images management
#-----------------------------------------
scour := registry.gitlab.com/savadenn-public/scour:latest
logo.optimize_svg: ## Optimize inkscape logo
	@docker pull ${scour} || true
	@rm -f ./public/img/*.g.svg
	@docker run --rm \
    --volume "$(shell pwd):/app" -w "/app" \
		-u "$(shell id -u ${USER}):$(shell id -g ${USER})" \
		${scour} \
    -i /app/public/img/logo.inkscape.svg -o /app/public/img/logo.g.svg --enable-viewboxing --enable-id-stripping --enable-comment-stripping --shorten-ids --indent=none --remove-descriptive-elements
	@sed 's/<g fill="#e5074d"/<g fill="#fff"/g' ./public/img/logo.g.svg > ./public/img/logo.i.g.svg

inkscape := registry.gitlab.com/savadenn-public/inkscape:latest
logo: logo.optimize_svg ## Generates the image from svg files
	@rm -f ./public/img/*.g.png
	@docker pull ${inkscape} || true
	@docker run --rm \
		--volume "$(shell pwd):/app" -w "/app" \
		-u "$(shell id -u ${USER}):$(shell id -g ${USER})" \
		${inkscape} \
		sh -c '/usr/bin/inkscape --shell < /app/public/img/generate.txt'

#-----------------------------------------
# Tests
#-----------------------------------------
SKIP_OPEN :=
test.unit: ## Runs unit tests
	@docker-compose run --rm app bash -c "yarn run test:unit -t=${COMMAND_ARGS}"; \
	 echo "Test report file://${PROJECT_PATH}coverage/tests.html"; \
     test "${SKIP_OPEN}" || xdg-open "file://${PROJECT_PATH}coverage/tests.html"

test.coverage: ## Runs unit tests with code coverage
	@docker-compose run --rm app bash -c 'yarn run test:coverage'; \
	 echo "Test report file://${PROJECT_PATH}coverage/tests.html"; \
	 echo "Coverage report file://${PROJECT_PATH}coverage/lcov-report/index.html"; \
     test "${SKIP_OPEN}" || xdg-open "file://${PROJECT_PATH}coverage/tests.html"; \
	 test "${SKIP_OPEN}" || xdg-open "file://${PROJECT_PATH}coverage/lcov-report/index.html"

#-----------------------------------------
# Builds
#-----------------------------------------
build.app: ## Build production app
	@docker-compose run --rm app bash -c 'yarn install --frozen-lockfile && yarn build'

build.webserver:
	@docker-compose -f docker-compose.yml -f docker-compose.prod.yml pull
	@docker-compose -f docker-compose.yml -f docker-compose.prod.yml build --pull

build.theme: ## Build css theme files from src/style/designer scss files
	@docker-compose run --rm designer-light yarn build
	@docker-compose run --rm designer-dark yarn build
	@docker-compose run --rm -l "traefik.enable=false" app yarn lint:theme

#-----------------------------------------
# Tools
#-----------------------------------------
lint: ## Lint app (style and typing)
	@docker-compose run --rm -l 'traefik.enable=false' app yarn lint
