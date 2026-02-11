import Button from "@/components/common/Button";
import Image from "next/image";
import Dropdown from "@/components/common/Dropdown";
import Accordion from "@/components/common/Accordion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const tentangItems = [
        { label: "Visi & Misi", href: "/visi-misi" },
        { label: "Struktur Organisasi", href: "/struktur" },
        { label: "Program Kerja", href: "/proker" },
        { label: "Prestasi", href: "/prestasi" },
    ];

    return (
        <nav className="bg-white shadow-md w-full sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <div className="font-bold text-xl text-blue-600 tracking-tight cursor-pointer">
                        <Image
                            src="/logo.png"
                            alt="Logo HMIF"
                            width={200}
                            height={80}
                            className="object-contain w-32 md:w-44 h-auto" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 text-gray-700 font-semibold items-center">
                        <a href="/" className="hover:text-blue-600 transition duration-300">Beranda</a>
                        <Dropdown text="Tentang Kami" items={tentangItems} />
                        <a href="/berita" className="hover:text-blue-600 transition duration-300">Berita</a>
                        <a href="/faq" className="hover:text-blue-600 transition duration-300">FAQ</a>
                        <a href="/kontak" className="hover:text-blue-600 transition duration-300">Kontak</a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {/* Tombol Login Desktop */}
                    <div className="hidden md:block">
                        <Button text="Login" variant="primary" />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white border-t border-gray-100 pb-6 px-4 shadow-inner`}>
                <div className="flex flex-col gap-2 pt-4 text-gray-700 font-semibold">
                    <a href="/" className="hover:text-blue-600 transition duration-300 py-2">Beranda</a>

                    <div className="border-y border-gray-50 py-1">
                        <Accordion title="Tentang Kami" items={tentangItems} />
                    </div>

                    <a href="/berita" className="hover:text-blue-600 transition duration-300 py-2">Berita</a>
                    <a href="/faq" className="hover:text-blue-600 transition duration-300 py-2">FAQ</a>
                    <a href="/kontak" className="hover:text-blue-600 transition duration-300 py-2">Kontak</a>

                    <div className="pt-4">
                        <Button text="Login" variant="primary" className="w-full" />
                    </div>
                </div>
            </div>
        </nav>
    );
}