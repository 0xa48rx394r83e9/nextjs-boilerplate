# Boilerplate for Next js

# Note this is still a work and progress

## Features
 - [x] styled-components
 - [x] Redux toolkit
 - [x] Next js
 - [x] eslint
 - [ ] Storybook js
 - [ ] Jest
 - [ ] husky
 - [ ] prettier
 - [ ] redis
 - [ ] postgres
 - [ ] tailwind
 - [ ] twin
 - [ ] bcrypt
 - [ ] next-auth
 - [ ] prisma
 - [ ] apollo
 - [ ] docker

## File Structure
```
├── src
│     ├── components
│     │     └── [individual components go here]
│     ├── constants
│     ├── contexts
│     │     └── [components get bundled together here]
│     ├── hooks
│     │     └── [hooks get defined here]
│     ├── modules
│     ├── pages
│     │     ├── _app.tsx
│     │     ├── _document.tsx
│     │     ├── api
│     │     │    └── [api end point]
│     │     └── index.tsx
│     ├── providers
│     ├── public
│     │     └── [static images]
│     ├── redux
│     │     ├── slices
│     │     │     └── [redux toolkit slices go here]
│     │     └── store
│     │           └── index.ts
│     ├── services
│     │     └── [services go here]
│     └── styles
│           └── [styling files go here]
```