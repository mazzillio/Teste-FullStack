import { INotes } from "../InterFaces/Notas"

interface INotesParams{
    money:number
    value:number
}

function changeNotes(value:number):INotes {
    const result:INotes={note1:0,note10:0,note100:0}

    result.note100=Math.floor(value/100)
    value %=100
    result.note10=Math.floor(value/10)
    value %=10
    result.note1=value

    return result
}

export class NotasService{

    execute({money,value}:INotesParams){

        const changeAmount = money-value
        
        return changeNotes(changeAmount)        
    }

}

