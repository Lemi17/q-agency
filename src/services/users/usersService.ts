import { FetchError, backendUrl } from "../../shared/config";

export const getAllUsers = async (
  queryParams?: getAllUsersPayloadQueryDTO
): Promise<getAllUsersResponseDTO> => {
  const params = new URLSearchParams(
    queryParams as Record<string, string>
  ).toString();

  try {
    const response = await fetch(`${backendUrl}/users?${params}`);

    if (!response.ok) {
      throw new FetchError("Bad fetch response", response.status);
    }

    const data = await response.json();

    return data as getAllUsersResponseDTO;
  } catch (error) {
    if (error instanceof FetchError) {
      console.error(`Fetch error: ${error.message}, Status: ${error.status}`);
    } else {
      console.error("Unexpected error:", error);
    }

    throw error;
  }
};

export const getUser = async (userId: string): Promise<getUserResponseDTO> => {
  try {
    const response = await fetch(`${backendUrl}/users/${userId}`);

    if (!response.ok) {
      throw new FetchError("Bad fetch response", response.status);
    }

    const data = await response.json();

    return data as getUserResponseDTO;
  } catch (error) {
    if (error instanceof FetchError) {
      console.error(`Fetch error: ${error.message}, Status: ${error.status}`);
    } else {
      console.error("Unexpected error:", error);
    }

    throw error;
  }
};
