import Style from "./Header.module.scss";
import Tabs from "antd/lib/tabs";
const Header = () => {
  const { TabPane } = Tabs;

  return (
    <div className="container">
      <section className={Style.wrap}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </section>
    </div>
  );
};

export default Header;
