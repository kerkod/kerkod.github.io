+++
date = "2020-10-13"
title = "Quick guide: install Laravel 8 + Docker"
description = "Bootstratp a new Laravel project"
series = ["Dev", "Laravel"]
+++

# TODO: fix github gists

Install Laravel 8 locally
```bash
docker run --rm --interactive --tty --volume $PWD:/app composer create-project --prefer-dist laravel/laravel laravel-jetstream-test
```

Add Docker folder to gather Docker related stuff:
```bash
mkdir docker && mkdir docker/pgsql_dump && mkdir docker/pgsql_volume
cd docker && wget https://gist.github.com/frinux/027cf804b1ee8e2b993019c33b2a23e4
```

Create Dockerfile:
```bash
wget https://gist.github.com/frinux/56c5701d0d47558ad207e44212ce18ac
```

Create docker-compose.yml:
```bash
wget https://gist.github.com/frinux/90788a8da5e86c71212303b4f907dedc
```

Fix Docker files owner (TODO: run Docker as local user)
```bash
TODO
```

Launch Docker:
```bash
docker-compose up --build
```

## Notes
Don't forget that composer files are installed locally. When changing composer.json, execute composer install/update to fetch new packages in your source folder.