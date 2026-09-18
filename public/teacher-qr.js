let classroomQrMode='student',classroomQrCode=null,classroomQrStep=null,classroomQrKey=null;
function renderClassroomQr(){
  if(!state||!session)return;
  const panel=$('join-qr');
  panel.hidden=['vocabMatch','vocabUse'].includes(state.stage)&&state.revealed;
  if(classroomQrCode!==state.code){classroomQrCode=state.code;classroomQrMode='student';panel.open=true;}
  else if(classroomQrStep!==state.step)panel.open=false;
  classroomQrStep=state.step;
  $('qr-summary').textContent='SCAN TO JOIN · ROOM '+state.code;
  const guest=classroomQrMode==='guest',url=classroomJoinUrl(location.origin,state.code,guest);
  $('qr-class').className=guest?'quiet':'chosen';$('qr-guest').className=guest?'chosen':'quiet';
  $('qr-class').setAttribute('aria-pressed',!guest);$('qr-guest').setAttribute('aria-pressed',guest);
  $('qr-title').textContent=guest?'GUEST PRACTICE':'CLASS STUDENTS';
  $('qr-room').textContent='ROOM '+state.code;
  $('qr-note').textContent=guest?'Scan to try the same activities. Your work is separate from class results.':'Scan with your camera. Enter your name and choose your assigned group.';
  $('qr-data-note').textContent=guest?'NOT INCLUDED IN SUBMISSIONS, ACCURACY OR LEADERBOARD':'YOUR GROUP WORK COUNTS TOWARDS CLASS RESULTS';
  $('qr-copy').textContent=guest?'COPY GUEST LINK':'COPY STUDENT LINK';
  $('qr-image').alt=(guest?'Guest practice':'Class student')+' QR code for room '+state.code;
  if(classroomQrKey!==url){
    try{
      const qr=qrcode(0,'M');qr.addData(url);qr.make();
      const count=qr.getModuleCount(),scale=8,margin=4,canvas=document.createElement('canvas');
      canvas.width=canvas.height=(count+margin*2)*scale;
      const ctx=canvas.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.fillStyle='#000';
      for(let row=0;row<count;row++)for(let col=0;col<count;col++)if(qr.isDark(row,col))ctx.fillRect((col+margin)*scale,(row+margin)*scale,scale,scale);
      $('qr-image').src=canvas.toDataURL('image/png');classroomQrKey=url;$('qr-error').textContent='';
    }catch(e){$('qr-error').textContent='Could not create the QR code. Use COPY STUDENT LINK and reload this page.';}
  }
  $('qr-copy').onclick=async()=>{try{await navigator.clipboard.writeText(url);$('qr-copy').textContent='LINK COPIED ✓';}catch{error('Copying is unavailable. Students can scan the QR code.');}};
}
$('qr-class').onclick=()=>{classroomQrMode='student';renderClassroomQr();};
$('qr-guest').onclick=()=>{classroomQrMode='guest';renderClassroomQr();};
const renderBeforeQr=render;
render=function(s){renderBeforeQr(s);renderClassroomQr();};
const lessonTeacherBeforeQr=renderLessonTeacher;
renderLessonTeacher=function(s){lessonTeacherBeforeQr(s);renderClassroomQr();};
if(state)renderClassroomQr();
