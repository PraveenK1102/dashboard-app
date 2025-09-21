export default function OrderLoading() {
  return (
    <table className="min-w-full table-auto" aria-live="polite" aria-busy="true">
      <thead className="border-b border-black-10 dark:border-white-10">
        <tr className="text-left">
          <th className="w-10 p-3"></th>
          <th className="p-3 text-xs font-medium text-black-40 dark:text-white-40">Order ID</th>
          <th className="p-3 text-xs font-medium text-black-40 dark:text-white-40">User</th>
          <th className="p-3 text-xs font-medium text-black-40 dark:text-white-40">Project</th>
          <th className="p-3 text-xs font-medium text-black-40 dark:text-white-40">Address</th>
          <th className="p-3 text-xs font-medium text-black-40 dark:text-white-40">Date</th>
          <th className="p-3 text-xs font-medium text-black-40 dark:text-white-40">Status</th>
          <th className="w-10 p-3"></th>
        </tr>
      </thead>
      <tbody>
      {Array.from({ length: 10 }).map((_, i) => (
        <tr key={i} className="h-10 border-b border-black-5 dark:border-white-10 animate-pulse">
          <td className="px-3 py-2">
            <div className="w-4 h-4 rounded bg-black-5 dark:bg-white-5" />
          </td>
          <td className="px-3 py-2">
            <div className="h-3 w-16 rounded bg-black-5 dark:bg-white-5" />
          </td>
          <td className="px-3 py-2">
            <div className="h-3 w-24 rounded bg-black-5 dark:bg-white-5" />
          </td>
          <td className="px-3 py-2">
            <div className="h-3 w-28 rounded bg-black-5 dark:bg-white-5" />
          </td>
          <td className="px-3 py-2">
            <div className="h-3 w-40 rounded bg-black-5 dark:bg-white-5" />
          </td>
          <td className="px-3 py-2">
            <div className="h-3 w-20 rounded bg-black-5 dark:bg-white-5" />
          </td>
          <td className="px-3 py-2">
            <div className="h-6 w-16 rounded-full bg-black-5 dark:bg-white-5" />
          </td>
          <td className="px-3 py-2 text-right">
            <div className="h-6 w-6 rounded bg-black-5 dark:bg-white-5 ml-auto" />
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}