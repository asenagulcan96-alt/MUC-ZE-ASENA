import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Moon, 
  Sparkles, 
  Wind, 
  Leaf, 
  Heart, 
  Hash, 
  ChevronRight, 
  Menu, 
  X,
  Compass,
  Sun,
  Zap,
  Smile,
  Calendar
} from 'lucide-react';

// --- Types ---
type Category = 'affirmations' | 'access' | 'chakras' | 'ancestors' | 'hooponopono' | 'grabovoi' | 'breathing' | 'moods';

interface ContentSection {
  id: Category;
  title: string;
  icon: React.ReactNode;
  intro: string;
  guide: string[];
  mainContent: {
    subtitle: string;
    items: string[] | { label: string; text: string }[];
  }[];
  closing: string;
}

// --- Content Data ---
const content: ContentSection[] = [
  {
    id: 'affirmations',
    title: 'Olumlama & Bilinçaltı',
    icon: <Moon className="w-6 h-6" />,
    intro: 'Ruhun en derin katmanlarına işleyen, evrenin frekansıyla rezonansa giren kutsal sözler. "Ben"in sonsuz gücünü hatırlatan, her tekrarda bilinçaltını yeniden yaratan cümleler.',
    guide: [
      'Sessiz bir alana geçin ve üç derin nefes alın.',
      'Her cümleyi kalbinizden hissederek, şimdiki zamanda yaşanıyormuş gibi okuyun.',
      'Günde en az 21 gün boyunca sabah ve akşam tekrarlayın.'
    ],
    mainContent: [
      {
        subtitle: 'Para & Bolluk',
        items: [
          'Ben paranın mıknatısıyım; evrenin sonsuz zenginliği bana her yönden akıyor.',
          'Bolluk benim doğal halimdir ve ben bu akışı sevgiyle kabul ediyorum.',
          'Harcadığım her kuruş bana katlanarak geri döner.'
        ]
      },
      {
        subtitle: 'Şifa & Sağlık',
        items: [
          'Bedenimdeki her hücre ilahi ışıkla yıkanıyor ve kusursuz sağlığına kavuşuyor.',
          'Ben şifanın ta kendisiyim; ruhum, zihnim ve bedenim tam bir uyum içinde.',
          'Yaşam enerjisi içimde özgürce ve coşkuyla akıyor.'
        ]
      },
      {
        subtitle: 'Aşk & İlişkiler',
        items: [
          'Ben sevilmeye değerim ve hayatıma en yüce hayrıma olan ruhsal eşimi çekiyorum.',
          'İlişkilerimde sevgi, saygı ve anlayış hakimdir.',
          'Kalbim sevgiye sonuna kadar açık.'
        ]
      },
      {
        subtitle: 'Özgüven',
        items: [
          'Ben eşsizim ve varlığım bu dünya için bir hediyediz.',
          'Kendi gücüme güveniyorum ve her adımımı cesaretle atıyorum.',
          'Olduğum halimle tam ve yeterliyim.'
        ]
      }
    ],
    closing: 'Varlığımın ışığına şükürler olsun. Oldu, oldu, oldu.'
  },
  {
    id: 'access',
    title: 'Access Bars Soruları',
    icon: <Sparkles className="w-6 h-6" />,
    intro: 'Zihnin kilitlerini çözen, sınırlayıcı enerji örüntülerini dağıtan kutsal sorular. Her soru bir kapı; okuyucu o kapıdan geçerken ne taşıdığını bırakabilsin.',
    guide: [
      'Soruları cevap aramadan sorun; sadece enerjinin açılmasına izin verin.',
      'Zihniniz cevap vermeye çalıştığında "Bundan daha iyi nasıl olur?" diyerek alanı genişletin.',
      'Soruyu sorun ve evrenin size fısıldamasını bekleyin.'
    ],
    mainContent: [
      {
        subtitle: 'Para & Finans',
        items: [
          'Bugün paranın bana neşeyle gelmesi için hangi alanlarda genişleyebilirim?',
          'Parayla ilgili tüm bakış açılarımı yıksaydım, hangi sonsuz olasılıklar açılırdı?',
          'Cüzdanımda her zaman beklediğimden daha fazla paranın olması için ne gerekir?',
          'Paranın bana akmasına engel olan hangi tanımlara tutunuyorum?',
          'Zenginliğin benim için güvenli olması için hangi enerjide olmalıyım?'
        ]
      },
      {
        subtitle: 'İlişkiler',
        items: [
          'İlişkilerimde kendimi olduğum gibi ifade etmem için ne gerekir?',
          'Başkalarının yargılarından özgürleşseydim, kim olurdum?',
          'Hayatıma katkı dolu ve neşeli insanları çekmem için hangi davetiye olmalıyım?',
          'İlişkilerimde kontrolü bırakıp teslimiyete geçmem için neler mümkün?',
          'Sevginin en saf halini deneyimlememe engel olan her şeyi yıkıp yaratımını iptal eder miyim?'
        ]
      },
      {
        subtitle: 'Beden & Sağlık',
        items: [
          'Bedenimle daha fazla uyum içinde olmam için ne gerekir?',
          'Bedenimin bana fısıldadığı hangi mesajları görmezden geliyorum?',
          'Bedenimin mucizevi şifa kapasitesini açığa çıkarması için hangi enerjide olmalıyım?',
          'Bedenimi yargılamayı bıraksaydım, hayatım nasıl değişirdi?',
          'Bugün bedenime hangi hediyeyi verebilirim?'
        ]
      },
      {
        subtitle: 'Yaratıcılık & Kontrol',
        items: [
          'Kontrol etme ihtiyacımı bıraksaydım, hayatımda hangi neşe açığa çıkardı?',
          'Yaratıcılığımın önündeki tüm engelleri kaldırmam için neler mümkün?',
          'Bugün dünyada hangi eşsiz katkıyı yaratabilirim?',
          'Hayatımı bir sanat eseri gibi tasarlamam için ne gerekir?',
          'Bilinenin ötesine geçmem için hangi cesarete sahip olmalıyım?'
        ]
      }
    ],
    closing: 'Tüm bu soruların alanımı genişletmesine ve mucizeleri getirmesine niyet ediyorum. Başka neler mümkün?'
  },
  {
    id: 'chakras',
    title: 'Çakra Çalışmaları',
    icon: <Wind className="w-6 h-6" />,
    intro: 'Yedi enerji merkezinin her biri için; o çakranın ruhunu, sesini, rengini ve şifa titreşimini hissettiren derin meditasyon rehberleri.',
    guide: [
      'Omurganız dik bir şekilde oturun ve gözlerinizi kapatın.',
      'İlgili çakranın rengini o bölgede parlayan bir ışık küresi olarak hayal edin.',
      'Bija mantrayı (sesi) içten veya dıştan titreştirerek tekrarlayın.'
    ],
    mainContent: [
      {
        subtitle: '1. Kök Çakra (Muladhara)',
        items: [
          { label: 'Renk', text: 'Kırmızı' },
          { label: 'Mantra', text: 'LAM' },
          { label: 'Kristal', text: 'Hematit, Kırmızı Akik' },
          { label: 'Görselleştirme', text: 'Toprağın derinliklerine uzanan güçlü kökler hayal edin. Güvendesiniz.' }
        ]
      },
      {
        subtitle: '2. Sakral Çakra (Svadhisthana)',
        items: [
          { label: 'Renk', text: 'Turuncu' },
          { label: 'Mantra', text: 'VAM' },
          { label: 'Kristal', text: 'Karnelyan, Aytaşı' },
          { label: 'Görselleştirme', text: 'Alt karın bölgesinde akan turuncu bir nehir hayal edin. Yaratıcılık akıyor.' }
        ]
      },
      {
        subtitle: '3. Solar Pleksus (Manipura)',
        items: [
          { label: 'Renk', text: 'Sarı' },
          { label: 'Mantra', text: 'RAM' },
          { label: 'Kristal', text: 'Sitrin, Kaplan Gözü' },
          { label: 'Görselleştirme', text: 'Midenizde parlayan parlak bir güneş hayal edin. Gücünüzü hissedin.' }
        ]
      },
      {
        subtitle: '4. Kalp Çakra (Anahata)',
        items: [
          { label: 'Renk', text: 'Yeşil / Pembe' },
          { label: 'Mantra', text: 'YAM' },
          { label: 'Kristal', text: 'Pembe Kuvars, Zümrüt' },
          { label: 'Görselleştirme', text: 'Göğüs kafesinizin ortasında açılan bir gül hayal edin. Sevgi yayılıyor.' }
        ]
      },
      {
        subtitle: '5. Boğaz Çakra (Vishuddha)',
        items: [
          { label: 'Renk', text: 'Mavi' },
          { label: 'Mantra', text: 'HAM' },
          { label: 'Kristal', text: 'Lapis Lazuli, Turkuaz' },
          { label: 'Görselleştirme', text: 'Boğazınızda parlayan berrak mavi bir ışık hayal edin. Gerçeğinizi söyleyin.' }
        ]
      },
      {
        subtitle: '6. Üçüncü Göz (Ajna)',
        items: [
          { label: 'Renk', text: 'Çivit Mavisi' },
          { label: 'Mantra', text: 'OM' },
          { label: 'Kristal', text: 'Ametist, Azurit' },
          { label: 'Görselleştirme', text: 'İki kaşınızın ortasında parlayan derin mavi bir yıldız hayal edin. Sezgileriniz açık.' }
        ]
      },
      {
        subtitle: '7. Taç Çakra (Sahasrara)',
        items: [
          { label: 'Renk', text: 'Mor / Beyaz' },
          { label: 'Mantra', text: 'Sessizlik' },
          { label: 'Kristal', text: 'Kuvars, Selenit' },
          { label: 'Görselleştirme', text: 'Başınızın tepesinden evrene uzanan bin yapraklı bir nilüfer hayal edin. Birliktesiniz.' }
        ]
      }
    ],
    closing: 'Enerjim dengede, ruhum huzurda. Evrenin akışıyla birim.'
  },
  {
    id: 'ancestors',
    title: 'Atalar ile Parasal Kontratlar',
    icon: <Leaf className="w-6 h-6" />,
    intro: 'Soy ağacından süzülen bilinçdışı para yemini ve yoksulluk sözleşmelerini ışıkla çözen ritüel metinleri.',
    guide: [
      'Bir mum yakın ve atalarınızın varlığını arkanızda hissedin.',
      'Bu metni sesli bir şekilde, kararlılıkla ve sevgiyle okuyun.',
      'Ritüel sonunda atalarınıza teşekkür ederek mumu söndürün.'
    ],
    mainContent: [
      {
        subtitle: 'Özgürleşme Ritüeli',
        items: [
          'Sevgili atalarım, sizden bana akan tüm yoksulluk yeminlerini ve kıtlık bilincini görüyorum.',
          'Sizin hayatta kalma mücadelenize saygı duyuyorum, ancak artık bu yükleri taşımayı bırakıyorum.',
          'Sizin onurunuza, ben bolluk içinde yaşamayı seçiyorum. Benim zenginliğim sizin başarınızdır.',
          'Geçmişin tüm parasal kontratlarını şimdi, burada, sevgiyle iptal ediyorum.'
        ]
      }
    ],
    closing: 'Geçmişim şifalandı, geleceğim bollukla parlıyor. Atalarıma şükranla.'
  },
  {
    id: 'hooponopono',
    title: 'Ho\'oponopono',
    icon: <Heart className="w-6 h-6" />,
    intro: '"Özür dilerim. Bağışla beni. Seni seviyorum. Teşekkür ederim." Bu dört cümlenin içinde taşıdığı sonsuz şifa gücü.',
    guide: [
      'Sorun yaşadığınız bir durumu veya kişiyi zihninizde canlandırın.',
      'Bu dört cümleyi kalbinizden gelerek, sanki o durumun özüne söylüyormuş gibi tekrarlayın.',
      'İçinizde bir hafifleme hissedene kadar devam edin.'
    ],
    mainContent: [
      {
        subtitle: 'Para Temizliği',
        items: [
          'Parayla ilgili tüm olumsuz anılarım için; Özür dilerim.',
          'Kıtlık bilincine tutunduğum her an için; Bağışla beni.',
          'Varlığın ve bana sundukların için; Seni seviyorum.',
          'Hayatımdaki her kuruşun bereketi için; Teşekkür ederim.'
        ]
      },
      {
        subtitle: 'Geçmiş Yaralar',
        items: [
          'Taşıdığım tüm acılar ve kırgınlıklar için; Özür dilerim.',
          'Kendimi ve başkalarını suçladığım her an için; Bağışla beni.',
          'Ruhumun bu deneyimle büyümesine izin verdiğim için; Seni seviyorum.',
          'Bana öğrettiklerin ve özgürleşmemi sağladığın için; Teşekkür ederim.'
        ]
      }
    ],
    closing: 'Huzur bende başlar. Alanım temizlendi, ruhum özgür.'
  },
  {
    id: 'grabovoi',
    title: 'Grabovoi Sayı Sekansları',
    icon: <Hash className="w-6 h-6" />,
    intro: 'Evrenin matematiksel dilini kullanan sayı dizileri. Şifa, bolluk ve koruma için Grabovoi kodları.',
    guide: [
      'Sayıları tek tek okuyun (örneğin: beş, iki, sıfır...).',
      'Sayıları bir ışık küresinin içinde parladığını hayal edin.',
      'Gümüş renkli bir kürenin içine bu sayıları yazıp bedeninize veya evrene gönderin.'
    ],
    mainContent: [
      {
        subtitle: 'Temel Sekanslar',
        items: [
          { label: 'Beklenmedik Para', text: '5 2 0' },
          { label: 'Sonsuz Bolluk', text: '3 1 8   7 9 8' },
          { label: 'Mucizeler', text: '7 7 7' },
          { label: 'İdeal Sağlık', text: '1 8 1 4 3 2 1' },
          { label: 'Aşk ve Sevgi', text: '8 8 8   4 1 2   1 2 8 9 0 1 8' }
        ]
      }
    ],
    closing: 'Evrenin sayısal uyumuyla hizalandım. Her şey olması gerektiği gibi, mükemmel.'
  },
  {
    id: 'breathing',
    title: 'Nefes Egzersizleri',
    icon: <Wind className="w-6 h-6" />,
    intro: 'Yaşam enerjisini (Prana) bedeninizde dengeleyen, zihni sakinleştiren ve sinir sistemini yatıştıran kutsal nefes teknikleri.',
    guide: [
      'Rahat bir oturuş bulun ve omuzlarınızı gevşetin.',
      'Nefesinizi zorlamadan, doğal akışında izleyerek başlayın.',
      'Egzersiz sırasında dikkatinizi sadece nefes alıp verişinize odaklayın.'
    ],
    mainContent: [
      {
        subtitle: '4-7-8 Rahatlama Nefesi',
        items: [
          '4 saniye boyunca burnunuzdan derin bir nefes alın.',
          '7 saniye boyunca nefesinizi tutun.',
          '8 saniye boyunca ağzınızdan üfleyerek yavaşça verin.',
          'Bu döngüyü 4 kez tekrarlayın. Derin uyku ve sakinlik için mükemmeldir.'
        ]
      },
      {
        subtitle: 'Kutu Nefesi (Kare Nefes)',
        items: [
          '4 saniye nefes al.',
          '4 saniye tut.',
          '4 saniye ver.',
          '4 saniye boşlukta bekle.',
          'Zihinsel odaklanma ve stres yönetimi için idealdir.'
        ]
      },
      {
        subtitle: 'Nadi Shodhana (Dönüşümlü Burun Nefesi)',
        items: [
          'Sağ burun deliğini kapat, soldan al.',
          'Solu kapat, sağdan ver.',
          'Sağdan al, sağu kapat, soldan ver.',
          'Eril ve dişil enerjiyi dengelemek, zihni berraklaştırmak için kullanılır.'
        ]
      }
    ],
    closing: 'Her nefes yeni bir başlangıçtır. Yaşam enerjiniz daim olsun.'
  },
  {
    id: 'moods',
    title: 'Ruh Hali & Günlük',
    icon: <Smile className="w-6 h-6" />,
    intro: 'Duygularınızın rehberliğinde, her anınıza ışık tutacak özel olumlamalar. Bugün nasıl hissediyorsanız, ruhunuzun ihtiyacı olan frekansı burada bulun.',
    guide: [
      'Aşağıdaki listeden şu anki ruh halinizi seçin.',
      'Size özel hazırlanan olumlamayı üç kez derin nefesle tekrarlayın.',
      'Gününüzü bu frekansla mühürleyin.'
    ],
    mainContent: [
      {
        subtitle: 'Haftalık Akış',
        items: [
          { label: 'Pazartesi', text: 'Yeni başlangıçların gücü içimde parlıyor.' },
          { label: 'Salı', text: 'Odaklanmış, kararlı ve üretkenim.' },
          { label: 'Çarşamba', text: 'Hayatımla tam bir denge ve uyum içindeyim.' },
          { label: 'Perşembe', text: 'Bolluk ve bereket kapılarım ardına kadar açık.' },
          { label: 'Cuma', text: 'Sevgi, şefkat ve nezaketle doluyum.' },
          { label: 'Cumartesi', text: 'Özgürlüğün ve neşenin tadını çıkarıyorum.' },
          { label: 'Pazar', text: 'Huzur, dinginlik ve şükranla dinleniyorum.' }
        ]
      }
    ],
    closing: 'Duyguların birer misafir, sen ise ev sahibisin. Her anın kıymetli.'
  }
];

