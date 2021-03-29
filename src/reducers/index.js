import {EKLE, KALDIR, TEMİZLE} from "../actions/index"

const İnitial_State={
    liste : [
        {
            id:1,baslik : "Alışveriş Yap" , tamamlandı : false
        },
        {
            id:2 , baslik : "Fature Öde" , tamamlandı : true
        }
    ]
  
}

export const reducer = (state=İnitial_State,action)=>{
    switch (action.type) {
        case EKLE:
            
            return {...state,liste:[...state.liste,{
                id : state.liste.length+1,
                baslik : action.payload,
                tamamlandı : false
            }]}
        case KALDIR :
            
            return {...state,liste:state.liste.filter((val)=>action.payload!=val.id)}

        case TEMİZLE:
            console.log("asdadasd")
            
            return {...state,liste:state.liste.splice(0,0)}
        default:
            return state;
    }
   
};