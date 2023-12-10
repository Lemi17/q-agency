export const backendUrl = import.meta.env.VITE_DB_URL;

export class FetchError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = "FetchError";
  }
}
