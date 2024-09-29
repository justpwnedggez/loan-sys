// SubmitFormData.jsx
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";

// Function to validate password confirmation
export const checkPasswordConfirmation = (formData) => {
    if (formData.password !== formData.password_confirmation) {
        return {
            success: false,
            message: "Password and confirmation do not match.",
        };
    }
    return { success: true };
};

export const submitCreateUserForm = async (formData, toast) => {
    try {
        // Validate the password confirmation first
        checkPasswordConfirmation(formData);

        const route = "/main/master-files/users/create/post";

        await axios.post(route, formData).then((response) => {
            toast.current.show({
                severity: "success",
                summary: "Success",
                detail: response.data.message,
                life: 3000,
            });
            setTimeout(function() {
                Inertia.reload({
                    preserveScroll: true,  // Optional: Keeps the scroll position
                    preserveState: true,   // Optional: Keeps the current component state
                });
            }, 2000);
        });
    } catch (error) {
        toast.current.show({
            severity: "error",
            summary: "Error",
            detail: error.response?.data?.message || "Error creating user",
            life: 3000,
        });
    }
};
