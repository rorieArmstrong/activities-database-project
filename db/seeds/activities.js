exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('activities').del()
      .then(function () {
        // Inserts seed entries
        return knex('activities').insert([
          {
            id: 1,
            activity: 'London Eye',
            location:'SE12'
          },
          {
            id: 2, 
            activity: 'Tower of London',
            location: 'GU27'
          },
          {
            id: 3, 
            activity: 'Hyde Park',
            location: 'ST13'
          },
          {
            id: 4,
            activity: "rhoncus sed",
            location: "85478 Merrick Junction"
          }, {
            id: 5,
            activity: "lectus pellentesque eget",
            location: "739 Orin Trail"
          }, {
            id: 6,
            activity: "eget congue eget",
            location: "77539 Saint Paul Drive"
          }, {
            id: 7,
            activity: "nam tristique",
            location: "73338 Blue Bill Park Plaza"
          }, {
            id: 8,
            activity: "pulvinar lobortis est phasellus sit",
            location: "07592 Tennyson Plaza"
          }, {
            id: 9,
            activity: "ac",
            location: "04 Pleasure Parkway"
          }, {
            id: 10,
            activity: "etiam pretium iaculis justo",
            location: "82 Utah Point"
          }, {
            id: 11,
            activity: "pellentesque quisque porta",
            location: "1 Hallows Alley"
          }, {
            id: 12,
            activity: "risus dapibus augue",
            location: "38468 Lake View Plaza"
          }, {
            id: 13,
            activity: "eget congue eget semper",
            location: "37117 Reindahl Way"
          }, {
            id: 14,
            activity: "tempus sit",
            location: "6576 Mcguire Parkway"
          }, {
            id: 15,
            activity: "ipsum ac",
            location: "81 Sachtjen Parkway"
          }, {
            id: 16,
            activity: "risus dapibus",
            location: "410 Karstens Crossing"
          }, {
            id: 17,
            activity: "dolor morbi vel lectus in",
            location: "4192 Corscot Hill"
          }, {
            id: 18,
            activity: "cubilia curae",
            location: "622 Blackbird Road"
          }, {
            id: 19,
            activity: "ultrices aliquet maecenas",
            location: "562 Evergreen Junction"
          }, {
            id: 20,
            activity: "maecenas tristique est et",
            location: "543 Muir Avenue"
          }, {
            id: 21,
            activity: "congue eget semper",
            location: "393 Kim Crossing"
          }, {
            id: 22,
            activity: "et tempus semper est",
            location: "10736 Jackson Terrace"
          }, {
            id: 23,
            activity: "ac est lacinia nisi",
            location: "162 Emmet Alley"
          }, {
            id: 24,
            activity: "amet sem fusce consequat nulla",
            location: "58 Bellgrove Trail"
          }, {
            id: 25,
            activity: "metus arcu",
            location: "6 Morning Terrace"
          }, {
            id: 26,
            activity: "sit amet consectetuer adipiscing elit",
            location: "2631 Petterle Park"
          }, {
            id: 27,
            activity: "eu mi nulla ac",
            location: "47 Westend Drive"
          }, {
            id: 28,
            activity: "blandit mi in porttitor",
            location: "6 Summerview Hill"
          }, {
            id: 29,
            activity: "sed",
            location: "0 Raven Junction"
          }, {
            id: 30,
            activity: "metus aenean",
            location: "54 Jana Parkway"
          }, {
            id: 31,
            activity: "blandit",
            location: "40 Stuart Center"
          }, {
            id: 32,
            activity: "mauris morbi non lectus",
            location: "419 Pierstorff Junction"
          }, {
            id: 33,
            activity: "congue",
            location: "094 Upham Drive"
          }, {
            id: 34,
            activity: "lectus pellentesque eget nunc",
            location: "299 Paget Pass"
          }, {
            id: 35,
            activity: "convallis morbi",
            location: "798 Springs Drive"
          }, {
            id: 36,
            activity: "lacus purus",
            location: "458 Red Cloud Place"
          }, {
            id: 37,
            activity: "vel pede",
            location: "16067 Brentwood Center"
          }, {
            id: 38,
            activity: "et eros vestibulum",
            location: "936 Tomscot Avenue"
          }, {
            id: 39,
            activity: "cubilia curae mauris viverra",
            location: "45314 Rigney Lane"
          }, {
            id: 40,
            activity: "sem",
            location: "82302 Meadow Valley Court"
          }, {
            id: 41,
            activity: "donec odio justo sollicitudin",
            location: "9596 Colorado Crossing"
          }, {
            id: 42,
            activity: "dis parturient montes nascetur",
            location: "0227 Eagan Street"
          }, {
            id: 43,
            activity: "justo nec condimentum",
            location: "0 Tennyson Avenue"
          }, {
            id: 44,
            activity: "platea",
            location: "0450 John Wall Avenue"
          }, {
            id: 45,
            activity: "hac habitasse",
            location: "9 Grayhawk Drive"
          }, {
            id: 46,
            activity: "nam congue risus semper porta",
            location: "1 Farwell Park"
          }, {
            id: 47,
            activity: "felis sed lacus morbi",
            location: "943 Farragut Pass"
          }, {
            id: 48,
            activity: "nisl venenatis lacinia aenean sit",
            location: "5432 Thierer Park"
          }, {
            id: 49,
            activity: "sollicitudin ut suscipit a",
            location: "2 Mitchell Circle"
          }, {
            id: 50,
            activity: "nunc purus phasellus in",
            location: "44376 Miller Avenue"
          }, {
            id: 51,
            activity: "hac habitasse platea dictumst maecenas",
            location: "3 Novick Pass"
          }, {
            id: 52,
            activity: "justo in",
            location: "95 Summerview Crossing"
          }, {
            id: 53,
            activity: "lacinia erat vestibulum sed magna",
            location: "04 Eggendart Way"
          }, {
            id: 54,
            activity: "pede posuere",
            location: "98 Luster Park"
          }, {
            id: 55,
            activity: "sit amet eleifend pede",
            location: "00424 Kipling Way"
          }, {
            id: 56,
            activity: "hendrerit at vulputate",
            location: "0303 Elgar Point"
          }, {
            id: 57,
            activity: "convallis nunc proin",
            location: "005 Autumn Leaf Pass"
          }, {
            id: 58,
            activity: "elit ac",
            location: "3327 Lillian Court"
          }, {
            id: 59,
            activity: "congue risus semper porta volutpat",
            location: "40 Arizona Drive"
          }, {
            id: 60,
            activity: "lacus",
            location: "58 Jana Trail"
          }, {
            id: 61,
            activity: "posuere cubilia curae mauris viverra",
            location: "75633 Bunker Hill Point"
          }, {
            id: 62,
            activity: "nulla suscipit ligula in lacus",
            location: "312 Loomis Avenue"
          }, {
            id: 63,
            activity: "nulla integer pede",
            location: "16017 Longview Trail"
          }, {
            id: 64,
            activity: "lobortis ligula sit amet eleifend",
            location: "993 Merry Pass"
          }, {
            id: 65,
            activity: "eu mi nulla",
            location: "7852 Iowa Avenue"
          }, {
            id: 66,
            activity: "posuere cubilia curae duis faucibus",
            location: "238 Reindahl Alley"
          }, {
            id: 67,
            activity: "primis",
            location: "0 Northridge Center"
          }, {
            id: 68,
            activity: "massa id nisl venenatis",
            location: "5957 Claremont Center"
          }, {
            id: 69,
            activity: "amet consectetuer adipiscing elit proin",
            location: "9 Lakeland Pass"
          }, {
            id: 70,
            activity: "erat tortor",
            location: "2 Farragut Hill"
          }, {
            id: 71,
            activity: "nunc",
            location: "11371 Main Way"
          }, {
            id: 72,
            activity: "cursus id",
            location: "6 Truax Circle"
          }, {
            id: 73,
            activity: "in hac habitasse platea",
            location: "5 Truax Lane"
          }, {
            id: 74,
            activity: "erat volutpat in",
            location: "92 Bay Center"
          }, {
            id: 75,
            activity: "blandit lacinia erat",
            location: "41096 Kim Plaza"
          }, {
            id: 76,
            activity: "in libero ut massa",
            location: "597 Drewry Avenue"
          }, {
            id: 77,
            activity: "laoreet ut rhoncus aliquet",
            location: "5 7th Circle"
          }, {
            id: 78,
            activity: "sodales sed tincidunt eu",
            location: "77 Mallory Place"
          }, {
            id: 79,
            activity: "pede lobortis ligula sit",
            location: "945 Anzinger Court"
          }, {
            id: 80,
            activity: "pellentesque at nulla",
            location: "9 Blue Bill Park Pass"
          }, {
            id: 81,
            activity: "sed",
            location: "13 Buhler Center"
          }, {
            id: 82,
            activity: "nec sem duis aliquam",
            location: "69711 Dennis Drive"
          }, {
            id: 83,
            activity: "luctus ultricies",
            location: "30 Porter Crossing"
          }, {
            id: 84,
            activity: "curae mauris",
            location: "3 Sullivan Drive"
          }, {
            id: 85,
            activity: "fermentum",
            location: "8264 Macpherson Park"
          }, {
            id: 86,
            activity: "sed magna at nunc",
            location: "1 Haas Way"
          }, {
            id: 87,
            activity: "convallis nulla neque libero",
            location: "30 Pierstorff Terrace"
          }, {
            id: 88,
            activity: "eros",
            location: "6082 Randy Way"
          }, {
            id: 89,
            activity: "parturient montes nascetur ridiculus",
            location: "31 Claremont Park"
          }, {
            id: 90,
            activity: "quam a odio",
            location: "371 Graceland Drive"
          }, {
            id: 91,
            activity: "quis odio consequat varius",
            location: "838 Autumn Leaf Circle"
          }, {
            id: 92,
            activity: "nisl nunc nisl",
            location: "24045 Norway Maple Trail"
          }, {
            id: 93,
            activity: "ac",
            location: "2 Ridgeview Court"
          }, {
            id: 94,
            activity: "dolor",
            location: "59078 Rowland Street"
          }, {
            id: 95,
            activity: "congue vivamus metus arcu adipiscing",
            location: "11 Karstens Pass"
          }, {
            id: 96,
            activity: "et ultrices posuere cubilia curae",
            location: "93488 Lyons Alley"
          }, {
            id: 97,
            activity: "magna",
            location: "482 Cambridge Drive"
          }, {
            id: 98,
            activity: "ac nibh fusce",
            location: "6730 Rockefeller Lane"
          }, {
            id: 99,
            activity: "tincidunt ante vel",
            location: "48 Calypso Way"
          }, {
            id: 100,
            activity: "condimentum neque sapien",
            location: "500 Memorial Circle"
          }, {
            id: 101,
            activity: "turpis elementum",
            location: "21 Dawn Road"
          }, {
            id: 102,
            activity: "tristique est et tempus",
            location: "33118 2nd Lane"
          }, {
            id: 103,
            activity: "nunc",
            location: "72361 Katie Avenue"
          }
        ]);
      });
  };
  