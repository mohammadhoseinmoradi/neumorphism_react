import { useEffect, useState } from "react";
import { CgStyle } from "react-icons/cg";
import MenuComponent from "../components/menu";
import {
  GiPerspectiveDiceSixFacesRandom,
  GiResize,
} from "react-icons/gi";
import logo from "../assets/img/LOGO-WHITE.png";

type GeneratedBlock = {
  id: number;
  images: string[];
  prompt: string;
  style: string;
  size: string;
};

const randomPrompts = [
  "شهر آینده در ایران",
  "فرهنگ سنتی ایرانی با سبک سایبرپانک",
  "بازار تاریخی با سبک مدرن",
  "معماری ایرانی با نورپردازی نئونی",
  "طبیعت ایران در سبک امپرسیونیسم",
];

const styleOptions = ["مدرن", "کلاسیک", "سایبرپانک", "سنتی", "مینیمال", "رئالیسم"];
const sizeOptions = ["1:1", "4:3", "16:9", "9:16", "2:3"];

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [blocks, setBlocks] = useState<GeneratedBlock[]>([]);
  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("مدرن");
  const [selectedSize, setSelectedSize] = useState("16:9");

  const [showStyleModal, setShowStyleModal] = useState(false);
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  const handleGenerate = () => {
    const newBlock: GeneratedBlock = {
      id: Date.now(),
      prompt: prompt || "ایران",
      style: selectedStyle,
      size: selectedSize,
      images: [
        `https://picsum.photos/seed/${Math.random()}/300/200`,
        `https://picsum.photos/seed/${Math.random()}/300/200`,
        `https://picsum.photos/seed/${Math.random()}/300/200`,
        `https://picsum.photos/seed/${Math.random()}/300/200`,
      ],
    };
    setBlocks((prev) => [newBlock, ...prev]);
    setPrompt("");
  };

  const handleRandomPrompt = () => {
    const random = randomPrompts[Math.floor(Math.random() * randomPrompts.length)];
    setPrompt(random);
    setShowImageModal(false);
  };

  useEffect(() => {
    if (blocks.length > 0) {
      setIsVisible(true);
    }
  }, [blocks]);

  return (
    <div className="min-h-screen w-full text-white relative">
      <MenuComponent />

      <div className="w-full flex flex-col items-center justify-center mt-[30px]">
        <div className={`flex flex-col w-full items-center justify-center gap-5 ${isVisible ? "max-h-0 mb-0 overflow-hidden" : ""}`}>
          <img src={logo} className="w-3/5 sm:w-3/12 h-[200px] rounded-2xl transition hover:scale-105" />
          <h1 className="font-bold text-lg sm:text-xl">HONAR AI</h1>
          <h1 className="font-bold text-lg sm:text-xl">دروازه ای برای تلفیق</h1>
          <h1 className="font-bold text-lg sm:text-xl">ذهن خلاق و قدرت هوش مصنوعی</h1>
          <h1 className="font-bold text-lg sm:text-xl">... شروع کن</h1>
        </div>

        <div className={`transition-all duration-500 w-full px-4 mt-2 ${isVisible ? "mb-2" : "max-h-0 overflow-hidden"}`}>
          <div className={`transition-all duration-500 overflow-hidden rounded-2xl ${isVisible ? "w-full h-[calc(85vh-200px)] mb-6 overflow-y-auto scrollbar-hide" : "max-h-0 mb-0"}`}>
            <div className="space-y-6 px-4 py-2 ">
              {blocks.map((block) => (
                <div key={block.id} className="flex flex-col md:flex-row boxShadow p-4 rounded-xl shadow-md gap-4 items-start mt-10">
                  <div className="w-full md:w-1/4 text-right text-sm text-gray-300">
                    <div className="bg-neutral-800 p-3 rounded-lg h-full">
                      <strong>Prompt:</strong>
                      <p className="mt-2 text-white">{block.prompt}</p>
                      <p><strong>Style:</strong> {block.style}</p>
                      <p><strong>Size:</strong> {block.size}</p>
                    </div>
                  </div>
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {block.images.map((img, idx) => (
                      <img key={idx} src={img} className="w-full h-[300px] object-cover rounded-md transition hover:scale-105" alt={`Generated ${idx}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-[30px] left-0 right-0 flex justify-center">
        <div className="flex flex-col sm:flex-row justify-center w-[95%] max-w-4xl bg-neutral-800 p-4 sm:p-6 rounded-2xl shadow-xl">
          <div className="flex-1">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="بنویسید تا جنریت شود ..."
              className="w-full h-24 p-2 rounded-md text-white text-right border border-none focus:outline-none resize-none"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              <button onClick={() => setShowStyleModal(true)} className="flex items-center gap-1 text-xs sm:text-sm bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md">
                <CgStyle size={18} /> style
              </button>
              <button onClick={() => setShowImageModal(true)} className="flex items-center gap-1 text-xs sm:text-sm bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md">
                <GiPerspectiveDiceSixFacesRandom size={18} /> image
              </button>
              <button onClick={() => setShowSizeModal(true)} className="flex items-center gap-1 text-xs sm:text-sm bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md">
                <GiResize size={18} /> size
              </button>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-4">
            <button onClick={handleGenerate} className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-2xl text-lg boxShadow h-[60px]">
              ایجاد
            </button>
          </div>
        </div>
      </div>

      {showStyleModal && (
        <Modal title="انتخاب سبک" onClose={() => setShowStyleModal(false)}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {styleOptions.map((style) => (
              <button key={style} className={`p-3 rounded-xl ${selectedStyle === style ? "bg-blue-500" : "bg-neutral-700"} hover:bg-blue-400`} onClick={() => { setSelectedStyle(style); setShowStyleModal(false); }}>
                {style}
              </button>
            ))}
          </div>
        </Modal>
      )}

      {showSizeModal && (
        <Modal title="نسبت تصویر" onClose={() => setShowSizeModal(false)}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {sizeOptions.map((size) => (
              <button key={size} className={`p-3 rounded-xl ${selectedSize === size ? "bg-blue-500" : "bg-neutral-700"} hover:bg-blue-400`} onClick={() => { setSelectedSize(size); setShowSizeModal(false); }}>
                {size}
              </button>
            ))}
          </div>
        </Modal>
      )}

      {showImageModal && (
        <Modal title="پیشنهاد پرامپت" onClose={() => setShowImageModal(false)}>
          <div className="flex flex-col items-center gap-4">
            <p>یک پرامپت تصادفی برای شما انتخاب می‌شود</p>
            <button onClick={handleRandomPrompt} className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-400">
              تولید پرامپت
            </button>
          </div>
        </Modal>
      )}

      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
  );
};

const Modal = ({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) => (
  <div className="fixed inset-0  flex items-center justify-center z-50 p-4">
    <div className="items p-4 sm:p-6 rounded-xl w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <button onClick={onClose} className="text-white hover:text-red-500">✕</button>
      </div>
      {children}
    </div>
  </div>
);

export default HomePage;
