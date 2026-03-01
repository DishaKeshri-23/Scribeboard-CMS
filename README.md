# 📝 ScribeBoard API

A full-fledged **Blog CMS Backend Service** with authors, posts, categories, comments, drafts, and publishing workflows.

 ✨ Features

- **User Roles**: Admin, Editor, Author, Reader
- **Blog Posts**: Full CRUD with rich content support
- **Publishing Workflow**: Draft → Review → Publish → Unpublish
- **Categories & Tags**: Organize content effectively
- **Comment System**: Nested comments with moderation
- **Search & Filter**: Find posts by category, tag, author, or keyword
- **Pagination**: Efficient data loading
- **Revision History**: Track post changes

- **Tech Stack**
- Node.js
• Express.js
• Prisma ORM
• MySQL Database
• REST API Architecture
• Environment Variables Configuration
• Cloud Deployment on Railway

**Deployment**
The backend is deployed on Railway with a cloud-hosted MySQL database.

scribeboard/
├── prisma/
│   ├── schema.prisma      # Database schema
│   └── seed.js            # Seed data
├── src/
│   ├── config/            # Configuration
│   ├── controllers/       # Route handlers
│   ├── middleware/        # Express middleware
│   ├── routes/            # API routes
│   ├── services/          # Business logic
│   ├── utils/             # Helpers
│   ├── validators/        # Joi schemas
│   ├── app.js             # Express app
│   └── server.js          # Entry point
├── .env.example
├── package.json
└── README.md
