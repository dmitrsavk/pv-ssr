import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  background-color: #f5f7f8;
`;

const Content = styled.div`
  color: #3498db;
  text-align: center;
  background-color: #f5f7f8;
  max-width: 1200px;
  padding: 25px;
  margin: 0 auto;

  @media (min-width: 600px) {
    text-align: left;
  }
`;

const Link = styled.a`
  color: #3498db;
  text-decoration: none;

  :hover {
    color: #1d78b5;
  }

  :active,
  :visited {
    color: #3498db;
  }

  :last-child {
    margin-right: 0;
  }
`;

export default () => (
  <Wrap>
    <Content>
      <Link href="mailto:support@privateblog.ru">support@privateblog.ru</Link>
    </Content>
  </Wrap>
);
