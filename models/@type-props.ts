import { ObjectId } from "mongoose";
import { StaticImageData } from "next/image";
import { LegacyRef } from "react";

export interface IPropsNode {
  children: React.ReactNode;
}

export interface IPropsRef {
  ref: LegacyRef<HTMLElement>;
}

export interface IPropsButton {
  children: React.ReactNode;
  style: string;
  onClick?: () => void;
  type?: string;
  disabled?: boolean;
  isPending?: boolean;
}

//Counter
export interface IPropsCounter {
  className?: string;
  onInc: () => void;
  onDec: () => void;
  count: number;
}

export interface IPropsProducts {
  img: string;
  title: string;
}

export interface IPropsProductPage {
  categories: Product[];
}

export interface IPropsProduct {
  data: Product;
}

export interface IDetailSection {
  headContent: React.ReactNode;
  infoContent: React.ReactNode;
  galleryContent: React.ReactNode;
  otherProducts: React.ReactNode;
  productsSection: React.ReactNode;
}

export interface IPropsCategory {
  title: string;
  isNew: boolean;
  slug: string;
  description: string;
}

// Detail Type

export interface IPropsDetailPage {
  product: Product;
}

export interface IPropsDetailProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  isNew: boolean;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export interface IPropsDetailInfo {
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
}

export interface IPropsDetailGallery {
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
}

export interface IPropsDetailOthers {
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
}

//Cart type
export interface INewCartData {
  newQuantity: number;
  newPrice: number;
}

export interface ICartStructure {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
}

export interface ICartData {
  id: string;
  name: string;
  price: number;
  totalPrice: number;
  quantity: number;
  image: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
}

// Product Type

export interface Product {
  id: number;
  _id: string;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
}

// SignIn/SignUp/Verify

export interface IsendEmail {
  firstName: string;
  lastName: string;
  email: string;
  emailType: string;
  userId: ObjectId;
}

export interface IFormValuesSignIn {
  email: string;
  password: string;
}

export interface IFormValuesSignUp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface VerifyEmailProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export interface IVerifyEmail {
  hashedToken: string;
  firstName: string;
  lastName: string;
}

// Store
export interface ICartZustand {
  items: ICartData[];
  isOpen: boolean;
  total: number;
  shipping: number;
  addItem: (item: ICartData) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  toggleCart: () => void;
  decIitem: (item: ICartData) => void;
  incItem: (item: ICartData) => void;
}

export interface IOverlayProps {
  onOverlay?: () => void;
  children?: React.ReactNode;
  position?: { top: string | number; left: string | number };
  delay?: number;
}


