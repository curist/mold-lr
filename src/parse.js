const molders = {
  SCM: [1, 0],
  FSM: [0, 1],
  S: [1, 0],
  F: [0, 1],
}

export function composeFeature(molder, parts) {
  let L = 0, W = 0, H = 0, CC = 0, caveats = 0, area = 0;

  for(let i = 0; i < parts.length; i++) {
    const p = parts[i];
    L = Math.max(L, p.L);
    W += (p.caveat || 1) * p.W;
    H = Math.max(H, p.H);
    CC += p.CC;
    caveats += (p.caveat || 1);
    area += p.area;
  }
  return [ L, W, H, CC, caveats, area, area/CC ].concat(molders[molder]);
}

export default function parse(rawData) {
  const rawDataArr = rawData.toString().split('\n').map(s => {
    if(/^\t*$/.test(s)) {
      return null;
    }
    return s.split('\t');
  });
  let X = [], Y = [];
  // L take max, W take sum, H take max, CC take sum
  let molder = '';
  let parts = [];
  for(let i = 0; i < rawDataArr.length; i ++) {
    const data = rawDataArr[i];
    if(data == null) {
      X.push(composeFeature(molder, parts));
      // re-init
      molder = '', parts = [];
      continue;
    }
    const caveat = !data[7] ? 1 : parseInt(data[7]);
    parts.push({
      L: parseFloat(data[0]),
      W: caveat * parseFloat(data[1]),
      H: parseFloat(data[2]),
      CC: parseFloat(data[3]),
      caveat: caveat,
      area: parseInt(data[8] || 0),
    });
    molder = data[10] || molder;

    if(data[9]) {
      Y.push(parseFloat(data[9]));
    }
  }
  return { X, Y };
}

