export type SignInPayload = {
  username: string;
  password: string;
};

export type SignInResponse = { access_token: string };

const signIn = async (
  payload: SignInPayload
): Promise<SignInResponse> | never => {
  try {
    const response = await fetch("http://localhost:3000/auth/signin", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    return response.json();
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    throw error;
  }
};

export default signIn;
