const cars = [
  { "brand": "Aston Martin", "model": "All Types", "category": "Exotic", "name": "Aston Martin" },
  { "brand": "Audi", "model": "A7", "category": "Exotic", "name": "Audi A7" },
  { "brand": "Audi", "model": "A8", "category": "Exotic", "name": "Audi A8" },
  { "brand": "Audi", "model": "R8", "category": "Exotic", "name": "Audi R8" },
  { "brand": "Audi", "model": "Q3", "category": "Exotic", "name": "Audi Q3" },
  { "brand": "Audi", "model": "Q5", "category": "Exotic", "name": "Audi Q5" },
  { "brand": "Audi", "model": "Q6", "category": "Exotic", "name": "Audi Q6" },
  { "brand": "Audi", "model": "Q7", "category": "Exotic", "name": "Audi Q7" },
  { "brand": "Audi", "model": "Q8", "category": "Exotic", "name": "Audi Q8" },
  { "brand": "Bentley", "model": "All Types", "category": "Exotic", "name": "Bentley" },
  { "brand": "BMW", "model": "5 Series", "category": "Exotic", "name": "BMW 5 Series" },
  { "brand": "BMW", "model": "6 Series", "category": "Exotic", "name": "BMW 6 Series" },
  { "brand": "BMW", "model": "7 Series", "category": "Exotic", "name": "BMW 7 Series" },
  { "brand": "BMW", "model": "8 Series", "category": "Exotic", "name": "BMW 8 Series" },
  { "brand": "BMW", "model": "i4", "category": "Exotic", "name": "BMW i4" },
  { "brand": "BMW", "model": "i7", "category": "Exotic", "name": "BMW i7" },
  { "brand": "BMW", "model": "i8", "category": "Exotic", "name": "BMW i8" },
  { "brand": "BMW", "model": "G82", "category": "Exotic", "name": "BMW G82" },
  { "brand": "BMW", "model": "X7", "category": "Exotic", "name": "BMW X7" },
  { "brand": "BMW", "model": "X5 New", "category": "Exotic", "name": "BMW X5 New" },
  { "brand": "BMW", "model": "XM", "category": "Exotic", "name": "BMW XM" },
  { "brand": "BMW", "model": "M Series", "category": "Exotic", "name": "BMW M Series" },
  { "brand": "BMW", "model": "Convertible 430i", "category": "Exotic", "name": "BMW Convertible 430i" },
  { "brand": "BYD", "model": "Denza D9", "category": "Exotic", "name": "BYD Denza D9" },
  { "brand": "Cadillac", "model": "All Types", "category": "Exotic", "name": "Cadillac" },
  { "brand": "Chevrolet", "model": "Corvette", "category": "Exotic", "name": "Chevrolet Corvette" },
  { "brand": "Chevrolet", "model": "Camaro", "category": "Exotic", "name": "Chevrolet Camaro" },
  { "brand": "Chrysler", "model": "300C", "category": "Exotic", "name": "Chrysler 300C" },
  { "brand": "Dodge", "model": "Challenger SRT Demon", "category": "Exotic", "name": "Dodge Challenger SRT Demon" },
  { "brand": "Ferrari", "model": "All Types", "category": "Exotic", "name": "Ferrari" },
  { "brand": "Ford", "model": "Mustang", "category": "Exotic", "name": "Ford Mustang" },
  { "brand": "Genesis", "model": "Electrified G80", "category": "Exotic", "name": "Genesis Electrified G80" },
  { "brand": "GMC", "model": "Yukon Denali", "category": "Exotic", "name": "GMC Yukon Denali" },
  { "brand": "GWM", "model": "Tank 300 HEV", "category": "Exotic", "name": "GWM Tank 300 HEV" },
  { "brand": "GWM", "model": "Tank 500 HEV", "category": "Exotic", "name": "GWM Tank 500 HEV" },
  { "brand": "Honda", "model": "Accura MDX", "category": "Exotic", "name": "Honda Accura MDX" },
  { "brand": "Hummer", "model": "All Types", "category": "Exotic", "name": "Hummer" },
  { "brand": "Hyundai", "model": "H-1", "category": "Exotic", "name": "Hyundai H-1" },
  { "brand": "Hyundai", "model": "Palisade", "category": "Exotic", "name": "Hyundai Palisade" },
  { "brand": "Hyundai", "model": "Staria", "category": "Exotic", "name": "Hyundai Staria" },
  { "brand": "Hyundai", "model": "Ioniq 6", "category": "Exotic", "name": "Hyundai Ioniq 6" },
  { "brand": "Infinity", "model": "All Types", "category": "Exotic", "name": "Infinity" },
  { "brand": "Jaguar", "model": "All Types", "category": "Exotic", "name": "Jaguar" },
  { "brand": "Jeep", "model": "Grand Cherokee", "category": "Exotic", "name": "Jeep Grand Cherokee" },
  { "brand": "Jeep", "model": "Wrangler", "category": "Exotic", "name": "Jeep Wrangler" },
  { "brand": "Jeep", "model": "Cherokee New", "category": "Exotic", "name": "Jeep Cherokee New" },
  { "brand": "Jeep", "model": "Gladiator", "category": "Exotic", "name": "Jeep Gladiator" },
  { "brand": "KIA", "model": "EV6", "category": "Exotic", "name": "KIA EV6" },
  { "brand": "KIA", "model": "EV9", "category": "Exotic", "name": "KIA EV9" },
  { "brand": "KIA", "model": "Grand Carnival", "category": "Exotic", "name": "KIA Grand Carnival" },
  { "brand": "Lamborghini", "model": "All Types", "category": "Exotic", "name": "Lamborghini" },
  { "brand": "Land Rover", "model": "Vogue", "category": "Exotic", "name": "Land Rover Vogue" },
  { "brand": "Land Rover", "model": "Velar", "category": "Exotic", "name": "Land Rover Velar" },
  { "brand": "Land Rover", "model": "Range Rover", "category": "Exotic", "name": "Land Rover Range Rover" },
  { "brand": "Land Rover", "model": "Defender 110 XS SW", "category": "Exotic", "name": "Land Rover Defender 110 XS SW" },
  { "brand": "Land Rover", "model": "Defender 110 SE", "category": "Exotic", "name": "Land Rover Defender 110 SE" },
  { "brand": "Lexus", "model": "ES 250", "category": "Exotic", "name": "Lexus ES 250" },
  { "brand": "Lexus", "model": "ES 300", "category": "Exotic", "name": "Lexus ES 300" },
  { "brand": "Lexus", "model": "LX 570", "category": "Exotic", "name": "Lexus LX 570" },
  { "brand": "Lexus", "model": "RX 350", "category": "Exotic", "name": "Lexus RX 350" },
  { "brand": "Lexus", "model": "LX 600", "category": "Exotic", "name": "Lexus LX 600" },
  { "brand": "Lexus", "model": "LM 350", "category": "Exotic", "name": "Lexus LM 350" },
  { "brand": "Lexus", "model": "UX 300", "category": "Exotic", "name": "Lexus UX 300" },
  { "brand": "Lexus", "model": "RX 450", "category": "Exotic", "name": "Lexus RX 450" },
  { "brand": "Lexus", "model": "LS 500", "category": "Exotic", "name": "Lexus LS 500" },
  { "brand": "Lexus", "model": "RX 500", "category": "Exotic", "name": "Lexus RX 500" },
  { "brand": "Lexus", "model": "LS 600", "category": "Exotic", "name": "Lexus LS 600" },
  { "brand": "Lexus", "model": "RZ 450 E", "category": "Exotic", "name": "Lexus RZ 450 E" },
  { "brand": "Lotus", "model": "All Types", "category": "Exotic", "name": "Lotus" },
  { "brand": "Maserati", "model": "All Types", "category": "Exotic", "name": "Maserati" },
  { "brand": "Mazda", "model": "CX 9", "category": "Exotic", "name": "Mazda CX 9" },
  { "brand": "Mazda", "model": "MX 5", "category": "Exotic", "name": "Mazda MX 5" },
  { "brand": "McLaren", "model": "570 GT", "category": "Exotic", "name": "McLaren 570 GT" },
  { "brand": "Mercedes-Benz", "model": "Marco Polo", "category": "Exotic", "name": "Mercedes-Benz Marco Polo" },
  { "brand": "Mercedes-Benz", "model": "EQA", "category": "Exotic", "name": "Mercedes-Benz EQA" },
  { "brand": "Mercedes-Benz", "model": "EQB", "category": "Exotic", "name": "Mercedes-Benz EQB" },
  { "brand": "Mercedes-Benz", "model": "EQE", "category": "Exotic", "name": "Mercedes-Benz EQE" },
  { "brand": "Mercedes-Benz", "model": "EQS", "category": "Exotic", "name": "Mercedes-Benz EQS" },
  { "brand": "Mercedes-Benz", "model": "S Class", "category": "Exotic", "name": "Mercedes-Benz S Class" },
  { "brand": "Mercedes-Benz", "model": "SL Class", "category": "Exotic", "name": "Mercedes-Benz SL Class" },
  { "brand": "Mercedes-Benz", "model": "GLE", "category": "Exotic", "name": "Mercedes-Benz GLE" },
  { "brand": "Mercedes-Benz", "model": "GLS Class", "category": "Exotic", "name": "Mercedes-Benz GLS Class" },
  { "brand": "Mercedes-Benz", "model": "Viano", "category": "Exotic", "name": "Mercedes-Benz Viano" },
  { "brand": "Mercedes-Benz", "model": "Vito", "category": "Exotic", "name": "Mercedes-Benz Vito" },
  { "brand": "Mini Cooper", "model": "All Types", "category": "Exotic", "name": "Mini Cooper" },
  { "brand": "Mitsubishi", "model": "Outlander PHEV", "category": "Exotic", "name": "Mitsubishi Outlander PHEV" },
  { "brand": "Nissan", "model": "Elgrand", "category": "Exotic", "name": "Nissan Elgrand" },
  { "brand": "Nissan", "model": "Skyline", "category": "Exotic", "name": "Nissan Skyline" },
  { "brand": "Nissan", "model": "GTR", "category": "Exotic", "name": "Nissan GTR" },
  { "brand": "Porsche", "model": "All Types", "category": "Exotic", "name": "Porsche" },
  { "brand": "Renault", "model": "Magane E-Tech", "category": "Exotic", "name": "Renault Magane E-Tech" },
  { "brand": "Rolls Royce", "model": "All Types", "category": "Exotic", "name": "Rolls Royce" },
  { "brand": "Tesla", "model": "All Types", "category": "Exotic", "name": "Tesla" },
  { "brand": "Toyota", "model": "Century", "category": "Exotic", "name": "Toyota Century" },
  { "brand": "Toyota", "model": "Alphard", "category": "Exotic", "name": "Toyota Alphard" },
  { "brand": "Toyota", "model": "Vellfire", "category": "Exotic", "name": "Toyota Vellfire" },
  { "brand": "Toyota", "model": "Cygnus", "category": "Exotic", "name": "Toyota Cygnus" },
  { "brand": "Toyota", "model": "Supra", "category": "Exotic", "name": "Toyota Supra" },
  { "brand": "Toyota", "model": "Prado", "category": "Exotic", "name": "Toyota Prado" },
  { "brand": "Toyota", "model": "Hiace", "category": "Exotic", "name": "Toyota Hiace" },
  { "brand": "Toyota", "model": "Crown Saloon", "category": "Exotic", "name": "Toyota Crown Saloon" },
  { "brand": "Toyota", "model": "Coaster", "category": "Exotic", "name": "Toyota Coaster" },
  { "brand": "Toyota", "model": "Camry Hybrid", "category": "Exotic", "name": "Toyota Camry Hybrid" },
  { "brand": "Toyota", "model": "Land Cruiser", "category": "Exotic", "name": "Toyota Land Cruiser" },
  { "brand": "Toyota", "model": "FJ Cruiser", "category": "Exotic", "name": "Toyota FJ Cruiser" },
  { "brand": "Toyota", "model": "Vellfire HEV", "category": "Exotic", "name": "Toyota Vellfire HEV" },
  { "brand": "Volkswagen", "model": "Caravelle", "category": "Exotic", "name": "Volkswagen Caravelle" },
  { "brand": "Volkswagen", "model": "Touareg", "category": "Exotic", "name": "Volkswagen Touareg" },
  { "brand": "Volvo", "model": "XC 90", "category": "Exotic", "name": "Volvo XC 90" },
  { "brand": "Volvo", "model": "C40 Recharge", "category": "Exotic", "name": "Volvo C40 Recharge" },
  { "brand": "Alfa Romeo", "model": "Spider", "category": "Regular", "name": "Alfa Romeo Spider" },
  { "brand": "Audi", "model": "A1", "category": "Regular", "name": "Audi A1" },
  { "brand": "Audi", "model": "A2", "category": "Regular", "name": "Audi A2" },
  { "brand": "Audi", "model": "A3", "category": "Regular", "name": "Audi A3" },
  { "brand": "Audi", "model": "A4", "category": "Regular", "name": "Audi A4" },
  { "brand": "Audi", "model": "A5", "category": "Regular", "name": "Audi A5" },
  { "brand": "Audi", "model": "A6", "category": "Regular", "name": "Audi A6" },
  { "brand": "Audi", "model": "TT", "category": "Regular", "name": "Audi TT" },
  { "brand": "BMW", "model": "Series 1", "category": "Regular", "name": "BMW Series 1" },
  { "brand": "BMW", "model": "Series 2", "category": "Regular", "name": "BMW Series 2" },
  { "brand": "BMW", "model": "Series 3", "category": "Regular", "name": "BMW Series 3" },
  { "brand": "BMW", "model": "Series 4", "category": "Regular", "name": "BMW Series 4" },
  { "brand": "BMW", "model": "X1", "category": "Regular", "name": "BMW X1" },
  { "brand": "BMW", "model": "X2", "category": "Regular", "name": "BMW X2" },
  { "brand": "BMW", "model": "X3", "category": "Regular", "name": "BMW X3" },
  { "brand": "BMW", "model": "X4", "category": "Regular", "name": "BMW X4" },
  { "brand": "BMW", "model": "i3", "category": "Regular", "name": "BMW i3" },
  { "brand": "BMW", "model": "iX", "category": "Regular", "name": "BMW iX" },
  { "brand": "BMW", "model": "iX1", "category": "Regular", "name": "BMW iX1" },
  { "brand": "BMW", "model": "Z3", "category": "Regular", "name": "BMW Z3" },
  { "brand": "BMW", "model": "Z4", "category": "Regular", "name": "BMW Z4" },
  { "brand": "BMW", "model": "320i", "category": "Regular", "name": "BMW 320i" },
  { "brand": "BMW", "model": "330i", "category": "Regular", "name": "BMW 330i" },
  { "brand": "BYD", "model": "Dolphin", "category": "Regular", "name": "BYD Dolphin" },
  { "brand": "BYD", "model": "ATTO 3", "category": "Regular", "name": "BYD ATTO 3" },
  { "brand": "BYD", "model": "M6", "category": "Regular", "name": "BYD M6" },
  { "brand": "BYD", "model": "Seal", "category": "Regular", "name": "BYD Seal" },
  { "brand": "BYD", "model": "Sealion 7", "category": "Regular", "name": "BYD Sealion 7" },
  { "brand": "Chery", "model": "Omoda 5", "category": "Regular", "name": "Chery Omoda 5" },
  { "brand": "Chery", "model": "Tiggo", "category": "Regular", "name": "Chery Tiggo" },
  { "brand": "Chery", "model": "Tiggo Cross", "category": "Regular", "name": "Chery Tiggo Cross" },
  { "brand": "Chery", "model": "Omoda E5 EV", "category": "Regular", "name": "Chery Omoda E5 EV" },
  { "brand": "Chery", "model": "Tiggo 5X", "category": "Regular", "name": "Chery Tiggo 5X" },
  { "brand": "Chery", "model": "Tiggo 7", "category": "Regular", "name": "Chery Tiggo 7" },
  { "brand": "Chery", "model": "Tiggo 8", "category": "Regular", "name": "Chery Tiggo 8" },
  { "brand": "Chery", "model": "Tiggo 8 Pro", "category": "Regular", "name": "Chery Tiggo 8 Pro" },
  { "brand": "Chery", "model": "J6", "category": "Regular", "name": "Chery J6" },
  { "brand": "Chevrolet", "model": "Cruze", "category": "Regular", "name": "Chevrolet Cruze" },
  { "brand": "Chevrolet", "model": "Captiva", "category": "Regular", "name": "Chevrolet Captiva" },
  { "brand": "Chevrolet", "model": "Spin LTZ", "category": "Regular", "name": "Chevrolet Spin LTZ" },
  { "brand": "Chevrolet", "model": "Trax", "category": "Regular", "name": "Chevrolet Trax" },
  { "brand": "Chevrolet", "model": "Trailblazer", "category": "Regular", "name": "Chevrolet Trailblazer" },
  { "brand": "Citroen", "model": "C3", "category": "Regular", "name": "Citroen C3" },
  { "brand": "Daihatsu", "model": "Rocky", "category": "Regular", "name": "Daihatsu Rocky" },
  { "brand": "Daihatsu", "model": "Grandmax", "category": "Regular", "name": "Daihatsu Grandmax" },
  { "brand": "Daihatsu", "model": "Luxio", "category": "Regular", "name": "Daihatsu Luxio" },
  { "brand": "Daihatsu", "model": "Terios", "category": "Regular", "name": "Daihatsu Terios" },
  { "brand": "Daihatsu", "model": "Xenia", "category": "Regular", "name": "Daihatsu Xenia" },
  { "brand": "Daihatsu", "model": "Taft", "category": "Regular", "name": "Daihatsu Taft" },
  { "brand": "Daihatsu", "model": "Feroza", "category": "Regular", "name": "Daihatsu Feroza" },
  { "brand": "Daihatsu", "model": "Sigra", "category": "Regular", "name": "Daihatsu Sigra" },
  { "brand": "Daihatsu", "model": "Copen", "category": "Regular", "name": "Daihatsu Copen" },
  { "brand": "Datsun", "model": "GO+", "category": "Regular", "name": "Datsun GO+" },
  { "brand": "Datsun", "model": "Cross", "category": "Regular", "name": "Datsun Cross" },
  { "brand": "DFSK", "model": "Glory 560", "category": "Regular", "name": "DFSK Glory 560" },
  { "brand": "DFSK", "model": "Glory 580", "category": "Regular", "name": "DFSK Glory 580" },
  { "brand": "DFSK", "model": "Glory I-Auto", "category": "Regular", "name": "DFSK Glory I-Auto" },
  { "brand": "DFSK", "model": "Gelora", "category": "Regular", "name": "DFSK Gelora" },
  { "brand": "Dodge", "model": "Journey", "category": "Regular", "name": "Dodge Journey" },
  { "brand": "Fiat", "model": "500", "category": "Regular", "name": "Fiat 500" },
  { "brand": "Fiat", "model": "500E", "category": "Regular", "name": "Fiat 500E" },
  { "brand": "Ford", "model": "Ranger", "category": "Regular", "name": "Ford Ranger" },
  { "brand": "Ford", "model": "Escape", "category": "Regular", "name": "Ford Escape" },
  { "brand": "Ford", "model": "Focus", "category": "Regular", "name": "Ford Focus" },
  { "brand": "Ford", "model": "Ecosport", "category": "Regular", "name": "Ford Ecosport" },
  { "brand": "Ford", "model": "Everest", "category": "Regular", "name": "Ford Everest" },
  { "brand": "Ford", "model": "F 150", "category": "Regular", "name": "Ford F 150" },
  { "brand": "Ford", "model": "Explorer", "category": "Regular", "name": "Ford Explorer" },
  { "brand": "Ford", "model": "Ranger Raptor", "category": "Regular", "name": "Ford Ranger Raptor" },
  { "brand": "GAC", "model": "AION", "category": "Regular", "name": "GAC AION" },
  { "brand": "Geely", "model": "All Types", "category": "Regular", "name": "Geely" },
  { "brand": "Honda", "model": "WR-V", "category": "Regular", "name": "Honda WR-V" },
  { "brand": "Honda", "model": "Accord", "category": "Regular", "name": "Honda Accord" },
  { "brand": "Honda", "model": "City", "category": "Regular", "name": "Honda City" },
  { "brand": "Honda", "model": "Civic", "category": "Regular", "name": "Honda Civic" },
  { "brand": "Honda", "model": "Freed", "category": "Regular", "name": "Honda Freed" },
  { "brand": "Honda", "model": "Stream", "category": "Regular", "name": "Honda Stream" },
  { "brand": "Honda", "model": "CR-V", "category": "Regular", "name": "Honda CR-V" },
  { "brand": "Honda", "model": "BR-V", "category": "Regular", "name": "Honda BR-V" },
  { "brand": "Honda", "model": "HR-V", "category": "Regular", "name": "Honda HR-V" },
  { "brand": "Honda", "model": "Mobilio", "category": "Regular", "name": "Honda Mobilio" },
  { "brand": "Honda", "model": "Odyssey", "category": "Regular", "name": "Honda Odyssey" },
  { "brand": "Honda", "model": "Elyssion", "category": "Regular", "name": "Honda Elyssion" },
  { "brand": "Hyundai", "model": "Avega", "category": "Regular", "name": "Hyundai Avega" },
  { "brand": "Hyundai", "model": "Creta", "category": "Regular", "name": "Hyundai Creta" },
  { "brand": "Hyundai", "model": "Stargazer", "category": "Regular", "name": "Hyundai Stargazer" },
  { "brand": "Hyundai", "model": "Accent", "category": "Regular", "name": "Hyundai Accent" },
  { "brand": "Hyundai", "model": "Elantra", "category": "Regular", "name": "Hyundai Elantra" },
  { "brand": "Hyundai", "model": "Kona", "category": "Regular", "name": "Hyundai Kona" },
  { "brand": "Hyundai", "model": "Tucson", "category": "Regular", "name": "Hyundai Tucson" },
  { "brand": "Hyundai", "model": "Venue", "category": "Regular", "name": "Hyundai Venue" },
  { "brand": "Hyundai", "model": "Sonata", "category": "Regular", "name": "Hyundai Sonata" },
  { "brand": "Hyundai", "model": "Santa Fe", "category": "Regular", "name": "Hyundai Santa Fe" },
  { "brand": "Hyundai", "model": "Ioniq", "category": "Regular", "name": "Hyundai Ioniq" },
  { "brand": "Isuzu", "model": "Panther", "category": "Regular", "name": "Isuzu Panther" },
  { "brand": "Isuzu", "model": "Traga", "category": "Regular", "name": "Isuzu Traga" },
  { "brand": "Isuzu", "model": "D-Max", "category": "Regular", "name": "Isuzu D-Max" },
  { "brand": "Jeep", "model": "CJ7", "category": "Regular", "name": "Jeep CJ7" },
  { "brand": "Jeep", "model": "Cherokee", "category": "Regular", "name": "Jeep Cherokee" },
  { "brand": "Jeep", "model": "Patriot", "category": "Regular", "name": "Jeep Patriot" },
  { "brand": "Jeep", "model": "Liberty", "category": "Regular", "name": "Jeep Liberty" },
  { "brand": "Jeep", "model": "Rubicon", "category": "Regular", "name": "Jeep Rubicon" },
  { "brand": "Jeep", "model": "Compass", "category": "Regular", "name": "Jeep Compass" },
  { "brand": "Jeep", "model": "Renegade", "category": "Regular", "name": "Jeep Renegade" },
  { "brand": "KIA", "model": "Spectra", "category": "Regular", "name": "KIA Spectra" },
  { "brand": "KIA", "model": "Sportage", "category": "Regular", "name": "KIA Sportage" },
  { "brand": "KIA", "model": "Carens", "category": "Regular", "name": "KIA Carens" },
  { "brand": "KIA", "model": "Seltos", "category": "Regular", "name": "KIA Seltos" },
  { "brand": "KIA", "model": "Sonet", "category": "Regular", "name": "KIA Sonet" },
  { "brand": "KIA", "model": "Carnival", "category": "Regular", "name": "KIA Carnival" },
  { "brand": "KIA", "model": "Sedona", "category": "Regular", "name": "KIA Sedona" },
  { "brand": "KIA", "model": "Sorento", "category": "Regular", "name": "KIA Sorento" },
  { "brand": "Land Rover", "model": "Defender", "category": "Regular", "name": "Land Rover Defender" },
  { "brand": "Land Rover", "model": "Discovery", "category": "Regular", "name": "Land Rover Discovery" },
  { "brand": "Land Rover", "model": "Freelander", "category": "Regular", "name": "Land Rover Freelander" },
  { "brand": "Land Rover", "model": "Range Rover", "category": "Regular", "name": "Land Rover Range Rover" },
  { "brand": "Lexus", "model": "RX 270", "category": "Regular", "name": "Lexus RX 270" },
  { "brand": "Lexus", "model": "RX 200T", "category": "Regular", "name": "Lexus RX 200T" },
  { "brand": "Lexus", "model": "LBX", "category": "Regular", "name": "Lexus LBX" },
  { "brand": "Lexus", "model": "RX 300", "category": "Regular", "name": "Lexus RX 300" },
  { "brand": "Lexus", "model": "GS", "category": "Regular", "name": "Lexus GS" },
  { "brand": "Lexus", "model": "NX", "category": "Regular", "name": "Lexus NX" },
  { "brand": "Lexus", "model": "IS", "category": "Regular", "name": "Lexus IS" },
  { "brand": "Lexus", "model": "CT 200", "category": "Regular", "name": "Lexus CT 200" },
  { "brand": "Mazda", "model": "Astina", "category": "Regular", "name": "Mazda Astina" },
  { "brand": "Mazda", "model": "Miata", "category": "Regular", "name": "Mazda Miata" },
  { "brand": "Mazda", "model": "CX Series", "category": "Regular", "name": "Mazda CX Series" },
  { "brand": "Mazda", "model": "3 Hatchback", "category": "Regular", "name": "Mazda 3 Hatchback" },
  { "brand": "Mazda", "model": "BT50", "category": "Regular", "name": "Mazda BT50" },
  { "brand": "Mazda", "model": "Biante", "category": "Regular", "name": "Mazda Biante" },
  { "brand": "Mercedes-Benz", "model": "B Class", "category": "Regular", "name": "Mercedes-Benz B Class" },
  { "brand": "Mercedes-Benz", "model": "GLA 200", "category": "Regular", "name": "Mercedes-Benz GLA 200" },
  { "brand": "Mercedes-Benz", "model": "A Class", "category": "Regular", "name": "Mercedes-Benz A Class" },
  { "brand": "Mercedes-Benz", "model": "C Class", "category": "Regular", "name": "Mercedes-Benz C Class" },
  { "brand": "Mercedes-Benz", "model": "E Class", "category": "Regular", "name": "Mercedes-Benz E Class" },
  { "brand": "Mercedes-Benz", "model": "Smart", "category": "Regular", "name": "Mercedes-Benz Smart" },
  { "brand": "Mercedes-Benz", "model": "CLK Class", "category": "Regular", "name": "Mercedes-Benz CLK Class" },
  { "brand": "Mercedes-Benz", "model": "CLA Class", "category": "Regular", "name": "Mercedes-Benz CLA Class" },
  { "brand": "Mercedes-Benz", "model": "SLK Class", "category": "Regular", "name": "Mercedes-Benz SLK Class" },
  { "brand": "Mercedes-Benz", "model": "GLC", "category": "Regular", "name": "Mercedes-Benz GLC" },
  { "brand": "Mitsubishi", "model": "XForce", "category": "Regular", "name": "Mitsubishi XForce" },
  { "brand": "Mitsubishi", "model": "Lancer", "category": "Regular", "name": "Mitsubishi Lancer" },
  { "brand": "Mitsubishi", "model": "Strada", "category": "Regular", "name": "Mitsubishi Strada" },
  { "brand": "Mitsubishi", "model": "Triton", "category": "Regular", "name": "Mitsubishi Triton" },
  { "brand": "Mitsubishi", "model": "Eclipse Cross", "category": "Regular", "name": "Mitsubishi Eclipse Cross" },
  { "brand": "Mitsubishi", "model": "Xpander", "category": "Regular", "name": "Mitsubishi Xpander" },
  { "brand": "Mitsubishi", "model": "Outlander", "category": "Regular", "name": "Mitsubishi Outlander" },
  { "brand": "Mitsubishi", "model": "Grandis", "category": "Regular", "name": "Mitsubishi Grandis" },
  { "brand": "Mitsubishi", "model": "Delica", "category": "Regular", "name": "Mitsubishi Delica" },
  { "brand": "Mitsubishi", "model": "Pajero", "category": "Regular", "name": "Mitsubishi Pajero" },
  { "brand": "Nissan", "model": "XTrail", "category": "Regular", "name": "Nissan XTrail" },
  { "brand": "Nissan", "model": "Juke", "category": "Regular", "name": "Nissan Juke" },
  { "brand": "Nissan", "model": "Evalia", "category": "Regular", "name": "Nissan Evalia" },
  { "brand": "Nissan", "model": "Sentra", "category": "Regular", "name": "Nissan Sentra" },
  { "brand": "Nissan", "model": "Leaf", "category": "Regular", "name": "Nissan Leaf" },
  { "brand": "Nissan", "model": "All New Livina", "category": "Regular", "name": "Nissan All New Livina" },
  { "brand": "Nissan", "model": "Kicks E-Power", "category": "Regular", "name": "Nissan Kicks E-Power" },
  { "brand": "Nissan", "model": "Grand Livina", "category": "Regular", "name": "Nissan Grand Livina" },
  { "brand": "Nissan", "model": "Latio Sedan", "category": "Regular", "name": "Nissan Latio Sedan" },
  { "brand": "Opel", "model": "Optima", "category": "Regular", "name": "Opel Optima" },
  { "brand": "Opel", "model": "Blazer", "category": "Regular", "name": "Opel Blazer" },
  { "brand": "Opel", "model": "Vectra", "category": "Regular", "name": "Opel Vectra" },
  { "brand": "Proton", "model": "Exora", "category": "Regular", "name": "Proton Exora" },
  { "brand": "Proton", "model": "Gen 2", "category": "Regular", "name": "Proton Gen 2" },
  { "brand": "Proton", "model": "Persona", "category": "Regular", "name": "Proton Persona" },
  { "brand": "Proton", "model": "Neo", "category": "Regular", "name": "Proton Neo" },
  { "brand": "Proton", "model": "Saga", "category": "Regular", "name": "Proton Saga" },
  { "brand": "Proton", "model": "Waja", "category": "Regular", "name": "Proton Waja" },
  { "brand": "Proton", "model": "Wira", "category": "Regular", "name": "Proton Wira" },
  { "brand": "Proton", "model": "Suprima S", "category": "Regular", "name": "Proton Suprima S" },
  { "brand": "Renault", "model": "Duster", "category": "Regular", "name": "Renault Duster" },
  { "brand": "Renault", "model": "Laguna", "category": "Regular", "name": "Renault Laguna" },
  { "brand": "Renault", "model": "Scenic", "category": "Regular", "name": "Renault Scenic" },
  { "brand": "Renault", "model": "Grand Scenic", "category": "Regular", "name": "Renault Grand Scenic" },
  { "brand": "Renault", "model": "Kiger", "category": "Regular", "name": "Renault Kiger" },
  { "brand": "Renault", "model": "Triber", "category": "Regular", "name": "Renault Triber" },
  { "brand": "Renault", "model": "Twizy", "category": "Regular", "name": "Renault Twizy" },
  { "brand": "Renault", "model": "Koleos", "category": "Regular", "name": "Renault Koleos" },
  { "brand": "Subaru", "model": "Exiga", "category": "Regular", "name": "Subaru Exiga" },
  { "brand": "Subaru", "model": "Impreza", "category": "Regular", "name": "Subaru Impreza" },
  { "brand": "Subaru", "model": "XV", "category": "Regular", "name": "Subaru XV" },
  { "brand": "Subaru", "model": "WRX", "category": "Regular", "name": "Subaru WRX" },
  { "brand": "Subaru", "model": "Legacy", "category": "Regular", "name": "Subaru Legacy" },
  { "brand": "Subaru", "model": "BRZ", "category": "Regular", "name": "Subaru BRZ" },
  { "brand": "Subaru", "model": "Outback", "category": "Regular", "name": "Subaru Outback" },
  { "brand": "Subaru", "model": "Crosstrek", "category": "Regular", "name": "Subaru Crosstrek" },
  { "brand": "Subaru", "model": "Forester", "category": "Regular", "name": "Subaru Forester" },
  { "brand": "Suzuki", "model": "Carry", "category": "Regular", "name": "Suzuki Carry" },
  { "brand": "Suzuki", "model": "Grand Vitara", "category": "Regular", "name": "Suzuki Grand Vitara" },
  { "brand": "Suzuki", "model": "Baleno", "category": "Regular", "name": "Suzuki Baleno" },
  { "brand": "Suzuki", "model": "Ertiga", "category": "Regular", "name": "Suzuki Ertiga" },
  { "brand": "Suzuki", "model": "Fronx", "category": "Regular", "name": "Suzuki Fronx" },
  { "brand": "Suzuki", "model": "Jimny", "category": "Regular", "name": "Suzuki Jimny" },
  { "brand": "Suzuki", "model": "S Cross", "category": "Regular", "name": "Suzuki S Cross" },
  { "brand": "Suzuki", "model": "XL7", "category": "Regular", "name": "Suzuki XL7" },
  { "brand": "Suzuki", "model": "Escudo", "category": "Regular", "name": "Suzuki Escudo" },
  { "brand": "Suzuki", "model": "APV", "category": "Regular", "name": "Suzuki APV" },
  { "brand": "Suzuki", "model": "Ciaz", "category": "Regular", "name": "Suzuki Ciaz" },
  { "brand": "Timor", "model": "All Types", "category": "Regular", "name": "Timor" },
  { "brand": "Toyota", "model": "Yaris", "category": "Regular", "name": "Toyota Yaris" },
  { "brand": "Toyota", "model": "Raize", "category": "Regular", "name": "Toyota Raize" },
  { "brand": "Toyota", "model": "Corolla", "category": "Regular", "name": "Toyota Corolla" },
  { "brand": "Toyota", "model": "Soluna", "category": "Regular", "name": "Toyota Soluna" },
  { "brand": "Toyota", "model": "Altis", "category": "Regular", "name": "Toyota Altis" },
  { "brand": "Toyota", "model": "Prius", "category": "Regular", "name": "Toyota Prius" },
  { "brand": "Toyota", "model": "Corona", "category": "Regular", "name": "Toyota Corona" },
  { "brand": "Toyota", "model": "Vios", "category": "Regular", "name": "Toyota Vios" },
  { "brand": "Toyota", "model": "Celica", "category": "Regular", "name": "Toyota Celica" },
  { "brand": "Toyota", "model": "Wish", "category": "Regular", "name": "Toyota Wish" },
  { "brand": "Toyota", "model": "Hi-Lux", "category": "Regular", "name": "Toyota Hi-Lux" },
  { "brand": "Toyota", "model": "Kijang", "category": "Regular", "name": "Toyota Kijang" },
  { "brand": "Toyota", "model": "Innova", "category": "Regular", "name": "Toyota Innova" },
  { "brand": "Toyota", "model": "Avanza", "category": "Regular", "name": "Toyota Avanza" },
  { "brand": "Toyota", "model": "Rush", "category": "Regular", "name": "Toyota Rush" },
  { "brand": "Toyota", "model": "Calya", "category": "Regular", "name": "Toyota Calya" },
  { "brand": "Toyota", "model": "Sienta", "category": "Regular", "name": "Toyota Sienta" },
  { "brand": "Toyota", "model": "C-HR", "category": "Regular", "name": "Toyota C-HR" },
  { "brand": "Toyota", "model": "Veloz", "category": "Regular", "name": "Toyota Veloz" },
  { "brand": "Vinfast", "model": "VF E34", "category": "Regular", "name": "Vinfast VF E34" },
  { "brand": "Volkswagen", "model": "Touran", "category": "Regular", "name": "Volkswagen Touran" },
  { "brand": "Volkswagen", "model": "Golf", "category": "Regular", "name": "Volkswagen Golf" },
  { "brand": "Volkswagen", "model": "Beetle", "category": "Regular", "name": "Volkswagen Beetle" },
  { "brand": "Volkswagen", "model": "T-Cross", "category": "Regular", "name": "Volkswagen T-Cross" },
  { "brand": "Volkswagen", "model": "Tiguan", "category": "Regular", "name": "Volkswagen Tiguan" },
  { "brand": "Volkswagen", "model": "Passat", "category": "Regular", "name": "Volkswagen Passat" },
  { "brand": "Volkswagen", "model": "Scirocco", "category": "Regular", "name": "Volkswagen Scirocco" },
  { "brand": "Volkswagen", "model": "Combi", "category": "Regular", "name": "Volkswagen Combi" },
  { "brand": "Volvo", "model": "S30", "category": "Regular", "name": "Volvo S30" },
  { "brand": "Volvo", "model": "S40", "category": "Regular", "name": "Volvo S40" },
  { "brand": "Volvo", "model": "S60", "category": "Regular", "name": "Volvo S60" },
  { "brand": "Volvo", "model": "S70", "category": "Regular", "name": "Volvo S70" },
  { "brand": "Volvo", "model": "C30", "category": "Regular", "name": "Volvo C30" },
  { "brand": "Volvo", "model": "C70", "category": "Regular", "name": "Volvo C70" },
  { "brand": "Volvo", "model": "XC40", "category": "Regular", "name": "Volvo XC40" },
  { "brand": "Volvo", "model": "XC60", "category": "Regular", "name": "Volvo XC60" },
  { "brand": "Volvo", "model": "V70", "category": "Regular", "name": "Volvo V70" },
  { "brand": "Volvo", "model": "S80", "category": "Regular", "name": "Volvo S80" },
  { "brand": "Volvo", "model": "S90", "category": "Regular", "name": "Volvo S90" },
  { "brand": "Wuling", "model": "Confero-S", "category": "Regular", "name": "Wuling Confero-S" },
  { "brand": "Wuling", "model": "Cortez", "category": "Regular", "name": "Wuling Cortez" },
  { "brand": "Wuling", "model": "Formo Max", "category": "Regular", "name": "Wuling Formo Max" },
  { "brand": "Wuling", "model": "Almaz", "category": "Regular", "name": "Wuling Almaz" },
  { "brand": "Wuling", "model": "Alvez", "category": "Regular", "name": "Wuling Alvez" },
  { "brand": "Wuling", "model": "Formo", "category": "Regular", "name": "Wuling Formo" },
  { "brand": "Wuling", "model": "Baojun 310", "category": "Regular", "name": "Wuling Baojun 310" },
  { "brand": "Wuling", "model": "Almaz Hybrid", "category": "Regular", "name": "Wuling Almaz Hybrid" },
  { "brand": "Wuling", "model": "Cloud EV", "category": "Regular", "name": "Wuling Cloud EV" },
  { "brand": "Wuling", "model": "Binguo EV", "category": "Regular", "name": "Wuling Binguo EV" }
];

