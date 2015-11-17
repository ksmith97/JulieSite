var express = require('express');
var handle
var router = express.Router();

var entries = {
    'learning-corner': true,
    entries: [
        {
	    title: 'Why is phonics important?',
	    body: '<p>Phonics is essentially what teaches your child to read and write. Knowing the sounds the letters make will help your child decode words while reading.  Phonics will also help your child discriminate which use while writing words.</p>'
        },
        {
	    title: 'Where do I start?',
	    body: '<p>Here! Below I have listed our main phonics skills and their difficulty level.</p>'
        },
        {
	    title: 'Word Comparison',
	    body: '<h5>Level: Easy</h5><p>This is how I can tell if students can discriminate between words. An example would be “Which of these words doesn’t belong? Cat, bat, hat, rat, sun?” Students should be able to discriminate that “sun” does not belong with the others. Continued oral practice at home can help with this skill.</p>'
        },
        {
	    title: 'Rhyming',
	    body: '<h5>Level: Easy/Medium<h5><p>This can be a difficult skill but it is one of the earlier taught skills. Example: “What word rhymes with cat? Bat!” To practice rhyming at home successful please reference the resource page for websites. Activities to do with your child would include reading a Dr. Seuss book or singing a song with rhymes while identifying them with children.</p>'
        },
        {
	    title: 'Sentence Segmentation',
	    body: '<h5>Level: Easy</h5><p>Sentence Segmentation is being able to determine how many words are in a sentence. Example: “All hens lay eggs” The student can clap each word or say “Four words in the sentence.” Some of the activities to practice sentence segmentation- make a board game (I can print some for you!) and have student move a space for each word in the said sentence. Whoever reaches the end wins.  Another idea is to take the first lines of common nursery rhymes and have students connect cubes (or line up any object) for each word, then see which nursery rhyme has more words!</p>'
        },
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

router.get('/learning-corner', function(req, res, next) {
  res.render('learning-corner', entries);
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
