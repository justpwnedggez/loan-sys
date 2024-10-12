// SubmitFormData.jsx
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";

export const submitMembershipForm = async (toast) => {
    try {
        // Retrieve biodata from localStorage
        const biodata = JSON.parse(localStorage.getItem("biodata")) || {};

        // Prepare the data to be sent (add additional fields as necessary)
        const formData = {
            ...biodata,
            // Include any other fields that may be needed
        };

        const route = "/main/activities/memberships/create";

        await axios.post(route, formData).then((response) => {
            toast.current.show({
                severity: "success",
                summary: "Success",
                detail: response.data.message,
                life: 3000,
            });
            setTimeout(function () {
                Inertia.reload({
                    preserveScroll: true, // Optional: Keeps the scroll position
                    preserveState: true,  // Optional: Keeps the current component state
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
