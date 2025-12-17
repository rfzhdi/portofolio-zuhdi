export default function Footer() {
    return (
        <footer className="w-full text-center py-6 text-xs md:text-sm text-gray-500 border-t border-white/10">
            © {new Date().getFullYear()} Zuhdi. All rights reserved.
        </footer>  
    );
}