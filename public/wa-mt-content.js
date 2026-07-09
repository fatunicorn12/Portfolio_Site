// ── Washington → Montana Journal Content ──
// Each day has a title and an array of entries.
// Entries split automatically: first half → left page, rest → right page.
//
// Entry shape:
//   tag:    label at top of card (e.g. "Fun Fact", "Local Tip", "Recommends")
//   border: card accent color — "blue" | "yellow" | "green"
//   title:  bold card heading
//   body:   paragraph text

var bookEntries = {

  day1: {
    title: "Day 1 · Seattle",
    entries: [
      {
        tag: "Fun Fact",
        border: "blue",
        title: "Seattle Has More Boats Than Any US City",
        body: "Seattle has more boats per capita than any other city in the United States. The city sits between Puget Sound and Lake Washington, giving it over 50 miles of navigable freshwater and saltwater shoreline. Keep an eye out for floatplanes landing on the water downtown — they're a normal form of transport here."
      },
      {
        tag: "Local Tip",
        border: "yellow",
        title: "Skip the Space Needle, Do This Instead",
        body: "Kerry Park gives you the exact same skyline view as the Space Needle — for free — and you get the Space Needle *in* the photo. Go at sunset. Save the $40 ticket money for dinner in Capitol Hill instead."
      },
      {
        tag: "Recommends",
        border: "green",
        title: "Dinner: Serious Pie in Belltown",
        body: "Tom Douglas's Serious Pie on Virginia St is one of the best casual dinners in the city — wood-fired pizzas with serious ingredients, not precious about it. No reservations, expect a short wait, worth every minute. Pair it with a walk through Belltown after."
      },
      {
        tag: "Fun Fact",
        border: "blue",
        title: "Pike Place Almost Became a Parking Lot",
        body: "In the 1960s the city planned to demolish Pike Place Market entirely and replace it with a hotel and parking garage. A grassroots campaign led by architect Victor Steinbrueck saved it through a 1971 ballot initiative. The market has been continuously operating since 1907."
      }
    ]
  },

  day2: {
    title: "Day 2 · Seattle → North Cascades",
    entries: [
      {
        tag: "Fun Fact",
        border: "blue",
        title: "Diablo Lake Is Naturally That Color",
        body: "The electric turquoise of Diablo Lake isn't a filter or an algae bloom. Glaciers grinding rock in the surrounding peaks produce ultra-fine particles called 'rock flour' that stay suspended in the water and scatter sunlight into that impossible blue-green. The color changes intensity with the seasons as snowmelt varies."
      },
      {
        tag: "Local Tip",
        border: "yellow",
        title: "Stop at Gorge Creek Falls on Highway 20",
        body: "About 3 miles before Diablo Lake there's a pullout for Gorge Creek Falls — a narrow waterfall dropping into a deep gorge. Easy 2-minute walk from the road and most people drive right past it. Don't be most people."
      },
      {
        tag: "Fun Fact",
        border: "blue",
        title: "North Cascades Has More Glaciers Than Any Other Lower 48 Park",
        body: "North Cascades National Park contains over 300 glaciers — more than any other park in the contiguous United States. The park is so rugged and remote that some areas have never been formally surveyed. Less than 1% of visitors ever leave the Highway 20 corridor."
      }
    ]
  },

  day3: {
    title: "Day 3 · Maple Pass Loop",
    entries: [
      {
        tag: "Recommends",
        border: "green",
        title: "Maple Pass: Go Counterclockwise, Always",
        body: "Every trail guide says you can do Maple Pass either direction, but counterclockwise is dramatically better. You climb gradually through forest, emerge onto the ridge with a full alpine panorama in one reveal, then descend past Lake Ann. The other way shows you the ending first. Start left at the trailhead junction."
      },
      {
        tag: "Fun Fact",
        border: "blue",
        title: "This Area Was Nearly a Ski Resort",
        body: "In the 1970s, there were serious proposals to develop a massive ski resort at nearby Early Winters and Sandy Butte just down the highway. Decades of environmental opposition ultimately killed the project, ensuring the surrounding North Cascades high country remained undeveloped."
      },
      {
        tag: "Local Tip",
        border: "yellow",
        title: "Start the Hike Before 8am in August",
        body: "The Rainy Pass trailhead parking lot fills completely by 9–10am on summer weekends and rangers turn cars away. Get there early, beat the crowd, and you'll essentially have the ridge to yourselves for the first hour. Bring layers — the ridge can be 20°F colder than the trailhead."
      }
    ]
  },

  day4: {
    title: "Day 4 · North Cascades → Coeur d'Alene",
    entries: [
      {
        tag: "Fun Fact",
        border: "blue",
        title: "The Drive Changes Ecosystems in Real Time",
        body: "Crossing the Cascades on Highway 20 is one of the most dramatic ecological transitions you can drive. The west side of the mountains receives 100+ inches of rain annually and looks like a rainforest. By the time you reach the Okanogan Valley on the east side, you're in near-desert receiving less than 12 inches. Same mountain range, 30 miles apart."
      },
      {
        tag: "Recommends",
        border: "green",
        title: "Dinner: Beverly's Restaurant at the Resort",
        body: "Beverly's on the 7th floor of the Coeur d'Alene Resort has floor-to-ceiling lake views and is legitimately excellent. It's a splurge but this is your decompression night between the parks — worth it. Book a table before you arrive."
      },
      {
        tag: "Local Tip",
        border: "yellow",
        title: "Jump in the Lake — It's Warmer Than You Think",
        body: "Lake Coeur d'Alene reaches 70–75°F in August, which is genuinely warm for a mountain lake. The city beach has a roped swim area. This is the last night before serious wilderness — enjoy the comfort."
      }
    ]
  },

  day5: {
    title: "Day 5 · Coeur d'Alene → Glacier National Park",
    entries: [
      {
        tag: "Fun Fact",
        border: "blue",
        title: "Glacier Had 150 Glaciers in 1850",
        body: "When the park was named in the early 1900s it contained roughly 150 active glaciers. Today fewer than 26 remain, and climate scientists project most will be gone within decades. The park is actively documenting the changes — the 'repeat photography' project has matched historic photos to current ones showing dramatic retreat."
      },
      {
        tag: "Local Tip",
        border: "yellow",
        title: "Get Your Going-to-the-Sun Reservation Tonight",
        body: "Vehicle reservations for Going-to-the-Sun Road are required May 27–September 9 between 6am and 3pm. They open 60 days in advance at 8am MST on recreation.gov and sell out within minutes. If you don't have one, the alternative is arriving before 6am or after 3pm — which actually works fine and is less crowded."
      },
      {
        tag: "Recommends",
        border: "green",
        title: "Evening: Stones at Lake McDonald Shore",
        body: "Before dinner, walk the shore of Lake McDonald at the lodge and look at the rocks underwater. The lake is so clear you can see the bottom in 10+ feet of water, and the stones are naturally multicolored from different geological formations — reds, greens, purples. It sounds mundane but it's genuinely one of the park's most memorable small moments."
      }
    ]
  },

  day6: {
    title: "Day 6 · Going-to-the-Sun Road + Highline Trail",
    entries: [
      {
        tag: "Fun Fact",
        border: "blue",
        title: "Going-to-the-Sun Road Took 11 Years to Build",
        body: "Construction on Going-to-the-Sun Road began in 1921 and wasn't completed until 1932. Workers had to blast a shelf into sheer cliff faces in some sections using hand drills and dynamite in conditions with hundreds of feet of exposure. The road is now a National Historic Landmark and one of the most engineering-significant roads in the US."
      },
      {
        tag: "Recommends",
        border: "green",
        title: "Highline: Bring Trekking Poles If You Have Them",
        body: "The Highline Trail's famous exposed section is about 200 feet long with a fixed chain. It's not technically difficult but trekking poles dramatically reduce the psychological weight of it and help on the descent. Rent them at Apgar Village the night before if you don't own a pair."
      },
      {
        tag: "Local Tip",
        border: "yellow",
        title: "Drive Sun Road at Dusk on the Way Back",
        body: "After your hike, if energy allows, drive a section of Going-to-the-Sun Road at golden hour heading west. The light on the peaks and the hanging valleys turns amber and pink in a way that the midday drive doesn't capture. Traffic thins out significantly after 5pm."
      }
    ]
  },

  day7: {
    title: "Day 7 · Glacier — East Side",
    entries: [
      {
        tag: "Fun Fact",
        border: "blue",
        title: "The East Side Feels Like a Different Park",
        body: "The Continental Divide splits Glacier into two dramatically different landscapes. The west side is heavily forested, moody, Pacific-influenced. The east side is open prairie meeting sheer mountain walls — a landscape shaped by ferocious Chinook winds that can hit 100+ mph in winter. The light and scale on the east side is unlike anything on the west."
      },
      {
        tag: "Fun Fact",
        border: "blue",
        title: "Iceberg Lake Holds Ice Year-Round",
        body: "Iceberg Lake sits in a north-facing cirque so deeply shadowed that it holds floating icebergs through the summer. The water temperature rarely exceeds 34°F. Some brave (or foolish) visitors swim in it — most last about 30 seconds."
      },
      {
        tag: "Local Tip",
        border: "yellow",
        title: "Many Glacier Area for Wildlife at Dawn",
        body: "The Many Glacier Valley just north of the Iceberg Lake trailhead is one of the best wildlife corridors in the park. Grizzlies, moose, and mountain goats are regularly spotted from the road in early morning. Drive slowly through the valley before your hike and keep binoculars handy."
      }
    ]
  },

  day8: {
    title: "Day 8 · Glacier → Whitefish",
    entries: [
      {
        tag: "Recommends",
        border: "green",
        title: "Dinner: Tupelo Grille on Central Ave",
        body: "Tupelo Grille is the best restaurant in Whitefish — New Orleans-influenced American food in a warm, unpretentious setting. Known for their bison dishes and a serious whiskey list. Make a reservation for the last night — it books out in summer."
      },
      {
        tag: "Local Tip",
        border: "yellow",
        title: "Whitefish Is a Real Town, Not a Resort Trap",
        body: "Unlike a lot of gateway mountain towns, Whitefish has actual locals and a real community feel. The Remington Bar is a dive with a pool table and cheap Montana beers — a good spot to end the night without the resort pricing. A block off Central Ave."
      },
      {
        tag: "Fun Fact",
        border: "blue",
        title: "Whitefish Mountain Has the Longest Ski Season in Montana",
        body: "Whitefish Mountain Resort (formerly Big Mountain) typically runs from late November to mid-April and has one of the most consistent snow records in the Northern Rockies. In summer it operates as a mountain bike park with gondola access. Worth a quick gondola ride up for the views if you have a spare morning."
      }
    ]
  },

  day9: {
    title: "Day 9 · Fly Home from Kalispell",
    entries: [
      {
        tag: "Local Tip",
        border: "yellow",
        title: "Get to FCA 90 Minutes Early, Not More",
        body: "FCA is a small airport — TSA takes 10 minutes and there are only a few gates. No need to arrive 2+ hours ahead. Spend the extra time at the lake or grabbing breakfast in Whitefish at Buffalo Cafe on 3rd St — best breakfast in town."
      },
      {
        tag: "Fun Fact",
        border: "blue",
        title: "Montana Has 7.5 People Per Square Mile",
        body: "Montana is the 4th largest state by area but has a population density of just roughly 7.5 people per square mile. You've spent the last 9 days in one of the most sparsely populated corners of the lower 48. The nearest major city to Glacier National Park (Seattle) is farther away than London is from Paris."
      }
    ]
  }

};
