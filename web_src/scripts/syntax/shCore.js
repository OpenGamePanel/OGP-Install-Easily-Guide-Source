/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
 
// unPacker:  https://www.bibekoli.com/tools/js-unpacker.html
// Packer:  https://www.bibekoli.com/tools/js-packer.html
// unPacker alt https://matthewfl.com/unPacker.html
 
eval(function(e,a,c,t,g,i){if(g=function(e){return(e<62?"":g(parseInt(e/62)))+((e%=62)>35?String.fromCharCode(e+29):e.toString(36))},!"".replace(/^/,String)){for(;c--;)i[g(c)]=t[c]||g(c);t=[function(e){return i[e]}],g=function(){return"\\w+"},c=1}for(;c--;)t[c]&&(e=e.replace(new RegExp("\\b"+g(c)+"\\b","g"),t[c]));return e}('K M;I(M)1K 2j("24\'t 2W M 4m 25 2X 4n 4o");(6(){6 r(f,e){I(!M.1L(f))1K 2Y("2Z 15 4p");K a=f.1p;f=M(f.1j,t(f)+(e||""));I(a)f.1p={1j:a.1j,19:a.19?a.19.1a(0):N};H f}6 t(f){H(f.1B?"g":"")+(f.4q?"i":"")+(f.4r?"m":"")+(f.4s?"x":"")+(f.30?"y":"")}6 B(f,e,a,b){K c=u.L,d,h,g;v=R;4t{O(;c--;){g=u[c];I(a&g.31&&(!g.2k||g.2k.W(b))){g.2l.11=e;I((h=g.2l.X(f))&&h.P===e){d={32:g.26.W(b,h,a),1C:h};1M}}}}4u(i){1K i}4v{v=12}H d}6 p(f,e,a){I(33.Y.1c)H f.1c(e,a);O(a=a||0;a<f.L;a++)I(f[a]===e)H a;H-1}M=6(f,e){K a=[],b=M.1D,c=0,d,h;I(M.1L(f)){I(e!==1d)1K 2Y("24\'t 4w 4x 4y 4z 4A 15 4B 4C");H r(f)}I(v)1K 2j("24\'t W 2X M 4D 4E 4F 4G 4H");e=e||"";O(d={2m:12,19:[],2n:6(g){H e.1c(g)>-1},34:6(g){e+=g}};c<f.L;)I(h=B(f,c,b,d)){a.T(h.32);c+=h.1C[0].L||1}Z I(h=n.X.W(z[b],f.1a(c))){a.T(h[0]);c+=h[0].L}Z{h=f.35(c);I(h==="[")b=M.2o;Z I(h==="]")b=M.1D;a.T(h);c++}a=15(a.1N(""),n.Q.W(e,w,""));a.1p={1j:f,19:d.2m?d.19:N};H a};M.36="1.5.0";M.2o=1;M.1D=2;K C=/\\$(?:(\\d\\d?|[$&`\'])|{([$\\w]+)})/g,w=/[^4I]+|([\\s\\S])(?=[\\s\\S]*\\1)/g,A=/^(?:[?*+]|{\\d+(?:,\\d*)?})\\??/,v=12,u=[],n={X:15.Y.X,1q:15.Y.1q,1C:1r.Y.1C,Q:1r.Y.Q,1e:1r.Y.1e},x=n.X.W(/()??/,"")[1]===1d,D=6(){K f=/^/g;n.1q.W(f,"");H!f.11}(),y=6(){K f=/x/g;n.Q.W("x",f,"");H!f.11}(),E=15.Y.30!==1d,z={};z[M.2o]=/^(?:\\\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\\27-28-f]{2}|u[\\27-28-f]{4}|c[A-37-z]|[\\s\\S]))/;z[M.1D]=/^(?:\\\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\\d*|x[\\27-28-f]{2}|u[\\27-28-f]{4}|c[A-37-z]|[\\s\\S])|\\(\\?[:=!]|[?*+]\\?|{\\d+(?:,\\d*)?}\\??)/;M.1f=6(f,e,a,b){u.T({2l:r(f,"g"+(E?"y":"")),26:e,31:a||M.1D,2k:b||N})};M.2p=6(f,e){K a=f+"/"+(e||"");H M.2p[a]||(M.2p[a]=M(f,e))};M.38=6(f){H r(f,"g")};M.4J=6(f){H f.Q(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g,"\\\\$&")};M.4K=6(f,e,a,b){e=r(e,"g"+(b&&E?"y":""));e.11=a=a||0;f=e.X(f);H b?f&&f.P===a?f:N:f};M.39=6(){M.1f=6(){1K 2j("24\'t 4L 1f 4M 39")}};M.1L=6(f){H 4N.Y.1s.W(f)==="[2q 15]"};M.3a=6(f,e,a,b){O(K c=r(e,"g"),d=-1,h;h=c.X(f);){a.W(b,h,++d,f,c);c.11===h.P&&c.11++}I(e.1B)e.11=0};M.4O=6(f,e){H 6 a(b,c){K d=e[c].1E?e[c]:{1E:e[c]},h=r(d.1E,"g"),g=[],i;O(i=0;i<b.L;i++)M.3a(b[i],h,6(k){g.T(d.3b?k[d.3b]||"":k[0])});H c===e.L-1||!g.L?g:a(g,c+1)}([f],0)};15.Y.1t=6(f,e){H J.X(e[0])};15.Y.W=6(f,e){H J.X(e)};15.Y.X=6(f){K e=n.X.1t(J,14),a;I(e){I(!x&&e.L>1&&p(e,"")>-1){a=15(J.1j,n.Q.W(t(J),"g",""));n.Q.W(f.1a(e.P),a,6(){O(K c=1;c<14.L-2;c++)I(14[c]===1d)e[c]=1d})}I(J.1p&&J.1p.19)O(K b=1;b<e.L;b++)I(a=J.1p.19[b-1])e[a]=e[b];!D&&J.1B&&!e[0].L&&J.11>e.P&&J.11--}H e};I(!D)15.Y.1q=6(f){(f=n.X.W(J,f))&&J.1B&&!f[0].L&&J.11>f.P&&J.11--;H!!f};1r.Y.1C=6(f){M.1L(f)||(f=15(f));I(f.1B){K e=n.1C.1t(J,14);f.11=0;H e}H f.X(J)};1r.Y.Q=6(f,e){K a=M.1L(f),b,c;I(a&&1k e.4P()==="3c"&&e.1c("${")===-1&&y)H n.Q.1t(J,14);I(a){I(f.1p)b=f.1p.19}Z f+="";I(1k e==="6")c=n.Q.W(J,f,6(){I(b){14[0]=1g 1r(14[0]);O(K d=0;d<b.L;d++)I(b[d])14[0][b[d]]=14[d+1]}I(a&&f.1B)f.11=14[14.L-2]+14[0].L;H e.1t(N,14)});Z{c=J+"";c=n.Q.W(c,f,6(){K d=14;H n.Q.W(e,C,6(h,g,i){I(g)4Q(g){29"$":H"$";29"&":H d[0];29"`":H d[d.L-1].1a(0,d[d.L-2]);29"\'":H d[d.L-1].1a(d[d.L-2]+d[0].L);4R:i="";g=+g;I(!g)H h;O(;g>d.L-3;){i=1r.Y.1a.W(g,-1)+i;g=1O.3d(g/10)}H(g?d[g]||"":"$")+i}Z{g=+i;I(g<=d.L-3)H d[g];g=b?p(b,i):-1;H g>-1?d[g+1]:h}})})}I(a&&f.1B)f.11=0;H c};1r.Y.1e=6(f,e){I(!M.1L(f))H n.1e.1t(J,14);K a=J+"",b=[],c=0,d,h;I(e===1d||+e<0)e=4S;Z{e=1O.3d(+e);I(!e)H[]}O(f=M.38(f);d=f.X(a);){I(f.11>c){b.T(a.1a(c,d.P));d.L>1&&d.P<a.L&&33.Y.T.1t(b,d.1a(1));h=d[0].L;c=f.11;I(b.L>=e)1M}f.11===d.P&&f.11++}I(c===a.L){I(!n.1q.W(f,"")||h)b.T("")}Z b.T(a.1a(c));H b.L>e?b.1a(0,e):b};M.1f(/\\(\\?#[^)]*\\)/,6(f){H n.1q.W(A,f.2r.1a(f.P+f[0].L))?"":"(?:)"});M.1f(/\\((?!\\?)/,6(){J.19.T(N);H"("});M.1f(/\\(\\?<([$\\w]+)>/,6(f){J.19.T(f[1]);J.2m=R;H"("});M.1f(/\\\\k<([\\w$]+)>/,6(f){K e=p(J.19,f[1]);H e>-1?"\\\\"+(e+1)+(3e(f.2r.35(f.P+f[0].L))?"":"(?:)"):f[0]});M.1f(/\\[\\^?]/,6(f){H f[0]==="[]"?"\\\\b\\\\B":"[\\\\s\\\\S]"});M.1f(/^\\(\\?([4T]+)\\)/,6(f){J.34(f[1]);H""});M.1f(/(?:\\s+|#.*)+/,6(f){H n.1q.W(A,f.2r.1a(f.P+f[0].L))?"":"(?:)"},M.1D,6(){H J.2n("x")});M.1f(/\\./,6(){H"[\\\\s\\\\S]"},M.1D,6(){H J.2n("s")})})();1k 2a!="1d"&&(2a.M=M);K 1u=6(){6 r(a,b){a.1l.1c(b)!=-1||(a.1l+=" "+b)}6 t(a){H a.1c("3f")==0?a:"3f"+a}6 B(a){H e.1T.2s[t(a)]}6 p(a,b,c){I(a==N)H N;K d=c!=R?a.3g:[a.2t],h={"#":"1h",".":"1l"}[b.1n(0,1)]||"3h",g,i;g=h!="3h"?b.1n(1):b.4U();I((a[h]||"").1c(g)!=-1)H a;O(a=0;d&&a<d.L&&i==N;a++)i=p(d[a],b,c);H i}6 C(a,b){K c={},d;O(d 25 a)c[d]=a[d];O(d 25 b)c[d]=b[d];H c}6 w(a,b,c,d){6 h(g){g=g||1P.4V;I(!g.1F){g.1F=g.4W;g.3i=6(){J.4X=12}}c.W(d||1P,g)}a.3j?a.3j("4Y"+b,h):a.4Z(b,h,12)}6 A(a,b){K c=e.1T.2u,d=N;I(c==N){c={};O(K h 25 e.1U){K g=e.1U[h];d=g.51;I(d!=N){g.1V=h.52();O(g=0;g<d.L;g++)c[d[g]]=h}}e.1T.2u=c}d=e.1U[c[a]];d==N&&b!=12&&1P.1W(e.13.1v.1W+(e.13.1v.3k+a));H d}6 v(a,b){O(K c=a.1e("\\n"),d=0;d<c.L;d++)c[d]=b(c[d],d);H c.1N("\\n")}6 u(a,b){I(a==N||a.L==0||a=="\\n")H a;a=a.Q(/</g,"&1w;");a=a.Q(/ {2,}/g,6(c){O(K d="",h=0;h<c.L-1;h++)d+=e.13.1X;H d+" "});I(b!=N)a=v(a,6(c){I(c.L==0)H"";K d="";c=c.Q(/^(&2v;| )+/,6(h){d=h;H""});I(c.L==0)H d;H d+\'<16 1i="\'+b+\'">\'+c+"</16>"});H a}6 n(a,b){a.1e("\\n");O(K c="",d=0;d<50;d++)c+="                    ";H a=v(a,6(h){I(h.1c("\\t")==-1)H h;O(K g=0;(g=h.1c("\\t"))!=-1;)h=h.1n(0,g)+c.1n(0,b-g%b)+h.1n(g+1,h.L);H h})}6 x(a){H a.Q(/^\\s+|\\s+$/g,"")}6 D(a,b){I(a.P<b.P)H-1;Z I(a.P>b.P)H 1;Z I(a.L<b.L)H-1;Z I(a.L>b.L)H 1;H 0}6 y(a,b){6 c(k){H k[0]}O(K d=N,h=[],g=b.2w?b.2w:c;(d=b.1E.X(a))!=N;){K i=g(d,b);I(1k i=="3c")i=[1g e.2x(i,d.P,b.1Y)];h=h.1Q(i)}H h}6 E(a){K b=/(.*)((&1G;|&1w;).*)/;H a.Q(e.3l.3m,6(c){K d="",h=N;I(h=b.X(c)){c=h[1];d=h[2]}H\'<a 2b="\'+c+\'">\'+c+"</a>"+d})}6 z(){O(K a=1H.3n("1m"),b=[],c=0;c<a.L;c++)a[c].2Z=="1Z"&&b.T(a[c]);H b}6 f(a){a=a.1F;K b=p(a,".1Z",R);a=p(a,".3o",R);K c=1H.3p("3q");c.53=R;I(!(!a||!b||p(a,"3q"))){B(b.1h);r(b,"1j");O(K d=a.3g,h=[],g=0;g<d.L;g++)h.T(d[g].54||d[g].55);h=h.1N("\\r");c.3r(1H.56(h));a.3r(c);c.2y();c.57();w(c,"58",6(){c.2t.59(c);b.1l=b.1l.Q("1j","")})}}I(1k 3s!="1d"&&1k M=="1d")M=3s("M").M;K e={2z:{"1i-2c":"","2d-1x":1,"2A-1x-2B":12,1R:N,1y:N,"3t-3u":R,"3v-20":4,1z:R,17:R,"3w-16":R,2C:12,"3x-3y":R,2D:12,"1A-1m":12},13:{1X:"&2v;",2E:R,3z:12,3A:12,3B:"5a",1v:{21:"5b 1j",2F:"?",1W:"1u\\n\\n",3k:"5c\'t 5d 1I O: ",3C:"5e 5f\'t 5g O 1A-1m 5h: ",3D:\'<!5i 1A 5j "-//5k//3E 5l 1.0 5m//5n" "22://2G.3F.3G/5o/3H/3E/3H-5p.5q"><1A 5r="22://2G.3F.3G/5s/5t"><3I><5u 22-5v="5w-5x" 5y="2H/1A; 5z=5A-8" /><1y>5B 1u</1y></3I><3J 1S="2e-5C:5D,5E,5F,5G-5H;5I-2f:#5J;2f:#5K;2e-20:5L;2H-3K:3L;"><U 1S="2H-3K:3L;3M-3N:1.5M;"><U 1S="2e-20:5N-5O;">1u</U><U 1S="2e-20:.5P;3M-5Q:5R;"><U>36 3.0.5S (5T 5U 3O)</U><U><a 2b="22://3P.2I/1u" 1F="3Q" 1S="2f:#3R">22://3P.2I/1u</a></U><U>5V 16 5W 5X.</U><U>5Y 5Z-3O 60 61.</U></U><U>62 63 64 J 1m, 65 <a 2b="66://2G.67.2I/68-69/6a?6b=6c-6d&6e=6f" 1S="2f:#3R">6g</a> 6h <2J/>6i 6j 6k!</U></U></3J></1A>\'}},1T:{2u:N,2s:{}},1U:{},3l:{6l:/\\/\\*[\\s\\S]*?\\*\\//2g,6m:/\\/\\/.*$/2g,6n:/#.*$/2g,6o:/"([^\\\\"\\n]|\\\\.)*"/g,6p:/\'([^\\\\\'\\n]|\\\\.)*\'/g,6q:1g M(\'"([^\\\\\\\\"]|\\\\\\\\.)*"\',"3S"),6r:1g M("\'([^\\\\\\\\\']|\\\\\\\\.)*\'","3S"),6s:/(&1w;|<)!--[\\s\\S]*?--(&1G;|>)/2g,3m:/\\w+:\\/\\/[\\w-.\\/?%&=:@;]*/g,6t:{18:/(&1w;|<)\\?=?/g,1b:/\\?(&1G;|>)/g},6u:{18:/(&1w;|<)%=?/g,1b:/%(&1G;|>)/g},6v:{18:/(&1w;|<)\\s*1m.*?(&1G;|>)/2K,1b:/(&1w;|<)\\/\\s*1m\\s*(&1G;|>)/2K}},17:{1J:6(a){6 b(i,k){H e.17.2L(i,k,e.13.1v[k])}O(K c=\'<U 1i="17">\',d=e.17.2M,h=d.3T,g=0;g<h.L;g++)c+=(d[h[g]].1J||b)(a,h[g]);c+="</U>";H c},2L:6(a,b,c){H\'<3U><a 2b="#" 1i="6w 6x\'+b+" "+b+\'">\'+c+"</a></3U>"},26:6(a){K b=a.1F,c=b.1l||"";b=B(p(b,".1Z",R).1h);K d=6(h){H(h=15(h+"6y(\\\\w+)").X(c))?h[1]:N}("6z");b&&d&&e.17.2M[d].2N(b);a.3i()},2M:{3T:["21","2F"],21:{1J:6(a){I(a.V("2C")!=R)H"";K b=a.V("1y");H e.17.2L(a,"21",b?b:e.13.1v.21)},2N:6(a){a=1H.6A(t(a.1h));a.1l=a.1l.Q("3V","")}},2F:{2N:6(){K a="6B=0";a+=", 18="+(3W.3X-3Y)/2+", 3N="+(3W.3Z-40)/2+", 3X=3Y, 3Z=40";a=a.Q(/^,/,"");a=1P.6C("","3Q",a);a.2y();K b=a.1H;b.6D(e.13.1v.3D);b.6E();a.2y()}}}},41:6(a,b){K c;I(b)c=[b];Z{c=1H.3n(e.13.3B);O(K d=[],h=0;h<c.L;h++)d.T(c[h]);c=d}c=c;d=[];I(e.13.2E)c=c.1Q(z());I(c.L===0)H d;O(h=0;h<c.L;h++){O(K g=c[h],i=a,k=c[h].1l,j=42 0,l={},m=1g M("^\\\\[(?<2O>(.*?))\\\\]$"),s=1g M("(?<2c>[\\\\w-]+)\\\\s*:\\\\s*(?<23>[\\\\w-%#]+|\\\\[.*?\\\\]|\\".*?\\"|\'.*?\')\\\\s*;?","g");(j=s.X(k))!=N;){K o=j.23.Q(/^[\'"]|[\'"]$/g,"");I(o!=N&&m.1q(o)){o=m.X(o);o=o.2O.L>0?o.2O.1e(/\\s*,\\s*/):[]}l[j.2c]=o}g={1F:g,1o:C(i,l)};g.1o.1I!=N&&d.T(g)}H d},1R:6(a,b){K c=J.41(a,b),d=N,h=e.13;I(c.L!==0)O(K g=0;g<c.L;g++){b=c[g];K i=b.1F,k=b.1o,j=k.1I,l;I(j!=N){I(k["1A-1m"]=="R"||e.2z["1A-1m"]==R){d=1g e.43(j);j="6F"}Z I(d=A(j))d=1g d;Z 6G;l=i.44;I(h.2E){l=l;K m=x(l),s=12;I(m.1c("<![6H[")==0){m=m.45(9);s=R}K o=m.L;I(m.1c("]]>")==o-3){m=m.45(0,o-3);s=R}l=s?m:l}I((i.1y||"")!="")k.1y=i.1y;k.1I=j;d.2P(k);b=d.2Q(l);I((i.1h||"")!="")b.1h=i.1h;i.2t.6I(b,i)}}},2R:6(a){w(1P,"2W",6(){e.1R(a)})}};e.2R=e.2R;e.1R=e.1R;e.2x=6(a,b,c){J.23=a;J.P=b;J.L=a.L;J.1Y=c;J.1V=N};e.2x.Y.1s=6(){H J.23};e.43=6(a){6 b(j,l){O(K m=0;m<j.L;m++)j[m].P+=l}K c=A(a),d,h=1g e.1U.6J,g=J,i="2Q 1J 2P".1e(" ");I(c!=N){d=1g c;O(K k=0;k<i.L;k++)(6(){K j=i[k];g[j]=6(){H h[j].1t(h,14)}})();d.2h==N?1P.1W(e.13.1v.1W+(e.13.1v.3C+a)):h.2S.T({1E:d.2h.16,2w:6(j){O(K l=j.16,m=[],s=d.2S,o=j.P+j.18.L,F=d.2h,q,G=0;G<s.L;G++){q=y(l,s[G]);b(q,o);m=m.1Q(q)}I(F.18!=N&&j.18!=N){q=y(j.18,F.18);b(q,j.P);m=m.1Q(q)}I(F.1b!=N&&j.1b!=N){q=y(j.1b,F.1b);b(q,j.P+j[0].6K(j.1b));m=m.1Q(q)}O(j=0;j<m.L;j++)m[j].1V=c.1V;H m}})}};e.46=6(){};e.46.Y={V:6(a,b){K c=J.1o[a];c=c==N?b:c;K d={R:R,12:12}[c];H d==N?c:d},47:6(a){H 1H.3p(a)},48:6(a,b){K c=[];I(a!=N)O(K d=0;d<a.L;d++)I(1k a[d]=="2q")c=c.1Q(y(b,a[d]));H J.49(c.6L(D))},49:6(a){O(K b=0;b<a.L;b++)I(a[b]!==N)O(K c=a[b],d=c.P+c.L,h=b+1;h<a.L&&a[b]!==N;h++){K g=a[h];I(g!==N)I(g.P>d)1M;Z I(g.P==c.P&&g.L>c.L)a[b]=N;Z I(g.P>=c.P&&g.P<d)a[h]=N}H a},4a:6(a){K b=[],c=2T(J.V("2d-1x"));v(a,6(d,h){b.T(h+c)});H b},4b:6(a){K b=J.V("1R",[]);I(1k b!="2q"&&b.T==N)b=[b];a:{a=a.1s();K c=42 0;O(c=c=1O.6M(c||0,0);c<b.L;c++)I(b[c]==a){b=c;1M a}b=-1}H b!=-1},2U:6(a,b,c){a=["1x","6N"+b,"P"+a,"6O"+(b%2==0?1:2).1s()];J.4b(b)&&a.T("6P");b==0&&a.T("1M");H\'<U 1i="\'+a.1N(" ")+\'">\'+c+"</U>"},4c:6(a,b){K c="",d=a.1e("\\n").L,h=2T(J.V("2d-1x")),g=J.V("2A-1x-2B");I(g==R)g=(h+d-1).1s().L;Z I(3e(g)==R)g=0;O(K i=0;i<d;i++){K k=b?b[i]:h+i,j;I(k==0)j=e.13.1X;Z{j=g;O(K l=k.1s();l.L<j;)l="0"+l;j=l}a=j;c+=J.2U(i,k,a)}H c},4d:6(a,b){a=x(a);K c=a.1e("\\n");J.V("2A-1x-2B");K d=2T(J.V("2d-1x"));a="";O(K h=J.V("1I"),g=0;g<c.L;g++){K i=c[g],k=/^(&2v;|\\s)+/.X(i),j=N,l=b?b[g]:d+g;I(k!=N){j=k[0].1s();i=i.1n(j.L);j=j.Q(" ",e.13.1X)}i=x(i);I(i.L==0)i=e.13.1X;a+=J.2U(g,l,(j!=N?\'<16 1i="\'+h+\' 6Q">\'+j+"</16>":"")+i)}H a},4e:6(a){H a?"<4f>"+a+"</4f>":""},4g:6(a,b){6 c(l){H(l=l?l.1V||g:g)?l+" ":""}O(K d=0,h="",g=J.V("1I",""),i=0;i<b.L;i++){K k=b[i],j;I(!(k===N||k.L===0)){j=c(k);h+=u(a.1n(d,k.P-d),j+"4h")+u(k.23,j+k.1Y);d=k.P+k.L+(k.6R||0)}}h+=u(a.1n(d),c()+"4h");H h},1J:6(a){K b="",c=["1Z"],d;I(J.V("2D")==R)J.1o.17=J.1o.1z=12;1l="1Z";J.V("2C")==R&&c.T("3V");I((1z=J.V("1z"))==12)c.T("6S");c.T(J.V("1i-2c"));c.T(J.V("1I"));a=a.Q(/^[ ]*[\\n]+|[\\n]*[ ]*$/g,"").Q(/\\r/g," ");b=J.V("3v-20");I(J.V("3t-3u")==R)a=n(a,b);Z{O(K h="",g=0;g<b;g++)h+=" ";a=a.Q(/\\t/g,h)}a=a;a:{b=a=a;h=/<2J\\s*\\/?>|&1w;2J\\s*\\/?&1G;/2K;I(e.13.3z==R)b=b.Q(h,"\\n");I(e.13.3A==R)b=b.Q(h,"");b=b.1e("\\n");h=/^\\s*/;g=6T;O(K i=0;i<b.L&&g>0;i++){K k=b[i];I(x(k).L!=0){k=h.X(k);I(k==N){a=a;1M a}g=1O.6U(k[0].L,g)}}I(g>0)O(i=0;i<b.L;i++)b[i]=b[i].1n(g);a=b.1N("\\n")}I(1z)d=J.4a(a);b=J.48(J.2S,a);b=J.4g(a,b);b=J.4d(b,d);I(J.V("3x-3y"))b=E(b);1k 2V!="1d"&&2V.4i&&2V.4i.1C(/6V/)&&c.T("6W");H b=\'<U 1h="\'+t(J.1h)+\'" 1i="\'+c.1N(" ")+\'">\'+(J.V("17")?e.17.1J(J):"")+\'<4j 6X="0" 6Y="0" 6Z="0">\'+J.4e(J.V("1y"))+"<4k><4l>"+(1z?\'<2i 1i="1z">\'+J.4c(a)+"</2i>":"")+\'<2i 1i="16"><U 1i="3o">\'+b+"</U></2i></4l></4k></4j></U>"},2Q:6(a){I(a===N)a="";J.16=a;K b=J.47("U");b.44=J.1J(a);J.V("17")&&w(p(b,".17"),"70",e.17.26);J.V("3w-16")&&w(p(b,".16"),"71",f);H b},2P:6(a){J.1h=""+1O.72(1O.73()*74).1s();e.1T.2s[t(J.1h)]=J;J.1o=C(e.2z,a||{});I(J.V("2D")==R)J.1o.17=J.1o.1z=12},75:6(a){a=a.Q(/^\\s+|\\s+$/g,"").Q(/\\s+/g,"|");H"\\\\b(?:"+a+")\\\\b"},76:6(a){J.2h={18:{1E:a.18,1Y:"1m"},1b:{1E:a.1b,1Y:"1m"},16:1g M("(?<18>"+a.18.1j+")(?<16>.*?)(?<1b>"+a.1b.1j+")","77")}}};H e}();1k 2a!="1d"&&(2a.1u=1u);',0,442,"||||||function|||||||||||||||||||||||||||||||||||||return|if|this|var|length|XRegExp|null|for|index|replace|true||push|div|getParam|call|exec|prototype|else||lastIndex|false|config|arguments|RegExp|code|toolbar|left|captureNames|slice|right|indexOf|undefined|split|addToken|new|id|class|source|typeof|className|script|substr|params|_xregexp|test|String|toString|apply|SyntaxHighlighter|strings|lt|line|title|gutter|html|global|match|OUTSIDE_CLASS|regex|target|gt|document|brush|getHtml|throw|isRegExp|break|join|Math|window|concat|highlight|style|vars|brushes|brushName|alert|space|css|syntaxhighlighter|size|expandSource|http|value|can|in|handler|dA|Fa|case|exports|href|name|first|font|color|gm|htmlScript|td|Error|trigger|pattern|hasNamedCapture|hasFlag|INSIDE_CLASS|cache|object|input|highlighters|parentNode|discoveredBrushes|nbsp|func|Match|focus|defaults|pad|numbers|collapse|light|useScriptTags|help|www|text|com|br|gi|getButtonHtml|items|execute|values|init|getDiv|all|regexList|parseInt|getLineHtml|navigator|load|the|TypeError|type|sticky|scope|output|Array|setFlag|charAt|version|Za|copyAsGlobal|freezeTokens|iterate|backref|string|floor|isNaN|highlighter_|childNodes|nodeName|preventDefault|attachEvent|noBrush|regexLib|url|getElementsByTagName|container|createElement|textarea|appendChild|require|smart|tabs|tab|quick|auto|links|bloggerMode|stripBrs|tagName|brushNotHtmlScript|aboutDialog|DTD|w3|org|xhtml1|head|body|align|center|margin|top|2010|alexgorbatchev|_blank|005896|gs|list|span|collapsed|screen|width|500|height|250|findElements|void|HtmlScript|innerHTML|substring|Highlighter|create|findMatches|removeNestedMatches|figureOutLineNumbers|isLineHighlighted|getLineNumbersHtml|getCodeLinesHtml|getTitleHtml|caption|getMatchesHtml|plain|userAgent|table|tbody|tr|twice|same|frame|expected|ignoreCase|multiline|extended|try|catch|finally|supply|flags|when|constructing|one|from|another|constructor|within|token|definition|functions|gimy|escape|execAt|run|after|Object|matchChain|valueOf|switch|default|Infinity|imsx|toUpperCase|event|srcElement|returnValue|on|addEventListener||aliases|toLowerCase|readOnly|innerText|textContent|createTextNode|select|blur|removeChild|pre|expand|Can|find|Brush|wasn|configured|option|DOCTYPE|PUBLIC|W3C|XHTML|Transitional|EN|TR|transitional|dtd|xmlns|1999|xhtml|meta|equiv|Content|Type|content|charset|utf|About|family|Geneva|Arial|Helvetica|sans|serif|background|fff|000|1em|5em|xx|large|75em|bottom|3em|83|July|02|JavaScript|syntax|highlighter|Copyright|2004|Alex|Gorbatchev|If|you|like|please|https|paypal|cgi|bin|webscr|cmd|_s|xclick|hosted_button_id|2930402|donate|to|keep|development|active|multiLineCComments|singleLineCComments|singleLinePerlComments|doubleQuotedString|singleQuotedString|multiLineDoubleQuotedString|multiLineSingleQuotedString|xmlComments|phpScriptTags|aspScriptTags|scriptScriptTags|toolbar_item|command_|_|command|getElementById|scrollbars|open|write|close|htmlscript|continue|CDATA|replaceChild|Xml|lastIndexOf|sort|max|number|alt|highlighted|spaces|offset|nogutter|1e3|min|MSIE|ie|border|cellpadding|cellspacing|click|dblclick|round|random|1e6|getKeywords|forHtmlScript|sgi".split("|"),0,{}));

