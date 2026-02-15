# Cloudflare Workers React Boilerplate

[![[cloudflarebutton]]](https://deploy.workers.cloudflare.com/?url=${repositoryUrl})

A production-ready full-stack boilerplate for building scalable applications with Cloudflare Workers. Features a modern React frontend with Vite, Tailwind CSS, shadcn/ui components, TanStack Query, and a powerful backend using Hono, Durable Objects for entity-based state management (Users, Chats), and shared TypeScript types.

## ✨ Key Features

- **Full-Stack TypeScript**: End-to-end type safety with shared types between frontend and Workers.
- **Durable Objects for Entities**: Efficient storage and real-time capabilities using a single Global Durable Object with indexed entities (Users, ChatBoards).
- **Modern React Stack**: Vite, React 18, React Router, TanStack Query, shadcn/ui, Tailwind CSS with animations.
- **Hot Reload Development**: Seamless frontend/backend development with Bun and Vite.
- **Production-Ready**: CORS, error handling, logging, client error reporting, and SPA asset handling.
- **Real-Time Chat Demo**: Pre-built entities for users, chats, and messages with CRUD APIs.
- **Theme Support**: Dark/light mode with localStorage persistence.
- **Deployment Ready**: One-command deploy to Cloudflare Workers.

## 🛠️ Tech Stack

### Frontend
- React 18, Vite, TypeScript
- Tailwind CSS, shadcn/ui, Lucide icons
- TanStack Query, React Router, Sonner (toasts)
- Framer Motion, Zustand (state), Immer

### Backend
- Cloudflare Workers, Hono (routing)
- Durable Objects (GlobalDurableObject with entity indexing)
- Shared types and mock data for rapid prototyping

### Tools
- Bun (package manager/runtime)
- Wrangler (Cloudflare CLI)
- ESLint, TypeScript strict mode

## 🚀 Quick Start

### Prerequisites
- [Bun](https://bun.sh/) v1.0+
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/install/) (Cloudflare CLI)
- Cloudflare account (free tier sufficient)

### Installation
```bash
bun install
```

### Development
```bash
# Start dev server (frontend + worker proxy)
bun dev

# Open http://localhost:3000 (or $PORT)
```

Frontend runs on port 3000 (configurable via `$PORT`), proxies `/api/*` to the Worker for full-stack development.

### Build for Production
```bash
bun build
```

## 📚 Usage

### API Endpoints (Demo Chat App)
All APIs under `/api/` with JSON responses `{ success: boolean, data?: T, error?: string }`.

- **Users**:
  - `GET /api/users` - List users (paginated)
  - `POST /api/users` - `{ name: string }`
  - `DELETE /api/users/:id`

- **Chats**:
  - `GET /api/chats` - List chats
  - `POST /api/chats` - `{ title: string }`
  - `GET /api/chats/:chatId/messages`
  - `POST /api/chats/:chatId/messages` - `{ userId: string, text: string }`

- **Health**: `GET /api/health`
- **Error Reporting**: `POST /api/client-errors`

Extend routes in `worker/user-routes.ts` and `worker/entities.ts`. Core utils in `worker/core-utils.ts` handle entity CRUD with indexes.

### Frontend Customization
- Replace `src/pages/HomePage.tsx` with your app.
- Use `src/components/layout/AppLayout.tsx` for sidebar layout.
- Hooks: `useTheme`, `useMobile`.
- API client: `src/lib/api-client.ts`.

## 🔧 Development Workflow

1. **Add Entities**: Extend `IndexedEntity` in `worker/entities.ts`.
2. **Add Routes**: Export `userRoutes(app)` from `worker/user-routes.ts`.
3. **Frontend Queries**: Use TanStack Query with `api` helper.
4. **Type Generation**: `bun cf-typegen` (Wrangler types).
5. **Lint**: `bun lint`.

Seed data auto-populates on first list request.

## 🚀 Deployment

Deploy to Cloudflare Workers with static assets and SPA routing:

```bash
# Login (if needed)
wrangler login

# Deploy
bun deploy
```

Or use the one-click deploy:

[![[cloudflarebutton]]](https://deploy.workers.cloudflare.com/?url=${repositoryUrl})

**Custom Domain**: Update `wrangler.jsonc` and run `wrangler deploy`.

**Environment Variables**: Set via Wrangler dashboard or `wrangler.toml`.

## 🤝 Contributing

1. Fork the repo.
2. `bun install`.
3. Make changes.
4. `bun lint`.
5. PR with clear description.

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.

---

Built with ❤️ for Cloudflare Workers. Questions? [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)