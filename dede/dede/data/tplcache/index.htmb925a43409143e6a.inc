<?php
$z[0]=Array("global","",124,150);
$z[0][4]=array();
$z[0][4]['name']="cfg_webname";
$z[1]=Array("global","",194,224);
$z[1][4]=array();
$z[1][4]['name']="cfg_description";
$z[2]=Array("global","",261,288);
$z[2][4]=array();
$z[2][4]['name']="cfg_keywords";
$z[3]=Array("include","",987,1022);
$z[3][4]=array();
$z[3][4]['filename']="head.htm";
$z[4]=Array("arclist","\r\n    <div class=\"item\"><a><img src=\"[field:picname/]\" alt=\"[field:title/]\" ></a></div>\r\n    ",1189,1363);
$z[4][4]=array();
$z[4][4]['typeid']="19";
$z[4][4]['row']="3";
$z[4][4]['titlelen']="50";
$z[4][4]['orderby']="pubdate";
$z[5]=Array("type","  \r\n      [field:typename/]",1572,1633);
$z[5][4]=array();
$z[5][4]['typeid']="3";
$z[6]=Array("channel"," <a href=\"[field:typeurl/]\"> [field:typename/] </a>",1695,1797);
$z[6][4]=array();
$z[6][4]['type']="son";
$z[6][4]['typeid']="3";
$z[7]=Array("arclist","\r\n      <div class=\"xl6 xs6 xm3 xb3\">\r\n        <div class=\"proitem\"> <a href=\"[field:arcurl/]\"> <img src=\"[field:picname/]\" alt=\"[field:title/]\" class=\"fadein\">\r\n          <h3 class=\"protext\">[field:title/]</h3>\r\n          </a> </div>\r\n      </div>\r\n      ",2028,2364);
$z[7][4]=array();
$z[7][4]['typeid']="3";
$z[7][4]['row']="8";
$z[7][4]['titlelen']="50";
$z[7][4]['orderby']="pubdate";
$z[8]=Array("type"," <a class=\"button more-btn2\" href=\"[field:typelink/]\">READ MORE → </a>",2468,2574);
$z[8][4]=array();
$z[8][4]['typeid']="3";
$z[9]=Array("type","\r\n    <div class=\"hidden-l hidden-s xm4 xb4 newsitem padding-big-top\"> <img src=\"[field:typeimg/]\" style=\"width:100%\"/> </div>\r\n    ",2737,2903);
$z[9][4]=array();
$z[9][4]['typeid']="1";
$z[10]=Array("type","\r\n      <h1 class=\"padding-bottom text-center s1\">[field:typename/]</h1>\r\n      <h2 class=\"padding-big-bottom text-center s1\"><span>——————  [field:typenameen/]  ——————</span></h2>\r\n      ",2951,3196);
$z[10][4]=array();
$z[10][4]['typeid']="1";
$z[11]=Array("sql"," \r\n        \r\n        [field:content  function='cn_substr(html2text(@me),800)'/]...\r\n        \r\n        ",3267,3440);
$z[11][4]=array();
$z[11][4]['sql']="Select content from dede_arctype where id=1";
$z[12]=Array("type"," <a class=\"margin-big-bottom\" href=\"[field:typelink/]\"> [MORE + ]</a>",3440,3543);
$z[12][4]=array();
$z[12][4]['typeid']="1";
$z[13]=Array("type","\r\n    <div class=\"biaoti\"> [field:typename/] <span>[field:typenameen/]</span> </div>\r\n    ",3757,3881);
$z[13][4]=array();
$z[13][4]['typeid']="9";
$z[14]=Array("arclist","\r\n      <div class=\"xl6 xs6 xm3 xb3 casebox\">\r\n        <div class=\"caseitem\"> <a href=\"[field:arcurl/]\"> <img src=\"[field:picname/]\" alt=\"[field:title/]\" >\r\n          <h3>[field:title/]</h3>\r\n          </a> </div>\r\n      </div>\r\n      ",3929,4244);
$z[14][4]=array();
$z[14][4]['typeid']="9";
$z[14][4]['row']="4";
$z[14][4]['titlelen']="50";
$z[14][4]['orderby']="pubdate";
$z[15]=Array("type"," <a class=\"button more-btn\" href=\"[field:typelink/]\">READ MORE → </a>",4351,4456);
$z[15][4]=array();
$z[15][4]['typeid']="9";
$z[16]=Array("type","\r\n    <div class=\"biaoti\"> [field:typename/] <span>[field:typenameen/] </span> </div>\r\n    ",4663,4788);
$z[16][4]=array();
$z[16][4]['typeid']="2";
$z[17]=Array("arclist","\r\n          <li class=\"xl12 xs12 xm6 xb6 padding-big news-item2\"> <a href=\"[field:arcurl/]\" title=\"[field:title/]\">\r\n            <div class=\"news-tit \">\r\n              <div class=\"float-left news-span1\">\r\n                <div class=\"news-time\">\r\n                  <div class=\"news-time-date\"> <span>[field:pubdate function=\"MyDate('m',@me)\"/]</span>/<span>[field:pubdate function=\"MyDate('d',@me)\"/]</span> </div>\r\n                  <div class=\"news-time-year\">[field:pubdate function=\"MyDate('Y',@me)\"/]</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"float-left news-span2\">\r\n                <div class=\"news-action \">\r\n                  <p class=\" news-title \">[field:title/]</p>\r\n                  <p class=\"news-desc \">[field:description function=\"cn_substr(@me,80)\"/]...</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            </a> </li>\r\n          ",4885,5878);
$z[17][4]=array();
$z[17][4]['typeid']="2";
$z[17][4]['row']="6";
$z[17][4]['titlelen']="50";
$z[17][4]['orderby']="pubdate";
$z[18]=Array("include","",6001,6038);
$z[18][4]=array();
$z[18][4]['filename']="footer.htm";

?>