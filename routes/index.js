var express = require('express');
var handle
var router = express.Router();

var entries = {
    'student-corner': true,
    entries: [
        {
	    title: 'Syllable Segmentation and Blending',
	    body: '<h5>Level: Easy/Medium</h5><p>This is taking two or more syllables and taking them apart or putting them together. An example of syllable segmentation: “What are the two parts in baseball? Base, ball!” Blending: “Lets put together two word parts- base and ball make…? Baseball!” More difficult words can be used such as “porcupine” or “table”. For beginners, take a picture of a baseball and cut it in half to demonstrate the two parts. For advanced learners practice syllable deletion. “I want you to say the word baseball without base” Then the student would say “ball”.</p>'
        },
        {
	    title: 'Onset-rime Blending and Segmentation',
	    body: '<h5>Level: Medium</h5><p>This might remind you of “word families”. Such as the word family “at” can make the words “cat, rat, fat, sat”. A fun activity is to pick a word family then practice putting different letters in front of it to read the words! Students can make real words and “nonsense words” (words that aren’t real).</p>'
        },
        {
	    title: 'Blending and Segmenting an Individual Phoneme',
	    body: '<h5>Level: Medium/Difficult</h5><p>A phoneme is an individual sound (such as /b/ or /ch/ ). We always start by teaching children to blend the sounds which is putting sounds together to make a word. “/k/ /a/ /t/, what word do those letters make? Cat!” One way we practice this in the classroom is by using counters, one for each sound and we move each counter when we make the sound. This helps students see and feel the sounds they’re putting together. Segmenting phonemes is similar- when given a word a student is able to tell the sounds of each word “Tell me the sounds you hear in the word hot.” “/h/ /o/ /t/”. This can be practiced by showing students a pictures of a word with 3 sounds and asking them to tap out each sound.</p>'
        },
        {
	    title: 'Phoneme Deletion and Manipulation',
	    body: '<h5>Level: Difficult</h5><p>Phonemes are the individual sounds of a word- phoneme deletion would be “Say the word ‘cat’ without the /k/ sound.” “At!”. Maniuplation of the phonemes would be to say “Say the word ‘cat’ but with the /m/ sound at the beginning” “Mat!”.</p>'
        },
        {
	    title: 'What Should I do if my child is still learning their letters and sounds?',
	    body: '<p>If your child is still learning to identify letters, use the website resources, point out letters and their sounds everywhere you go, make letters out of play-do, or put shaving cream on a table and make letters! This should be fun for your student to learn.</p>'
        }
    ]
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { home: true });
});

router.get('/student-corner', function(req, res, next) {
  res.render('student-corner', entries);
});

router.get('/upcoming-events', function(req, res, next) {
  res.render('upcoming-events', { 'upcoming-events': true });
});

router.get('/classroom-needs', function(req, res, next) {
  res.render('classroom-needs', { 'classroom-needs': true });
});

router.get('/resources', function(req, res, next) {
  res.render('resources', { 'resources': true });
});

module.exports = router;