// --- Components ---

const BreathingBubble = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale' | 'wait'>('wait');
  const [timer, setTimer] = useState(4);
  const [pattern, setPattern] = useState<'4-7-8' | 'box'>('4-7-8');

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            // Switch phase
            if (pattern === '4-7-8') {
              if (phase === 'inhale') { setPhase('hold'); return 7; }
              if (phase === 'hold') { setPhase('exhale'); return 8; }
              if (phase === 'exhale' || phase === 'wait') { setPhase('inhale'); return 4; }
            } else if (pattern === 'box') {
              if (phase === 'inhale') { setPhase('hold'); return 4; }
              if (phase === 'hold') { setPhase('exhale'); return 4; }
              if (phase === 'exhale') { setPhase('wait'); return 4; }
              if (phase === 'wait') { setPhase('inhale'); return 4; }
            }
            return prev;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, phase, pattern]);

  const startExercise = (p: '4-7-8' | 'box') => {
    setPattern(p);
    setPhase('inhale');
    setTimer(4);
    setIsActive(true);
  };

  const stopExercise = () => {
    setIsActive(false);
    setPhase('wait');
    setTimer(4);
  };

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale': return 'Nefes Al';
      case 'hold': return 'Tut';
      case 'exhale': return 'Nefes Ver';
      case 'wait': return 'Bekle';
      default: return '';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-12 bg-white/40 backdrop-blur-md rounded-[40px] border border-sage/10 shadow-xl shadow-sage/5 mb-16">
      <div className="text-center mb-8">
        <h3 className="serif text-2xl font-medium text-sage mb-2">İnteraktif Nefes Alanı</h3>
        <p className="text-xs text-ink/50 uppercase tracking-widest font-bold">Zihnini serbest bırak ve balonu izle</p>
      </div>

      <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center mb-12">
        {/* Outer Ring */}
        <div className="absolute inset-0 border-2 border-sage/10 rounded-full" />
        
        {/* Animated Bubble */}
        <motion.div
          animate={{
            scale: phase === 'inhale' ? 1.5 : (phase === 'exhale' ? 1 : (phase === 'hold' ? 1.5 : 1)),
            opacity: isActive ? 1 : 0.3
          }}
          transition={{
            duration: timer,
            ease: "linear"
          }}
          className="w-24 h-24 md:w-32 md:h-32 bg-sage rounded-full flex items-center justify-center text-cream shadow-2xl shadow-sage/40"
        >
          <div className="text-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={phase}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-[10px] uppercase font-bold tracking-widest mb-1"
              >
                {getPhaseText()}
              </motion.p>
            </AnimatePresence>
            <p className="text-2xl md:text-3xl font-light serif">{timer}</p>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {!isActive ? (
          <>
            <button 
              onClick={() => startExercise('4-7-8')}
              className="px-6 py-3 bg-sage text-cream rounded-2xl text-sm font-medium hover:bg-sage/90 transition-all shadow-lg shadow-sage/20"
            >
              4-7-8 Başlat
            </button>
            <button 
              onClick={() => startExercise('box')}
              className="px-6 py-3 border border-sage text-sage rounded-2xl text-sm font-medium hover:bg-sage/5 transition-all"
            >
              Kutu Nefesi Başlat
            </button>
          </>
        ) : (
          <button 
            onClick={stopExercise}
            className="px-8 py-3 bg-red-500/10 text-red-600 border border-red-500/20 rounded-2xl text-sm font-medium hover:bg-red-500/20 transition-all"
          >
            Egzersizi Durdur
          </button>
        )}
      </div>
    </div>
  );
};

