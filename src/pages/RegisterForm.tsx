import { useForm } from "react-hook-form";
import { useState } from "react"; 
import InputText from "../components/ui/InputText";
import InputPassword from "../components/ui/InputPassword";
import { SelectInput } from "../components/ui/SelectInput"; 
import { TextArea } from "../components/ui/TextArea"; 
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/tombol";

const schema = z.object({
    nama: z.string().min(1, { message: "Nama wajib diisi" }),
    email: z.string().email({ message: "Format email tidak valid" }),
    password: z.string().min(8, { message: "Password minimal 8 karakter" }),
    password_confirm: z.string().min(1, { message: "Konfirmasi password wajib diisi" }),
    category: z.string().min(1, { message: "Pilih kategori event" }),
    bio: z.string().min(10, { message: "Bio minimal 10 karakter" }),
}).refine((data) => data.password === data.password_confirm, {
    message: "Password tidak cocok",
    path: ["password_confirm"], // error muncul di field konfirmasi
});

type formData = z.infer<typeof schema>;

export default function RegisterForm() {
    const [isLoading, setIsLoading] = useState(false); // simulasi loading

    const {
        register, 
        handleSubmit, 
        formState: {errors}, 
    } = useForm<formData>({ resolver: zodResolver(schema) });

    const onSubmit = async (data: formData) => {
        setIsLoading(true);
        // simulasi async sesuai tugas point
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Data Berhasil Disimpan:", data);
        setIsLoading(false);
        alert("Registrasi Berhasil!");
    };

  return(
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold mb-6 text-red-900">Registrasi Event</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputText 
                label="Nama Lengkap" 
                nama="nama" 
                register={register} 
                errors={errors.nama?.message}            
            />

            <InputText 
                label="Email" 
                nama="email" 
                type="email"
                register={register} 
                errors={errors.email?.message}            
            />

            <InputPassword 
                label="Password" 
                nama="password" 
                register={register} 
                errors={errors.password?.message}            
            />

            <InputPassword 
                label="Konfirmasi Password" 
                nama="password_confirm" 
                register={register} 
                errors={errors.password_confirm?.message}            
            />

            <SelectInput 
                label="Kategori Event"
                nama="category"
                register={register}
                errors={errors.category?.message}
                options={[
                    { label: "Workshop", value: "workshop" },
                    { label: "Seminar", value: "seminar" },
                    { label: "Competition", value: "competition" },
                ]}
            />

            <TextArea 
                label="Bio Singkat"
                nama="bio"
                register={register}
                errors={errors.bio?.message}
            />

            <Button label="Register" variant="primary" isLoading={isLoading} className="w-full" />
        </form>
    </div>
  );
}