# Makefile with common targets to abstract away low-level NPM targets.

.DEFAULT_GOAL := help

PROJECT_NAME := Targets for the Farodyne backend.

.PHONY: help
help:
	@echo "------------------------------------------------------------------------"
	@echo "${PROJECT_NAME}"
	@echo "------------------------------------------------------------------------"
	@grep -E '^[a-zA-Z0-9_/%\-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

.PHONY: deps
deps: ## Installs the project dependencies.
	pnpm install

.PHONY: dev
dev: ## Runs the development environment.
	pnpm run dev

.PHONY: run
run: ## Runs the application.
	pnpm run run
