import Head from "next/head";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { FiTool, FiSun, FiMoon, FiPlus } from "react-icons/fi";
import { ThemeContext, DefaultTheme } from "styled-components";
// import ReactTooltip from "react-tooltip";
// import axios from "axios";

import Table from "../components/Table";
// import Tooltip from "../components/Tooltips";
import Modal, { ModalHandles } from "../components/Modal";

import {
  Wrapper,
  Container,
  Header,
  LogoWrapper,
  TextWraper,
  Title,
  Subtitle,
  LeftSide,
  RightSide,
  ToggleTheme,
  Add,
} from "../styles/pages/home";
import { GetServerSideProps } from "next";
import indexTools from "../utils/indexTools";
import Tooltips from './../components/Tooltips/index';
interface Tool {
  _id: string;
  name: string;
  description: string;
  link: string;
}

export default function Home({ toggleTheme, tools: storegedTools } : any) {
  const [tools, setTools] = useState<Array<Tool>>(storegedTools);

  const theme = useContext(ThemeContext);
  const modalRef = useRef<ModalHandles>(null);
  

  useEffect(() => {
    rebuild();
  });

  const openModal = useCallback(() => {
    modalRef.current?.openModal();
  }, []);

  const openEditModal = useCallback((tool: Tool) => {
    modalRef.current?.openEditModal(tool);
  }, []);

  return (
    <div>
      <Head>
        <title>Next Crud - Dev tools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <Container>
          <Header>
            <LeftSide>
              <TextWraper>
                <Title>
                  <LogoWrapper>
                    <FiTool color="#fff" size={18} />
                  </LogoWrapper>
                  Students
                </Title>
                <Subtitle>
                  Students list app
                </Subtitle>
              </TextWraper>
            </LeftSide>

            <RightSide>
              <ToggleTheme
                onClick={toggleTheme}
                data-tip
                data-for="toggleTheme"
              >
                {
  // theme && theme.title === "light" ? (
  //   <FiSun size={28} color={theme.colors.secondary} />
  // ) : (
  //   <FiMoon size={28} color={theme.colors.secondary} />
  // )
}
              </ToggleTheme>
              <Add onClick={openModal} data-tip data-for="add">
                <FiPlus size={36} color="fff" />
              </Add>
            </RightSide>
          </Header>
          <Table
            tools={tools}
            openEditModal={openEditModal}
            setTools={setTools}
          />
        </Container>
      </Wrapper>

      <Tooltips />
      <Modal tools={tools} setTools={setTools} ref={modalRef} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const tools = await (await indexTools()).map((tool: { _id: { toString: () => any; }; createdAt: { toString: () => any; }; }) => {
    return {
      ...tool,
      _id: tool._id.toString(),
      createdAt: tool.createdAt.toString(),
    };
  });

  return {
    props: {
      tools,
    },
  };
};
function rebuild() {
  throw new Error("Function not implemented.");
}

