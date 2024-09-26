import App from "../../App";
import Users from "../Users";

export default function CreateUser() {
    return (
        <div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Create User</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Username"
                            required
                            className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        <button
                            type="submit"
                            className="w-full p-2 text-white rounded-md bg-blue-500 hover:bg-blue-600 transition duration-200"
                        >
                            Submit
                        </button>
                    </form>
                </div>
        </div>
    );
}

CreateUser.layout = (page) => <App>{<Users>{page}</Users>}</App>;
