# Деплой на Vercel и настройка домена www.sai-technology.com

## 1. Подготовка проекта

Убедитесь, что приложение собирается локально:

```bash
npm run build
```

Если сборка прошла без ошибок — проект готов к деплою.

---

## 2. Репозиторий на GitHub

### Уже есть репо (например [Saitosar/www.sai-technology.com](https://github.com/Saitosar/www.sai-technology.com))

Подключите текущую папку к репо и запушьте код:

```bash
cd /Users/sarkhan/MyProjectsApp/www.sai-technology.com

# Привязать удалённый репозиторий (один раз)
git remote add origin https://github.com/Saitosar/www.sai-technology.com.git

# Добавить все файлы, закоммитить, отправить
git add .
git commit -m "Initial commit: SAI Intelligence landing"
git branch -M main
git push -u origin main
```

Если `origin` уже был добавлен с другим URL, замените его:
```bash
git remote set-url origin https://github.com/Saitosar/www.sai-technology.com.git
```

### Репозитория ещё нет

Vercel деплоит из Git. Если репозитория ещё нет:

```bash
cd /Users/sarkhan/MyProjectsApp/www.sai-technology.com
git init
git add .
git commit -m "Initial commit: SAI Intelligence landing"
# Создайте репозиторий на https://github.com/new
git remote add origin https://github.com/ВАШ_USERNAME/ИМЯ_РЕПО.git
git branch -M main
git push -u origin main
```

---

## 3. Подключение проекта к Vercel

**Репо на GitHub есть, но деплой сам не пошёл** — так и должно быть. Vercel не подключается к репо автоматически. Нужно один раз вручную создать проект и привязать репозиторий (шаги ниже). После этого каждый `git push` будет запускать деплой.

### Вариант A: через сайт Vercel (рекомендуется)

1. Зайдите на **[vercel.com](https://vercel.com)** и войдите через **GitHub** (логин через GitHub обязателен, чтобы видеть репозитории).
2. Нажмите **Add New…** → **Project**.
3. В блоке **Import Git Repository** найдите **www.sai-technology.com** (или `Saitosar/www.sai-technology.com`). Если репо нет в списке:
   - Нажмите **Adjust GitHub App Permissions** и выдайте Vercel доступ к нужной организации/аккаунту или к этому репо.
   - Либо **Import** другого репо — вставьте URL: `https://github.com/Saitosar/www.sai-technology.com`.
4. Нажмите **Import** рядом с репозиторием.
5. Настройки оставьте по умолчанию:
   - **Framework Preset:** Next.js (определится автоматически)
   - **Root Directory:** `./`
   - **Build Command:** `next build`
   - **Output Directory:** (пусто)
6. Нажмите **Deploy**.

После первого деплоя приложение будет доступно по адресу вида `www-sai-technology-com.vercel.app`. Дальше при каждом пуше в `main` Vercel будет деплоить автоматически.

**Если сборка прошла, но появилась ошибка «No Output Directory named public»:** в проекте Vercel зайдите в **Settings → General → Build & Development Settings** и в поле **Output Directory** оставьте пустым (удалите `public`, если там указано). Для Next.js Vercel сам использует результат сборки; папка `public` для вывода не нужна.

### Вариант B: через Vercel CLI

```bash
# Установка CLI (один раз)
npm i -g vercel

# В корне проекта
cd /Users/sarkhan/MyProjectsApp/www.sai-technology.com
vercel

# Следуйте подсказкам: логин, выбор аккаунта, линк к существующему проекту или создание нового.
# Для продакшн-деплоя:
vercel --prod
```

---

## 4. Добавление домена www.sai-technology.com

1. В **[Vercel Dashboard](https://vercel.com/dashboard)** откройте ваш проект.
2. Перейдите в **Settings → Domains**.
3. В поле **Domain** введите: `www.sai-technology.com`
4. Нажмите **Add**.

Vercel покажет, какие DNS-записи нужно создать у регистратора домена.

---

## 5. Настройка DNS у регистратора домена

У того, где куплен домен **sai-technology.com** (Reg.ru, Cloudflare, Namecheap, GoDaddy и т.д.), нужно добавить запись для **www**:

### Рекомендуемый способ (CNAME для www)

| Тип   | Имя  | Значение / куда вести      |
|-------|------|-----------------------------|
| CNAME | www  | `cname.vercel-dns.com`      |

Либо Vercel может предложить свой целевой хост, например:  
`ваш-проект.vercel.app` — тогда в качестве значения CNAME укажите именно его.

### Если регистратор не даёт выбрать «тип» для поддомена

- Для **www** обычно создаётся запись с именем **www** и типом **CNAME**, значение — тот хост, что указан в Vercel (часто `cname.vercel-dns.com` или ваш `*.vercel.app`).

### Опционально: корневой домен sai-technology.com

Если хотите, чтобы открывался и **sai-technology.com** (без www):

1. В Vercel в **Settings → Domains** добавьте домен **sai-technology.com** (без www).
2. В DNS у регистратора:
   - Либо **A-запись**: имя `@`, значение `76.76.21.21` (актуальный IP лучше проверить в Vercel в разделе Domains).
   - Либо использовать **ANAME/ALIAS** на `cname.vercel-dns.com`, если регистратор это поддерживает.

Точные значения IP и CNAME всегда смотрите в Vercel в разделе **Domains** после добавления домена.

---

## 6. SSL (HTTPS)

Vercel автоматически выпускает сертификат Let's Encrypt для вашего домена. После того как DNS обновится (от нескольких минут до 24–48 часов), сайт будет открываться по **https://www.sai-technology.com**.

---

## 7. Проверка

- После сохранения DNS подождите 5–30 минут (иногда до 24 часов).
- Откройте **https://www.sai-technology.com** в браузере.
- В Vercel в **Settings → Domains** статус домена должен стать зелёным (Valid).

---

## Краткий чеклист

| Шаг | Действие |
|-----|----------|
| 1 | `npm run build` — убедиться, что сборка проходит |
| 2 | Залить код в GitHub |
| 3 | Подключить репозиторий к Vercel (Add New → Project) |
| 4 | Дождаться первого деплоя |
| 5 | Settings → Domains → Add → `www.sai-technology.com` |
| 6 | У регистратора домена: CNAME **www** → `cname.vercel-dns.com` (или значение из Vercel) |
| 7 | Дождаться обновления DNS и проверить https://www.sai-technology.com |

Готово: приложение в проде на Vercel с доменом www.sai-technology.com.
