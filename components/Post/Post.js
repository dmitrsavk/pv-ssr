import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import "moment/locale/ru";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  padding: 15px;
  margin: 0 auto 50px auto;

  @media (min-width: 600px) {
    padding-top: 125px;
  }
`;

const TitleInputWrap = styled.div`
  width: 100%;
  margin: 0 auto 25px auto;

  @media (min-width: 600px) {
    margin-bottom: 50px;
  }
`;

const TextareaWrap = styled.div`
  width: 100%;
  margin: 0 auto 25px auto;
`;

const SubmitButtonWrap = styled.div``;

const TitleInput = styled.input`
  width: 100%;
  margin: 0 auto;
  font-size: 32px;
  font-weight: 500;
  font-family: 'Roboto', Arial, sans-serif;
  border: none;
  outline: none;
`;

const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  height: calc(100vh - 320px);
  margin: 0 auto;
  font-size: 18px;
  border: none;
  outline: none;
  font-family: 'Roboto', Arial, sans-serif;

  @media (min-width: 600px) {
    height: calc(100vh - 500px);
  }
`;

const SubmitButton = styled.button`
  border: none;
  border-radius: 0;
  cursor: pointer;
  font: inherit;
  line-height: inherit;
  outline: none;

  padding: 7px 20px 9px;
  color: #fff;
  background-color: #3498db;

  :hover {
    background-color: #1d78b5;
  }
`;

class Blog extends Component {
  render() {
    return (
      <Wrap>
        <div>
          <Header link={{title: 'Записи', href: '/blog'}}/>
          <Content>
            <TitleInputWrap>
              <TitleInput placeholder="Заголовок" />
            </TitleInputWrap>
            <TextareaWrap>
              <Textarea placeholder="Начните писать новый пост"/>
            </TextareaWrap>
            <SubmitButtonWrap>
              <SubmitButton>
                Сохранить
              </SubmitButton>
            </SubmitButtonWrap>
          </Content>
        </div>
        <Footer />
      </Wrap>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
