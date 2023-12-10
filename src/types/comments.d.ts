interface getAllCommentsPayloadQueryDTO extends PayloadQueryTypeDTO {
  postId?: number;
  //   ...
}

type getAllCommentsResponseDTO = CommentType[];

type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
