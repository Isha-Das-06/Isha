<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
<meta name="design_doc_mode" content="canvas">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Baloo+2:wght@500;600;700;800&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
@keyframes floatp { 0%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-18px) rotate(12deg)} 100%{transform:translateY(0) rotate(0deg)} }
@keyframes fall { 0%{transform:translateY(-30px) rotate(0deg);opacity:0} 10%{opacity:.9} 100%{transform:translateY(420px) rotate(220deg);opacity:0} }
@keyframes twinkle { 0%,100%{opacity:.25;transform:scale(.7)} 50%{opacity:1;transform:scale(1.15)} }
@keyframes shift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
@keyframes wiggle { 0%,100%{transform:rotate(-3deg)} 50%{transform:rotate(3deg)} }
@keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
</style>
</helmet>

<!-- ================= SECTION HEADER ================= -->
<div style="position:absolute;left:80px;top:32px;font-family:'Fredoka',sans-serif;font-weight:600;font-size:26px;color:#9d1457">✿ Pick a hero direction for Isha's portfolio</div>
<div style="position:absolute;left:80px;top:70px;font-family:'Quicksand',sans-serif;font-size:14px;color:#b76a93;max-width:900px">Bold hot-pink candy theme · bubbly type · floral + sparkle motion · real brand logos. Each frame is the top of the one-page site. Tell me which vibe (or mix) and I'll build the whole thing.</div>

<!-- ================= FRAME A: CANDY GRADIENT ================= -->
<div style="position:absolute;left:80px;top:140px;width:680px">
  <div data-drags-parent="1" style="position:absolute;top:-26px;font-family:'Quicksand',sans-serif;font-weight:600;font-size:13px;color:#9d1457">A · Candy Gradient</div>
  <div style="position:relative;overflow:hidden;border-radius:28px;box-shadow:0 18px 50px rgba(255,46,147,.28);background:linear-gradient(120deg,#ff2e93,#ff5ab0,#c77dff,#ff2e93);background-size:300% 300%;animation:shift 9s ease infinite;height:640px;font-family:'Quicksand',sans-serif">
    <!-- petals falling -->
    <span style="position:absolute;left:12%;top:0;font-size:20px;color:rgba(255,255,255,.85);animation:fall 7s linear infinite">❀</span>
    <span style="position:absolute;left:38%;top:0;font-size:14px;color:rgba(255,255,255,.7);animation:fall 9s linear infinite 1.5s">✿</span>
    <span style="position:absolute;left:64%;top:0;font-size:22px;color:rgba(255,255,255,.8);animation:fall 8s linear infinite .8s">❀</span>
    <span style="position:absolute;left:84%;top:0;font-size:16px;color:rgba(255,255,255,.7);animation:fall 10s linear infinite 2.4s">✾</span>
    <span style="position:absolute;left:22%;top:48%;font-size:14px;color:#fff;animation:twinkle 2.6s ease-in-out infinite">✦</span>
    <span style="position:absolute;left:72%;top:30%;font-size:18px;color:#fff;animation:twinkle 3.1s ease-in-out infinite .6s">✦</span>
    <!-- nav -->
    <div style="position:absolute;left:0;right:0;top:0;display:flex;align-items:center;justify-content:space-between;padding:22px 30px">
      <div style="font-family:'Baloo 2',cursive;font-weight:800;font-size:22px;color:#fff">✿ isha</div>
      <div style="display:flex;gap:8px;background:rgba(255,255,255,.22);backdrop-filter:blur(6px);padding:7px 9px;border-radius:30px;font-weight:600;font-size:13px;color:#fff">
        <span style="padding:5px 12px;background:#fff;color:#ff2e93;border-radius:20px">Home</span>
        <span style="padding:5px 12px">About</span>
        <span style="padding:5px 12px">Work</span>
        <span style="padding:5px 12px">Skills</span>
        <span style="padding:5px 12px">Contact</span>
      </div>
    </div>
    <!-- center content -->
    <div style="position:absolute;left:46px;top:150px;right:300px">
      <div style="display:inline-block;background:rgba(255,255,255,.25);color:#fff;font-weight:600;font-size:13px;padding:6px 16px;border-radius:30px">♡ hello, I'm</div>
      <div style="font-family:'Baloo 2',cursive;font-weight:800;font-size:74px;line-height:.95;color:#fff;margin-top:14px;text-shadow:0 4px 0 rgba(157,20,87,.25)">Isha<br>Das</div>
      <div style="margin-top:18px;font-weight:600;font-size:17px;color:#fff">Full-Stack Engineer</div>
      <div style="margin-top:4px;font-weight:500;font-size:13.5px;color:rgba(255,255,255,.85)">DevOps · Cybersecurity · AI / ML</div>
      <div style="display:flex;gap:12px;margin-top:26px">
        <span style="background:#fff;color:#ff2e93;font-weight:700;font-size:14px;padding:13px 24px;border-radius:30px;box-shadow:0 8px 18px rgba(157,20,87,.25)">View my work →</span>
        <span style="border:2px solid #fff;color:#fff;font-weight:700;font-size:14px;padding:11px 22px;border-radius:30px">Let's talk</span>
      </div>
    </div>
    <!-- photo blob -->
    <div style="position:absolute;right:40px;top:170px">
      <div style="position:relative;width:230px;height:280px;border-radius:50% 50% 48% 52%/55% 55% 45% 45%;background:repeating-linear-gradient(45deg,rgba(255,255,255,.35),rgba(255,255,255,.35) 9px,rgba(255,255,255,.18) 9px,rgba(255,255,255,.18) 18px);border:4px solid #fff;box-shadow:0 14px 30px rgba(157,20,87,.3);display:flex;align-items:center;justify-content:center">
        <span style="font-family:monospace;font-size:12px;color:#fff;background:rgba(157,20,87,.45);padding:5px 10px;border-radius:8px">your photo</span>
      </div>
      <span style="position:absolute;-top:10px;left:-18px;top:-18px;font-size:30px;animation:floatp 4s ease-in-out infinite">🌸</span>
      <span style="position:absolute;bottom:-10px;right:-14px;font-size:24px;animation:floatp 5s ease-in-out infinite 1s">🌷</span>
    </div>
    <!-- skill ticker -->
    <div style="position:absolute;left:0;right:0;bottom:26px;overflow:hidden">
      <div style="display:flex;gap:26px;align-items:center;width:max-content;padding:0 30px;animation:marquee 18s linear infinite">
        <img src="https://cdn.simpleicons.org/react/ffffff" width="26" height="26">
        <img src="https://cdn.simpleicons.org/python/ffffff" width="26" height="26">
        <img src="https://cdn.simpleicons.org/typescript/ffffff" width="26" height="26">
        <img src="https://cdn.simpleicons.org/rust/ffffff" width="26" height="26">
        <img src="https://cdn.simpleicons.org/docker/ffffff" width="26" height="26">
        <img src="https://cdn.simpleicons.org/kubernetes/ffffff" width="26" height="26">
        <img src="https://cdn.simpleicons.org/tensorflow/ffffff" width="26" height="26">
        <img src="https://cdn.simpleicons.org/react/ffffff" width="26" height="26">
        <img src="https://cdn.simpleicons.org/python/ffffff" width="26" height="26">
        <img src="https://cdn.simpleicons.org/typescript/ffffff" width="26" height="26">
        <img src="https://cdn.simpleicons.org/rust/ffffff" width="26" height="26">
        <img src="https://cdn.simpleicons.org/docker/ffffff" width="26" height="26">
      </div>
    </div>
  </div>
