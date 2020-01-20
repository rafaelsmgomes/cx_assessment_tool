/*
 *	Original script by: Shafiul Azam
 *	Version 4.0
 *	Modified by: Erin Kerrigan for use w/ Oracle Eloqua



 *
 *	License: Free to copy, distribute, modify, whatever you want to.
 *	Aurthor's Website: http://bdhacker.wordpress.com
 *
 *
 */



//Country codes
var codes_arr = new Array("None selected","AF", "AL", "DZ", "AS", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AC", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BA", "BW", "BR", "VG", "BN", "BG", "BF", "Burma", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CP", "CC", "CO", "KM", "CD", "CG", "CK", "CR", "CI", "HR","CY", "CZ", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "EU", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "PS", "GE", "DE", "GH", "GI", "GO", "GR", "GL", "GD", "GP", "GU", "GT", "GGy", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HQ", "HU", "IS", "IN", "ID","IQ", "IE", "GB", "IL", "IT", "JM", "JN", "JP", "UM", "JE", "UM", "JO", "Juan de Nova Island", "KZ", "KE", "KI","KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "Man, Isle of", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "Midway Islands", "MD", "MC", "MN", "MS", "MA", "MZ", "NA", "NR", "NP", "NL", "AN", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "SH", "KN", "LC", "PM", "VC", "WS", "SM", "ST", "SA", "ST", "SN", "SC", "SL", "SG", "SK", "SI", "SB", "SO", "South Africa", "GS", "ES", "PG", "LK","SR", "SJ", "SZ", "SE", "CH","TW", "TJ", "TZ", "TH", "TD", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TV", "UG", "UK", "AE", "GB", "UY", "US", "UZ", "VU", "VE", "VN", "VG", "GB", "WF", "WE", "EH", "YE", "YG", "ZM", "ZW");

