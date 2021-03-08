# Todo App

![unit](https://github.com/Gerpea/react-todo/actions/workflows/unit-test.yml/badge.svg)
![e2e](https://github.com/Gerpea/react-todo/actions/workflows/e2e-test.yml/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/9383382e6a066be614b6/maintainability)](https://codeclimate.com/github/Gerpea/react-todo/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/9383382e6a066be614b6/test_coverage)](https://codeclimate.com/github/Gerpea/react-todo/test_coverage)

**Вы можете найти приложение [здесь](https://gerpea.github.io/react-todo/)**

## Содержание

- [Команды](#команды)
- [Запуск](#запуск)
- [Использованные технологии](#использованные-технологии)
- [Рассказ](#Рассказ)

### Команды

- `npm run start` - Запускает сервер для разработки
- `npm run dev` - Запускает сервер для разработки и открывает страницу в браузере
- `npm run build` - Собирает проект
- `npm run serve` - Запускает сервер
- `npm run test` - Запускает тесты
- `npm run test:coverage` - Запускает тесты и генерирует файл [`lcov.info`](https://github.com/linux-test-project/lcov)
- `npm run cypress` - Запускает _cypress_

### Запуск

- C оптимизацией

```bash
npm run build
npm run serve
```

> Приложение можно будет найти по адресу [`http://localhost:9000`](http://localhost:9000)

---

- Запустить приложение без оптимизации

```bash
npm run dev
```

### Использованные технологии

- [Webpack](https://webpack.js.org/)
- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/), [ReactBootstrap](https://react-bootstrap.github.io/)
- [Redux](https://redux.js.org/), [ReactRedux](https://react-redux.js.org/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)


### Рассказ

- Технологии
    -  Webpack - Для сборки приложения
    - React - Каркас приложения
    - Bootstrap, ReactBoostrap - Визуальная часть
    - Redux - Управление состоянием
    - Jest, Cypress - Тестирование

- Браузеры(Оптимизировал и проверял)
    - Desktop: Chrome, Firefox, Opera,
    - Mobile: Chrome, Safari, Edge, Yandex

- Тесты
    > Разрабатывал по TDD. Потому что считаю что это наиболее быстрый и простой способ разработки приложений
    - Юнит и интеграционные тесты - Для более простого и комфортного процесса разработки
    - Снапшот тесты - Чтобы случайно не изменить компонент
    - E2E тесты - Чтобы не прокликивать каждый раз интерфейс
    - Ручное тестирование - Убедиться что все работает как ожидается, понять как написать e2e тесты