</div>

<!-- ================= FRAME B: CREAM POP ================= -->
<div style="position:absolute;left:820px;top:140px;width:680px">
  <div data-drags-parent="1" style="position:absolute;top:-26px;font-family:'Quicksand',sans-serif;font-weight:600;font-size:13px;color:#9d1457">B · Cream Pop (editorial)</div>
  <div style="position:relative;overflow:hidden;border-radius:28px;box-shadow:0 18px 50px rgba(255,46,147,.18);background:#fff6fa;height:640px;font-family:'Quicksand',sans-serif">
    <span style="position:absolute;right:-30px;top:-30px;font-size:150px;color:#ffe0ee;animation:wiggle 7s ease-in-out infinite">❀</span>
    <span style="position:absolute;left:30px;bottom:40px;font-size:60px;color:#ffd6e8">✿</span>
    <span style="position:absolute;left:46%;top:44%;font-size:14px;color:#ff2e93;animation:twinkle 2.8s infinite">✦</span>
    <!-- nav -->
    <div style="position:absolute;left:0;right:0;top:0;display:flex;align-items:center;justify-content:space-between;padding:22px 30px">
      <div style="font-family:'Baloo 2',cursive;font-weight:800;font-size:22px;color:#ff2e93">✿ isha</div>
      <div style="display:flex;gap:18px;font-weight:600;font-size:13px;color:#9d1457">
        <span>About</span><span>Work</span><span>Skills</span>
        <span style="background:#ff2e93;color:#fff;padding:6px 16px;border-radius:20px">Contact ♡</span>
      </div>
    </div>
    <!-- content -->
    <div style="position:absolute;left:46px;top:140px;right:280px">
      <div style="display:inline-block;background:#ffe0ee;color:#ff2e93;font-weight:700;font-size:12px;padding:6px 14px;border-radius:30px;letter-spacing:.5px">★ FULL-STACK ENGINEER</div>
      <div style="font-family:'Fredoka',sans-serif;font-weight:600;font-size:58px;line-height:1.0;color:#3a0e2e;margin-top:18px">Hi, I'm <span style="color:#ff2e93">Isha</span> — I build dreamy, reliable software.</div>
      <div style="margin-top:18px;font-weight:500;font-size:14px;color:#a85c82;max-width:330px">From frontend to cloud, DevOps to AI/ML — I ship full-stack products with a soft spot for clean UX & secure systems.</div>
      <div style="display:flex;gap:12px;margin-top:26px">
        <span style="background:#ff2e93;color:#fff;font-weight:700;font-size:14px;padding:13px 24px;border-radius:30px;box-shadow:0 8px 18px rgba(255,46,147,.3)">See projects</span>
        <span style="background:#fff;border:2px solid #ffd0e4;color:#ff2e93;font-weight:700;font-size:14px;padding:11px 22px;border-radius:30px">Resume</span>
      </div>
    </div>
    <!-- photo -->
    <div style="position:absolute;right:42px;top:150px">
      <div style="width:210px;height:260px;border-radius:24px;background:repeating-linear-gradient(45deg,#ffe6f1,#ffe6f1 9px,#ffd0e4 9px,#ffd0e4 18px);border:5px solid #fff;box-shadow:0 14px 30px rgba(255,46,147,.2);display:flex;align-items:center;justify-content:center;transform:rotate(3deg)">
        <span style="font-family:monospace;font-size:12px;color:#ff2e93;background:#fff;padding:5px 10px;border-radius:8px;transform:rotate(-3deg)">your photo</span>
      </div>
    </div>
    <!-- skill badges -->
    <div style="position:absolute;left:46px;right:46px;bottom:34px">
      <div style="font-weight:700;font-size:11px;color:#c98bae;letter-spacing:1px;margin-bottom:10px">TECH I LOVE</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        <span style="display:flex;align-items:center;gap:6px;background:#fff;border:1.5px solid #ffd6e8;padding:6px 13px;border-radius:20px;font-weight:600;font-size:12px;color:#3a0e2e"><img src="https://cdn.simpleicons.org/react/FF2E93" width="15" height="15">React</span>
        <span style="display:flex;align-items:center;gap:6px;background:#fff;border:1.5px solid #ffd6e8;padding:6px 13px;border-radius:20px;font-weight:600;font-size:12px;color:#3a0e2e"><img src="https://cdn.simpleicons.org/python/FF2E93" width="15" height="15">Python</span>
        <span style="display:flex;align-items:center;gap:6px;background:#fff;border:1.5px solid #ffd6e8;padding:6px 13px;border-radius:20px;font-weight:600;font-size:12px;color:#3a0e2e"><img src="https://cdn.simpleicons.org/typescript/FF2E93" width="15" height="15">TypeScript</span>
        <span style="display:flex;align-items:center;gap:6px;background:#fff;border:1.5px solid #ffd6e8;padding:6px 13px;border-radius:20px;font-weight:600;font-size:12px;color:#3a0e2e"><img src="https://cdn.simpleicons.org/docker/FF2E93" width="15" height="15">Docker</span>
        <span style="display:flex;align-items:center;gap:6px;background:#fff;border:1.5px solid #ffd6e8;padding:6px 13px;border-radius:20px;font-weight:600;font-size:12px;color:#3a0e2e"><img src="https://cdn.simpleicons.org/tensorflow/FF2E93" width="15" height="15">TensorFlow</span>
      </div>
    </div>
  </div>
