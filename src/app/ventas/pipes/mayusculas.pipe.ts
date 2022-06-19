import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    transform(nombre: string, enMayusculas?: boolean): string{ // el método que se va a llamar cuando se utilize el pipe

        if(enMayusculas){
            return nombre.toUpperCase();
        }else{
            return nombre.toLowerCase();
        }
    }

}