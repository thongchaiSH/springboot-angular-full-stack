# Setup database
```
docker run --name=emp_manage_system -e MYSQL_ROOT_PASSWORD=keep1234 -e MYSQL_DATABASE=emp_manage_system -p 3306:3306 -d mysql
```
```
docker exec -it emp_manage_system bash

mysql -u root -p //pass is keep1234
```

![DBeaver — แก้ปัญหา MySQL 8+ Public Key Retrieval is not allowed](https://wk-j.medium.com/dbeaver-%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%AB%E0%B8%B2-mysql-8-public-key-retrieval-is-now-allowed-ae2b6b425fd4)