import { AiOutlineFile } from "react-icons/ai";

export default function Home() {
  return (
    <main className="p-6 space-y-5 w-[650px]">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-semibold">[Contoh] Sistem Restoran</h1>
          <p className="text-muted-foreground text-sm">
            Ambisius Coding Challenge #230916H
          </p>
        </div>
        <button>
          <div className="border rounded-full p-4 hover:bg-muted transition-colors cursor-pointer bg-background shadow">
            <AiOutlineFile />
          </div>
        </button>
      </div>
      <div dir="ltr" data-orientation="horizontal">
        <div className="flex justify-between">
          <div
            className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"
            role="tablist"
            aria-orientation="horizontal"
            tabIndex={0}
            data-orientation="horizontal"
            style={{ outline: "none" }}
          >
            <a>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm min-w-[100px]">
                Menu
              </button>
            </a>
            <a>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm min-w-[100px]">
                Menu
              </button>
            </a>
            <a>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm min-w-[100px]">
                Menu
              </button>
            </a>
          </div>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-[100px]">
            Reset
          </button>
        </div>
        <div className="px-6 py-4 mt-4 bg-muted rounded-md min-h-[300px]">
          <section className="space-y-4">
            <div className="space-y-2">
              <div className="space-y-1">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Menu Makanan
                </label>
                <div className="flex space-x-2">
                  <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"></input>
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-[120px]">
                    Tambah
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <caption className="mt-4 text-sm text-muted-foreground">
                  Daftar menu restoran Anda
                </caption>
                <thead className="[&_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 w-[100px]">
                      ID
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                      Menu
                    </th>
                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 text-right">
                      Hapus?
                    </th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                      551997
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      tes
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 flex justify-end">
                      Hapus
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
      <p className="text-sm text-muted-foreground text-center">
        Semua data disimpan di Local Storage Browser
      </p>
    </main>
  );
}
