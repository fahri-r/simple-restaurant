"use client";
import { AiOutlineFile, AiOutlineDelete } from "react-icons/ai";
import { FormEvent, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IconContext } from "react-icons";
import { TrashIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const [menu, setMenu] = useState([]);

  function randomInRange(from: number, to: number) {
    var r = Math.random();
    return Math.floor(r * (to - from) + from);
  }

  const handleDelete = (id: number) => {
    setMenu(
      menu.filter(function (item) {
        return item.id !== id;
      })
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMenu = document?.getElementById("menu")?.value;
    if (newMenu) {
      setMenu((oldData) => [
        ...oldData,
        {
          id: randomInRange(1, 999999),
          menu: newMenu,
        },
      ]);
    }
    inputRef.current.value = "";
  };

  useEffect(() => {
    if (localStorage.getItem("menus")) {
      const data = JSON.parse(localStorage.getItem("menus"));
      setMenu(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("menus", JSON.stringify(menu));
  }, [menu]);

  const inputRef = useRef(null);

  return (
    <section className="space-y-4">
      <div className="space-y-2">
        <div className="space-y-1">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Menu Makanan
          </label>
          <form className="flex space-x-2" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              id="menu"
              type="text"
              name="menu"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            />
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
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
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
