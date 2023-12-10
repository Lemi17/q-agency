interface getAllPostsPayloadQueryDTO extends PayloadQueryTypeDTO {
  name_like?: string;
  title_like?: string;
  body_like?: string;
  //   ...
}
type getAllPostsResponseDTO = PostType[];

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
