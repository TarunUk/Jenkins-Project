const stages = document.querySelectorAll('.stage');
const connectors = document.querySelectorAll('.connector-fill');

function resetPipeline() {
  stages.forEach(s => s.classList.remove('active', 'done'));
  connectors.forEach(c => c.classList.remove('active'));
}

async function runPipelineAnimation() {
  resetPipeline();
  for (let i = 0; i < stages.length; i++) {
    stages[i].classList.add('active');
    await delay(400);
    if (i < connectors.length) connectors[i].classList.add('active');
    await delay(200);
    stages[i].classList.remove('active');
    stages[i].classList.add('done');
  }
}

function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function getMessage() {
  const btn = document.getElementById('triggerBtn');
  const msg = document.getElementById('msg');

  btn.classList.add('running');
  btn.querySelector('.btn-label').textContent = 'Running…';
  btn.querySelector('.btn-icon').textContent = '◌';

  msg.className = 'mono';
  msg.textContent = '// Pipeline triggered…';

  runPipelineAnimation();

  try {
    const start = performance.now();
    const res = await fetch('/api/message');
    const data = await res.json();
    const ms = Math.round(performance.now() - start);

    msg.className = 'success';
    msg.textContent = data.message;

    // append latency note
    const note = document.createElement('div');
    note.className = 'mono';
    note.style.cssText = 'font-size:11px;color:#4a4a5a;margin-top:8px;';
    note.textContent = `// ${ms}ms · ${JSON.stringify(data).length} bytes`;
    msg.appendChild(note);

  } catch (err) {
    msg.className = 'mono error';
    msg.textContent = `// Error: ${err.message}`;
  } finally {
    btn.classList.remove('running');
    btn.querySelector('.btn-label').textContent = 'Trigger Pipeline';
    btn.querySelector('.btn-icon').textContent = '▶';
  }
}