--for help \?

--list databe \l

--Creare database CREATE DATABASE <name>

-- for connect to database \c <name>

CREATE TABLE products (
    id INT,
    name VARCHAR(50),
    price INT,
    on_sale BOOLEAN
);

CREATE TABLE restaurants(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

INSERT INTO restaurants (id,name,location,price_range) values (124,
'max','zafer mah',2);

CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating >= 1 and rating <= 5)
);



Selam Arkadaşlar,
    Bilgisayar Mühendisliği öğrencisi olarak 2 senedir sınıf temsilciliği yapmaktayım. Bu sene de bölümümüzün temsilciliğini yapma arzusundayım.
    Temsilci olacağım süre boyunca Öğrenci çalışmalarını en iyi şekilde yürüteceğimden, bölümümüzü fakülte karşısında en iyi şekilde temsil edeceğimden ve istek ve problemler karşısında çözüm odaklı olacağımdan emin olabilirsiniz.

Sağlıkla kalmanız dileğiyle,
Bülent Demir