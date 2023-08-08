"use client";

import BoxLayout from "@/layout/BoxLayout/BoxLayout";
import { useEffect, useState } from "react";
import { IoMail, IoCall } from "react-icons/io5";
import { RiTerminalBoxFill, RiGamepadFill, RiUser4Fill } from "react-icons/ri";

import sidebarStyles from "@/components/Sidebar/Sidebar.module.scss";
import { Dropdown } from "@/components/Dropdown/Dropdown";

import Head from "next/head";
import useCollapse from "react-collapsed";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./About.module.scss";

export default function About() {
  return (
    <>
      <Head>
        <title>Abdulroheem - About</title>
        <meta name="description" content="About Qudusayo" />
      </Head>
      <div>
        <BoxLayout sideBar={<FlexSideBar />} navTitle="personal-info">
          <div className={styles.About}>
            <div className={styles.AboutInfo}>
              <pre className={styles.code}>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>{"/**"}</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>I&apos;m Ayanwumi Abdulroheem (Dev_cody).</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>I&apos;m a Frontend Developer with over 2 years of experience. </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>I currently work as a frontend developer at PAC Holdings LTD.</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>Frontend Development? I know my ways.</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>I know a little about back-end</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>development but where I am proficient</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>the most is Front-end development. </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>Currently, my main area of focus is</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>React Native for mobile development.</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>Besides that, my skills include </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>HTML, CSS, Javascript, React, Next Js, </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>React Native, Firebase, Rest Api, </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>Sanity CMS, Git, GraphQL, Chakra UI,</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>Tailwind CSS and GraphQL.</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>I&apos;m also familiar with tools like Jira, </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>GitHub and Figma</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>Asides programming, I&apos;m also a technical</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>writer, community builder and open-source lover.</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>You can check out my technical contents <a href="https://dev.to/dev_cody" target='_blank' style={{textDecoration: 'underline'}}>here.</a></code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>Lastly, I am open to full-time front-end</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code> dev roles to improve my skills and</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>also solve more complex problems and</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>work on exciting projects</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>*/</code>
                </span>
              </pre>
            </div>
            <div className={styles.AboutCodePreview}></div>
          </div>
        </BoxLayout>
      </div>
    </>
  );
}

const FlexSideBar = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [firstDrawerOpen, setFirstDrawerOpen] = useState(true);
  const [secondDrawerOpen, setSecondDrawerOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 700) {
      setFirstDrawerOpen(false);
      setSecondDrawerOpen(false);
    }
  }, []);

  return (
    <div
      className={[sidebarStyles.SideBar, sidebarStyles.SideBarFlex].join(" ")}
    >
      <div className={sidebarStyles.SideBarFlexLeft}>
        <RiTerminalBoxFill fill="#607B96" size={20} />
        <RiGamepadFill fill="#607B96" size={20} />
        <RiUser4Fill fill="#607B96" size={20} />
      </div>
      <div className={sidebarStyles.SideBarFlexRight}>
        <Sidebar
          contents={[
            {
              title: "personal-info",
              content: [
                <Dropdown
                  key={0}
                  folderFill="#E99287"
                  title="bio"
                  entries={["biography"]}
                  isActive={true}
                />,
                <Dropdown
                  key={1}
                  folderFill="#43D9AD"
                  title="interests"
                  entries={["hobbies"]}
                />,
                <Dropdown
                  key={2}
                  folderFill="#3A49A4"
                  title="education"
                  entries={["high-school", "university"]}
                />,
              ],
            },
            {
              title: "contacts",
              content: [
                <a key={0} href="mailto:ayanwunmiabdulroheem@gmail.com">
                  <IoMail fill="#607b96" />
                  <span>ayanwunmiabdulroheem@gmail.com</span>
                </a>,
                <a key={1} href="tel:+2347016412041">
                  <IoCall fill="#607b96" />
                  <span>+(234)812-7671-686</span>
                </a>,
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};