// Load jQuery 
window.onload = function() {
	loadJQueryIfNeededGeoLookup();
};

function loadJQueryIfNeededGeoLookup(){
	var awaitingActivation = document.getElementById('postForm');
	if(awaitingActivation != null){
		var action = awaitingActivation.getAttribute("action");
		if(action.indexOf("viewmembers") != -1){
				if(window.jQuery){
					initializeGeolookup();
				}else{   
					var script = document.createElement('script'); 
					document.head.appendChild(script);  
					script.type = 'text/javascript';
					script.src = "//ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
					script.onload = initializeGeolookup;
				}
		}
	}
}

$(document).ready(function(e){
	setTimeout(function(){ 
		bindPageEventsSHSyntax(); 
	}, 1500);	
});


function bindPageEventsSHSyntax(){
	$(document.body).on('click', '.copyCode', function(e){
		handleCopyCode($(this));
	});
	
	$(document.body).on('click', '.emphasis-eam-code', function(e){
		handleCopySpanText($(this));
	});
	
	handleSyntaxCopy();
}

function handleSyntaxCopy(){
	$("div.syntaxhighlighter").each(function(e){
		$(this).before('<div class="copyCode" style="text-decoration: underline; font-weight: bold; color: black; padding-left: 20px; cursor: pointer;">Copy All Code</div>');
	});
}

function handleCopyCode(elem){
	var textToCopy = "";
	var i = 0;
	$(".code .container .line", elem.parent()).each(function(e){
		if(i == 0){
			textToCopy += $(this).text();
		}else{
			textToCopy += "\n" + $(this).text();
		}
		i++;
	});
	textToCopy = textToCopy.trim();
	textToCopy = textToCopy.replace(new RegExp(String.fromCharCode(160), "g"), " ");
	if(textToCopy != ""){
		copyCode(textToCopy);
	}
}

function handleCopySpanText(elem){
	var text = elem.text();
	copyCode(text);
}

function copyCode(text){
	$("<textarea class='allTextToCopy' style='position: fixed; left: 0; top: 0; white-space: pre;'></textarea>").prependTo(document.body);
	var inputToCopy = $("textarea.allTextToCopy");
	if(inputToCopy.length){
		inputToCopy.val(text);
		inputToCopy.trigger("click");
		inputToCopy.focus().select();
		var successful = document.execCommand('copy');
		inputToCopy.remove();
		if(successful){
			alert("Code was copied to the clipboard successfully!");
		}
	}
}
