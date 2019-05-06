import React from "react";
import styled from "styled-components";
import NextLink from "next/link";

import logo from "./logo-cut.svg";

const Wrap = styled.div`
  background-color: #f5f7f8;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  padding: 15px;
  margin: 0 auto;
`;

const Logo = styled.div`
  width: 119px;
  height: 23px;
  background-image: url(${logo});
  background-size: cover;
`;

const Link = styled.a`
  color: #3498db;
  text-decoration: none;
  margin-right: 20px;
  cursor: pointer;

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

export default ({ link: { title, href } }) => {
  return (
    <Wrap>
      <Content>
        <Logo />
        <div>
          <NextLink href={href}>
            <Link>{title}</Link>
          </NextLink>
          <NextLink href="/user/logout">
            <Link>Выйти</Link>
          </NextLink>
        </div>
      </Content>
    </Wrap>
  );
};
