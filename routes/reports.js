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
      const { name, intro, body, conclusion } = req.body;
  
      const newReport = new Report({
        name,
        intro,
        body,
        conclusion,
      });
      await newReport.save();
  
      res.redirect('/reports');
    } catch (err) {
      console.error('Error creating report:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
});
  
module.exports = router;