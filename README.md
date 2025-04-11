<<<<<<< HEAD
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
git clone https://github.com/your-username/blog-app.git
cd blog-app
```

### 2. Запустити бекенд (Nest.js)

```bash
cd blog-backend
npm install
npm run start:dev
```

    🔐 Обов’язково додай файл .env або password.json з доступом до MongoDB

### 3. Запустити фронтенд (Next.js)

```bash
cd ../blog-client
npm install
npm run dev
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
