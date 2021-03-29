export const EKLE = "EKLE"
export const TEMİZLE = "TEMİZLE"
export const ISARETLE="ISARETLE"
export const KALDIR ="KALDIR"
export const listeyeEkle=(text)=>{
    return {
        type : EKLE, payload : text
    }
}
export const ListedenKaldır=(id)=>{
    return {
        type : KALDIR , payload :id
    }
}

export const Temizle =()=>{
    return{
        type : TEMİZLE ,payload:""
    }
}