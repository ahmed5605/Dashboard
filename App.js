import React, { Component } from 'react'
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

class App extends Component {

  
  constructor (props) {
    super(props)
    this.state = {
        data: []
    };
  }


  componentDidMount(){
      fetch('http://65.1.107.179:8000/get-dummy-dashboard-data/')
      .then(response => response.json())
      .then(result => {
          this.setState({data: result})
          //console.log("result"+ JSON.stringify(result))
          console.log("data: "+  JSON.stringify(this.state.data))

      })
      .catch(e => {
          console.log(e);
      });
  }

   _renderData(){
      const data = this.state.data
      
      return Object.keys(this.state.data).map((obj, i) => {
        if(obj === 'data'){
          return (
              <View style={styles.container} >
                  <View style={styles.containerStyle} >
                      <View style={{marginLeft: 10,marginBottom: 20}} >
                        <Text style={styles.fontStyle} >Hello {data[obj].first_name} {data[obj].middle_name} {data[obj].last_name}, </Text>
                        <Text style={styles.fontStyle} >You have earned Rs {data[obj].balance_details.monthly_salary_in_paisa/100} this month from the company {data[obj].company_name}.  </Text>
                        <Text style={styles.fontStyle} >You can withdraw Rs {data[obj].balance_details.available_balance_in_paisa/100}. </Text>
                      </View>
                  </View>

                  <View style={styles.containerStyle} >
                      <View style={{ margin: 10, marginTop: 20 }} >
                          <Text  style={{fontSize: 24}} >Enter Amount (RS)</Text>

                          <TextInput
                            style={styles.textInput}
                            underlineColorAndroid={'black'}
                            placeholder="Enter amount"
                          />

                          <View  style={styles.amountContainer} >
                              <Text  style={styles.font}>25%</Text>
                              <Text style={styles.font}>50%</Text>
                              <Text style={styles.font}>75%</Text>
                              <Text style={styles.font}>100%</Text>
                          </View>

                          <View style={styles.buttonContainer} >
                              <TouchableOpacity style={styles.withdrawBtn} >
                                  <Text  style={styles.font} >Withdraw</Text>
                              </TouchableOpacity>
                          </View>
                      </View>
                  </View>
              </View>
            )
        }   
      })
  }
                                     
  render() {
    return (
      <View>
          {this._renderData()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white', 
    marginTop: 30
  },
  font: {
    fontSize: 22,
  },
  fontStyle: {
    fontSize: 24, 
    marginTop: 20
  },
  amountContainer: {
    flexDirection: 'row', 
    marginTop: 20, 
    marginBottom: 20, 
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textInput: {
    fontSize: 20, 
    marginTop: 20
  },
  buttonContainer: {
    marginTop: 20, 
    marginBottom: 20, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  withdrawBtn: {
    borderColor: '#000', 
    borderWidth:1,
    borderRadius: 4, 
    height: 50, 
    width: 240, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  containerStyle: {
		borderWidth:  1,
		borderRadius: 2,
		borderColor: '#fff',
		borderBottomWidth: 1.8,
		shadowColor: '#000',
		shadowOffset: {width:0, height: 2},
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 6,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    backgroundColor: '#fff',
    marginTop: 30, 
    marginBottom: 20
  },
});

export default App
