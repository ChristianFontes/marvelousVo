import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import App from './app/containers/app';

export default class marvelousVo extends Component {
  render() {
    return (
      <Container>
          <Header>
              <Left>
                  <Button transparent>
                      <Icon name='arrow-back' />
                  </Button>
              </Left>
              <Body>
                  <Title>Header</Title>
              </Body>
              <Right>
                  <Button transparent>
                      <Icon name='menu' />
                  </Button>
              </Right>
          </Header>
      </Container>
    );
  }
}

AppRegistry.registerComponent('marvelousVo', () => App);
