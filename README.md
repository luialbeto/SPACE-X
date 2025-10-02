# Space-X

Portal completo de lançamentos da SpaceX construído com Next.js 15.5.4, TypeScript, Tailwind CSS v4, e GraphQL.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

## Características

- **Next.js 15.5.4** com App Router e Turbopack
- **Tailwind CSS v4** para estilização
- **shadcn/ui** componentes acessíveis
- **GraphQL** integração com API SpaceX
- **React ARIA** para acessibilidade completa
- **Infinite Scroll** com paginação invisível
- **Atomic Design** pattern
- **Totalmente Responsivo**
- **Testes** com Jest e Cypress
- **Docker** ambiente completo
- **Error Boundary** tratamento de erros
- **Context API** gerenciamento de estado
- **Lazy Loading** otimização de performance

## Pré-requisitos

- Node.js 18
- Docker
- Git

## Instalação

### 1. Clone o repositório

```
git clone https://github.com/seu-usuario/spacex-portal.git
cd spacex-portal
```

### 2. Instale as dependências

```
npm install
```

### 3. Configure as variáveis de ambiente

Arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_GRAPHQL_ENDPOINT=https://main--spacex-l4uc6p.apollographos.net/graphql
```

## Desenvolvimento

### Iniciar servidor de desenvolvimento

```bash
npm run dev
```

Disponível em [http://localhost:3000](http://localhost:3000)

### Iniciar com Docker

```
docker-compose up --build
```

## Testes

### Testes Unitários (Jest)

```
npm run test
```

### Testes E2E (Cypress)

```
npm run test:e2e
```

## Tecnologias

### Core
- **Next.js 15.5.4**
- **React 19**
- **TypeScript**
- **Turbopack**

### Estilização
- **Tailwind CSS v4**
- **shadcn/ui**
- **React ARIA**

### Data Fetching
- **GraphQL** 

### Code Quality
- **ESLint**

### DevOps
- **Docker** - Containerização
- **Vercel** - Deploy e hosting

## Estratégias de Renderização

- **SSR (Server-Side Rendering)**: Página de detalhes do lançamento
- **CSR (Client-Side Rendering)**: Infinite scroll no catálogo
- **Static Generation**: Página inicial
