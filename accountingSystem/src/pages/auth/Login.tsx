import bg from '../../assets/login.png'

import { LoginForm } from "../../components";

export default function Login() {

    return (
        <div className="h-dvh mx-auto md:flex justify-center items-center">

            <div className="hidden md:flex flex-col items-center justify-center gap-20 w-1/2 h-full p-5 lg:p-20 bg-[#245d60]">
                <div className="border-4 rounded-full size-80 lg:size-96">
                    <img src={bg}
                        alt="lgoin"
                        className="object-cover"
                    />
                </div>
                <h5 className="text-center font-medium text-lg text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio,
                    temporibus quasi ut repellendus debitis suscipit ex doloribus culpa fugit facilis.
                </h5>
            </div>

            <div className="flex flex-col justify-center gap-10 h-full md:w-1/2  px-2 sm:px-10 xl:px-28 bg-white">
                <div>
                    {/* //todo put the logo */}
                    {/* <div>
                        <img
                            src={logo}
                            alt="logo"
                            className="object-cover text-center sm:text-end"
                        />
                    </div> */}
                    <h1 className="text-4xl md:text-2xl lg:text-3xl text-center md:text-start mb-3 text-[#245d60] font-medium">
                        Login to your account
                    </h1>
                    <h3 className="text-lg text-center md:text-start text-gray-500">
                        Welcome back!
                    </h3>
                </div>

                <LoginForm />
            </div>
        </div>
    )
}
