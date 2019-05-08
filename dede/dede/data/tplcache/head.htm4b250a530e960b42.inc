<?php
$z[0]=Array("global","",333,354);
$z[0][4]=array();
$z[0][4]['name']="cfg_mc";
$z[1]=Array("global","",653,679);
$z[1][4]=array();
$z[1][4]['name']="cfg_webname";
$z[2]=Array("global","",850,871);
$z[2][4]=array();
$z[2][4]['name']="cfg_yx";
$z[3]=Array("global","",966,987);
$z[3][4]=array();
$z[3][4]['name']="cfg_dh";
$z[4]=Array("field","(@me==\"\")? @me=\" class='active' \":@me=\"\";",1272,1363);
$z[4][4]=array();
$z[4][4]['name']="typeid";
$z[4][4]['runphp']="yes";
$z[5]=Array("channelartlist","\r\n        <li class='{dede:field.currentstyle/}'><a href=\"{dede:field name='typeurl'/}\" class=\"topa\">{dede:field name='typename'/}</a>\r\n          <ul {dede:field name=typeid runphp=\"yes\"}\r\nglobal \$dsql;\r\n\$sql = \"SELECT id From `#@__arctype` WHERE reid='@me' And ishidden<>1 order by sortrank asc limit 0, 100 \";\r\n\$row = \$dsql->\r\n            GetOne(\$sql);\r\n            @me=is_array(\$row)?'class=\"drop-menu\"':'style=\"display:none\"';\r\n            {/dede:field}\r\n            >\r\n            {dede:channel type='son' noself='yes'}\r\n            <li><a href=\"[field:typeurl/]\">[field:typename/]</a></li>\r\n            {/dede:channel}\r\n          </ul>\r\n        </li>\r\n        ",1421,2173);
$z[5][4]=array();
$z[5][4]['typeid']="top";
$z[5][4]['currentstyle']="active";
$z[5][4]['row']="7";
$z[6]=Array("global","",2296,2321);
$z[6][4]=array();
$z[6][4]['name']="cfg_cmsurl";

?>