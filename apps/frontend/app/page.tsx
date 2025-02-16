import { fetchData } from './server'
export default async function Home() {
    const data = await fetchData()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <p>{data.message}</p>
    </div>
  );
}
