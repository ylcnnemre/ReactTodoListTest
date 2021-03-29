import "./App.css"
import {connect} from "react-redux"
import {listeyeEkle,ListedenKaldır,Temizle} from "./actions/index"
import { useState } from "react"
function App(props) {
  const [text,setText]=useState("")
 
  function change(event)
  {
     setText(event.target.value)
  }
  return (
    <div className="App">
      <div className="container">
        <div className="content">
           <h1> Yapılacaklar Listesi  </h1>
            <div className="add-form">
                <input type="text" placeholder="Listeye Ekle" value={text}  onChange={(e)=>{change(e)}}/>
                <button onClick={()=>{props.listeyeEkle(text)}}>Ekle</button>
            </div>
             <h5>Alışveriş Yap</h5>
             <div className="list">
            {
              props.liste.map(item=>(
                <div className="as" key={item.id}>
                  <span>
                  {
                    item.baslik
                  } 
                  </span>
                
                  <a onClick={()=>{props.ListedenKaldır(item.id)}}>Kaldır</a>
                </div>
                
              ))
            }
            
         </div>
         <button className="temizle" onClick={()=>{props.Temizle()}}>
        Tamamlananları Temizle
      </button>
        </div>
       
      </div>
      
    </div>
  );
}

const mapStateToProps=state=>{
  return {
    liste: state.liste
  }
}


export default  connect(mapStateToProps,{listeyeEkle,ListedenKaldır,Temizle})(App);
