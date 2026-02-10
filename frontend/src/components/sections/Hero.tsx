import Button from "@/components/common/Button";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full bg-linear-to-b from-blue-50 to-white py-20 px-4 overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
                {/* Logo */}
                <div className="mb-4 p-1 bg-white rounded-full shadow-xl shadow-blue-100 animate-bounce-subtle">
                    <Image 
                        src="/LOGO_HMIF.png" 
                        alt="Logo HMIF" 
                        width={100} 
                        height={100} 
                        className="object-contain"
                    />
                </div>

                {/* Text */}
                <div className="max-w-3xl space-y-3">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                        HIMPUNAN MAHASISWA <br />
                        <span className="text-blue-600">INFORMATIKA</span>
                    </h1>
                    
                    <h2 className="text-3xl md:text-2xl font-bold text-slate-700">
                        UNIVERSITAS MATARAM
                    </h2>
                    {/* Button */}
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <Button text="Selengkapnya" variant="primary" />
                        <Button text="Kontak" variant="secondary" />
                    </div>
                </div>
            </div>
        </section>
    );
}