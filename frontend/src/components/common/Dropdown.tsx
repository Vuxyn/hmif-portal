
import { useState} from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownProps{
    text: string;
}

export default function Dropdown({text}: DropdownProps){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="relative inline-block text-left">
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:text-blue-600 transition duration-300 cursor-pointer flex items-center gap-1">
                {text}
                <ChevronDown className={`size-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-56 border rounded-md border-gray-200 z-10 shadow-lg bg-white">
                    <div className="py-2">
                        <a href="#" className="block px-4 py-2 text-sm hover:text-blue-600 transition duration-300 cursor-pointer">Visi & Misi</a>
                        <a href="#" className="block px-4 py-2 text-sm hover:text-blue-600 transition duration-300 cursor-pointer">Struktur Organisasi</a>
                        <a href="#" className="block px-4 py-2 text-sm hover:text-blue-600 transition duration-300 cursor-pointer">Program Kerja</a>
                        <a href="#" className="block px-4 py-2 text-sm hover:text-blue-600 transition duration-300 cursor-pointer">Prestasi</a>
                    </div>
                </div>
            )}
        </div>
    );
}