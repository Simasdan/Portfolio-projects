WOOF.LT
===========

### Docker

How to build, start and stop, connect to container etc:

```
make help
```

### Instructions, how to start a project

```
make build
make start
make exec dc=php
[create .env and configure]
composer install
php bin/console d:m:m -y
exit
open https://localhost/api/v1/subscribers?password=E123_NDJKSBNVDS
# /symfony/api/woof.lt.postman_collection.json

make exec dc=node
yarn install
exit
make stop
make start
open https://localhost:3000
```
