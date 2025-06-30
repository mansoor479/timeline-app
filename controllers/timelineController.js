const timeline = [
  { author: 'Michael Choi', 
    date: '23 Jan 2013',
    content: "This is my message    This is my message This is my message This is my messageThis is my message" },

  { author: 'Michael Choi',
     date: '15 Jan 2013',
     content: "This is my message    This is my message This is my message This is my messageThis is my message" },

  { author: 'Cory Whiteland',
     date: '15 Jan 2013', 
     content: "This is my message    This is my message This is my message This is my messageThis is my message" },
     
  { author: 'Cory Whiteland',
     date: '01 Jan 2013', 
     content: "This is my message    This is my message This is my message This is my messageThis is my message" }
];

exports.getTimeline = (req, res) => {
  res.render('timeline', { timeline });
};
