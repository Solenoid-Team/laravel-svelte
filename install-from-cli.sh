#!/bin/sh

rm -rf laravel-svelte

composer create-project laravel/laravel="8.*" laravel-svelte

cd laravel-svelte

composer install

npm install
npm install --save svelte svelte-loader
npm install --save --legacy-peer-deps sass-loader@^12.1.0 sass resolve-url-loader@^4.0.0
npm install --save svelte-preprocess
npm install --save typescript tslib ts-loader

npx tsc --init

npm run prod
