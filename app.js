const express = require('express');
const app = express();
const port = 3000; 

app.get('/api', (req, res) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;

  const current_day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const now = new Date()
  const utc_time = now.toISOString().slice(0, 19) + 'Z'; 

  const github_file_url = 'https://github.com/Favourphp/Zuri/app.js';
  const github_repo_url = 'https://github.com/favourphp/Zuri';

  const response_data = {
    slack_name,
    current_day,
    utc_time,
    track,
    github_file_url,
    github_repo_url,
    status_code: 200,
  };

  res.json(response_data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
