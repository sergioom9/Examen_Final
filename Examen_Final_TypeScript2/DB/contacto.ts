import mongoose from "mongoose";
import { Contacto } from "../types.ts";

const Schema = mongoose.Schema;
const ContactoSchema=new Schema({
    nombre:{type:String,required:true},
    apellido:{type:String,required:true},
    telefono:{type:String,required:true,unique:true},
    pais:{type:String,required:false},
    hora:{type:String,required:false}
},
{timestamps:true}
);

export type ContactoModelType=mongoose.Document&Omit<Contacto,"id">;
export const ContactoModel=mongoose.model<ContactoModelType>(
    "Contacto",ContactoSchema
)






