import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
    label: string;
    href: string;
}

interface AccordionProps {
    title: string;
    items: AccordionItem[];
}

export default function Accordion({ title, items }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full">
            {/* Header / Trigger */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-2 text-gray-700 font-semibold hover:text-blue-600 transition-colors"
                aria-expanded={isOpen}
            >
                <span>{title}</span>
                <ChevronDown
                    className={`size-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Content */}
            <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}>
                <div className="overflow-hidden">
                    {/* List */}
                    <ul className="pl-4 space-y-2 py-2 border-l-2 border-blue-100 ml-1">
                        {items.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
}
