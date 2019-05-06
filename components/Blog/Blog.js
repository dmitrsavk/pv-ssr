import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/ru";
import { Parallax } from "react-parallax";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import back from "./main-picture-placeholder.jpg";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const ParallaxContent = styled(Parallax)`
  width: 100%;
  height: 50vh;
  color: #fff;
`;

const NameWrap = styled.div`
  position: relative;
  max-width: 1200px;
  height: 50vh;
  margin: 0 auto;
`;

const Name = styled.div`
  position: absolute;
  bottom: 15px;
  padding: 0 15px;
  font-size: 24px;

  @media (min-width: 600px) {
    bottom: 25px;
    font-size: 36px;
  }
`;

const Records = styled.div``;

class Blog extends Component {
  render() {
    return (
      <Wrap>
        <div>
          <Header link={{title: 'Написать', href: '/post'}}/>
          <Parallax
            bgImage={back}
            strength={300}
            bgWidth="auto"
            bgHeight="100vh"
          >
            <ParallaxContent>
              <NameWrap>
                <Name>{this.props.user.name}</Name>
              </NameWrap>
            </ParallaxContent>
          </Parallax>
        </div>
        <Footer />
      </Wrap>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
