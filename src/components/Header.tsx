import { AiFillGithub } from "react-icons/ai";

export default function Header() {
    return (
        <header className="hidden sm:flex bg-headerBg px-6 py-4 w-full">
            <div className="w-full max-w-5xl mx-auto flex items-center space-x-3">
                <AiFillGithub size={24} className="text-textWhite " />
                <h1 className="text-lg font-bold text-textWhite ">GitHub</h1>
                <span className="text-textWhite text-2xl font-normal">/</span>
                <span className="text-textWhite text-base font-light">Profile</span>
            </div>
        </header>
    );
}