const prices = {
  Regular: [
    { name: "Signature Wash & Wax", oldPrice: "Rp 300.000", price: "Rp 300.000", label: "Normal Rate", bonus: "Normal Rate", labelColor: "blue" },
    { name: "Express Polishing", oldPrice: "Rp 880.000", price: "Rp 792.000", label: "10% OFF", bonus: "Bonus Sonax Clean & Drive Wipes" },
    { name: "Glass Polishing", oldPrice: "Rp 660.000", price: "Rp 594.000", label: "10% OFF", bonus: "Bonus Sonax Clean & Drive Wipes" },
    { name: "Interior Detailing", oldPrice: "Rp 990.000", price: "Rp 891.000", label: "10% OFF", bonus: "Bonus Sonax Clean & Drive Wipes" },
    { name: "Exterior Detailing", oldPrice: "Rp 1.650.000", price: "Rp 1.485.000", label: "10% OFF", bonus: "Bonus Sonax Clean & Drive Wipes" },
    { name: "Complete Detailing", oldPrice: "Rp 2.625.000", price: "Rp 2.188.000", label: "Special Price", bonus: "One Price All Size", featured: true, labelColor: "blue" },
    { name: "Meguiar's Premium Coating + Complete Detailing", oldPrice: "Rp 6.250.000", price: "Rp 3.749.000", label: "Best Seller", bonus: "2 Years Warranty • One Price All Size", featured: true, labelColor: "green" },
    { name: "Meguiar's Platinum Coating + Complete Detailing", oldPrice: "Rp 6.875.000", price: "Rp 4.999.000", label: "New", bonus: "3 Years Warranty • One Price All Size", labelColor: "blue" },
    { name: "Autosol Signature Coating + Complete Detailing", oldPrice: "Rp 9.250.000", price: "Rp 7.862.500", label: "15% OFF", bonus: "5 Years Warranty • FREE Fish Bowl • Tebus Murah Produk 25%" }
  ],
  Exotic: [
    { name: "Signature Wash & Wax", oldPrice: "Rp 300.000", price: "Rp 300.000", label: "Normal Rate", bonus: "Normal Rate", labelColor: "blue" },
    { name: "Express Polishing", oldPrice: "Rp 880.000", price: "Rp 792.000", label: "10% OFF", bonus: "Bonus Sonax Clean & Drive Wipes" },
    { name: "Glass Polishing", oldPrice: "Rp 715.000", price: "Rp 643.500", label: "10% OFF", bonus: "Bonus Sonax Clean & Drive Wipes" },
    { name: "Interior Detailing", oldPrice: "Rp 990.000", price: "Rp 891.000", label: "10% OFF", bonus: "Bonus Sonax Clean & Drive Wipes" },
    { name: "Exterior Detailing", oldPrice: "Rp 1.815.000", price: "Rp 1.633.500", label: "10% OFF", bonus: "Bonus Sonax Clean & Drive Wipes" },
    { name: "Complete Detailing", oldPrice: "Rp 2.940.000", price: "Rp 2.188.000", label: "Special Price", bonus: "One Price All Size", featured: true, labelColor: "blue" },
    { name: "Meguiar's Premium Coating + Complete Detailing", oldPrice: "Rp 8.250.000", price: "Rp 3.749.000", label: "Best Seller", bonus: "2 Years Warranty • One Price All Size", featured: true, labelColor: "green" },
    { name: "Meguiar's Platinum Coating + Complete Detailing", oldPrice: "Rp 8.875.000", price: "Rp 4.999.000", label: "New", bonus: "3 Years Warranty • One Price All Size", labelColor: "blue" },
    { name: "Autosol Signature Coating + Complete Detailing", oldPrice: "Rp 11.250.000", price: "Rp 9.562.500", label: "15% OFF", bonus: "5 Years Warranty • FREE Fish Bowl • Tebus Murah Produk 25%" }
  ]
};

