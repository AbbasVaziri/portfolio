import { FaWhatsapp, FaTelegram, FaPhone, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        { icon: FaWhatsapp, href: 'https://wa.me/qr/BAWSGWY2PJQMM1', label: 'WhatsApp', color: 'text-green-400', bg: 'hover:bg-green-500/20', shadow: 'hover:shadow-green-500/30' },
        { icon: FaTelegram, href: 'https://t.me/AbbaseVaziri', label: 'Telegram', color: 'text-blue-400', bg: 'hover:bg-blue-500/20', shadow: 'hover:shadow-blue-500/30' },
        { icon: FaPhone, href: 'tel:+989025663672', label: 'Phone', color: 'text-emerald-400', bg: 'hover:bg-emerald-500/20', shadow: 'hover:shadow-emerald-500/30' },
        { icon: FaLinkedin, href: 'www.linkedin.com/in/abbasvazirii', label: 'LinkedIn', color: 'text-blue-500', bg: 'hover:bg-blue-600/20', shadow: 'hover:shadow-blue-600/30' },
        { icon: FaEnvelope, href: 'mailto:abbas.javanshir18@gmail.com', label: 'Gmail', color: 'text-red-400', bg: 'hover:bg-red-500/20', shadow: 'hover:shadow-red-500/30' },
    ];

    return (
        <footer className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            {/* Basket/Dock Container */}
            <div className="flex items-center gap-4 px-6 py-4 bg-stone-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all duration-300 hover:border-white/20 hover:bg-stone-900/80 hover:shadow-2xl hover:scale-[1.02]">
                {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                                group relative flex items-center justify-center 
                                w-12 h-12 md:w-14 md:h-14 
                                bg-stone-800/80 border border-white/5 rounded-xl 
                                transition-all duration-300 ease-cubic-bezier(0.34, 1.56, 0.64, 1)
                                hover:-translate-y-3 hover:scale-110
                                ${social.color} ${social.bg} ${social.shadow} hover:shadow-lg hover:border-white/20
                            `}
                            aria-label={social.label}
                        >
                            <Icon className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />

                            {/* Tooltip */}
                            <span className="absolute -top-12 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 px-3 py-1.5 bg-stone-900/90 text-white text-xs font-medium rounded-lg whitespace-nowrap border border-white/10 shadow-xl backdrop-blur-sm pointer-events-none">
                                {social.label}
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-stone-900/90 rotate-45 border-r border-b border-white/10"></div>
                            </span>
                        </a>
                    );
                })}
            </div>
        </footer>
    );
};

export default Footer;
