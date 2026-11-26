
import { UserRound, ShieldCheck,  } from "lucide-react";

export default function AccountProfile({ user, role }) {
  if (!user) {
    return <p>Please log in to view your account.</p>;
  }

  const details = [
    { label: "Full name", value: user.user_metadata?.full_name || "Not provided" },
    { label: "Email address", value: user.email },
    { label: "Account type", value: role },
    { label: "Account status", value: "Active" },
    {
      label: "Joined",
      value: user.created_at
        ? new Date(user.created_at).toLocaleDateString()
        : "Not available",
    },
  ];

  return (
    <section className="feature-card">
      <div className="feature-heading">
        <UserRound size={28} />
        <div>
          <h2>My Account</h2>
          <p>Manage your IsokoLink account information.</p>
        </div>
      </div>

      <div className="profile-details">
        {details.map((item) => (
          <div className="profile-detail" key={item.label}>
            <strong>{item.label}</strong>
            <span>{item.value}</span>
          </div>
        ))}
      </div>

      <div className="account-verified">
        <ShieldCheck size={19} />
        Account information from your login session
      </div>
    </section>
  );
}
