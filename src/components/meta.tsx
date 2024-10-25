import { buildUrl } from "@/utils/buildUrl";
import { VARIABLES } from "@/utils/variables";
import Head from "next/head";
export const Meta = () => {
  const title = VARIABLES.name;
  const description =
    `You can enjoy conversations with 3D ${title} using only a web browser using a microphone, text input, and speech synthesis.`;
  const imageUrl = "https://auto-chat-chi.vercel.app/ogp-en.png";
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
};
