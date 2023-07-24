const router = require("express").Router()
const Report = require("../models/Report")

// Retrieve all reports
router.get('/', async (req, res) => {
  console.log("REPORTS CALLED")
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
  
      res.redirect('/reports');
    } catch (err) {
      console.error('Error creating report:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
});

router.get("/display/:id", (req, res) => {
  const filePath = path.join(__dirname, "../front/test2.html")

  res.sendFile(filePath,(err) => {
      if(err) {
          console.log(err)
      }
  })
})

  
module.exports = router;