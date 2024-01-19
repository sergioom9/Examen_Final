// The GraphQL schema -> El esquema de grapgh ql es un string ; para que salgan colores -> #graphql

// Se define TODO lo que ofrece la  API

export const typeDefs = `#graphql
  
  type Contacto {
    id:ID!
    nombre:String!
    apellido:String!
    telefono:String!
    pais:String
    hora:String
  }

  type Query {
    getContact(id:ID!):Contacto!
    getContacts:[Contacto!]!
  }
  


  type Mutation {
    deleteContact(id:ID!):Boolean!
    updateContact(id:ID!,nombre:String,apellido:String,telefono:String):Contacto!
    addContact(nombre:String!,apellido:String!,telefono:String!):Contacto!
  }
`;