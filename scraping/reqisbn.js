var http = require("http-request");

var arr = [{"title":"The Hunger Games (The Hunger Games, #1)","author":"Suzanne Collins"},
{"title":"Harry Potter and the Sorcerer's Stone (Harry Potter, #1)","author":"J.K. Rowling"},
{"title":"To Kill a Mockingbird","author":"Harper Lee"},
{"title":"The Fault in Our Stars","author":"John Green"},
{"title":"The Hobbit","author":"J.R.R. Tolkien"},
{"title":"Divergent (Divergent, #1)","author":"Veronica Roth"},
{"title":"The Diary of a Young Girl","author":"Anne Frank"},
{"title":"Het achterhuis: dagboekbrieven 12 Juni 1942 - 1 Augustus 1944","author":"Anne Frank"},
{"title":"1984","author":"George Orwell"},
{"title":"Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)","author":"J.K. Rowling"},
{"title":"Harry Potter and the Order of the Phoenix (Harry Potter, #5)","author":"J.K. Rowling"},
{"title":"Harry Potter and the Chamber of Secrets (Harry Potter, #2)","author":"J.K. Rowling"},
{"title":"Harry Potter and the Goblet of Fire (Harry Potter, #4)","author":"J.K. Rowling"},
{"title":"Harry Potter and the Half-Blood Prince (Harry Potter, #6)","author":"J.K. Rowling"},
{"title":"The Help","author":"Kathryn Stockett"},
{"title":"The Lion, the Witch, and the Wardrobe (Chronicles of Narnia, #1)","author":"C.S. Lewis"},
{"title":"The Giver (The Giver, #1)","author":"Lois Lowry"},
{"title":"A Game of Thrones (A Song of Ice and Fire #1)","author":"George R.R. Martin"},
{"title":"The Lightning Thief (Percy Jackson and the Olympians, #1)","author":"Rick Riordan"},
{"title":"Little Women (Little Women, #1)","author":"Louisa May Alcott"},
{"title":"Jane Eyre","author":"Charlotte Brontë"},
{"title":"City of Bones (The Mortal Instruments, #1)","author":"Cassandra Clare"},
{"title":"The Book Thief","author":"Markus Zusak"},
{"title":"Where the Sidewalk Ends: The Poems and Drawings of Shel Silverstein","author":"Shel Silverstein"},
{"title":"The Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy, #1)","author":"Douglas Adams"},
{"title":"Charlotte's Web","author":"E.B. White"},
{"title":"My Sister's Keeper","author":"Jodi Picoult"},
{"title":"Slaughterhouse-Five","author":"Kurt Vonnegut"},
{"title":"Ender's Game (The Ender Quintet, #1)","author":"Orson Scott Card"},
{"title":"Sense and Sensibility","author":"Jane Austen"},
{"title":"The Little Prince","author":"Antoine de Saint-Exupéry"},
{"title":"The Secret Garden","author":"Frances Hodgson Burnett"},
{"title":"The Picture of Dorian Gray","author":"Oscar Wilde"},
{"title":"A Wrinkle in Time (A Wrinkle in Time Quintet, #1)","author":"Madeleine L'Engle"},
{"title":"The Count of Monte Cristo","author":"Alexandre Dumas"},
{"title":"One Hundred Years of Solitude","author":"Gabriel Garcia Marquez"},
{"title":"Les Misérables","author":"Victor Hugo"},
{"title":"Anne of Green Gables (Anne of Green Gables, #1)","author":"L.M. Montgomery"},
{"title":"One Flew Over the Cuckoo's Nest","author":"Ken Kesey"},
{"title":"Outlander (Outlander, #1)","author":"Diana Gabaldon"},
{"title":"Charlie and the Chocolate Factory (Charlie Bucket, #1)","author":"Roald Dahl"},
{"title":"Eleanor & Park","author":"Rainbow Rowell"},
{"title":"The Red Tent","author":"Anita Diamant"},
{"title":"American Gods","author":"Neil Gaiman"},
{"title":"Matilda","author":"Roald Dahl"},
{"title":"The Night Circus","author":"Erin Morgenstern"},
{"title":"Beautiful Disaster (Beautiful, #1)","author":"Jamie McGuire"},
{"title":"It","author":"Stephen King"},
{"title":"Crime and Punishment","author":"Fyodor Dostoyevsky"},
{"title":"The Guernsey Literary and Potato Peel Pie Society","author":"Mary Ann Shaffer"},
{"title":"Me Before You (Me Before You, #1)","author":"Jojo Moyes"},
{"title":"The Selection (The Selection, #1)","author":"Kiera Cass"},
{"title":"The Color Purple","author":"Alice Walker"},
{"title":"Alice's Adventures in Wonderland & Through the Looking-Glass","author":"Lewis Carroll"},
{"title":"Bared to You (Crossfire, #1)","author":"Sylvia Day"},
{"title":"Persuasion","author":"Jane Austen"},
{"title":"The Name of the Wind (The Kingkiller Chronicle, #1)","author":"Patrick Rothfuss"},
{"title":"Cinder (The Lunar Chronicles, #1)","author":"Marissa Meyer"},
{"title":"Sarah's Key","author":"Tatiana de Rosnay"},
{"title":"Number the Stars","author":"Lois Lowry"},
{"title":"The Cat in the Hat","author":"Dr. Seuss"},
{"title":"Coraline","author":"Neil Gaiman"},
{"title":"Rebecca","author":"Daphne du Maurier"},
{"title":"City of Lost Souls (The Mortal Instruments, #5)","author":"Cassandra Clare"},
{"title":"Watership Down","author":"Richard Adams"},
{"title":"Ready Player One","author":"Ernest Cline"},
{"title":"The Graveyard Book","author":"Neil Gaiman"},
{"title":"Legend (Legend, #1)","author":"Marie Lu"},
{"title":"Fangirl","author":"Rainbow Rowell"},
{"title":"Wonder","author":"R.J. Palacio"},
{"title":"Wonder","author":"R.J. Palacio"},
{"title":"Where the Red Fern Grows","author":"Wilson Rawls"},
{"title":"Cat's Cradle","author":"Kurt Vonnegut"},
{"title":"I Am Number Four (Lorien Legacies, #1)","author":"Pittacus Lore"},
{"title":"Safe Haven","author":"Nicholas Sparks"},
{"title":"I Know This Much Is True","author":"Wally Lamb"},
{"title":"Stardust","author":"Neil Gaiman"},
{"title":"The Eye of the World (Wheel of Time, #1)","author":"Robert Jordan"},
{"title":"The Red Pyramid (Kane Chronicles, #1)","author":"Rick Riordan"},
{"title":"Throne of Glass (Throne of Glass, #1)","author":"Sarah J. Maas"},
{"title":"The Screwtape Letters","author":"C.S. Lewis"},
{"title":"The Elite (The Selection, #2)","author":"Kiera Cass"},
{"title":"Clockwork Princess (The Infernal Devices, #3)","author":"Cassandra Clare"},
{"title":"The Witches","author":"Roald Dahl"},
{"title":"The Importance of Being Earnest","author":"Oscar Wilde"},
{"title":"Winnie-the-Pooh (Winnie-the-Pooh, #1)","author":"A.A. Milne"},
{"title":"Orphan Train","author":"Christina Baker Kline"},
{"title":"The 5th Wave (The 5th Wave, #1)","author":"Rick Yancey"},
{"title":"Mistborn (Mistborn, #1)","author":"Brandon Sanderson"},
{"title":"Perfect Chemistry (Perfect Chemistry, #1)","author":"Simone Elkeles"},
{"title":"A Little Princess","author":"Frances Hodgson Burnett"},
{"title":"Peter Pan","author":"J.M. Barrie"},
{"title":"Peter Pan and Wendy","author":"J.M. Barrie"},
{"title":"Hopeless (Hopeless, #1)","author":"Colleen Hoover"},
{"title":"The One (The Selection, #3)","author":"Kiera Cass"},
{"title":"Easy (Contours of the Heart, #1)","author":"Tammara Webber"},
{"title":"Easy (Contours of the Heart, #1)","author":"Tammara Webber"},
{"title":"Little House on the Prairie (Little House, #2)","author":"Laura Ingalls Wilder"},
{"title":"Snow Crash","author":"Neal Stephenson"},
{"title":"The Phantom Tollbooth","author":"Norton Juster"},
{"title":"Shatter Me (Shatter Me, #1)","author":"Tahereh Mafi"},
{"title":"City of Heavenly Fire (The Mortal Instruments, #6)","author":"Cassandra Clare"},
{"title":"Het Heelal : Verleden en toekomst van ruimte & tijd","author":"Stephen Hawking"},
{"title":"A Brief History of Time","author":"Stephen Hawking"},
{"title":"War and Peace","author":"Leo Tolstoy"},
{"title":"The Great Hunt (Wheel of Time, #2)","author":"Robert Jordan"},
{"title":"The Tale of Peter Rabbit","author":"Beatrix Potter"},
{"title":"Obsidian (Lux, #1)","author":"Jennifer L. Armentrout"},
{"title":"Little House in the Big Woods (Little House, #1)","author":"Laura Ingalls Wilder"},
{"title":"The Dragon Reborn (Wheel of Time, #3)","author":"Robert Jordan"},
{"title":"The Things They Carried","author":"Tim O'Brien"},
{"title":"The Absolutely True Diary of a Part-Time Indian","author":"Sherman Alexie"},
{"title":"The Forgotten Garden","author":"Kate Morton"},
{"title":"It's Kind of a Funny Story","author":"Ned Vizzini"},
{"title":"The Wind-Up Bird Chronicle","author":"Haruki Murakami"},
{"title":"Murder on the Orient Express (Hercule Poirot, #10)","author":"Agatha Christie"},
{"title":"The Well of Ascension (Mistborn, #2)","author":"Brandon Sanderson"},
{"title":"Unwind (Unwind, #1)","author":"Neal Shusterman"},
{"title":"The Guardian","author":"Nicholas Sparks"},
{"title":"Mrs. Frisby and the Rats of NIMH (Rats of NIMH, #1)","author":"Robert C. O'Brien"},
{"title":"From the Mixed-Up Files of Mrs. Basil E. Frankweiler","author":"E.L. Konigsburg"},
{"title":"The Way of Kings (The Stormlight Archive, #1)","author":"Brandon Sanderson"},
{"title":"The Hero of Ages (Mistborn, #3)","author":"Brandon Sanderson"},
{"title":"Howl's Moving Castle (Howl's Moving Castle, #1)","author":"Diana Wynne Jones"},
{"title":"The Invention of Hugo Cabret","author":"Brian Selznick"},
{"title":"The Complete Grimm's Fairy Tales","author":"Jacob Grimm"},
{"title":"Gabriel's Inferno (Gabriel's Inferno, #1)","author":"Sylvain Reynard"},
{"title":"Fire (Graceling Realm, #2)","author":"Kristin Cashore"},
{"title":"One Fish, Two Fish, Red Fish, Blue Fish","author":"Dr. Seuss"},
{"title":"Pippi Longstocking","author":"Astrid Lindgren"},
{"title":"The Edge of Never (The Edge of Never, #1)","author":"J.A. Redmerski"},
{"title":"The Unbecoming of Mara Dyer (Mara Dyer, #1)","author":"Michelle Hodkin"},
{"title":"The Neverending Story","author":"Michael Ende"},
{"title":"The Westing Game","author":"Ellen Raskin"},
{"title":"Interpreter of Maladies","author":"Jhumpa Lahiri"},
{"title":"Hyperbole and a Half: Unfortunate Situations, Flawed Coping Mechanisms, Mayhem, and Other Things That Happened","author":"Allie Brosh"},
{"title":"Lola and the Boy Next Door (Anna and the French Kiss, #2)","author":"Stephanie Perkins"},
{"title":"The Remains of the Day","author":"Kazuo Ishiguro"},
{"title":"The Raven Boys (The Raven Cycle, #1)","author":"Maggie Stiefvater"},
{"title":"Calvin and Hobbes","author":"Bill Watterson"},
{"title":"Curious George","author":"H.A. Rey"},
{"title":"A Long Way Gone: Memoirs of a Boy Soldier","author":"Ishmael Beah"},
{"title":"Crank (Crank, #1)","author":"Ellen Hopkins"},
{"title":"Anne of the Island (Anne of Green Gables, #3)","author":"L.M. Montgomery"},
{"title":"Tales of a Fourth Grade Nothing (Fudge, #1)","author":"Judy Blume"},
{"title":"Fablehaven (Fablehaven, #1)","author":"Brandon Mull"},
{"title":"Just Kids","author":"Patti Smith"},
{"title":"Maybe Someday (Maybe, #1)","author":"Colleen Hoover"},
{"title":"Think and Grow Rich","author":"Napoleon Hill"},
{"title":"Aesop's Fables","author":"Aesop"},
{"title":"I Am the Messenger","author":"Markus Zusak"},
{"title":"A Wind in the Door (A Wrinkle in Time Quintet, #2)","author":"Madeleine L'Engle"},
{"title":"The Complete Fairy Tales","author":"Hans Christian Andersen"},
{"title":"The Forever War (The Forever War, #1)","author":"Joe Haldeman"},
{"title":"The Joy of Cooking Standard Edition: The All-Purpose Cookbook","author":"Irma S. Rombauer"},
{"title":"I'll Give You the Sun","author":"Jandy Nelson"},
{"title":"Smile","author":"Raina Telgemeier"},
{"title":"Princess Academy (Princess Academy, #1)","author":"Shannon Hale"},
{"title":"The Witching Hour (Lives of the Mayfair Witches, #1)","author":"Anne Rice"},
{"title":"Elantris (Elantris, #1)","author":"Brandon Sanderson"},
{"title":"The Mysterious Benedict Society (The Mysterious Benedict Society, #1)","author":"Trenton Lee Stewart"},
{"title":"The Ruins of Gorlan (Ranger's Apprentice, #1)","author":"John Flanagan"},
{"title":"The Boxcar Children (The Boxcar Children, #1)","author":"Gertrude Chandler Warner"},
{"title":"Real (Real, #1)","author":"Katy Evans"},
{"title":"Words of Radiance (The Stormlight Archive, #2)","author":"Brandon Sanderson"},
{"title":"Mary Poppins (Mary Poppins, #1)","author":"P.L. Travers"},
{"title":"Between Shades of Gray","author":"Ruta Sepetys"},
{"title":"The One and Only Ivan","author":"Katherine Applegate"},
{"title":"A Dirty Job (Grim Reaper, #1)","author":"Christopher Moore"},
{"title":"House of Leaves","author":"Mark Z. Danielewski"},
{"title":"Saving the World and Other Extreme Sports (Maximum Ride, #3)","author":"James Patterson"},
{"title":"Mystic River","author":"Dennis Lehane"},
{"title":"Y: The Last Man, Vol. 1: Unmanned (Y: The Last Man #1)","author":"Brian K. Vaughan"},
{"title":"Sideways Stories from Wayside School (Wayside School #1)","author":"Louis Sachar"},
{"title":"Moloka'i","author":"Alan Brennert"},
{"title":"Redwall (Redwall, #1)","author":"Brian Jacques"},
{"title":"Reason to Breathe (Breathing, #1)","author":"Rebecca Donovan"},
{"title":"The Borrowers (The Borrowers, #1)","author":"Mary Norton"},
{"title":"Bitterblue (Graceling Realm, #3)","author":"Kristin Cashore"},
{"title":"Ignite Me (Shatter Me #3)","author":"Tahereh Mafi"},
{"title":"Blood Meridian, or the Evening Redness in the West","author":"Cormac McCarthy"},
{"title":"Caps for Sale: A Tale of a Peddler, Some Monkeys and Their Monkey Business","author":"Esphyr Slobodkina"},
{"title":"Absolute Power","author":"David Baldacci"},
{"title":"Old Yeller (Old Yeller, #1)","author":"Fred Gipson"},
{"title":"Hard-Boiled Wonderland and the End of the World","author":"Haruki Murakami"},
{"title":"The Book of Life (All Souls Trilogy, #3)","author":"Deborah Harkness"},
{"title":"The Year of the Flood (MaddAddam trilogy, #2)","author":"Margaret Atwood"},
{"title":"The Warded Man (Demon Cycle, #1)","author":"Peter V. Brett"},
{"title":"Furies of Calderon (Codex Alera, #1)","author":"Jim Butcher"},
{"title":"Dealing with Dragons (Enchanted Forest Chronicles, #1)","author":"Patricia C. Wrede"},
{"title":"Dokter Zjivago","author":"Boris Pasternak"},
{"title":"When You Reach Me","author":"Rebecca Stead"},
{"title":"The Black Stallion (The Black Stallion, #1)","author":"Walter Farley"},
{"title":"Losing Hope (Hopeless, #2)","author":"Colleen Hoover"},
{"title":"The House of the Scorpion (Matteo Alacran, #1)","author":"Nancy Farmer"},
{"title":"A Bear Called Paddington (Paddington, #1)","author":"Michael Bond"},
{"title":"Tegenvoeters, een reis door Australië","author":"Bill Bryson"},
{"title":"I Capture the Castle","author":"Dodie Smith"},
{"title":"Bone, Vol. 1: Out from Boneville (Bone, #1)","author":"Jeff Smith"},
{"title":"The Sea of Tranquility","author":"Katja Millay"},
{"title":"Peter and the Starcatchers (Peter and the Starcatchers, #1)","author":"Dave Barry"},
{"title":"A Scanner Darkly","author":"Philip K. Dick"},
{"title":"Infidel","author":"Ayaan Hirsi Ali"},
{"title":"Out of My Mind","author":"Sharon M. Draper"},
{"title":"The Arabian Nights","author":"Anonymous"},
{"title":"A Man Called Ove","author":"Fredrik Backman"},
{"title":"Ten Tiny Breaths (Ten Tiny Breaths, #1)","author":"K.A. Tucker"},
{"title":"The Book of Three (The Chronicles of Prydain #1)","author":"Lloyd Alexander"},
{"title":"Blueberries for Sal","author":"Robert McCloskey"},
{"title":"Lone Survivor: The Eyewitness Account of Operation Redwing and the Lost Heroes of SEAL Team 10","author":"Marcus Luttrell"},
{"title":"The Black Prism (Lightbringer, #1)","author":"Brent Weeks"},
{"title":"Code Name Verity (Code Name Verity, #1)","author":"Elizabeth Wein"},
{"title":"The Two Princesses of Bamarre","author":"Gail Carson Levine"},
{"title":"The Desert Spear (Demon Cycle, #2)","author":"Peter V. Brett"},
{"title":"The Illustrated Man","author":"Ray Bradbury"},
{"title":"Beautiful Oblivion (The Maddox Brothers, #1)","author":"Jamie McGuire"},
{"title":"The Miraculous Journey of Edward Tulane","author":"Kate DiCamillo"},
{"title":"An Ember in the Ashes (An Ember in the Ashes, #1)","author":"Sabaa Tahir"},
{"title":"Archer's Voice","author":"Mia Sheridan"},
{"title":"Flat-Out Love (Flat-Out Love, #1)","author":"Jessica Park"},
{"title":"Ubik","author":"Philip K. Dick"},
{"title":"The Gathering (Darkness Rising, #1)","author":"Kelley Armstrong"},
{"title":"I Am Legend","author":"Richard Matheson"},
{"title":"If on a Winter's Night a Traveler","author":"Italo Calvino"},
{"title":"If on a Winter's Night a Traveler","author":"Italo Calvino"},
{"title":"My Side of the Mountain (Mountain, #1)","author":"Jean Craighead George"},
{"title":"Homeland (Forgotten Realms: The Dark Elf Trilogy, #1; Legend of Drizzt, #1)","author":"R.A. Salvatore"},
{"title":"Monstrous Regiment (Discworld, #31)","author":"Terry Pratchett"},
{"title":"Illusions: The Adventures of a Reluctant Messiah","author":"Richard Bach"},
{"title":"The Dispossessed","author":"Ursula K. Le Guin"},
{"title":"Into the Wild (Warriors, #1)","author":"Erin Hunter"},
{"title":"The False Prince (The Ascendance Trilogy, #1)","author":"Jennifer A. Nielsen"},
{"title":"Tiger's Curse (The Tiger Saga, #1)","author":"Colleen Houck"},
{"title":"Edelman, bedelman, schutter, spion","author":"John le Carré"},
{"title":"Eating Animals","author":"Jonathan Safran Foer"},
{"title":"Mrs. Piggle-Wiggle (Mrs. Piggle Wiggle, #1)","author":"Betty MacDonald"},
{"title":"The Incredible Journey","author":"Sheila Burnford"},
{"title":"Princeps' Fury (Codex Alera, #5)","author":"Jim Butcher"},
{"title":"Captain's Fury (Codex Alera, #4)","author":"Jim Butcher"},
{"title":"Academ's Fury (Codex Alera, #2)","author":"Jim Butcher"},
{"title":"First Lord's Fury (Codex Alera, #6)","author":"Jim Butcher"},
{"title":"In the Time of the Butterflies","author":"Julia Alvarez"},
{"title":"Cursor's Fury (Codex Alera, #3)","author":"Jim Butcher"},
{"title":"Lost in a Good Book (Thursday Next, #2)","author":"Jasper Fforde"},
{"title":"The Wishing Spell (The Land of Stories, #1)","author":"Chris Colfer"},
{"title":"The Sparrow (The Sparrow, #1)","author":"Mary Doria Russell"},
{"title":"The Name of This Book Is Secret (Secret, #1)","author":"Pseudonymous Bosch"},
{"title":"The Blinding Knife (Lightbringer, #2)","author":"Brent Weeks"},
{"title":"Scary Stories to Tell in the Dark (Scary Stories #1)","author":"Alvin Schwartz"},
{"title":"Just So Stories","author":"Rudyard Kipling"},
{"title":"Kindred","author":"Octavia E. Butler"},
{"title":"A Town Like Alice","author":"Nevil Shute"},
{"title":"We Have Always Lived in the Castle","author":"Shirley Jackson"},
{"title":"Of Human Bondage","author":"W. Somerset Maugham"},
{"title":"The Devil's Arithmetic","author":"Jane Yolen"},
{"title":"The Invisible Bridge","author":"Julie Orringer"},
{"title":"Ruin (Ruin, #1)","author":"Rachel Van Dyken"},
{"title":"The Magus","author":"John Fowles"},
{"title":"Sylvester and the Magic Pebble","author":"William Steig"},
{"title":"Making Faces","author":"Amy Harmon"},
{"title":"The Daylight War (Demon Cycle, #3)","author":"Peter V. Brett"},
{"title":"The Last Command (Star Wars: The Thrawn Trilogy, #3)","author":"Timothy Zahn"},
{"title":"Jewgeni Onegin","author":"Alexander Pushkin"},
{"title":"Drama","author":"Raina Telgemeier"},
{"title":"The Retribution of Mara Dyer (Mara Dyer, #3)","author":"Michelle Hodkin"},
{"title":"Love and Respect: The Love She Most Desires; The Respect He Desperately Needs","author":"Emerson Eggerichs"},
{"title":"The Stars My Destination","author":"Alfred Bester"},
{"title":"On Basilisk Station (Honor Harrington, #1)","author":"David Weber"},
{"title":"My Name Is Asher Lev","author":"Chaim Potok"},
{"title":"Behemoth (Leviathan, #2)","author":"Scott Westerfeld"},
{"title":"Brown Girl Dreaming","author":"Jacqueline Woodson"},
{"title":"De held van onze tijd","author":"Mikhail Lermontov"},
{"title":"A Constellation of Vital Phenomena","author":"Anthony Marra"},
{"title":"The Bane Chronicles","author":"Cassandra Clare"},
{"title":"Born Free: A Lioness of Two Worlds (Story of Elsa, #1)","author":"Joy Adamson"},
{"title":"Amulet, Vol. 1: The Stonekeeper (Amulet, #1)","author":"Kazu Kibuishi"},
{"title":"Alas, Babylon","author":"Pat Frank"},
{"title":"Chains (Seeds of America, #1)","author":"Laurie Halse Anderson"},
{"title":"The Program (The Program, #1)","author":"Suzanne Young"},
{"title":"De kant van Swann (Op zoek naar de verloren tijd, #1)","author":"Marcel Proust"},
{"title":"So B. It","author":"Sarah Weeks"},
{"title":"Beautifully Damaged (Beautifully Damaged, #1)","author":"L.A. Fiore"},
{"title":"Use of Weapons (Culture, #3)","author":"Iain M. Banks"},
{"title":"Shades of Grey (Shades of Grey, #1)","author":"Jasper Fforde"},
{"title":"The Wright Brothers","author":"David McCullough"},
{"title":"Hunger","author":"Knut Hamsun"},
{"title":"Giovanni's Room","author":"James Baldwin"},
{"title":"To Say Nothing of the Dog (Oxford Time Travel, #2)","author":"Connie Willis"},
{"title":"Inside Out & Back Again","author":"Thanhha Lai"},
{"title":"Among the Imposters (Shadow Children, #2)","author":"Margaret Peterson Haddix"},
{"title":"De Toverberg","author":"Thomas Mann"},
{"title":"The Magic Mountain","author":"Thomas Mann"},
{"title":"War of the Twins (Dragonlance: Legends, #2)","author":"Margaret Weis"},
{"title":"Test of the Twins (Dragonlance: Legends, #3)","author":"Margaret Weis"},
{"title":"Haroun and the Sea of Stories (Khalifa Brothers, #1)","author":"Salman Rushdie"},
{"title":"Where the Mountain Meets the Moon","author":"Grace Lin"},
{"title":"El Deafo","author":"Cece Bell"},
{"title":"Mockingbird","author":"Kathryn Erskine"},
{"title":"The Heroin Diaries: A Year In The Life Of A Shattered Rock Star","author":"Nikki Sixx"},
{"title":"The Three Stigmata of Palmer Eldritch","author":"Philip K. Dick"},
{"title":"The Reality Dysfunction (Night's Dawn, #1)","author":"Peter F. Hamilton"},
{"title":"The Demolished Man","author":"Alfred Bester"},
{"title":"Lord of Light","author":"Roger Zelazny"},
{"title":"Black Lies","author":"Alessandra Torre"},
{"title":"The Air He Breathes (Elements, #1)","author":"Brittainy C. Cherry"},
{"title":"Left Drowning (Left Drowning, #1)","author":"Jessica Park"},
{"title":"A Piece of Cake","author":"Cupcake Brown"},
{"title":"Monster in His Eyes (Monster in His Eyes, #1)","author":"J.M. Darhower"},
{"title":"Quo Vadis","author":"Henryk Sienkiewicz"},
{"title":"Replay","author":"Ken Grimwood"},
{"title":"Loving Mr. Daniels","author":"Brittainy C. Cherry"},
{"title":"A Long Walk to Water: Based on a True Story","author":"Linda Sue Park"},
{"title":"Wolf Brother (Chronicles of Ancient Darkness, #1)","author":"Michelle Paver"},
{"title":"The Grand Sophy","author":"Georgette Heyer"},
{"title":"___ __","author":"___ _______"},
{"title":"Fuzzy Nation","author":"John Scalzi"},
{"title":"Kobus Kruls Parmantige Kattenboek","author":"T.S. Eliot"},
{"title":"A Single Man","author":"Christopher Isherwood"},
{"title":"Crystal Singer (Crystal Singer, #1)","author":"Anne McCaffrey"},
{"title":"The Bone People (Picador Books)","author":"Keri Hulme"},
{"title":"The Crossover","author":"Kwame Alexander"},
{"title":"Bright Side (Bright Side, #1)","author":"Kim Holden"},
{"title":"Sadako and the Thousand Paper Cranes","author":"Eleanor Coerr"},
{"title":"Take Me with You","author":"Catherine Ryan Hyde"},
{"title":"The Past Through Tomorrow (Future History, #1-21)","author":"Robert A. Heinlein"},
{"title":"The Palace of Illusions","author":"Chitra Banerjee Divakaruni"},
{"title":"The Law of Moses (The Law of Moses, #1)","author":"Amy Harmon"},
{"title":"Silver Blaze (The Memoirs of Sherlock Holmes, #1)","author":"Arthur Conan Doyle"},
{"title":"Armor","author":"John Steakley"},
{"title":"Children of God (The Sparrow, #2)","author":"Mary Doria Russell"},
{"title":"A Modest Proposal and Other Satirical Works","author":"Jonathan Swift"},
{"title":"Kyland","author":"Mia Sheridan"},
{"title":"Frederica","author":"Georgette Heyer"},
{"title":"Time and Again (Time, #1)","author":"Jack Finney"},
{"title":"The Temple of My Familiar","author":"Alice Walker"},
{"title":"The Lions of Little Rock","author":"Kristin Levine"},
{"title":"My Sweet Orange Tree","author":"José Mauro de Vasconcelos"},
{"title":"The Long Walk: The True Story of a Trek to Freedom","author":"Slavomir Rawicz"},
{"title":"Grayson's Vow","author":"Mia Sheridan"},
{"title":"The Anubis Gates","author":"Tim Powers"},
{"title":"Arabella","author":"Georgette Heyer"},
{"title":"The Skin I'm In","author":"Sharon G. Flake"},
{"title":"Bomb: The Race to Build—and Steal—the World's Most Dangerous Weapon","author":"Steve Sheinkin"},
{"title":"Bring Me Home (Shattered Hearts, #4)","author":"Cassia Leo"},
{"title":"Venetia","author":"Georgette Heyer"},
{"title":"The Mighty Miss Malone","author":"Christopher Paul Curtis"},
{"title":"Rain Reign","author":"Ann M. Martin"},
{"title":"See You at Harry's","author":"Jo Knowles"},
{"title":"The Bicentennial Man and Other Stories","author":"Isaac Asimov"},
{"title":"Dearest Clementine (Dearest, #1)","author":"Lex Martin"},
{"title":"The Gone-Away World","author":"Nick Harkaway"},
{"title":"Callahan's Crosstime Saloon (Callahan's, #1)","author":"Spider Robinson"},
{"title":"Hit or Myth (Myth Adventures, #4)","author":"Robert Asprin"},
{"title":"Vader's Little Princess","author":"Jeffrey Brown"},
{"title":"Echo","author":"Pam Muñoz Ryan"},
{"title":"The Speed of Dark","author":"Elizabeth Moon"},
{"title":"The Eighty-Dollar Champion: Snowman, the Horse That Inspired a Nation","author":"Elizabeth Letts"},
{"title":"The Story of a Seagull and the Cat Who Taught Her to Fly","author":"Luis Sepúlveda"},
{"title":"Heroes Die (The Acts of Caine, #1)","author":"Matthew Woodring Stover"},
{"title":"The Adventures of the Stainless Steel Rat (Stainless Steel Rat, #4-6)","author":"Harry Harrison"},
{"title":"Ada, or Ardor: A Family Chronicle","author":"Vladimir Nabokov"},
{"title":"Modoc: The True Story of the Greatest Elephant That Ever Lived","author":"Ralph Helfer"},
{"title":"The True Meaning of Smekday","author":"Adam Rex"},
{"title":"Death's Acre: Inside the Legendary Forensic Lab the Body Farm Where the Dead Do Tell Tales","author":"William M. Bass"},
{"title":"The Gift of Asher Lev","author":"Chaim Potok"},
{"title":"The Mysterious Stranger","author":"Mark Twain"},
{"title":"Infinity + One","author":"Amy Harmon"},
{"title":"The Diviners","author":"Margaret Laurence"},
{"title":"The Futurological Congress: From the Memoirs of Ijon Tichy","author":"Stanis_aw Lem"},
{"title":"Tuf Voyaging","author":"George R.R. Martin"},
{"title":"Four Plays: The Clouds/The Birds/Lysistrata/The Frogs","author":"Aristophanes"},
{"title":"The House with a Clock in Its Walls (Lewis Barnavelt, #1)","author":"John Bellairs"},
{"title":"Searching For Moore (Needing Moore, #1)","author":"Julie A. Richman"},
{"title":"Sixth of the Dusk","author":"Brandon Sanderson"},
{"title":"The Green Glass Sea (Green Glass #1)","author":"Ellen Klages"},
{"title":"The Nine Billion Names of God","author":"Arthur C. Clarke"},
{"title":"Life After Life: The Investigation of a Phenomenon - Survival of Bodily Death","author":"Raymond A. Moody Jr."},
{"title":"Blood River: A Journey to Africa's Broken Heart","author":"Tim Butcher"},
{"title":"De brief voor de koning","author":"Tonke Dragt"},
{"title":"A Fortunate Life","author":"Albert B. Facey"},
{"title":"The Warlock in Spite of Himself (Warlock, #1)","author":"Christopher Stasheff"},
{"title":"English Passengers","author":"Matthew Kneale"},
{"title":"The Shadow Of What Was Lost (The Licanius Trilogy, #1)","author":"James Islington"},
{"title":"The Positronic Man (Robot, #0.6)","author":"Isaac Asimov"},
{"title":"Avatar: The Last Airbender - The Promise","author":"Gene Luen Yang"},
{"title":"Sweet Obsession (Sweet Addiction, #3)","author":"J.  Daniels"},
{"title":"The Rebel Angels (Cornish Trilogy, #1)","author":"Robertson Davies"},
{"title":"The Elric Saga Part I (Elric Saga, #1-3)","author":"Michael Moorcock"},
{"title":"Pioneer Girl: The Annotated Autobiography","author":"Laura Ingalls Wilder"},
{"title":"Radetzkymars","author":"Joseph Roth"},
{"title":"Binky the Space Cat","author":"Ashley Spires"},
{"title":"Archer's Goon","author":"Diana Wynne Jones"},
{"title":"Ten Below Zero","author":"Whitney Barbetti"},
{"title":"The Sheep Look Up","author":"John Brunner"},
{"title":"Stella by Starlight","author":"Sharon M. Draper"},
{"title":"Blasphemy: New and Selected Stories","author":"Sherman Alexie"},
{"title":"Dragons of the Hourglass Mage (Dragonlance: The Lost Chronicles, #3)","author":"Margaret Weis"},
{"title":"Awkward","author":"Svetlana Chmakova"},
{"title":"The Invincible","author":"Stanis_aw Lem"},
{"title":"Inherit the Stars (Giants, #1)","author":"James P. Hogan"},
{"title":"Lost and Found (Emi Lost & Found, #1)","author":"Lori L. Otto"},
{"title":"Kinderen van de Arbat (Arbat tetralogy #1)","author":"Anatoli Rybakov"},
{"title":"The Light of the World","author":"Elizabeth Alexander"},
{"title":"Chasing Abby (Shattered Hearts, #6)","author":"Cassia Leo"},
{"title":"The Consequence of Revenge (Consequence, #2)","author":"Rachel Van Dyken"},
{"title":"Gracefully Grayson","author":"Ami Polonsky"},
{"title":"The Lyre of Orpheus","author":"Robertson Davies"},
{"title":"The Cloud of Unknowing","author":"Anonymous"},
{"title":"The Golden Age (Golden Age #1)","author":"John C. Wright"},
{"title":"Demian / Siddartha","author":"Hermann Hesse"},
{"title":"Dalva","author":"Jim Harrison"},
{"title":"The Red Umbrella","author":"Christina Diaz Gonzalez"},
{"title":"Star Man's Son, 2250 A.D","author":"Andre Norton"},
{"title":"Raising the Stones (Arbai, #2)","author":"Sheri S. Tepper"},
{"title":"The Witches of Karres (The Witches of Karres, #1)","author":"James H. Schmitz"},
{"title":"Savage Continent: Europe in the Aftermath of World War II","author":"Keith Lowe"},
{"title":"Geheimen van het Wilde Woud","author":"Tonke Dragt"},
{"title":"No Man Knows My History: The Life of Joseph Smith","author":"Fawn M. Brodie"},
{"title":"The Forgotten Door","author":"Alexander Key"},
{"title":"The Wonderful Flight to the Mushroom Planet (Mushroom Planet, #1)","author":"Eleanor Cameron"},
{"title":"Forgotten Fire","author":"Adam Bagdasarian"},
{"title":"Missing Microbes: How the Overuse of Antibiotics Is Fueling Our Modern Plagues","author":"Martin J. Blaser"},
{"title":"A Handful of Stars","author":"Cynthia Lord"},
{"title":"Mad Cowboy: Plain Truth from the Cattle Rancher Who Won't Eat Meat","author":"Howard F. Lyman"},
{"title":"Living Again (Living Again, #1)","author":"L.L. Collins"},
{"title":"Baby Island","author":"Carol Ryrie Brink"},
{"title":"Het Woud der Verwachting : Het leven van Charles van Orléans","author":"Hella S. Haasse"},
{"title":"Wasp","author":"Eric Frank Russell"},
{"title":"Santiago: A Myth of the Far Future (Santiago #1)","author":"Mike Resnick"},
{"title":"De Naam van de Roos & Naschrift","author":"Umberto Eco"},
{"title":"Here She Rules (The Chronicles of Erla: Book 1)","author":"Kat Brewer"}];

