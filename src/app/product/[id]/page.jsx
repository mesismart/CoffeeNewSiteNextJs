import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Description from "@/components/templates/product/Description";
import Detail from "@/components/templates/product/Detail";
import Gallery from "@/components/templates/product/Gallery";
import RelatedProducts from "@/components/templates/product/RelatedProducts";
import React from "react";
import ProductModel from "./../../../../models/Product";
import connectToDB from "../../../../configs/db";
import Tabs from "@/components/templates/product/Tabs";
import { comment } from "postcss";

async function Product({ params }) {
  const productId = params.id;
  console.log("productId: ", productId);

  connectToDB();
  const product = await ProductModel.findOne({
    _id: productId,
  }).populate("comments");
  console.log("Product:", product);

  const RelatedProduct = await ProductModel.find({
    smell: product.smell,
  }).limit(4);

  return (
    <main>
      <Navbar isFixed={true} />

      <div className="flex px-10 pt-32 pb-16">
        <div className="h-[50%] w-[70%]">
          <Detail product={JSON.parse(JSON.stringify(product))} />
        </div>
        <div className="h-[30%] w-[35%] ">
          <Gallery />
        </div>
      </div>

      <Tabs product={JSON.parse(JSON.stringify(product))} />
      <RelatedProducts
        relatedProduct={JSON.parse(JSON.stringify(RelatedProduct))}
      />
      <Footer />
    </main>
  );
}

export default Product;
