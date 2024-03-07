import { Schema, model, models, Types } from "mongoose";

export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: URL;
  width?: number;
  height?: number;
  config?: object;
  transformationUrl: string;
  aspectRation?: string;
  color?: string;
  prompt?: string;
  author: {
    _id: string;
    firstname: string;
    lastname: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const ImageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  transformationType: {
    type: String,
    required: true,
  },
  publicId: {
    type: String,
    required: true,
  },
  secureUrl: {
    type: URL,
    required: true,
  },
  width: Number,
  height: Number,
  config: Object,
  transformationUrl: URL,
  aspectRation: String,
  color: String,
  prompt: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
