import React from "react";

interface SelectProps {
  label: string;
  nama: string;
  register: any;
  errors?: string;
  options: { label: string; value: string }[];
}

export const SelectInput: React.FC<SelectProps> = ({ label, nama, register, errors, options }) => (
  <div className="flex flex-col gap-1 mb-4">
    <label className="font-medium text-sm">{label}</label>
    <select {...register(nama)} className="border border-gray-200 p-2 rounded-2xl focus:ring-2 focus:ring-red-900">
      <option value="">Pilih {label}...</option>
      {options.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
    </select>
    {errors && <p className="text-red-700 text-xs mt-1">{errors}</p>}
  </div>
);