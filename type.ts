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
  size: Size[];
  color: Color[];
  images: Image[];
}

interface Image {
  id: string;
  url: string;
}
