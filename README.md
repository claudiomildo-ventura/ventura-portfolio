# Claudiomildo Ventura

Portfólio profissional single page em Angular 22, com componentes standalone,
signals, CSS responsivo e conteúdo em português baseado no currículo fornecido.

**Site:** https://claudiomildo-ventura.github.io/ventura-portfolio/

## Executar localmente

Requer Node.js 24 LTS (24.15 ou superior) e npm.

```sh
npm ci
npm start
```

Abra http://localhost:4200. Para escolher outra porta: `npm start -- --port 4300`.

## Verificar e compilar

```sh
npm test -- --watch=false
npm run build:pages
```

O build para GitHub Pages fica em `dist/ventura-portfolio/browser`.
Para hospedar na raiz de outro domínio, use `npm run build`.

## Publicação

O workflow `.github/workflows/deploy.yml` executa testes, compila e publica no
GitHub Pages a cada push em `main`. Em Settings > Pages, selecione GitHub Actions
como fonte. Se renomear o repositório, atualize `build:pages` e as URLs em
`src/index.html`.

## Conteúdo

- `src/app/app.ts`: experiências, competências, formação, cursos, idiomas e contatos.
- `src/app/app.html`: estrutura semântica da página.
- `src/app/app.css`: layout, responsividade e impressão.
- `src/styles.css`: tipografia e estilos globais.
- `public/portrait.jpg`: avatar público do GitHub, atualmente um logotipo.

O MBA aparece como em andamento, com conclusão prevista para abril de 2027.
Não há endereço de e-mail nem projetos fictícios. Os contatos são LinkedIn e GitHub.
O botão de impressão permite imprimir a página ou salvar como PDF pelo navegador.

Ícones oficiais do Lucide, com licença em `public/icons/LICENSE`. Fontes Manrope,
DM Sans e IBM Plex Mono servidas pelo Google Fonts; as demais imagens são locais.
