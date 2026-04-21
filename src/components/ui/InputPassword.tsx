import React, { useState } from "react";

interface InputPasswordProps {
  label: string;
  nama: string;
  register: any;
  errors?: string;
}

const InputPassword: React.FC<InputPasswordProps> = ({ label, nama, register, errors }) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-1 mb-4">
      <label className="font-medium text-sm">{label}</label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          {...register(nama)}
          placeholder="Masukkan password"
          className={`border rounded-2xl px-3 py-2 w-full pr-12 focus:outline-none focus:ring-2 ${
            errors ? "border-red-700 focus:ring-red-200" : "border-gray-300 focus:ring-blue-500"
          }`}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-2.5 text-sm text-gray-500 hover:text-blue-600"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
      {errors && <p className="text-red-700 text-xs mt-1">{errors}</p>}
    </div>
  );
};

export default InputPassword;