**Mereke** - приложение для бронирование билетов

## Технологии

Для разработки приложения были использованы Next.js для **фуллстэка** и PocketBase для **бэкенда и датабазы**. Остальные технологии указаны ниже:

**Next.js 14** - позволяет утилизировать server-side rendering который позволяет быстрее грузить сайты, и также обрабатывать клиентскую и серверную часть вместе на одном фреймворке. Данная технология идеальна подходит для небольших сайтов. 

[**PocketBase **](https://pocketbase.io)- бэкенд, который позволяет создавать базы данных, работать с ними. Данная технология очень проста в использовании и легко интегрируется к nextjs. 

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

<img width="500" alt="Screenshot 2024-04-30 at 21 09 06" src="https://github.com/rimma-kubanova/event-booking-app/assets/115300909/5dbf2f14-e13c-49b0-9add-dac86fc6895e">

Каждый Events может содержать в себе несколько tickets, и пользователи могут покупать несколько из них

## Аутентификация

Аутентификация была реализована с использованием технологии **NextAuth.js**. Авторизация может быть сделана двумя путями: **OAuth or Credentials**. Пользователь может зайти через аккаунт Github либо использовать свою почту/пароль. На сайте поддерживается **регистрация, логин и логаут**. 

<img width="350" alt="Screenshot 2024-04-30 at 20 50 09" src="https://github.com/rimma-kubanova/event-booking-app/assets/115300909/9dc424ff-52fa-4e21-81fe-02f9ce45dd70"> <img width="350" alt="Screenshot 2024-04-30 at 20 49 43" src="https://github.com/rimma-kubanova/event-booking-app/assets/115300909/6f5d81f1-d508-4c8b-85a3-709436b74557">

## Мероприятия

Мероприятия отображены на главной странице. Для доступа к мероприятиям авторизация не обьязателен. Пользователь может нажать на один из ивентов чтобы зайти на новую страницу и получить более детальную информацию об ивенте: 

Страница /events/:
<img width="350" alt="Screenshot 2024-04-30 at 21 17 02" src="https://github.com/rimma-kubanova/event-booking-app/assets/115300909/7a5feb27-c7d2-4d82-8c68-ee7ebfa0b249">

Страница /events/{eventid}/:
<img width="1438" alt="Screenshot 2024-04-30 at 21 19 17" src="https://github.com/rimma-kubanova/event-booking-app/assets/115300909/6468d7d6-e5b7-4321-be55-3120d0ba0db2">

## Билеты

В целях тестирования, для каждого мероприятия есть один билет. Пользователь должен быть авторизован для того чтобы покупать билет. В обратном случае, он будет перенаправлен на страницу авторизации. Как только пользователь купит билет, он может получить к нему доступ на своем личном кабинете:

<img width="1155" alt="Screenshot 2024-04-30 at 21 21 48" src="https://github.com/rimma-kubanova/event-booking-app/assets/115300909/b43a922d-328b-4c09-99b8-794f32db15ad">
<img width="1155" alt="Screenshot 2024-04-30 at 21 21 43" src="https://github.com/rimma-kubanova/event-booking-app/assets/115300909/4865329b-6d92-4740-aa80-be31814ca66b">

## Личный Кабинет

В личном кабинете пользователь может увидеть купленные им билеты. Билеты показываются путем фильтра датабазы с помощью api с билетами которые отмечены именем пользователя. Для доступа в личный кабинет необходима авторизация. 

<img width="1440" alt="Screenshot 2024-04-30 at 21 22 49" src="https://github.com/rimma-kubanova/event-booking-app/assets/115300909/aa1ffc0b-35e8-40a6-914c-a4bb84d72cc7">








