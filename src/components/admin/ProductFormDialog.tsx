"use client";

import { useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProductStore, type CatalogProduct } from "@/store/useProductStore";

const categoryOptions = [
  { id: "brightening", label: "Brightening" },
  { id: "cleansing", label: "Cleansing" },
  { id: "bundle", label: "Bundles" },
];

interface ProductFormDialogProps {
  open: boolean;
  mode: "add" | "edit";
  product?: CatalogProduct | null;
  onOpenChange: (open: boolean) => void;
}

function ProductForm({
  mode,
  product,
  onOpenChange,
}: {
  mode: "add" | "edit";
  product: CatalogProduct | null | undefined;
  onOpenChange: (open: boolean) => void;
}) {
  const addProduct = useProductStore((s) => s.addProduct);
  const updateProduct = useProductStore((s) => s.updateProduct);

  const [name, setName] = useState(product?.name ?? "");
  const [price, setPrice] = useState(product?.price ?? "");
  const [category, setCategory] = useState(product?.category ?? categoryOptions[0].id);
  const [tag, setTag] = useState(product?.tag ?? "");
  const [description, setDescription] = useState(product?.description ?? "");
  const [image, setImage] = useState(product?.image ?? "");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(file);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!image) {
      toast.error("Please select a product photo");
      return;
    }

    const payload = {
      name,
      price,
      category,
      tag: tag.trim() ? tag : null,
      description,
      image,
    };

    if (mode === "add") {
      addProduct(payload);
      toast.success("Product added");
    } else if (product) {
      updateProduct(product.id, payload);
      toast.success("Product updated");
    }

    onOpenChange(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="product-name" className="text-[#4A2D6B]">
          Name
        </Label>
        <Input
          id="product-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="product-price" className="text-[#4A2D6B]">
          Price
        </Label>
        <Input
          id="product-price"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="₱65.00"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="product-category" className="text-[#4A2D6B]">
          Category
        </Label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger id="product-category" className="border-[#B8A8D4]/40 text-[#4A2D6B]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {categoryOptions.map((opt) => (
              <SelectItem key={opt.id} value={opt.id}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="product-tag" className="text-[#4A2D6B]">
          Tag (optional)
        </Label>
        <Input
          id="product-tag"
          type="text"
          value={tag ?? ""}
          onChange={(e) => setTag(e.target.value)}
          placeholder="e.g. Save"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="product-description" className="text-[#4A2D6B]">
          Description
        </Label>
        <Textarea
          id="product-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="product-photo" className="text-[#4A2D6B]">
          Photo
        </Label>
        {image && (
          <img
            src={image}
            alt="Product preview"
            className="w-24 h-24 rounded-xl object-cover bg-[#EFE9F5] border border-[#B8A8D4]/30"
          />
        )}
        <input
          id="product-photo"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="text-sm text-[#4A2D6B] file:mr-3 file:px-4 file:py-2 file:rounded-full file:border-0 file:text-xs file:font-medium file:bg-[#EFE9F5] file:text-[#4A2D6B] hover:file:bg-[#B8A8D4]/40 file:transition-colors"
        />
      </div>

      <DialogFooter>
        <button
          type="submit"
          className="btn-active w-full px-7 py-3 bg-[#4A2D6B] text-white font-medium text-sm rounded-full hover:bg-[#5B3A7A] transition-all duration-300"
        >
          {mode === "add" ? "Add Product" : "Save Changes"}
        </button>
      </DialogFooter>
    </form>
  );
}

export default function ProductFormDialog({
  open,
  mode,
  product,
  onOpenChange,
}: ProductFormDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-display text-[#4A2D6B]">
            {mode === "add" ? "Add Product" : "Edit Product"}
          </DialogTitle>
          <DialogDescription className="text-[#9B85C4]">
            {mode === "add"
              ? "Add a new product to the storefront catalog."
              : "Update this product's details."}
          </DialogDescription>
        </DialogHeader>

        <ProductForm
          key={product?.id ?? "new"}
          mode={mode}
          product={product}
          onOpenChange={onOpenChange}
        />
      </DialogContent>
    </Dialog>
  );
}
