import type { Route } from "./+types/home";
import { Table } from "~/component/Table";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <h1 className='text-4xl'>Home</h1>
      <Table />
    </>
  )
}
