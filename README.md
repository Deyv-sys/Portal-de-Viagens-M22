# Rota Livre

Pequeno portal de viagens com destinos brasileiros, navegação entre páginas e componentes estilizados com CSS Modules.

## Executar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Páginas e componentes

- `/`: apresentação do portal no App Router.
- `/destinos`: listagem renderizada a partir de `data/destinos.ts` no Pages Router.
- `components/Layout`: navegação e rodapé compartilhados.
- `components/CardDestino`: cartão reutilizável para cada destino.
- Os estilos dos componentes e das páginas ficam isolados em arquivos CSS Modules.

As imagens dos destinos são carregadas do Unsplash; o domínio está habilitado em `next.config.ts`.
