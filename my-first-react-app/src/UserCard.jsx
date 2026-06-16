function UserCard({ name, isPremium, messageCount, status }) {

  let statusBadge;

  if (status === "online") {
    statusBadge = "🟢 Online";
  } else if (status === "offline") {
    statusBadge = "⚫ Offline";
  } else if (status === "busy") {
    statusBadge = "🔴 Busy";
  }else { statusBadge = "Unknown" }

  return (
    <>
      <h2>{name}</h2>

      <p>
        {isPremium ? "⭐ Premium Member" : "Free Member"}
      </p>

      {messageCount > 0 && (
        <p>📬 You have {messageCount} messages</p>
      )}

      <p>{statusBadge}</p>
    </>
  );
}

export default UserCard;