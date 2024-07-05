# JSON Server

## Packages

1. node.js
2. npm install -g json-server
3. create db.json
4. watch : `npx json-server data/data.json`
5. curl <http://localhost:3000/post/1>

>- Watch

`json-server --watch data/data.json`

>- Routes
- GET     /posts
- GET     /posts/:id
- POST    /posts/:id
- PUT     /profile
- PATCH   /profile
- DELETE  /posts/:id

>- Conditions
- ==
- lt -> <
- lte -> <-
- gt -> >
- gte -> >=
- ne -> !=

`GET /post?view_gt=9000`

>- Range
- start
- end
- limit
`GET /posts?_start=10&_end=20`
`GET /posts?_start=10&_limit=10`

>- Paginate
- page
- per_page (default=10)
`GET /posts?_page=1&_page=25`

>- Sort
- _sort=f1, f2
`GET /posts?_sort=id,-views`

```http

GET /foo?a.b=bar
GET /foo?x.y_lt=100
GET /foo?arr[0]=bar
```

>- Delete

```http
DELETE /posts/1
DELETE /posts/1?_dependent=comments
```

>- db.json example

```json
{
  "posts": [
    { "id": "1", "title": "a title", "views": 100 },
    { "id": "2", "title": "another title", "views": 200 }
  ],
  "comments": [
    { "id": "1", "text": "a comment about post 1", "postId": "1" },
    { "id": "2", "text": "another comment about post 1", "postId": "1" }
  ],
  "profile": {
    "name": "typicode"
  }
}
```

## FETCH

## PATCH

## [Ref. iamshaunjp](https://github.com/iamshaunjp/json-server-tutorial/tree/starter-files)
