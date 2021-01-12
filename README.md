# YumYum! Restaurant Finder
Official repository of **YumYum!** which is a software development project for CSE305.

YumYum is a yelp-like restaurant finder app.  
Currently being developed by:  
[@fatih-keskin](https://github.com/fatih-keskin)  
[@frknltrk](https://github.com/frknltrk)  
[@aliefee](https://github.com/aliefee)  


### Installation

#### Setup Database  
> Install Postgresql  
> Create a database named 'yumyum'  
> Set correct username and password in `server/.env` and `server/config/db.config.js`  
> Run SQL commands:  
```sql
CREATE TABLE restaurants(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);
CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,                                                
    rating INT NOT NULL check(
        rating >= 1
        and rating <= 5
    )
);
```

#### Start Express API
=======
in `server/server.js`:  
comment the line 24  
uncomment lines 20-23  

```bash
cd server
npm install
npm start
```

in `server/server.js`:  
uncomment the line 24  
comment lines 20-23  

#### Add admin account
any HTTP requesting app can be used
curl example:
```bash
curl -X POST -H 'Content-Type: application/json' -i http://localhost:4000/api/auth/signup --data '{
    "username": "admin",
    "email":"mail@mail.com",
    "password": "password",
    "roles" : ["user", "admin"]
}'
```

#### Start React App
```bash
cd client
npm install
npm start
```
Login the system with Admin account and add new restaurants.
