FROM hugomods/hugo:exts-0.147.0 AS build
WORKDIR /src
COPY . .
RUN hugo --minify --gc --baseURL "https://trace7.fr/"

FROM nginx:alpine
COPY --from=build /src/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://localhost/up || exit 1
