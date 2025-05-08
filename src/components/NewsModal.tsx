import React from "react";

interface NewsModalProps {
  title: string;
  date: string;
  content: string;
  image: string;
  onClose: () => void;
}

const NewsModal: React.FC<NewsModalProps> = ({ title, date, content, image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg p-6 max-w-2xl w-full shadow-lg">
        {/* Botão de Fechar */}
        <button
          className="absolute top-3 right-3 bg-gray-300 hover:bg-gray-400 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Conteúdo do Modal */}
        <img src={image} alt={title} className="w-full h-52 object-cover rounded-md mb-4" />
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-500 text-sm">{date}</p>
        <p className="mt-4 text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default NewsModal;
