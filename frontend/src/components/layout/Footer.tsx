import { Instagram, Phone, Mail, MapPin, Globe } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            {/* Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* About */}
                <div className="space-y-6">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <Image
                            src="/LOGO_HMIF.png"
                            alt="Logo HMIF"
                            width={100}
                            height={100}
                            className="object-contain"
                        />
                        <div className="font-bold text-xl text-blue-800 leading-tight">
                            HMIF <span className="text-black text-xl font-bold"> <br />FT UNRAM</span>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Himpunan Mahasiswa Informatika (HMIF) merupakan wadah aspirasi
                        dan pengembangan diri bagi mahasiswa Informatika Fakultas Teknik Universitas Mataram.
                    </p>

                    {/* Socials */}
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/hmif_ftunram/" className="p-2 bg-white rounded-full border border-gray-200 text-pink-600 hover:bg-pink-50 transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="https://wa.me/6287855707211" className="p-2 bg-white rounded-full border border-gray-200 text-blue-600 hover:bg-blue-50 transition-colors">
                            <Phone size={20} />
                        </a>
                    </div>
                    
                </div>

                {/* Quick Links */}
                <div className="md:pl-12">
                    <h3 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Navigasi</h3>
                    <ul className="space-y-4 text-gray-600 text-sm">
                        <li><a href="/" className="hover:text-blue-600 transition-colors">Beranda</a></li>
                        <li><a href="/berita" className="hover:text-blue-600 transition-colors">Berita & Artikel</a></li>
                        <li><a href="/faq" className="hover:text-blue-600 transition-colors">FAQ</a></li>
                    </ul>

                    <h3 className="font-bold text-gray-900 mb-6 mt-10 uppercase tracking-wider text-sm">Tentang Kami</h3>
                    <ul className="space-y-4 text-gray-600 text-sm">
                        <li><a href="/visi-misi" className="hover:text-blue-600 transition-colors">Visi & Misi</a></li>
                        <li><a href="/struktur" className="hover:text-blue-600 transition-colors">Struktur Organisasi</a></li>
                        <li><a href="/proker" className="hover:text-blue-600 transition-colors">Program Kerja</a></li>
                        <li><a href="/prestasi" className="hover:text-blue-600 transition-colors">Prestasi</a></li>
                    </ul>
                </div>

                {/*Contact & Address */}
                <div>
                    <h3 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Hubungi Kami</h3>
                    <ul className="space-y-4 text-gray-600 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-blue-600 shrink-0" />
                            <span>Jl. Majapahit No.62, Mataram, Nusa Tenggara Barat. <br /> (Sekretariat HMIF FT UNRAM)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-blue-600 shrink-0" />
                            <a href="mailto:hmif@unram.ac.id" className="hover:text-blue-600 transition-colors">hmif@unram.ac.id</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-blue-600 shrink-0" />
                            <span>+62 878-5570-7211</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto py-6 px-4">
                    <p className="text-center text-xs text-gray-500 font-medium">
                        © {currentYear} <span className="text-blue-800">HMIF FTUNRAM</span>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
