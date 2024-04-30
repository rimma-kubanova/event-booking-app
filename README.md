**Mereke** - приложение для бронирование билетов

## Технологии

Для разработки приложения были использованы Next.js для **фуллстэка** и PocketBase для **бэкенда и датабазы**. Остальные технологии указаны ниже:

```bash
Next.js v14.2.3
Pocketbase
TypeScript v5.4.5
Tailwind CSS v3.0


```
## Запуск 

Для запуска приложения необходимо клонировать данный репотизорий и загрузить данный код:
```bash
npm run dev
or
yarn dev

```

[Важно!] Программа будет работать только в серверной части, так как данные находятся на локальном сервере

## Датабаза

Для данной веб приложения был использован Pocketbase. Pocketbase позволяет хранить данные а также совершать CRUD (CREATE, READ, UPDATE, DELETE) методы над ними с помощью API запросов. Ниже предоставлены таблицы которые были использованы:
| Events   |  |
| -------- | ------- |
| id  | key   |
| name  | string   |
| Description | string     |
| Datetime   | datetime   |
| Location   | string    |
| City   |string   |
| Ticket   | foreign key   |
| Datetime   | datetime    |
| Type   | type  |
| Photo   | url   |

<img width="500" alt="Screenshot 2024-04-30 at 21 07 45" src="https://github.com/rimma-kubanova/event-booking-app/assets/115300909/6d83ff7f-f6a4-4611-9643-34403c2bec30">

| Tickets   |  |
| -------- | ------- |
| id  | key   |
| isBought | boolean     |
| price   | number  |
| owner   | email    |

<img width="1133" alt="Screenshot 2024-04-30 at 21 09 06" src="https://github.com/rimma-kubanova/event-booking-app/assets/115300909/5dbf2f14-e13c-49b0-9add-dac86fc6895e">

Каждый Events может содержать в себе несколько tickets, и пользователи могут покупать несколько из них
