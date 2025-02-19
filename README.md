````markdown
# Создание разметки для страницы сайта `/sveden/education`

## Подготовка к запуску

1. **Установите Node.js**  
   Убедитесь, что у вас установлен Node.js. Если нет, скачайте и установите его с [официального сайта](https://nodejs.org/).

2. **Клонируйте репозиторий**  
   Склонируйте репозиторий с помощью команды:
   ```bash
   git clone https://github.com/juracdev/clt-edu-tables-markup.git
   ```
````

3. **Установите зависимости**  
   Перейдите в директорию проекта и установите необходимые зависимости:

   ```bash
   cd clt-edu-tables-markup
   npm install
   ```

4. **Выполните сборку**  
   Запустите сборку проекта:
   ```bash
   npm run build
   ```

## Задача 1: Генерация разметки для таблицы файлов

### Описание задачи

Генерация разметки для таблицы файлов, содержащей столбцы:

- "Наименование"
- "Открыть файл"
- "Скачать с электронной подписью"

Также программа переименовывает файлы транслитом и включает их URL в разметку.

### Пример применения

Таблицы с оценочными материалами (ОМ) и рабочими программами дисциплин (РПД).

### Выполнение

1. **Подготовка файлов**  
   Создайте в корне проекта директории `/data/input` и поместите в директорию `input` файлы для переименования.  
   Для каждого `.pdf` файла должен быть файл `.pdf.sig`.

   Пример структуры файлов:

   ```
   /data/input/Б1.Б.1 Философия.pdf
   /data/input/Б1.Б.1 Философия.pdf.sig
   ```

2. **Запуск программы**  
   Запустите программу с помощью команды:

   ```bash
   node ./dist/main.js -f /uploads/DOCUMENTS/sved-education/2025/om/bak/gp
   ```

   Флаг `-f` указывает базовый путь, который будет добавлен в URL.

3. **Результат**

   - Переименованные файлы создаются в директории `/data/output` и удаляются между запусками.
   - Файл с разметкой создается в директории `/data/outputHtml`.

   Примеры созданных URL из описанного выше запуска:

   ```
   "/uploads/DOCUMENTS/sved-education/2025/om/bak/gp/b1b1-filosofiya__YGacvF.pdf"
   "/uploads/DOCUMENTS/sved-education/2025/om/bak/gp/b1b1-filosofiya__YGacvF.pdf.sig"
   ```

```

```
