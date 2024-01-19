import { GraphQLError } from "graphql";

export const validatePhone=async(telefono:string):Promise<string>=>{
const url=`https://api.api-ninjas.com/v1/validatephone?number=${telefono}`;
        const data=await fetch(url,{
          headers:{
            'X-Api-Key': 'nyUaq934E+v/f8wd3lGEdQ==Zxh8OOK7GzEP9WAb'
          }
        });
        if(data.status!=200){throw new GraphQLError("No se ha podido validar")}
        const json=await data.json();
        return json.is_valid;
 }


        