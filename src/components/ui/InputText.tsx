import React from "react";

interface InputTextProps {
    label: string;
    nama: string;
    type?: "text" | "email"; 
    register: any;
    errors?: string;
}

const InputText: React.FC<InputTextProps> = ({ 
    label, 
    nama, 
    type = "text", 
    register, 
    errors,
 }) => {
    return (
        <div className="flex flex-col gap-1 mb-4">
            <label className="font-medium text-sm" htmlFor={nama}>{label}</label>
            <input 
                type={type} 
                {...register(nama)} 
                placeholder={label}
                className={`border p-2 rounded-2xl focus:outline-none focus:ring-2 ${
                    errors ? "border-red-700 focus:ring-red-200" : "border-gray-200 focus:ring-red-900"
                }`}
            />
            {errors && <p className="text-red-700 text-xs mt-1">{errors}</p>}
        </div>
    );
};
export default InputText;