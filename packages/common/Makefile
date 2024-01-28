# Makefile with common targets to abstract away low-level NPM targets.

.DEFAULT_GOAL := help

PROJECT_NAME := Targets for the convhub-common package.
PACKAGE_MANAGER := npm

.PHONY: help
help:
	@echo "------------------------------------------------------------------------"
	@echo "${PROJECT_NAME}"
	@echo "------------------------------------------------------------------------"
	@grep -E '^[a-zA-Z0-9_/%\-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-12s\033[0m %s\n", $$1, $$2}'



deps: ## Installs the required project dependencies.
	${PACKAGE_MANAGER} install

build: ## Builds the convhub-common package.
	${PACKAGE_MANAGER} run build
