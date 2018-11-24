
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions
} from 'react-native';

var { height } = Dimensions.get('window');
 
var box_count = 3;
var box_height = height / box_count;

export default class InicioConductor extends Component{

  constructor(props) {
    super(props);
     this.state = {
      usuario: this.props.navigation.state.params.usuario,
    }
    //console.log(this.props);
  }

   rutaCliente = () => {
     const navigateAction = NavigationActions.navigate({
        routeName: 'PedidoCliente',
        params: {usuario: this.state.usuario}
      });
      this.props.navigation.dispatch(navigateAction);

     }

    pedidoEnProceso = () => {
     const navigateAction = NavigationActions.navigate({
        routeName: 'PedidoEnProceso'
      });
      this.props.navigation.dispatch(navigateAction);

     }



    render(){
        return(
            <View style={styles.container}>
               <View style={styles.textCont}>
                  <Image
                  style={{width: 90, height: 90}}
                  source={{uri: 'https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png'}}
                  />
                 <Text style={{fontSize: 15,color: '#ffffff'}}>Nombre</Text>
                 <Text style={{fontSize: 15,color: '#ffffff'}}>Email</Text>
               </View>
             
              <View style={styles.textCont1}>
              <Text style={styles.titulo}>MyTurista</Text>
                <TouchableOpacity style={styles.button} onPress={this.rutaCliente}>
                 <Text style={styles.buttonText}>Pedido Pendiente</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                 <Text style={styles.buttonText}>Historial</Text>
                </TouchableOpacity>
                </View>

               <View style={styles.textCont2}>
                 <Text style={{fontSize: 20, color: '#ffffff'}}> Cerrar Sesion</Text>
               </View>
            </View>
        )
    } 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  titulo: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical:25,
  },
  textCont: {
    flex: 4,
    height: box_height,
    backgroundColor: '#000000',
    alignItems:'center',
    justifyContent: 'center',
  },
  textCont1: {
    flex: 13,
    height: box_height,
    backgroundColor: '#F4F5F9',
    alignItems:'center',
    justifyContent: 'center',
  },
  textCont2: {
    flex: 2,
    height: box_height,
    backgroundColor: '#000000',
    alignItems:'center',
    justifyContent: 'center',
  },
  button: {
    width: 250,
    backgroundColor: '#000000',
    borderRadius: 25,
    paddingHorizontal:16,
    marginVertical:10,
    paddingVertical:12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
});
