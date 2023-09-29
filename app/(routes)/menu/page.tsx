"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import Menu from "@/app/_types/Menu";
import random from "@/app/_lib/random";

const INITIAL_FORM = { menu: "", price: 0 };

export default function Menu() {
  const [menu, setMenu] = useState<Menu[]>([]);
  const [form, setForm] = useState(INITIAL_FORM);

  const handleDelete = (id: number) => {
    setMenu(
      menu.filter(function (item) {
        return item.id !== id;
      })
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMenu: Menu = {
      id: random(1, 999999),
      menu: form.menu,
      price: form.price,
    };

    if (newMenu) {
      setMenu((oldData: Menu[]) => [...oldData, newMenu]);
    }
    setForm(INITIAL_FORM);
    (e.target as HTMLFormElement).reset()
  };

  useEffect(() => {
    if (localStorage.getItem("menus")) {
      const data = JSON.parse(localStorage!.getItem("menus")!);
      setMenu(data);
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };

  useEffect(() => {
    if (menu.length > 0) {
      localStorage.setItem("menus", JSON.stringify(menu));
    }
  }, [menu]);

  return (
    <section className="space-y-4">
      <div className="space-y-2">
        <div className="space-y-1">
          <form className="flex space-x-2 items-end" onSubmit={handleSubmit}>
            <div className="w-full">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Menu Makanan
              </label>
              <input
                id="menu"
                type="text"
                name="menu"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                onChange={(e) => handleChange(e)}
                placeholder="Tambahkan disini..."
                required
              />
            </div>
            <div className="w-full">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Harga
              </label>
              <input
                id="price"
                type="number"
                name="price"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                onChange={(e) => handleChange(e)}
                placeholder="Tambahkan disini..."
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-[120px]"
            >
              Tambah
            </button>
          </form>
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
            {menu &&
              menu.map((x, i) => (
                <tr
                  key={i}
                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                >
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                    {x.id}
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    {x.menu}
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 flex justify-end">
                    <TrashIcon
                      className="text-red-300 hover:text-red-500 cursor-pointer h-6 w-6"
                      onClick={() => handleDelete(x.id)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
