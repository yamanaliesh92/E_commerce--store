export interface Billboard {
  id: string;
  label: string;
  imgUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  category: Category;
  isFeatured: boolean;
  size: Size;
  color: Color;
  Images: Image[];
}

export interface Image {
  id: string;
  productId: string;
  url: string;
}

interface Size {
  id: string;
  name: string;
  value: string;
}

interface Color {
  id: string;
  name: string;
  value: string;
}
