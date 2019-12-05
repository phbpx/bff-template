release:
	docker build -t bff-sample -f Dockerfile.prod .
.PHONY: release

run:
	@docker-compose up --build app
.PHONY: run

teardown:
	@docker-compose down -v --rmi local
.PHONY: teardown

lint:
	@docker-compose run lint
.PHONY: lint