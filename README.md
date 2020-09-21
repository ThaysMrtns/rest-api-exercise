# Visão geral
##### O TODO-APP trata-se de uma Rest API na qual utiliza requisições HTTP afim de manipular dados para realizar operações CRUD. Formato de dados como JSON.
# Todo-app
##### A API REST TODO-APP pode ser utilizada para gerenciar anotações de tarefas do usuário.
# Tecnologias utilizadas
##### Vscode, Node.js, Nodemon e Sqlite3.
##### https://code.visualstudio.com/ https://nodejs.org/en/ https://www.npmjs.com/package/nodemon https://www.sqlite.org/index.html
####  Middleware utilizado 
##### https://www.npmjs.com/package/body-parser
# Instalação do Node.js
#### Siga este breve tutorial caso você não saiba como instalar as ferramentas e dependências necessárias para a utilização desta API.
##### Links - https://nodejs.org/en/download/ https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/ambiente_de_desenvolvimento
##### Após a instalação do NodeJs e do NPM, verifique no seu terminal/prompt de comando, para saber se a instalação foi bem concluída, o seguinte comando que retorna a versão do seu ambiente.
##### `node -v` - checa a instalação do node e exibe sua versão
##### `npm -v` - checa a instalação do npm e exibe sua versão
# Clonar projeto na sua máquina
##### No início da página haverá um botão verde escrito code. Nele você terá algumas opções e entre elas executar um download e a url da API. Você poderá escolher quais das opções mais lhe agrada. 
### Sugestão de editor de código
##### Link - https://code.visualstudio.com/download
# Instalação de dependências
##### Após ter o NodeJs e o NPM corretamente instalados e a API clonada na sua máquina. Abra seu editor de código. No meu caso, darei o exemplo com o Vscode. Abra o terminal e digite o comando.
##### `npm install` - instalará as dependências da API.
### Sugestão de ferramenta para interagir com a API Todo-app
##### Link - https://insomnia.rest/download/
# Conteúdo e estrutura do banco de dados
##### O banco de dados, com o nome de arquivo `database.db`, armazena as informações das tarefas que forem adicionadas para ele. Trata-se de um banco de dados relacional e a linguagem utilizada está no formato Mysql. O `database.db` possui uma única tabela `TAREFAS` com 4 colunas, `ID(PRIMARY KEY)`, `TITULO`, `DESCRICAO` E `STATUS`. 
##### Link - https://www.oracle.com/br/database/what-is-a-relational-database/#:~:text=Em%20um%20banco%20de%20dados,entre%20os%20pontos%20de%20dados.