
// vamos fazer uma referencia a classe date
let tempo = new Date()
console.log(tempo.getDay())
console.log(tempo.getDate())
console.log(tempo.getMonth())
switch(tempo.getDay()){
    case 0:
        console.log("domingo")
        break
        case 1:
            console.log("segunda")
            break
            case 2:
                console.log("terça")
                break
                case 3:
                    console.log("quarta")
                    break
                    case 4:
                        console.log("quinta")
                        break
                        case 5: 
                        console.log("sexta")
                        break
                    default:
                        console.log("sabado")
                        break
}