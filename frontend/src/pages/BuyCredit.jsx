import React, { useContext, useEffect, useState } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { Button, Modal, message } from "antd";
const BuyCredit = () => {
  const { user } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const showModal = (plan) => {
    setSelectedPlan(plan);
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const handleCopyMessage = () => {
    if (selectedPlan) {
      const copyText = `Chào Admin, tôi muốn mua gói ${
        selectedPlan.id
      } với giá ${selectedPlan.price.toLocaleString(
        "vi-VN"
      )} VNĐ VNĐ. Email đăng ký tài khoản của tôi: ${email}`;
      navigator.clipboard
        .writeText(copyText) // Sao chép vào clipboard
        .then(() => {
          message.success("Đã sao chép tin nhắn!"); // Hiển thị thông báo thành công
        })
        .catch(() => {
          message.error("Không thể sao chép, vui lòng thử lại!");
        });
    }
  };
  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10">
      <button className="border border-gray-400 px-10 py-2 mb-6 rounded-full">
        Kế hoạch
      </button>
      <h1 className="text-center text-3xl font-medium mb-6 sm:mb-10">
        Nâng cấp kế hoạch của bạn
      </h1>
      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500"
            >
              <img src={assets.lock_icon} alt="" />
              <p className="mt-3 mb-1 font-semibold">{item.id}</p>
              <p className="text-sm">{item.desc}</p>
              <p className="mt-6">
                <span className="text-3xl font-semibold">
                  {item.price.toLocaleString("vi-VN")} VNĐ
                </span>
                / {item.credits} Tín dụng
              </p>
              <button
                onClick={() => showModal(item)}
                className="w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52 cursor-pointer"
              >
                {user ? "Nâng Cấp" : "Bắt đầu"}
              </button>
            </div>
          );
        })}
      </div>
      <Modal
        title="Mua tín dụng tại đây"
        open={open}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={[
          <Button key="copy" onClick={handleCopyMessage} type="primary">
            Sao chép tin nhắn
          </Button>,
          <Button key="ok" onClick={handleOk}>
            OK
          </Button>,
        ]}
      >
        {selectedPlan && (
          <>
            <p className="text-sm text-gray-500">
              Quét mã QR Zalo liên hệ Admin để mua tín dụng
            </p>
            <div className="mt-6">
              <h2 className="text-center font-medium text-base">
                Nội dung nhắn tin để mua tín dụng
              </h2>
              <p className="text-sm text-gray-700 font-medium">
                Email đăng ký tài khoản: {email} <br />
                {`Chào Admin, tôi muốn mua gói ${
                  selectedPlan.id
                } với giá ${selectedPlan.price.toLocaleString(
                  "vi-VN"
                )} VNĐ VNĐ. Email đăng ký tài khoản của tôi: ${email}`}
              </p>
            </div>
            <h1 className="text-red-600 text-xl font-medium text-center mt-3">
              Lưu ý:
            </h1>
            <p className="text-sm text-gray-600 font-medium">
              Coppy đầy đủ nội dung tin nhắn để nạp tín dụng <br /> Chờ nhân
              viên phản hồi hướng dẫn nạp tiền và nhận tín dụng
            </p>

            <img
              className="mt-4 h-[500px] w-full rounded-4xl"
              src={assets.qr_code}
              alt=""
            />
          </>
        )}
      </Modal>
    </div>
  );
};

export default BuyCredit;
