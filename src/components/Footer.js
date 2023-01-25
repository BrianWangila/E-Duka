import { Divider, Typography } from "antd";
import React from "react";

const Footer = () => {
  return (
    <div className="appFooter">
      <Typography.Title
        level={5}
        style={{ color: "white", textAlign: "center" }}
      >
        © 2023 All Rights Reserved
      </Typography.Title>

      <Typography.Text style={{ color: "white", textAlign: "center" }}>
        <a href="" target="_blank" rel="noreferrer">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="" target="_blank" rel="noreferrer">
          Terms of Service
        </a>
      </Typography.Text>
    </div>
  );
};

export default Footer;
