"use server";

import { AddPostRequestBody } from "@/app/api/posts/route";
import cloudinary from "@/lib/cloudinaryConfig"
import { Post } from "@/mongodb/models/post";
import { IUser } from "@/types/user";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default async function createPostAction(formData: FormData) {
  const user = await currentUser();
  const postInput = formData.get("postInput") as string;
  const image = formData.get("image") as File;
  let image_url = undefined;

  if (!postInput) {
    throw new Error("Post input is required");
  }

  if (!user?.id) {
    throw new Error("User not authenticated");
  }

  const userDB: IUser = {
    userId: user.id,
    userImage: user.imageUrl,
    firstName: user.firstName || "",
    lastName: user.lastName || "",
  };

  try {
    if (image.size > 0) {
      console.log("Uploading image to Cloudinary...", image);

      const imageBuffer = await image.arrayBuffer();
      const uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }).end(Buffer.from(imageBuffer));
      });

      image_url = (uploadResult as any).secure_url;

      console.log("File uploaded successfully!", image_url);

      const body: AddPostRequestBody = {
        user: userDB,
        text: postInput,
        imageUrl: image_url,
      };

      await Post.create(body);
    } else {
      const body: AddPostRequestBody = {
        user: userDB,
        text: postInput,
      };

      await Post.create(body);
    }
  } catch (error: any) {
    throw new Error("Failed to create post", error);
  }

  revalidatePath("/");
}
