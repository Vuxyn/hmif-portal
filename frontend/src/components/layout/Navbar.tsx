import Button from "@/components/common/Button";
import Image from "next/image";
import Dropdown from "@/components/common/Dropdown";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <nav className="flex justify-between items-center p-4 bg-white shadow-md w-full sticky top-0 z-50">
            {/* Logo */}
            <div className="font-bold text-xl text-blue-600 tracking-tight cursor-pointer">
                <Image 
                src="/logo.png" 
                alt="Logo HMIF" 
                width={200} 
                height={80}
                className="object-contain w-32 md:w-44 h-auto" />
            </div>

            {/* Menu */}
            <div className="hidden md:flex gap-6 text-gray-700 font-semibold">
                <a href="/" className="hover:text-blue-600 transition duration-300">Beranda</a>
                <Dropdown text="Tentang Kami" />
                <a href="/berita" className="hover:text-blue-600 transition duration-300">Berita</a>
                <a href="/faq" className="hover:text-blue-600 transition duration-300">FAQ</a>
                <a href="/kontak" className="hover:text-blue-600 transition duration-300">Kontak</a>
            </div>

            <div className="md:hidden flex items-center">
                <button onClick = {() => setIsOpen(!isOpen)} className="text-gray-700">
                    {isOpen ? <X size={28} /> : <Menu size= {28} />}
                </button>

            </div>

            {/* Tombol */}
            <div className="hidden md:block">
                <Button
                    text="Login"
                    variant="primary"
                />
            </div>
        </nav>
    );
}