"use client";
export default function Cashier() {
  return (
    <section className="space-y-2">
      <div className="space-y-1">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Meja
        </label>
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <button className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-[180px]">
              1
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Print Struk
            </button>
          </div>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2">
              Kosongkan Meja
            </button>
        </div>
      </div>
      <div className="space-y-3">
        <div className="w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <caption className="mt-4 text-sm text-muted-foreground">
              Terima kasih sudah makan di <b>Restoran</b>
            </caption>
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 text-right w-[100px]">Jumlah</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Jumlah</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 w-[100px]">Jumlah</th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium text-right">
                  2
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">tes</td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">Gratis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