const DailyAffirmation = () => {
  const moodsSection = content.find(c => c.id === 'moods');
  const weeklyFlow = moodsSection?.mainContent.find(m => m.subtitle === 'Haftalık Akış');
  
  if (!weeklyFlow || !Array.isArray(weeklyFlow.items)) return null;

  const day = new Date().getDay(); // 0 (Sun) to 6 (Sat)
  // Our items are Mon (0) to Sun (6) in the content array
  const index = day === 0 ? 6 : day - 1;
  const todayAffirmation = weeklyFlow.items[index] as { label: string; text: string };

  return (
    <div className="mb-12 p-8 rounded-[40px] bg-sage/10 border border-sage/20 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
        <Calendar className="w-24 h-24" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-4 h-4 text-sage" />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-sage">Günün Olumlaması — {todayAffirmation.label}</span>
        </div>
        <p className="serif text-3xl md:text-4xl text-ink leading-tight">
          "{todayAffirmation.text}"
        </p>
      </div>
    </div>
  );
};

const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = [
    { id: 'stresli', label: 'Stresli', icon: '🌪️', text: 'Sakinlik içimde yükseliyor. Her nefeste gerginliği bırakıyorum. Güvendeyim.' },
    { id: 'mutlu', label: 'Mutlu', icon: '☀️', text: 'Neşem etrafıma ışık saçıyor. Hayatın güzelliklerini kutluyorum. Şükürler olsun.' },
    { id: 'yorgun', label: 'Yorgun', icon: '🌿', text: 'Dinlenmek benim hakkım. Bedenimi ve ruhumu sevgiyle besliyorum. Enerjim tazeleniyor.' },
    { id: 'uzgun', label: 'Üzgün', icon: '💧', text: 'Duygularımı kabul ediyorum. Bu hüzün geçici bir bulut gibi, arkasındaki güneş hep orada.' },
    { id: 'heyecanli', label: 'Heyecanlı', icon: '✨', text: 'Yeni olasılıklara kapım açık. Evrenin sürprizlerini heyecanla bekliyorum.' },
  ];

  return (
    <div className="p-8 md:p-12 bg-white/40 backdrop-blur-md rounded-[40px] border border-sage/10 shadow-xl shadow-sage/5 mb-16">
      <div className="text-center mb-10">
        <h3 className="serif text-2xl font-medium text-sage mb-2">Bugün Nasıl Hissediyorsun?</h3>
        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink/40">Ruhunun ihtiyacı olan frekansı seç</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
        {moods.map((mood) => (
          <button
            key={mood.id}
            onClick={() => setSelectedMood(mood.id)}
            className={`flex flex-col items-center gap-3 p-4 rounded-3xl transition-all duration-300 ${
              selectedMood === mood.id 
                ? 'bg-sage text-cream shadow-lg scale-105' 
                : 'bg-white/50 hover:bg-sage/10 text-ink/60'
            }`}
          >
            <span className="text-3xl">{mood.icon}</span>
            <span className="text-xs font-bold uppercase tracking-wider">{mood.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedMood && (
          <motion.div
            key={selectedMood}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center p-8 rounded-3xl bg-sage/5 border border-sage/10"
          >
            <p className="serif text-2xl md:text-3xl text-sage leading-snug italic">
              "{moods.find(m => m.id === selectedMood)?.text}"
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Sidebar = ({ activeTab, setActiveTab, isOpen, setIsOpen }: { 
  activeTab: Category, 
  setActiveTab: (tab: Category) => void,
  isOpen: boolean,
  setIsOpen: (open: boolean) => void
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside 
        initial={false}
        animate={{ x: isOpen ? 0 : -300 }}
        className={`fixed top-0 left-0 h-full w-72 bg-white/80 backdrop-blur-md border-r border-sage/10 z-50 lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-cream">
              <Compass className="w-6 h-6" />
            </div>
            <h1 className="serif text-2xl font-semibold tracking-tight">Meditasyon Mucizesi</h1>
          </div>

          <nav className="flex-1 space-y-2">
            {content.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 ${
                  activeTab === item.id 
                    ? 'bg-sage text-white shadow-lg shadow-sage/20' 
                    : 'hover:bg-sage/5 text-ink/60 hover:text-ink'
                }`}
              >
                {item.icon}
                <span className="font-medium text-sm">{item.title}</span>
                {activeTab === item.id && (
                  <motion.div layoutId="active-pill" className="ml-auto">
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                )}
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-8 border-t border-sage/10">
            <p className="text-[10px] uppercase tracking-widest text-ink/40 font-semibold">
              Modern Ruhsal Uyanış © 2026
            </p>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

const ContentDisplay = ({ section }: { section: ContentSection }) => {
  return (
    <motion.div
      key={section.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-3xl mx-auto"
    >
      {/* Header */}
      <header className="mb-12 text-center">
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage/10 text-sage mb-6"
        >
          {section.icon}
        </motion.div>
        <h2 className="serif text-5xl md:text-6xl font-light mb-6 tracking-tight">{section.title}</h2>
        <p className="text-lg text-ink/70 leading-relaxed italic serif">
          {section.intro}
        </p>
      </header>

      {/* Guide Section */}
      <section className="mb-16 p-8 rounded-3xl bg-white/50 border border-sage/5">
        <div className="flex items-center gap-2 mb-6">
          <Zap className="w-4 h-4 text-sage" />
          <h3 className="uppercase text-[11px] font-bold tracking-[0.2em] text-sage">Uygulama Rehberi</h3>
        </div>
        <ul className="space-y-4">
          {section.guide.map((step, i) => (
            <li key={i} className="flex gap-4 text-ink/80">
              <span className="serif italic text-sage font-bold">0{i + 1}.</span>
              <p className="text-sm leading-relaxed">{step}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Main Content Sections */}
      <div className="space-y-12 mb-16">
        {section.mainContent.map((block, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h4 className="serif text-2xl font-medium mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-sage/30" />
              {block.subtitle}
            </h4>
            
            <div className="space-y-4 pl-11">
              {block.items.map((item, j) => (
                <div key={j} className="group">
                  {typeof item === 'string' ? (
                    <p className="serif text-xl md:text-2xl text-ink/90 leading-snug group-hover:text-sage transition-colors duration-300">
                      "{item}"
                    </p>
                  ) : (
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-sage/60 min-w-[100px]">
                        {item.label}
                      </span>
                      <p className="serif text-xl text-ink/90">
                        {item.text}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Breathing System */}
      {section.id === 'breathing' && <BreathingBubble />}

      {/* Interactive Mood System */}
      {section.id === 'moods' && (
        <>
          <DailyAffirmation />
          <MoodSelector />
        </>
      )}

      {/* Closing */}
      <footer className="text-center py-12 border-t border-sage/10">
        <Sun className="w-6 h-6 text-sage/30 mx-auto mb-4" />
        <p className="serif italic text-2xl text-sage/80 mb-2">
          {section.closing}
        </p>
        <p className="uppercase text-[10px] font-bold tracking-[0.3em] text-ink/30">
          Kapanış Niyeti & Minnettarlık
        </p>
      </footer>
    </motion.div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<Category>('affirmations');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeSection = content.find(c => c.id === activeTab)!;

  return (
    <div className="min-h-screen flex selection:bg-sage/20 selection:text-sage">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <main className="flex-1 lg:ml-72 min-h-screen relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sage/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-6 sticky top-0 bg-cream/80 backdrop-blur-md z-30 border-bottom border-sage/5">
          <h1 className="serif text-xl font-semibold">Meditasyon Mucizesi</h1>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-xl bg-sage/5 text-sage"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 p-6 md:p-12 lg:p-20">
          <AnimatePresence mode="wait">
            <ContentDisplay section={activeSection} />
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
