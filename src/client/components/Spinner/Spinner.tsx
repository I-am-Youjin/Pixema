import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Icon from "@ant-design/icons";
import { ReactComponet as SpinerSvg } from "../../../svg/Spinner.svg";

const icon = <Icon component={SpinerSvg} />;
const Spinner = () => {
  return (
    <div>
      <Spin indicator={icon}></Spin>
    </div>
  );
};

export default Spinner;
