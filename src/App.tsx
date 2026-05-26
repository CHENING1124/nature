import { motion, AnimatePresence } from 'motion/react';
import { 
  TreePine, 
  Clock, 
  MapPin, 
  AlertCircle, 
  ChevronDown, 
  Menu, 
  X, 
  ExternalLink,
  Leaf,
  Wind,
  Sun
} from 'lucide-react';
import React, { useState, type ReactNode } from 'react';

const QUESTIONS = [
  {
    q: "這個活動適合完全沒有參加過類似森林活動的人嗎？",
    a: "非常適合！我們的活動設計是給所有想放鬆的人，沒有任何門檻。您只需要帶著一顆開放的心前來即可。"
  },
  {
    q: "需要準備什麼裝備或服裝？",
    a: "建議穿著舒適且好走、不怕髒的運動鞋或登山鞋。衣著建議洋蔥式穿法，並自備雨具與個人水瓶。"
  },
  {
    q: "活動當天如果下雨會取消嗎？",
    a: "小雨活動照常舉行，森林在雨中另有一番美感。若遇強風、大雷雨或政府宣布停班停課，我們將提前於網站與簡訊通知延期。"
  },
  {
    q: "可以帶小朋友或寵物參加嗎？",
    a: "本次活動主要為靜謐體驗，適合 12 歲以上青少年與成人參加。為維護森林環境與其他參與者的品質，暫不開放攜帶寵物入園。"
  },
  {
    q: "餐食內容是什麼？有提供素食或是對特定食物過敏的調整嗎？",
    a: "我們提供由營養師配置的「大地蔬食餐盒」，強調原型食物與低度調味。如果您是全素 (Vegan) 或有特定食物過敏（如花生、麩質等），請務必在報名表單的備註欄位註明，我們將竭誠為您調整菜單。"
  }
];

const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop",
    title: "林間小徑"
  },
  {
    url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop",
    title: "陽光灑落"
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop",
    title: "深秋氣息"
  },
  {
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    title: "群山圍抱"
  }
];

const DecorativeLeaf = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 90C50 90 85 65 85 35C85 15 65 10 50 25C35 10 15 15 15 35C15 65 50 90 50 90Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M50 90V25" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M50 75C50 75 65 65 65 55" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M50 65C50 65 35 55 35 45" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M50 55C50 55 60 48 60 42" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-sm">
        <div className="flex items-center gap-2">
          <TreePine className="text-forest-green" size={24} />
          <span className="font-serif text-xl font-semibold tracking-wider text-forest-green">大口呼吸</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-deep-earth">
          <a href="#about" className="hover:text-forest-green transition-colors">活動介紹</a>
          <a href="#info" className="hover:text-forest-green transition-colors">活動資訊</a>
          <a href="#gallery" className="hover:text-forest-green transition-colors">精選照片</a>
          <a href="#faq" className="hover:text-forest-green transition-colors">常見問答</a>
          <a 
            href="https://example.com/register" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-forest-green text-warm-cream px-6 py-2 rounded-full hover:bg-deep-earth transition-all shadow-md"
          >
            立即報名
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-deep-earth" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-6 right-6 bg-warm-cream rounded-3xl p-8 shadow-2xl border border-soft-wood md:hidden"
          >
            <div className="flex flex-col gap-6 text-center text-lg font-serif italic text-deep-earth">
              <a href="#about" onClick={() => setIsOpen(false)}>活動介紹</a>
              <a href="#info" onClick={() => setIsOpen(false)}>活動資訊</a>
              <a href="#gallery" onClick={() => setIsOpen(false)}>精選照片</a>
              <a href="#faq" onClick={() => setIsOpen(false)}>常見問答</a>
              <a 
                href="https://example.com/register" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-forest-green text-warm-cream px-8 py-3 rounded-full inline-block"
              >
                線上報名
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle }: { children: ReactNode, subtitle?: string }) => (
  <div className="text-center mb-16 px-4">
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs uppercase tracking-[0.3em] text-forest-green/60 mb-2 font-medium"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl lg:text-6xl text-deep-earth font-light italic"
    >
      {children}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 60 }}
      viewport={{ once: true }}
      className="h-[1px] bg-forest-green/30 mx-auto mt-6"
    />
  </div>
);