// Countries
var country_arr = new Array("Select country","Afghanistan", "Albania", "Algeria", "American Samoa", "Angola", "Anguilla", "Antartica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Ashmore and Cartier Island", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Clipperton Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia","Cyprus", "Czeck Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Europa Island", "Falkland Islands (Islas Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern and Antarctic Lands", "Gabon", "Gambia, The", "Gaza Strip", "Georgia", "Germany", "Ghana", "Gibraltar", "Glorioso Islands", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (Vatican City)", "Honduras", "Hong Kong", "Howland Island", "Hungary", "Iceland", "India", "Indonesia","Iraq", "Ireland", "Ireland, Northern", "Israel", "Italy", "Jamaica", "Jan Mayen", "Japan", "Jarvis Island", "Jersey", "Johnston Atoll", "Jordan", "Juan de Nova Island", "Kazakhstan", "Kenya", "Kiribati","Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Man, Isle of", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Midway Islands", "Moldova", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcaim Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romainia", "Russia", "Rwanda", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Scotland", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and South Sandwich Islands", "Spain", "Spratly Islands", "Sri Lanka","Suriname", "Svalbard", "Swaziland", "Sweden", "Switzerland","Taiwan", "Tajikistan", "Tanzania", "Thailand", "Tobago", "Toga", "Tokelau", "Tonga", "Trinidad", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "USA", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Wales", "Wallis and Futuna", "West Bank", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe");

// States
var s_a = new Array();
s_a[0]="";
s_a[1] = "Select State";
s_a[2] = "Badakhshan|Badghis|Baghlan|Balkh|Bamian|Farah|Faryab|Ghazni|Ghowr|Helmand|Herat|Jowzjan|Kabol|Kandahar|Kapisa|Konar|Kondoz|Laghman|Lowgar|Nangarhar|Nimruz|Oruzgan|Paktia|Paktika|Parvan|Samangan|Sar-e Pol|Takhar|Vardak|Zabol";
s_a[3] = "Berat|Bulqize|Delvine|Devoll (Bilisht)|Diber (Peshkopi)|Durres|Elbasan|Fier|Gjirokaster|Gramsh|Has (Krume)|Kavaje|Kolonje (Erseke)|Korce|Kruje|Kucove|Kukes|Kurbin|Lezhe|Librazhd|Lushnje|Malesi e Madhe (Koplik)|Mallakaster (Ballsh)|Mat (Burrel)|Mirdite (Rreshen)|Peqin|Permet|Pogradec|Puke|Sarande|Shkoder|Skrapar (Corovode)|Tepelene|Tirane (Tirana)|Tirane (Tirana)|Tropoje (Bajram Curri)|Vlore";
s_a[4] = "Adrar|Ain Defla|Ain Temouchent|Alger|Annaba|Batna|Bechar|Bejaia|Biskra|Blida|Bordj Bou Arreridj|Bouira|Boumerdes|Chlef|Constantine|Djelfa|El Bayadh|El Oued|El Tarf|Ghardaia|Guelma|Illizi|Jijel|Khenchela|Laghouat|M'Sila|Mascara|Medea|Mila|Mostaganem|Naama|Oran|Ouargla|Oum el Bouaghi|Relizane|Saida|Setif|Sidi Bel Abbes|Skikda|Souk Ahras|Tamanghasset|Tebessa|Tiaret|Tindouf|Tipaza|Tissemsilt|Tizi Ouzou|Tlemcen";
s_a[5] = "Eastern|Manu'a|Rose Island|Swains Island|Western";
s_a[6] = "Andorra la Vella|Bengo|Benguela|Bie|Cabinda|Canillo|Cuando Cubango|Cuanza Norte|Cuanza Sul|Cunene|Encamp|Escaldes-Engordany|Huambo|Huila|La Massana|Luanda|Lunda Norte|Lunda Sul|Malanje|Moxico|Namibe|Ordino|Sant Julia de Loria|Uige|Zaire";
s_a[7] = "Anguilla";
s_a[8] = "Antartica";
s_a[9] = "Barbuda|Redonda|Saint George|Saint John|Saint Mary|Saint Paul|Saint Peter|Saint Philip";
s_a[10] = "Antartica e Islas del Atlantico Sur|Buenos Aires|Buenos Aires Capital Federal|Catamarca|Chaco|Chubut|Cordoba|Corrientes|Entre Rios|Formosa|Jujuy|La Pampa|La Rioja|Mendoza|Misiones|Neuquen|Rio Negro|Salta|San Juan|San Luis|Santa Cruz|Santa Fe|Santiago del Estero|Tierra del Fuego|Tucuman";
s_a[11] = "Aragatsotn|Ararat|Armavir|Geghark'unik'|Kotayk'|Lorri|Shirak|Syunik'|Tavush|Vayots' Dzor|Yerevan";
s_a[12] = "Aruba";
s_a[13] = "Ashmore and Cartier Island";
s_a[14] = "Australian Capital Territory|New South Wales|Northern Territory|Queensland|South Australia|Tasmania|Victoria|Western Australia";
s_a[15] = "Burgenland|Kaernten|Niederoesterreich|Oberoesterreich|Salzburg|Steiermark|Tirol|Vorarlberg|Wien";
s_a[16] = "Abseron Rayonu|Agcabadi Rayonu|Agdam Rayonu|Agdas Rayonu|Agstafa Rayonu|Agsu Rayonu|Ali Bayramli Sahari|Astara Rayonu|Baki Sahari|Balakan Rayonu|Barda Rayonu|Beylaqan Rayonu|Bilasuvar Rayonu|Cabrayil Rayonu|Calilabad Rayonu|Daskasan Rayonu|Davaci Rayonu|Fuzuli Rayonu|Gadabay Rayonu|Ganca Sahari|Goranboy Rayonu|Goycay Rayonu|Haciqabul Rayonu|Imisli Rayonu|Ismayilli Rayonu|Kalbacar Rayonu|Kurdamir Rayonu|Lacin Rayonu|Lankaran Rayonu|Lankaran Sahari|Lerik Rayonu|Masalli Rayonu|Mingacevir Sahari|Naftalan Sahari|Naxcivan Muxtar Respublikasi|Neftcala Rayonu|Oguz Rayonu|Qabala Rayonu|Qax Rayonu|Qazax Rayonu|Qobustan Rayonu|Quba Rayonu|Qubadli Rayonu|Qusar Rayonu|Saatli Rayonu|Sabirabad Rayonu|Saki Rayonu|Saki Sahari|Salyan Rayonu|Samaxi Rayonu|Samkir Rayonu|Samux Rayonu|Siyazan Rayonu|Sumqayit Sahari|Susa Rayonu|Susa Sahari|Tartar Rayonu|Tovuz Rayonu|Ucar Rayonu|Xacmaz Rayonu|Xankandi Sahari|Xanlar Rayonu|Xizi Rayonu|Xocali Rayonu|Xocavand Rayonu|Yardimli Rayonu|Yevlax Rayonu|Yevlax Sahari|Zangilan Rayonu|Zaqatala Rayonu|Zardab Rayonu";
s_a[17] = "Acklins and Crooked Islands|Bimini|Cat Island|Exuma|Freeport|Fresh Creek|Governor's Harbour|Green Turtle Cay|Harbour Island|High Rock|Inagua|Kemps Bay|Long Island|Marsh Harbour|Mayaguana|New Providence|Nicholls Town and Berry Islands|Ragged Island|Rock Sound|San Salvador and Rum Cay|Sandy Point";
s_a[18] = "Al Hadd|Al Manamah|Al Mintaqah al Gharbiyah|Al Mintaqah al Wusta|Al Mintaqah ash Shamaliyah|Al Muharraq|Ar Rifa' wa al Mintaqah al Janubiyah|Jidd Hafs|Juzur Hawar|Madinat 'Isa|Madinat Hamad|Sitrah";
s_a[19] = "Barguna|Barisal|Bhola|Jhalokati|Patuakhali|Pirojpur|Bandarban|Brahmanbaria|Chandpur|Chittagong|Comilla|Cox's Bazar|Feni|Khagrachari|Lakshmipur|Noakhali|Rangamati|Dhaka|Faridpur|Gazipur|Gopalganj|Jamalpur|Kishoreganj|Madaripur|Manikganj|Munshiganj|Mymensingh|Narayanganj|Narsingdi|Netrokona|Rajbari|Shariatpur|Sherpur|Tangail|Bagerhat|Chuadanga|Jessore|Jhenaidah|Khulna|Kushtia|Magura|Meherpur|Narail|Satkhira|Bogra|Dinajpur|Gaibandha|Jaipurhat|Kurigram|Lalmonirhat|Naogaon|Natore|Nawabganj|Nilphamari|Pabna|Panchagarh|Rajshahi|Rangpur|Sirajganj|Thakurgaon|Habiganj|Maulvi bazar|Sunamganj|Sylhet";
s_a[20] = "Bridgetown|Christ Church|Saint Andrew|Saint George|Saint James|Saint John|Saint Joseph|Saint Lucy|Saint Michael|Saint Peter|Saint Philip|Saint Thomas";
s_a[21] = "Brestskaya (Brest)|Homyel'skaya (Homyel')|Horad Minsk|Hrodzyenskaya (Hrodna)|Mahilyowskaya (Mahilyow)|Minskaya|Vitsyebskaya (Vitsyebsk)";
s_a[22] = "Antwerpen|Brabant Wallon|Brussels Capitol Region|Hainaut|Liege|Limburg|Luxembourg|Namur|Oost-Vlaanderen|Vlaams Brabant|West-Vlaanderen";
s_a[23] = "Belize|Cayo|Corozal|Orange Walk|Stann Creek|Toledo";
s_a[24] = "Alibori|Atakora|Atlantique|Borgou|Collines|Couffo|Donga|Littoral|Mono|Oueme|Plateau|Zou";
s_a[25] = "Devonshire|Hamilton|Hamilton|Paget|Pembroke|Saint George|Saint Georges|Sandys|Smiths|Southampton|Warwick";
s_a[26] = "Bumthang|Chhukha|Chirang|Daga|Geylegphug|Ha|Lhuntshi|Mongar|Paro|Pemagatsel|Punakha|Samchi|Samdrup Jongkhar|Shemgang|Tashigang|Thimphu|Tongsa|Wangdi Phodrang";
s_a[27] = "Beni|Chuquisaca|Cochabamba|La Paz|Oruro|Pando|Potosi|Santa Cruz|Tarija";
s_a[28] = "Federation of Bosnia and Herzegovina|Republika Srpska";
s_a[29] = "Central|Chobe|Francistown|Gaborone|Ghanzi|Kgalagadi|Kgatleng|Kweneng|Lobatse|Ngamiland|North-East|Selebi-Pikwe|South-East|Southern";
s_a[30] = "Acre|Alagoas|Amapa|Amazonas|Bahia|Ceara|Distrito Federal|Espirito Santo|Goias|Maranhao|Mato Grosso|Mato Grosso do Sul|Minas Gerais|Para|Paraiba|Parana|Pernambuco|Piaui|Rio de Janeiro|Rio Grande do Norte|Rio Grande do Sul|Rondonia|Roraima|Santa Catarina|Sao Paulo|Sergipe|Tocantins";
s_a[31] = "Anegada|Jost Van Dyke|Tortola|Virgin Gorda";
s_a[32] = "Belait|Brunei and Muara|Temburong|Tutong";
s_a[33] = "Blagoevgrad|Burgas|Dobrich|Gabrovo|Khaskovo|Kurdzhali|Kyustendil|Lovech|Montana|Pazardzhik|Pernik|Pleven|Plovdiv|Razgrad|Ruse|Shumen|Silistra|Sliven|Smolyan|Sofiya|Sofiya-Grad|Stara Zagora|Turgovishte|Varna|Veliko Turnovo|Vidin|Vratsa|Yambol";
s_a[34] = "Bale|Bam|Banwa|Bazega|Bougouriba|Boulgou|Boulkiemde|Comoe|Ganzourgou|Gnagna|Gourma|Houet|Ioba|Kadiogo|Kenedougou|Komandjari|Kompienga|Kossi|Koupelogo|Kouritenga|Kourweogo|Leraba|Loroum|Mouhoun|Nahouri|Namentenga|Naumbiel|Nayala|Oubritenga|Oudalan|Passore|Poni|Samentenga|Sanguie|Seno|Sissili|Soum|Sourou|Tapoa|Tuy|Yagha|Yatenga|Ziro|Zondomo|Zoundweogo";
s_a[35] = "Ayeyarwady|Bago|Chin State|Kachin State|Kayah State|Kayin State|Magway|Mandalay|Mon State|Rakhine State|Sagaing|Shan State|Tanintharyi|Yangon";
s_a[36] = "Bubanza|Bujumbura|Bururi|Cankuzo|Cibitoke|Gitega|Karuzi|Kayanza|Kirundo|Makamba|Muramvya|Muyinga|Mwaro|Ngozi|Rutana|Ruyigi";
s_a[37] = "Banteay Mean Cheay|Batdambang|Kampong Cham|Kampong Chhnang|Kampong Spoe|Kampong Thum|Kampot|Kandal|Kaoh Kong|Keb|Kracheh|Mondol Kiri|Otdar Mean Cheay|Pailin|Phnum Penh|Pouthisat|Preah Seihanu (Sihanoukville)|Preah Vihear|Prey Veng|Rotanah Kiri|Siem Reab|Stoeng Treng|Svay Rieng|Takev";
s_a[38] = "Adamaoua|Centre|Est|Extreme-Nord|Littoral|Nord|Nord-Ouest|Ouest|Sud|Sud-Ouest";
s_a[39] = "Alberta|British Columbia|Manitoba|New Brunswick|Newfoundland|Northwest Territories|Nova Scotia|Nunavut|Ontario|Prince Edward Island|Quebec|Saskatchewan|Yukon Territory";
s_a[40] = "Boa Vista|Brava|Maio|Mosteiros|Paul|Porto Novo|Praia|Ribeira Grande|Sal|Santa Catarina|Santa Cruz|Sao Domingos|Sao Filipe|Sao Nicolau|Sao Vicente|Tarrafal";
s_a[41] = "Creek|Eastern|Midland|South Town|Spot Bay|Stake Bay|West End|Western";
s_a[42] = "Bamingui-Bangoran|Bangui|Basse-Kotto|Gribingui|Haut-Mbomou|Haute-Kotto|Haute-Sangha|Kemo-Gribingui|Lobaye|Mbomou|Nana-Mambere|Ombella-Mpoko|Ouaka|Ouham|Ouham-Pende|Sangha|Vakaga";
s_a[43] = "Batha|Biltine|Borkou-Ennedi-Tibesti|Chari-Baguirmi|Guera|Kanem|Lac|Logone Occidental|Logone Oriental|Mayo-Kebbi|Moyen-Chari|Ouaddai|Salamat|Tandjile";
s_a[44] = "Aisen del General Carlos Ibanez del Campo|Antofagasta|Araucania|Atacama|Bio-Bio|Coquimbo|Libertador General Bernardo O'Higgins|Los Lagos|Magallanes y de la Antartica Chilena|Maule|Region Metropolitana (Santiago)|Tarapaca|Valparaiso";
s_a[45] = "Anhui|Beijing|Chongqing|Fujian|Gansu|Guangdong|Guangxi|Guizhou|Hainan|Hebei|Heilongjiang|Henan|Hubei|Hunan|Jiangsu|Jiangxi|Jilin|Liaoning|Nei Mongol|Ningxia|Qinghai|Shaanxi|Shandong|Shanghai|Shanxi|Sichuan|Tianjin|Xinjiang|Xizang (Tibet)|Yunnan|Zhejiang";
s_a[46] = "Christmas Island";
s_a[47] = "Clipperton Island";
s_a[48] = "Direction Island|Home Island|Horsburgh Island|North Keeling Island|South Island|West Island";
s_a[49] = "Amazonas|Antioquia|Arauca|Atlantico|Bolivar|Boyaca|Caldas|Caqueta|Casanare|Cauca|Cesar|Choco|Cordoba|Cundinamarca|Distrito Capital de Santa Fe de Bogota|Guainia|Guaviare|Huila|La Guajira|Magdalena|Meta|Narino|Norte de Santander|Putumayo|Quindio|Risaralda|San Andres y Providencia|Santander|Sucre|Tolima|Valle del Cauca|Vaupes|Vichada";

s_a[50] = "Anjouan (Nzwani)|Domoni|Fomboni|Grande Comore (Njazidja)|Moheli (Mwali)|Moroni|Moutsamoudou";
s_a[51] = "Bandundu|Bas-Congo|Equateur|Kasai-Occidental|Kasai-Oriental|Katanga|Kinshasa|Maniema|Nord-Kivu|Orientale|Sud-Kivu";
s_a[52] = "Bouenza|Brazzaville|Cuvette|Kouilou|Lekoumou|Likouala|Niari|Plateaux|Pool|Sangha";
s_a[53] = "Aitutaki|Atiu|Avarua|Mangaia|Manihiki|Manuae|Mauke|Mitiaro|Nassau Island|Palmerston|Penrhyn|Pukapuka|Rakahanga|Rarotonga|Suwarrow|Takutea";
s_a[54] = "Alajuela|Cartago|Guanacaste|Heredia|Limon|Puntarenas|San Jose";
s_a[55] = "Abengourou|Abidjan|Aboisso|Adiake'|Adzope|Agboville|Agnibilekrou|Ale'pe'|Bangolo|Beoumi|Biankouma|Bocanda|Bondoukou|Bongouanou|Bouafle|Bouake|Bouna|Boundiali|Dabakala|Dabon|Daloa|Danane|Daoukro|Dimbokro|Divo|Duekoue|Ferkessedougou|Gagnoa|Grand Bassam|Grand-Lahou|Guiglo|Issia|Jacqueville|Katiola|Korhogo|Lakota|Man|Mankono|Mbahiakro|Odienne|Oume|Sakassou|San-Pedro|Sassandra|Seguela|Sinfra|Soubre|Tabou|Tanda|Tiassale|Tiebissou|Tingrela|Touba|Toulepleu|Toumodi|Vavoua|Yamoussoukro|Zuenoula";
s_a[56] = "Bjelovarsko-Bilogorska Zupanija|Brodsko-Posavska Zupanija|Dubrovacko-Neretvanska Zupanija|Istarska Zupanija|Karlovacka Zupanija|Koprivnicko-Krizevacka Zupanija|Krapinsko-Zagorska Zupanija|Licko-Senjska Zupanija|Medimurska Zupanija|Osjecko-Baranjska Zupanija|Pozesko-Slavonska Zupanija|Primorsko-Goranska Zupanija|Sibensko-Kninska Zupanija|Sisacko-Moslavacka Zupanija|Splitsko-Dalmatinska Zupanija|Varazdinska Zupanija|Viroviticko-Podravska Zupanija|Vukovarsko-Srijemska Zupanija|Zadarska Zupanija|Zagreb|Zagrebacka Zupanija";

s_a[57] = "Famagusta|Kyrenia|Larnaca|Limassol|Nicosia|Paphos";
s_a[58] = "Brnensky|Budejovicky|Jihlavsky|Karlovarsky|Kralovehradecky|Liberecky|Olomoucky|Ostravsky|Pardubicky|Plzensky|Praha|Stredocesky|Ustecky|Zlinsky";
s_a[59] = "Arhus|Bornholm|Fredericksberg|Frederiksborg|Fyn|Kobenhavn|Kobenhavns|Nordjylland|Ribe|Ringkobing|Roskilde|Sonderjylland|Storstrom|Vejle|Vestsjalland|Viborg";
s_a[60] = "'Ali Sabih|Dikhil|Djibouti|Obock|Tadjoura";
s_a[61] = "Saint Andrew|Saint David|Saint George|Saint John|Saint Joseph|Saint Luke|Saint Mark|Saint Patrick|Saint Paul|Saint Peter";
s_a[62] = "Azua|Baoruco|Barahona|Dajabon|Distrito Nacional|Duarte|El Seibo|Elias Pina|Espaillat|Hato Mayor|Independencia|La Altagracia|La Romana|La Vega|Maria Trinidad Sanchez|Monsenor Nouel|Monte Cristi|Monte Plata|Pedernales|Peravia|Puerto Plata|Salcedo|Samana|San Cristobal|San Juan|San Pedro de Macoris|Sanchez Ramirez|Santiago|Santiago Rodriguez|Valverde";
s_a[63] = "Azuay|Bolivar|Canar|Carchi|Chimborazo|Cotopaxi|El Oro|Esmeraldas|Galapagos|Guayas|Imbabura|Loja|Los Rios|Manabi|Morona-Santiago|Napo|Orellana|Pastaza|Pichincha|Sucumbios|Tungurahua|Zamora-Chinchipe";
s_a[64] = "Ad Daqahliyah|Al Bahr al Ahmar|Al Buhayrah|Al Fayyum|Al Gharbiyah|Al Iskandariyah|Al Isma'iliyah|Al Jizah|Al Minufiyah|Al Minya|Al Qahirah|Al Qalyubiyah|Al Wadi al Jadid|As Suways|Ash Sharqiyah|Aswan|Asyut|Bani Suwayf|Bur Sa'id|Dumyat|Janub Sina'|Kafr ash Shaykh|Matruh|Qina|Shamal Sina'|Suhaj";
s_a[65] = "Ahuachapan|Cabanas|Chalatenango|Cuscatlan|La Libertad|La Paz|La Union|Morazan|San Miguel|San Salvador|San Vicente|Santa Ana|Sonsonate|Usulutan";
s_a[66] = "Annobon|Bioko Norte|Bioko Sur|Centro Sur|Kie-Ntem|Litoral|Wele-Nzas";
s_a[67] = "Akale Guzay|Barka|Denkel|Hamasen|Sahil|Semhar|Senhit|Seraye";
s_a[68] = "Harjumaa (Tallinn)|Hiiumaa (Kardla)|Ida-Virumaa (Johvi)|Jarvamaa (Paide)|Jogevamaa (Jogeva)|Laane-Virumaa (Rakvere)|Laanemaa (Haapsalu)|Parnumaa (Parnu)|Polvamaa (Polva)|Raplamaa (Rapla)|Saaremaa (Kuessaare)|Tartumaa (Tartu)|Valgamaa (Valga)|Viljandimaa (Viljandi)|Vorumaa (Voru)"
s_a[69] = "Adis Abeba (Addis Ababa)|Afar|Amara|Dire Dawa|Gambela Hizboch|Hareri Hizb|Oromiya|Sumale|Tigray|YeDebub Biheroch Bihereseboch na Hizboch";
s_a[70] = "Europa Island";
s_a[71] = "Falkland Islands (Islas Malvinas)"
s_a[72] = "Bordoy|Eysturoy|Mykines|Sandoy|Skuvoy|Streymoy|Suduroy|Tvoroyri|Vagar";
s_a[73] = "Central|Eastern|Northern|Rotuma|Western";
s_a[74] = "Aland|Etela-Suomen Laani|Ita-Suomen Laani|Lansi-Suomen Laani|Lappi|Oulun Laani";
s_a[75] = "Alsace|Aquitaine|Auvergne|Basse-Normandie|Bourgogne|Bretagne|Centre|Champagne-Ardenne|Corse|Franche-Comte|Haute-Normandie|Ile-de-France|Languedoc-Roussillon|Limousin|Lorraine|Midi-Pyrenees|Nord-Pas-de-Calais|Pays de la Loire|Picardie|Poitou-Charentes|Provence-Alpes-Cote d'Azur|Rhone-Alpes";
s_a[76] = "French Guiana";
s_a[77] = "Archipel des Marquises|Archipel des Tuamotu|Archipel des Tubuai|Iles du Vent|Iles Sous-le-Vent";
s_a[78] = "Adelie Land|Ile Crozet|Iles Kerguelen|Iles Saint-Paul et Amsterdam";
s_a[79] = "Estuaire|Haut-Ogooue|Moyen-Ogooue|Ngounie|Nyanga|Ogooue-Ivindo|Ogooue-Lolo|Ogooue-Maritime|Woleu-Ntem";
s_a[80] = "Banjul|Central River|Lower River|North Bank|Upper River|Western";
s_a[81] = "Gaza Strip";
s_a[82] = "Abashis|Abkhazia or Ap'khazet'is Avtonomiuri Respublika (Sokhumi)|Adigenis|Ajaria or Acharis Avtonomiuri Respublika (Bat'umi)|Akhalgoris|Akhalk'alak'is|Akhalts'ikhis|Akhmetis|Ambrolauris|Aspindzis|Baghdat'is|Bolnisis|Borjomis|Ch'khorotsqus|Ch'okhatauris|Chiat'ura|Dedop'listsqaros|Dmanisis|Dushet'is|Gardabanis|Gori|Goris|Gurjaanis|Javis|K'arelis|K'ut'aisi|Kaspis|Kharagaulis|Khashuris|Khobis|Khonis|Lagodekhis|Lanch'khut'is|Lentekhis|Marneulis|Martvilis|Mestiis|Mts'khet'is|Ninotsmindis|Onis|Ozurget'is|P'ot'i|Qazbegis|Qvarlis|Rust'avi|Sach'kheris|Sagarejos|Samtrediis|Senakis|Sighnaghis|T'bilisi|T'elavis|T'erjolis|T'et'ritsqaros|T'ianet'is|Tqibuli|Ts'ageris|Tsalenjikhis|Tsalkis|Tsqaltubo|Vanis|Zestap'onis|Zugdidi|Zugdidis";
s_a[83] = "Baden-Wuerttemberg|Bayern|Berlin|Brandenburg|Bremen|Hamburg|Hessen|Mecklenburg-Vorpommern|Niedersachsen|Nordrhein-Westfalen|Rheinland-Pfalz|Saarland|Sachsen|Sachsen-Anhalt|Schleswig-Holstein|Thueringen";
s_a[84] = "Ashanti|Brong-Ahafo|Central|Eastern|Greater Accra|Northern|Upper East|Upper West|Volta|Western";
s_a[85] = "Gibraltar";
s_a[86] = "Ile du Lys|Ile Glorieuse";
s_a[87] = "Aitolia kai Akarnania|Akhaia|Argolis|Arkadhia|Arta|Attiki|Ayion Oros (Mt. Athos)|Dhodhekanisos|Drama|Evritania|Evros|Evvoia|Florina|Fokis|Fthiotis|Grevena|Ilia|Imathia|Ioannina|Irakleion|Kardhitsa|Kastoria|Kavala|Kefallinia|Kerkyra|Khalkidhiki|Khania|Khios|Kikladhes|Kilkis|Korinthia|Kozani|Lakonia|Larisa|Lasithi|Lesvos|Levkas|Magnisia|Messinia|Pella|Pieria|Preveza|Rethimni|Rodhopi|Samos|Serrai|Thesprotia|Thessaloniki|Trikala|Voiotia|Xanthi|Zakinthos";
s_a[88] = "Avannaa (Nordgronland)|Kitaa (Vestgronland)|Tunu (Ostgronland)"
s_a[89] = "Carriacou and Petit Martinique|Saint Andrew|Saint David|Saint George|Saint John|Saint Mark|Saint Patrick";
s_a[90] = "Basse-Terre|Grande-Terre|Iles de la Petite Terre|Iles des Saintes|Marie-Galante";
s_a[91] = "Guam";
s_a[92] = "Alta Verapaz|Baja Verapaz|Chimaltenango|Chiquimula|El Progreso|Escuintla|Guatemala|Huehuetenango|Izabal|Jalapa|Jutiapa|Peten|Quetzaltenango|Quiche|Retalhuleu|Sacatepequez|San Marcos|Santa Rosa|Solola|Suchitepequez|Totonicapan|Zacapa";
s_a[93] = "Castel|Forest|St. Andrew|St. Martin|St. Peter Port|St. Pierre du Bois|St. Sampson|St. Saviour|Torteval|Vale";
s_a[94] = "Beyla|Boffa|Boke|Conakry|Coyah|Dabola|Dalaba|Dinguiraye|Dubreka|Faranah|Forecariah|Fria|Gaoual|Gueckedou|Kankan|Kerouane|Kindia|Kissidougou|Koubia|Koundara|Kouroussa|Labe|Lelouma|Lola|Macenta|Mali|Mamou|Mandiana|Nzerekore|Pita|Siguiri|Telimele|Tougue|Yomou";
s_a[95] = "Bafata|Biombo|Bissau|Bolama-Bijagos|Cacheu|Gabu|Oio|Quinara|Tombali";
s_a[96] = "Barima-Waini|Cuyuni-Mazaruni|Demerara-Mahaica|East Berbice-Corentyne|Essequibo Islands-West Demerara|Mahaica-Berbice|Pomeroon-Supenaam|Potaro-Siparuni|Upper Demerara-Berbice|Upper Takutu-Upper Essequibo";
s_a[97] = "Artibonite|Centre|Grand'Anse|Nord|Nord-Est|Nord-Ouest|Ouest|Sud|Sud-Est";
s_a[98] = "Heard Island and McDonald Islands";
s_a[99] = "Holy See (Vatican City)"
s_a[100] = "Atlantida|Choluteca|Colon|Comayagua|Copan|Cortes|El Paraiso|Francisco Morazan|Gracias a Dios|Intibuca|Islas de la Bahia|La Paz|Lempira|Ocotepeque|Olancho|Santa Barbara|Valle|Yoro";
s_a[101] = "Hong Kong";
s_a[102] = "Howland Island";
s_a[103] = "Bacs-Kiskun|Baranya|Bekes|Bekescsaba|Borsod-Abauj-Zemplen|Budapest|Csongrad|Debrecen|Dunaujvaros|Eger|Fejer|Gyor|Gyor-Moson-Sopron|Hajdu-Bihar|Heves|Hodmezovasarhely|Jasz-Nagykun-Szolnok|Kaposvar|Kecskemet|Komarom-Esztergom|Miskolc|Nagykanizsa|Nograd|Nyiregyhaza|Pecs|Pest|Somogy|Sopron|Szabolcs-Szatmar-Bereg|Szeged|Szekesfehervar|Szolnok|Szombathely|Tatabanya|Tolna|Vas|Veszprem|Veszprem|Zala|Zalaegerszeg";
s_a[104] = "Akranes|Akureyri|Arnessysla|Austur-Bardhastrandarsysla|Austur-Hunavatnssysla|Austur-Skaftafellssysla|Borgarfjardharsysla|Dalasysla|Eyjafjardharsysla|Gullbringusysla|Hafnarfjordhur|Husavik|Isafjordhur|Keflavik|Kjosarsysla|Kopavogur|Myrasysla|Neskaupstadhur|Nordhur-Isafjardharsysla|Nordhur-Mulasys-la|Nordhur-Thingeyjarsysla|Olafsfjordhur|Rangarvallasysla|Reykjavik|Saudharkrokur|Seydhisfjordhur|Siglufjordhur|Skagafjardharsysla|Snaefellsnes-og Hnappadalssysla|Strandasysla|Sudhur-Mulasysla|Sudhur-Thingeyjarsysla|Vesttmannaeyjar|Vestur-Bardhastrandarsysla|Vestur-Hunavatnssysla|Vestur-Isafjardharsysla|Vestur-Skaftafellssysla";
s_a[105] = "Andaman and Nicobar Islands|Andhra Pradesh|Arunachal Pradesh|Assam|Bihar|Chandigarh|Chhattisgarh|Dadra and Nagar Haveli|Daman and Diu|Delhi|Goa|Gujarat|Haryana|Himachal Pradesh|Jammu and Kashmir|Jharkhand|Karnataka|Kerala|Lakshadweep|Madhya Pradesh|Maharashtra|Manipur|Meghalaya|Mizoram|Nagaland|Orissa|Pondicherry|Punjab|Rajasthan|Sikkim|Tamil Nadu|Tripura|Uttar Pradesh|Uttaranchal|West Bengal";
s_a[106] = "Aceh|Bali|Banten|Bengkulu|East Timor|Gorontalo|Irian Jaya|Jakarta Raya|Jambi|Jawa Barat|Jawa Tengah|Jawa Timur|Kalimantan Barat|Kalimantan Selatan|Kalimantan Tengah|Kalimantan Timur|Kepulauan Bangka Belitung|Lampung|Maluku|Maluku Utara|Nusa Tenggara Barat|Nusa Tenggara Timur|Riau|Sulawesi Selatan|Sulawesi Tengah|Sulawesi Tenggara|Sulawesi Utara|Sumatera Barat|Sumatera Selatan|Sumatera Utara|Yogyakarta";
s_a[107] = "Al Anbar|Al Basrah|Al Muthanna|Al Qadisiyah|An Najaf|Arbil|As Sulaymaniyah|At Ta'mim|Babil|Baghdad|Dahuk|Dhi Qar|Diyala|Karbala'|Maysan|Ninawa|Salah ad Din|Wasit";
s_a[108] = "Carlow|Cavan|Clare|Cork|Donegal|Dublin|Galway|Kerry|Kildare|Kilkenny|Laois|Leitrim|Limerick|Longford|Louth|Mayo|Meath|Monaghan|Offaly|Roscommon|Sligo|Tipperary|Waterford|Westmeath|Wexford|Wicklow";
s_a[109] = "Antrim|Ards|Armagh|Ballymena|Ballymoney|Banbridge|Belfast|Carrickfergus|Castlereagh|Coleraine|Cookstown|Craigavon|Derry|Down|Dungannon|Fermanagh|Larne|Limavady|Lisburn|Magherafelt|Moyle|Newry and Mourne|Newtownabbey|North Down|Omagh|Strabane";
s_a[110] = "Central|Haifa|Jerusalem|Northern|Southern|Tel Aviv";
s_a[111] = "Abruzzo|Basilicata|Calabria|Campania|Emilia-Romagna|Friuli-Venezia Giulia|Lazio|Liguria|Lombardia|Marche|Molise|Piemonte|Puglia|Sardegna|Sicilia|Toscana|Trentino-Alto Adige|Umbria|Valle d'Aosta|Veneto";
s_a[112] = "Clarendon|Hanover|Kingston|Manchester|Portland|Saint Andrew|Saint Ann|Saint Catherine|Saint Elizabeth|Saint James|Saint Mary|Saint Thomas|Trelawny|Westmoreland";
s_a[113] = "Jan Mayen";
s_a[114] = "Aichi|Akita|Aomori|Chiba|Ehime|Fukui|Fukuoka|Fukushima|Gifu|Gumma|Hiroshima|Hokkaido|Hyogo|Ibaraki|Ishikawa|Iwate|Kagawa|Kagoshima|Kanagawa|Kochi|Kumamoto|Kyoto|Mie|Miyagi|Miyazaki|Nagano|Nagasaki|Nara|Niigata|Oita|Okayama|Okinawa|Osaka|Saga|Saitama|Shiga|Shimane|Shizuoka|Tochigi|Tokushima|Tokyo|Tottori|Toyama|Wakayama|Yamagata|Yamaguchi|Yamanashi";
s_a[115] = "Jarvis Island";
s_a[116] = "Jersey";
s_a[117] = "Johnston Atoll";
s_a[118] = "'Amman|Ajlun|Al 'Aqabah|Al Balqa'|Al Karak|Al Mafraq|At Tafilah|Az Zarqa'|Irbid|Jarash|Ma'an|Madaba";
s_a[119] = "Juan de Nova Island";
s_a[120] = "Almaty|Aqmola|Aqtobe|Astana|Atyrau|Batys Qazaqstan|Bayqongyr|Mangghystau|Ongtustik Qazaqstan|Pavlodar|Qaraghandy|Qostanay|Qyzylorda|Shyghys Qazaqstan|Soltustik Qazaqstan|Zhambyl";
s_a[121] = "Central|Coast|Eastern|Nairobi Area|North Eastern|Nyanza|Rift Valley|Western";
s_a[122] = "Abaiang|Abemama|Aranuka|Arorae|Banaba|Banaba|Beru|Butaritari|Central Gilberts|Gilbert Islands|Kanton|Kiritimati|Kuria|Line Islands|Line Islands|Maiana|Makin|Marakei|Nikunau|Nonouti|Northern Gilberts|Onotoa|Phoenix Islands|Southern Gilberts|Tabiteuea|Tabuaeran|Tamana|Tarawa|Tarawa|Teraina";

s_a[123] = "Ch'ungch'ong-bukto|Ch'ungch'ong-namdo|Cheju-do|Cholla-bukto|Cholla-namdo|Inch'on-gwangyoksi|Kangwon-do|Kwangju-gwangyoksi|Kyonggi-do|Kyongsang-bukto|Kyongsang-namdo|Pusan-gwangyoksi|Soul-t'ukpyolsi|Taegu-gwangyoksi|Taejon-gwangyoksi|Ulsan-gwangyoksi";
s_a[124] = "Al 'Asimah|Al Ahmadi|Al Farwaniyah|Al Jahra'|Hawalli";
s_a[125] = "Batken Oblasty|Bishkek Shaary|Chuy Oblasty (Bishkek)|Jalal-Abad Oblasty|Naryn Oblasty|Osh Oblasty|Talas Oblasty|Ysyk-Kol Oblasty (Karakol)"
s_a[126] = "Attapu|Bokeo|Bolikhamxai|Champasak|Houaphan|Khammouan|Louangnamtha|Louangphabang|Oudomxai|Phongsali|Salavan|Savannakhet|Viangchan|Viangchan|Xaignabouli|Xaisomboun|Xekong|Xiangkhoang";
s_a[127] = "Aizkraukles Rajons|Aluksnes Rajons|Balvu Rajons|Bauskas Rajons|Cesu Rajons|Daugavpils|Daugavpils Rajons|Dobeles Rajons|Gulbenes Rajons|Jekabpils Rajons|Jelgava|Jelgavas Rajons|Jurmala|Kraslavas Rajons|Kuldigas Rajons|Leipaja|Liepajas Rajons|Limbazu Rajons|Ludzas Rajons|Madonas Rajons|Ogres Rajons|Preilu Rajons|Rezekne|Rezeknes Rajons|Riga|Rigas Rajons|Saldus Rajons|Talsu Rajons|Tukuma Rajons|Valkas Rajons|Valmieras Rajons|Ventspils|Ventspils Rajons";
s_a[128] = "Beyrouth|Ech Chimal|Ej Jnoub|El Bekaa|Jabal Loubnane";
s_a[129] = "Berea|Butha-Buthe|Leribe|Mafeteng|Maseru|Mohales Hoek|Mokhotlong|Qacha's Nek|Quthing|Thaba-Tseka";
s_a[130] = "Bomi|Bong|Grand Bassa|Grand Cape Mount|Grand Gedeh|Grand Kru|Lofa|Margibi|Maryland|Montserrado|Nimba|River Cess|Sinoe";
s_a[131] = "Ajdabiya|Al 'Aziziyah|Al Fatih|Al Jabal al Akhdar|Al Jufrah|Al Khums|Al Kufrah|An Nuqat al Khams|Ash Shati'|Awbari|Az Zawiyah|Banghazi|Darnah|Ghadamis|Gharyan|Misratah|Murzuq|Sabha|Sawfajjin|Surt|Tarabulus|Tarhunah|Tubruq|Yafran|Zlitan";
s_a[132] = "Balzers|Eschen|Gamprin|Mauren|Planken|Ruggell|Schaan|Schellenberg|Triesen|Triesenberg|Vaduz";
s_a[133] = "Akmenes Rajonas|Alytaus Rajonas|Alytus|Anyksciu Rajonas|Birstonas|Birzu Rajonas|Druskininkai|Ignalinos Rajonas|Jonavos Rajonas|Joniskio Rajonas|Jurbarko Rajonas|Kaisiadoriu Rajonas|Kaunas|Kauno Rajonas|Kedainiu Rajonas|Kelmes Rajonas|Klaipeda|Klaipedos Rajonas|Kretingos Rajonas|Kupiskio Rajonas|Lazdiju Rajonas|Marijampole|Marijampoles Rajonas|Mazeikiu Rajonas|Moletu Rajonas|Neringa Pakruojo Rajonas|Palanga|Panevezio Rajonas|Panevezys|Pasvalio Rajonas|Plunges Rajonas|Prienu Rajonas|Radviliskio Rajonas|Raseiniu Rajonas|Rokiskio Rajonas|Sakiu Rajonas|Salcininku Rajonas|Siauliai|Siauliu Rajonas|Silales Rajonas|Silutes Rajonas|Sirvintu Rajonas|Skuodo Rajonas|Svencioniu Rajonas|Taurages Rajonas|Telsiu Rajonas|Traku Rajonas|Ukmerges Rajonas|Utenos Rajonas|Varenos Rajonas|Vilkaviskio Rajonas|Vilniaus Rajonas|Vilnius|Zarasu Rajonas";
s_a[134] = "Diekirch|Grevenmacher|Luxembourg";
s_a[135] = "Macau";
s_a[136] = "Aracinovo|Bac|Belcista|Berovo|Bistrica|Bitola|Blatec|Bogdanci|Bogomila|Bogovinje|Bosilovo|Brvenica|Cair (Skopje)|Capari|Caska|Cegrane|Centar (Skopje)|Centar Zupa|Cesinovo|Cucer-Sandevo|Debar|Delcevo|Delogozdi|Demir Hisar|Demir Kapija|Dobrusevo|Dolna Banjica|Dolneni|Dorce Petrov (Skopje)|Drugovo|Dzepciste|Gazi Baba (Skopje)|Gevgelija|Gostivar|Gradsko|Ilinden|Izvor|Jegunovce|Kamenjane|Karbinci|Karpos (Skopje)|Kavadarci|Kicevo|Kisela Voda (Skopje)|Klecevce|Kocani|Konce|Kondovo|Konopiste|Kosel|Kratovo|Kriva Palanka|Krivogastani|Krusevo|Kuklis|Kukurecani|Kumanovo|Labunista|Lipkovo|Lozovo|Lukovo|Makedonska Kamenica|Makedonski Brod|Mavrovi Anovi|Meseista|Miravci|Mogila|Murtino|Negotino|Negotino-Poloska|Novaci|Novo Selo|Oblesevo|Ohrid|Orasac|Orizari|Oslomej|Pehcevo|Petrovec|Plasnia|Podares|Prilep|Probistip|Radovis|Rankovce|Resen|Rosoman|Rostusa|Samokov|Saraj|Sipkovica|Sopiste|Sopotnika|Srbinovo|Star Dojran|Staravina|Staro Nagoricane|Stip|Struga|Strumica|Studenicani|Suto Orizari (Skopje)|Sveti Nikole|Tearce|Tetovo|Topolcani|Valandovo|Vasilevo|Veles|Velesta|Vevcani|Vinica|Vitoliste|Vranestica|Vrapciste|Vratnica|Vrutok|Zajas|Zelenikovo|Zileno|Zitose|Zletovo|Zrnovci";
s_a[137] = "Antananarivo|Antsiranana|Fianarantsoa|Mahajanga|Toamasina|Toliara";
s_a[138] = "Balaka|Blantyre|Chikwawa|Chiradzulu|Chitipa|Dedza|Dowa|Karonga|Kasungu|Likoma|Lilongwe|Machinga (Kasupe)|Mangochi|Mchinji|Mulanje|Mwanza|Mzimba|Nkhata Bay|Nkhotakota|Nsanje|Ntcheu|Ntchisi|Phalombe|Rumphi|Salima|Thyolo|Zomba";
s_a[139] = "Johor|Kedah|Kelantan|Labuan|Melaka|Negeri Sembilan|Pahang|Perak|Perlis|Pulau Pinang|Sabah|Sarawak|Selangor|Terengganu|Wilayah Persekutuan";
s_a[140] = "Alifu|Baa|Dhaalu|Faafu|Gaafu Alifu|Gaafu Dhaalu|Gnaviyani|Haa Alifu|Haa Dhaalu|Kaafu|Laamu|Lhaviyani|Maale|Meemu|Noonu|Raa|Seenu|Shaviyani|Thaa|Vaavu";
s_a[141] = "Gao|Kayes|Kidal|Koulikoro|Mopti|Segou|Sikasso|Tombouctou";
s_a[142] = "Valletta";
s_a[143] = "Man, Isle of";
s_a[144] = "Ailinginae|Ailinglaplap|Ailuk|Arno|Aur|Bikar|Bikini|Bokak|Ebon|Enewetak|Erikub|Jabat|Jaluit|Jemo|Kili|Kwajalein|Lae|Lib|Likiep|Majuro|Maloelap|Mejit|Mili|Namorik|Namu|Rongelap|Rongrik|Toke|Ujae|Ujelang|Utirik|Wotho|Wotje";
s_a[145] = "Martinique";
s_a[146] = "Adrar|Assaba|Brakna|Dakhlet Nouadhibou|Gorgol|Guidimaka|Hodh Ech Chargui|Hodh El Gharbi|Inchiri|Nouakchott|Tagant|Tiris Zemmour|Trarza";
s_a[147] = "Agalega Islands|Black River|Cargados Carajos Shoals|Flacq|Grand Port|Moka|Pamplemousses|Plaines Wilhems|Port Louis|Riviere du Rempart|Rodrigues|Savanne";
s_a[148] = "Mayotte";
s_a[149] = "Aguascalientes|Baja California|Baja California Sur|Campeche|Chiapas|Chihuahua|Coahuila de Zaragoza|Colima|Distrito Federal|Durango|Guanajuato|Guerrero|Hidalgo|Jalisco|Mexico|Michoacan de Ocampo|Morelos|Nayarit|Nuevo Leon|Oaxaca|Puebla|Queretaro de Arteaga|Quintana Roo|San Luis Potosi|Sinaloa|Sonora|Tabasco|Tamaulipas|Tlaxcala|Veracruz-Llave|Yucatan|Zacatecas";
s_a[150] = "Chuuk (Truk)|Kosrae|Pohnpei|Yap";
s_a[151] = "Midway Islands";
s_a[152] = "Balti|Cahul|Chisinau|Chisinau|Dubasari|Edinet|Gagauzia|Lapusna|Orhei|Soroca|Tighina|Ungheni";
s_a[153] = "Fontvieille|La Condamine|Monaco-Ville|Monte-Carlo";
s_a[154] = "Arhangay|Bayan-Olgiy|Bayanhongor|Bulgan|Darhan|Dornod|Dornogovi|Dundgovi|Dzavhan|Erdenet|Govi-Altay|Hentiy|Hovd|Hovsgol|Omnogovi|Ovorhangay|Selenge|Suhbaatar|Tov|Ulaanbaatar|Uvs";
s_a[155] = "Saint Anthony|Saint Georges|Saint Peter's";
s_a[156] = "Agadir|Al Hoceima|Azilal|Ben Slimane|Beni Mellal|Boulemane|Casablanca|Chaouen|El Jadida|El Kelaa des Srarhna|Er Rachidia|Essaouira|Fes|Figuig|Guelmim|Ifrane|Kenitra|Khemisset|Khenifra|Khouribga|Laayoune|Larache|Marrakech|Meknes|Nador|Ouarzazate|Oujda|Rabat-Sale|Safi|Settat|Sidi Kacem|Tan-Tan|Tanger|Taounate|Taroudannt|Tata|Taza|Tetouan|Tiznit";
s_a[157] = "Cabo Delgado|Gaza|Inhambane|Manica|Maputo|Nampula|Niassa|Sofala|Tete|Zambezia";
s_a[158] = "Caprivi|Erongo|Hardap|Karas|Khomas|Kunene|Ohangwena|Okavango|Omaheke|Omusati|Oshana|Oshikoto|Otjozondjupa";
s_a[159] = "Aiwo|Anabar|Anetan|Anibare|Baiti|Boe|Buada|Denigomodu|Ewa|Ijuw|Meneng|Nibok|Uaboe|Yaren";
s_a[160] = "Bagmati|Bheri|Dhawalagiri|Gandaki|Janakpur|Karnali|Kosi|Lumbini|Mahakali|Mechi|Narayani|Rapti|Sagarmatha|Seti";
s_a[161] = "Drenthe|Flevoland|Friesland|Gelderland|Groningen|Limburg|Noord-Brabant|Noord-Holland|Overijssel|Utrecht|Zeeland|Zuid-Holland";
s_a[162] = "Netherlands Antilles";
s_a[163] = "Iles Loyaute|Nord|Sud";
s_a[164] = "Akaroa|Amuri|Ashburton|Bay of Islands|Bruce|Buller|Chatham Islands|Cheviot|Clifton|Clutha|Cook|Dannevirke|Egmont|Eketahuna|Ellesmere|Eltham|Eyre|Featherston|Franklin|Golden Bay|Great Barrier Island|Grey|Hauraki Plains|Hawera|Hawke's Bay|Heathcote|Hikurangi|Hobson|Hokianga|Horowhenua|Hurunui|Hutt|Inangahua|Inglewood|Kaikoura|Kairanga|Kiwitea|Lake|Mackenzie|Malvern|Manaia|Manawatu|Mangonui|Maniototo|Marlborough|Masterton|Matamata|Mount Herbert|Ohinemuri|Opotiki|Oroua|Otamatea|Otorohanga|Oxford|Pahiatua|Paparua|Patea|Piako|Pohangina|Raglan|Rangiora|Rangitikei|Rodney|Rotorua|Runanga|Saint Kilda|Silverpeaks|Southland|Stewart Island|Stratford|Strathallan|Taranaki|Taumarunui|Taupo|Tauranga|Thames-Coromandel|Tuapeka|Vincent|Waiapu|Waiheke|Waihemo|Waikato|Waikohu|Waimairi|Waimarino|Waimate|Waimate West|Waimea|Waipa|Waipawa|Waipukurau|Wairarapa South|Wairewa|Wairoa|Waitaki|Waitomo|Waitotara|Wallace|Wanganui|Waverley|Westland|Whakatane|Whangarei|Whangaroa|Woodville";
s_a[165] = "Atlantico Norte|Atlantico Sur|Boaco|Carazo|Chinandega|Chontales|Esteli|Granada|Jinotega|Leon|Madriz|Managua|Masaya|Matagalpa|Nueva Segovia|Rio San Juan|Rivas";
s_a[166] = "Agadez|Diffa|Dosso|Maradi|Niamey|Tahoua|Tillaberi|Zinder";
s_a[167] = "Abia|Abuja Federal Capital Territory|Adamawa|Akwa Ibom|Anambra|Bauchi|Bayelsa|Benue|Borno|Cross River|Delta|Ebonyi|Edo|Ekiti|Enugu|Gombe|Imo|Jigawa|Kaduna|Kano|Katsina|Kebbi|Kogi|Kwara|Lagos|Nassarawa|Niger|Ogun|Ondo|Osun|Oyo|Plateau|Rivers|Sokoto|Taraba|Yobe|Zamfara";
s_a[168] = "Niue";
s_a[169] = "Norfolk Island";
s_a[170] = "Northern Islands|Rota|Saipan|Tinian";
s_a[171] = "Akershus|Aust-Agder|Buskerud|Finnmark|Hedmark|Hordaland|More og Romsdal|Nord-Trondelag|Nordland|Oppland|Oslo|Ostfold|Rogaland|Sogn og Fjordane|Sor-Trondelag|Telemark|Troms|Vest-Agder|Vestfold";
s_a[172] = "Ad Dakhiliyah|Al Batinah|Al Wusta|Ash Sharqiyah|Az Zahirah|Masqat|Musandam|Zufar";
s_a[173] = "Balochistan|Federally Administered Tribal Areas|Islamabad Capital Territory|North-West Frontier Province|Punjab|Sindh";
s_a[174] = "Aimeliik|Airai|Angaur|Hatobohei|Kayangel|Koror|Melekeok|Ngaraard|Ngarchelong|Ngardmau|Ngatpang|Ngchesar|Ngeremlengui|Ngiwal|Palau Island|Peleliu|Sonsoral|Tobi";
s_a[175] = "Bocas del Toro|Chiriqui|Cocle|Colon|Darien|Herrera|Los Santos|Panama|San Blas|Veraguas";
s_a[176] = "Bougainville|Central|Chimbu|East New Britain|East Sepik|Eastern Highlands|Enga|Gulf|Madang|Manus|Milne Bay|Morobe|National Capital|New Ireland|Northern|Sandaun|Southern Highlands|West New Britain|Western|Western Highlands";
s_a[177] = "Alto Paraguay|Alto Parana|Amambay|Asuncion (city)|Boqueron|Caaguazu|Caazapa|Canindeyu|Central|Concepcion|Cordillera|Guaira|Itapua|Misiones|Neembucu|Paraguari|Presidente Hayes|San Pedro";
s_a[178] = "Amazonas|Ancash|Apurimac|Arequipa|Ayacucho|Cajamarca|Callao|Cusco|Huancavelica|Huanuco|Ica|Junin|La Libertad|Lambayeque|Lima|Loreto|Madre de Dios|Moquegua|Pasco|Piura|Puno|San Martin|Tacna|Tumbes|Ucayali";
s_a[179] = "Abra|Agusan del Norte|Agusan del Sur|Aklan|Albay|Angeles|Antique|Aurora|Bacolod|Bago|Baguio|Bais|Basilan|Basilan City|Bataan|Batanes|Batangas|Batangas City|Benguet|Bohol|Bukidnon|Bulacan|Butuan|Cabanatuan|Cadiz|Cagayan|Cagayan de Oro|Calbayog|Caloocan|Camarines Norte|Camarines Sur|Camiguin|Canlaon|Capiz|Catanduanes|Cavite|Cavite City|Cebu|Cebu City|Cotabato|Dagupan|Danao|Dapitan|Davao City Davao|Davao del Sur|Davao Oriental|Dipolog|Dumaguete|Eastern Samar|General Santos|Gingoog|Ifugao|Iligan|Ilocos Norte|Ilocos Sur|Iloilo|Iloilo City|Iriga|Isabela|Kalinga-Apayao|La Carlota|La Union|Laguna|Lanao del Norte|Lanao del Sur|Laoag|Lapu-Lapu|Legaspi|Leyte|Lipa|Lucena|Maguindanao|Mandaue|Manila|Marawi|Marinduque|Masbate|Mindoro Occidental|Mindoro Oriental|Misamis Occidental|Misamis Oriental|Mountain|Naga|Negros Occidental|Negros Oriental|North Cotabato|Northern Samar|Nueva Ecija|Nueva Vizcaya|Olongapo|Ormoc|Oroquieta|Ozamis|Pagadian|Palawan|Palayan|Pampanga|Pangasinan|Pasay|Puerto Princesa|Quezon|Quezon City|Quirino|Rizal|Romblon|Roxas|Samar|San Carlos (in Negros Occidental)|San Carlos (in Pangasinan)|San Jose|San Pablo|Silay|Siquijor|Sorsogon|South Cotabato|Southern Leyte|Sultan Kudarat|Sulu|Surigao|Surigao del Norte|Surigao del Sur|Tacloban|Tagaytay|Tagbilaran|Tangub|Tarlac|Tawitawi|Toledo|Trece Martires|Zambales|Zamboanga|Zamboanga del Norte|Zamboanga del Sur";
s_a[180] = "Pitcaim Islands";
s_a[181] = "Dolnoslaskie|Kujawsko-Pomorskie|Lodzkie|Lubelskie|Lubuskie|Malopolskie|Mazowieckie|Opolskie|Podkarpackie|Podlaskie|Pomorskie|Slaskie|Swietokrzyskie|Warminsko-Mazurskie|Wielkopolskie|Zachodniopomorskie";
s_a[182] = "Acores (Azores)|Aveiro|Beja|Braga|Braganca|Castelo Branco|Coimbra|Evora|Faro|Guarda|Leiria|Lisboa|Madeira|Portalegre|Porto|Santarem|Setubal|Viana do Castelo|Vila Real|Viseu";
s_a[183] = "Adjuntas|Aguada|Aguadilla|Aguas Buenas|Aibonito|Anasco|Arecibo|Arroyo|Barceloneta|Barranquitas|Bayamon|Cabo Rojo|Caguas|Camuy|Canovanas|Carolina|Catano|Cayey|Ceiba|Ciales|Cidra|Coamo|Comerio|Corozal|Culebra|Dorado|Fajardo|Florida|Guanica|Guayama|Guayanilla|Guaynabo|Gurabo|Hatillo|Hormigueros|Humacao|Isabela|Jayuya|Juana Diaz|Juncos|Lajas|Lares|Las Marias|Las Piedras|Loiza|Luquillo|Manati|Maricao|Maunabo|Mayaguez|Moca|Morovis|Naguabo|Naranjito|Orocovis|Patillas|Penuelas|Ponce|Quebradillas|Rincon|Rio Grande|Sabana Grande|Salinas|San German|San Juan|San Lorenzo|San Sebastian|Santa Isabel|Toa Alta|Toa Baja|Trujillo Alto|Utuado|Vega Alta|Vega Baja|Vieques|Villalba|Yabucoa|Yauco";
s_a[184] = "Ad Dawhah|Al Ghuwayriyah|Al Jumayliyah|Al Khawr|Al Wakrah|Ar Rayyan|Jarayan al Batinah|Madinat ash Shamal|Umm Salal";
s_a[185] = "Reunion";
s_a[186] = "Alba|Arad|Arges|Bacau|Bihor|Bistrita-Nasaud|Botosani|Braila|Brasov|Bucuresti|Buzau|Calarasi|Caras-Severin|Cluj|Constanta|Covasna|Dimbovita|Dolj|Galati|Giurgiu|Gorj|Harghita|Hunedoara|Ialomita|Iasi|Maramures|Mehedinti|Mures|Neamt|Olt|Prahova|Salaj|Satu Mare|Sibiu|Suceava|Teleorman|Timis|Tulcea|Vaslui|Vilcea|Vrancea";
s_a[187] = "Adygeya (Maykop)|Aginskiy Buryatskiy (Aginskoye)|Altay (Gorno-Altaysk)|Altayskiy (Barnaul)|Amurskaya (Blagoveshchensk)|Arkhangel'skaya|Astrakhanskaya|Bashkortostan (Ufa)|Belgorodskaya|Bryanskaya|Buryatiya (Ulan-Ude)|Chechnya (Groznyy)|Chelyabinskaya|Chitinskaya|Chukotskiy (Anadyr')|Chuvashiya (Cheboksary)|Dagestan (Makhachkala)|Evenkiyskiy (Tura)|Ingushetiya (Nazran')|Irkutskaya|Ivanovskaya|Kabardino-Balkariya (Nal'chik)|Kaliningradskaya|Kalmykiya (Elista)|Kaluzhskaya|Kamchatskaya (Petropavlovsk-Kamchatskiy)|Karachayevo-Cherkesiya (Cherkessk)|Kareliya (Petrozavodsk)|Kemerovskaya|Khabarovskiy|Khakasiya (Abakan)|Khanty-Mansiyskiy (Khanty-Mansiysk)|Kirovskaya|Komi (Syktyvkar)|Komi-Permyatskiy (Kudymkar)|Koryakskiy (Palana)|Kostromskaya|Krasnodarskiy|Krasnoyarskiy|Kurganskaya|Kurskaya|Leningradskaya|Lipetskaya|Magadanskaya|Mariy-El (Yoshkar-Ola)|Mordoviya (Saransk)|Moskovskaya|Moskva (Moscow)|Murmanskaya|Nenetskiy (Nar'yan-Mar)|Nizhegorodskaya|Novgorodskaya|Novosibirskaya|Omskaya|Orenburgskaya|Orlovskaya (Orel)|Penzenskaya|Permskaya|Primorskiy (Vladivostok)|Pskovskaya|Rostovskaya|Ryazanskaya|Sakha (Yakutsk)|Sakhalinskaya (Yuzhno-Sakhalinsk)|Samarskaya|Sankt-Peterburg (Saint Petersburg)|Saratovskaya|Severnaya Osetiya-Alaniya [North Ossetia] (Vladikavkaz)|Smolenskaya|Stavropol'skiy|Sverdlovskaya (Yekaterinburg)|Tambovskaya|Tatarstan (Kazan')|Taymyrskiy (Dudinka)|Tomskaya|Tul'skaya|Tverskaya|Tyumenskaya|Tyva (Kyzyl)|Udmurtiya (Izhevsk)|Ul'yanovskaya|Ust'-Ordynskiy Buryatskiy (Ust'-Ordynskiy)|Vladimirskaya|Volgogradskaya|Vologodskaya|Voronezhskaya|Yamalo-Nenetskiy (Salekhard)|Yaroslavskaya|Yevreyskaya";
s_a[188] = "Butare|Byumba|Cyangugu|Gikongoro|Gisenyi|Gitarama|Kibungo|Kibuye|Kigali Rurale|Kigali-ville|Ruhengeri|Umutara";
s_a[189] = "Ascension|Saint Helena|Tristan da Cunha";
s_a[190] = "Christ Church Nichola Town|Saint Anne Sandy Point|Saint George Basseterre|Saint George Gingerland|Saint James Windward|Saint John Capisterre|Saint John Figtree|Saint Mary Cayon|Saint Paul Capisterre|Saint Paul Charlestown|Saint Peter Basseterre|Saint Thomas Lowland|Saint Thomas Middle Island|Trinity Palmetto Point";
s_a[191] = "Anse-la-Raye|Castries|Choiseul|Dauphin|Dennery|Gros Islet|Laborie|Micoud|Praslin|Soufriere|Vieux Fort";
s_a[192] = "Miquelon|Saint Pierre";
s_a[193] = "Charlotte|Grenadines|Saint Andrew|Saint David|Saint George|Saint Patrick";
s_a[194] = "A'ana|Aiga-i-le-Tai|Atua|Fa'asaleleaga|Gaga'emauga|Gagaifomauga|Palauli|Satupa'itea|Tuamasaga|Va'a-o-Fonoti|Vaisigano";
s_a[195] = "Acquaviva|Borgo Maggiore|Chiesanuova|Domagnano|Faetano|Fiorentino|Monte Giardino|San Marino|Serravalle";
s_a[196] = "Principe|Sao Tome";
s_a[197] = "'Asir|Al Bahah|Al Hudud ash Shamaliyah|Al Jawf|Al Madinah|Al Qasim|Ar Riyad|Ash Sharqiyah (Eastern Province)|Ha'il|Jizan|Makkah|Najran|Tabuk";
s_a[198] = "Aberdeen City|Aberdeenshire|Angus|Argyll and Bute|City of Edinburgh|Clackmannanshire|Dumfries and Galloway|Dundee City|East Ayrshire|East Dunbartonshire|East Lothian|East Renfrewshire|Eilean Siar (Western Isles)|Falkirk|Fife|Glasgow City|Highland|Inverclyde|Midlothian|Moray|North Ayrshire|North Lanarkshire|Orkney Islands|Perth and Kinross|Renfrewshire|Shetland Islands|South Ayrshire|South Lanarkshire|Stirling|The Scottish Borders|West Dunbartonshire|West Lothian";
s_a[199] = "Dakar|Diourbel|Fatick|Kaolack|Kolda|Louga|Saint-Louis|Tambacounda|Thies|Ziguinchor";
s_a[200] = "Anse aux Pins|Anse Boileau|Anse Etoile|Anse Louis|Anse Royale|Baie Lazare|Baie Sainte Anne|Beau Vallon|Bel Air|Bel Ombre|Cascade|Glacis|Grand' Anse (on Mahe)|Grand' Anse (on Praslin)|La Digue|La Riviere Anglaise|Mont Buxton|Mont Fleuri|Plaisance|Pointe La Rue|Port Glaud|Saint Louis|Takamaka";
s_a[201] = "Eastern|Northern|Southern|Western";
s_a[202] = "Singapore";
s_a[203] = "Banskobystricky|Bratislavsky|Kosicky|Nitriansky|Presovsky|Trenciansky|Trnavsky|Zilinsky";
s_a[204] = "Ajdovscina|Beltinci|Bled|Bohinj|Borovnica|Bovec|Brda|Brezice|Brezovica|Cankova-Tisina|Celje|Cerklje na Gorenjskem|Cerknica|Cerkno|Crensovci|Crna na Koroskem|Crnomelj|Destrnik-Trnovska Vas|Divaca|Dobrepolje|Dobrova-Horjul-Polhov Gradec|Dol pri Ljubljani|Domzale|Dornava|Dravograd|Duplek|Gorenja Vas-Poljane|Gorisnica|Gornja Radgona|Gornji Grad|Gornji Petrovci|Grosuplje|Hodos Salovci|Hrastnik|Hrpelje-Kozina|Idrija|Ig|Ilirska Bistrica|Ivancna Gorica|Izola|Jesenice|Jursinci|Kamnik|Kanal|Kidricevo|Kobarid|Kobilje|Kocevje|Komen|Koper|Kozje|Kranj|Kranjska Gora|Krsko|Kungota|Kuzma|Lasko|Lenart|Lendava|Litija|Ljubljana|Ljubno|Ljutomer|Logatec|Loska Dolina|Loski Potok|Luce|Lukovica|Majsperk|Maribor|Medvode|Menges|Metlika|Mezica|Miren-Kostanjevica|Mislinja|Moravce|Moravske Toplice|Mozirje|Murska Sobota|Muta|Naklo|Nazarje|Nova Gorica|Novo Mesto|Odranci|Ormoz|Osilnica|Pesnica|Piran|Pivka|Podcetrtek|Podvelka-Ribnica|Postojna|Preddvor|Ptuj|Puconci|Race-Fram|Radece|Radenci|Radlje ob Dravi|Radovljica|Ravne-Prevalje|Ribnica|Rogasevci|Rogaska Slatina|Rogatec|Ruse|Semic|Sencur|Sentilj|Sentjernej|Sentjur pri Celju|Sevnica|Sezana|Skocjan|Skofja Loka|Skofljica|Slovenj Gradec|Slovenska Bistrica|Slovenske Konjice|Smarje pri Jelsah|Smartno ob Paki|Sostanj|Starse|Store|Sveti Jurij|Tolmin|Trbovlje|Trebnje|Trzic|Turnisce|Velenje|Velike Lasce|Videm|Vipava|Vitanje|Vodice|Vojnik|Vrhnika|Vuzenica|Zagorje ob Savi|Zalec|Zavrc|Zelezniki|Ziri|Zrece";
s_a[205] = "Bellona|Central|Choiseul (Lauru)|Guadalcanal|Honiara|Isabel|Makira|Malaita|Rennell|Temotu|Western";
s_a[206] = "Awdal|Bakool|Banaadir|Bari|Bay|Galguduud|Gedo|Hiiraan|Jubbada Dhexe|Jubbada Hoose|Mudug|Nugaal|Sanaag|Shabeellaha Dhexe|Shabeellaha Hoose|Sool|Togdheer|Woqooyi Galbeed";
s_a[207] = "Eastern Cape|Free State|Gauteng|KwaZulu-Natal|Mpumalanga|North-West|Northern Cape|Northern Province|Western Cape";
s_a[208] = "Bird Island|Bristol Island|Clerke Rocks|Montagu Island|Saunders Island|South Georgia|Southern Thule|Traversay Islands";
s_a[209] = "Andalucia|Aragon|Asturias|Baleares (Balearic Islands)|Canarias (Canary Islands)|Cantabria|Castilla y Leon|Castilla-La Mancha|Cataluna|Ceuta|Communidad Valencian|Extremadura|Galicia|Islas Chafarinas|La Rioja|Madrid|Melilla|Murcia|Navarra|Pais Vasco (Basque Country)|Penon de Alhucemas|Penon de Velez de la Gomera";
s_a[210] = "Spratly Islands";
s_a[211] = "Central|Eastern|North Central|North Eastern|North Western|Northern|Sabaragamuwa|Southern|Uva|Western";

s_a[212] = "Brokopondo|Commewijne|Coronie|Marowijne|Nickerie|Para|Paramaribo|Saramacca|Sipaliwini|Wanica";
s_a[213] = "Barentsoya|Bjornoya|Edgeoya|Hopen|Kvitoya|Nordaustandet|Prins Karls Forland|Spitsbergen";
s_a[214] = "Hhohho|Lubombo|Manzini|Shiselweni";
s_a[215] = "Blekinge|Dalarnas|Gavleborgs|Gotlands|Hallands|Jamtlands|Jonkopings|Kalmar|Kronobergs|Norrbottens|Orebro|Ostergotlands|Skane|Sodermanlands|Stockholms|Uppsala|Varmlands|Vasterbottens|Vasternorrlands|Vastmanlands|Vastra Gotalands";
s_a[216] = "Aargau|Ausser-Rhoden|Basel-Landschaft|Basel-Stadt|Bern|Fribourg|Geneve|Glarus|Graubunden|Inner-Rhoden|Jura|Luzern|Neuchatel|Nidwalden|Obwalden|Sankt Gallen|Schaffhausen|Schwyz|Solothurn|Thurgau|Ticino|Uri|Valais|Vaud|Zug|Zurich";

s_a[217] = "Chang-hua|Chi-lung|Chia-i|Chia-i|Chung-hsing-hsin-ts'un|Hsin-chu|Hsin-chu|Hua-lien|I-lan|Kao-hsiung|Kao-hsiung|Miao-li|Nan-t'ou|P'eng-hu|P'ing-tung|T'ai-chung|T'ai-chung|T'ai-nan|T'ai-nan|T'ai-pei|T'ai-pei|T'ai-tung|T'ao-yuan|Yun-lin";
s_a[218] = "Viloyati Khatlon|Viloyati Leninobod|Viloyati Mukhtori Kuhistoni Badakhshon";
s_a[219] = "Arusha|Dar es Salaam|Dodoma|Iringa|Kagera|Kigoma|Kilimanjaro|Lindi|Mara|Mbeya|Morogoro|Mtwara|Mwanza|Pemba North|Pemba South|Pwani|Rukwa|Ruvuma|Shinyanga|Singida|Tabora|Tanga|Zanzibar Central/South|Zanzibar North|Zanzibar Urban/West";
s_a[220] = "Amnat Charoen|Ang Thong|Buriram|Chachoengsao|Chai Nat|Chaiyaphum|Chanthaburi|Chiang Mai|Chiang Rai|Chon Buri|Chumphon|Kalasin|Kamphaeng Phet|Kanchanaburi|Khon Kaen|Krabi|Krung Thep Mahanakhon (Bangkok)|Lampang|Lamphun|Loei|Lop Buri|Mae Hong Son|Maha Sarakham|Mukdahan|Nakhon Nayok|Nakhon Pathom|Nakhon Phanom|Nakhon Ratchasima|Nakhon Sawan|Nakhon Si Thammarat|Nan|Narathiwat|Nong Bua Lamphu|Nong Khai|Nonthaburi|Pathum Thani|Pattani|Phangnga|Phatthalung|Phayao|Phetchabun|Phetchaburi|Phichit|Phitsanulok|Phra Nakhon Si Ayutthaya|Phrae|Phuket|Prachin Buri|Prachuap Khiri Khan|Ranong|Ratchaburi|Rayong|Roi Et|Sa Kaeo|Sakon Nakhon|Samut Prakan|Samut Sakhon|Samut Songkhram|Sara Buri|Satun|Sing Buri|Sisaket|Songkhla|Sukhothai|Suphan Buri|Surat Thani|Surin|Tak|Trang|Trat|Ubon Ratchathani|Udon Thani|Uthai Thani|Uttaradit|Yala|Yasothon";
s_a[221] = "Tobago";
s_a[222] = "De La Kara|Des Plateaux|Des Savanes|Du Centre|Maritime";
s_a[223] = "Atafu|Fakaofo|Nukunonu";
s_a[224] = "Ha'apai|Tongatapu|Vava'u";
s_a[225] = "Arima|Caroni|Mayaro|Nariva|Port-of-Spain|Saint Andrew|Saint David|Saint George|Saint Patrick|San Fernando|Victoria";
s_a[226] = "Ariana|Beja|Ben Arous|Bizerte|El Kef|Gabes|Gafsa|Jendouba|Kairouan|Kasserine|Kebili|Mahdia|Medenine|Monastir|Nabeul|Sfax|Sidi Bou Zid|Siliana|Sousse|Tataouine|Tozeur|Tunis|Zaghouan";
s_a[227] = "Adana|Adiyaman|Afyon|Agri|Aksaray|Amasya|Ankara|Antalya|Ardahan|Artvin|Aydin|Balikesir|Bartin|Batman|Bayburt|Bilecik|Bingol|Bitlis|Bolu|Burdur|Bursa|Canakkale|Cankiri|Corum|Denizli|Diyarbakir|Duzce|Edirne|Elazig|Erzincan|Erzurum|Eskisehir|Gaziantep|Giresun|Gumushane|Hakkari|Hatay|Icel|Igdir|Isparta|Istanbul|Izmir|Kahramanmaras|Karabuk|Karaman|Kars|Kastamonu|Kayseri|Kilis|Kirikkale|Kirklareli|Kirsehir|Kocaeli|Konya|Kutahya|Malatya|Manisa|Mardin|Mugla|Mus|Nevsehir|Nigde|Ordu|Osmaniye|Rize|Sakarya|Samsun|Sanliurfa|Siirt|Sinop|Sirnak|Sivas|Tekirdag|Tokat|Trabzon|Tunceli|Usak|Van|Yalova|Yozgat|Zonguldak";
s_a[228] = "Ahal Welayaty|Balkan Welayaty|Dashhowuz Welayaty|Lebap Welayaty|Mary Welayaty";
s_a[229] = "Tuvalu";
s_a[230] = "Adjumani|Apac|Arua|Bugiri|Bundibugyo|Bushenyi|Busia|Gulu|Hoima|Iganga|Jinja|Kabale|Kabarole|Kalangala|Kampala|Kamuli|Kapchorwa|Kasese|Katakwi|Kibale|Kiboga|Kisoro|Kitgum|Kotido|Kumi|Lira|Luwero|Masaka|Masindi|Mbale|Mbarara|Moroto|Moyo|Mpigi|Mubende|Mukono|Nakasongola|Nebbi|Ntungamo|Pallisa|Rakai|Rukungiri|Sembabule|Soroti|Tororo";
s_a[231] = "Avtonomna Respublika Krym (Simferopol')|Cherkas'ka (Cherkasy)|Chernihivs'ka (Chernihiv)|Chernivets'ka (Chernivtsi)|Dnipropetrovs'ka (Dnipropetrovs'k)|Donets'ka (Donets'k)|Ivano-Frankivs'ka (Ivano-Frankivs'k)|Kharkivs'ka (Kharkiv)|Khersons'ka (Kherson)|Khmel'nyts'ka (Khmel'nyts'kyy)|Kirovohrads'ka (Kirovohrad)|Kyyiv|Kyyivs'ka (Kiev)|L'vivs'ka (L'viv)|Luhans'ka (Luhans'k)|Mykolayivs'ka (Mykolayiv)|Odes'ka (Odesa)|Poltavs'ka (Poltava)|Rivnens'ka (Rivne)|Sevastopol'|Sums'ka (Sumy)|Ternopil's'ka (Ternopil')|Vinnyts'ka (Vinnytsya)|Volyns'ka (Luts'k)|Zakarpats'ka (Uzhhorod)|Zaporiz'ka (Zaporizhzhya)|Zhytomyrs'ka (Zhytomyr)"
s_a[232] = "'Ajman|Abu Zaby (Abu Dhabi)|Al Fujayrah|Ash Shariqah (Sharjah)|Dubayy (Dubai)|Ra's al Khaymah|Umm al Qaywayn";
s_a[233] = "Barking and Dagenham|Barnet|Barnsley|Bath and North East Somerset|Bedfordshire|Bexley|Birmingham|Blackburn with Darwen|Blackpool|Bolton|Bournemouth|Bracknell Forest|Bradford|Brent|Brighton and Hove|Bromley|Buckinghamshire|Bury|Calderdale|Cambridgeshire|Camden|Cheshire|City of Bristol|City of Kingston upon Hull|City of London|Cornwall|Coventry|Croydon|Cumbria|Darlington|Derby|Derbyshire|Devon|Doncaster|Dorset|Dudley|Durham|Ealing|East Riding of Yorkshire|East Sussex|Enfield|Essex|Gateshead|Gloucestershire|Greenwich|Hackney|Halton|Hammersmith and Fulham|Hampshire|Haringey|Harrow|Hartlepool|Havering|Herefordshire|Hertfordshire|Hillingdon|Hounslow|Isle of Wight|Islington|Kensington and Chelsea|Kent|Kingston upon Thames|Kirklees|Knowsley|Lambeth|Lancashire|Leeds|Leicester|Leicestershire|Lewisham|Lincolnshire|Liverpool|Luton|Manchester|Medway|Merton|Middlesbrough|Milton Keynes|Newcastle upon Tyne|Newham|Norfolk|North East Lincolnshire|North Lincolnshire|North Somerset|North Tyneside|North Yorkshire|Northamptonshire|Northumberland|Nottingham|Nottinghamshire|Oldham|Oxfordshire|Peterborough|Plymouth|Poole|Portsmouth|Reading|Redbridge|Redcar and Cleveland|Richmond upon Thames|Rochdale|Rotherham|Rutland|Salford|Sandwell|Sefton|Sheffield|Shropshire|Slough|Solihull|Somerset|South Gloucestershire|South Tyneside|Southampton|Southend-on-Sea|Southwark|St. Helens|Staffordshire|Stockport|Stockton-on-Tees|Stoke-on-Trent|Suffolk|Sunderland|Surrey|Sutton|Swindon|Tameside|Telford and Wrekin|Thurrock|Torbay|Tower Hamlets|Trafford|Wakefield|Walsall|Waltham Forest|Wandsworth|Warrington|Warwickshire|West Berkshire|West Sussex|Westminster|Wigan|Wiltshire|Windsor and Maidenhead|Wirral|Wokingham|Wolverhampton|Worcestershire|York";
s_a[234] = "Artigas|Canelones|Cerro Largo|Colonia|Durazno|Flores|Florida|Lavalleja|Maldonado|Montevideo|Paysandu|Rio Negro|Rivera|Rocha|Salto|San Jose|Soriano|Tacuarembo|Treinta y Tres";
s_a[235] = "Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|District of Columbia|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming";
s_a[236] = "Andijon Wiloyati|Bukhoro Wiloyati|Farghona Wiloyati|Jizzakh Wiloyati|Khorazm Wiloyati (Urganch)|Namangan Wiloyati|Nawoiy Wiloyati|Qashqadaryo Wiloyati (Qarshi)|Qoraqalpoghiston (Nukus)|Samarqand Wiloyati|Sirdaryo Wiloyati (Guliston)|Surkhondaryo Wiloyati (Termiz)|Toshkent Shahri|Toshkent Wiloyati";
s_a[237] = "Malampa|Penama|Sanma|Shefa|Tafea|Torba";
s_a[238] = "Amazonas|Anzoategui|Apure|Aragua|Barinas|Bolivar|Carabobo|Cojedes|Delta Amacuro|Dependencias Federales|Distrito Federal|Falcon|Guarico|Lara|Merida|Miranda|Monagas|Nueva Esparta|Portuguesa|Sucre|Tachira|Trujillo|Vargas|Yaracuy|Zulia";
s_a[239] = "An Giang|Ba Ria-Vung Tau|Bac Giang|Bac Kan|Bac Lieu|Bac Ninh|Ben Tre|Binh Dinh|Binh Duong|Binh Phuoc|Binh Thuan|Ca Mau|Can Tho|Cao Bang|Da Nang|Dac Lak|Dong Nai|Dong Thap|Gia Lai|Ha Giang|Ha Nam|Ha Noi|Ha Tay|Ha Tinh|Hai Duong|Hai Phong|Ho Chi Minh|Hoa Binh|Hung Yen|Khanh Hoa|Kien Giang|Kon Tum|Lai Chau|Lam Dong|Lang Son|Lao Cai|Long An|Nam Dinh|Nghe An|Ninh Binh|Ninh Thuan|Phu Tho|Phu Yen|Quang Binh|Quang Nam|Quang Ngai|Quang Ninh|Quang Tri|Soc Trang|Son La|Tay Ninh|Thai Binh|Thai Nguyen|Thanh Hoa|Thua Thien-Hue|Tien Giang|Tra Vinh|Tuyen Quang|Vinh Long|Vinh Phuc|Yen Bai";
s_a[240] = "Saint Croix|Saint John|Saint Thomas";
s_a[241] = "Blaenau Gwent|Bridgend|Caerphilly|Cardiff|Carmarthenshire|Ceredigion|Conwy|Denbighshire|Flintshire|Gwynedd|Isle of Anglesey|Merthyr Tydfil|Monmouthshire|Neath Port Talbot|Newport|Pembrokeshire|Powys|Rhondda Cynon Taff|Swansea|The Vale of Glamorgan|Torfaen|Wrexham";
s_a[242] = "Alo|Sigave|Wallis";
s_a[243] = "West Bank";
s_a[244] = "Western Sahara";
s_a[245] = "'Adan|'Ataq|Abyan|Al Bayda'|Al Hudaydah|Al Jawf|Al Mahrah|Al Mahwit|Dhamar|Hadhramawt|Hajjah|Ibb|Lahij|Ma'rib|Sa'dah|San'a'|Ta'izz";
s_a[246] = "Kosovo|Montenegro|Serbia|Vojvodina";
s_a[247] = "Central|Copperbelt|Eastern|Luapula|Lusaka|North-Western|Northern|Southern|Western";
s_a[248] = "Bulawayo|Harare|ManicalandMashonaland Central|Mashonaland East|Mashonaland West|Masvingo|Matabeleland North|Matabeleland South|Midlands";

// State Codes
var s_codes = new Array();
s_codes[0]="";
s_codes[1] = "None Selected";
s_codes[2] = "BADAKHSHAN|BADGHIS|BAGHLAN|BALKH|BAMIAN|FARAH|FARYAB|GHAZNI|GHOWR|HELMAND|HERAT|JOWZJAN|KABOL|KANDAHAR|KAPISA|KONAR|KONDOZ|LAGHMAN|LOWGAR|NANGARHAR|NIMRUZ|ORUZGAN|PAKTIA|PAKTIKA|PARVAN|SAMANGAN|SAR-E POL|TAKHAR|VARDAK|ZABOL";
s_codes[3] = "BERAT|BULQIZE|DELVINE|DEVOLL (BILISHT)|DIBER (PESHKOPI)|DURRES|ELBASAN|FIER|GJIROKASTER|GRAMSH|HAS (KRUME)|KAVAJE|KOLONJE (ERSEKE)|KORCE|KRUJE|KUCOVE|KUKES|KURBIN|LEZHE|LIBRAZHD|LUSHNJE|MALESI E MADHE (KOPLIK)|MALLAKASTER (BALLSH)|MAT (BURREL)|MIRDITE (RRESHEN)|PEQIN|PERMET|POGRADEC|PUKE|SARANDE|SHKODER|SKRAPAR (COROVODE)|TEPELENE|TIRANE (TIRANA)|TIRANE (TIRANA)|TROPOJE (BAJRAM CURRI)|VLORE";
s_codes[4] = "ADRAR|AIN DEFLA|AIN TEMOUCHENT|ALGER|ANNABA|BATNA|BECHAR|BEJAIA|BISKRA|BLIDA|BORDJ BOU ARRERIDJ|BOUIRA|BOUMERDES|CHLEF|CONSTANTINE|DJELFA|EL BAYADH|EL OUED|EL TARF|GHARDAIA|GUELMA|ILLIZI|JIJEL|KHENCHELA|LAGHOUAT|M'SILA|MASCARA|MEDEA|MILA|MOSTAGANEM|NAAMA|ORAN|OUARGLA|OUM EL BOUAGHI|RELIZANE|SAIDA|SETIF|SIDI BEL ABBES|SKIKDA|SOUK AHRAS|TAMANGHASSET|TEBESSA|TIARET|TINDOUF|TIPAZA|TISSEMSILT|TIZI OUZOU|TLEMCEN";
s_codes[5] = "EASTERN|MANU'A|ROSE ISLAND|SWAINS ISLAND|WESTERN";
s_codes[6] = "ANDORRA LA VELLA|BENGO|BENGUELA|BIE|CABINDA|CANILLO|CUANDO CUBANGO|CUANZA NORTE|CUANZA SUL|CUNENE|ENCAMP|ESCALDES-ENGORDANY|HUAMBO|HUILA|LA MASSANA|LUANDA|LUNDA NORTE|LUNDA SUL|MALANJE|MOXICO|NAMIBE|ORDINO|SANT JULIA DE LORIA|UIGE|ZAIRE";
s_codes[7] = "ANGUILLA";
s_codes[8] = "ANTARCTICA";
s_codes[9] = "BARBUDA|REDONDA|SAINT GEORGE|SAINT JOHN|SAINT MARY|SAINT PAUL|SAINT PETER|SAINT PHILIP";
s_codes[10] = "ANTARTICA E ISLAS DEL ATLANTICO SUR|BUENOS AIRES|BUENOS AIRES CAPITAL FEDERAL|CATAMARCA|CHACO|CHUBUT|CORDOBA|CORRIENTES|ENTRE RIOS|FORMOSA|JUJUY|LA PAMPA|LA RIOJA|MENDOZA|MISIONES|NEUQUEN|RIO NEGRO|SALTA|SAN JUAN|SAN LUIS|SANTA CRUZ|SANTA FE|SANTIAGO DEL ESTERO|TIERRA DEL FUEGO|TUCUMAN";
s_codes[11] = "ARAGATSOTN|ARARAT|ARMAVIR|GEGHARK'UNIK'|KOTAYK'|LORRI|SHIRAK|SYUNIK'|TAVUSH|VAYOTS' DZOR|YEREVAN";
s_codes[12] = "ARUBA";
s_codes[13] = "ASHMORE AND CARTIER ISLAND";
s_codes[14] = "ACT|NSW|NT|QLD|SA|TAS|VIC|WESTERN AUSTRALIA";
s_codes[15] = "BURGENLAND|KAERNTEN|NIEDEROESTERREICH|OBEROESTERREICH|SALZBURG|STEIERMARK|TIROL|VORARLBERG|WIEN";
s_codes[16] = "ABSERON RAYONU|AGCABADI RAYONU|AGDAM RAYONU|AGDAS RAYONU|AGSTAFA RAYONU|AGSU RAYONU|ALI BAYRAMLI SAHARI|ASTARA RAYONU|BAKI SAHARI|BALAKAN RAYONU|BARDA RAYONU|BEYLAQAN RAYONU|BILASUVAR RAYONU|CABRAYIL RAYONU|CALILABAD RAYONU|DASKASAN RAYONU|DAVACI RAYONU|FUZULI RAYONU|GADABAY RAYONU|GANCA SAHARI|GORANBOY RAYONU|GOYCAY RAYONU|HACIQABUL RAYONU|IMISLI RAYONU|ISMAYILLI RAYONU|KALBACAR RAYONU|KURDAMIR RAYONU|LACIN RAYONU|LANKARAN RAYONU|LANKARAN SAHARI|LERIK RAYONU|MASALLI RAYONU|MINGACEVIR SAHARI|NAFTALAN SAHARI|NAXCIVAN MUXTAR RESPUBLIKASI|NEFTCALA RAYONU|OGUZ RAYONU|QABALA RAYONU|QAX RAYONU|QAZAX RAYONU|QOBUSTAN RAYONU|QUBA RAYONU|QUBADLI RAYONU|QUSAR RAYONU|SAATLI RAYONU|SABIRABAD RAYONU|SAKI RAYONU|SAKI SAHARI|SALYAN RAYONU|SAMAXI RAYONU|SAMKIR RAYONU|SAMUX RAYONU|SIYAZAN RAYONU|SUMQAYIT SAHARI|SUSA RAYONU|SUSA SAHARI|TARTAR RAYONU|TOVUZ RAYONU|UCAR RAYONU|XACMAZ RAYONU|XANKANDI SAHARI|XANLAR RAYONU|XIZI RAYONU|XOCALI RAYONU|XOCAVAND RAYONU|YARDIMLI RAYONU|YEVLAX RAYONU|YEVLAX SAHARI|ZANGILAN RAYONU|ZAQATALA RAYONU|ZARDAB RAYONU";
s_codes[17] = "ACKLINS AND CROOKED ISLANDS|BIMINI|CAT ISLAND|EXUMA|FREEPORT|FRESH CREEK|GOVERNOR'S HARBOUR|GREEN TURTLE CAY|HARBOUR ISLAND|HIGH ROCK|INAGUA|KEMPS BAY|LONG ISLAND|MARSH HARBOUR|MAYAGUANA|NEW PROVIDENCE|NICHOLLS TOWN AND BERRY ISLANDS|RAGGED ISLAND|ROCK SOUND|SAN SALVADOR AND RUM CAY|SANDY POINT";
s_codes[18] = "AL HADD|AL MANAMAH|AL MINTAQAH AL GHARBIYAH|AL MINTAQAH AL WUSTA|AL MINTAQAH ASH SHAMALIYAH|AL MUHARRAQ|AR RIFA' WA AL MINTAQAH AL JANUBIYAH|JIDD HAFS|JUZUR HAWAR|MADINAT 'ISA|MADINAT HAMAD|SITRAH";
s_codes[19] = "BARGUNA|BARISAL|BHOLA|JHALOKATI|PATUAKHALI|PIROJPUR|BANDARBAN|BRAHMANBARIA|CHANDPUR|CHITTAGONG|COMILLA|COX'S BAZAR|FENI|KHAGRACHARI|LAKSHMIPUR|NOAKHALI|RANGAMATI|DHAKA|FARIDPUR|GAZIPUR|GOPALGANJ|JAMALPUR|KISHOREGANJ|MADARIPUR|MANIKGANJ|MUNSHIGANJ|MYMENSINGH|NARAYANGANJ|NARSINGDI|NETROKONA|RAJBARI|SHARIATPUR|SHERPUR|TANGAIL|BAGERHAT|CHUADANGA|JESSORE|JHENAIDAH|KHULNA|KUSHTIA|MAGURA|MEHERPUR|NARAIL|SATKHIRA|BOGRA|DINAJPUR|GAIBANDHA|JAIPURHAT|KURIGRAM|LALMONIRHAT|NAOGAON|NATORE|NAWABGANJ|NILPHAMARI|PABNA|PANCHAGARH|RAJSHAHI|RANGPUR|SIRAJGANJ|THAKURGAON|HABIGANJ|MAULVI BAZAR|SUNAMGANJ|SYLHET";
s_codes[20] = "BRIDGETOWN|CHRIST CHURCH|SAINT ANDREW|SAINT GEORGE|SAINT JAMES|SAINT JOHN|SAINT JOSEPH|SAINT LUCY|SAINT MICHAEL|SAINT PETER|SAINT PHILIP|SAINT THOMAS";
s_codes[21] = "BRESTSKAYA (BREST)|HOMYEL'SKAYA (HOMYEL')|HORAD MINSK|HRODZYENSKAYA (HRODNA)|MAHILYOWSKAYA (MAHILYOW)|MINSKAYA|VITSYEBSKAYA (VITSYEBSK)";
s_codes[22] = "ANTWERPEN|BRABANT WALLON|BRUSSELS CAPITOL REGION|HAINAUT|LIEGE|LIMBURG|LUXEMBOURG|NAMUR|OOST-VLAANDEREN|VLAAMS BRABANT|WEST-VLAANDEREN";
s_codes[23] = "BELIZE|CAYO|COROZAL|ORANGE WALK|STANN CREEK|TOLEDO";
s_codes[24] = "ALIBORI|ATAKORA|ATLANTIQUE|BORGOU|COLLINES|COUFFO|DONGA|LITTORAL|MONO|OUEME|PLATEAU|ZOU";
s_codes[25] = "DEVONSHIRE|HAMILTON|HAMILTON|PAGET|PEMBROKE|SAINT GEORGE|SAINT GEORGES|SANDYS|SMITHS|SOUTHAMPTON|WARWICK";
s_codes[26] = "BUMTHANG|CHHUKHA|CHIRANG|DAGA|GEYLEGPHUG|HA|LHUNTSHI|MONGAR|PARO|PEMAGATSEL|PUNAKHA|SAMCHI|SAMDRUP JONGKHAR|SHEMGANG|TASHIGANG|THIMPHU|TONGSA|WANGDI PHODRANG";
s_codes[27] = "BENI|CHUQUISACA|COCHABAMBA|LA PAZ|ORURO|PANDO|POTOSI|SANTA CRUZ|TARIJA";
s_codes[28] = "FEDERATION OF BOSNIA AND HERZEGOVINA|REPUBLIKA SRPSKA";
s_codes[29] = "CENTRAL|CHOBE|FRANCISTOWN|GABORONE|GHANZI|KGALAGADI|KGATLENG|KWENENG|LOBATSE|NGAMILAND|NORTH-EAST|SELEBI-PIKWE|SOUTH-EAST|SOUTHERN";
s_codes[30] = "AC|AL|AP|AM|BA|CE|DF|ES|GO|MARANHAO|MATO GROSSO|MATO GROSSO DO SUL|MG|PARA|PB|PARANA|PE|PI|RJ|RN|RS|RO|RR|SANTA CATARINA|SP|SE|TO";
s_codes[31] = "ANEGADA|JOST VAN DYKE|TORTOLA|VIRGIN GORDA";
s_codes[32] = "BELAIT|BRUNEI AND MUARA|TEMBURONG|TUTONG";
s_codes[33] = "BLAGOEVGRAD|BURGAS|DOBRICH|GABROVO|KHASKOVO|KURDZHALI|KYUSTENDIL|LOVECH|MONTANA|PAZARDZHIK|PERNIK|PLEVEN|PLOVDIV|RAZGRAD|RUSE|SHUMEN|SILISTRA|SLIVEN|SMOLYAN|SOFIYA|SOFIYA-GRAD|STARA ZAGORA|TURGOVISHTE|VARNA|VELIKO TURNOVO|VIDIN|VRATSA|YAMBOL";
s_codes[34] = "BALE|BAM|BANWA|BAZEGA|BOUGOURIBA|BOULGOU|BOULKIEMDE|COMOE|GANZOURGOU|GNAGNA|GOURMA|HOUET|IOBA|KADIOGO|KENEDOUGOU|KOMANDJARI|KOMPIENGA|KOSSI|KOUPELOGO|KOURITENGA|KOURWEOGO|LERABA|LOROUM|MOUHOUN|NAHOURI|NAMENTENGA|NAUMBIEL|NAYALA|OUBRITENGA|OUDALAN|PASSORE|PONI|SAMENTENGA|SANGUIE|SENO|SISSILI|SOUM|SOUROU|TAPOA|TUY|YAGHA|YATENGA|ZIRO|ZONDOMO|ZOUNDWEOGO";
s_codes[35] = "AYEYARWADY|BAGO|CHIN STATE|KACHIN STATE|KAYAH STATE|KAYIN STATE|MAGWAY|MANDALAY|MON STATE|RAKHINE STATE|SAGAING|SHAN STATE|TANINTHARYI|YANGON";
s_codes[36] = "BUBANZA|BUJUMBURA|BURURI|CANKUZO|CIBITOKE|GITEGA|KARUZI|KAYANZA|KIRUNDO|MAKAMBA|MURAMVYA|MUYINGA|MWARO|NGOZI|RUTANA|RUYIGI";
s_codes[37] = "BANTEAY MEAN CHEAY|BATDAMBANG|KAMPONG CHAM|KAMPONG CHHNANG|KAMPONG SPOE|KAMPONG THUM|KAMPOT|KANDAL|KAOH KONG|KEB|KRACHEH|MONDOL KIRI|OTDAR MEAN CHEAY|PAILIN|PHNUM PENH|POUTHISAT|PREAH SEIHANU (SIHANOUKVILLE)|PREAH VIHEAR|PREY VENG|ROTANAH KIRI|SIEM REAB|STOENG TRENG|SVAY RIENG|TAKEV";
s_codes[38] = "ADAMAOUA|CENTRE|EST|EXTREME-NORD|LITTORAL|NORD|NORD-OUEST|OUEST|SUD|SUD-OUEST";
s_codes[39] = "ALBERTA|BRITISH COLUMBIA|MANITOBA|NEW BRUNSWICK|NEWFOUNDLAND|NORTHWEST TERRITORIES|NOVA SCOTIA|NUNAVUT|ONTARIO|PRINCE EDWARD ISLAND|QUEBEC|SASKATCHEWAN|YUKON TERRITORY";
s_codes[40] = "BOA VISTA|BRAVA|MAIO|MOSTEIROS|PAUL|PORTO NOVO|PRAIA|RIBEIRA GRANDE|SAL|SANTA CATARINA|SANTA CRUZ|SAO DOMINGOS|SAO FILIPE|SAO NICOLAU|SAO VICENTE|TARRAFAL";
s_codes[41] = "CREEK|EASTERN|MIDLAND|SOUTH TOWN|SPOT BAY|STAKE BAY|WEST END|WESTERN";
s_codes[42] = "BAMINGUI-BANGORAN|BANGUI|BASSE-KOTTO|GRIBINGUI|HAUT-MBOMOU|HAUTE-KOTTO|HAUTE-SANGHA|KEMO-GRIBINGUI|LOBAYE|MBOMOU|NANA-MAMBERE|OMBELLA-MPOKO|OUAKA|OUHAM|OUHAM-PENDE|SANGHA|VAKAGA";
s_codes[43] = "BATHA|BILTINE|BORKOU-ENNEDI-TIBESTI|CHARI-BAGUIRMI|GUERA|KANEM|LAC|LOGONE OCCIDENTAL|LOGONE ORIENTAL|MAYO-KEBBI|MOYEN-CHARI|OUADDAI|SALAMAT|TANDJILE";
s_codes[44] = "AYSEN DEL GENERAL CARLOS IBANEZ DEL CAMPO|ANTOFAGASTA|LA ARAUCANIA|ATACAMA|BIO-BIO|COQUIMBO|LIBERTADOR GENERAL BERNARDO O'HIGGINS|LOS LAGOS|MAGALLANES Y DE LA ANTARTICA CHILENA|MAULE|REGION METROPOLITANA DE SANTIAGO|TARAPACA|VALPARAISO";
s_codes[45] =  "ANHUI|BEIJING|CHONGQING|FUJIAN|GANSU|GUANGDONG|GUANGXI|GUIZHOU|HAINAN|HEBEI|HEILONGJIANG|HENAN|HUBEI|HUNAN|JIANGSU|JIANGXI|JILIN|LIAONING|NEI MONGOL|NINGXIA|QINGHAI|SHAANXI|SHANDONG|SHANGHAI|SHANXI|SICHUAN|TIANJIN|XINJIANG|XIZANG (TIBET)|YUNNAN|ZHEJIANG";
s_codes[46] = "CHRISTMAS ISLAND";
s_codes[47] = "CLIPPERTON ISLAND";
s_codes[48] = "DIRECTION ISLAND|HOME ISLAND|HORSBURGH ISLAND|NORTH KEELING ISLAND|SOUTH ISLAND|WEST ISLAND";
s_codes[49] = "AMAZONAS|ANTIOQUIA|ARAUCA|ATLANTICO|BOLIVAR|BOYACA|CALDAS|CAQUETA|CASANARE|CAUCA|CESAR|CHOCO|CORDOBA|CUNDINAMARCA|DISTRITO CAPITAL|GUAINIA|GUAVIARE|HUILA|LA GUAJIRA|MAGDALENA|META|NARINO|NORTE DE SANTANDER|Putumayo|QUINDIO|RISARALDA|ARCHIPIELAGO DE SAN ANDRES|SANTANDER|SUCRE|TOLIMA|VALLE DEL CAUCA|VAUPES|VICHADA";
s_codes[50] = "ANJOUAN (NZWANI)|DOMONI|FOMBONI|GRANDE COMORE (NJAZIDJA)|MOHELI (MWALI)|MORONI|MOUTSAMOUDOU";
s_codes[51] = "BANDUNDU|BAS-CONGO|EQUATEUR|KASAI-OCCIDENTAL|KASAI-ORIENTAL|KATANGA|KINSHASA|MANIEMA|NORD-KIVU|ORIENTALE|SUD-KIVU";
s_codes[52] = "BOUENZA|BRAZZAVILLE|CUVETTE|KOUILOU|LEKOUMOU|LIKOUALA|NIARI|PLATEAUX|POOL|SANGHA";
s_codes[53] = "AITUTAKI|ATIU|AVARUA|MANGAIA|MANIHIKI|MANUAE|MAUKE|MITIARO|NASSAU ISLAND|PALMERSTON|PENRHYN|PUKAPUKA|RAKAHANGA|RAROTONGA|SUWARROW|TAKUTEA";
s_codes[54] = "ALAJUELA|CARTAGO|GUANACASTE|HEREDIA|LIMON|PUNTARENAS|SAN JOSE";
s_codes[55] = "ABENGOUROU|ABIDJAN|ABOISSO|ADIAKE'|ADZOPE|AGBOVILLE|AGNIBILEKROU|ALE'PE'|BANGOLO|BEOUMI|BIANKOUMA|BOCANDA|BONDOUKOU|BONGOUANOU|BOUAFLE|BOUAKE|BOUNA|BOUNDIALI|DABAKALA|DABON|DALOA|DANANE|DAOUKRO|DIMBOKRO|DIVO|DUEKOUE|FERKESSEDOUGOU|GAGNOA|GRAND BASSAM|GRAND-LAHOU|GUIGLO|ISSIA|JACQUEVILLE|KATIOLA|KORHOGO|LAKOTA|MAN|MANKONO|MBAHIAKRO|ODIENNE|OUME|SAKASSOU|SAN-PEDRO|SASSANDRA|SEGUELA|SINFRA|SOUBRE|TABOU|TANDA|TIASSALE|TIEBISSOU|TINGRELA|TOUBA|TOULEPLEU|TOUMODI|VAVOUA|YAMOUSSOUKRO|ZUENOULA";
s_codes[56] = "BJELOVARSKO-BILOGORSKA ZUPANIJA|BRODSKO-POSAVSKA ZUPANIJA|DUBROVACKO-NERETVANSKA ZUPANIJA|ISTARSKA ZUPANIJA|KARLOVACKA ZUPANIJA|KOPRIVNICKO-KRIZEVACKA ZUPANIJA|KRAPINSKO-ZAGORSKA ZUPANIJA|LICKO-SENJSKA ZUPANIJA|MEDIMURSKA ZUPANIJA|OSJECKO-BARANJSKA ZUPANIJA|POZESKO-SLAVONSKA ZUPANIJA|PRIMORSKO-GORANSKA ZUPANIJA|SIBENSKO-KNINSKA ZUPANIJA|SISACKO-MOSLAVACKA ZUPANIJA|SPLITSKO-DALMATINSKA ZUPANIJA|VARAZDINSKA ZUPANIJA|VIROVITICKO-PODRAVSKA ZUPANIJA|VUKOVARSKO-SRIJEMSKA ZUPANIJA|ZADARSKA ZUPANIJA|ZAGREB|ZAGREBACKA ZUPANIJA";

s_codes[57] = "FAMAGUSTA|KYRENIA|LARNACA|LIMASSOL|NICOSIA|PAPHOS";
s_codes[58] = "BRNENSKY|BUDEJOVICKY|JIHLAVSKY|KARLOVARSKY|KRALOVEHRADECKY|LIBERECKY|OLOMOUCKY|OSTRAVSKY|PARDUBICKY|PLZENSKY|PRAHA|STREDOCESKY|USTECKY|ZLINSKY";
s_codes[59] = "ARHUS|BORNHOLM|FREDERICKSBERG|FREDERIKSBORG|FYN|KOBENHAVN|KOBENHAVNS|NORDJYLLAND|RIBE|RINGKOBING|ROSKILDE|SONDERJYLLAND|STORSTROM|VEJLE|VESTSJALLAND|VIBORG";
s_codes[60] = "'ALI SABIH|DIKHIL|DJIBOUTI|OBOCK|TADJOURA";
s_codes[61] = "SAINT ANDREW|SAINT DAVID|SAINT GEORGE|SAINT JOHN|SAINT JOSEPH|SAINT LUKE|SAINT MARK|SAINT PATRICK|SAINT PAUL|SAINT PETER";
s_codes[62] = "AZUA|BAORUCO|BARAHONA|DAJABON|DISTRITO NACIONAL|DUARTE|EL SEIBO|ELIAS PINA|ESPAILLAT|HATO MAYOR|INDEPENDENCIA|LA ALTAGRACIA|LA ROMANA|LA VEGA|MARIA TRINIDAD SANCHEZ|MONSENOR NOUEL|MONTE CRISTI|MONTE PLATA|PEDERNALES|PERAVIA|PUERTO PLATA|SALCEDO|SAMANA|SAN CRISTOBAL|SAN JUAN|SAN PEDRO DE MACORIS|SANCHEZ RAMIREZ|SANTIAGO|SANTIAGO RODRIGUEZ|VALVERDE";
s_codes[63] = "AZUAY|BOLIVAR|CANAR|CARCHI|CHIMBORAZO|COTOPAXI|EL ORO|ESMERALDAS|GALAPAGOS|GUAYAS|IMBABURA|LOJA|LOS RIOS|MANABI|MORONA-SANTIAGO|NAPO|ORELLANA|PASTAZA|PICHINCHA|SUCUMBIOS|TUNGURAHUA|ZAMORA-CHINCHIPE";
s_codes[64] = "AD DAQAHLIYAH|AL BAHR AL AHMAR|AL BUHAYRAH|AL FAYYUM|AL GHARBIYAH|AL ISKANDARIYAH|AL ISMA'ILIYAH|AL JIZAH|AL MINUFIYAH|AL MINYA|AL QAHIRAH|AL QALYUBIYAH|AL WADI AL JADID|AS SUWAYS|ASH SHARQIYAH|ASWAN|ASYUT|BANI SUWAYF|BUR SA'ID|DUMYAT|JANUB SINA'|KAFR ASH SHAYKH|MATRUH|QINA|SHAMAL SINA'|SUHAJ";
s_codes[65] = "AHUACHAPAN|CABANAS|CHALATENANGO|CUSCATLAN|LA LIBERTAD|LA PAZ|LA UNION|MORAZAN|SAN MIGUEL|SAN SALVADOR|SAN VICENTE|SANTA ANA|SONSONATE|USULUTAN";
s_codes[66] = "ANNOBON|BIOKO NORTE|BIOKO SUR|CENTRO SUR|KIE-NTEM|LITORAL|WELE-NZAS";
s_codes[67] = "AKALE GUZAY|BARKA|DENKEL|HAMASEN|SAHIL|SEMHAR|SENHIT|SERAYE";
s_codes[68] = "HARJUMAA (TALLINN)|HIIUMAA (KARDLA)|IDA-VIRUMAA (JOHVI)|JARVAMAA (PAIDE)|JOGEVAMAA (JOGEVA)|LAANE-VIRUMAA (RAKVERE)|LAANEMAA (HAAPSALU)|PARNUMAA (PARNU)|POLVAMAA (POLVA)|RAPLAMAA (RAPLA)|SAAREMAA (KUESSAARE)|TARTUMAA (TARTU)|VALGAMAA (VALGA)|VILJANDIMAA (VILJANDI)|VORUMAA (VORU)"
s_codes[69] = "ADIS ABEBA (ADDIS ABABA)|AFAR|AMARA|DIRE DAWA|GAMBELA HIZBOCH|HARERI HIZB|OROMIYA|SUMALE|TIGRAY|YEDEBUB BIHEROCH BIHERESEBOCH NA HIZBOCH";
s_codes[70] = "EUROPA ISLAND";
s_codes[71] = "FALKLAND ISLANDS (ISLAS MALVINAS)"
s_codes[72] = "BORDOY|EYSTUROY|MYKINES|SANDOY|SKUVOY|STREYMOY|SUDUROY|TVOROYRI|VAGAR";
s_codes[73] = "CENTRAL|EASTERN|NORTHERN|ROTUMA|WESTERN";
s_codes[74] = "ALAND|ETELA-SUOMEN LAANI|ITA-SUOMEN LAANI|LANSI-SUOMEN LAANI|LAPPI|OULUN LAANI";
s_codes[75] = "ALSACE|AQUITAINE|AUVERGNE|BASSE-NORMANDIE|BOURGOGNE|BRETAGNE|CENTRE|CHAMPAGNE-ARDENNE|CORSE|FRANCHE-COMTE|HAUTE-NORMANDIE|ILE-DE-FRANCE|LANGUEDOC-ROUSSILLON|LIMOUSIN|LORRAINE|MIDI-PYRENEES|NORD-PAS-DE-CALAIS|PAYS DE LA LOIRE|PICARDIE|POITOU-CHARENTES|PROVENCE-ALPES-COTE D'AZUR|RHONE-ALPES";
s_codes[76] = "FRENCH GUIANA";
s_codes[77] = "ARCHIPEL DES MARQUISES|ARCHIPEL DES TUAMOTU|ARCHIPEL DES TUBUAI|ILES DU VENT|ILES SOUS-LE-VENT";
s_codes[78] = "ADELIE LAND|ILE CROZET|ILES KERGUELEN|ILES SAINT-PAUL ET AMSTERDAM";
s_codes[79] = "ESTUAIRE|HAUT-OGOOUE|MOYEN-OGOOUE|NGOUNIE|NYANGA|OGOOUE-IVINDO|OGOOUE-LOLO|OGOOUE-MARITIME|WOLEU-NTEM";
s_codes[80] = "BANJUL|CENTRAL RIVER|LOWER RIVER|NORTH BANK|UPPER RIVER|WESTERN";
s_codes[81] = "GAZA STRIP";
s_codes[82] = "ABASHIS|ABKHAZIA OR AP'KHAZET'IS AVTONOMIURI RESPUBLIKA (SOKHUMI)|ADIGENIS|AJARIA OR ACHARIS AVTONOMIURI RESPUBLIKA (BAT'UMI)|AKHALGORIS|AKHALK'ALAK'IS|AKHALTS'IKHIS|AKHMETIS|AMBROLAURIS|ASPINDZIS|BAGHDAT'IS|BOLNISIS|BORJOMIS|CH'KHOROTSQUS|CH'OKHATAURIS|CHIAT'URA|DEDOP'LISTSQAROS|DMANISIS|DUSHET'IS|GARDABANIS|GORI|GORIS|GURJAANIS|JAVIS|K'ARELIS|K'UT'AISI|KASPIS|KHARAGAULIS|KHASHURIS|KHOBIS|KHONIS|LAGODEKHIS|LANCH'KHUT'IS|LENTEKHIS|MARNEULIS|MARTVILIS|MESTIIS|MTS'KHET'IS|NINOTSMINDIS|ONIS|OZURGET'IS|P'OT'I|QAZBEGIS|QVARLIS|RUST'AVI|SACH'KHERIS|SAGAREJOS|SAMTREDIIS|SENAKIS|SIGHNAGHIS|T'BILISI|T'ELAVIS|T'ERJOLIS|T'ET'RITSQAROS|T'IANET'IS|TQIBULI|TS'AGERIS|TSALENJIKHIS|TSALKIS|TSQALTUBO|VANIS|ZESTAP'ONIS|ZUGDIDI|ZUGDIDIS";
s_codes[83] = "BADEN-WUERTTEMBERG|BAYERN|BERLIN|BRANDENBURG|BREMEN|HAMBURG|HESSEN|MECKLENBURG-VORPOMMERN|NIEDERSACHSEN|NORDRHEIN-WESTFALEN|RHEINLAND-PFALZ|SAARLAND|SACHSEN|SACHSEN-ANHALT|SCHLESWIG-HOLSTEIN|THUERINGEN";
s_codes[84] = "ASHANTI|BRONG-AHAFO|CENTRAL|EASTERN|GREATER ACCRA|NORTHERN|UPPER EAST|UPPER WEST|VOLTA|WESTERN";
s_codes[85] = "GIBRALTAR";
s_codes[86] = "ILE DU LYS|ILE GLORIEUSE";
s_codes[87] = "AITOLIA KAI AKARNANIA|AKHAIA|ARGOLIS|ARKADHIA|ARTA|ATTIKI|AYION OROS (MT. ATHOS)|DHODHEKANISOS|DRAMA|EVRITANIA|EVROS|EVVOIA|FLORINA|FOKIS|FTHIOTIS|GREVENA|ILIA|IMATHIA|IOANNINA|IRAKLEION|KARDHITSA|KASTORIA|KAVALA|KEFALLINIA|KERKYRA|KHALKIDHIKI|KHANIA|KHIOS|KIKLADHES|KILKIS|KORINTHIA|KOZANI|LAKONIA|LARISA|LASITHI|LESVOS|LEVKAS|MAGNISIA|MESSINIA|PELLA|PIERIA|PREVEZA|RETHIMNI|RODHOPI|SAMOS|SERRAI|THESPROTIA|THESSALONIKI|TRIKALA|VOIOTIA|XANTHI|ZAKINTHOS";
s_codes[88] = "AVANNAA (NORDGRONLAND)|KITAA (VESTGRONLAND)|TUNU (OSTGRONLAND)"
s_codes[89] = "CARRIACOU AND PETIT MARTINIQUE|SAINT ANDREW|SAINT DAVID|SAINT GEORGE|SAINT JOHN|SAINT MARK|SAINT PATRICK";
s_codes[90] = "BASSE-TERRE|GRANDE-TERRE|ILES DE LA PETITE TERRE|ILES DES SAINTES|MARIE-GALANTE";
s_codes[91] = "GUAM";
s_codes[92] = "ALTA VERAPAZ|BAJA VERAPAZ|CHIMALTENANGO|CHIQUIMULA|EL PROGRESO|ESCUINTLA|GUATEMALA|HUEHUETENANGO|IZABAL|JALAPA|JUTIAPA|PETEN|QUETZALTENANGO|QUICHE|RETALHULEU|SACATEPEQUEZ|SAN MARCOS|SANTA ROSA|SOLOLA|SUCHITEPEQUEZ|TOTONICAPAN|ZACAPA";
s_codes[93] = "CASTEL|FOREST|ST. ANDREW|ST. MARTIN|ST. PETER PORT|ST. PIERRE DU BOIS|ST. SAMPSON|ST. SAVIOUR|TORTEVAL|VALE";
s_codes[94] = "BEYLA|BOFFA|BOKE|CONAKRY|COYAH|DABOLA|DALABA|DINGUIRAYE|DUBREKA|FARANAH|FORECARIAH|FRIA|GAOUAL|GUECKEDOU|KANKAN|KEROUANE|KINDIA|KISSIDOUGOU|KOUBIA|KOUNDARA|KOUROUSSA|LABE|LELOUMA|LOLA|MACENTA|MALI|MAMOU|MANDIANA|NZEREKORE|PITA|SIGUIRI|TELIMELE|TOUGUE|YOMOU";
s_codes[95] = "BAFATA|BIOMBO|BISSAU|BOLAMA-BIJAGOS|CACHEU|GABU|OIO|QUINARA|TOMBALI";
s_codes[96] = "BARIMA-WAINI|CUYUNI-MAZARUNI|DEMERARA-MAHAICA|EAST BERBICE-CORENTYNE|ESSEQUIBO ISLANDS-WEST DEMERARA|MAHAICA-BERBICE|POMEROON-SUPENAAM|POTARO-SIPARUNI|UPPER DEMERARA-BERBICE|UPPER TAKUTU-UPPER ESSEQUIBO";
s_codes[97] = "ARTIBONITE|CENTRE|GRAND'ANSE|NORD|NORD-EST|NORD-OUEST|OUEST|SUD|SUD-EST";
s_codes[98] = "HEARD ISLAND AND MCDONALD ISLANDS";
s_codes[99] = "HOLY SEE (VATICAN CITY)"
s_codes[100] = "ATLANTIDA|CHOLUTECA|COLON|COMAYAGUA|COPAN|CORTES|EL PARAISO|FRANCISCO MORAZAN|GRACIAS A DIOS|INTIBUCA|ISLAS DE LA BAHAI|LA PAZ|LEMPIRA|OCOTEPEQUE|OLANCJO|SANTA BARBARA|VALLE|YORO";
s_codes[101] = "HONG KONG";
s_codes[102] = "HOWLAND ISLAND";
s_codes[103] = "BACS-KISKUN|BARANYA|BEKES|BEKESCSABA|BORSOD-ABAUJ-ZEMPLEN|BUDAPEST|CSONGRAD|DEBRECEN|DUNAUJVAROS|EGER|FEJER|GYOR|GYOR-MOSON-SOPRON|HAJDU-BIHAR|HEVES|HODMEZOVASARHELY|JASZ-NAGYKUN-SZOLNOK|KAPOSVAR|KECSKEMET|KOMAROM-ESZTERGOM|MISKOLC|NAGYKANIZSA|NOGRAD|NYIREGYHAZA|PECS|PEST|SOMOGY|SOPRON|SZABOLCS-SZATMAR-BEREG|SZEGED|SZEKESFEHERVAR|SZOLNOK|SZOMBATHELY|TATABANYA|TOLNA|VAS|VESZPREM|VESZPREM|ZALA|ZALAEGERSZEG";
s_codes[104] = "AKRANES|AKUREYRI|ARNESSYSLA|AUSTUR-BARDHASTRANDARSYSLA|AUSTUR-HUNAVATNSSYSLA|AUSTUR-SKAFTAFELLSSYSLA|BORGARFJARDHARSYSLA|DALASYSLA|EYJAFJARDHARSYSLA|GULLBRINGUSYSLA|HAFNARFJORDHUR|HUSAVIK|ISAFJORDHUR|KEFLAVIK|KJOSARSYSLA|KOPAVOGUR|MYRASYSLA|NESKAUPSTADHUR|NORDHUR-ISAFJARDHARSYSLA|NORDHUR-MULASYS-LA|NORDHUR-THINGEYJARSYSLA|OLAFSFJORDHUR|RANGARVALLASYSLA|REYKJAVIK|SAUDHARKROKUR|SEYDHISFJORDHUR|SIGLUFJORDHUR|SKAGAFJARDHARSYSLA|SNAEFELLSNES-OG HNAPPADALSSYSLA|STRANDASYSLA|SUDHUR-MULASYSLA|SUDHUR-THINGEYJARSYSLA|VESTTMANNAEYJAR|VESTUR-BARDHASTRANDARSYSLA|VESTUR-HUNAVATNSSYSLA|VESTUR-ISAFJARDHARSYSLA|VESTUR-SKAFTAFELLSSYSLA";
s_codes[105] =  "ANDAMAN AND NICOBAR ISLANDS|ANDHRA PRADESH|ARUNACHAL PRADESH|ASSAM|BIHAR|CHANDIGARH|CHHATISGARH|DADRA & NAGAR HAVELI|DAMAN & DIU|DELHI|GOA|GUJARAT|HARYANA|HIMACHAL PRADESH|JAMMU & KASHMIR|JHARKHAND|KARNATAKA|KERALA|LAKSHADWEEP|MADHYA PRADESH|MAHARASHTRA|MANIPUR|MEGHALAYA|MIZORAM|NAGALAND|ORISSA|PONDICHERRY|PUNJAB|RAJASTHAN|SIKKIM|TAMIL NADU|TRIPURA|UTTAR PRADESH|UTTARANCHAL|WEST BENGAL";
s_codes[106] = "ACEH|BALI|BANTEN|BENGKULU|EAST TIMOR|GORONTALO|IRIAN JAYA|JAKARTA RAYA|JAMBI|JAWA BARAT|JAWA TENGAH|JAWA TIMUR|KALIMANTAN BARAT|KALIMANTAN SELATAN|KALIMANTAN TENGAH|KALIMANTAN TIMUR|KEPULAUAN BANGKA BELITUNG|LAMPUNG|MALUKU|MALUKU UTARA|NUSA TENGGARA BARAT|NUSA TENGGARA TIMUR|RIAU|SULAWESI SELATAN|SULAWESI TENGAH|SULAWESI TENGGARA|SULAWESI UTARA|SUMATERA BARAT|SUMATERA SELATAN|SUMATERA UTARA|YOGYAKARTA";

s_codes[107] = "AL ANBAR|AL BASRAH|AL MUTHANNA|AL QADISIYAH|AN NAJAF|ARBIL|AS SULAYMANIYAH|AT TA'MIM|BABIL|BAGHDAD|DAHUK|DHI QAR|DIYALA|KARBALA'|MAYSAN|NINAWA|SALAH AD DIN|WASIT";
s_codes[108] = "CARLOW|CAVAN|CLARE|CORK|DONEGAL|DUBLIN|GALWAY|KERRY|KILDARE|KILKENNY|LAOIS|LEITRIM|LIMERICK|LONGFORD|LOUTH|MAYO|MEATH|MONAGHAN|OFFALY|ROSCOMMON|SLIGO|TIPPERARY|WATERFORD|WESTMEATH|WEXFORD|WICKLOW";
s_codes[109] = "ANTRIM|ARDS|ARMAGH|BALLYMENA|BALLYMONEY|BANBRIDGE|BELFAST|CARRICKFERGUS|CASTLEREAGH|COLERAINE|COOKSTOWN|CRAIGAVON|DERRY|DOWN|DUNGANNON|FERMANAGH|LARNE|LIMAVADY|LISBURN|MAGHERAFELT|MOYLE|NEWRY AND MOURNE|NEWTOWNABBEY|NORTH DOWN|OMAGH|STRABANE";
s_codes[110] = "CENTRAL|HAIFA|JERUSALEM|NORTHERN|SOUTHERN|TEL AVIV";
s_codes[111] = "ABRUZZO|BASILICATA|CALABRIA|CAMPANIA|EMILIA-ROMAGNA|FRIULI-VENEZIA GIULIA|LAZIO|LIGURIA|LOMBARDIA|MARCHE|MOLISE|PIEMONTE|PUGLIA|SARDEGNA|SICILIA|TOSCANA|TRENTINO-ALTO ADIGE|UMBRIA|VALLE D'AOSTA|VENETO";
s_codes[112] = "CLARENDON|HANOVER|KINGSTON|MANCHESTER|PORTLAND|SAINT ANDREW|SAINT ANN|SAINT CATHERINE|SAINT ELIZABETH|SAINT JAMES|SAINT MARY|SAINT THOMAS|TRELAWNY|WESTMORELAND";
s_codes[113] = "JAN MAYEN";
s_codes[114] = "AICHI|AKITA|AOMORI|CHIBA|EHIME|FUKUI|FUKUOKA|FUKUSHIMA|GIFU|GUMMA|HIROSHIMA|HOKKAIDO|HYÅŒGO|IBARAKI|ISHIKAWA|IWATE|KAGAWA|KAGOSHIMA|KANAGAWA|KOCHI|KUMAMOTO|KYOTO|MIE|MIYAGI|MIYAZAKI|NAGANO|NAGASAKI|NARA|NIIGATA|ÅŒITA|OKAYAMA|OKINAWA|ÅŒSAKA|SAGA|SAITAMA|SHIGA|SHIMANE|SHIZUOKA|TOCHIGI|TOKUSHIMA|TOKYO|TOTTORI|TOYAMA|WAKAYAMA|YAMAGATA|YAMAGUCHI|YAMANASHI";
s_codes[115] = "JARVIS ISLAND";
s_codes[116] = "JERSEY";
s_codes[117] = "JOHNSTON ATOLL";
s_codes[118] = "'AMMAN|AJLUN|AL 'AQABAH|AL BALQA'|AL KARAK|AL MAFRAQ|AT TAFILAH|AZ ZARQA'|IRBID|JARASH|MA'AN|MADABA";
s_codes[119] = "JUAN DE NOVA ISLAND";
s_codes[120] = "ALMATY|AQMOLA|AQTOBE|ASTANA|ATYRAU|BATYS QAZAQSTAN|BAYQONGYR|MANGGHYSTAU|ONGTUSTIK QAZAQSTAN|PAVLODAR|QARAGHANDY|QOSTANAY|QYZYLORDA|SHYGHYS QAZAQSTAN|SOLTUSTIK QAZAQSTAN|ZHAMBYL";
s_codes[121] = "CENTRAL|COAST|EASTERN|NAIROBI AREA|NORTH EASTERN|NYANZA|RIFT VALLEY|WESTERN";
s_codes[122] = "ABAIANG|ABEMAMA|ARANUKA|ARORAE|BANABA|BANABA|BERU|BUTARITARI|CENTRAL GILBERTS|GILBERT ISLANDS|KANTON|KIRITIMATI|KURIA|LINE ISLANDS|LINE ISLANDS|MAIANA|MAKIN|MARAKEI|NIKUNAU|NONOUTI|NORTHERN GILBERTS|ONOTOA|PHOENIX ISLANDS|SOUTHERN GILBERTS|TABITEUEA|TABUAERAN|TAMANA|TARAWA|TARAWA|TERAINA";

s_codes[123] = "CH'UNGCH'ONG-BUKTO|CH'UNGCH'ONG-NAMDO|CHEJU-DO|CHOLLA-BUKTO|CHOLLA-NAMDO|INCH'ON-GWANGYOKSI|KANGWON-DO|KWANGJU-GWANGYOKSI|KYONGGI-DO|KYONGSANG-BUKTO|KYONGSANG-NAMDO|PUSAN-GWANGYOKSI|SOUL-T'UKPYOLSI|TAEGU-GWANGYOKSI|TAEJON-GWANGYOKSI|ULSAN-GWANGYOKSI";
s_codes[124] = "AL 'ASIMAH|AL AHMADI|AL FARWANIYAH|AL JAHRA'|HAWALLI";
s_codes[125] = "BATKEN OBLASTY|BISHKEK SHAARY|CHUY OBLASTY (BISHKEK)|JALAL-ABAD OBLASTY|NARYN OBLASTY|OSH OBLASTY|TALAS OBLASTY|YSYK-KOL OBLASTY (KARAKOL)"
s_codes[126] = "ATTAPU|BOKEO|BOLIKHAMXAI|CHAMPASAK|HOUAPHAN|KHAMMOUAN|LOUANGNAMTHA|LOUANGPHABANG|OUDOMXAI|PHONGSALI|SALAVAN|SAVANNAKHET|VIANGCHAN|VIANGCHAN|XAIGNABOULI|XAISOMBOUN|XEKONG|XIANGKHOANG";
s_codes[127] = "AIZKRAUKLES RAJONS|ALUKSNES RAJONS|BALVU RAJONS|BAUSKAS RAJONS|CESU RAJONS|DAUGAVPILS|DAUGAVPILS RAJONS|DOBELES RAJONS|GULBENES RAJONS|JEKABPILS RAJONS|JELGAVA|JELGAVAS RAJONS|JURMALA|KRASLAVAS RAJONS|KULDIGAS RAJONS|LEIPAJA|LIEPAJAS RAJONS|LIMBAZU RAJONS|LUDZAS RAJONS|MADONAS RAJONS|OGRES RAJONS|PREILU RAJONS|REZEKNE|REZEKNES RAJONS|RIGA|RIGAS RAJONS|SALDUS RAJONS|TALSU RAJONS|TUKUMA RAJONS|VALKAS RAJONS|VALMIERAS RAJONS|VENTSPILS|VENTSPILS RAJONS";
s_codes[128] = "BEYROUTH|ECH CHIMAL|EJ JNOUB|EL BEKAA|JABAL LOUBNANE";
s_codes[129] = "BEREA|BUTHA-BUTHE|LERIBE|MAFETENG|MASERU|MOHALES HOEK|MOKHOTLONG|QACHA'S NEK|QUTHING|THABA-TSEKA";
s_codes[130] = "BOMI|BONG|GRAND BASSA|GRAND CAPE MOUNT|GRAND GEDEH|GRAND KRU|LOFA|MARGIBI|MARYLAND|MONTSERRADO|NIMBA|RIVER CESS|SINOE";
s_codes[131] = "AJDABIYA|AL 'AZIZIYAH|AL FATIH|AL JABAL AL AKHDAR|AL JUFRAH|AL KHUMS|AL KUFRAH|AN NUQAT AL KHAMS|ASH SHATI'|AWBARI|AZ ZAWIYAH|BANGHAZI|DARNAH|GHADAMIS|GHARYAN|MISRATAH|MURZUQ|SABHA|SAWFAJJIN|SURT|TARABULUS|TARHUNAH|TUBRUQ|YAFRAN|ZLITAN";
s_codes[132] = "BALZERS|ESCHEN|GAMPRIN|MAUREN|PLANKEN|RUGGELL|SCHAAN|SCHELLENBERG|TRIESEN|TRIESENBERG|VADUZ";
s_codes[133] = "AKMENES RAJONAS|ALYTAUS RAJONAS|ALYTUS|ANYKSCIU RAJONAS|BIRSTONAS|BIRZU RAJONAS|DRUSKININKAI|IGNALINOS RAJONAS|JONAVOS RAJONAS|JONISKIO RAJONAS|JURBARKO RAJONAS|KAISIADORIU RAJONAS|KAUNAS|KAUNO RAJONAS|KEDAINIU RAJONAS|KELMES RAJONAS|KLAIPEDA|KLAIPEDOS RAJONAS|KRETINGOS RAJONAS|KUPISKIO RAJONAS|LAZDIJU RAJONAS|MARIJAMPOLE|MARIJAMPOLES RAJONAS|MAZEIKIU RAJONAS|MOLETU RAJONAS|NERINGA PAKRUOJO RAJONAS|PALANGA|PANEVEZIO RAJONAS|PANEVEZYS|PASVALIO RAJONAS|PLUNGES RAJONAS|PRIENU RAJONAS|RADVILISKIO RAJONAS|RASEINIU RAJONAS|ROKISKIO RAJONAS|SAKIU RAJONAS|SALCININKU RAJONAS|SIAULIAI|SIAULIU RAJONAS|SILALES RAJONAS|SILUTES RAJONAS|SIRVINTU RAJONAS|SKUODO RAJONAS|SVENCIONIU RAJONAS|TAURAGES RAJONAS|TELSIU RAJONAS|TRAKU RAJONAS|UKMERGES RAJONAS|UTENOS RAJONAS|VARENOS RAJONAS|VILKAVISKIO RAJONAS|VILNIAUS RAJONAS|VILNIUS|ZARASU RAJONAS";
s_codes[134] = "DIEKIRCH|GREVENMACHER|LUXEMBOURG";
s_codes[135] = "MACAU";
s_codes[136] = "ARACINOVO|BAC|BELCISTA|BEROVO|BISTRICA|BITOLA|BLATEC|BOGDANCI|BOGOMILA|BOGOVINJE|BOSILOVO|BRVENICA|CAIR (SKOPJE)|CAPARI|CASKA|CEGRANE|CENTAR (SKOPJE)|CENTAR ZUPA|CESINOVO|CUCER-SANDEVO|DEBAR|DELCEVO|DELOGOZDI|DEMIR HISAR|DEMIR KAPIJA|DOBRUSEVO|DOLNA BANJICA|DOLNENI|DORCE PETROV (SKOPJE)|DRUGOVO|DZEPCISTE|GAZI BABA (SKOPJE)|GEVGELIJA|GOSTIVAR|GRADSKO|ILINDEN|IZVOR|JEGUNOVCE|KAMENJANE|KARBINCI|KARPOS (SKOPJE)|KAVADARCI|KICEVO|KISELA VODA (SKOPJE)|KLECEVCE|KOCANI|KONCE|KONDOVO|KONOPISTE|KOSEL|KRATOVO|KRIVA PALANKA|KRIVOGASTANI|KRUSEVO|KUKLIS|KUKURECANI|KUMANOVO|LABUNISTA|LIPKOVO|LOZOVO|LUKOVO|MAKEDONSKA KAMENICA|MAKEDONSKI BROD|MAVROVI ANOVI|MESEISTA|MIRAVCI|MOGILA|MURTINO|NEGOTINO|NEGOTINO-POLOSKA|NOVACI|NOVO SELO|OBLESEVO|OHRID|ORASAC|ORIZARI|OSLOMEJ|PEHCEVO|PETROVEC|PLASNIA|PODARES|PRILEP|PROBISTIP|RADOVIS|RANKOVCE|RESEN|ROSOMAN|ROSTUSA|SAMOKOV|SARAJ|SIPKOVICA|SOPISTE|SOPOTNIKA|SRBINOVO|STAR DOJRAN|STARAVINA|STARO NAGORICANE|STIP|STRUGA|STRUMICA|STUDENICANI|SUTO ORIZARI (SKOPJE)|SVETI NIKOLE|TEARCE|TETOVO|TOPOLCANI|VALANDOVO|VASILEVO|VELES|VELESTA|VEVCANI|VINICA|VITOLISTE|VRANESTICA|VRAPCISTE|VRATNICA|VRUTOK|ZAJAS|ZELENIKOVO|ZILENO|ZITOSE|ZLETOVO|ZRNOVCI";
s_codes[137] = "ANTANANARIVO|ANTSIRANANA|FIANARANTSOA|MAHAJANGA|TOAMASINA|TOLIARA";
s_codes[138] = "BALAKA|BLANTYRE|CHIKWAWA|CHIRADZULU|CHITIPA|DEDZA|DOWA|KARONGA|KASUNGU|LIKOMA|LILONGWE|MACHINGA (KASUPE)|MANGOCHI|MCHINJI|MULANJE|MWANZA|MZIMBA|NKHATA BAY|NKHOTAKOTA|NSANJE|NTCHEU|NTCHISI|PHALOMBE|RUMPHI|SALIMA|THYOLO|ZOMBA";
s_codes[139] = "JOHOR|KEDAH|KELANTAN|LABUAN|MELAKA|NEGERI SEMBILAN|PAHANG|PERAK|PERLIS|PULAU PINANG|SABAH|SARAWAK|SELANGOR|TERENGGANU|WILAYAH PERSEKUTUAN";
s_codes[140] = "ALIFU|BAA|DHAALU|FAAFU|GAAFU ALIFU|GAAFU DHAALU|GNAVIYANI|HAA ALIFU|HAA DHAALU|KAAFU|LAAMU|LHAVIYANI|MAALE|MEEMU|NOONU|RAA|SEENU|SHAVIYANI|THAA|VAAVU";
s_codes[141] = "GAO|KAYES|KIDAL|KOULIKORO|MOPTI|SEGOU|SIKASSO|TOMBOUCTOU";
s_codes[142] = "VALLETTA";
s_codes[143] = "MAN, ISLE OF";
s_codes[144] = "AILINGINAE|AILINGLAPLAP|AILUK|ARNO|AUR|BIKAR|BIKINI|BOKAK|EBON|ENEWETAK|ERIKUB|JABAT|JALUIT|JEMO|KILI|KWAJALEIN|LAE|LIB|LIKIEP|MAJURO|MALOELAP|MEJIT|MILI|NAMORIK|NAMU|RONGELAP|RONGRIK|TOKE|UJAE|UJELANG|UTIRIK|WOTHO|WOTJE";
s_codes[145] = "MARTINIQUE";
s_codes[146] = "ADRAR|ASSABA|BRAKNA|DAKHLET NOUADHIBOU|GORGOL|GUIDIMAKA|HODH ECH CHARGUI|HODH EL GHARBI|INCHIRI|NOUAKCHOTT|TAGANT|TIRIS ZEMMOUR|TRARZA";
s_codes[147] = "AGALEGA ISLANDS|BLACK RIVER|CARGADOS CARAJOS SHOALS|FLACQ|GRAND PORT|MOKA|PAMPLEMOUSSES|PLAINES WILHEMS|PORT LOUIS|RIVIERE DU REMPART|RODRIGUES|SAVANNE";
s_codes[148] = "MAYOTTE";
s_codes[149] = "AGUASCALIENTES|BAJA CALIFORNIA|BAJA CALIFORNIA SUR|CAMPECHE|CHIAPAS|CHIHUAHUA|COAHUILA DE ZARAGOZA|COLIMA|DISTRITO FEDERAL|DURANGO|GUANAJUATO|GUERRERO|HIDALGO|JALISCO|MEXICO|MICHOACAN DE OCAMPO|MORELOS|NAYARIT|NUEVO LEON|OAXACA|PUEBLA|QUERETARO DE ARTEAGA|QUINTANA ROO|SAN LUIS POTOSI|SINALOA|SONORA|TABASCO|TAMAULIPAS|TLAXCALA|VERACRUZ-LLAVE|YUCATAN|ZACATECAS";
s_codes[150] = "CHUUK (TRUK)|KOSRAE|POHNPEI|YAP";
s_codes[151] = "MIDWAY ISLANDS";
s_codes[152] = "BALTI|CAHUL|CHISINAU|CHISINAU|DUBASARI|EDINET|GAGAUZIA|LAPUSNA|ORHEI|SOROCA|TIGHINA|UNGHENI";
s_codes[153] = "FONTVIEILLE|LA CONDAMINE|MONACO-VILLE|MONTE-CARLO";
s_codes[154] = "ARHANGAY|BAYAN-OLGIY|BAYANHONGOR|BULGAN|DARHAN|DORNOD|DORNOGOVI|DUNDGOVI|DZAVHAN|ERDENET|GOVI-ALTAY|HENTIY|HOVD|HOVSGOL|OMNOGOVI|OVORHANGAY|SELENGE|SUHBAATAR|TOV|ULAANBAATAR|UVS";
s_codes[155] = "SAINT ANTHONY|SAINT GEORGES|SAINT PETER'S";
s_codes[156] = "AGADIR|AL HOCEIMA|AZILAL|BEN SLIMANE|BENI MELLAL|BOULEMANE|CASABLANCA|CHAOUEN|EL JADIDA|EL KELAA DES SRARHNA|ER RACHIDIA|ESSAOUIRA|FES|FIGUIG|GUELMIM|IFRANE|KENITRA|KHEMISSET|KHENIFRA|KHOURIBGA|LAAYOUNE|LARACHE|MARRAKECH|MEKNES|NADOR|OUARZAZATE|OUJDA|RABAT-SALE|SAFI|SETTAT|SIDI KACEM|TAN-TAN|TANGER|TAOUNATE|TAROUDANNT|TATA|TAZA|TETOUAN|TIZNIT";
s_codes[157] = "CABO DELGADO|GAZA|INHAMBANE|MANICA|MAPUTO|NAMPULA|NIASSA|SOFALA|TETE|ZAMBEZIA";
s_codes[158] = "CAPRIVI|ERONGO|HARDAP|KARAS|KHOMAS|KUNENE|OHANGWENA|OKAVANGO|OMAHEKE|OMUSATI|OSHANA|OSHIKOTO|OTJOZONDJUPA";
s_codes[159] = "AIWO|ANABAR|ANETAN|ANIBARE|BAITI|BOE|BUADA|DENIGOMODU|EWA|IJUW|MENENG|NIBOK|UABOE|YAREN";
s_codes[160] = "BAGMATI|BHERI|DHAWALAGIRI|GANDAKI|JANAKPUR|KARNALI|KOSI|LUMBINI|MAHAKALI|MECHI|NARAYANI|RAPTI|SAGARMATHA|SETI";
s_codes[161] = "DRENTHE|FLEVOLAND|FRIESLAND|GELDERLAND|GRONINGEN|LIMBURG|NOORD-BRABANT|NOORD-HOLLAND|OVERIJSSEL|UTRECHT|ZEELAND|ZUID-HOLLAND";
s_codes[162] = "NETHERLANDS ANTILLES";
s_codes[163] = "ILES LOYAUTE|NORD|SUD";
s_codes[164] = "AKAROA|AMURI|ASHBURTON|BAY OF ISLANDS|BRUCE|BULLER|CHATHAM ISLANDS|CHEVIOT|CLIFTON|CLUTHA|COOK|DANNEVIRKE|EGMONT|EKETAHUNA|ELLESMERE|ELTHAM|EYRE|FEATHERSTON|FRANKLIN|GOLDEN BAY|GREAT BARRIER ISLAND|GREY|HAURAKI PLAINS|HAWERA|HAWKE'S BAY|HEATHCOTE|HIKURANGI|HOBSON|HOKIANGA|HOROWHENUA|HURUNUI|HUTT|INANGAHUA|INGLEWOOD|KAIKOURA|KAIRANGA|KIWITEA|LAKE|MACKENZIE|MALVERN|MANAIA|MANAWATU|MANGONUI|MANIOTOTO|MARLBOROUGH|MASTERTON|MATAMATA|MOUNT HERBERT|OHINEMURI|OPOTIKI|OROUA|OTAMATEA|OTOROHANGA|OXFORD|PAHIATUA|PAPARUA|PATEA|PIAKO|POHANGINA|RAGLAN|RANGIORA|RANGITIKEI|RODNEY|ROTORUA|RUNANGA|SAINT KILDA|SILVERPEAKS|SOUTHLAND|STEWART ISLAND|STRATFORD|STRATHALLAN|TARANAKI|TAUMARUNUI|TAUPO|TAURANGA|THAMES-COROMANDEL|TUAPEKA|VINCENT|WAIAPU|WAIHEKE|WAIHEMO|WAIKATO|WAIKOHU|WAIMAIRI|WAIMARINO|WAIMATE|WAIMATE WEST|WAIMEA|WAIPA|WAIPAWA|WAIPUKURAU|WAIRARAPA SOUTH|WAIREWA|WAIROA|WAITAKI|WAITOMO|WAITOTARA|WALLACE|WANGANUI|WAVERLEY|WESTLAND|WHAKATANE|WHANGAREI|WHANGAROA|WOODVILLE";
s_codes[165] = "ATLANTICO NORTE|ATLANTICO SUR|BOACO|CARAZO|CHINANDEGA|CHONTALES|ESTELI|GRANADA|JINOTEGA|LEON|MADRIZ|MANAGUA|MASAYA|MATAGALPA|NUEVA SEGOVIA|RIO SAN JUAN|RIVAS";
s_codes[166] = "AGADEZ|DIFFA|DOSSO|MARADI|NIAMEY|TAHOUA|TILLABERI|ZINDER";
s_codes[167] = "ABIA|ABUJA FEDERAL CAPITAL TERRITORY|ADAMAWA|AKWA IBOM|ANAMBRA|BAUCHI|BAYELSA|BENUE|BORNO|CROSS RIVER|DELTA|EBONYI|EDO|EKITI|ENUGU|GOMBE|IMO|JIGAWA|KADUNA|KANO|KATSINA|KEBBI|KOGI|KWARA|LAGOS|NASSARAWA|NIGER|OGUN|ONDO|OSUN|OYO|PLATEAU|RIVERS|SOKOTO|TARABA|YOBE|ZAMFARA";
s_codes[168] = "NIUE";
s_codes[169] = "NORFOLK ISLAND";
s_codes[170] = "NORTHERN ISLANDS|ROTA|SAIPAN|TINIAN";
s_codes[171] = "AKERSHUS|AUST-AGDER|BUSKERUD|FINNMARK|HEDMARK|HORDALAND|MORE OG ROMSDAL|NORD-TRONDELAG|NORDLAND|OPPLAND|OSLO|OSTFOLD|ROGALAND|SOGN OG FJORDANE|SOR-TRONDELAG|TELEMARK|TROMS|VEST-AGDER|VESTFOLD";
s_codes[172] = "AD DAKHILIYAH|AL BATINAH|AL WUSTA|ASH SHARQIYAH|AZ ZAHIRAH|MASQAT|MUSANDAM|ZUFAR";
s_codes[173] = "BALOCHISTAN|FEDERALLY ADMINISTERED TRIBAL AREAS|ISLAMABAD CAPITAL TERRITORY|NORTH-WEST FRONTIER PROVINCE|PUNJAB|SINDH";
s_codes[174] = "AIMELIIK|AIRAI|ANGAUR|HATOBOHEI|KAYANGEL|KOROR|MELEKEOK|NGARAARD|NGARCHELONG|NGARDMAU|NGATPANG|NGCHESAR|NGEREMLENGUI|NGIWAL|PALAU ISLAND|PELELIU|SONSORAL|TOBI";
s_codes[175] = "BOCAS DEL TORO|CHIRIQUI|COCLE|COLON|DARIEN|HERRERA|LOS SANTOS|PANAMA|SAN BLAS|VERAGUAS";
s_codes[176] = "BOUGAINVILLE|CENTRAL|CHIMBU|EAST NEW BRITAIN|EAST SEPIK|EASTERN HIGHLANDS|ENGA|GULF|MADANG|MANUS|MILNE BAY|MOROBE|NATIONAL CAPITAL|NEW IRELAND|NORTHERN|SANDAUN|SOUTHERN HIGHLANDS|WEST NEW BRITAIN|WESTERN|WESTERN HIGHLANDS";
s_codes[177] = "ALTO PARAGUAY|ALTO PARANA|AMAMBAY|ASUNCION (CITY)|BOQUERON|CAAGUAZU|CAAZAPA|CANINDEYU|CENTRAL|CONCEPCION|CORDILLERA|GUAIRA|ITAPUA|MISIONES|NEEMBUCU|PARAGUARI|PRESIDENTE HAYES|SAN PEDRO";
s_codes[178] = "AMAZONAS|ANCASH|APURIMAC|AREQUIPA|AYACUCHO|CAJAMARCA|CALLAO|CUSCO|HUANCAVELICA|HUANUCO|ICA|JUNIN|LA LIBERTAD|LAMBAYEQUE|LIMA|LORETO|MADRE DE DIOS|MOQUEGUA|PASCO|PIURA|PUNO|SAN MARTIN|TACNA|TUMBES|UCAYALI";
s_codes[179] = "ABRA|AGUSAN DEL NORTE|AGUSAN DEL SUR|AKLAN|ALBAY|ANGELES|ANTIQUE|AURORA|BACOLOD|BAGO|BAGUIO|BAIS|BASILAN|BASILAN CITY|BATAAN|BATANES|BATANGAS|BATANGAS CITY|BENGUET|BOHOL|BUKIDNON|BULACAN|BUTUAN|CABANATUAN|CADIZ|CAGAYAN|CAGAYAN DE ORO|CALBAYOG|CALOOCAN|CAMARINES NORTE|CAMARINES SUR|CAMIGUIN|CANLAON|CAPIZ|CATANDUANES|CAVITE|CAVITE CITY|CEBU|CEBU CITY|COTABATO|DAGUPAN|DANAO|DAPITAN|DAVAO CITY DAVAO|DAVAO DEL SUR|DAVAO ORIENTAL|DIPOLOG|DUMAGUETE|EASTERN SAMAR|GENERAL SANTOS|GINGOOG|IFUGAO|ILIGAN|ILOCOS NORTE|ILOCOS SUR|ILOILO|ILOILO CITY|IRIGA|ISABELA|KALINGA-APAYAO|LA CARLOTA|LA UNION|LAGUNA|LANAO DEL NORTE|LANAO DEL SUR|LAOAG|LAPU-LAPU|LEGASPI|LEYTE|LIPA|LUCENA|MAGUINDANAO|MANDAUE|MANILA|MARAWI|MARINDUQUE|MASBATE|MINDORO OCCIDENTAL|MINDORO ORIENTAL|MISAMIS OCCIDENTAL|MISAMIS ORIENTAL|MOUNTAIN|NAGA|NEGROS OCCIDENTAL|NEGROS ORIENTAL|NORTH COTABATO|NORTHERN SAMAR|NUEVA ECIJA|NUEVA VIZCAYA|OLONGAPO|ORMOC|OROQUIETA|OZAMIS|PAGADIAN|PALAWAN|PALAYAN|PAMPANGA|PANGASINAN|PASAY|PUERTO PRINCESA|QUEZON|QUEZON CITY|QUIRINO|RIZAL|ROMBLON|ROXAS|SAMAR|SAN CARLOS (IN NEGROS OCCIDENTAL)|SAN CARLOS (IN PANGASINAN)|SAN JOSE|SAN PABLO|SILAY|SIQUIJOR|SORSOGON|SOUTH COTABATO|SOUTHERN LEYTE|SULTAN KUDARAT|SULU|SURIGAO|SURIGAO DEL NORTE|SURIGAO DEL SUR|TACLOBAN|TAGAYTAY|TAGBILARAN|TANGUB|TARLAC|TAWITAWI|TOLEDO|TRECE MARTIRES|ZAMBALES|ZAMBOANGA|ZAMBOANGA DEL NORTE|ZAMBOANGA DEL SUR";
s_codes[180] = "PITCAIM ISLANDS";
s_codes[181] = "DOLNOSLASKIE|KUJAWSKO-POMORSKIE|LODZKIE|LUBELSKIE|LUBUSKIE|MALOPOLSKIE|MAZOWIECKIE|OPOLSKIE|PODKARPACKIE|PODLASKIE|POMORSKIE|SLASKIE|SWIETOKRZYSKIE|WARMINSKO-MAZURSKIE|WIELKOPOLSKIE|ZACHODNIOPOMORSKIE";
s_codes[182] = "ACORES (AZORES)|AVEIRO|BEJA|BRAGA|BRAGANCA|CASTELO BRANCO|COIMBRA|EVORA|FARO|GUARDA|LEIRIA|LISBOA|MADEIRA|PORTALEGRE|PORTO|SANTAREM|SETUBAL|VIANA DO CASTELO|VILA REAL|VISEU";
s_codes[183] = "ADJUNTAS|AGUADA|AGUADILLA|AGUAS BUENAS|AIBONITO|ANASCO|ARECIBO|ARROYO|BARCELONETA|BARRANQUITAS|BAYAMON|CABO ROJO|CAGUAS|CAMUY|CANOVANAS|CAROLINA|CATANO|CAYEY|CEIBA|CIALES|CIDRA|COAMO|COMERIO|COROZAL|CULEBRA|DORADO|FAJARDO|FLORIDA|GUANICA|GUAYAMA|GUAYANILLA|GUAYNABO|GURABO|HATILLO|HORMIGUEROS|HUMACAO|ISABELA|JAYUYA|JUANA DIAZ|JUNCOS|LAJAS|LARES|LAS MARIAS|LAS PIEDRAS|LOIZA|LUQUILLO|MANATI|MARICAO|MAUNABO|MAYAGUEZ|MOCA|MOROVIS|NAGUABO|NARANJITO|OROCOVIS|PATILLAS|PENUELAS|PONCE|QUEBRADILLAS|RINCON|RIO GRANDE|SABANA GRANDE|SALINAS|SAN GERMAN|SAN JUAN|SAN LORENZO|SAN SEBASTIAN|SANTA ISABEL|TOA ALTA|TOA BAJA|TRUJILLO ALTO|UTUADO|VEGA ALTA|VEGA BAJA|VIEQUES|VILLALBA|YABUCOA|YAUCO";
s_codes[184] = "AD DAWHAH|AL GHUWAYRIYAH|AL JUMAYLIYAH|AL KHAWR|AL WAKRAH|AR RAYYAN|JARAYAN AL BATINAH|MADINAT ASH SHAMAL|UMM SALAL";
s_codes[185] = "REUNION";
s_codes[186] = "ALBA|ARAD|ARGES|BACAU|BIHOR|BISTRITA-NASAUD|BOTOSANI|BRAILA|BRASOV|BUCURESTI|BUZAU|CALARASI|CARAS-SEVERIN|CLUJ|CONSTANTA|COVASNA|DIMBOVITA|DOLJ|GALATI|GIURGIU|GORJ|HARGHITA|HUNEDOARA|IALOMITA|IASI|MARAMURES|MEHEDINTI|MURES|NEAMT|OLT|PRAHOVA|SALAJ|SATU MARE|SIBIU|SUCEAVA|TELEORMAN|TIMIS|TULCEA|VASLUI|VILCEA|VRANCEA";
s_codes[187] = "ADYGEYA (MAYKOP)|AGINSKIY BURYATSKIY (AGINSKOYE)|ALTAY (GORNO-ALTAYSK)|ALTAYSKIY (BARNAUL)|AMURSKAYA (BLAGOVESHCHENSK)|ARKHANGEL'SKAYA|ASTRAKHANSKAYA|BASHKORTOSTAN (UFA)|BELGORODSKAYA|BRYANSKAYA|BURYATIYA (ULAN-UDE)|CHECHNYA (GROZNYY)|CHELYABINSKAYA|CHITINSKAYA|CHUKOTSKIY (ANADYR')|CHUVASHIYA (CHEBOKSARY)|DAGESTAN (MAKHACHKALA)|EVENKIYSKIY (TURA)|INGUSHETIYA (NAZRAN')|IRKUTSKAYA|IVANOVSKAYA|KABARDINO-BALKARIYA (NAL'CHIK)|KALININGRADSKAYA|KALMYKIYA (ELISTA)|KALUZHSKAYA|KAMCHATSKAYA (PETROPAVLOVSK-KAMCHATSKIY)|KARACHAYEVO-CHERKESIYA (CHERKESSK)|KARELIYA (PETROZAVODSK)|KEMEROVSKAYA|KHABAROVSKIY|KHAKASIYA (ABAKAN)|KHANTY-MANSIYSKIY (KHANTY-MANSIYSK)|KIROVSKAYA|KOMI (SYKTYVKAR)|KOMI-PERMYATSKIY (KUDYMKAR)|KORYAKSKIY (PALANA)|KOSTROMSKAYA|KRASNODARSKIY|KRASNOYARSKIY|KURGANSKAYA|KURSKAYA|LENINGRADSKAYA|LIPETSKAYA|MAGADANSKAYA|MARIY-EL (YOSHKAR-OLA)|MORDOVIYA (SARANSK)|MOSKOVSKAYA|MOSKVA (MOSCOW)|MURMANSKAYA|NENETSKIY (NAR'YAN-MAR)|NIZHEGORODSKAYA|NOVGORODSKAYA|NOVOSIBIRSKAYA|OMSKAYA|ORENBURGSKAYA|ORLOVSKAYA (OREL)|PENZENSKAYA|PERMSKAYA|PRIMORSKIY (VLADIVOSTOK)|PSKOVSKAYA|ROSTOVSKAYA|RYAZANSKAYA|SAKHA (YAKUTSK)|SAKHALINSKAYA (YUZHNO-SAKHALINSK)|SAMARSKAYA|SANKT-PETERBURG (SAINT PETERSBURG)|SARATOVSKAYA|SEVERNAYA OSETIYA-ALANIYA [NORTH OSSETIA] (VLADIKAVKAZ)|SMOLENSKAYA|STAVROPOL'SKIY|SVERDLOVSKAYA (YEKATERINBURG)|TAMBOVSKAYA|TATARSTAN (KAZAN')|TAYMYRSKIY (DUDINKA)|TOMSKAYA|TUL'SKAYA|TVERSKAYA|TYUMENSKAYA|TYVA (KYZYL)|UDMURTIYA (IZHEVSK)|UL'YANOVSKAYA|UST'-ORDYNSKIY BURYATSKIY (UST'-ORDYNSKIY)|VLADIMIRSKAYA|VOLGOGRADSKAYA|VOLOGODSKAYA|VORONEZHSKAYA|YAMALO-NENETSKIY (SALEKHARD)|YAROSLAVSKAYA|YEVREYSKAYA";
s_codes[188] = "BUTARE|BYUMBA|CYANGUGU|GIKONGORO|GISENYI|GITARAMA|KIBUNGO|KIBUYE|KIGALI RURALE|KIGALI-VILLE|RUHENGERI|UMUTARA";
s_codes[189] = "ASCENSION|SAINT HELENA|TRISTAN DA CUNHA";
s_codes[190] = "CHRIST CHURCH NICHOLA TOWN|SAINT ANNE SANDY POINT|SAINT GEORGE BASSETERRE|SAINT GEORGE GINGERLAND|SAINT JAMES WINDWARD|SAINT JOHN CAPISTERRE|SAINT JOHN FIGTREE|SAINT MARY CAYON|SAINT PAUL CAPISTERRE|SAINT PAUL CHARLESTOWN|SAINT PETER BASSETERRE|SAINT THOMAS LOWLAND|SAINT THOMAS MIDDLE ISLAND|TRINITY PALMETTO POINT";
s_codes[191] = "ANSE-LA-RAYE|CASTRIES|CHOISEUL|DAUPHIN|DENNERY|GROS ISLET|LABORIE|MICOUD|PRASLIN|SOUFRIERE|VIEUX FORT";
s_codes[192] = "MIQUELON|SAINT PIERRE";
s_codes[193] = "CHARLOTTE|GRENADINES|SAINT ANDREW|SAINT DAVID|SAINT GEORGE|SAINT PATRICK";
s_codes[194] = "A'ANA|AIGA-I-LE-TAI|ATUA|FA'ASALELEAGA|GAGA'EMAUGA|GAGAIFOMAUGA|PALAULI|SATUPA'ITEA|TUAMASAGA|VA'A-O-FONOTI|VAISIGANO";
s_codes[195] = "ACQUAVIVA|BORGO MAGGIORE|CHIESANUOVA|DOMAGNANO|FAETANO|FIORENTINO|MONTE GIARDINO|SAN MARINO|SERRAVALLE";
s_codes[196] = "PRINCIPE|SAO TOME";
s_codes[197] = "'ASIR|AL BAHAH|AL HUDUD ASH SHAMALIYAH|AL JAWF|AL MADINAH|AL QASIM|AR RIYAD|ASH SHARQIYAH (EASTERN PROVINCE)|HA'IL|JIZAN|MAKKAH|NAJRAN|TABUK";
s_codes[198] = "ABERDEEN CITY|ABERDEENSHIRE|ANGUS|ARGYLL AND BUTE|CITY OF EDINBURGH|CLACKMANNANSHIRE|DUMFRIES AND GALLOWAY|DUNDEE CITY|EAST AYRSHIRE|EAST DUNBARTONSHIRE|EAST LOTHIAN|EAST RENFREWSHIRE|EILEAN SIAR (WESTERN ISLES)|FALKIRK|FIFE|GLASGOW CITY|HIGHLAND|INVERCLYDE|MIDLOTHIAN|MORAY|NORTH AYRSHIRE|NORTH LANARKSHIRE|ORKNEY ISLANDS|PERTH AND KINROSS|RENFREWSHIRE|SHETLAND ISLANDS|SOUTH AYRSHIRE|SOUTH LANARKSHIRE|STIRLING|THE SCOTTISH BORDERS|WEST DUNBARTONSHIRE|WEST LOTHIAN";
s_codes[199] = "DAKAR|DIOURBEL|FATICK|KAOLACK|KOLDA|LOUGA|SAINT-LOUIS|TAMBACOUNDA|THIES|ZIGUINCHOR";
s_codes[200] = "ANSE AUX PINS|ANSE BOILEAU|ANSE ETOILE|ANSE LOUIS|ANSE ROYALE|BAIE LAZARE|BAIE SAINTE ANNE|BEAU VALLON|BEL AIR|BEL OMBRE|CASCADE|GLACIS|GRAND' ANSE (ON MAHE)|GRAND' ANSE (ON PRASLIN)|LA DIGUE|LA RIVIERE ANGLAISE|MONT BUXTON|MONT FLEURI|PLAISANCE|POINTE LA RUE|PORT GLAUD|SAINT LOUIS|TAKAMAKA";
s_codes[201] = "EASTERN|NORTHERN|SOUTHERN|WESTERN";
s_codes[202] = "SINGAPORE";
s_codes[203] = "BANSKOBYSTRICKY|BRATISLAVSKY|KOSICKY|NITRIANSKY|PRESOVSKY|TRENCIANSKY|TRNAVSKY|ZILINSKY";
s_codes[204] = "AJDOVSCINA|BELTINCI|BLED|BOHINJ|BOROVNICA|BOVEC|BRDA|BREZICE|BREZOVICA|CANKOVA-TISINA|CELJE|CERKLJE NA GORENJSKEM|CERKNICA|CERKNO|CRENSOVCI|CRNA NA KOROSKEM|CRNOMELJ|DESTRNIK-TRNOVSKA VAS|DIVACA|DOBREPOLJE|DOBROVA-HORJUL-POLHOV GRADEC|DOL PRI LJUBLJANI|DOMZALE|DORNAVA|DRAVOGRAD|DUPLEK|GORENJA VAS-POLJANE|GORISNICA|GORNJA RADGONA|GORNJI GRAD|GORNJI PETROVCI|GROSUPLJE|HODOS SALOVCI|HRASTNIK|HRPELJE-KOZINA|IDRIJA|IG|ILIRSKA BISTRICA|IVANCNA GORICA|IZOLA|JESENICE|JURSINCI|KAMNIK|KANAL|KIDRICEVO|KOBARID|KOBILJE|KOCEVJE|KOMEN|KOPER|KOZJE|KRANJ|KRANJSKA GORA|KRSKO|KUNGOTA|KUZMA|LASKO|LENART|LENDAVA|LITIJA|LJUBLJANA|LJUBNO|LJUTOMER|LOGATEC|LOSKA DOLINA|LOSKI POTOK|LUCE|LUKOVICA|MAJSPERK|MARIBOR|MEDVODE|MENGES|METLIKA|MEZICA|MIREN-KOSTANJEVICA|MISLINJA|MORAVCE|MORAVSKE TOPLICE|MOZIRJE|MURSKA SOBOTA|MUTA|NAKLO|NAZARJE|NOVA GORICA|NOVO MESTO|ODRANCI|ORMOZ|OSILNICA|PESNICA|PIRAN|PIVKA|PODCETRTEK|PODVELKA-RIBNICA|POSTOJNA|PREDDVOR|PTUJ|PUCONCI|RACE-FRAM|RADECE|RADENCI|RADLJE OB DRAVI|RADOVLJICA|RAVNE-PREVALJE|RIBNICA|ROGASEVCI|ROGASKA SLATINA|ROGATEC|RUSE|SEMIC|SENCUR|SENTILJ|SENTJERNEJ|SENTJUR PRI CELJU|SEVNICA|SEZANA|SKOCJAN|SKOFJA LOKA|SKOFLJICA|SLOVENJ GRADEC|SLOVENSKA BISTRICA|SLOVENSKE KONJICE|SMARJE PRI JELSAH|SMARTNO OB PAKI|SOSTANJ|STARSE|STORE|SVETI JURIJ|TOLMIN|TRBOVLJE|TREBNJE|TRZIC|TURNISCE|VELENJE|VELIKE LASCE|VIDEM|VIPAVA|VITANJE|VODICE|VOJNIK|VRHNIKA|VUZENICA|ZAGORJE OB SAVI|ZALEC|ZAVRC|ZELEZNIKI|ZIRI|ZRECE";
s_codes[205] = "BELLONA|CENTRAL|CHOISEUL (LAURU)|GUADALCANAL|HONIARA|ISABEL|MAKIRA|MALAITA|RENNELL|TEMOTU|WESTERN";
s_codes[206] = "AWDAL|BAKOOL|BANAADIR|BARI|BAY|GALGUDUUD|GEDO|HIIRAAN|JUBBADA DHEXE|JUBBADA HOOSE|MUDUG|NUGAAL|SANAAG|SHABEELLAHA DHEXE|SHABEELLAHA HOOSE|SOOL|TOGDHEER|WOQOOYI GALBEED";
s_codes[207] = "EASTERN CAPE|FREE STATE|GAUTENG|KWAZULU-NATAL|MPUMALANGA|NORTH-WEST|NORTHERN CAPE|NORTHERN PROVINCE|WESTERN CAPE";
s_codes[208] = "BIRD ISLAND|BRISTOL ISLAND|CLERKE ROCKS|MONTAGU ISLAND|SAUNDERS ISLAND|SOUTH GEORGIA|SOUTHERN THULE|TRAVERSAY ISLANDS";
s_codes[209] = "ANDALUCIA|ARAGON|ASTURIAS|BALEARES (BALEARIC ISLANDS)|CANARIAS (CANARY ISLANDS)|CANTABRIA|CASTILLA Y LEON|CASTILLA-LA MANCHA|CATALUNA|CEUTA|COMMUNIDAD VALENCIAN|EXTREMADURA|GALICIA|ISLAS CHAFARINAS|LA RIOJA|MADRID|MELILLA|MURCIA|NAVARRA|PAIS VASCO (BASQUE COUNTRY)|PENON DE ALHUCEMAS|PENON DE VELEZ DE LA GOMERA";
s_codes[210] = "SPRATLY ISLANDS";
s_codes[211] = "CENTRAL|EASTERN|NORTH CENTRAL|NORTH EASTERN|NORTH WESTERN|NORTHERN|SABARAGAMUWA|SOUTHERN|UVA|WESTERN";

s_codes[212] = "BROKOPONDO|COMMEWIJNE|CORONIE|MAROWIJNE|NICKERIE|PARA|PARAMARIBO|SARAMACCA|SIPALIWINI|WANICA";
s_codes[213] = "BARENTSOYA|BJORNOYA|EDGEOYA|HOPEN|KVITOYA|NORDAUSTANDET|PRINS KARLS FORLAND|SPITSBERGEN";
s_codes[214] = "HHOHHO|LUBOMBO|MANZINI|SHISELWENI";
s_codes[215] = "BLEKINGE|DALARNAS|GAVLEBORGS|GOTLANDS|HALLANDS|JAMTLANDS|JONKOPINGS|KALMAR|KRONOBERGS|NORRBOTTENS|OREBRO|OSTERGOTLANDS|SKANE|SODERMANLANDS|STOCKHOLMS|UPPSALA|VARMLANDS|VASTERBOTTENS|VASTERNORRLANDS|VASTMANLANDS|VASTRA GOTALANDS";
s_codes[216] = "AARGAU|AUSSER-RHODEN|BASEL-LANDSCHAFT|BASEL-STADT|BERN|FRIBOURG|GENEVE|GLARUS|GRAUBUNDEN|INNER-RHODEN|JURA|LUZERN|NEUCHATEL|NIDWALDEN|OBWALDEN|SANKT GALLEN|SCHAFFHAUSEN|SCHWYZ|SOLOTHURN|THURGAU|TICINO|URI|VALAIS|VAUD|ZUG|ZURICH";

s_codes[217] = "CHANG-HUA|CHI-LUNG|CHIA-I|CHIA-I|CHUNG-HSING-HSIN-TS'UN|HSIN-CHU|HSIN-CHU|HUA-LIEN|I-LAN|KAO-HSIUNG|KAO-HSIUNG|MIAO-LI|NAN-T'OU|P'ENG-HU|P'ING-TUNG|T'AI-CHUNG|T'AI-CHUNG|T'AI-NAN|T'AI-NAN|T'AI-PEI|T'AI-PEI|T'AI-TUNG|T'AO-YUAN|YUN-LIN";
s_codes[218] = "VILOYATI KHATLON|VILOYATI LENINOBOD|VILOYATI MUKHTORI KUHISTONI BADAKHSHON";
s_codes[219] = "ARUSHA|DAR ES SALAAM|DODOMA|IRINGA|KAGERA|KIGOMA|KILIMANJARO|LINDI|MARA|MBEYA|MOROGORO|MTWARA|MWANZA|PEMBA NORTH|PEMBA SOUTH|PWANI|RUKWA|RUVUMA|SHINYANGA|SINGIDA|TABORA|TANGA|ZANZIBAR CENTRAL/SOUTH|ZANZIBAR NORTH|ZANZIBAR URBAN/WEST";
s_codes[220] = "AMNAT CHAROEN|ANG THONG|BURIRAM|CHACHOENGSAO|CHAI NAT|CHAIYAPHUM|CHANTHABURI|CHIANG MAI|CHIANG RAI|CHON BURI|CHUMPHON|KALASIN|KAMPHAENG PHET|KANCHANABURI|KHON KAEN|KRABI|KRUNG THEP MAHANAKHON (BANGKOK)|LAMPANG|LAMPHUN|LOEI|LOP BURI|MAE HONG SON|MAHA SARAKHAM|MUKDAHAN|NAKHON NAYOK|NAKHON PATHOM|NAKHON PHANOM|NAKHON RATCHASIMA|NAKHON SAWAN|NAKHON SI THAMMARAT|NAN|NARATHIWAT|NONG BUA LAMPHU|NONG KHAI|NONTHABURI|PATHUM THANI|PATTANI|PHANGNGA|PHATTHALUNG|PHAYAO|PHETCHABUN|PHETCHABURI|PHICHIT|PHITSANULOK|PHRA NAKHON SI AYUTTHAYA|PHRAE|PHUKET|PRACHIN BURI|PRACHUAP KHIRI KHAN|RANONG|RATCHABURI|RAYONG|ROI ET|SA KAEO|SAKON NAKHON|SAMUT PRAKAN|SAMUT SAKHON|SAMUT SONGKHRAM|SARA BURI|SATUN|SING BURI|SISAKET|SONGKHLA|SUKHOTHAI|SUPHAN BURI|SURAT THANI|SURIN|TAK|TRANG|TRAT|UBON RATCHATHANI|UDON THANI|UTHAI THANI|UTTARADIT|YALA|YASOTHON";
s_codes[221] = "TOBAGO";
s_codes[222] = "DE LA KARA|DES PLATEAUX|DES SAVANES|DU CENTRE|MARITIME";
s_codes[223] = "ATAFU|FAKAOFO|NUKUNONU";
s_codes[224] = "HA'APAI|TONGATAPU|VAVA'U";
s_codes[225] = "ARIMA|CARONI|MAYARO|NARIVA|PORT-OF-SPAIN|SAINT ANDREW|SAINT DAVID|SAINT GEORGE|SAINT PATRICK|SAN FERNANDO|VICTORIA";
s_codes[226] = "ARIANA|BEJA|BEN AROUS|BIZERTE|EL KEF|GABES|GAFSA|JENDOUBA|KAIROUAN|KASSERINE|KEBILI|MAHDIA|MEDENINE|MONASTIR|NABEUL|SFAX|SIDI BOU ZID|SILIANA|SOUSSE|TATAOUINE|TOZEUR|TUNIS|ZAGHOUAN";
s_codes[227] = "ADANA|ADIYAMAN|AFYON|AGRI|AKSARAY|AMASYA|ANKARA|ANTALYA|ARDAHAN|ARTVIN|AYDIN|BALIKESIR|BARTIN|BATMAN|BAYBURT|BILECIK|BINGOL|BITLIS|BOLU|BURDUR|BURSA|CANAKKALE|CANKIRI|CORUM|DENIZLI|DIYARBAKIR|DUZCE|EDIRNE|ELAZIG|ERZINCAN|ERZURUM|ESKISEHIR|GAZIANTEP|GIRESUN|GUMUSHANE|HAKKARI|HATAY|ICEL|IGDIR|ISPARTA|ISTANBUL|IZMIR|KAHRAMANMARAS|KARABUK|KARAMAN|KARS|KASTAMONU|KAYSERI|KILIS|KIRIKKALE|KIRKLARELI|KIRSEHIR|KOCAELI|KONYA|KUTAHYA|MALATYA|MANISA|MARDIN|MUGLA|MUS|NEVSEHIR|NIGDE|ORDU|OSMANIYE|RIZE|SAKARYA|SAMSUN|SANLIURFA|SIIRT|SINOP|SIRNAK|SIVAS|TEKIRDAG|TOKAT|TRABZON|TUNCELI|USAK|VAN|YALOVA|YOZGAT|ZONGULDAK";
s_codes[228] = "AHAL WELAYATY|BALKAN WELAYATY|DASHHOWUZ WELAYATY|LEBAP WELAYATY|MARY WELAYATY";
s_codes[229] = "TUVALU";
s_codes[230] = "ADJUMANI|APAC|ARUA|BUGIRI|BUNDIBUGYO|BUSHENYI|BUSIA|GULU|HOIMA|IGANGA|JINJA|KABALE|KABAROLE|KALANGALA|KAMPALA|KAMULI|KAPCHORWA|KASESE|KATAKWI|KIBALE|KIBOGA|KISORO|KITGUM|KOTIDO|KUMI|LIRA|LUWERO|MASAKA|MASINDI|MBALE|MBARARA|MOROTO|MOYO|MPIGI|MUBENDE|MUKONO|NAKASONGOLA|NEBBI|NTUNGAMO|PALLISA|RAKAI|RUKUNGIRI|SEMBABULE|SOROTI|TORORO";
s_codes[231] = "AVTONOMNA RESPUBLIKA KRYM (SIMFEROPOL')|CHERKAS'KA (CHERKASY)|CHERNIHIVS'KA (CHERNIHIV)|CHERNIVETS'KA (CHERNIVTSI)|DNIPROPETROVS'KA (DNIPROPETROVS'K)|DONETS'KA (DONETS'K)|IVANO-FRANKIVS'KA (IVANO-FRANKIVS'K)|KHARKIVS'KA (KHARKIV)|KHERSONS'KA (KHERSON)|KHMEL'NYTS'KA (KHMEL'NYTS'KYY)|KIROVOHRADS'KA (KIROVOHRAD)|KYYIV|KYYIVS'KA (KIEV)|L'VIVS'KA (L'VIV)|LUHANS'KA (LUHANS'K)|MYKOLAYIVS'KA (MYKOLAYIV)|ODES'KA (ODESA)|POLTAVS'KA (POLTAVA)|RIVNENS'KA (RIVNE)|SEVASTOPOL'|SUMS'KA (SUMY)|TERNOPIL'S'KA (TERNOPIL')|VINNYTS'KA (VINNYTSYA)|VOLYNS'KA (LUTS'K)|ZAKARPATS'KA (UZHHOROD)|ZAPORIZ'KA (ZAPORIZHZHYA)|ZHYTOMYRS'KA (ZHYTOMYR)"
s_codes[232] = "'AJMAN|ABU ZABY (ABU DHABI)|AL FUJAYRAH|ASH SHARIQAH (SHARJAH)|DUBAYY (DUBAI)|RA'S AL KHAYMAH|UMM AL QAYWAYN";
s_codes[233] = "BARKING AND DAGENHAM|BARNET|BARNSLEY|BATH AND NORTH EAST SOMERSET|BEDFORDSHIRE|BEXLEY|BIRMINGHAM|BLACKBURN WITH DARWEN|BLACKPOOL|BOLTON|BOURNEMOUTH|BRACKNELL FOREST|BRADFORD|BRENT|BRIGHTON AND HOVE|BROMLEY|BUCKINGHAMSHIRE|BURY|CALDERDALE|CAMBRIDGESHIRE|CAMDEN|CHESHIRE|CITY OF BRISTOL|CITY OF KINGSTON UPON HULL|CITY OF LONDON|CORNWALL|COVENTRY|CROYDON|CUMBRIA|DARLINGTON|DERBY|DERBYSHIRE|DEVON|DONCASTER|DORSET|DUDLEY|DURHAM|EALING|EAST RIDING OF YORKSHIRE|EAST SUSSEX|ENFIELD|ESSEX|GATESHEAD|GLOUCESTERSHIRE|GREENWICH|HACKNEY|HALTON|HAMMERSMITH AND FULHAM|HAMPSHIRE|HARINGEY|HARROW|HARTLEPOOL|HAVERING|HEREFORDSHIRE|HERTFORDSHIRE|HILLINGDON|HOUNSLOW|ISLE OF WIGHT|ISLINGTON|KENSINGTON AND CHELSEA|KENT|KINGSTON UPON THAMES|KIRKLEES|KNOWSLEY|LAMBETH|LANCASHIRE|LEEDS|LEICESTER|LEICESTERSHIRE|LEWISHAM|LINCOLNSHIRE|LIVERPOOL|LUTON|MANCHESTER|MEDWAY|MERTON|MIDDLESBROUGH|MILTON KEYNES|NEWCASTLE UPON TYNE|NEWHAM|NORFOLK|NORTH EAST LINCOLNSHIRE|NORTH LINCOLNSHIRE|NORTH SOMERSET|NORTH TYNESIDE|NORTH YORKSHIRE|NORTHAMPTONSHIRE|NORTHUMBERLAND|NOTTINGHAM|NOTTINGHAMSHIRE|OLDHAM|OXFORDSHIRE|PETERBOROUGH|PLYMOUTH|POOLE|PORTSMOUTH|READING|REDBRIDGE|REDCAR AND CLEVELAND|RICHMOND UPON THAMES|ROCHDALE|ROTHERHAM|RUTLAND|SALFORD|SANDWELL|SEFTON|SHEFFIELD|SHROPSHIRE|SLOUGH|SOLIHULL|SOMERSET|SOUTH GLOUCESTERSHIRE|SOUTH TYNESIDE|SOUTHAMPTON|SOUTHEND-ON-SEA|SOUTHWARK|ST. HELENS|STAFFORDSHIRE|STOCKPORT|STOCKTON-ON-TEES|STOKE-ON-TRENT|SUFFOLK|SUNDERLAND|SURREY|SUTTON|SWINDON|TAMESIDE|TELFORD AND WREKIN|THURROCK|TORBAY|TOWER HAMLETS|TRAFFORD|WAKEFIELD|WALSALL|WALTHAM FOREST|WANDSWORTH|WARRINGTON|WARWICKSHIRE|WEST BERKSHIRE|WEST SUSSEX|WESTMINSTER|WIGAN|WILTSHIRE|WINDSOR AND MAIDENHEAD|WIRRAL|WOKINGHAM|WOLVERHAMPTON|WORCESTERSHIRE|YORK";
s_codes[234] = "ARTIGAS|CANELONES|CERRO LARGO|COLONIA|DURAZNO|FLORES|FLORIDA|LAVALLEJA|MALDONADO|MONTEVIDEO|PAYSANDU|RIO NEGRO|RIVERA|ROCHA|SALTO|SAN JOSE|SORIANO|TACUAREMBO|TREINTA Y TRES";
s_codes[235] = "AL|AK|AZ|AR|CA|CO|CT|DE|DC|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NB|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY";
s_codes[236] = "ANDIJON WILOYATI|BUKHORO WILOYATI|FARGHONA WILOYATI|JIZZAKH WILOYATI|KHORAZM WILOYATI (URGANCH)|NAMANGAN WILOYATI|NAWOIY WILOYATI|QASHQADARYO WILOYATI (QARSHI)|QORAQALPOGHISTON (NUKUS)|SAMARQAND WILOYATI|SIRDARYO WILOYATI (GULISTON)|SURKHONDARYO WILOYATI (TERMIZ)|TOSHKENT SHAHRI|TOSHKENT WILOYATI";
s_codes[237] = "MALAMPA|PENAMA|SANMA|SHEFA|TAFEA|TORBA";
s_codes[238] = "AMAZONAS|ANZOATEGUI|APURE|ARAGUA|BARINAS|BOLIVAR|CARABOBO|COJEDES|DELTA AMACURO|DEPENDENCIAS FEDERALES|DISTRITO FEDERAL|FALCON|GUARICO|LARA|MERIDA|MIRANDA|MONAGAS|NUEVA ESPARTA|PORTUGUESA|SUCRE|TACHIRA|TRUJILLO|VARGAS|YARACUY|ZULIA";
s_codes[239] = "AN GIANG|BA RIA-VUNG TAU|BAC GIANG|BAC KAN|BAC LIEU|BAC NINH|BEN TRE|BINH DINH|BINH DUONG|BINH PHUOC|BINH THUAN|CA MAU|CAN THO|CAO BANG|DA NANG|DAC LAK|DONG NAI|DONG THAP|GIA LAI|HA GIANG|HA NAM|HA NOI|HA TAY|HA TINH|HAI DUONG|HAI PHONG|HO CHI MINH|HOA BINH|HUNG YEN|KHANH HOA|KIEN GIANG|KON TUM|LAI CHAU|LAM DONG|LANG SON|LAO CAI|LONG AN|NAM DINH|NGHE AN|NINH BINH|NINH THUAN|PHU THO|PHU YEN|QUANG BINH|QUANG NAM|QUANG NGAI|QUANG NINH|QUANG TRI|SOC TRANG|SON LA|TAY NINH|THAI BINH|THAI NGUYEN|THANH HOA|THUA THIEN-HUE|TIEN GIANG|TRA VINH|TUYEN QUANG|VINH LONG|VINH PHUC|YEN BAI";
s_codes[240] = "SAINT CROIX|SAINT JOHN|SAINT THOMAS";
s_codes[241] = "BLAENAU GWENT|BRIDGEND|CAERPHILLY|CARDIFF|CARMARTHENSHIRE|CEREDIGION|CONWY|DENBIGHSHIRE|FLINTSHIRE|GWYNEDD|ISLE OF ANGLESEY|MERTHYR TYDFIL|MONMOUTHSHIRE|NEATH PORT TALBOT|NEWPORT|PEMBROKESHIRE|POWYS|RHONDDA CYNON TAFF|SWANSEA|THE VALE OF GLAMORGAN|TORFAEN|WREXHAM";
s_codes[242] = "ALO|SIGAVE|WALLIS";
s_codes[243] = "WEST BANK";
s_codes[244] = "WESTERN SAHARA";
s_codes[245] = "'ADAN|'ATAQ|ABYAN|AL BAYDA'|AL HUDAYDAH|AL JAWF|AL MAHRAH|AL MAHWIT|DHAMAR|HADHRAMAWT|HAJJAH|IBB|LAHIJ|MA'RIB|SA'DAH|SAN'A'|TA'IZZ";
s_codes[246] = "KOSOVO|MONTENEGRO|SERBIA|VOJVODINA";
s_codes[247] = "CENTRAL|COPPERBELT|EASTERN|LUAPULA|LUSAKA|NORTH-WESTERN|NORTHERN|SOUTHERN|WESTERN";
s_codes[248] = "BULAWAYO|HARARE|MANICALANDMASHONALAND CENTRAL|MASHONALAND EAST|MASHONALAND WEST|MASVINGO|MATABELELAND NORTH|MATABELELAND SOUTH|MIDLANDS";

export const populateCountries = (countryElementId, stateElementId) => {
    // given the id of the <select> tag as function argument, it inserts <option> tags

    var option_str = document.getElementById(countryElementId);

    option_str.length=0;
 //  option_str.options[0] = new Option('Select Country','');
    option_str.selectedIndex = 0;
    for (var i=0; i<country_arr.length; i++) {
        option_str.options[option_str.length] = new Option(country_arr[i],codes_arr[i]);
    }

    //now get local storage
/*
    if(localStorage.getItem('test.country')!=""){
        option_str.selectedIndex = (localStorage.getItem('test.country'));
        var a=country_arr.indexOf(localStorage.getItem('test.country'))-1;
        option_str.selectedIndex=a;
        option_str.selectedIndex++;
        populateStates(countryElementId, stateElementId);
        $.uniform.update();
    }
*/
    // Assigned all countries. Now assign event listener for the states.
    if (stateElementId) {
        option_str.onchange = function() {

            populateStates(countryElementId, stateElementId);
            //setCountry();
           // setState();
            setLegal();

        };
    }
}

function populateStates(countryElementId, stateElementId) {
    var selectedCountryIndex = document.getElementById(countryElementId).selectedIndex;
    var option_str = document.getElementById( stateElementId);
    option_str.length=0;	// Fixed by Julian Woods
    option_str.options[0] = new Option('Select state','');
    option_str.selectedIndex = 0;

    var state_arr = s_a[selectedCountryIndex+1].split("|");
    var state_codes = s_codes[selectedCountryIndex +1].split("|");
    for (var i=0; i<state_arr.length; i++) {
        option_str.options[option_str.length] = new Option(state_arr[i],state_codes[i]);
    }

    /*
    if(localStorage.getItem('test.state')!=""){
        var s = state_arr.indexOf(localStorage.getItem('test.state'));
        option_str.selectedIndex = s;
        option_str.selectedIndex++;
        $.uniform.update();

    }
*/
}

function setLegal(){
    var selectedCountryIndex = document.getElementById('field17').selectedIndex;
    switch(selectedCountryIndex) {
        case 122:
            $('.terms').hide();
            $('#terms_korea').show();
            break;
        case 178:
            $('.terms').hide();
            $('#terms_phillipines').show();
            break;
        case 186:
            $('.terms').hide();
            $('#terms_russia').show();
            break;

        default:
            $('.terms').hide();
            $('#terms_main').show();
    }


}

