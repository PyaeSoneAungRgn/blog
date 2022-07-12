import blog, { ga } from "https://deno.land/x/blog@0.4.1/blog.tsx";
import { unocss_opts } from "./unocss.ts";

blog({
  title: "Pyae Sone Aung's Blog",
  avatar: "https://avatars.githubusercontent.com/u/44226349?v=4",
  avatarClass: "rounded-full",
  links: [
    { title: "GitHub", url: "https://github.com/PyaeSoneAungrgn" },
  ],
  dateStyle: "long",

  middlewares: [
    ga("UA-159336639-4"),
  ],

  ogImage: "https://res.cloudinary.com/pyaesoneaung/image/upload/v1657632087/blog_og_image.png",

  unocss: unocss_opts,
  theme: "light",
  favicon: "https://avatars.githubusercontent.com/u/44226349?v=4",
});
