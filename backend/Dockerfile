# Le multi-stage build permet de séparer la phase de build (installation + tests) de la phase de production. 
# Cela réduit la taille de l’image finale et améliore la sécurité en n’incluant pas les outils inutiles.
# L’image node:20 est utilisée pour le build car elle contient tous les outils nécessaires.
#L’image node:20-alpine est utilisée en production car elle est plus légère, ce qui réduit la surface d’attaque et améliore les performances.

FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Exécution des tests
RUN npm test

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000

CMD ["npm", "start"]