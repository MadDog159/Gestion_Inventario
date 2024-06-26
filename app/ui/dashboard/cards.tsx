import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      /> */}
    </>
  );
}

export function Card({
  title, category, stock
}: {
  title: string;
  category: string;
  stock: number;
}) {
  return (
    <div className="rounded-xl bg-gray-50 p-4 shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">Categoría: {category}</p>
      <p className="text-sm text-gray-600">Stock: {stock}</p>
    </div>
  );
}
