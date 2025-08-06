// app/routes/$page.tsx
import { useLocation, useParams } from "react-router";
import { Table } from "~/component/Table";

export default function DynamicPage() {
  const { page } = useParams();
  const location = useLocation();
  const { label } = location.state || {};

  return (
    <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">📄 {page}</h1>
        <Table />
    </div>
  );
}
