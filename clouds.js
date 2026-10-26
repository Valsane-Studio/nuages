
// Sources scientifiques : Atlas international des nuages (OMM), Météo-France, NOAA/JetStream.
// Altitudes : étages approximatifs aux latitudes tempérées ; hauteur au-dessus du sol.
window.NUAGES_DATA = [
{
 id:'ci',name:'Cirrus',abbr:'Ci',level:'haut',levels:['haut'],shapes:['filaments'],range:'5 à 13 km',hook:'Des plumes étirées dans le ciel.',tag:'Fins filaments de glace',tone:'indigo',
 files:['Quill-shaped cirrus cloud.jpg','Cloud formation (Cirrus uncinus).jpg'],
 visual:'Filaments blancs, très fins, souvent isolés, étirés en cheveux, en virgules ou en plumes. Leur aspect peut être soyeux, presque translucide.',
 signs:['Leurs extrémités semblent s’effilocher ou former des crochets (« queues de cheval »).','Ils ne présentent pas les bourrelets ronds d’un cumulus.','Ils laissent généralement le ciel bleu très visible entre leurs filaments.'],
 contrast:'Un cirrostratus forme un voile continu ; un cirrus garde des fibres ou des bandes distinctes.',
 weather:'Souvent compatibles avec du beau temps au moment de l’observation. S’ils augmentent, s’épaississent et progressent vers un voile de cirrostratus, ils peuvent annoncer l’approche d’un système frontal.',
 stability:'La formation dépend de l’humidité et des mouvements d’air en altitude. Leur seule présence ne suffit pas à conclure sur la stabilité près du sol.',
 temp:'Air généralement bien sous 0 °C ; souvent entre −20 et −60 °C selon altitude et latitude. Ce sont des ordres de grandeur, pas un thermomètre visuel.',
 physics:'Des cristaux de glace se forment lorsque l’air de haute troposphère devient saturé vis-à-vis de la glace. En tombant et en étant déformés par le vent, ils dessinent les traînées effilées.',
 phase:'Essentiellement cristaux de glace',
 where:'Toutes les régions du monde ; plus hauts dans les tropiques et plus bas vers les pôles. Fréquents dans les flux rapides d’altitude, à proximité de fronts ou en restes d’enclumes orageuses.',
 variant:'Cirrus uncinus : crochet terminal caractéristique. Cirrus fibratus : filaments plutôt droits.',
 sources:['https://cloudatlas.wmo.int/en/cirrus-ci.html','https://www.noaa.gov/jetstream/clouds/ten-basic-clouds']
},
{
 id:'cc',name:'Cirrocumulus',abbr:'Cc',level:'haut',levels:['haut'],shapes:['grains','bancs'],range:'5 à 13 km',hook:'De minuscules grains, comme des écailles.',tag:'Petits moutons très hauts',tone:'blue',
 files:['Cirrocumulus clouds Langley.jpg','Cirrocumulus at Tallinn.JPG'],
 visual:'Petits grains ou rides blancs, presque sans ombres, regroupés en nappes régulières : le fameux « ciel pommelé » très fin.',
 signs:['À bout de bras, chaque petit élément mesure généralement moins que la largeur d’un petit doigt (environ 1°).','Les grains paraissent plus petits et souvent plus lumineux que ceux des altocumulus.','Ils peuvent dessiner de petites ondulations ou des rangées parallèles.'],
 contrast:'L’altocumulus présente des éléments généralement plus gros, souvent ombrés ; la taille apparente des éléments est un indice plus fiable que la seule couleur.',
 weather:'Pas de précipitation atteignant le sol. Ils signalent de l’humidité et parfois de faibles mouvements ondulatoires ou instabilités dans les couches élevées ; pas de prévision à eux seuls.',
 stability:'Légère instabilité ou ondes dans une couche mince et élevée ; le temps près du sol peut rester parfaitement calme.',
 temp:'Air généralement très froid, nettement sous 0 °C. La valeur exacte varie fortement selon latitude et altitude.',
 physics:'L’humidité atteint la saturation dans une couche froide de haute altitude ; les éléments se composent surtout de cristaux de glace. Leur dessin en petits grains résulte de mouvements locaux et d’ondes.',
 phase:'Principalement cristaux de glace ; gouttelettes surfondues possibles',
 where:'Rencontrés dans le monde entier, souvent près d’autres nuages élevés. Les ondulations se voient lorsque des ondes parcourent une couche atmosphérique humide.',
 variant:'Cirrocumulus stratiformis : plage étendue de petits éléments. Undulatus : fines ondulations parallèles.',
 sources:['https://cloudatlas.wmo.int/en/cirrocumulus-cc.html','https://www.noaa.gov/jetstream/clouds/ten-basic-clouds']
},
{
 id:'cs',name:'Cirrostratus',abbr:'Cs',level:'haut',levels:['haut'],shapes:['voile','couche'],range:'5 à 13 km',hook:'Un voile laiteux ; parfois un halo autour du Soleil.',tag:'Voile de glace',tone:'blue',
 files:['Cirrostratus fibratus with 22 degrees halo.jpg','2024-03-01 - Cirrostratus - halo (22 deg) centered on sun - DSN2151-1.jpg'],
 visual:'Voile blanc très fin, uniforme ou à fibres délicates, qui couvre parfois tout le ciel. Le Soleil reste visible, et peut être entouré d’un cercle lumineux.',
 signs:['Cherchez un halo circulaire de 22° autour du Soleil ou de la Lune (sans regarder directement le Soleil).','Le voile est assez mince pour laisser souvent subsister les ombres au sol.','Il n’y a pas de gros éléments ronds distincts.'],
 contrast:'L’altostratus rend le Soleil flou, comme derrière un verre dépoli, et ne donne habituellement pas de halo de 22°.',
 weather:'Son extension progressive peut précéder l’arrivée d’un front chaud et une dégradation, notamment lorsqu’il s’épaissit ensuite en altostratus. Pas de certitude ni de délai fixe.',
 stability:'Une vaste couche d’air humide s’élève souvent lentement et de façon étendue ; cela évoque une dynamique stratiforme plutôt que des ascendances orageuses locales.',
 temp:'Air généralement très froid, bien sous 0 °C. Les halos sont causés par des cristaux de glace, non par un niveau de température précis.',
 physics:'Des cristaux de glace en suspension créent un voile assez étendu. Les halos naissent de la réfraction de la lumière dans leurs faces hexagonales ; tous les cirrostratus ne forment pas un halo visible.',
 phase:'Cristaux de glace',
 where:'Toutes latitudes, au-dessus de vastes régions humides de la haute troposphère ; fréquent à l’avant de perturbations à grande échelle.',
 variant:'Cirrostratus nebulosus : voile presque homogène. Fibratus : structure délicatement fibreuse.',
 sources:['https://cloudatlas.wmo.int/en/cirrostratus-cs.html','https://www.noaa.gov/jetstream/clouds/ten-basic-clouds']
},
{
 id:'ac',name:'Altocumulus',abbr:'Ac',level:'moyen',levels:['moyen'],shapes:['grains','bancs','amas'],range:'2 à 7 km',hook:'Des moutons plus gros, avec des ombres.',tag:'Bancs et rouleaux',tone:'blue',
 files:['Altocumulus Galley Common 26 April 2022 03.jpg','Altocumulus fields.jpg'],
 visual:'Plaques, rouleaux ou petits amas blancs et gris, souvent alignés ou séparés par des trouées de ciel. Les éléments sont souvent nettement ombrés.',
 signs:['À bout de bras, les éléments ont souvent la largeur d’un à trois doigts (environ 1 à 5°).','Des volumes individuels sont visibles, mais ils ne partent pas du sol comme de gros cumulus.','Les nappes peuvent former des vagues, des rangées ou des « dalles ».'],
 contrast:'Plus gros que les cirrocumulus, mais plus petits en apparence que les vastes rouleaux des stratocumulus bas.',
 weather:'Souvent sans pluie au sol. Certains altocumulus en petites tours (castellanus), notamment le matin, peuvent témoigner d’une instabilité en altitude et précéder des averses ou orages si d’autres conditions sont réunies.',
 stability:'Variables : bancs réguliers associés à des couches assez stables ; excroissances en tourelles liées à une instabilité dans les étages moyens.',
 temp:'Peut se trouver au-dessus comme au-dessous de 0 °C ; les gouttelettes peuvent rester liquides en état de surfusion.',
 physics:'Une couche d’air humide est soulevée ou parcourue d’ondes. Les gouttelettes dominent souvent, avec parfois des cristaux de glace, selon la température et l’évolution du nuage.',
 phase:'Gouttelettes d’eau ; parfois mélange eau surfondue et glace',
 where:'Très courants aux latitudes tempérées ; également présents sous les tropiques. Les formes lenticulaires apparaissent notamment sous le vent des reliefs, où l’air ondule.',
 variant:'Altocumulus lenticularis : lentille fixe près des reliefs. Castellanus : petites tourelles indiquant de la convection en altitude.',
 sources:['https://cloudatlas.wmo.int/en/altocumulus-ac.html','https://www.noaa.gov/jetstream/clouds/ten-basic-clouds']
},
{
 id:'as',name:'Altostratus',abbr:'As',level:'moyen',levels:['moyen','haut'],shapes:['voile','couche'],range:'2 à 7 km (peut s’étendre plus haut)',hook:'Une couverture grise, soleil en tache floue.',tag:'Couche grise étendue',tone:'slate',
 files:['Altostratus translucidus undulatus.jpg','Altostratus translucidus.jpg'],
 visual:'Grande nappe grise ou bleu-gris, d’aspect assez uniforme, parfois légèrement striée. Le Soleil peut apparaître comme une tache diffuse derrière la couche.',
 signs:['Couverture étendue, peu de reliefs ou de bourrelets visibles.','L’ombre nette des objets au sol disparaît généralement.','Si le Soleil est visible, son contour est brouillé plutôt que net.'],
 contrast:'Le cirrostratus est plus transparent et produit souvent des halos ; le nimbostratus est généralement plus épais et apporte des précipitations durables.',
 weather:'Peut annoncer ou accompagner une perturbation et évoluer en nimbostratus, avec pluie ou neige continues. Il ne donne pas nécessairement de précipitation atteignant le sol.',
 stability:'Ascendance lente et étendue d’air humide, généralement dans une structure stratiforme relativement stable à grande échelle.',
 temp:'Température variable dans son épaisseur : gouttelettes, eau surfondue et cristaux de glace peuvent coexister.',
 physics:'Quand une couche épaisse et vaste d’air humide est soulevée progressivement, le refroidissement favorise condensation et formation de glace. Des précipitations peuvent s’évaporer avant le sol (virga).',
 phase:'Gouttelettes d’eau, eau surfondue et cristaux de glace',
 where:'Fréquent aux latitudes tempérées lors des systèmes frontaux, mais possible partout où se produisent de larges mouvements ascendants.',
 variant:'Altostratus translucidus : disque solaire deviné ; opacus : Soleil totalement masqué.',
 sources:['https://cloudatlas.wmo.int/en/altostratus-as.html','https://www.noaa.gov/jetstream/clouds/ten-basic-clouds']
},
{
 id:'ns',name:'Nimbostratus',abbr:'Ns',level:'moyen',levels:['bas','moyen','haut'],shapes:['couche'],range:'Base souvent basse, grande épaisseur verticale',hook:'Le grand ciel gris de la pluie durable.',tag:'Pluie ou neige étendue',tone:'slate',
 files:['Nimbostratus clouds.jpg'],
 visual:'Couche immense, sombre et épaisse, gris ardoise, aux contours peu lisibles. Sous sa base, de petites déchirures sombres peuvent être visibles.',
 signs:['Le Soleil disparaît derrière une masse épaisse.','Les précipitations tendent à être étendues et durables plutôt que brèves et localisées.','Pas de sommet en chou-fleur ni d’enclume identifiable.'],
 contrast:'Contrairement au cumulonimbus, il n’a pas la silhouette de tour convective ; contrairement à l’altostratus, il est associé à des précipitations plus persistantes.',
 weather:'Typique des épisodes de pluie ou neige continues sur une grande région, parfois faibles à modérées, parfois soutenues. Peu associé à l’activité électrique.',
 stability:'Forte extension horizontale et soulèvement d’ensemble ; l’orage exige une convection profonde qui n’est pas sa signature habituelle.',
 temp:'Très variable sur toute l’épaisseur : la température au sol et le profil thermique déterminent en grande partie si la précipitation sera pluie, neige ou mélange.',
 physics:'Nuage profond qui peut traverser plusieurs étages. La croissance des gouttes et des cristaux conduit à des précipitations durables. La base est souvent masquée par des fractus humides.',
 phase:'Mélange de gouttes d’eau, eau surfondue et cristaux de glace',
 where:'Particulièrement familier lors des perturbations étendues des moyennes latitudes ; existe aussi dans d’autres climats humides.',
 variant:'Sous le nimbostratus, les « pannus » sont des lambeaux sombres et bas, entraînés sous la couche principale.',
 sources:['https://cloudatlas.wmo.int/en/nimbostratus-ns.html','https://www.noaa.gov/jetstream/clouds/ten-basic-clouds']
},
{
 id:'sc',name:'Stratocumulus',abbr:'Sc',level:'bas',levels:['bas'],shapes:['bancs','amas'],range:'0 à 2 km',hook:'De grands rouleaux bas, souvent jointifs.',tag:'Bancs bas à larges éléments',tone:'slate',
 files:['Stratocumulus clouds.png','Stratocumulus clouds, Стартокумулус облак.JPG'],
 visual:'Ensemble de grosses masses ou rouleaux gris et blancs, souvent organisés en couche, avec des parties sombres et des trouées.',
 signs:['Les éléments paraissent gros : plusieurs doigts, voire une main à bout de bras.','Leur base est relativement basse, avec des rouleaux aplatis.','Plusieurs volumes semblent reliés en une nappe quasi continue.'],
 contrast:'L’altocumulus a des éléments visuellement plus petits et généralement plus hauts ; le stratus ne possède presque pas de structure en rouleaux.',
 weather:'Souvent nuage de temps calme ou gris, avec peu ou pas de pluie. Parfois bruine ou faibles précipitations ; ne signifie pas automatiquement mauvais temps.',
 stability:'Souvent associé à un air humide brassé dans les basses couches mais coiffé d’une inversion qui limite la montée verticale.',
 temp:'Très liée à la température de la basse atmosphère ; peut être positive ou négative selon saison et climat.',
 physics:'La turbulence et de faibles mouvements verticaux fabriquent des volumes arrondis, tandis qu’une couche stable au-dessus freine leur croissance.',
 phase:'Gouttelettes d’eau, parfois gouttelettes surfondues',
 where:'Très commun au-dessus des océans et des régions tempérées, notamment dans des couches marines humides sous inversion.',
 variant:'Stratocumulus stratiformis : champ étendu de rouleaux. Lacunosus : aspect alvéolé ou troué.',
 sources:['https://cloudatlas.wmo.int/en/stratocumulus-sc.html','https://www.noaa.gov/jetstream/clouds/ten-basic-clouds']
},
{
 id:'st',name:'Stratus',abbr:'St',level:'bas',levels:['bas'],shapes:['couche','voile'],range:'Du sol à ~2 km',hook:'Un plafond très bas, proche du brouillard.',tag:'Plafond uniforme',tone:'slate',
 files:['Stratus clouds.jpg','Stratus clouds covering the whole sky.jpg'],
 visual:'Couverture uniforme blanche à gris foncé, très basse, sans bourrelets nets. Les collines peuvent disparaître derrière un plafond de nuages.',
 signs:['Pas de grosses boules, vagues ou tourelles : aspect plat et homogène.','Base souvent très basse et parfois en contact avec les reliefs.','Un brouillard qui se soulève du sol devient une couche de stratus.'],
 contrast:'Le stratocumulus a des rouleaux ou bosses visibles ; l’altostratus siège plus haut et paraît généralement moins proche du sol.',
 weather:'Souvent associé à une journée grise, à du brouillard ou de la bruine. Les précipitations sont faibles ou absentes.',
 stability:'Signature fréquente d’une basse couche humide et stable, notamment lorsqu’une inversion de température piège l’humidité.',
 temp:'Proche de la température de l’air dans les basses couches ; peut être sous ou au-dessus de 0 °C.',
 physics:'Refroidissement de l’air humide près du sol, advection sur une surface froide ou soulèvement léger jusqu’à saturation. Le nuage peut être simplement du brouillard détaché du sol.',
 phase:'Principalement gouttelettes d’eau ; surfusion possible par temps froid',
 where:'Fréquent dans les vallées, près des mers et dans les plaines humides, souvent le matin, en automne ou en hiver sous inversion.',
 variant:'Stratus nebulosus : nappe uniforme. Fractus : lambeaux bas et irréguliers.',
 sources:['https://cloudatlas.wmo.int/en/stratus-st.html','https://www.noaa.gov/jetstream/clouds/ten-basic-clouds']
},
{
 id:'cu',name:'Cumulus',abbr:'Cu',level:'vertical',levels:['bas','moyen'],shapes:['amas','tours'],range:'Base souvent sous 2 km, sommet variable',hook:'Des choux-fleurs à la base plate.',tag:'Amas isolés, base horizontale',tone:'blue',
 files:['Cumulus-humilis.jpg','Cumulus humilis clouds.jpg'],
 visual:'Nuages isolés, blancs et gonflés, en dômes aux contours nets. Leur base est souvent plate et grisâtre tandis que le sommet ressemble à un chou-fleur.',
 signs:['Repérez la base horizontale commune aux petits amas du même étage.','Les contours ensoleillés sont francs, non fibreux.','Surveillez le développement : de petits cumulus aplatis peuvent devenir de hautes tours.'],
 contrast:'Un cumulus a une silhouette individualisée ; un stratocumulus forme plutôt des bancs reliés. Un cumulonimbus possède un développement beaucoup plus important et peut former une enclume.',
 weather:'Les petits cumulus humilis accompagnent souvent un temps agréable. Si la convection s’intensifie vers congestus, des averses peuvent apparaître, puis parfois un orage.',
 stability:'Produit par des ascendances thermiques : l’air monte parce qu’il est localement plus chaud ou moins dense. La croissance est arrêtée ou favorisée selon la stabilité en altitude.',
 temp:'Base parfois relativement douce, sommet nettement plus froid ; la température dépend de la hauteur et du climat.',
 physics:'Le Soleil ou une surface chaude favorise des bulles d’air ascendant. Leur refroidissement jusqu’au point de rosée fait condenser la vapeur ; la base plate matérialise souvent un niveau de condensation commun.',
 phase:'Principalement gouttelettes d’eau ; glace possible dans les développements importants',
 where:'Très courant au-dessus des terres lors des après-midi ensoleillés ; aussi au-dessus de mers et reliefs. Les montagnes peuvent renforcer les ascendances.',
 variant:'Humilis : peu épais, « beau temps ». Mediocris : moyen. Congestus : tour élevée, averses possibles.',
 sources:['https://cloudatlas.wmo.int/en/cumulus-cu.html','https://www.noaa.gov/jetstream/clouds/ten-basic-clouds']
},
{
 id:'cb',name:'Cumulonimbus',abbr:'Cb',level:'vertical',levels:['bas','moyen','haut'],shapes:['tours','amas'],range:'Base souvent basse ; sommet jusqu’à la tropopause',hook:'La montagne d’orage, parfois en enclume.',tag:'Développement vertical extrême',tone:'storm',
 files:['CumuloNimbus Anvil.jpg'],
 visual:'Enorme tour convective, parfois en chou-fleur à la base et sommet étalé en enclume. Sous le nuage, une base sombre et des rideaux de pluie peuvent masquer la structure.',
 signs:['Une forte croissance verticale : c’est une montagne nuageuse, pas une couche plate.','Le sommet fibreux s’évase souvent horizontalement en « enclume ».','Éclairs, tonnerre, fortes averses ou grêle signalent un cumulonimbus, même si toute sa silhouette n’est pas visible.'],
 contrast:'Un cumulus congestus peut être très haut mais n’a pas encore la structure glacée caractéristique d’un cumulonimbus mature ; le nimbostratus donne une pluie plus étendue et régulière sans tour convective.',
 weather:'Orages, éclairs, averses parfois intenses, rafales, grêle et parfois phénomènes violents. En présence de tonnerre, il faut chercher un abri sûr sans attendre.',
 stability:'Convection profonde : une couche d’air instable, de l’humidité et un mécanisme de soulèvement permettent une ascendance vigoureuse. Les cisaillements modifient sa forme et sa durée.',
 temp:'Très variable verticalement : base parfois chaude, sommet très froid, pouvant descendre sous −50 °C. Pas de température unique du nuage.',
 physics:'De puissantes ascendances transportent gouttes et cristaux sur des kilomètres. La glace domine les sommets ; les collisions et la séparation de charges participent à l’électrification. L’enclume apparaît lorsque l’ascendance s’étale près de la tropopause.',
 phase:'Gouttelettes, eau surfondue, cristaux de glace, graupel et parfois grêle',
 where:'Possible à toutes les latitudes, particulièrement fréquent dans les tropiques humides, lors des chaudes journées instables et près des fronts ; renforcé localement par les reliefs.',
 variant:'Calvus : sommet encore peu fibreux. Capillatus / incus : sommet fibreux et souvent en enclume. Mamma / arcus : particularités possibles.',
 sources:['https://cloudatlas.wmo.int/en/cumulonimbus-cb.html','https://www.noaa.gov/jetstream/clouds/ten-basic-clouds']
}
];


