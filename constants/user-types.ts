export interface ILoginUserDTO {
    refreshToken:string;
    accessToken:string;
    user: {
        fullName: string;
        email: string;
        mobile: string;
        password: string;
        profileImage:  string;
        verifiedEmail?: boolean;
        verifiedMobile?: boolean;
        role?: "ADMIN" | "USER";
    }
}
export interface ICreateUserDTO {
  fullName: string;
  email: string;
  mobile: string;
  password: string;
  profileImage:  string;
  verifiedEmail?: boolean;
  verifiedMobile?: boolean;
  role?: "ADMIN" | "USER";
}