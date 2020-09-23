
### Скрипты
```bash
# 1. Запускаем сервер по адресу http://localhost:8081/index
http-server

# 2. Проверям тесты и accessibility
npm run cy:open

# 3. Формируем отчеты
npm run cy:run
```

### Установка
```bash
# cypress
npm i --save-dev cypress

# отчет в виде HTML-файла
npm i --save-dev mochawesome
npm i --save-dev mochawesome-merge
npm i --save-dev mochawesome-report-generator

# тест accessibility
npm i --save-dev axe-core
npm i --save-dev cypress-axe
```
