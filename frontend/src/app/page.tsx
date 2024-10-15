import axios from "axios";
import { Button } from "@/components/ui/button";

const getStrapiData = async (path: string): Promise<any> => {
  const baseUrl = `http://localhost:1337`;
  try {
    const res = await axios.get(baseUrl + path);
    const { data } = res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
export default async function Home() {
  const { title, description } = await getStrapiData("/api/home-page");

  return (
    <main className="container mx-auto py-6">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-xl mt-4">{description}</p>
      <Button>Click Me!</Button>
    </main>
  );
}
