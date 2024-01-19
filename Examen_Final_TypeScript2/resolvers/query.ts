import {Contacto} from "../types.ts"
import { GraphQLError } from "graphql"
import { ContactoModel,ContactoModelType } from "../DB/contacto.ts"


export const Query={

    getContact:async(_:unknown,args:{id:string}):Promise<ContactoModelType>=>{
    const {id}=args;
    try{
            const contacto_db=await ContactoModel.findById(id);
            if(!contacto_db){
                throw new GraphQLError("No existe")
            }
            return contacto_db;
    }catch(e){
        throw new GraphQLError(e);
    }
},

    getContacts:async():Promise<ContactoModelType[]>=>{
    try{
        const contacto_db=await ContactoModel.find();
        return contacto_db;
    }catch(e){
        throw new GraphQLError(e);
    }   
}
}
















