.PHONY: start stop restart build test lint type-check logs shell clean

start:
	docker compose up -d

stop:
	docker compose down

restart:
	docker compose down && docker compose up -d

build:
	docker compose build

test:
	bun test

lint:
	docker compose exec frontend bun run type-check

type-check:
	bun run type-check

logs:
	docker compose logs -f frontend

shell:
	docker compose exec frontend sh

clean:
	docker compose down -v --rmi local
