
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
    label: string;
    href: string;
}

interface DropdownProps {
    text: string;
    items: DropdownItem[];
}

export default function Dropdown({ text, items }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative inline-block text-left"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                className="hover:text-blue-600 transition duration-300 cursor-pointer flex items-center gap-1 py-2">
                {text}
                <ChevronDown className={`size-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute left-0 w-56 border rounded-md border-gray-200 z-50 shadow-lg bg-white overflow-hidden">
                    <div className="py-1">
                        {items.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 
                                hover:bg-gray-50 transition duration-200 cursor-pointer"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}