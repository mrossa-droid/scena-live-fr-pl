const {chromium}=require('playwright');const assert=require('node:assert/strict');
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});try{
const c=await b.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
await c.addInitScript(()=>{window.sessions=[];window.SpeechRecognition=class{constructor(){sessions.push(this)}start(){this.onstart?.()}abort(){this.onend?.()}emit(text,final=false){const r=[{transcript:text}];r.isFinal=final;this.onresult({resultIndex:0,results:[r]})}};Element.prototype.requestFullscreen=undefined;});
const calls=[];let delay=0;await c.route('https://api.mymemory.translated.net/**',async r=>{const q=new URL(r.request().url()).searchParams.get('q');calls.push(q);if(delay)await new Promise(res=>setTimeout(res,delay));await r.fulfill({json:{responseStatus:200,responseData:{translatedText:'PL: '+q}}})});
const p=await c.newPage();const errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(process.env.SCENA_URL||'http://localhost:8081/');await p.selectOption('#engineSelect','mymemory');await p.click('#liveStageBtn');
assert(await p.locator('body').evaluate(e=>e.classList.contains('is-live-stage')));assert.equal(await p.evaluate(()=>sessions.length),1);assert(await p.locator('#stagePage').isVisible());assert.match(await p.locator('#stageStatus').textContent(),/Safari/);
await p.evaluate(()=>sessions[0].emit('Bonjour à tous'));
await p.waitForFunction(()=>document.querySelector('#stageText').textContent==='PL: Bonjour à tous');assert.equal(await p.locator('.history-item').count(),0);
await p.evaluate(()=>sessions[0].emit('Bonjour à tous',true));await p.waitForFunction(()=>document.querySelector('.history-item'));assert.equal(calls.filter(x=>x==='Bonjour à tous').length,1);assert.equal(await p.locator('#stageText').textContent(),'PL: Bonjour à tous');assert.equal(await p.locator('.history-item').count(),1);
await p.click('#stageCloseBtn');assert(await p.locator('#operatorPage').isVisible());assert(await p.locator('#startBtn').isDisabled());
// New recognizer: a late partial must never replace its final correction.
await p.click('#stopBtn');await p.click('#liveStageBtn');delay=300;
await p.evaluate(()=>sessions.at(-1).emit('Une phrase provisoire'));await p.waitForTimeout(1750);await p.evaluate(()=>sessions.at(-1).emit('Une phrase corrigée',true));
await p.waitForFunction(()=>document.querySelector('#stageText').textContent.includes('PL: Une phrase corrigée'));assert(!(await p.locator('#stageText').textContent()).includes('provisoire'));
await p.click('#stageMicBtn');assert.match(await p.locator('#stageMicBtn').textContent(),/Wznów/);await p.click('#stageMicBtn');assert.match(await p.locator('#stageMicBtn').textContent(),/Stop/);
await p.click('#stageCloseBtn');await p.fill('#manualPolish','Długi napis do sprawdzenia widoczności. '.repeat(7));await p.click('#manualBtn');await p.click('#liveStageBtn');await p.waitForTimeout(80);
assert(await p.locator('#stageText').evaluate(e=>{const r=e.getBoundingClientRect();return r.left>=0&&r.right<=innerWidth&&r.top>=0&&r.bottom<=innerHeight}));
assert.deepEqual(errors,[]);console.log('PASS: same-window microphone and captions on iPhone-sized viewport without Fullscreen API; translated partial before final; cached final without duplicates; final correction; panel return preserves mic; stage stop/resume; mobile caption fit.');
}finally{await b.close()}})().catch(e=>{console.error(e);process.exitCode=1});
