export const getStoredUser = () => {
  const stored = localStorage.getItem("user");
  if (!stored) return null;

  try {
    const user = JSON.parse(stored);
    const id = user?.id || user?.userId || null;

    if (!id) return null;

    return {
      id,
      username: user.username || "",
      email: user.email || "",
      phonenumber: user.phonenumber || "",
    };
  } catch (err) {
    console.error("Failed to parse user from localStorage:", err);
    return null;
  }
};

export const setStoredUser = (user: any) => {
  const normalized = {
    id: user.id || user.userId,
    username: user.username,
    email: user.email,
    phonenumber: user.phonenumber,
  };

  localStorage.setItem("user", JSON.stringify(normalized));
};
