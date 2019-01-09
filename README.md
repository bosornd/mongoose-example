# mongoose example
```
1. db 폴더에 schema를 만든다(user.js)
2. server.js에 route를 등록한다.
   app.use('/api/user', require('./db/route')(require('./db/user')))
   이때, ./db/route를 사용한다.
3. 서버를 구동(npm run start)하고, tes해본다.

$ curl -i -X POST -H "Content-Type: application/json" -d @db/user1.json localhost:8080/api/user
$ curl -i -X POST -H "Content-Type: application/json" -d {\"name\":\"park\",\"role\":\"student\"} localhost:8080/api/user
--> 추가한다.
$ curl -i -X GET localhost:8080/api/user
--> 전체 목록을 반환한다.
$ curl -i -X GET localhost:8080/api/user/5c359f41f785d737d026ec78
--> id:5c3593b0362d802e1412b7c9인 데이터를 반환한다.
$ curl -i -X PUT -H "Content-Type: application/json" -d @db/user2.json localhost:8080/api/user/5c3593b0362d802e1412b7c9
--> role이 professor로 변경된다.
--> id:5c3593b0362d802e1412b7c9인 데이터를 수정한다.
$ curl -i -X GET localhost:8080/api/user/search?role=professor
--> {role:professor}인 데이터를 검색한다.
$ curl -i -X DELETE localhost:8080/api/user/5c359f41f785d737d026ec78
--> id:5c3593b0362d802e1412b7c9인 데이터를 삭제한다.

lesson의 학생으로 user ID를 추가하는 예는 다음과 같다.
$ curl -i -X POST -H "Content-Type: application/json" -d @db/lesson1.json localhost:8080/api/lesson
$ curl -i -X POST -H "Content-Type: application/json" -d {\"title\":\"python\",\"students\":[{\"user\":\"5c359f41f785d737d026ec78\"},{\"user\":\"5c359471362d802e1412b7ca\"}]} localhost:8080/api/lesson
```
