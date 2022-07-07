## Sobre o Projeto

Esta é uma API express com camadas MSC e arquitetura Rest e Restful.
A aplicação é dividida Model, Service e Controller. 
Foram usados para a implementação da mesma diversos pacotes node
e  diversas outras tecnologias como Nodemon, Sequelize, Sequelize-CLI, 
mysql2, JOI, JWT, entre outros.

O objetivo é criar um API que simula um blog post, as rotas tem
verificações/middlewares para que sejam realizadas logins e outras 
funcionalidades do blog fictício, veja essas verificações no código ou 
testando a chamada da API.
A utilização do JWT(Json Web Tokens) também protege as rotas da aplicação e 
os dados sensíveis da mesma. 

Verifique os arquivos com atenção e sinta-se à vontada para fazer o
request de qualquer uma das rotas e consumir a aplicação.

## Testes

Por sua complexidade e por ser uma escola, a Trybe precisa saber se seus alunos conseguiram cumprir todos os requesitos 
propostos neste projeto pela mesma. Por isso, ressalto que os testes foram feitos por pessoas desenvolvedoras da Trybe
e o direito intelectual é o dela.

## Clone

Para ter este código em sua máquina basta ir ao seu terminal do seu ambiente e inserir o comando:

- git clone git@github.com:car0l15/Blogs-API.git
- cd Blogs-API
- npm install 
- npm run debug para iniciar a aplicação com o nodemon.
