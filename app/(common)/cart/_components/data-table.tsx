"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IProductDTO } from "@/features/cart/cartTypes";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function CartDataTable<
  TData extends IProductDTO,
  TValue
>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {

  const table = useReactTable({
    data,
    columns,
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel:
      getPaginationRowModel(),
  });

  // TOTAL PRICE
  const totalPrice = data.reduce((acc, item) => acc + Number(item.price) * 1, 0);
  
  return (
    <div className="overflow-hidden rounded-md border">

      <Table className="w-full">
        <TableHeader>
          {table
            .getHeaderGroups()
            .map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(
                  (header) => (
                    <TableHead
                      key={header.id}
                      className="text-gray-800"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column
                              .columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                )}
              </TableRow>
            ))}
        </TableHeader>

        <TableBody>

          {/* TABLE ROWS */}
          {table.getRowModel().rows?.length ? (
            <>
              {table
                .getRowModel()
                .rows.map((row) => (
                  <TableRow
                    key={row.id}
                  >
                    {row
                      .getVisibleCells()
                      .map((cell) => (
                        <TableCell
                          key={cell.id}
                        >
                          {flexRender(
                            cell.column
                              .columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                  </TableRow>
                ))}

              {/* TOTAL ROW */}
              <TableRow className="bg-gray-100 font-semibold h-14">
                <TableCell colSpan={2} className="text-right">Total</TableCell>
                <TableCell>₹ {totalPrice}</TableCell>
                <TableCell>Qty: {10}</TableCell>
                <TableCell>
                  <Link href="/checkout">
                    <Link href={'/checkout'} className="bg-green-600 hover:bg-green-700 transition ease-in-out duration-200 text-white py-2 px-2">
                      Process To Pay
                    </Link>
                  </Link>
                </TableCell>

              </TableRow>
            </>
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center"
              >
                No Products Available in
                the Cart.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* PAGINATION */}
      <div className="flex items-center justify-end space-x-2 py-4 px-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() =>table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            table.nextPage()
          }
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}