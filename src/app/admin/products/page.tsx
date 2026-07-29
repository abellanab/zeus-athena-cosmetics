"use client";

import { useEffect, useState } from "react";
import { Package, Pencil, Trash2, Plus } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import ProductFormDialog from "@/components/admin/ProductFormDialog";
import { useProductStore, type CatalogProduct } from "@/store/useProductStore";

export default function AdminProductsPage() {
  const products = useProductStore((s) => s.products);
  const deleteProduct = useProductStore((s) => s.deleteProduct);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<"add" | "edit">("add");
  const [editingProduct, setEditingProduct] = useState<CatalogProduct | null>(null);

  useEffect(() => {
    useProductStore.persist.rehydrate();
  }, []);

  function handleAdd() {
    setDialogMode("add");
    setEditingProduct(null);
    setDialogOpen(true);
  }

  function handleEdit(product: CatalogProduct) {
    setDialogMode("edit");
    setEditingProduct(product);
    setDialogOpen(true);
  }

  function handleDelete(product: CatalogProduct) {
    if (window.confirm(`Delete "${product.name}"? This cannot be undone.`)) {
      deleteProduct(product.id);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <h2 className="font-display text-xl lg:text-2xl font-bold text-[#4A2D6B]">
          Manage Products
        </h2>
        <button
          onClick={handleAdd}
          className="btn-active inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#4A2D6B] text-white text-xs font-medium hover:bg-[#5B3A7A] transition-all duration-300"
        >
          <Plus className="w-4 h-4" />
          Add Product
        </button>
      </div>

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 py-16 border border-[#B8A8D4]/30 rounded-2xl">
          <Package className="w-10 h-10 text-[#9B85C4]" />
          <p className="text-[#9B85C4] text-sm">No products yet</p>
        </div>
      ) : (
        <div className="border border-[#B8A8D4]/30 rounded-2xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-[#B8A8D4]/30">
                <TableHead className="text-[#4A2D6B]">Product</TableHead>
                <TableHead className="text-[#4A2D6B]">Price</TableHead>
                <TableHead className="text-[#4A2D6B]">Category</TableHead>
                <TableHead className="text-[#4A2D6B] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id} className="border-[#B8A8D4]/30">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover bg-[#EFE9F5] flex-shrink-0"
                      />
                      <span className="text-[#4A2D6B] font-medium">{product.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-[#4A2D6B]">{product.price}</TableCell>
                  <TableCell className="text-[#4A2D6B] capitalize">
                    {product.category}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => handleEdit(product)}
                        className="btn-active inline-flex items-center justify-center p-2 rounded-full text-[#4A2D6B] hover:bg-[#EFE9F5] transition-colors"
                        aria-label={`Edit ${product.name}`}
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(product)}
                        className="btn-active inline-flex items-center justify-center p-2 rounded-full text-[#4A2D6B] hover:bg-[#EFE9F5] transition-colors"
                        aria-label={`Delete ${product.name}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <ProductFormDialog
        open={dialogOpen}
        mode={dialogMode}
        product={editingProduct}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}
