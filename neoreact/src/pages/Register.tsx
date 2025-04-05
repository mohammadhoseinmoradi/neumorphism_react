import React, { useState } from "react";
import { motion } from "framer-motion"; // انیمیشن برای شکل‌های بهتر
import { Link } from "react-router-dom"; // استفاده از React Router برای هدایت به صفحه لاگین
import imageRegister from '../assets/4040.png'

const Register = () => {
  const [username, setUsername] = useState(""); // نام کاربری
  const [email, setEmail] = useState(""); // ایمیل
  const [phone, setPhone] = useState(""); // شماره همراه
  const [password, setPassword] = useState(""); // رمز عبور
  const [confirmPassword, setConfirmPassword] = useState(""); // تکرار رمز عبور

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // چک کردن مطابقت رمز عبورها
    if (password !== confirmPassword) {
      alert("رمز عبورها باید مطابقت داشته باشند!");
      return;
    }

    // چک کردن فرمت شماره تلفن (برای مثال، فقط اعداد و طول مشخص)
    const phoneRegex = /^[0-9]{10}$/; // فرض می‌کنیم که شماره همراه باید 10 رقمی باشد
    if (!phoneRegex.test(phone)) {
      alert("لطفاً شماره همراه صحیح وارد کنید.");
      return;
    }

    console.log("ثبت‌نام با نام کاربری:", username, "ایمیل:", email, "و شماره همراه:", phone);
    // اینجا می‌توانید درخواست ثبت‌نام خود را ارسال کنید
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
 
    </div>
  );
};




export default Register;
