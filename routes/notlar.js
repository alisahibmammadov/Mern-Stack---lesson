const express = require("express");
const { notOlustur, notlariGetir, notGetir, notSil, notGuncelle } = require("../controllers/notController");

const router = express.Router();

router.get("/", notlariGetir);

router.get("/:id", notGetir);

router.post("/", notOlustur);

router.delete("/:id", notSil);

router.patch("/:id", notGuncelle);

module.exports = router;
