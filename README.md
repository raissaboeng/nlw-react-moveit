<h1 align="center">NLW#04 - Moveit</h1> 

<img src=".github/moveit.gif">
</br>

### :mag: Sobre o projeto

A aplicação move.it foi desenvolvida na semana NLW#4 da @rocketseat na trilha React e consiste na criação de uma página para uso da técnica de pomodoro. Um contador de 25 minutos que deve ser utilizado para manter foco em sua tarefa, seja estudar ou trabalhar, e um intervalo de 5 minutos para você cumprir alguma tarefa e relaxar. Conforme for completando as tarefas, ganhará pontos de experiência para subir de nível, trazendo inspiração dos games. Essas atividades foram pensadas para as pessoas que passam muito tempo trabalhando em frente aos computadores e as atividades retiradas de fontes confiáveis para este fim. Servem para exercitar-se e relaxar já que ficar muito tempo sentado pode ocasionar diversos problemas futuros de saúde. 

### 💻 Diário de Bordo 
**Aula** | **Conteúdo**
------------ | -------------
Aula-01 22/fev | Foi criado um projeto inicial e sua descrição esta neste repositório: https://github.com/raissaboeng/nlw4-react-moveit-aula01
Aula-02 23/fev | <li> Next: Biblioteca de construção de interfaces. Substitui o create-react-app. Permite criar uma aplicação com todos os tipos SPA, SSR e SSG. Foi criado para que as aplicações fossem indexadas para os motores de busca. No fluxo da API fica em uma camada intermediária entre o backend e o frontend. Responsável por construir a interface da aplicação por um servidor intermediário deixando pronto pro usuário quando o mesmo acessar. </li> <li>SPA ou Single Page Aplication: uma única página que usando as rotas altera apenas seu conteúdo e não a página como um todo (create-react-app só faz SPA). Neste modelo o SEO para pesquisa não funciona já que os motores de buscam não aguardam a interface ser construída no frontend ou não acionam o javascript. </li> <li>SSR ou Server Side Rendering: Cria um servidor intermediário para renderizar a interface disponibilizando a aplicação de forma a otimizar o SEO para motores de busca.</li> <li>SSG ou Static Side Generation: Uma forma de criar uma página estática que não atualiza sempre que for acessada buscando no backend as informações. Quando alguém acessar pela primeira vez, cria uma versão estática do html, css e js para aprensentar para os próximos acessos. Gastby cria projeto react usando SSG. </li> <li>Migração do projeto para Next: para criar um projeto em next usar yarn create next-app nomedoprojeto ou npx create-next-app nomedoprojeto. Nesta aula foi feita a migração do projeto da aula 1 para next. Foram copiados os arquivos do projeto anterior e inseridos neste modelo estrutural do next.</li> <li> Criação dos primeiros componentes: Profile, CompletedChallenges, CountDown e hooks do countDown.</li> <li> React Hooks useState e useEffect: useState controla estado do componente, algo que vá ser alterado e precisa ser controlado no componente e o useEffect funciona como um listener, onde eu passo pra função o que ela precisa ficar ouvindo e uma função que será acionada quando este valor for alterado.</li>
Aula-03 24/fev | <li>Criado contextChallenge: Usado para comunicar informações entre os componentes, fazer com que estes se comuniquem, partilhem estados e funções. </li> <li> Finalizado o countDown: Quando este chega em 0 disparamos um novo desafio dentro do challengeBox substituindo informações estáticas inicias por dinâmicas conforme contexto atual.</li> <li>Função do botão de falha do desafio: Criada função que seta null para o desafio atual quando usuário clica no botão "falhei" no desafio exibido. </li> <li> Funcionamento dinâmico conforme contexto para a experienceBar: Conforme as variáveis no contexto alteram sobre a experiência do usuário, a barra de experiência é alterada. </li> <li>Funcionamento dinâmico conforme contexto para a quantidade de desafios completados: Conforme as variáveis no contexto alteram sobre a quantidade de desafio completados, o número no component CompletedChallgens é alterado também. </li>
Aula-04 25/fev | <li>Adicionada função completeChallenge: Quando um desafio é completado, ou seja, o usuário clicou no botão completei, é feito o cálculo de experiência adquirida bem como se subiu de level e repassado aos demais componentes que necessitam da nova informação.</li> <li>Level com context: Adicionado no component do level o contexto para atualizar seu número dinamicamente. </li> <li>Criado segundo context para o countdown: Foi criado outro context separado para o countdown pois quando o usuário clicar nos botões "completei" ou "falhei" nos desafios, o countdown precisa ser reiniciado para poder iniciar um novo ciclo. A função de reinicio do countdown fica apenas nele mesmo. Dessa forma foi criado novo contexto pra que todos os componentes que precisem de alguma função do countdown possam utilizar o seu contexto para disparar a função. Porém esse contexto não é chamado no mesmo local que o challengeContext pois nem todos os components da aplicação precisam dele. Foi incluído apenas na página Home que é onde existem os components que realmente precisam de suas propriedades. Também deve-se atentar para não colocar esse segundo context que depende do challengeContext por fora dele, pois ele ainda não exisitirá, ocasionando erros na aplicação. Sendo assim primeiro deve-se chamar o contexto challenge e apenas dentro dele o countdown para que no momento em que o countdown chamar o challengeContext este realmente exista. Obs: no component countdown ficaram duas funções, estas apenas dizem respeito a renderização, apresentação visual, por isso não fazem parte do context do countdown. </li> <li>Notificação no browser: Foi criada notificação no browser com mensagem e som sempre que um desafio for iniciado. Foi utilizado o userEffect para pedir a permissão do usuário pra exibição de notificação sendo que foi utilizado [] onde ficaria a variável para o userEffect monitorar. Dessa forma ele executa apenas na primeira vez que o usuário abrir a página. </li>
Aula-05 26/fev | <li>Armazenamento de dados com cookies: Foi escolhido uso dos cookies por causa do uso do next. Como next utiliza uma camada intermediária entre o backend e frontend com node, caso fosse utilizado localstorage, não conseguiriamos acessar as informações já que ele armazena os dados apenas para o front do browser. Já com cookies conseguimos acessar em diferentes camadas da aplicação. Foi utilizada a biblioteca js-cookie que trás uma forma mais amigável de lidar com cookies. Utilizado o userEffect para armazenar as variáveis sempre que estas sofrerem alteração.</li> <li>getServerSideProps: Função do next que foi o motivo de seu surgimento. Esta função serve para busca de informações em uma api por exemplo antes da renderização do frontend, repassando a informação para os componentes pronta para aí então renderizar para o usuário. Desta forma, os buscadores como google terão acesso a todas as informações da página. Caso essa chamada de api estiver no componente, os indexadores de busca não irão aguardar essa recuperação dos dados prejudicando o SEO da página. </li> <li>Refresh app sem perda de informações: Feita atualização dos valores das propriedades conforme estiver armazendo nos cookies ao der um refresh na página. No challengeContext foram lidas as propriedades repassadas pelo getServerSideProps lá da página home e inseridas como valores padrão ao ser iniciada a aplicação, sendo que caso não seja encontrada nenhuma, as informações começam do início novamente. </li> <li> Criado Modal Level Up: Ao subir de nível é aberto uma tela com parabéns e o novo nível do usuário. Criado um componente separado.</li> <li>Feito deploy da aplicação: Utilizado a plataforma vercel para deploy free da aplicação e conectado ao repositório do github. </li>

### :key: Executar a aplicação

```bash
# Abra um terminal e copie este repositório com o comando
$ https://github.com/raissaboeng/nlw-react-moveit.git
# ou use a opção de download.

# Entre na pasta web com 
$ cd moveIt

# Instale as dependências
$ yarn install

# Rode o aplicação
$ yarn start
```

ou acesse no vercel: https://moveit-two-dusky.vercel.app/



### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [React](https://pt-br.reactjs.org/)
- [Next](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

### :bulb: Melhorias
- [ ] Layout para mobile;
- [ ] Fazer aplicação com PWA e next;
- [ ] Tema dark;
- [x] Novas cores;
- [ ] Criar página de login com oauth pelo github;
- [ ] Criar sidebar com opção home e ranking; 
- [ ] Criar ranking de usuários e suas pontuações;
- [ ] Compartilhar pontuação no twitter, instagram e outras redes com uma imagem personalizada.

<br>

<img src=".github/Wallpaper.png">
</br>
<p align="center">Com 💜 por Raissa Boeng</p>
