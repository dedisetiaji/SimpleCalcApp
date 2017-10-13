import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, 
  TouchableNativeFeedback, TouchableWithoutFeedback, View,TextInput } from 'react-native';

export default class Calc extends Component{
  constructor(props)
  {
    super(props)
    this.state={
      angka:"0",
      hasil:0,
    }
  }
  _angka(val)
  {
    // Alert.alert(this.state.angka)
      if(this.state.angka=="0")
      {
          if(val=="*" || val=="/" || val=="=" || val=="+" || val=="-")
          {
            this.setState({
                angka:"0"
              })
          }
          else
          {
            this.setState({
                angka:val
              })
          }
      }
      else
      {
        this.setState({
          angka:this.state.angka+""+val
        })
      }
    
   
  }
  _hasil()
  {
    this.setState({
        angka:eval(this.state.angka)
    })
  }
  _clear()
  {
    this.setState({
      angka:'0'
    })
  }
  render()
  {
    return(
      <View style={{flex:1}}>
          <Text
            style={{fontSize:50,color:'#fff',backgroundColor:'#000',textAlign:'right'}}
          >
          {this.state.angka}
          </Text>
          <View style={{flexDirection:'row'}}>
              <TouchableNativeFeedback
                onPress={this._clear.bind(this)}
              >
                  <View style={{flex:3,backgroundColor:'#01579b'}}>
                      <Text style={{textAlign:'center',color:'#fff',padding:10,fontSize:30}}> C </Text>
                  </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={()=>this._angka('/')}
              >
                  <View style={{flex:1,backgroundColor:'#002f6c'}}>
                      <Text style={{textAlign:'center',color:'#fff',padding:10,fontSize:30}}> / </Text>
                  </View>
              </TouchableNativeFeedback>
          </View>
          <View style={{flexDirection:'row'}}>
              <TouchableNativeFeedback
                onPress={()=>this._angka(1)}
              >
                  <View style={styles.button}>
                      <Text style={{textAlign:'center',color:'#000',padding:10,fontSize:30}}> 1</Text>
                  </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={()=>this._angka(2)}
              >
                  <View style={styles.button}>
                      <Text style={{textAlign:'center',color:'#000',padding:10,fontSize:30}}> 2</Text>
                  </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
              onPress={()=>this._angka(3)}
              >
                  <View style={styles.button}>
                      <Text style={{textAlign:'center',color:'#000',padding:10,fontSize:30}}> 3</Text>
                  </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
              onPress={()=>this._angka('*')}
              >
                  <View style={{flex:1,backgroundColor:'#002f6c'}}>
                      <Text style={{textAlign:'center',color:'#fff',padding:10,fontSize:30}}> X</Text>
                  </View>
              </TouchableNativeFeedback>
          </View>
          <View style={{flexDirection:'row'}}>
              <TouchableNativeFeedback
              onPress={()=>this._angka(4)}
              >
                  <View style={styles.button}>
                      <Text style={{textAlign:'center',color:'#000',padding:10,fontSize:30}}> 4</Text>
                  </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
              onPress={()=>this._angka(5)}
              >
                  <View style={styles.button}>
                      <Text style={{textAlign:'center',color:'#000',padding:10,fontSize:30}}> 5</Text>
                  </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
              onPress={()=>this._angka(6)}
              >
                  <View style={styles.button}>
                      <Text style={{textAlign:'center',color:'#000',padding:10,fontSize:30}}> 6</Text>
                  </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
              onPress={()=>this._angka('-')}
              >
                  <View style={{flex:1,backgroundColor:'#002f6c'}}>
                      <Text style={{textAlign:'center',color:'#fff',padding:10,fontSize:30}}> -</Text>
                  </View>
              </TouchableNativeFeedback>
          </View>
          <View style={{flexDirection:'row'}}>
              <TouchableNativeFeedback
              onPress={()=>this._angka(7)}
              >
                  <View style={styles.button}>
                      <Text style={{textAlign:'center',color:'#000',padding:10,fontSize:30}}> 7</Text>
                  </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
              onPress={()=>this._angka(8)}
              >
                  <View style={styles.button}>
                      <Text style={{textAlign:'center',color:'#000',padding:10,fontSize:30}}> 8</Text>
                  </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
              onPress={()=>this._angka(9)}
              >
                  <View style={styles.button}>
                      <Text style={{textAlign:'center',color:'#000',padding:10,fontSize:30}}> 9</Text>
                  </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
              onPress={()=>this._angka('+')}
              >
                  <View style={{flex:1,backgroundColor:'#002f6c'}}>
                      <Text style={{textAlign:'center',color:'#fff',padding:10,fontSize:30}}> +</Text>
                  </View>
              </TouchableNativeFeedback>
          </View>
          <View style={{flexDirection:'row'}}>
              <TouchableNativeFeedback
              onPress={()=>this._angka('00')}
              >
                  <View style={styles.button}>
                      <Text style={{textAlign:'center',color:'#000',padding:10,fontSize:30}}> 00</Text>
                  </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
              onPress={()=>this._angka(0)}
              >
                  <View style={styles.button}>
                      <Text style={{textAlign:'center',color:'#000',padding:10,fontSize:30}}> 0</Text>
                  </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
              onPress={()=>this._angka('.')}
              >
                  <View style={styles.button}>
                      <Text style={{textAlign:'center',color:'#000',padding:10,fontSize:30}}> .</Text>
                  </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
              onPress={()=>this._hasil()}
              >
                  <View style={{flex:1,backgroundColor:'#d50000'}}>
                      <Text style={{textAlign:'center',color:'#fff',padding:10,fontSize:30}}> = </Text>
                  </View>
              </TouchableNativeFeedback>
          </View>
      </View>//View AWal
    )

  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection:'row'
  },
  button: {
    flex:1,
    alignSelf: "stretch",
    alignItems: 'center',
    backgroundColor: '#ededed'
  },
  button2: {
    marginBottom: 1,
    alignSelf: "stretch",
    alignItems: 'center',
    backgroundColor: '#01579b'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeReact', () => Calc);