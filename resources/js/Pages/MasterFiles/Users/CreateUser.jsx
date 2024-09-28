import App from "../../App";
import Users from "../Users";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";

export default function CreateUser() {
    return (
        <div>
            <div>
                <h2 className="text-xl font-bold mb-4">Create User</h2>
                <form>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="p-inputgroup flex">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <FloatLabel>
                                <InputText
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="firstname"
                                />
                                <label htmlFor="firstname">Firstname</label>
                            </FloatLabel>
                        </div>
                        <div className="p-inputgroup flex">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <FloatLabel>
                                <InputText
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="lastname"
                                />
                                <label htmlFor="lastname">Lastname</label>
                            </FloatLabel>
                        </div>
                        <div className="p-inputgroup flex">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <FloatLabel>
                                <InputText
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="email"
                                />
                                <label htmlFor="email">Email</label>
                            </FloatLabel>
                        </div>
                        <div className="p-inputgroup flex">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <FloatLabel>
                                <InputText
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="status"
                                />
                                <label htmlFor="status">Status</label>
                            </FloatLabel>
                        </div>
                        <div className="p-inputgroup flex">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-lock"></i>
                            </span>
                            <FloatLabel>
                                <InputText
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="password"
                                    type="password"
                                />
                                <label htmlFor="password">Password</label>
                            </FloatLabel>
                        </div>
                        <div className="p-inputgroup flex">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-lock"></i>
                            </span>
                            <FloatLabel>
                                <InputText
                                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="confirmPassword"
                                    type="password"
                                />
                                <label htmlFor="confirmPassword">Confirm Password</label>
                            </FloatLabel>
                        </div>
                    </div>
                    <Button
                        label="Submit"
                        type="submit"
                        className="w-full p-2 text-white rounded-md bg-blue-500 hover:bg-blue-600 transition duration-200"
                    />
                </form>
            </div>
        </div>
    );
}

CreateUser.layout = (page) => <App>{<Users>{page}</Users>}</App>;
