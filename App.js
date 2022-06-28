import React, {useState,useEffect}
 from "react"; 
import { View,StyleSheet,Image, TouchableOpacity, Alert} from "react-native";
import Torch from "react-native-torch";
import RNShake from 'react-native-shake'

 const App = () =>{
  //-------------------------------------------------------------//
  //        responsavel por guardar e Atualizar o valor         //
  //-----------------------------------------------------------//
  const [toggle, setToggle]=useState(false);
useEffect(()=>{
  //liga flash do celular
 Torch.switchState(toggle)
  console.log("Trocou o estado da flash")
},[toggle]);

useEffect(()=>{
    const subscription = RNShake.addListener(()=>{
      setToggle(oldToggle => !oldToggle)
  })
  //Quando função vai ser chamada quando o componete
  //for ser desmontado
  
  return() => subscription.remove();
},[]);

  //---------------------------------------//
  // Função responsavél por alterar o valor//
  // do state (toogle)                    //
  //-------------------------------------//
  const handChangeTogle = () => setToggle(oldToggle => !oldToggle)

  return (

    <View style={toggle ? style.containerLight : style.container}>

          <TouchableOpacity onPress={handChangeTogle}>

            <Image style={style.lightingOn} source={toggle ? require('./assets/icons/lightOn.png') :
                require('./assets/icons/lightOff.png')}/>

           <Image style={style.lightingOn} source={toggle ? require('./assets/icons/diome.png') :
              require('./assets/icons/diome2.png')}/>

         </TouchableOpacity>
    </View>
  );
 }

 export default App;

//---------------------------//
//          Estilos         //
//-------------------------//

 const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems:'center',
    justifyContent:'center',
  },
  containerLight:{
    flex: 1,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center',
  },
  lightingOn:{
    resizeMode:'contain',
    alignSelf:'center',
    width:150,
    height: 150,
  },
 });