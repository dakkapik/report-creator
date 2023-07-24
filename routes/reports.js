const router = require("express").Router()
const Report = require("../models/Report")
const path = require("path");

// Retrieve all reports
router.get('/', async (req, res) => {
    try {
      const reports = await Report.find();
      res.json(reports);
    } catch (err) {
      console.error('Error retrieving reports:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
});

// Create a new report
router.post('/', async (req, res) => {
    console.log(req.body)
    try {
      const { author_names,
      affiliations,
      contact_information,
      abstract_content,
      introduction_content,
      section1_content,
      section2_content,
      reference1 } = req.body;
  
      const newReport = new Report({
        author_names,// this should be array with it's own verification
        affiliations,
        contact_information,
        abstract_content,
        introduction_content,
        section1_content,
        section2_content,
        reference1 
      });
      const report = await newReport.save();
  
      res.redirect(`../display/${report._id}`);
    } catch (err) {
      console.error('Error creating report:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
});

router.get("/:id", async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    res.json(report);
  } catch (err) {
    console.error('Error retrieving reports:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
})

  
module.exports = router;