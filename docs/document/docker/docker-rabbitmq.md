# latest RabbitMQ 4.x

docker volume create rabbitmq-data


```
docker run -d \
--name rabbitmq \
-p 5672:5672 \
-p 15672:15672 \
-v rabbitmq-data:/var/lib/rabbitmq \
-e RABBITMQ_DEFAULT_USER=admin \
-e RABBITMQ_DEFAULT_PASS=admin123 \
rabbitmq:4-management