import axios from "axios";
import { Inertia } from "@inertiajs/inertia";

export const submitCreateRoleForm = async (formData, toast) => {
    try {

        const route = "/main/master-files/roles/create";

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
            detail: error.response?.data?.message || "Error creating role",
            life: 3000,
        });
    }
};
