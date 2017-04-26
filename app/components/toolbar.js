import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

export default class Toolbar extends Component {
  render() {
    const { name } = this.props;
    return (
      <Header>
          <Left>
              <Button transparent>
                  <Icon name='arrow-back' />
              </Button>
          </Left>
          <Body>
              <Title>{name}</Title>
          </Body>
          <Right>
              <Button transparent>
                  <Icon name='menu' />
              </Button>
          </Right>
      </Header>
    );
  }
}