const AccordionItem: React.FC<{ q: string, a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-soft-wood/50 py-6">
      <button 
        className="flex w-full justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg md:text-xl font-serif text-deep-earth pr-8">{q}</h3>
        <ChevronDown 
          className={`text-forest-green transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          size={20} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-deep-earth/70 leading-relaxed font-light">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-forest-green selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <header className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop"
            alt="Forest Canopy"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-earth/30 via-transparent to-warm-cream"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-sm md:text-base uppercase tracking-[0.4em] mb-6 font-medium">森呼吸 ‧ 慢生活 ‧ 輕旅行</p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-12 font-light italic leading-tight">
              大口呼吸
            </h1>
            <div className="flex flex-col items-center gap-8">
              <p className="max-w-md text-lg md:text-xl font-serif italic text-white/90">
                「在城市的塵囂中，讓自己靈魂停下休息，擁抱森林最純粹的氣息。」
              </p>
              <a 
                href="#about"
                className="group flex items-center justify-center w-48 h-14 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full hover:bg-white hover:text-forest-green transition-all duration-500"
              >
                探索森林
                <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Activity Intro */}
      <section id="about" className="py-32 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <DecorativeLeaf className="absolute -top-10 -left-10 w-24 h-24 text-forest-green/20 rotate-[-15deg] hidden lg:block" />
            <div className="pill-image aspect-[4/5] relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2070&auto=format&fit=crop"
                alt="Forest Mist"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-soft-wood/30 rounded-full -z-0 blur-2xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1 bg-forest-green/10 rounded-full text-xs font-semibold text-forest-green tracking-widest uppercase">
              活動理念
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-deep-earth italic leading-snug">
              遠離城市的噪音<br />
              重新找回感官的平衡
            </h2>
            <p className="text-lg text-deep-earth/70 leading-relaxed font-light">
              我們相信大自然是最好的療癒師。透過森林浴 (Forest Bathing) 的引導，參與者將放慢步調，運用視覺、聽覺、嗅覺、味覺與觸覺，深度感受森林的生命力。這不是一場登山體能挑戰，而是一次與內心、與大地最溫柔的對話。
            </p>
            
            {/* Detailed Timeline */}
            <div className="space-y-4 pt-6 border-t border-soft-wood/30">
              <h3 className="text-xl font-serif italic text-deep-earth">體驗流程安排</h3>
              <div className="grid gap-4">
                {[
                  { time: "09:30 - 10:00", title: "森林之門", desc: "集合點點名、分發療癒包、開啟心靈靜謐引導。" },
                  { time: "10:00 - 12:00", title: "五感開啟體驗", desc: "引導師帶領赤足或輕緩步行，觸摸苔蘚、聆聽風聲，喚醒感官。" },
                  { time: "12:00 - 13:30", title: "森林野餐時光", desc: "享用特製大地蔬食便當，在杉木林下感受食物的純粹。" },
                  { time: "13:30 - 15:00", title: "山間獨處時刻", desc: "提供吊床或軟墊，在森林中練習呼吸，與自己深度對話。" },
                  { time: "15:00 - 16:30", title: "森林茶席與圓滿", desc: "採集當季草本泡製熱茶，圍圈分享心得，帶著圓滿賦歸。" }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <span className="text-xs font-mono text-forest-green pt-1 shrink-0">{step.time}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-deep-earth group-hover:text-forest-green transition-colors">{step.title}</h4>
                      <p className="text-[13px] text-deep-earth/60 font-light">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { icon: Leaf, label: "自然共生" },
                { icon: Wind, label: "釋放壓力" },
                { icon: Sun, label: "找回自我" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-soft-wood flex items-center justify-center text-forest-green">
                    <item.icon size={20} />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-deep-earth/60 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-32 bg-white rounded-[64px] mx-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Event Details">活動資訊與注意事項</SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            {[
              { 
                icon: Clock, 
                title: "日期與費用", 
                content: "2026年6月14日 (日)\n09:30 - 16:30\n單人報名：NT$ 2,500\n(含餐食、保險與材料費)" 
              },
              { 
                icon: MapPin, 
                title: "集合地點", 
                content: "陽明山中山樓停車場\n(將有接駁車往返秘境森林)\n自行開車者報名後提供座標" 
              },
              { 
                icon: AlertCircle, 
                title: "人數限制", 
                content: "為確保高品質體驗\n每場次僅限 20 人參加\n對象：12歲以上成人" 
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-10 rounded-[32px] text-center flex flex-col items-center group cursor-default transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-16 h-16 rounded-full bg-forest-green text-warm-cream flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-deep-earth italic">{item.title}</h3>
                <p className="text-deep-earth/70 leading-relaxed whitespace-pre-line font-light">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <a 
              href="https://example.com/register" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-forest-green text-warm-cream px-12 py-5 rounded-full text-xl hover:bg-deep-earth transition-all shadow-xl shadow-forest-green/20 font-medium group"
            >
              前往線上報名
              <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <p className="mt-6 text-deep-earth/40 text-sm italic tracking-widest uppercase">活動限量 20 席，額滿為止</p>
          </motion.div>
        </div>
      </section>

      {/* Registration Section Decorative */}
      <div className="relative overflow-hidden py-10">
        <DecorativeLeaf className="absolute top-0 right-[10%] w-32 h-32 text-forest-green/10 rotate-[20deg]" />
        <DecorativeLeaf className="absolute bottom-0 left-[15%] w-20 h-20 text-forest-green/10 rotate-[-10deg]" />
      </div>

      {/* Gallery */}
      <section id="gallery" className="py-32 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Atmosphere">森林的光影記憶</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative overflow-hidden group rounded-2xl aspect-[3/4] ${idx % 2 !== 0 ? 'md:translate-y-8' : ''}`}
              >
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-deep-earth/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <span className="text-lg font-serif italic tracking-widest">{img.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 relative">
          <DecorativeLeaf className="absolute -top-20 -right-10 w-40 h-40 text-forest-green/5 rotate-[45deg]" />
          <SectionHeading subtitle="General FAQ">常見問題與參加須知</SectionHeading>
          <div className="mt-12 bg-white rounded-3xl">
            {QUESTIONS.map((item, idx) => (
              <AccordionItem key={idx} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-earth text-warm-cream py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 border-b border-warm-cream/10 pb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <TreePine className="text-soft-wood" size={32} />
              <span className="font-serif text-3xl font-semibold tracking-wider">大口呼吸</span>
            </div>
            <p className="text-warm-cream/50 max-w-xs font-light leading-relaxed italic">
              在自然的慢生活節奏中，學會與森林共處，重新發現生命中的寧靜與溫柔。
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-serif">快速連結</h4>
            <div className="flex flex-col gap-2 text-warm-cream/60">
              <a href="#about" className="hover:text-warm-cream">活動介紹</a>
              <a href="#info" className="hover:text-warm-cream">活動資訊</a>
              <a href="#gallery" className="hover:text-warm-cream">照片展示</a>
              <a href="#faq" className="hover:text-warm-cream">常見問答</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-serif">聯絡我們</h4>
            <p className="text-warm-cream/60 font-light translate-y-1">如有團體包場或合作需求，請來信：</p>
            <p className="text-soft-wood text-lg">inhale_forest@nature.com</p>
            <div className="flex gap-4 pt-4">
              {/* Simple icons placeholders */}
              <div className="w-10 h-10 rounded-full border border-warm-cream/20 flex items-center justify-center hover:bg-warm-cream hover:text-deep-earth transition-colors cursor-pointer">
                <span className="text-xs font-bold uppercase">IG</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-warm-cream/20 flex items-center justify-center hover:bg-warm-cream hover:text-deep-earth transition-colors cursor-pointer">
                <span className="text-xs font-bold uppercase">FB</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-warm-cream/30 uppercase tracking-[0.2em]">
          <p>© 2026 大口呼吸活動團隊. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#">隱私權政策</a>
            <a href="#">服務條款</a>
          </div>
        </div>
      </footer>

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-20">
        <div className="absolute top-[10%] left-[-5%] w-[40vw] h-[40vw] bg-forest-green rounded-full blur-[120px] mix-blend-multiply"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] bg-soft-wood rounded-full blur-[150px] mix-blend-multiply"></div>
      </div>
    </div>
  );
}
