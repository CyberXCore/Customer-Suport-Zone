const Toast = ({ message, type, onClose }) => {
    if (!message) return null;

    const baseStyle = "fixed top-5 right-5 p-4 rounded-xl shadow-2xl text-white font-semibold z-50 transition-all duration-300 transform animate-pulse-fade-in";
    let colorStyle = "";

    switch (type) {
        case 'success':
            colorStyle = "bg-green-600";
            break;
        case 'error':
            colorStyle = "bg-red-600";
            break;
        default:
            colorStyle = "bg-blue-600";
    }

    return (
        <>
            <style>{`
                @keyframes pulse-fade-in {
                    0% { opacity: 0; transform: translateY(20px) scale(0.95); }
                    100% { opacity: 1; transform: translateY(0) scale(1); }
                }
                .animate-pulse-fade-in {
                    animation: pulse-fade-in 0.3s ease-out forwards;
                }
            `}</style>
            <div className={`${baseStyle} ${colorStyle}`}>
                <div className="flex items-center justify-between">
                    <span>{message}</span>
                    <button onClick={onClose} className="ml-4 font-bold text-lg opacity-75 hover:opacity-100 transition">
                        &times;
                    </button>
                </div>
            </div>
        </>
    );
};

export default Toast;