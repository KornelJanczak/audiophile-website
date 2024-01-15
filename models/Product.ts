import mongoose, { Document, Schema } from "mongoose";
import { Product } from "./@type-props";

const productSchema = new Schema<Product>(
  {
    _id: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      mobile: {
        type: String,
        required: true,
      },
      tablet: {
        type: String,
        required: true,
      },
      desktop: {
        type: String,
        required: true,
      },
    },
    category: {
      type: String,
      required: true,
    },
    categoryImage: {
      mobile: {
        type: String,
        required: true,
      },
      tablet: {
        type: String,
        required: true,
      },
      desktop: {
        type: String,
        required: true,
      },
    },
    new: {
      type: Boolean,
      default: false,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    features: {
      type: String,
      required: true,
    },
    includes: [
      {
        quantity: {
          type: Number,
          required: true,
        },
        item: {
          type: String,
          required: true,
        },
      },
    ],
    gallery: {
      first: {
        mobile: {
          type: String,
          required: true,
        },
        tablet: {
          type: String,
          required: true,
        },
        desktop: {
          type: String,
          required: true,
        },
      },
      second: {
        mobile: {
          type: String,
          required: true,
        },
        tablet: {
          type: String,
          required: true,
        },
        desktop: {
          type: String,
          required: true,
        },
      },
      third: {
        mobile: {
          type: String,
          required: true,
        },
        tablet: {
          type: String,
          required: true,
        },
        desktop: {
          type: String,
          required: true,
        },
      },
    },
    others: [
      {
        slug: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        image: {
          mobile: {
            type: String,
            required: true,
          },
          tablet: {
            type: String,
            required: true,
          },
          desktop: {
            type: String,
            required: true,
          },
        },
      },
    ],
  },
  { timestamps: true }
);

const ProductModel = mongoose.model<Product>(
  "info",
  productSchema,
);

export default ProductModel;
