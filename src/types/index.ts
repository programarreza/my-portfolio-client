import { ReactNode, SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IInput {
  variant?: "bordered" | "flat" | "faded" | "underlined";
  size?: "md" | "sm" | "lg";
  required?: boolean;
  type?: "text" | "email" | "password" | "number";
  label?: ReactNode;
  name: string;
  placeholder?: string;
  disabled?: boolean;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: string;
  image: string;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export type TQueryParams = {
  name: string;
  value: boolean | React.Key;
};
