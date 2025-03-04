import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { MdOutlineEmail } from "react-icons/md";
import { AppContext } from "../context/AppContext";
const Login = () => {
  const [state, setState] = useState("Login");
  const {setShowLogin} = useContext(AppContext)
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
        document.body.style.overflow = "unset"
    }
  }, [])
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <Form
        className="relative bg-white !p-10 rounded-xl text-slate-500"
        name="login"
        initialValues={{
          remember: true,
        }}
        style={{
          maxWidth: 500,
        }}
        onFinish={onFinish}
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state === "Login" ? "Đăng nhập" : state}
        </h1>
        <p className="text-sm mb-10">
          Chào mừng trở lại! Vui lòng đăng nhập để tiếp tục
        </p>
        {state !== "Login" && (
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
        )}

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input prefix={<MdOutlineEmail />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="">Forgot password</a>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button className="!mb-3" block type="primary" htmlType="submit">
            {state === "Login" ? "Đăng nhập" : "Đăng ký"}
          </Button>
          Hoặc {" "}
          {state === "Login" ? (
            <a onClick={() => setState("Signup")}>Đăng ký ngay!</a>
          ) : (
            <a onClick={() => setState("Login")}>Đăng nhập!</a>
          )}
        </Form.Item>
        <img onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt=""
          className="absolute top-5 right-5 cursor-pointer"
        />
      </Form>
    </div>
  );
};

export default Login;
