
import { usePage } from '@inertiajs/react';

const PermissionGate = ({ permission, children }) => {
    const { auth } = usePage().props;
    const userPermissions = auth.permissions;

    return userPermissions.includes(permission) ? children : null;
};

export default PermissionGate;
