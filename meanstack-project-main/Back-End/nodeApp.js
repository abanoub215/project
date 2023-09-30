import express from "express";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import { productModel } from "./database/models/product.model.js";
import { mobilesModel } from "./database/models/mobiles.model.js";
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
dbConnection();

//...........................add product.................................
app.post("/productsAdd", async function (req, res) {
  const {
    productName,
    productPrice,
    productDescription,
    productImage,
    productStatus,
    productType,
    pageNumber,
    id
  } = req.body;
  let productAdded = await productModel.insertMany({
    productName,
    productPrice,
    productDescription,
    productImage,
    productStatus,
    productType,
    pageNumber,
    id
  });
  if (productAdded) {
    res.json({ message: "success", productAdded });
  } else {
    res.json({ message: "failed" });
  }
});
//...........................get all Home Page products //nooran.................................
app.get("/products", async function (req, res) {
  let getAllProducts = await productModel.find( {id: { $gte: 1, $lte: 9 }});
  if (getAllProducts) {
    res.send(getAllProducts);
  } else {
    res.json({ message: "failed" });
  }
});
//...........................get beauty products only //nooran .................................
app.get("/beautyProducts", async function (req, res) {
  let getBeautyProducts = await productModel.find({productType: { $eq:"Beauty"}});
  if (getBeautyProducts) {
    res.send(getBeautyProducts);
  } else {
    res.json({ message: "failed" });
  }
});
//...........................get ## .................................
app.get("/products", async function (req, res) {
  let getAllProducts = await productModel.find();
  if (getAllProducts && getAllProducts.productType == "") {
    res.send(getAllProducts);
  } else {
    res.json({ message: "failed" });
  }
});
//...........................get product by ID //nooran.................................
app.get("/products/:productId", async function (req, res) {
  const productId = +req.params.productId;
  let getSingleProduct2 = await productModel.findOne({
    id: productId,
  });
  if (getSingleProduct2) {
    res.send(getSingleProduct2);
  } else {
    res.json({ message: "failed" });
  }
});

//...........................home search for product //nooran.................................
app.post("/products/search", async function (req, res) {
  const { productName } = req.body;
  let product = await productModel.find({
    productName: { $regex: `${productName}` },
  });
  if (product.length) {
    res.send({ product });
  } else {
    res.json({ message: "NO product MATCHED" });
  }
});

//pagination search

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Get all mobiles by //ABANOUB ABOELSAAD
app.get("/mobiles", async function (req, res) {
  try {
    const getAllMobiles = await mobilesModel.find({ id: { $gte: 1, $lte: 9} });
    if (getAllMobiles && getAllMobiles.length > 0) {
      res.send(getAllMobiles);
    } else {
      res.json({ message: "No mobiles found" });
    }
  } catch (error) {
    console.error("Error fetching mobiles:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get mobile by ID BY// ABANOUB ABOELSAAD
app.get("/mobiles/:mobilesId", async function (req, res) {
  const mobileId = parseInt(req.params.mobilesId, 10);

  try {
    const getSingleMobile = await mobilesModel.findOne({ id: mobileId });

    if (getSingleMobile) {
      res.send(getSingleMobile);
    } else {
      res.status(404).json({ message: "Mobile not found" });
    }
  } catch (error) {
    console.error("Error fetching mobile by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
