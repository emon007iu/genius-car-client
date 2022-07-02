
const Footer = () => {
    return (
        <div className="bg-gray-800 py-3">
            <h2 className="text-center text-gray-500 text-xs">
                &copy;{new Date().toLocaleString() + ''} Acme Corp. All rights reserved.
                </h2>
        </div>
    );
};

export default Footer;