export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-white shadow-md p-4">
            <p className="text-center text-sm text-gray-600">© {currentYear} HMIF FTUNRAM. All rights reserved.</p>
        </footer>
    );
}
