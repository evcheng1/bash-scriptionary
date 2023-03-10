FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY ui/ ./ui/
RUN cd ui && npm install && npm run build

FROM node:10 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/ui/dist ./ui/dist
COPY api/package*.json ./api/
RUN cd api && npm install
COPY api/server.js ./api/

EXPOSE 80

CMD ["node", "./api/server.js"]