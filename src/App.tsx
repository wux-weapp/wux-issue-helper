import * as React from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import { Layout, Button, BackTop } from "antd";
import Intro from "./Intro";
import IssueForm from "./IssueForm";
import LocaleContext, { switchLocale } from "./LocaleContext";
import styles from "./App.module.scss";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const locale = React.useContext(LocaleContext);
  const [localeString, forceUpdateLocale] = React.useState(locale);

  const appLocale = window.appLocale[localeString];
  addLocaleData(appLocale.data);

  return (
    <LocaleContext.Provider>
      <Layout className="layout">
        <Header className={styles.header}>
          <div className={styles.headerContainer}>
            <div className={styles.logo}>
              <img
                alt="logo"
                src="http://cdn.skyvow.cn/logo.png"
              />
              <h1>Issue Helper</h1>
            </div>
            <div className={styles.locale}>
              <Button
                size="small"
                onClick={() => switchLocale(forceUpdateLocale)}
              >
                {localeString === "en" ? "中文" : "English"}
              </Button>
            </div>
          </div>
        </Header>
        <IntlProvider locale={localeString} messages={appLocale.messages}>
          <Content className={styles.content}>
            <Intro />
            <IssueForm locale={localeString} />
          </Content>
        </IntlProvider>
        <Footer style={{ textAlign: "center" }}>
          Inspired by{" "}
          <a
            href="https://new-issue.vuejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vue Issue Helper
          </a>{" "}
          ·{" "}
          <a href="https://github.com/wux-weapp/wux-issue-helper">
            Source Code
          </a>
        </Footer>
        <BackTop />
      </Layout>
    </LocaleContext.Provider>
  );
};

export default App;
