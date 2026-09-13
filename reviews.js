/* ===========================================================
   REVIEWS
   One object per game you've finished or put down for good.

   id        unique short string, used for the shareable link
   title     the game's name
   date      when you finished/dropped it, "YYYY-MM-DD"
   status    "finished" or "dropped"
   rating    0-10 (can use .5)
   tags      short lowercase words, used for the filter bar
   excerpt   one or two sentences shown in the list view
   body      array of paragraph strings — the full review
=========================================================== */
const REVIEWS = [
  {
    id: "final-fantasy-14-heavensward",
    title: "Final Fantasy 14: Heavensward",
    date: "2026-03-01",
    status: "finished",
    rating: 9,
    tags: ["jrpg", "final fantasy"],
    excerpt: "Replace this excerpt with your own one-line verdict — this entry is a placeholder showing the format.",
    body: [
      "This is a placeholder review — swap this paragraph for your actual thoughts. A good opener says what kind of game this is and what it's trying to do before you judge whether it succeeds.",
      "Use the next paragraph or two for specifics: what worked, what dragged, a moment that stuck with you. Since you've cleared the whole Kiseki series, this is a good spot for series context — how this entry compares to the others, whether it's a good starting point, that kind of thing.",
      "Close with your actual verdict and who you'd recommend it to. Delete this placeholder text and write your own — the rating above is also a placeholder."
    ]
  },
  {
    id: "cyberpunk-2077",
    title: "Cyberpunk 2077 + Phantom Liberty",
    date: "2026-01-10",
    status: "finished",
    rating: 7,
    tags: ["cyberpunk"],
    excerpt: "An example of a 'dropped' entry — for games you quit for good rather than finished.",
    body: [
      "Not every game gets finished, and that's worth logging too. Use a dropped entry to note how far you got and why you stopped.",
      "Delete this sample entry once you've got real ones to replace it with."
    ]
  },
  {
    id: "trails-beyond-the-horizon",
    title: "Trails Beyond the Horizon",
    date: "2026-03-17",
    status: "finished",
    rating: 8.5,
    tags: ["jrpg", "trails"],
    excerpt: "Replace this excerpt with your own one-line verdict — this entry is a placeholder showing the format.",
    body: [
      "This is a placeholder review — swap this paragraph for your actual thoughts. A good opener says what kind of game this is and what it's trying to do before you judge whether it succeeds.",
      "Use the next paragraph or two for specifics: what worked, what dragged, a moment that stuck with you. Since you've cleared the whole Kiseki series, this is a good spot for series context — how this entry compares to the others, whether it's a good starting point, that kind of thing.",
      "Close with your actual verdict and who you'd recommend it to. Delete this placeholder text and write your own — the rating above is also a placeholder."
    ]
  },
{
  id: "tsukihime",
  title: "Tsukihime + Plus Disc",
  date: "2026-04-18",
  status: "finished",
  rating: 9,
  tags: ["visual novel"],
  excerpt: "Placeholder — replace with your verdict. Update the date above to when you actually finished it.",
  body: [
    "Placeholder text — swap in your real thoughts on the routes, the writing, and how it compares to the rest of the Nasuverse.",
    "Don't forget to set an actual rating in place of the 0 above."
  ]
},
{
  id: "witch-on-the-holy-night",
  title: "Witch on the Holy Night",
  date: "2026-05-01",
  status: "finished",
  rating: 7,
  tags: ["visual novel"],
  excerpt: "Placeholder — replace with your verdict. Update the date above to when you actually finished it.",
  body: [
    "Placeholder text — swap in your real thoughts here.",
    "Don't forget to set an actual rating in place of the 0 above."
  ]
},
{
  id: "fate-extra",
  title: "Fate/Extra",
  date: "2026-05-17",
  status: "finished",
  rating: 8,
  tags: ["rpg", "fate"],
  excerpt: "Placeholder — replace with your verdict. Update the date above to when you actually finished it.",
  body: [
    "Placeholder text — swap in your real thoughts here.",
    "Don't forget to set an actual rating in place of the 0 above."
  ]
},
{
  id: "drakengard-1",
  title: "Drakengard",
  date: "2026-05-29",
  status: "finished",
  rating: 7,
  tags: ["action rpg", "drakengard"],
  excerpt: "Placeholder — replace with your verdict. Update the date above to when you actually finished it.",
  body: [
    "Placeholder text — swap in your real thoughts here.",
    "Don't forget to set an actual rating in place of the 0 above."
  ]
},
{
  id: "kagetsu-tohya",
  title: "Kagetsu Tohya",
  date: "2026-07-01",
  status: "finished",
  rating: 5,
  tags: ["visual novel"],
  excerpt: "Placeholder — replace with your verdict. Update the date above to when you actually finished it.",
  body: [
    "Placeholder text — swap in your real thoughts here.",
    "Don't forget to set an actual rating in place of the 0 above."
  ]
},
{
  id: "fire-emblem-blazing-blade",
  title: "Fire Emblem: The Blazing Blade",
  date: "2026-08-01",
  status: "finished",
  rating: 8.5,
  tags: ["srpg", "fire emblem"],
  excerpt: "Placeholder — replace with your verdict. Update the date above to when you actually finished it.",
  body: [
    "Placeholder text — swap in your real thoughts here.",
    "Don't forget to set an actual rating in place of the 0 above."
  ]
},
{
  id: "fire-emblem-shadow-dragon",
  title: "Fire Emblem: Shadow Dragon",
  date: "2026-08-29",
  status: "finished",
  rating: 7,
  tags: ["srpg", "fire emblem"],
  excerpt: "Placeholder — replace with your verdict. Update the date above to when you actually finished it.",
  body: [
    "Placeholder text — swap in your real thoughts here.",
    "Don't forget to set an actual rating in place of the 0 above."
  ]
} 
];

/* ===========================================================
   NOW PLAYING
   Games you're currently in the middle of. No rating yet —
   these move to REVIEWS above once you finish or drop them.

   game   the game's name
   note   a line or two on where you're at
=========================================================== */
const NOW_PLAYING = [
  {
    game: "Final Fantasy 7",
    note: "There ain't no gettin' offa this train we on, not till we get to the end of the line"
  }
];
