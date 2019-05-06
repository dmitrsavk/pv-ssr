import React, { Component } from "react";
import styled from "styled-components";

import background from "./landing.jpg";
import logo from "./logo_white.svg";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  color: #fff;
`;

const Logo = styled.div`
  width: 400px;
  height: 200px;
  background-image: url(${logo});
  background-size: cover;

  @media (max-width: 600px) {
    width: 200px;
    height: 100px;
  }
`;

const Text = styled.div`
  max-width: 400px;
  font-size: 24px;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const Link = styled.a`
  color: #fff;
  font-weight: 600;
  padding: 10px 15px;
  background-color: #3498db;
  border-radius: 3px;
  width: 170px;
  text-align: center;
  margin-bottom: 10px;
  text-decoration: none;

  :hover {
    background-color: #258cd1;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

const url =
  "https://www.facebook.com/v2.12/dialog/oauth?client_id=159008188111833&redirect_uri=https://privateblog.ru/auth/fb";

const vkUrl = 'https://oauth.vk.com/authorize?client_id=6481883&redirect_uri=https://privateblog.ru/auth/vk&display=popup';

class Landing extends Component {
  render() {
    return (
      <Wrap>
        <Logo />
        <Text>
          Ваш личный онлайн-дневник
        </Text>
        <Link href={url}>Войти через facebook</Link>
        <Link href={vkUrl}>Войти через vk</Link>
      </Wrap>
    );
  }
}

export default Landing;
