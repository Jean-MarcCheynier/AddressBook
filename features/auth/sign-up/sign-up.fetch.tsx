export type SignUpPayload = {
  username: string;
  password: string;
};

export type SignUpResponse = { access_token: string };

const signUp = async (
  payload: SignUpPayload
): Promise<SignUpResponse> | never => {
  try {
    const response = await fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    return await response.json();
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    throw error;
  }
};

export default signUp;
