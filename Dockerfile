FROM node:14.15.0
LABEL authors="aarancis"

EXPOSE 4000
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start:dev"]
