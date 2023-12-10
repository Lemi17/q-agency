import { FetchError, backendUrl } from "../../shared/config";

export const getAllComments = async (
  queryParams?: getAllCommentsPayloadQueryDTO
): Promise<getAllCommentsResponseDTO> => {
  const params = new URLSearchParams(
    queryParams as Record<string, string>
  ).toString();

  try {
    const response = await fetch(`${backendUrl}/comments?${params}`);

    if (!response.ok) {
      throw new FetchError("Bad fetch response", response.status);
    }

    const data = await response.json();

    return data as getAllCommentsResponseDTO;
  } catch (error) {
    if (error instanceof FetchError) {
      console.error(`Fetch error: ${error.message}, Status: ${error.status}`);
    } else {
      console.error("Unexpected error:", error);
    }

    throw error;
  }
};
