import Image from "next/image";

export default function Footer() {
    return (
        <footer className="pt-11 pb-14 flex flex-col justify-center items-center bg-green-700 text-white">
            <div className="text mb-3">jhdgo1225.blog</div>
            <div className="flex mb-3 justify-between">
                <div className="mx-3">
                    <Image
                        src="/github_logo.png"
                        width={24}
                        height={24}
                        alt="GitHub Logo"
                    />
                </div>
                <div className="mx-3">
                    <Image
                        src="/github_logo.png"
                        width={24}
                        height={24}
                        alt="GitHub Logo"
                    />
                </div>
                <div className="mx-3">
                    <Image
                        src="/github_logo.png"
                        width={24}
                        height={24}
                        alt="GitHub Logo"
                    />
                </div>
            </div>
            <span className="text-xs">
                &copy; 2025. jhdgo1225. All rights reserved
            </span>
        </footer>
    );
}
