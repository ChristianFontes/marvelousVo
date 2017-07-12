import React, { Component } from 'react';
import { Button, Icon, Text } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { authByGoogle } from '../firebase/auth';
import { GoogleSignin } from 'react-native-google-signin';

const styles = StyleSheet.create({
  botton: {
    marginTop: 10,
    alignItems:'center',
    paddingLeft: 15,
    paddingRight: 15
  }
});

export default class ButtonNetwork extends Component {
    componentWillMount() {
      this._setupGoogleSignin();
    }
    
    async _setupGoogleSignin() {
      try {
        await GoogleSignin.hasPlayServices({ autoResolve: true });
        await GoogleSignin.configure({
          webClientId: '615670358203-bs16lansc40713koei4obvt9cdmh4blq.apps.googleusercontent.com',
          offlineAccess: true,
          forceConsentPrompt: true
        });

        const user = await GoogleSignin.currentUserAsync();
        console.log(user);
      }
      catch(err) {
        console.log("Play services error", err.code, err.message);
      }
    }

    _buttonRender(network, icon, color) {
      if (color == 'info') {
        return(
          <Button block iconLeft info style={styles.button}>
              <Icon name={icon} />
              <Text>{network}</Text>
          </Button>
        )
      }else if (color == 'danger') {
        return(
          <Button block iconLeft danger onPress={() => authByGoogle()}>
              <Icon name={icon} />
              <Text>{network}</Text>
          </Button>
        )
      }else {
        return(
          <Button block iconLeft>
              <Icon name={icon} />
              <Text>{network}</Text>
          </Button>
        )
      }
    }
    render() {
      const { network, icon, color } = this.props;
        return (
          <View style={styles.botton}>
              { this._buttonRender(network, icon, color) }
          </View>
        );
    }
}
