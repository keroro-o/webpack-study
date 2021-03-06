// ★ HTML に組み込むJavaScript ファイル ★
//    すなわち、依存関係を読み解く最初の入り口となるJavaScriptファイル

'use strict';

import dc from 'damage-calc';
import crypto from 'crypto';

const root = document.getElementById('root');
root.innerHTML = '<p>攻撃力 100, 防御 50, 防御貫通 30 のダメージは、'
  + dc.effectiveDamage(100, 50, 30) + '</p><p>'
  + crypto.randomBytes(8).toString('hex') + '</p>';