for (var i in arr){
  //console.log("title: " + arr[i]["title"] + " author: " + arr[i]["author"]);
  var author = arr[i]["author"];
  author = encodeURIComponent(author); //appropriate for url
  author = author.replace(/\%20/gm, "+"); //changes all %20 to +
  var title = arr[i]["title"];
  title = title.split("(")[0]; //takes the left side of the title
  title = title.trim();
  title = encodeURIComponent(title); //appropriate for url
  title = title.replace(/\%20/gm, "+"); //changes all %20 to +
  title = title.replace(/\'/gm, "%27"); //replaces all ' to %27
  //console.log(title +" "+author);

  http.get('http://openlibrary.org/search.json?title='+title+'&author='+author, function (err, res) {
    if (err) {
      console.error("error in title " + title)
      console.error(err);
      return;
    }
    
    respu = JSON.parse(res.buffer);
    //console.log("title: " + title);
    //console.log("respu: " + respu.docs);
    //console.log("title_suggest: "+respu.docs[0].title_suggest);
    if (typeof respu.docs !== "undefined"){
      if (typeof respu.docs[0] !== "undefined"){
        if (typeof respu.docs[0].oclc !== "undefined"){
          var isbn0 = respu.docs[0].oclc[0]; //first isbn from the long list

          http.get('https://openlibrary.org/api/books?bibkeys=OCLC:'+isbn0+'&jscmd=details&format=json', function(erro, resu){
            if (erro) {
              console.error("error in oclc " + isbn0)
              console.error(erro);
              return;
            }
            respu2 = JSON.parse(resu.buffer);

            //console.log(respu.docs[0].title_suggest + "\t"+isbn0+"\t"+respu2['OCLC:'+isbn0].details.number_of_pages);  
            //console.log(respu2['OCLC:'+isbn0].thumbnail_url); //image url
            var det = respu2['OCLC:'+isbn0].details;
            //console.log(det);
            //console.log(det.title +"\t"+ isbn0 +"\t"+det.number_of_pages+"\t"+det.publish_date);
            if (typeof det.authors !== "undefined")
              author = det.authors[0].name;

            console.log(det.title +"\t"+ author +"\t"+isbn0 +"\t"+det.number_of_pages+"\t"+det.publish_date);
            //console.log(respu2['OCLC:'+isbn0].details.number_of_pages);
          });
        }
      }
    }
      

    
  //console.log(respu.docs[0].isbn);

  //console.log(res.code, res.headers, res.buffer.toString());
  });
}

