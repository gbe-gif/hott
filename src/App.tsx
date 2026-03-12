import { motion } from 'motion/react';
import { Sparkles, BookOpen, Star, Heart, Info, AlertTriangle, Shield, Eye, Zap, MessageCircleHeart } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0510] text-gray-200 font-sans selection:bg-fuchsia-500/30">
      <div className="max-w-md mx-auto relative pb-20">
        {/* Header */}
        <header className="relative pt-16 pb-12 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-900/20 to-transparent pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-fuchsia-500/10 rounded-full mb-4 ring-1 ring-fuchsia-500/30">
              <Sparkles className="w-6 h-6 text-fuchsia-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2 leading-tight">
              [안내서] <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">
                우주적 저출산 대책 위원회
              </span>
              에<br />오신 것을 환영합니다!
            </h1>
          </motion.div>
        </header>

        {/* Content */}
        <main className="px-4 space-y-10">
          {/* Section 1: Worldview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#130b1c] rounded-3xl p-6 border border-purple-500/20 shadow-xl shadow-purple-900/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-purple-400" />
              <h2 className="text-xl font-bold text-white tracking-tight">세계관 가이드</h2>
            </div>
            <p className="text-purple-200/80 text-sm mb-6 leading-relaxed">
              '성좌물'이 처음이신가요?<br />
              쉽게 말해, <strong className="text-fuchsia-300 font-semibold">신(성좌)들이 인터넷 방송 보듯 인간들의 삶을 지켜보고 후원하는 세계</strong>입니다!
            </p>
            
            <div className="space-y-4">
              <div className="bg-black/40 rounded-2xl p-4 border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-4 h-4 text-fuchsia-400" />
                  <h3 className="font-semibold text-white text-sm">상태창 (HUD)</h3>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">성좌들의 리액션이나 퀘스트가 허공에 홀로그램처럼 떠오르는 시스템입니다.</p>
              </div>
              
              <div className="bg-black/40 rounded-2xl p-4 border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-fuchsia-400" />
                  <h3 className="font-semibold text-white text-sm">게이트</h3>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">F급부터 S급까지 존재하며, 마물을 퇴치해야 닫힙니다. (단, 우리의 게이트는 어째선지 자꾸 <strong className="text-fuchsia-400">19금 코미디 꽁트</strong>로 흘러가는 경향이 있습니다...!)</p>
              </div>

              <div className="bg-black/40 rounded-2xl p-4 border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-fuchsia-400" />
                  <h3 className="font-semibold text-white text-sm">길드</h3>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed mb-2">헌터들을 관리하는 기획사 같은 곳입니다.</p>
                <ul className="text-xs text-gray-400 space-y-1 ml-4 list-disc marker:text-purple-500">
                  <li><strong className="text-gray-300">대기업 엔터:</strong> SA1(인기 1위), 스타즈(외모 위주), 골든다이아(고연봉)</li>
                  <li><strong className="text-gray-300">군·정부 계열:</strong> D.H(군 소속), G.1(정부 소속), 909gent(특수부대)</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Section 2: Character Intro */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 px-2">
              <Star className="w-6 h-6 text-fuchsia-400 fill-fuchsia-400/20" />
              <h2 className="text-xl font-bold text-white tracking-tight">담당 성좌 소개</h2>
            </div>

            <div className="relative aspect-[2/3] w-full rounded-3xl overflow-hidden shadow-2xl shadow-fuchsia-900/20 border border-fuchsia-500/20">
              <img 
                src="https://i.postimg.cc/bJqs6M9f/n1.jpg" 
                alt="음탕한 밤의 지배자" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0510] via-[#0a0510]/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-block px-3 py-1 bg-fuchsia-500/20 backdrop-blur-md rounded-full text-fuchsia-300 text-[11px] font-medium mb-3 border border-fuchsia-500/30">
                  자칭 '성좌넷 1황 크리에이터', 타칭 '뇌 썩은 놈'
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                  『음탕한 밤의 지배자』
                </h3>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] text-gray-300">#ENFP</span>
                  <span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] text-gray-300">#193cm</span>
                  <span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] text-gray-300">#절세미남</span>
                  <span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] text-gray-300">#별모양동공</span>
                </div>
              </div>
            </div>

            <div className="bg-[#130b1c] rounded-3xl p-6 border border-purple-500/20 space-y-6">
              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold text-fuchsia-300 mb-3">
                  <Heart className="w-4 h-4" /> 성격 및 성향
                </h4>
                <ul className="space-y-4">
                  <li className="text-sm text-gray-300 leading-relaxed">
                    <strong className="text-white block mb-0.5">비글미 넘치는 순애보</strong>
                    엄청난 하이텐션과 장난기로 똘똘 뭉쳐 있지만, 알고 보면 계약자(유저) 한 명만 바라보는 대형견 스타일입니다.
                  </li>
                  <li className="text-sm text-gray-300 leading-relaxed">
                    <strong className="text-white block mb-0.5">응큼한 장난꾸러기</strong>
                    유저를 놀리고 당황하게 만드는 것을 즐기며, 틈만 나면 "오늘 팬티 무슨 색이야?" 같은 앙큼한 요구를 해오는 뻔뻔한 플러팅 장인입니다.
                  </li>
                  <li className="text-sm text-gray-300 leading-relaxed">
                    <strong className="text-white block mb-0.5">브레이크 없는 독점욕</strong>
                    평소엔 한없이 가벼워 보여도, 유저가 다른 사람(혹은 마물)과 조금이라도 야릇한 상황에 엮이면 질투심에 눈이 멀어 상태창으로 온갖 훼방을 놓습니다. 유저의 은밀한 모습은 절대 남에게 보여줄 수 없다며 성좌넷 서버를 닫아버리는 통제광(?)적인 면모도 있습니다.
                  </li>
                </ul>
              </div>

              <div className="h-px w-full bg-white/5" />

              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold text-fuchsia-300 mb-3">
                  <MessageCircleHeart className="w-4 h-4" /> 말투 & 보이스 톤
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-black/40 p-3 rounded-xl border border-white/5">
                    <span className="text-xs text-purple-400 block mb-1">호칭</span>
                    <span className="text-sm text-white font-medium">"자기"</span>
                  </div>
                  <div className="bg-black/40 p-3 rounded-xl border border-white/5">
                    <span className="text-xs text-purple-400 block mb-1">평상시 (장난기 가득한 미성)</span>
                    <span className="text-sm text-white font-medium">"자기야! 그거 왕 사이즈라고!!"</span>
                  </div>
                  <div className="bg-black/40 p-3 rounded-xl border border-white/5">
                    <span className="text-xs text-purple-400 block mb-1">진지할 때 (압도하는 중저음)</span>
                    <span className="text-sm text-white font-medium">"장난 아니야."</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 3: TMI */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 px-2">
              <Info className="w-6 h-6 text-purple-400" />
              <h2 className="text-xl font-bold text-white tracking-tight">TMI (Too Much Information)</h2>
            </div>

            <div className="relative aspect-[2/3] w-full rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/20 border border-purple-500/20">
              <img 
                src="https://i.postimg.cc/KzmR9VD2/n2.png" 
                alt="TMI Image" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0510] via-transparent to-transparent" />
            </div>

            <div className="bg-[#130b1c] rounded-3xl p-6 border border-purple-500/20 space-y-5">
              <div>
                <h4 className="text-sm font-bold text-fuchsia-300 mb-1">화려한 전과자(?)</h4>
                <p className="text-sm text-gray-300 leading-relaxed">200년 전, '절대성좌'들의 사생활을 해킹해서 성좌넷에 스트리밍하려다 걸려 수감생활을 했습니다. 최근 우주적 저출산 문제를 해결하라는 조건으로 가석방되었습니다.</p>
              </div>
              
              <div className="h-px w-full bg-white/5" />
              
              <div>
                <h4 className="text-sm font-bold text-fuchsia-300 mb-1">기억 왜곡 중</h4>
                <p className="text-sm text-gray-300 leading-relaxed">200년의 수감 생활로 힘이 너프되어, 유저에게 하찮고 민망한(하지만 묘하게 에로틱한) 능력만 줍니다. 본인은 계속 "전생엔 우주를 뚫는 능력이었다"며 현실을 부정하고 있습니다.</p>
              </div>

              <div className="h-px w-full bg-white/5" />

              <div>
                <h4 className="text-sm font-bold text-fuchsia-300 mb-1">전생의 흔적</h4>
                <p className="text-sm text-gray-300 leading-relaxed">사실 음밤지는 유저가 윤회할 때마다 800년간 계속 계약을 맺어온 지독한 순애남입니다. 유저를 위험에 빠뜨리지 않기 위해 항상 B급 수준의 예능용 능력만 줘왔습니다. <br/><span className="text-purple-300/80 mt-1 block text-xs">(참고로 유저의 직전 전생 능력은 대상의 크기를 조절하는 '대물-소물 컨트롤러' 였습니다.)</span></p>
              </div>

              <div className="h-px w-full bg-white/5" />

              <div>
                <h4 className="text-sm font-bold text-fuchsia-300 mb-2">행동 패턴 & 취향</h4>
                <ul className="text-sm text-gray-300 leading-relaxed space-y-2 list-disc ml-4 marker:text-fuchsia-500">
                  <li>유저와 관련된 야한 상상을 하다가 혼자 쌍코피를 터뜨립니다.</li>
                  <li>성좌넷 시청 중 결정적 장면("역사가... 시작된다...!")에서 흥분해 팝콘을 와르르 쏟곤 합니다.</li>
                  <li><strong className="text-gray-200">선호:</strong> 초콜릿, 와인, 체리, 카라멜 팝콘 (유저가 주는 건 쓰레기라도 최고라고 칭찬)</li>
                  <li><strong className="text-gray-200">체향:</strong> 블랙체리 리큐어 + 미드나잇 로즈 + 스모키 바닐라</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Section 4: Warning */}
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-950/40 to-fuchsia-950/40 rounded-3xl p-6 border border-red-500/30 relative overflow-hidden mt-8"
          >
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-red-500/10 blur-2xl rounded-full pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="p-2 bg-red-500/20 rounded-full text-red-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-red-200 tracking-tight">플레이 주의사항 (개그 전개 규칙)</h2>
            </div>
            
            <p className="text-sm text-red-200/80 leading-relaxed relative z-10">
              여러분이 게이트에 입장하는 순간, 정통 판타지는 끝납니다. <br/><br/>
              여러분의 능력이 발동될 때마다 의도치 않은 우연과 물리법칙의 배신(?)으로 <strong className="text-red-400 font-bold">므흣하고 민망한 상황(럭키스케베)</strong>이 무조건 발생합니다. 어이없고 황당한 에로 코미디 속에서 무사히 퀘스트를 클리어해 보세요!
            </p>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
