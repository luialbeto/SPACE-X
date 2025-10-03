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
git clone [git@github.com:luialbeto/SPACE-X.git](https://github.com/luialbeto/SPACE-X.git)
cd SPACE-X
```

### 2. Instale as dependências

```
npm install
```

## Desenvolvimento

### Iniciar servidor de desenvolvimento

```
npm run dev
```
Disponível em [http://localhost:3000](http://localhost:3000)

![alt text](<Screenshot from 2025-10-03 14-16-06-1.png>)

### Iniciar com Docker

```
docker-compose up --build
```

## Testes

### Testes Unitários (Jest)

```
npm test
```
![alt text](<Screenshot from 2025-10-03 14-15-30.png>)

### Testes E2E (Cypress)

```
npm run cypress:open
```
![alt text](<Screenshot from 2025-10-03 14-12-24.png>)

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

- **SSR (Server-Side Rendering)**: HomePage; UI Components
- **CSR (Client-Side Rendering)**: Infinite scroll no catálogo; Página de Lançamentos; 
