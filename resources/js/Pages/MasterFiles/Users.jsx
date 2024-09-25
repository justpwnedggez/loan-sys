import App from '../App';

export default function Users({ users, form, setForm }) {
    return (
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
          <h1 className="text-2xl font-bold text-center mb-6">User Management</h1>

          <form className="mb-6">
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
              className={`w-full p-2 text-white rounded-md bg-blue-500 hover:bg-blue-600 transition duration-200`}
            > Submit
            </button>
          </form>
        </div>
      );
}

Users.layout = (page) => <App children={page} />;
