import { useForm } from "react-hook-form";
import { useState } from "react"; // untuk loading
import InputText from "../components/ui/InputText";
import InputPassword from "../components/ui/InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/tombol";

const schema = z.object({
    email: z.string().email({ message: "Format email tidak valid" }).min(1, { message: "Email wajib diisi" }),
    password: z.string().min(8, { message: "Password minimal 8 karakter" }),
});

type formData = z.infer<typeof schema>;

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false); 

    const {
        register, 
        handleSubmit, 
        formState: {errors}, 
    } = useForm<formData>({resolver: zodResolver(schema)});

    const onSubmit = async (data: formData) => {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1500)); // nunggu 1.5 detik
        console.log("Login Data:", data);
        setIsLoading(false);
        alert("Login Berhasil!");
    };

  return(
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-red-900">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email - Tambahkan type="email" */}
            <InputText 
                label="Email" 
                nama="email" 
                type="email" 
                register={register} 
                errors={errors.email?.message}            
            />

            {/* Password */}
            <InputPassword 
                label="Password" 
                nama="password" 
                register={register} 
                errors={errors.password?.message}            
            />

            {/* Button - Tambahkan prop isLoading */}
            <Button 
                label="Login" 
                variant="primary" 
                isLoading={isLoading} 
                className="w-full" 
            />
        </form>
    </div>
  );
}