// Sélection de photographies de nuages identifiées dans les catégories Wikimedia Commons.
// Ces fichiers sont intégrés au catalogue pour rester disponibles même si la recherche dynamique échoue.
window.NUAGES_CURATED_PHOTOS={
  "ci": [
    "Cirrus Clouds 01.jpg",
    "Cirrus clouds 011.jpg",
    "Cirrus uncinus.jpg",
    "Cirrus floccus and uncinus.jpg",
    "Cirrus uncinus und Cirrus fibratus.jpg"
  ],
  "cc": [
    "Cirrocumulus Clouds 01.jpg",
    "Cirrocumulus Clouds 02.jpg",
    "Cirrocumulus Clouds 03.jpg"
  ],
  "cs": [
    "(139) Cirrostratus.jpg",
    "2014-12-09 15 06 39 High cirrostratus clouds moving into Elko, Nevada.JPG",
    "2024-07-15 20 39 59 Cirrostratus clouds just after sunset viewed from Aquetong Lane in the Mountainview section of Ewing Township, Mercer County, New Jersey.jpg",
    "2016-03-03 14 44 48 Cirrostratus and altostratus clouds moving in ahead of a storm system in Sterling, Virginia.jpg"
  ],
  "ac": [
    "Altocumulus Clouds.jpg",
    "Altocumulus Mackerel Sky.jpg",
    "Altocumulus clouds10 - NOAA.jpg",
    "Altocumulus stratiformis translucidus perlucidus.jpg"
  ],
  "as": [
    "Altostratus Clouds 1.jpg",
    "Altostratus Clouds 2.jpg",
    "Altostratus Clouds 3.jpg",
    "Altostratus Clouds 8.jpg"
  ],
  "ns": [
    "Nimbostratus 01.jpg",
    "Nimbostratus pannus.jpg",
    "Nimbostratus praecipitatio.JPG",
    "Nimbostratus over Tallinn.JPG"
  ],
  "sc": [
    "Stratocumulus Cloud 01.jpg",
    "Stratocumulus Cloud 03.jpg",
    "Stratocumulus Cloud 05.jpg",
    "Stratocumulus Cloud 08.jpg",
    "Stratocumulus Cloud 10.jpg"
  ],
  "st": [
    "Stratus cloud.jpg",
    "Stratus nebulosus in Limburg, Panorama.jpg",
    "Stratus nebulosus opacus and Stratus fractus (14122021).jpg",
    "High Stratus nebulosus.jpg",
    "Stratus nebulosus über Limburg, 25.11.2020.jpg"
  ],
  "cu": [
    "Cumulus Clouds 1.jpg",
    "Cumulus Clouds 3.jpg",
    "Cumulus Humilis Clouds 1.jpg",
    "Cumulus congestus Clouds 1.jpg",
    "Cumulus Humilis Clouds 10.jpg"
  ],
  "cb": [
    "Cumulonimbus Clouds 1.jpg",
    "Cb calvus 1.jpg",
    "Cumulonimbus capillatus 1.jpg",
    "Cumulonimbus capillatus incus anvil cloud.jpg",
    "Cumulonimbus capillatus in Lorraine, France.jpg"
  ]
};
