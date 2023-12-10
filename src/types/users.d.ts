interface getAllUsersPayloadQueryDTO extends PayloadQueryTypeDTO {
  name_like?: string;
  username_like?: string;
  email_like?: string;
  //   ...
}
type getAllUsersResponseDTO = User[];

type GeoType = {
  lat: string;
  lng: string;
};

type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoType;
};

type CompanyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressType;
  phone: string;
  website: string;
  company: CompanyType;
};

type getUserResponseDTO = UserType;
