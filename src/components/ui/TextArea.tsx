import React from "react";

interface TextAreaProps {
  label: string;
  nama: string;
  register: any;
  errors?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, nama, register, errors }) => (
  <div className="flex flex-col gap-1 mb-4">
    <label className="font-medium text-sm">{label}</label>
    <textarea {...register(nama)} placeholder={label} className="border border-gray-200 p-2 rounded-2xl min-h-25" />
    {errors && <p className="text-red-700 text-xs mt-1">{errors}</p>}
  </div>
);