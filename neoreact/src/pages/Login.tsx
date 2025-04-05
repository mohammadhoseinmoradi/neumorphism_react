import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import honarAiLogoWhite from "../assets/img/LOGO-WHITE.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(120);
  const [canResend, setCanResend] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("info");
  const navigate = useNavigate();
  const validatePhone = (phoneNumber: string) => /^09\d{9}$/.test(phoneNumber);

  const   handleSubmitPhone = () => {
    if (validatePhone(phone)) {
      setIsValid(true);
      setStep(2);
      setTimer(120);
      setCanResend(false);
    } else {
      setIsValid(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/\d/.test(value) && value !== "") return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    } else if (!value && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleSubmitOtp = () => {
    if (otp.join("") === "111111") {
      setMessage("ورود موفقیت‌آمیز بود! 🎉");
      setMessageType("success");
      navigate("/")
    } else {
      setMessage("کد وارد شده معتبر نیست. لطفاً دوباره امتحان کنید.");
      setMessageType("error");
    }
    setTimeout(() => setMessage(""), 3000);
  };

  useEffect(() => {
    if (step === 2 && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setCanResend(true);
    }
  }, [timer, step]);

  return (
    
    <div className="flex flex-col items-center justify-start  min-h-screen relative">
        <div>
     <div className="wave"></div>
     <div className="wave"></div>
     <div className="wave"></div>
  </div>
      {message && (
        <div className={`absolute top-5 left-1/2 transform -translate-x-1/2 p-3 rounded-md shadow-lg transition-opacity animate-fadeIn ${
          messageType === "success" ? "bg-blue-500 text-white" :
          messageType === "error" ? "bg-red-500 text-white" : "bg-yellow-500 text-black"
        }`}>
          {message}
        </div>
      )}
      {step === 1 && (
             <><motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" rounded-2xl   border-none"
        >
          <div className="ml-25 mb-10 mt-10">
          <img src={honarAiLogoWhite} className="w-40 h-40"></img>
          </div>
<h1 className="mb-5  text-3xl text-white mb-10">خوش آمدید HONAR AI به </h1>
<div className="flex flex-col items-center p-6  rounded-2xl items justify-center text-white ">
            <h2 className="mb-5 text-3xl">ورود / ثبت نام</h2>
            <p className="mb-5 text-l"> : لطفاً شماره تماس خود را وارد کنید</p>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`p-3 outline-none rounded-md w-64 text-center items  text-white ${isValid ? "border-none" : "border-red-500"}`}
              placeholder="شماره تماس" />
            {!isValid && <p className="text-red-500 text-sm mt-2">شماره تماس معتبر نیست!</p>}
            <button onClick={handleSubmitPhone} className="mt-18 bg-blue-500 text-white p-2 rounded-md buttonLoginSubmit ">ادامه</button>
          </div>

        </motion.div></>
      )}

      {step === 2 && (
        <><motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" rounded-2xl   border-none"
        >
                    <div className="ml-22 mb-10 mt-10">
                      <img src={honarAiLogoWhite} className="w-40 h-40"></img>
          </div>
<h1 className="mb-5  text-3xl text-white mb-10">خوش آمدید HONAR AI به </h1>
<div className="flex flex-col items-center p-6  rounded-2xl items justify-center text-white">
            <h2 className="mb-5  text-2xl">کد تأیید را وارد کنید</h2>
            <p className="mb-2"> : کد 6 رقمی ارسال شده به شماره </p>
            <p className="mb-2"> {phone} </p>
            <p className="mb-5"> را وارد کنید  </p>
            <div className="flex space-x-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  maxLength={1}
                  className="p-3 outline-none w-10 text-center text-xl border-none items  rounded-md " />
              ))}
            </div>
            <button onClick={handleSubmitOtp} className="mt-10 bg-blue-500 text-white p-2 rounded-md boxShadow w-60 h-15">تأیید</button>
            <button onClick={() => setStep(1)} className="mt-5 text-blue-500">ویرایش شماره</button>
            <p className="mt-3">⏳ زمان باقی‌مانده: {timer} ثانیه</p>
            {canResend && (
              <button onClick={() => setTimer(120)} className="mt-5 boxShadow text-white p-2 rounded-md w-50">ارسال مجدد کد</button>
            )}
          </div>
        </motion.div></>
      )}
    </div>
  );
};

export default Login;