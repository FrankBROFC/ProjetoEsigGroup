# Projeto para avaliação da Esig Group

> Vaga desenvolvedor FullStack

Nesse projeto foi usado as seguintes tecnologias:
- Java na versão 11
- Spring Boot na versão 2.7
- Swagger na versão 3
- Postgres na versão 14
- JPA
- Hibernate
- Angular na versão 13
- NodeJS na versão 16
- Boostrap na versão 5

## Inicialização dos projetos
### Gerenciador de tarefas API 
Abrir o projeto em alguma IDE de sua preferência, modificar o arquivo application.properties trocar a base de dados na url da propriedade spring.datasource.url e executar o projeto.
### Gerenciador de taredas Front
Executar os seguintes comandos na raiz do projeto:
```
npm i 
ng serve
```
## Explicação dos requirimentos que foram solicitados
- a) Criei o projeto no Angular utilizando o conceito de lazy loading, na parte de estelização o Bootstrap, na comunicação com a API gravei a url principal no arquivo de enviroment e consumir os endpoints utilizando uma classe de service. Na tela inicial que têm a listagem das tarefas, criei uma classe que implementa o Resolver responsável por carregar os dados antes do componente aparecer em tela. Foi usado os templates do angular para preencher e capturar os dados dos componentes.
- b) c) d) g) Utilizando o framework Spring desenvolvir uma api rest, que contém um controller para gerenciar as tarefas, um repository para realizar demandas no banco de dados, um model para definir o modelo da tarefa, um dto para modulizar os parametros da pesquisa e duas classes de configuração uma para o cors e outra para o Swagger. Todas as requisições da api podem ser vistas na seguinte url: http://localhost:8080/swagger-ui/index.html/ 
