import {Contacto} from "../types.ts"
import { GraphQLError } from "graphql"
import { ContactoModel,ContactoModelType } from "../DB/contacto.ts"
import { validatePhone } from "../phone_valid.ts"
import { encontrarPais } from "../encontrar_pais.ts"
import { encontrarCapital } from "../encontrar_capital.ts"
import { encontrarHora } from "../encontrarHora.ts"


export const Mutation={
    addContact:async(_:unknown,args:{nombre:string,apellido:string,telefono:string}):Promise<ContactoModelType>=>{
        const{nombre,apellido,telefono}=args;
        const telfvalido=await validatePhone(telefono);
        const pais=await encontrarPais(telefono);
        const capital=await encontrarCapital(pais);
        const hora=await encontrarHora(capital);

        const contacto=new ContactoModel({
            nombre,
            apellido,
            telefono,
            pais, 
            hora              
        });
        await contacto.save();
        return contacto;
    },

    updateContact:async(_:unknown,args:{id:string,nombre:string,apellido:string,telefono:string}):Promise<ContactoModelType>=>{
        const{id,nombre,apellido,telefono}=args;
        const telfvalido=await validatePhone(telefono);
        const pais=await encontrarPais(telefono);
        const capital=await encontrarCapital(pais);
        const hora=await encontrarHora(capital);

        const contacto=await ContactoModel.findByIdAndUpdate(id,
            {nombre,apellido,telefono,pais,hora},
            {new:true}
        );
        if(!contacto){
            throw new GraphQLError("No existe");
        }
        return contacto;


    },
    deleteContact:async(_:unknown,args:{id:string}):Promise<boolean>=>{
        const {id}=args;
        const contacto=await ContactoModel.findOneAndDelete({_id:id});
        if(!contacto){
            throw new GraphQLError("No existe");
        }
        return true;
    }

}
