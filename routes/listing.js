const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing");
const { isLoggedIn } = require("../middleware.js");
const multer = require("multer");

const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

//index route
router.get("/", async (req, res) => {
  const { location, minPrice, maxPrice, propertyType } = req.query;
  // Build the filter object based on query parameters
  const filter = {};
  if (location) filter.location = { $regex: location, $options: "i" }; // Case-insensitive location filter
  if (minPrice) filter.price = { ...filter.price, $gte: parseInt(minPrice) }; // Minimum price filter spread operator for preserving other filters
  if (maxPrice) filter.price = { ...filter.price, $lte: parseInt(maxPrice) }; // Maximum price filter
  if (propertyType) filter.propertyType = propertyType; // Property type filter
  console.log(filter);
  const allListings = await Listing.find(filter);
  res.render("listings/index.ejs", { allListings, query: req.query });
});

//new route
router.get("/new", isLoggedIn, (req, res) => {
  res.render("listings/new.ejs");
});

const MAP_KEY= process.env.MAP_KEY;
//show route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const data = await Listing.findById(id)
      .populate({
        path: "reviews",
        populate: {
          path: "author",
        },
      })
      .populate("owner");
    console.log("key in js:"+MAP_KEY);
    res.render("listings/show.ejs", { data,MAP_KEY });
  })
);

router.post(
  "/",
  upload.single("image"),
  wrapAsync(async (req, res) => {
    let data = req.body;
    let url = req.file.path;
    let filename = req.file.filename;
    data.image = { url, filename };
    // data.image = req.file.path;
    const new_listing = new Listing(data);
    new_listing.owner = req.user._id;
    await new_listing
      .save()
      .then((res) => {
        console.log("data saved");
      })
      .catch((err) => console.log(err));
    req.flash("success", "New Listing created");
    res.redirect("/listings");
  })
);

// router.post("/",upload.single('image'),(req,res) => {
//     res.send(req.file)
// })

//edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const data = await Listing.findById(id);
    res.render("listings/edit.ejs", { data });
  })
);

//update route
router.put(
  "/:id",
  isLoggedIn,
  upload.single("image"),
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const data = req.body;
    let listing = await Listing.findByIdAndUpdate(id, data);

    if (typeof req.file !== "undefined") {
      let url = req.file.path;
      let filename = req.file.filename;
      listing.image = { url, filename };
      await listing.save();
    }
    req.flash("success", "Listing updated");
    res.redirect(`/listings/${id}`);
  })
);

//delete route
router.delete(
  "/:id",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted");
    res.redirect("/listings");
  })
);

module.exports = router;
