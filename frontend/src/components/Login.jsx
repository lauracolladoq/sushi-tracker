export function Login() {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">WELCOME BACK!</h1>
            <p className="text-gray-500 text-center pt-4">Please enter your credentials to access your account.</p>
            <div className="flex flex-col gap-4 pt-4">
                <div className="flex gap-3 p-4 bg-gray-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <label htmlFor="email" className="hidden"></label>
                    <input type="email" placeholder="Email" className="bg-gray-100 w-full" />
                </div>
                <div className="flex gap-3 p-4 bg-gray-100 rounded-full items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <label htmlFor="password" className="hidden"></label>
                    <input type="password" placeholder="Password" className="bg-gray-100 w-full" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </div>
                <button className="w-full bg-blue-300 text-white font-semibold hover:bg-blue-400 p-4 rounded-full drop-shadow-lg">
                    Login
                </button>
                <div className="flex items-center gap-4">
                    <hr className="w-full bg-gray-500 h-[2px]" />
                    <p className=" text-gray-500">or</p>
                    <hr className="w-full bg-gray-500 h-[2px]" />
                </div>
                <div className="border rounded-full p-4 flex justify-center gap-4">
                    <img src="/src/assets/social-media/google.png" alt="" />
                    <p>Login with <span className="font-semibold">Google</span></p>
                </div>
                <div className="border rounded-full p-4 flex justify-center gap-4">
                    <img src="/src/assets/social-media/github.png" alt="" />
                    <p>Login with <span className="font-semibold">GitHub</span></p>
                </div>
                <div className="border rounded-full p-4 flex justify-center gap-4">
                    <img src="/src/assets/social-media/facebook.png" alt="" />
                    <p>Login with <span className="font-semibold">Facebook</span></p>
                </div>
            </div>
        </div>
    )
}