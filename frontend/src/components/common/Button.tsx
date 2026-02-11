interface ButtonProps {
    text: string;
    variant?: 'primary' | 'secondary' | 'danger' | 'success'
    onClick?: () => void;
    className?: string;
}

export default function Button({ text, variant = "primary", onClick, className = "" }: ButtonProps) {
    const variants = {
        primary: "bg-blue-600 hover:bg-blue-800",
        secondary: "bg-gray-600 hover:bg-gray-700",
        danger: "bg-red-600 hover:bg-red-700",
        success: "bg-green-600 hover:bg-green-700"
    }
    return (
        <button
            onClick={onClick}
            className={`${variants[variant]} font-semibold text-white px-6 py-2 rounded-lg cursor-pointer transition duration-300 ${className}`}>
            {text}
        </button>
    );
}