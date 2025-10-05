import { ProductSlider } from "@/components/product-slider";

import { productData } from "@/lib/data";

export const Products = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <h2 className="title">Explore Our Premium Furniture Collection</h2>
          <p className="subtitle max-w-160 mx-auto mb-12 lg:mb-17.5">
            Discover modern and timeless furniture pieces crafted with superior
            quality materials — designed to elevate your home or workspace.
          </p>
        </div>
        <ProductSlider products={productData} />
      </div>
    </section>
  );
};
