import { Typography } from "antd";
import React from "react";

const Footer = () => {
  return (
    <div className="appFooter">
      <div className="footer-links">
        <Typography.Link>Privacy Policy</Typography.Link>
        <Typography.Link>Terms of Service</Typography.Link>
        <Typography.Link>Support</Typography.Link>
      </div>

      <Typography.Text>© 2023</Typography.Text>
    </div>
  );
};

export default Footer;