let activeCar = null;

const searchInput = document.getElementById("carSearch");
const suggestions = document.getElementById("suggestions");
const result = document.getElementById("result");
const consultation = document.getElementById("consultation");
const selectedCar = document.getElementById("selectedCar");
const selectedCategory = document.getElementById("selectedCategory");
const priceGrid = document.getElementById("priceGrid");
const summaryCar = document.getElementById("summaryCar");
const summaryCategory = document.getElementById("summaryCategory");
const summaryService = document.getElementById("summaryService");
const summaryPrice = document.getElementById("summaryPrice");
const consultWa = document.getElementById("consultWa");

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function renderSuggestions(query) {
  suggestions.innerHTML = "";
  if (query.trim().length < 2) return;

  const q = normalize(query);
  const matched = cars
    .filter(car => normalize(car.name).includes(q) || normalize(car.brand).includes(q) || normalize(car.model).includes(q))
    .slice(0, 12);

  matched.forEach(car => {
    const item = document.createElement("div");
    item.className = "suggestion";
    item.innerHTML = `<strong>${car.name}</strong><span>${car.category}</span>`;
    item.addEventListener("click", () => selectCar(car));
    suggestions.appendChild(item);
  });
}

function selectCar(car) {
  activeCar = car;
  searchInput.value = car.name;
  suggestions.innerHTML = "";
  consultation.classList.add("hidden");
  result.classList.remove("hidden");
  selectedCar.textContent = car.name;
  selectedCategory.textContent = `${car.category} Category`;
  renderPrices(car.category);
  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderPrices(category) {
  priceGrid.innerHTML = "";
  prices[category].forEach(pkg => {
    const card = document.createElement("article");
    card.className = `price-card ${pkg.featured ? "featured" : ""}`;
    const labelClass = pkg.labelColor ? pkg.labelColor : "";
    card.innerHTML = `
      <div class="price-label ${labelClass}">${pkg.label}</div>
      <h3>${pkg.name}</h3>
      <p class="old-price">${pkg.oldPrice}</p>
      <p class="price">${pkg.price}</p>
      <p class="bonus">${pkg.bonus}</p>
      <p class="card-cta">Klik untuk konsultasi →</p>
    `;
    card.addEventListener("click", () => selectService(pkg));
    priceGrid.appendChild(card);
  });
}

function selectService(pkg) {
  if (!activeCar) return;

  summaryCar.textContent = activeCar.name;
  summaryCategory.textContent = `${activeCar.category} Category`;
  summaryService.textContent = pkg.name;
  summaryPrice.textContent = pkg.price;

  const message = `Halo D'Cartail,

Saya ingin konsultasi mengenai:

Mobil: ${activeCar.name}
Kategori: ${activeCar.category} Category
Layanan: ${pkg.name}
Estimasi Harga: ${pkg.price}

Mohon informasi jadwal dan paket yang sesuai.

Terima kasih.`;

  consultWa.href = `https://wa.me/6281935683186?text=${encodeURIComponent(message)}`;

  consultation.classList.remove("hidden");
  consultation.scrollIntoView({ behavior: "smooth", block: "start" });
}

searchInput.addEventListener("input", e => renderSuggestions(e.target.value));
document.addEventListener("click", e => {
  if (!e.target.closest(".search-card")) suggestions.innerHTML = "";
});
