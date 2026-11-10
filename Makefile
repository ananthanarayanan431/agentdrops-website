PNPM ?= pnpm

.DEFAULT_GOAL := run
.PHONY: run build clean

run: ## Start the dev server
	$(PNPM) dev

build: ## Build into dist/
	$(PNPM) build

clean: ## Remove build output and caches
	rm -rf dist .astro
