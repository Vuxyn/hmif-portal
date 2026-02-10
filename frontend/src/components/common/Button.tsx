interface ButtonProps {
    text: string;
    variant?: 'primary' | 'secondary' | 'danger' | 'success'
    onClick?: () => void;
}

export default function Button({ text, variant = "primary", onClick }: ButtonProps) {
    const variants = {
        primary: "bg-blue-600 hover:bg-blue-800 font-semibold",
        secondary: "bg-gray-600 hover:bg-gray-700 font-semibold",
        danger: "bg-red-600 hover:bg-red-700 font-semibold",
        success: "bg-green-600 hover:bg-green-700 font-semibold"
    }
    return (
        <button
            onClick={onClick}
            className={`${variants[variant]} font-semibold text-white px-6 py-2 rounded-lg cursor-pointer transition duration-300`}>
            {text}
        </button>
    );
}