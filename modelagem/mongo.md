collection alunos

document Raquel =
{
  nome: { primeiro: "Raquel", sobrenome: "Teixeira Cruz" }
  disciplinas
}

one-to-many

publisher Oreilly =
{
  _id: "oreilly",
  name: "O'Reilly Media",
  founded: 1980,
  location: "CA",

  #books: [
    { _id: 123456789, title: "MongoDB: The Definitive Guide" },
    { _id: 234567890, title: "50 Tips and Tricks for MongoDB Developer" }
  ]
}

book "MongoDB: The Definitive Guide" =
{
  _id: 123456789,
  title: "MongoDB: The Definitive Guide",
  author: [ "Kristina Chodorow", "Mike Dirolf" ],
  published_date: ISODate("2010-09-24"),
  pages: 216,
  language: "English",

  #publisher: { _id: "oreilly", name: "O'Reilly Media" }
}

{
  _id: 234567890,
  title: "50 Tips and Tricks for MongoDB Developer",
  author: "Kristina Chodorow",
  published_date: ISODate("2011-05-06"),
  pages: 68,
  language: "English",

  #publisher: { _id: "oreilly", name: "O'Reilly Media" }
}

book-publisher relacoes =
{
  _id: 1,
  publisher: { _id: "oreilly", name: "O'Reilly Media" },
  books: [
    { _id: 123456789, title: "MongoDB: The Definitive Guide" },
    { _id: 234567890, title: "50 Tips and Tricks for MongoDB Developer" }
  ]
}