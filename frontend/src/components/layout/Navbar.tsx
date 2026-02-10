import Button from "@/components/common/Button";
import Image from "next/image";
import Dropdown from "@/components/common/Dropdown";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-white shadow-md w-full sticky top-0 z-50">
            {/* Logo */}
            <div className="font-bold text-xl text-blue-600 tracking-tight cursor-pointer">
                <Image src="/logo.png" alt="Logo HMIF" width={250} height={100} />
            </div>

            {/* Menu */}
            <div className="flex gap-6 text-gray-700 font-semibold">
                <a href="/" className="hover:text-blue-600 transition duration-300">Beranda</a>
                <Dropdown text="Tentang Kami"/>
                <a href="/berita" className="hover:text-blue-600 transition duration-300">Berita</a>
                <a href="/faq" className="hover:text-blue-600 transition duration-300">FAQ</a>
                <a href="/kontak" className="hover:text-blue-600 transition duration-300">Kontak</a>
            </div>

            {/* Tombol */}
            <div>
                <Button
                    text="Login"
                    variant="primary"
                />
            </div>
        </nav>
    );
}