</div>

<!-- ================= FRAME C: STICKER Y2K ================= -->
<div style="position:absolute;left:1560px;top:140px;width:680px">
  <div data-drags-parent="1" style="position:absolute;top:-26px;font-family:'Quicksand',sans-serif;font-weight:600;font-size:13px;color:#9d1457">C · Sticker Y2K</div>
  <div style="position:relative;overflow:hidden;border-radius:28px;box-shadow:0 18px 50px rgba(199,125,255,.25);background:radial-gradient(circle at 20% 20%,#fff0f8,#ffe9fb 60%,#f3e6ff);height:640px;font-family:'Quicksand',sans-serif">
    <!-- dotted texture -->
    <div style="position:absolute;inset:0;background-image:radial-gradient(#ffc4e6 1.5px,transparent 1.5px);background-size:22px 22px;opacity:.5"></div>
    <span style="position:absolute;left:8%;top:30%;font-size:26px;animation:floatp 4s ease-in-out infinite">🌸</span>
    <span style="position:absolute;right:10%;top:22%;font-size:22px;animation:floatp 5s ease-in-out infinite 1s">🦋</span>
    <span style="position:absolute;left:14%;top:62%;font-size:16px;color:#c77dff;animation:twinkle 2.4s infinite">✦</span>
    <span style="position:absolute;right:18%;bottom:34%;font-size:20px;color:#ff2e93;animation:twinkle 3s infinite .5s">✧</span>
    <!-- nav -->
    <div style="position:absolute;left:0;right:0;top:0;display:flex;align-items:center;justify-content:space-between;padding:22px 30px">
      <div style="font-family:'Baloo 2',cursive;font-weight:800;font-size:22px;color:#c026d3">✿ isha</div>
      <div style="display:flex;gap:7px;font-weight:700;font-size:12px">
        <span style="background:#fff;border:2px solid #ff2e93;color:#ff2e93;padding:6px 13px;border-radius:14px">Home</span>
        <span style="background:#fff;border:2px solid #c77dff;color:#a21caf;padding:6px 13px;border-radius:14px">Work</span>
        <span style="background:#fff;border:2px solid #38bdf8;color:#0284c7;padding:6px 13px;border-radius:14px">Skills</span>
      </div>
    </div>
    <!-- center -->
    <div style="position:absolute;left:0;right:0;top:120px;text-align:center;padding:0 40px">
      <div style="display:inline-block;background:linear-gradient(90deg,#ff2e93,#c77dff);color:#fff;font-weight:700;font-size:12px;padding:7px 18px;border-radius:30px;animation:wiggle 4s ease-in-out infinite">✩ full-stack · devops · ai/ml · security ✩</div>
      <div style="font-family:'Baloo 2',cursive;font-weight:800;font-size:88px;line-height:.95;margin-top:16px;background:linear-gradient(180deg,#ff66c4,#ff2e93 55%,#c026d3);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 4px 0 #fff)">Isha Das</div>
      <div style="margin-top:14px;font-weight:600;font-size:15px;color:#a21caf">✦ engineer who makes the internet cuter ✦</div>
      <div style="display:flex;gap:14px;justify-content:center;margin-top:28px">
        <span style="background:linear-gradient(180deg,#ff66c4,#ff2e93);color:#fff;font-weight:800;font-size:14px;padding:14px 28px;border-radius:30px;box-shadow:0 6px 0 #c026d3">Explore ✿</span>
        <span style="background:#fff;border:2.5px solid #ff2e93;color:#ff2e93;font-weight:800;font-size:14px;padding:12px 26px;border-radius:30px">Say hi ♡</span>
      </div>
    </div>
    <!-- glossy logo stickers -->
    <div style="position:absolute;left:0;right:0;bottom:30px;display:flex;justify-content:center;gap:14px">
      <div style="width:46px;height:46px;border-radius:14px;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 5px 0 #ffd0e4;transform:rotate(-6deg)"><img src="https://cdn.simpleicons.org/react" width="24" height="24"></div>
      <div style="width:46px;height:46px;border-radius:14px;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 5px 0 #e9d5ff;transform:rotate(4deg)"><img src="https://cdn.simpleicons.org/nextdotjs" width="24" height="24"></div>
      <div style="width:46px;height:46px;border-radius:14px;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 5px 0 #bae6fd;transform:rotate(-3deg)"><img src="https://cdn.simpleicons.org/python" width="24" height="24"></div>
      <div style="width:46px;height:46px;border-radius:14px;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 5px 0 #ffd0e4;transform:rotate(6deg)"><img src="https://cdn.simpleicons.org/kubernetes" width="24" height="24"></div>
      <div style="width:46px;height:46px;border-radius:14px;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 5px 0 #e9d5ff;transform:rotate(-5deg)"><img src="https://cdn.simpleicons.org/pytorch" width="24" height="24"></div>
    </div>
  </div>
</div>

<!-- ================= NOTE ================= -->
<div style="position:absolute;left:820px;top:820px;width:300px;background:#fef4a8;padding:14px 16px;font-family:'Quicksand',sans-serif;font-size:12.5px;line-height:1.5;color:#7a5a00;box-shadow:0 4px 14px rgba(0,0,0,.1);transform:rotate(-1.4deg)">
  💌 Pick A, B, or C (or mix — e.g. "B layout + C's sticker logos"). Then I'll build the full one-pager: Hero · About · Skills · Experience · Education · Projects · Contact — plus the Upcoming page.
</div>
</x-dc>
</body>
</html>
