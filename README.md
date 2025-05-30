# 📰 Blog App — Fullstack проєкт

Це простий повнофункціональний блог-додаток, створений як тестове завдання. Реалізовано CRUD-операції для статей з використанням сучасного стека технологій.

## ⚙️ Стек технологій

- 🧠 **Backend**: Nest.js + TypeScript + MongoDB (Mongoose)
- 💻 **Frontend**: Next.js (App Router) + React + TypeScript
- 🧾 **Валідація**: class-validator + клієнтська перевірка
- 📡 **REST API**: повна реалізація CRUD
- ☁️ **Деплой (опціонально)**: Vercel / локально

---

## 📂 Основний функціонал

- 🔍 Перегляд усіх постів — `/posts`
- 📄 Перегляд конкретного поста — `/posts/:id`
- ➕ Створення нового поста — `/posts/create`
- ✏️ Редагування поста — `/posts/:id/edit`
- 🗑️ Видалення поста з підтвердженням
- ✅ Валідація форми (на клієнті та сервері)
- 🔙 Кнопка "Назад" на сторінках

---

## 🚀 Запуск проєкту локально

### 1. Клонувати репозиторій

```bash
git clone https://github.com/DKrabik/blog-app.git
cd blog-app
```

### 2. Запустити бекенд (Nest.js)

```bash
cd blog-backend
npm install
npm run start:dev
```

    🔐 Обов’язково додай файл .env з доступом до MongoDB

### 3. Запустити фронтенд (Next.js)

```bash
cd ../blog-client
npm install
npm run dev
```

## 🛠️ Налаштування CORS (локально)

> Щоб уникнути помилок при запитах з клієнта на сервер:

1. У `.env` у папці `server/` вкажи:
```
PORT=3001 
CORS_ORIGIN=http://localhost:3000
```
2. Переконайся, що у `main.ts` NestJS використовує ці змінні.

3. Запусти сервер:  
```bash
npm run start:dev
```

### Сайт буде доступний на http://localhost:3000

🔗 REST API (Nest.js)
| Method | Route | Опис |
| ------ | ----- | ---- |
| GET | /api/posts | Отримати всі пости |
| GET | /api/posts/:id | Отримати пост за ID |
| POST | /api/posts | Створити новий пост |
| PUT | /api/posts/:id | Оновити пост |
| DELETE | /api/posts/:id | Видалити пост |

## 🔐 Приклад файлів .env

### Для бекенду (Nest.js)

Створіть файл `.env` у папці `blog-backend` і додайте наступні змінні:

```
PORT=3001
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/blog
CORS_ORIGIN=http://localhost:3000
```

- `PORT` — порт, на якому працює сервер.
- `MONGODB_URI` — URI для підключення до MongoDB.
- `CORS_ORIGIN` — адреса фронтенду для налаштування CORS.

### Для фронтенду (Next.js)

Створіть файл `.env.local` у папці `blog-client` і додайте наступні змінні:

```
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

- `NEXT_PUBLIC_API_URL` — базовий URL для запитів до API бекенду.

### 👤 Автор
    💻 Тестове завдання
    ✉️ @wastrel_02

### ✅ Статус

✔️ Проєкт завершено

🚀 Готовий до перевірки

📌 Можливе майбутнє доповнення: 
- авторизація
- теги
- коментарі
