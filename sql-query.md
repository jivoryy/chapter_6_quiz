Creating database

```sql
CREATE DATABASE book_store;
```

Connecting to database _book_store_

```sql
\c book_store
```

Creating table _books_

```sql
CREATE TABLE books (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    author VARCHAR(50) NOT NULL,
    price INTEGER NOT NULL,
    is_publish BOOLEAN DEFAULT FALSE
);
```

Checking _books_ table structure

```sql
\d books
```

Inserting data to table _books_

```sql
INSERT INTO books (
    name, author, price, is_publish
) VALUES ('The Intelligent Investor', 'Benjamin Graham', 175500, true),
('Segala Galanya Ambyar', 'Mark Manson', 111000, false),
('Rich Dad Poor Dad', 'Robert T. Kiyosaki', 54400, false),
('Novel Bulan', 'Tere Liye', 76000, true),
('You Do You', 'Fellexandro Ruby', 102400, true),
('Start with Why', 'Simon Sinek', 80000, false);
```

Selecting all data with only _name, author, price_ columns from _books_ table

```sql
SELECT name, author, price FROM books;
```

Selecting all data with only _name, author, price_ columns from _books_ table where the price is above 80000

```sql
SELECT name, author, price FROM books WHERE price >= 80000;
```

Selecting all data with only _name, author, price_ columns from _books_ table where the name contains _'Rich'_

```sql
SELECT name, author, price FROM books WHERE name LIKE '%Rich%';
```

Updating data for author _'Simon Sinek'_ with _price_ becomes **180000** and _is_publish_ becomes **true**

```sql
UPDATE books SET price=180000, is_publish=true WHERE author='Simon Sinek';
```

Deleting data where _'Novel Bulan'_ is the name of the book

```sql
DELETE FROM books WHERE name='Novel Bulan';
```

Selecting all data with only _name, author, price_ columns from _books_ table and sorted by price in descending order

```sql
SELECT name, author, price FROM books ORDER BY price DESC;
```
