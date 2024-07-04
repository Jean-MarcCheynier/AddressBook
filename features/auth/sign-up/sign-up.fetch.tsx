export type SignUpPayload = {
  username: string;
  password: string;
  passwordRepeat: string;
};

export type SignUpResponse = { access_token: string };

export class BadRequestServerError extends Error {
  public response: any;
  constructor(message: string, response: any) {
    super(message);
    this.response = response;
  }
}

export class ServerError extends Error {}

const signUp = async (
  payload: SignUpPayload,
): Promise<SignUpResponse> | never => {
  try {
    const response = await fetch('http://localhost:3000/auth/signup', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      switch (response.status) {
        case 400:
          throw new BadRequestServerError('Bad request', await response.json());
        default:
          throw new ServerError('Network response was not OK');
      }
    }
    return await response.json();
  } catch (error) {
    if (error instanceof BadRequestServerError) {
      throw error;
    }
    if (error instanceof ServerError) {
      throw error;
    }
    console.error('Fetch could not be done');
    throw error;
  }
};

export default signUp;
