import { FaTwitter, FaFacebook, FaSquareInstagram } from 'react-icons/fa6';
const Footer = () => {

    return (
        <div
            className="py-24 bg-white"
        >
            <footer className="footer lg:p-0 p-10 text-base-content bg-white max-w-7xl mx-auto ">
                <aside>
                    <img className="w-52" src="https://elesa-landing.netlify.app/image/logo/logo.png" alt="" />
                    <p>Cookiteer Organization<br />Providing reliable tech since 2012</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Add Product</a>
                    <a className="link link-hover">Request Food</a>
                    <a className="link link-hover">All Available Foods</a>
                </nav>
                <nav>
                    <header className="footer-title">Contact Us</header>
                    <a className="link link-hover">Mobile : +8801751725042</a>
                    <a className="link link-hover">Email : dolonr718@gmail.com</a>
                    <a className="link link-hover">Address : 2 no. Bridge, Patuakhali.</a>
                    <div>
                        <p className='font-bold mt-3'>Follow Us On </p>
                        <div className='flex mt-5 gap-5'>
                            <button className="btn">
                                <FaTwitter className='text-3xl'></FaTwitter>
                            </button>

                            <button className="btn">
                                <FaFacebook className='text-3xl'></FaFacebook>
                            </button>

                            <button className="btn">
                                <FaSquareInstagram className='text-3xl'></FaSquareInstagram>
                            </button>
                        </div>
                    </div>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <p className="max-w-7xl lg:px-0 md:px-5 px-3 mx-auto font-medium text-sm">&copy; 2023 Dolon Roy, Developer.</p>
        </div>
    );
};

export default Footer;