# Trendz Hub

Protótipo navegável para um case de Produto & Tecnologia. A proposta é centralizar marcas, creators, oportunidades e eventos na mesma plataforma.

Não há backend, autenticação nem pagamento. Tudo que aparece na interface é dado de demonstração.

## Como rodar

Requer Node.js e npm.

```sh
npm install
npm run dev
```

Outros scripts: `npm run lint`, `npm run test`, `npm run build`, `npm run preview`.

## Dados fictícios

A faixa no topo de cada tela avisa que o protótipo usa dados de demonstração. Creators, eventos, oportunidades e os números dos painéis ficam em `src/lib/demo.ts`.

Os totais do painel interno (creators, marcas, campanhas e eventos) são constantes ilustrativas. O catálogo navegável é menor e a própria tela deixa isso explícito.

Busca, filtros, candidatura, aprovação e o cadastro de evento mudam só o estado local. Nada é enviado a um servidor.

## Deploy na Vercel

O build usa TanStack Start com Nitro. O preset padrão da Lovable é Cloudflare, para o preview do editor continuar funcionando. Quando a variável `VERCEL` está presente, o preset passa a ser `vercel`, que é o que a Vercel define durante o build.

Não é preciso variável de ambiente própria. Fontes e fotos vêm de serviços externos (Google Fonts, Unsplash e pravatar.cc). A aplicação abre sem eles; a tipografia e as imagens dependem desses pedidos.

## Decisões desta revisão

- Os dados de demonstração que estavam soltos nas páginas foram para `src/lib/demo.ts`, com tipo de oportunidade e status.
- A busca da marca abre o catálogo com o texto informado. O filtro também considera nicho, cidade e @.
- O cadastro de evento deixou de usar `alert()`. É um painel na própria página de eventos. O atalho da home abre esse painel.
- 404 e a página de erro estão em português.
- Menu, filtros, barra de completude, toggles e a tabela do admin receberam o mínimo de acessibilidade para teclado e leitor de tela.
- Os botões da área do creator quebram linha em tela estreita. Remuneração, formato e prazo das oportunidades empilham no celular.
- O kit de componentes em `src/components/ui` permanece no repositório. As telas do produto não o usam, e removê-lo não fazia parte desta revisão.
- O Prettier aceita a quebra de linha já presente em cada arquivo (`endOfLine: auto`), para o lint passar no Windows sem reescrever o repositório.
