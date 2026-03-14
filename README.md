<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>香港保险分析工具</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"PingFang SC","Microsoft YaHei",sans-serif;background:#f8fafc;color:#1e293b;padding:20px}
.hero{background:linear-gradient(135deg,#1e3a8a,#312e81);color:#fff;padding:30px;border-radius:12px;margin-bottom:20px}
h1{font-size:28px;margin-bottom:10px}
.card{background:#fff;padding:20px;border-radius:12px;margin-bottom:20px;box-shadow:0 2px 8px rgba(0,0,0,0.1)}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
@media(max-width:768px){.grid{grid-template-columns:1fr}}
input,select{width:100%;padding:10px;margin:8px 0;border:1px solid #ddd;border-radius:6px;font-size:14px}
input[type=range]{padding:0;height:6px}
.comp{display:inline-block;padding:10px 20px;margin:5px;border:2px solid #ddd;border-radius:8px;cursor:pointer}
.comp.active{border-color:#1e3a8a;background:#f0f9ff;font-weight:600}
.comp.aia.active{border-color:#dc2626;color:#dc2626}
.comp.pru.active{border-color:#2563eb;color:#2563eb}
.comp.sun.active{border-color:#ea580c;color:#ea580c}
.comp.man.active{border-color:#16a34a;color:#16a34a}
.results{background:linear-gradient(135deg,#f0f9ff,#e0f2fe);padding:20px;border-radius:10px;border:1px solid #bae6fd}
.result{display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-top:15px}
.result-box{background:#fff;padding:15px;border-radius:8px;text-align:center;box-shadow:0 1px 3px rgba(0,0,0,0.1)}
.result-box .num{font-size:24px;font-weight:700;color:#1e3a8a}
.result-box .label{font-size:12px;color:#64748b;margin-top:5px}
.tabs{display:flex;border-bottom:2px solid #e2e8f0;margin-bottom:20px}
.tab{padding:12px 24px;cursor:pointer;border-bottom:3px solid transparent;margin-bottom:-2px}
.tab.active{border-bottom-color:#1e3a8a;color:#1e3a8a;font-weight:600}
.tab-content{display:none}
.tab-content.active{display:block}
table{width:100%;border-collapse:collapse;font-size:14px;margin-top:15px}
th,td{padding:12px;border-bottom:1px solid #e2e8f0;text-align:left}
th{background:#f8fafc;font-weight:600}
.tag{display:inline-block;padding:4px 12px;border-radius:12px;font-size:12px;font-weight:600}
.tag-aia{background:#fee2e2;color:#dc2626}
.tag-pru{background:#dbeafe;color:#2563eb}
.tag-sun{background:#ffedd5;color:#ea580c}
.tag-man{background:#d1fae5;color:#16a34a}
.info{background:#eff6ff;border-left:4px solid #3b82f6;padding:15px;margin:15px 0;border-radius:0 8px 8px 0}
.warn{background:#fffbeb;border-left-color:#f59e0b}
</style>
</head>
<body>
<div class="hero">
<h1>香港保险产品分析工具</h1>
<p>2025年分红实现率数据 | 完全离线使用</p>
</div>
<div class="tabs">
<div class="tab active" onclick="showTab(0)">收益计算器</div>
<div class="tab" onclick="showTab(1)">产品对比</div>
<div class="tab" onclick="showTab(2)">公司分析</div>
<div class="tab" onclick="showTab(3)">知识库</div>
</div>
<div class="tab-content active" id="tab0">
<div class="card">
<div class="grid">
<div>
<h3 style="margin-bottom:15px;color:#1e3a8a">参数设置</h3>
<label>年缴保费 (美元)</label>
<input type="number" id="p" value="10000" min="1000" step="1000" onchange="calc()">
<label>缴费年期</label>
<select id="y" onchange="calc()">
<option value="5">5年缴</option>
<option value="10" selected>10年缴</option>
<option value="20">20年缴</option>
</select>
<label>分红实现率: <b id="rv">100%</b></label>
<input type="range" id="r" min="60" max="120" value="100" oninput="document.getElementById('rv').innerText=this.value+'%';calc()">
<label>持有年期</label>
<select id="h" onchange="calc()">
<option value="10">10年</option>
<option value="20" selected>20年</option>
<option value="30">30年</option>
<option value="50">50年</option>
</select>
<div style="margin-top:15px">
<div style="margin-bottom:8px;font-weight:600">选择保险公司:</div>
<span class="comp aia active" onclick="sel('aia',this)">友邦AIA</span>
<span class="comp pru" onclick="sel('pru',this)">保诚</span>
<span class="comp sun" onclick="sel('sun',this)">永明</span>
<span class="comp man" onclick="sel('man',this)">宏利</span>
</div>
</div>
<div class="results">
<h3 style="color:#1e3a8a;margin-bottom:10px">测算结果</h3>
<div class="result">
<div class="result-box">
<div class="num" id="o1">10万</div>
<div class="label">总缴保费</div>
</div>
<div class="result-box">
<div class="num" id="o2">38.5万</div>
<div class="label">预期现金价值</div>
</div>
<div class="result-box">
<div class="num" id="o3">28.5万</div>
<div class="label">净收益</div>
</div>
<div class="result-box">
<div class="num" id="o4">5.2%</div>
<div class="label">预期IRR</div>
</div>
</div>
<div style="margin-top:15px;font-size:14px">
<div>保证部分: <b id="g1">13.2万</b> (<span id="g2">34%</span>)</div>
<div style="margin-top:8px">非保证部分: <b id="ng1">25.3万</b> (<span id="ng2">66%</span>)</div>
</div>
</div>
</div>
</div>
<div class="card">
<h3 style="color:#1e3a8a;margin-bottom:15px">现金价值增长表</h3>
<table>
<thead><tr><th>年度</th><th>累计保费</th><th>保证价值</th><th>预期总价值</th><th>IRR</th></tr></thead>
<tbody id="tb"></tbody>
</table>
</div>
</div>
<div class="tab-content" id="tab1">
<div class="card">
<h3 style="color:#1e3a8a;margin-bottom:15px">四大保险公司产品对比</h3>
<table>
<tr><th>对比项</th><th><span class="tag tag-aia">友邦AIA</span></th><th><span class="tag tag-pru">保诚</span></th><th><span class="tag tag-sun">永明</span></th><th><span class="tag tag-man">宏利</span></th></tr>
<tr><td>主力产品</td><td>盈御多元货币3</td><td>信守明天</td><td>万年青星河</td><td>宏挚传承</td></tr>
<tr><td>周年红利实现率</td><td>89%</td><td>80%</td><td>83%</td><td>77%</td></tr>
<tr><td>终期红利实现率</td><td>102%</td><td>78%</td><td>84%</td><td>107%</td></tr>
<tr><td>20年IRR</td><td>5.2%</td><td>5.0%</td><td>4.8%</td><td>4.9%</td></tr>
<tr><td>保证部分占比</td><td>42%</td><td>48%</td><td>45%</td><td>35%</td></tr>
<tr><td>货币选择</td><td>9种</td><td>6种</td><td>6种</td><td>7种</td></tr>
<tr><td>投资风格</td><td>稳健型</td><td>均衡偏积极</td><td>稳健型</td><td>积极型</td></tr>
<tr><td>适合人群</td><td>追求稳定分红</td><td>希望尽早锁定红利</td><td>长期持有者</td><td>短期回本需求</td></tr>
</table>
<div class="info warn">
<b>⚠️ 重要提示:</b> 保诚2025年终期红利实现率平均78%，部分产品低至3%，建议采用60-70%假设进行保守估算。
</div>
</div>
</div>
<div class="tab-content" id="tab2">
<div class="card">
<h3 style="color:#1e3a8a;margin-bottom:15px">2025年分红实现率数据</h3>
<table>
<tr><th>保险公司</th><th>周年红利</th><th>归原红利</th><th>终期红利</th><th>特点</th></tr>
<tr><td><b>友邦 AIA</b></td><td>89%</td><td>92%</td><td>102%</td><td>稳定性最佳</td></tr>
<tr><td><b>保诚</b></td><td>80%</td><td>81%</td><td>78%</td><td>波动性较高</td></tr>
<tr><td><b>永明</b></td><td>83%</td><td>95%</td><td>84%</td><td>长期稳健</td></tr>
<tr><td><b>宏利</b></td><td>77%</td><td>-</td><td>107%</td><td>终期红利突出</td></tr>
</table>
</div>
<div class="card">
<h3 style="color:#1e3a8a;margin-bottom:15px">情景模拟 (不同分红实现率假设)</h3>
<table>
<tr><th>持有年期</th><th>友邦 (乐观/基准/悲观)</th><th>保诚 (乐观/基准/悲观)</th><th>永明 (乐观/基准/悲观)</th></tr>
<tr><td>10年</td><td>4.2% / 3.2% / 2.1%</td><td>4.0% / 3.0% / 1.8%</td><td>3.8% / 2.8% / 1.6%</td></tr>
<tr><td>20年</td><td>6.1% / 5.2% / 3.8%</td><td>5.9% / 5.0% / 3.5%</td><td>5.7% / 4.8% / 3.2%</td></tr>
<tr><td>30年</td><td>6.8% / 6.1% / 4.5%</td><td>6.7% / 6.0% / 4.3%</td><td>6.9% / 5.9% / 4.4%</td></tr>
</table>
<div class="info">
<b>🛡️ 平滑机制:</b> 保险公司在投资收益好的年份储备盈余，在低迷年份释放储备以稳定分红。即使某年投资表现不佳，分红实现率也不会立即大幅下降。
</div>
</div>
</div>
<div class="tab-content" id="tab3">
<div class="card">
<h3 style="color:#1e3a8a;margin-bottom:15px">专业术语解释</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:15px">
<div style="background:#f8fafc;padding:15px;border-radius:8px">
<h4 style="color:#1e3a8a;margin-bottom:8px">分红实现率</h4>
<p style="font-size:14px;color:#64748b">实际派发红利与预期红利的比率。100%表示完全达标。</p>
</div>
<div style="background:#f8fafc;padding:15px;border-radius:8px">
<h4 style="color:#1e3a8a;margin-bottom:8px">复归/归原红利</h4>
<p style="font-size:14px;color:#64748b">英式分红核心，每年公布面值，一旦公布即成为保证。</p>
</div>
<div style="background:#f8fafc;padding:15px;border-radius:8px">
<h4 style="color:#1e3a8a;margin-bottom:8px">终期红利</h4>
<p style="font-size:14px;color:#64748b">保单终止时一次性发放，波动较大，每年重新宣告。</p>
</div>
<div style="background:#f8fafc;padding:15px;border-radius:8px">
<h4 style="color:#1e3a8a;margin-bottom:8px">IRR</h4>
<p style="font-size:14px;color:#64748b">内部收益率，考虑时间价值的年化复合收益率。</p>
</div>
</div>
</div>
<div class="card">
<h3 style="color:#1e3a8a;margin-bottom:15px">2025年监管新规</h3>
<ul style="padding-left:20px;line-height:2">
<li>演示利率上限：港元产品6%，非港元产品6.5%</li>
<li>每年6月30日前统一公布分红实现率</li>
<li>需披露投资策略、资产类别、地域组合</li>
<li>董事局对非保证利益负最终责任</li>
</ul>
</div>
<div class="card">
<h3 style="color:#1e3a8a;margin-bottom:15px">分红实现率查询链接</h3>
<table>
<tr><th>保险公司</th><th>查询网址</th></tr>
<tr><td>友邦 AIA</td><td><a href="https://www.aia.com.hk/zh-hk/products/further-product-information/participating-products/fulfillment-ratio" target="_blank">官网查询页面</a></td></tr>
<tr><td>保诚</td><td><a href="https://www.prudential.com.hk/performance/fulfillment-ratio/tc/" target="_blank">官网查询页面</a></td></tr>
<tr><td>宏利</td><td><a href="https://www.manulife.com.hk/zh-hk/individual/products/understanding-your-participating-policy/fulfillment-ratio.html" target="_blank">官网查询页面</a></td></tr>
<tr><td>永明</td><td><a href="https://www.manulife.com.hk/zh-hk/individual/products/understanding-your-participating-policy/fulfillment-ratio.html" target="_blank">官网查询页面</a></td></tr>
</table>
</div>
</div>
<script>
const data={
aia:{name:"友邦",irr:{10:3.2,20:5.2,30:6.1,50:6.8},cv:{g:1.32,ng:2.53}},
pru:{name:"保诚",irr:{10:3.0,20:5.0,30:6.0,50:6.7},cv:{g:1.45,ng:2.23}},
sun:{name:"永明",irr:{10:2.8,20:4.8,30:5.9,50:6.9},cv:{g:1.65,ng:1.87}},
man:{name:"宏利",irr:{10:3.5,20:4.9,30:5.8,50:6.6},cv:{g:1.20,ng:2.25}}
};
let cur="aia";
function showTab(n){
document.querySelectorAll(".tab").forEach((t,i)=>t.classList.toggle("active",i===n));
document.querySelectorAll(".tab-content").forEach((c,i)=>c.classList.toggle("active",i===n));
}
function sel(c,el){
cur=c;
document.querySelectorAll(".comp").forEach(x=>x.classList.remove("active"));
el.classList.add("active");
calc();
}
function calc(){
const p=parseInt(document.getElementById("p").value)||10000;
const y=parseInt(document.getElementById("y").value)||10;
const h=parseInt(document.getElementById("h").value)||20;
const r=parseInt(document.getElementById("r").value)||100;
const d=data[cur];
const tp=p*y;
const g=d.cv.g*(h/20);
const ng=d.cv.ng*(h/20)*(r/100);
const fv=tp*(g+ng);
const prof=fv-tp;
let irr=d.irr[h]||5.0;
irr=irr+(r-100)*0.04;
document.getElementById("o1").innerText=(tp/10000).toFixed(1)+"万";
document.getElementById("o2").innerText=(fv/10000).toFixed(1)+"万";
document.getElementById("o3").innerText=(prof/10000).toFixed(1)+"万";
document.getElementById("o4").innerText=irr.toFixed(1)+"%";
const gv=tp*g;
const ngv=fv-gv;
document.getElementById("g1").innerText=(gv/10000).toFixed(1)+"万";
document.getElementById("g2").innerText=(gv/fv*100).toFixed(0)+"%";
document.getElementById("ng1").innerText=(ngv/10000).toFixed(1)+"万";
document.getElementById("ng2").innerText=(ngv/fv*100).toFixed(0)+"%";
let tb="";
for(let yr of[5,10,15,20,30,50]){
if(yr>h)break;
const gy=d.cv.g*(yr/20);
const ngy=d.cv.ng*(yr/20)*(r/100);
const fvv=p*y*(gy+ngy);
const ir=d.irr[yr]||5.0;
tb+=`<tr><td>${yr}年</td><td>${(p*y/10000).toFixed(1)}万</td><td>${(p*y*gy/10000).toFixed(1)}万</td><td>${(fvv/10000).toFixed(1)}万</td><td>${ir.toFixed(1)}%</td></tr>`;
}
document.getElementById("tb").innerHTML=tb;
}
calc();
</script>
</body>
</html>
