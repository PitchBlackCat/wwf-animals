let wwf_animals = [
{name: "African Elephant", scientific: "Loxodonta africana", status: "Vulnerable"},
{name: "African Wild Dog", scientific: "Lycaon pictus", status: "Endangered"},
{name: "Albacore Tuna", scientific: "Thunnus alalunga", status: "Near Threatened"},
{name: "Amazon River Dolphin", scientific: "Scientific Name Inia geoffrensis", status: ""},
{name: "Amur Leopard", scientific: "Panthera pardus orientalis", status: "Critically Endangered"},
{name: "Amur Tiger", scientific: "Panthera tigris altaica", status: "Endangered"},
{name: "Arctic Fox", scientific: "Vulpes lagopus", status: "Least Concern"},
{name: "Arctic Wolf", scientific: "Canis lupus arctos", status: "Least Concern"},
{name: "Asian Elephant", scientific: "Elephas maximus indicus", status: "Endangered"},
{name: "Beluga", scientific: "Delphinapterus leucas", status: "Near Threatened"},
{name: "Bengal Tiger", scientific: "Panthera tigris tigris", status: "Endangered"},
{name: "Bigeye Tuna", scientific: "Thunnus obesus", status: "Vulnerable"},
{name: "Black Rhino", scientific: "Diceros bicornis", status: "Critically Endangered"},
{name: "Black Spider Monkey", scientific: "Ateles paniscus", status: "Vulnerable"},
{name: "Black-footed Ferret", scientific: "Mustela nigripes", status: "Endangered"},
{name: "Blue Whale", scientific: "Balaenoptera musculus", status: "Endangered"},
{name: "Bluefin Tuna", scientific: "Thunnus spp", status: "Endangered"},
{name: "Bonobo", scientific: "Pan paniscus", status: "Endangered"},
{name: "Bornean Orangutan", scientific: "Pongo pygmaeus", status: "Critically Endangered"},
{name: "Borneo Pygmy Elephant", scientific: "Elephas maximus borneensis", status: "Endangered"},
{name: "Bowhead Whale", scientific: "Balaena mysticetus", status: "Least Concern"},
{name: "Brown Bear", scientific: "Ursus arctos", status: "Least Concern"},
{name: "Chimpanzee", scientific: "Pan troglodytes", status: "Endangered"},
{name: "Common Bottlenose Dolphin", scientific: "Tursiops truncates", status: "Least Concern"},
{name: "Cross River Gorilla", scientific: "Gorilla gorilla diehli", status: "Critically Endangered"},
{name: "Dolphins and Porpoises", scientific: "", status: ""},
{name: "Dugong", scientific: "Dugong dugon", status: "Vulnerable"},
{name: "Eastern Lowland Gorilla", scientific: "Gorilla beringei graueri", status: "Critically Endangered"},
{name: "Elephant", scientific: "", status: ""},
{name: "Fin Whale", scientific: "Balaenoptera physalus", status: "Endangered"},
{name: "Forest Elephant", scientific: "", status: "Vulnerable"},
{name: "Galápagos Penguin", scientific: "Spheniscus mendiculus", status: "Endangered"},
{name: "Ganges River Dolphin", scientific: "Platanista gangetica gangetica", status: "Endangered"},
{name: "Giant Panda", scientific: "Ailuropoda melanoleuca", status: "Vulnerable"},
{name: "Giant Tortoise", scientific: "", status: "Vulnerable"},
{name: "Gorilla", scientific: "Gorilla gorilla and Gorilla beringei", status: ""},
{name: "Gray Whale", scientific: "Eschrichtius robustus", status: "Least Concern"},
{name: "Great White Shark", scientific: "Carcharodon carcharias", status: "Vulnerable"},
{name: "Greater One-Horned Rhino", scientific: "Rhinoceros unicornis", status: "Vulnerable"},
{name: "Greater Sage-Grouse", scientific: "Centrocercus urophasianus", status: "Near Threatened"},
{name: "Green Turtle", scientific: "Chelonia mydas", status: "Endangered"},
{name: "Hawksbill Turtle", scientific: "Eretmochelys imbricata", status: "Critically Endangered"},
{name: "Hector's Dolphin", scientific: "Cephalorhynchus hectori", status: "Endangered"},
{name: "Hippopotamus", scientific: "Hippopotamus amphibius", status: "Vulnerable"},
{name: "Humphead Wrasse", scientific: "Cheilinus undulatus", status: "Endangered"},
{name: "Indian Elephant", scientific: "Elephas maximus indicus", status: "Endangered"},
{name: "Indochinese Tiger", scientific: "Panthera tigris corbetti", status: "Endangered"},
{name: "Indus River Dolphin", scientific: "Platanista minor", status: "Endangered"},
{name: "Irrawaddy Dolphin", scientific: "Orcaella brevirostris", status: "Endangered"},
{name: "Jaguar", scientific: "Panthera onca", status: "Near Threatened"},
{name: "Javan Rhino", scientific: "Rhinoceros sondaicus", status: "Critically Endangered"},
{name: "Leatherback Turtle", scientific: "Dermochelys coriacea", status: "Vulnerable"},
{name: "Loggerhead Turtle", scientific: "Caretta caretta", status: "Vulnerable"},
{name: "Macaw", scientific: "Ara ararauna", status: "Least Concern"},
{name: "Malayan Tiger", scientific: "Panthera tigris jacksoni", status: "Critically Endangered"},
{name: "Marine Iguana", scientific: "Amblyrhynchus cristatus", status: "Vulnerable"},
{name: "Monarch Butterfly", scientific: "Danaus plexippus", status: ""},
{name: "Mountain Gorilla", scientific: "Gorilla beringei beringei", status: "Endangered"},
{name: "Mountain Plover", scientific: "Charadrius montanus", status: "Near Threatened"},
{name: "Narwhal", scientific: "Monodon monoceros", status: "Near Threatened"},
{name: "North Atlantic Right Whale", scientific: "Eubalaena glacialis", status: "Endangered"},
{name: "Olive Ridley Turtle", scientific: "Lepidochelys olivacea", status: "Vulnerable"},
{name: "Orangutan", scientific: "Pongo abelii, Pongo pygmaeus", status: "Critically Endangered"},
{name: "Pacific Salmon", scientific: "", status: ""},
{name: "Pangolin", scientific: "", status: ""},
{name: "Penguin", scientific: "Spheniscidae", status: ""},
{name: "Plains Bison", scientific: "Bison bison bison", status: "Near Threatened"},
{name: "Poison Dart Frog", scientific: "Dendrobates species", status: ""},
{name: "Polar Bear", scientific: "Ursus maritimus", status: "Vulnerable"},
{name: "Pronghorn", scientific: "Antilocarpa americana", status: "Least Concern"},
{name: "Red Panda", scientific: "Ailurus fulgens", status: "Endangered"},
{name: "Rhino", scientific: "", status: ""},
{name: "Saola", scientific: "Pseudoryx nghetinhensis", status: "Critically Endangered"},
{name: "Savanna Elephant", scientific: "Loxodonta africana africana", status: "Vulnerable"},
{name: "Sea Lions", scientific: "Zalophus wollebaeki", status: "Endangered"},
{name: "Sea Turtle", scientific: "Cheloniidae and Dermochelyidae families", status: "Vulnerable"},
{name: "Seals", scientific: "", status: ""},
{name: "Sei Whale", scientific: "Balaenoptera borealis", status: "Endangered"},
{name: "Shark", scientific: "", status: ""},
{name: "Skipjack Tuna", scientific: "Katsuwonus pelamis", status: "Least Concern"},
{name: "Sloth", scientific: "", status: ""},
{name: "Snow Leopard", scientific: "Panthera uncia", status: "Vulnerable"},
{name: "South China Tiger", scientific: "Panthera tigris amoyensis", status: "Critically Endangered"},
{name: "Southern rockhopper penguin", scientific: "Eudyptes chrysocome", status: "Vulnerable"},
{name: "Sri Lankan Elephant", scientific: "Elephas maximus maximus", status: "Endangered"},
{name: "Sumatran Elephant", scientific: "Elephas maximus sumatranus", status: "Critically Endangered"},
{name: "Sumatran Orangutan", scientific: "Pongo abelii", status: "Critically Endangered"},
{name: "Sumatran Rhino", scientific: "Dicerorhinus sumatrensis", status: "Critically Endangered"},
{name: "Sumatran Tiger", scientific: "Panthera tigris sumatrae", status: "Critically Endangered"},
{name: "Swift Fox", scientific: "Vulpes velox", status: "Least Concern"},
{name: "Tiger", scientific: "Panthera tigris", status: "Endangered"},
{name: "Tree Kangaroo", scientific: "Dendrolagus sp.", status: "Least Concern"},
{name: "Tuna", scientific: "Thunnus and Katsuwonus species", status: ""},
{name: "Vaquita", scientific: "Phocoena sinus", status: "Critically Endangered"},
{name: "Western Lowland Gorilla", scientific: "Gorilla gorilla gorilla", status: "Critically Endangered"},
{name: "Whale", scientific: "Balaenoptera, Balaena, Eschrichtius, and Eubalaen", status: "Endangered"},
{name: "Whale Shark", scientific: "Rhincodon typus", status: "Endangered"},
{name: "White Rhino", scientific: "Ceratotherium simum", status: "Near Threatened"},
{name: "Yangtze Finless Porpoise", scientific: "Neophocaena asiaeorientalis ssp. asiaeorientalis", status: "Critically Endangered"},
{name: "Yellowfin Tuna", scientific: "Thunnus albacares", status: "Near Threatened"},
];
module.exports = [wwf_animals];
