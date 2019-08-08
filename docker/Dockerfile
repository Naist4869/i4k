FROM nginx:alpine

COPY ../dist ./
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY ./dist /usr/share/nginx/html
