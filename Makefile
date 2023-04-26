test=-f ./docker-compose-test.yml

build:
	@docker-compose $(test) build --no-cache

start:
	@docker-compose $(test) up -d

stop:
	@docker-compose $(test) down

ps:
	@docker-compose $(test) ps

ssh:
	docker-compose exec frontend sh
