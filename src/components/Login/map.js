import React from "react";
import { Icon } from "antd";
import styles from "./index.less";

export default {
  UserName: {
    props: {
      size: "large",
      id: "userName",
      prefix: <Icon type="user" className={styles.prefixIcon} />,
      placeholder: "admin"
    },
    rules: [
      {
        required: true,
        message: "请输入用户名"
      }
    ]
  },
  Password: {
    props: {
      size: "large",
      prefix: <Icon type="lock" className={styles.prefixIcon} />,
      type: "password",
      id: "password",
      placeholder: "888888"
    },
    rules: [
      {
        required: true,
        message: "请输入密码!"
      }
    ]
  },
  Mobile: {
    props: {
      size: "large",
      prefix: <Icon type="mobile" className={styles.prefixIcon} />,
      placeholder: "mobile number"
    },
    rules: [
      {
        required: true,
        message: "请输入正确的手机!"
      },
      {
        pattern: /^1\d{10}$/,
        message: "验证码错误!"
      }
    ]
  },
  Captcha: {
    props: {
      size: "large",
      prefix: <Icon type="mail" className={styles.prefixIcon} />,
      placeholder: "captcha"
    },
    rules: [
      {
        required: true,
        message: "请输入验证码!"
      }
    ]
  }
};
