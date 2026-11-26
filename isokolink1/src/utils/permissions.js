
export const ROLE_PERMISSIONS = {
  farmer: [
    "read_products",
    "write_products",
    "read_orders",
    "write_group_sales",
    "read_group_sales",
    "read_profile",
    "write_profile",
  ],

  buyer: [
    "read_products",
    "read_group_sales",
    "read_profile",
    "write_profile",
    "read_orders",
    "create_orders",
  ],

  transporter: [
    "read_deliveries",
    "write_deliveries",
    "read_assigned_orders",
    "write_profile",
    "read_profile",
  ],

  admin: ["*"],
};

export function hasPermission(role, permission) {
  const permissions = ROLE_PERMISSIONS[role] || [];

  return (
    permissions.includes("*") ||
    permissions.includes(permission)
  );
}

export function canAccessDashboard(role, dashboard) {
  return role === dashboard;
}
