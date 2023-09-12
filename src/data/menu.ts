import { menutype } from "@/interfaces/menu";

export const menuList: menutype[] = [
    {
      title: "Điện thoại, Tablet",
      slug: "dien-thoai",
      filter: [
        {
          label: "Thương hiệu",
          code: "brand",
          hot: false,
  
          fil: [
            { label: "Samsung", value: "samsung" },
            { label: "Iphone", value: "iphone" },
          ],
        },
        {
          label: "Mức giá",
          code: "price",
          hot: false,
  
          fil: [
            { label: "Dưới 2 triệu", value: "max:2000000" },
            { label: "Từ 2 - 4 triệu", value: "min:2000000;max:4000000" },
          ],
        },
        {
          label: "Điện thoại hot",
          hot: true,
          code: "product",
          fil: [
            {
              label: "Iphone 14 promax",
              value: "iphone-14-promax",
            },
            {
              label: "Samsung S23 ultra",
              value: "samsung-s23-ultra",
            },
          ],
        },
      ],
    },
    {
      title: "Laptop",
      slug: "laptop",
      filter: [
        {
          label: "Chọn theo hãng",
          code: "brand",
          hot: false,
  
          fil: [
            { label: "Acer", value: "samsung" },
            { label: "Apple", value: "iphone" },
          ],
        },
        {
          label: "Mức giá",
          code: "price",
          hot: false,
  
          fil: [
            { label: "Dưới 2 triệu", value: "max:2000000" },
            { label: "Từ 20 - 42 triệu", value: "min:2000000;max:4000000" },
          ],
        },
        {
          label: "Laptop hot",
          hot: true,
          code: "product",
          fil: [
            {
              label: "Iphone 14 promax",
              value: "iphone-14-promax",
            },
            {
              label: "Samsung S23 ultra",
              value: "samsung-s23-ultra",
            },
          ],
        },
        {
          label: "Laptop hot",
          hot: true,
          code: "product",
          fil: [
            {
              label: "Iphone 14 promax",
              value: "iphone-14-promax",
            },
            {
              label: "Samsung S23 ultra",
              value: "samsung-s23-ultra",
            },
          ],
        },
        {
          label: "Laptop hot",
          hot: true,
          code: "product",
          fil: [
            {
              label: "Iphone 14 promax",
              value: "iphone-14-promax",
            },
            {
              label: "Samsung S23 ultra",
              value: "samsung-s23-ultra",
            },
          ],
        },
        {
          label: "Laptop hot",
          hot: true,
          code: "product",
          fil: [
            {
              label: "Iphone 14 promax",
              value: "iphone-14-promax",
            },
            {
              label: "Xiaomi Redmi Note 12 8GB 128GB mới",
              value: "samsung-s23-ultra",
            },
          ],
        },
        {
          label: "Laptop hot",
          hot: true,
          code: "product",
          fil: [
            {
              label: "Iphone 14 promax",
              value: "iphone-14-promax",
            },
            {
              label: "Samsung S23 ultra",
              value: "samsung-s23-ultra",
            },
          ],
        },
      ],
    },
  ];