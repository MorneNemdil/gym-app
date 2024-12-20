declare type SignUpParams = {
  firstName?: string;
  lastName?: string;
  address1?: string;
  city?: string;
  postalCode?: string;
  dateOfBirth?: Date;
  email: string;
  password: string;
  confirmPassword?: string;
};

declare type LoginUser = {
  email: string;
  password: string;
};

declare type User = {
  $id: string;
  email: string;
  userId: string;
  firstName: string;
  lastName: string;
  name: string;
  address1: string;
  city: string;
  postalCode: string;
  dateOfBirth: string;
};

declare interface HeaderBoxProps {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  userName?: string;
}

declare interface MobileNavbarProps {
  user: User;
}

declare interface AuthFormProps {
  type: "sign-in" | "sign-up";
}

declare interface FooterProps {
  user: User;
  type?: "mobile" | "desktop"
}

declare interface RightSidebarProps {
  user: User;
}

declare interface SiderbarProps {
  user: User;
}

declare interface signInProps {
  email: string;
  password: string;
}
