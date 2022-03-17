export const storageKey = "[auth-login]";

export const defaultSession = {
  userName: "",
  logged: false,
};

export function getSession() {
  const session = sessionStorage.getItem(storageKey);
  return session ? JSON.parse(session) : defaultSession;
}
