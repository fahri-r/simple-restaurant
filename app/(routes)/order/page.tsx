"use client";
export default function Order() {
  return (
    <section className="space-y-3">
      <div className="flex border rounded-md">
        <div className="flex-1 p-2 text-center hover:bg-muted cursor-pointer transition-colors bg-white text-foreground text-sm h-[60px] flex items-center justify-center rounded-l-md">
          Meja 1
        </div>
        <div className="flex-1 p-2 text-center hover:bg-muted cursor-pointer transition-colors bg-white text-foreground text-sm h-[60px] flex items-center justify-center rounded-l-md">
          Meja 2
        </div>
        <div className="flex-1 p-2 text-center hover:bg-muted cursor-pointer transition-colors bg-white text-foreground text-sm h-[60px] flex items-center justify-center rounded-l-md">
          Meja 3
        </div>
      </div>
      <div className="flex space-x-2">
        <div className="space-y-1 w-full">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Menu
          </label>
          <button className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-muted-foreground">
            Pilih Menu
          </button>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Jumlah
          </label>
          <button className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-[140px] text-muted-foreground">
            Kuantitas
          </button>
        </div>
      </div>
    </section>
  );
}
