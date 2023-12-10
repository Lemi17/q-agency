import { FetchError, backendUrl } from "../../shared/config";

export const getAllPosts = async (
  queryParams?: getAllPostsPayloadQueryDTO
): Promise<getAllPostsResponseDTO> => {
  const params = new URLSearchParams(
    queryParams as Record<string, string>
  ).toString();

  try {
    const response = await fetch(`${backendUrl}/posts?${params}`);

    if (!response.ok) {
      throw new FetchError("Bad fetch response", response.status);
    }

    const data = await response.json();

    return data as getAllPostsResponseDTO;
  } catch (error) {
    if (error instanceof FetchError) {
      console.error(`Fetch error: ${error.message}, Status: ${error.status}`);
    } else {
      console.error("Unexpected error:", error);
    }

    throw error;
  }
};

export const getPost = async (postId: number): Promise<PostType> => {
  try {
    const response = await fetch(`${backendUrl}/posts/${postId}`);

    if (!response.ok) {
      throw new FetchError("Bad fetch response", response.status);
    }

    const data = await response.json();

    return data as PostType;
  } catch (error) {
    if (error instanceof FetchError) {
      console.error(`Fetch error: ${error.message}, Status: ${error.status}`);
    } else {
      console.error("Unexpected error:", error);
    }

    throw error;
  }
};
