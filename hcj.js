


var gaafilee =[
  
  {
    gaa:"1 Garaagarummaa haala qilleensaa fi qilleensa baramaa maaliidha?\n (A) Elementoota walfakkaataa qabachuu\n (B) Garagarummoo Turtiin yeroo isaanii\n (C)Turtiin yeroo isaanii walfakkaachuu\n (D) Hundinuu deebii sirriidha", 
      debii:"b"

  },
  {
  gaa:"2. Afrika bahaa keessatti Qilleensa Baramaa Jiidhaa Ho’aa Mudhii Lafaa kan hin ibsine kami?\n A Rooba wagga guutuu 2000mm aragatu\n B kaabaa fi kibba mudhii lafaattii Degre shan  irratti Argama\n C Dhiibbaa qilleensaa salphaa qaba \n  D Harri viiktooriyaa  guutuu haala qilleensa naannoo kana agarsiisa",
  debii:"d"
  },
  
  {
    gaa: "3. Haala Naannoo Qilleensa Baramaa Baddaa Kan ibsu kami? A Olka’insa Gaarrenii 4800km olitti cibbiitu argama.\n B Roobne fiixee gaarrenii irratti xiqqaachaa adeema\n C Hanga hoo’a Xiqqaa qaba\n D hunduu Deebii ta’uu Danda’u ",
    
    debii:"d"
  },
  {
    gaa:"4 Naannoolee qilleensa baarama Afrikaa bahaa keessaa yeroo goginsaa dheeraa fi Ho’a jiddu-galeessaan waggaatti 30ºC ol kan qabu naannoo kamiidha?\n A Naannoo Qilleensa Baramaa Gammoojjiifi Gammoojjii Ho’aa \n B Naannoo Qilleensa Baramaa Jiidhaa Gogaa \n C Naannoo Qilleensa Baramaa Ho’aa Qarqara Galaanaa \n D Naannoo Qilleensa Baramaa Gogaa Ho’aa",
    debii:"d"

  }, 
  
  {
    gaa:"5 Elementoota Haala Qilleensaafi Qilleensa Baramaa kan ta’e kami?\n A Teempireechara  B Rooba       C Buubbee      D Hunda",
    debii:"d"
  },
  {
    gaa:"6. Too’attoota qabiyyee qilleensa baramaa kan hin taane kami?\n A Dagalee lafaa\n B Ol ka’iinsa lafaa\n C Fageenya qaama bishaana’oorraa bakki tokko qabu.\n  D Aduu",
    debii:"d"

  },
  {
    gaa:"7 Qabeenyi Uumamaa Haaromfamuu(Bakka bu’uu) hin dandeenye isa kami?\n A Albuuda         B Biyyee            C Biqiltuu          D Bishaan",
    debii:"a"

  },
  {
    gaa:"8. Gosoota biyyee afrikaa bahaa fi barbaachisummaan ykn amala isaani sirrii ta’een kan wal qabate  filadhu.\n A Veertiisolsii-Amala Biyyee Suphee qaba\n  B Niitoosolsii-biyyee asiidaawaadha\n C Zeroosolsii-Sababa dhiqama biyyeen, biyyee asiidaawaa ta’edha\n D Akriisolsii-qonnaaf  fayyada",
    debii:"a"
  },
  {
    gaa:"9 Sababoota dhiqama biyyee Uumamaa  kan ta’e isa kami?\n A Bubbee    c  deddebisanii Qotuu\n B Cabbii Sigigaatu    D A fi C",
    debii:"d"
  },
  {
    gaa:"10 Kanneen armaan gadii keessaa tokko qabeenya uumamaa miti?\n A Nama  B Bineensota   C Abaaboowwan   D Konkolaataa",
    debii:"d"
  },
  {
    gaa:"11 Haroowwan Afrikaa Baahaa keessaa kan Ethiopia qofa keessatti argamu isa kami?\n A Viiktooriyaa   B Xaanaa   C Turkaanaa   D  Taangaanikaa",
    debii:"b"

  },
  {
    gaa:"12 Laggeen Afrikaa bahaa armaan gadii keessaa garba guddaa hindiitti kan hin Seenne isa kami?\n A  Gannaalee      B Abbayyaa     C Ruuvmaa     D  Ruufujii",
    debii:"b"

  },
  {
    gaa:"13 Laggeen armaan gadii keessaa kan Gara Kaaba Afrikaa Bahaatti Yaa’un Isaan kami?\n A Naayil Adii   B Takazee         C WaabeShabalee           D A fi B",
    debii:"a"

  },
  {
    gaa:"14. Laggeeen armaan gadii keessaa Itoophiyaa keessatti kan hin argamne isa kami?\n A Xaanaa    B Gannaalee          C Gibee       D Hawaas",
debii:"a"  
},
{
  gaa: "15 Laga Abbayyaafi laga Naayil adiin ---------- keessatti erga walitti makamanii booda laga ---------jedhamu.\n A Jibuutii, Naayil adii   C  Kaartuum,  Naayil  \n        B  Nayroobii,  Naayil         D Kaayroo, Naayil",
debii:"b"
  },
  {
  gaa: "16  Biyoota armaan gadii keessaa Buufata Dooni Kan Hin qabne?\n A Suudaan  B Somaaliyaa   C. Ugaandaa        D Tanzaaniyaa",
debii:"c"
},

{ 
  gaa:"17 Hidha Malkaa Waakkannaa laga kam irraa ijaarame?\n A Fincaa’aa  B Waabii Shaballee  C  Takazee      D. Hawaas",
debii:"b"
  }
  
]
var qabxii = 0;
for(var i = 0; i < gaafilee.length; i++) {
  var deebiiIsaa = window.prompt(gaafilee[i].gaa); 
  if(deebiiIsaa === gaafilee[i].debii) {
    qabxii++;
    alert("Argatteetta!");
  } else {
    alert("Dhabdeetta!");
}  
}
alert(gaafilee.length +  " keessaa "  + qabxii  + " argatteetta!");

 