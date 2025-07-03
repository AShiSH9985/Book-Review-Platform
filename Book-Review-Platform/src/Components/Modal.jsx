import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const Modal = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg p-4 backdrop-blur-md bg-white bg-opacity-100 rounded-xl z-50 shadow-lg flex flex-col items-start justify-start">
      <button onClick={onClose} className="self-end">
        <X />
      </button>

      <div className="w-full my-2">
        <input
          type="text"
          className="h-10 w-full p-2 border-2 rounded"
          placeholder="Search"
        />
      </div>

      <div className="w-full h-16 mb-4 flex items-center justify-center border-b-2">
        <h1 className="text-gray-500 text-sm text-center">
          Search for products, services, brands and categories
        </h1>
      </div>

      <div className="w-full flex flex-row justify-between">
        <div className="w-1/2 pl-4 pb-2 flex flex-col space-y-1">
          <Link to="">Ramayana</Link>
          <Link to="">Mahabharat</Link>
        </div>

        <div className="w-1/2 pl-4 pb-2 flex flex-col space-y-1">
          <Link to="">Math</Link>
          <Link to="">English</Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
