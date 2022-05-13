# ENCURTADOR DE URL COM TYPESCRIPT E MONGODB

Projeto criado em um curso da dio de como criar um encurtador de URL.

## Como funciona

Envia um Json para a API
```json
{
    "originURL": "https://www.google.com/"
}
```

Recebe como resposta um segundo json
```json
{
    "_id": "627e09590ffb7a83125bb235",
    "hash": "dDLNDILPf",
    "originURL": "https://www.google.com/",
    "shortUrl": "http://localhost:5000/dDLNDILPf",
    "__v": 0
}
```
