# Boas vindas ao repositório do projeto <b>John Virtual Card</b>!

Esse projeto foi desenvolvido para um teste técnico!

Aqui você vai encontrar os detalhes de como foi o desenvolvimento do projeto e quais foram os requisitos técnicos necessários para a entrega do desafio.

---

# Habilidades desenvolvidas

Neste projeto, fui capaz de:

- Utilizar o banco de dados relacional MySQL;
- Utilizar o ORM Prisma para trabalhar com o banco de dados MySQL;
- Construir uma API com Node.js e Express;
- Criar rotas para uma API com Express;
- Estilizar uma página web com CSS e Material UI;
- Criar uma página web com React;
- Subir a aplicação com Docker;
   
---

# Funcionamento da aplicação

Para iniciar o projeto, é necessário possuir o [Docker](https://docs.docker.com/engine/install/ubuntu/) instalado.

Após clonar o projeto em seu computador, para iniciá-lo é necessário executar o comando no diretório backend.
```
npm run prisma
```
E em seguida, executar o comando na raíz do projeto. 
```
docker-compose up -d 
```
Isso fará com que os containers docker sejam orquestrados e a aplicação esteja disponível.

Após isso, você pode acessar a aplicação através do endereço http://localhost:4000.

---

# Detalhes sobre a aplicação

Esta aplicação trata-se de um gerador de QR Code. Onde o usuário pode criar um QR Code para divulgação de suas redes sociais.
