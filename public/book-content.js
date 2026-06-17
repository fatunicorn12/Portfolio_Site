// ── Iceland Journal Content ──
// Each day has a title and an array of entries.
// Entries split automatically: first half → left page, rest → right page.
//
// Entry shape:
//   tag:    label at top of card (e.g. "Fun Fact", "Kolfinna Says", "Claude Recommends")
//   border: card accent color — "blue" | "yellow" | "green"
//   title:  bold card heading
//   body:   paragraph text

var bookEntries = {

  day1: {
    title: "Day 1 · Arrival → Reykjavík",
    entries: [
      {
        tag: "Fun Fact",
        border: "blue",
        title: "The Blue Lagoon was an accident",
        body: "Created in 1976 when wastewater from a geothermal power plant pooled on a lava field. A psoriasis patient started bathing in it and swore his skin cleared up. Now it's Iceland's most visited attraction. Accidental genius."
      },
      {
        tag: "Kolfinna Says",
        border: "yellow",
        title: "Hot dog gospel",
        body: "Yes, Bæjarins Beztu is the famous one — but you can get an equally good hot dog at any gas station or inside any 1011 shop on the island. Iceland democratized the hot dog. Order it \"með öllu\" (with everything) wherever you go."
      },
      {
        tag: "Fun Fact",
        border: "blue",
        title: "Hallgrímskirkja took 41 years to build",
        body: "Started in 1945, finished in 1986. The architect died before it was completed. The facade is modeled after basalt lava columns — the same formations you'll see at Reynisfjara on Day 3. Pay to go up the tower. Worth it."
      },
      {
        tag: "Kolfinna Says",
        border: "yellow",
        title: "Food hall pick",
        body: "Both Pósthús and Hafnartorg food halls are downtown and really great — good option tonight if you want variety and don't want to commit to a sit-down. Hafnartorg is right on the waterfront near Harpa."
      },
      {
        tag: "Claude Recommends",
        border: "green",
        title: "Aurora conditions tonight",
        body: "Download \"My Aurora Forecast\" before dinner. KP 2+ and clear skies = drive 20 minutes out of the city. Even a faint greenish smear on the horizon counts. September is early season but dark enough by 9:30pm."
      }
    ]
  },

  day2: {
    title: "Day 2 · The Golden Circle",
    entries: [
      {
        tag: "Fun Fact",
        border: "blue",
        title: "Þingvellir: one of the world's oldest parliaments",
        body: "The Alþingi was established here in 930 AD. Viking chieftains gathered every summer to settle disputes and pass laws without a king. Iceland used this same outdoor site for nearly 900 years before moving parliament to Reykjavík."
      },
      {
        tag: "Fun Fact",
        border: "blue",
        title: "Silfra visibility exceeds 100 meters",
        body: "The water is glacial meltwater filtered through lava rock for 30–100 years. That's why it's some of the clearest water on Earth. It's also around 2°C year-round — the dry suits aren't optional, they're survival gear."
      },
      {
        tag: "Fun Fact",
        border: "blue",
        title: "You can touch two continents at once",
        body: "At Silfra you can reach both arms out and physically touch the North American and Eurasian tectonic plates simultaneously. They drift apart about 2cm per year — the gap is literally wider than it was last year."
      },
      {
        tag: "Kolfinna Says",
        border: "yellow",
        title: "Friðheimar tip",
        body: "The tomato soup comes with unlimited bread — don't fill up on it. The farm uses geothermal heat and artificial lighting to grow tomatoes year-round in a country with months of total darkness."
      },
      {
        tag: "Fun Fact",
        border: "blue",
        title: "The word \"geyser\" comes from Iceland",
        body: "The original Geysir gave English the word — but it barely erupts anymore. Watch Strokkur next door instead. It goes every 5–10 minutes. Look for the slight blue dome of water forming just before it blows — that's your camera cue."
      }
    ]
  },

  day3: {
    title: "Day 3 · Hot River + South Coast",
    entries: [
      {
        tag: "Kolfinna Says",
        border: "yellow",
        title: "Selfoss hot dog stand",
        body: "Good lunch stop — and the food hall there, Mjólkurbúið, is solid too. It's your midday break on the drive south."
      },
      {
        tag: "Fun Fact",
        border: "blue",
        title: "Reykjadalur: the further you go, the hotter it gets",
        body: "The geothermal river gradually heats up as you hike toward it. Further upstream = hotter water. Find your temperature sweet spot and just sit in a river on an Icelandic hillside. Bring a towel you don't mind smelling like sulfur forever."
      },
      {
        tag: "Fun Fact",
        border: "blue",
        title: "The sneaker wave warning is not decorative",
        body: "Reynisfjara's waves have no pattern and travel much further up the beach than expected. Stay at least 30 meters back from the water. No photo is worth it."
      },
      {
        tag: "Kolfinna Says",
        border: "yellow",
        title: "On Reynisfjara",
        body: "\"DO NOT GO CLOSE TO THE WATER!!! tourists die all the time because they don't listen.\" Also: there are a LOT of black sand beaches in Iceland — this one is touristy because of the cool basalt rocks and sea stacks, not just the sand."
      },
      {
        tag: "Fun Fact",
        border: "blue",
        title: "Why is the sand black?",
        body: "Basalt. When lava hits cold ocean water it shatters into tiny black fragments. The geometric basalt columns at Reynisfjara are the same material — lava that cracked as it slowly cooled and contracted. Iceland is a geology textbook you can walk through."
      }
    ]
  },

  day4: {
    title: "Day 4 · Vík · More to Explore",
    entries: [
      {
        tag: "Fun Fact",
        border: "blue",
        title: "Dyrhólaey was born from the sea",
        body: "The 120-meter promontory is the southernmost point of mainland Iceland, formed by an underwater eruption. Its giant sea arch is wide enough to sail a boat through — pilots have flown small planes under it. The name means roughly \"the hill island with the door hole.\""
      },
      {
        tag: "Fun Fact",
        border: "blue",
        title: "Puffins nest in these cliffs",
        body: "Dyrhólaey is a major Atlantic puffin colony in summer. By mid-September most have already left for the open ocean, where they spend winter bobbing on the waves — but scan the cliffs anyway. The lighthouse on top dates to 1927."
      },
      {
        tag: "Kolfinna Says",
        border: "yellow",
        title: "Kvernufoss is the secret one",
        body: "Everyone stops at Skógafoss — almost no one walks the short trail next door to Kvernufoss. You can scramble in behind the falling water. It's about a 15-minute walk from the Skógar museum parking lot. Wear waterproof shoes, the path gets muddy."
      },
      {
        tag: "Claude Recommends",
        border: "green",
        title: "A slow day is the point",
        body: "You already saw Reynisfjara on Day 3 — go back today for the cave alcoves and basalt organ pipes at a different tide. A relaxed Vík day is a gift on a road trip. Stock up at the Krónan in town before tomorrow; the stretch east toward the glacier lagoon is remote."
      }
    ]
  },

  day5: {
    title: "Day 5 · Glacier Lagoon",
    entries: [
      {
        tag: "Fun Fact",
        border: "blue",
        title: "The icebergs are ancient",
        body: "The ice calving off Breiðamerkurjökull glacier into Jökulsárlón can be hundreds to thousands of years old. The blue color comes from ice so dense and bubble-free that it absorbs red light and reflects blue. The deeper the blue, the older the ice."
      },
      {
        tag: "Fun Fact",
        border: "blue",
        title: "Diamond Beach is the same ice, second act",
        body: "The icebergs float out through the lagoon's narrow channel to the ocean, wash back onto the black sand, and slowly melt there. Walk across the road — it takes five minutes and feels like a completely different world."
      },
      {
        tag: "Fun Fact",
        border: "blue",
        title: "You've seen this lagoon before",
        body: "Jökulsárlón has appeared in A View to a Kill, Die Another Day, Batman Begins, and Tomb Raider. Nolan filmed parts of Interstellar in the Kirkjubæjarklaustur area nearby. Justin Bieber also shot a music video there, which feels equally cinematic depending on your taste."
      },
      {
        tag: "Kolfinna Says",
        border: "yellow",
        title: "On Kirkjubæjarklaustur",
        body: "Cool waterfalls and really good local arctic char (bleikja). Hotel Klaustur restaurant for dinner tonight — get the fish."
      }
    ]
  },

  day6: {
    title: "Day 6 · Reykjavík Day",
    entries: [
      {
        tag: "Fun Fact",
        border: "blue",
        title: "Iceland publishes more books per capita than anywhere on Earth",
        body: "One in ten Icelanders will publish a book in their lifetime. Every Christmas Eve the country exchanges books and reads through the night — called Jólabókaflóð (the Christmas Book Flood). It started because paper wasn't rationed after WWII."
      },
      {
        tag: "Kolfinna Says",
        border: "yellow",
        title: "DEIG",
        body: "Best bagels ever so good, also have good sweet treats. Go early — they sell out."
      },
      {
        tag: "Kolfinna Says",
        border: "yellow",
        title: "Pool etiquette",
        body: "You HAVE to shower naked and with soap before putting your bathing suit on — we keep our pools clean. If you don't, someone will scold you. Don't be that person."
      },
      {
        tag: "Fun Fact",
        border: "blue",
        title: "Over half of Icelanders believe in elves",
        body: "A 1998 survey found 54% believed in huldufólk (\"hidden people\") in some form. The Icelandic Road Administration has a five-page standard response for elf-related complaints. Road projects have genuinely been rerouted to avoid disturbing suspected elf territories. This is not a bit."
      },
      {
        tag: "Kolfinna Says",
        border: "yellow",
        title: "Culture picks",
        body: "Þjóðminjasafnið (National Museum) — really cool and fun. Marshall húsið for Ólafur Elíasson's work. Einar Jónsson sculpture garden is free and very Icelandic. If there's a show at Harpa, go — the Icelandic Symphony plays there."
      },
      {
        tag: "Kolfinna Says",
        border: "yellow",
        title: "Last night drink",
        body: "Petersen rooftop bar downtown — good spot for a final drink and one last aurora check if the KP index cooperates."
      }
    ]
  },

  day7: {
    title: "Day 7 · Departure",
    entries: [
      {
        tag: "Kolfinna Says",
        border: "yellow",
        title: "Morning coffee",
        body: "Te og kaffi, Hygge, Kaffihús Vesturbæjar, Sandholt. Any of these. Don't overthink the last morning — just find a window seat and a pastry."
      },
      {
        tag: "Fun Fact",
        border: "blue",
        title: "NASA trained astronauts here",
        body: "In 1965 and 1967, Apollo astronauts came to Iceland to train for the Moon landing. The volcanic lava fields were the closest thing to lunar terrain they could find on Earth. You spent a week in a place so otherworldly NASA used it as a substitute for space."
      },
      {
        tag: "Fun Fact",
        border: "blue",
        title: "Iceland is still being made",
        body: "The island sits directly on the Mid-Atlantic Ridge and gains new rock every year as the tectonic plates pull apart. The Reykjanes Peninsula has seen ongoing eruptions since 2021. Iceland isn't finished — it's a work in progress, same as your family trip photos."
      }
    ]
  }

};
