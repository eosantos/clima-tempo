💻 Sobre o projeto

🔔 Projeto para previsão meteorológica

## Descrição

Página web que mostre a previsão meteorológica para os próximos 7 dias para a cidade de Varginha - MG.

<br>
<hr>
<p align="center">
	<img width="190" src="public/Img/assets/to_readme/Tela_001.png">
  <img width="190" src="public/Img/assets/to_readme/Tela_002.png">
</p>
<hr>
<br>


### Ferramentas

- [NextJS](https://nextjs.org/)

- [StyledComponents](https://styled-components.com/)

- [Axios](https://axios-http.com/ptbr/docs/intro)

- [Git](https://git-scm.com/doc)

### Montagem do ambiente de desenvolvimento

O primeiro passo é clonar o projeto utilizando o método HTTPS ou SSH.

SSH

```sh
git clone git@github.com:eosantos/clima-tempo.git
```

HTTPS

```sh
git clone https://github.com/eosantos/clima-tempo.git
```

### Instalar dependências do projeto

Com o comando abaixo instalamos todos os pacotes definidos no package.json para configuração do servidor local:

```sh
npm i
```

### Acessando a aplicação

Para iniciar o projeto basta executar o comando abaixo:

```sh
npm run dev
```
Após a execução do comando acima basta abrir o link `http://localhost:3000`.

### Chaves de Ambiente

Crie um arquivo .env.loval na raiz do projeto e adicione as chaves

````
```
NEXT_PUBLIC_API_CIDADE_KEY=88aab0fd1b6f3acfca38d62916f21e42
NEXT_PUBLIC_API_CIDADE_URL='https://apiadvisor.climatempo.com.br/api/v1/locale/city/6754'

NEXT_PUBLIC_API_CLIMATEMPO_API_URL='http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/6754/days/15'
NEXT_PUBLIC_API_CLIMATEMPO_API_TOKEN=88aab0fd1b6f3acfca38d62916f21e42
```
````# clima-tempo
